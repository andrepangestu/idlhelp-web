#!/usr/bin/env bash
set -euo pipefail

fail() {
  printf '%s\n' "$*" >&2
  exit 1
}

valid_name() {
  [[ "$1" =~ ^[0-9a-f]{40}(-[0-9]+-[0-9]+)?$ ]]
}

valid_target() {
  [[ "$1" == releases/* ]] && valid_name "${1#releases/}"
}

current_target() {
  test -L "$base/current" || fail 'Current release symlink is missing'
  local target
  target=$(readlink "$base/current")
  valid_target "$target" || fail 'Current release symlink has an unexpected target'
  test -f "$base/$target/index.html" || fail 'Current release has no index.html'
  printf '%s\n' "$target"
}

switch_current() {
  local target=$1
  local next_link="$base/current.next.$$"
  ln -s "$target" "$next_link"
  if [[ "$(uname -s)" == Darwin ]]; then
    mv -fh "$next_link" "$base/current"
  else
    mv -Tf "$next_link" "$base/current"
  fi
}

operation=${1:-}
base=${2:-}
base=${base%/}
test -d "$base/releases" || fail 'Release directory is missing'

case "$operation" in
  activate)
    release=${3:-}
    valid_name "$release" || fail 'Invalid release name'
    test -f "$base/releases/$release/index.html" || fail 'Release has no index.html'
    previous=$(current_target)
    switch_current "releases/$release"
    printf '%s\n' "$previous"
    ;;
  rollback)
    target=${3:-}
    valid_target "$target" || fail 'Invalid rollback target'
    test -f "$base/$target/index.html" || fail 'Rollback release has no index.html'
    current_target > /dev/null
    switch_current "$target"
    ;;
  prune)
    keep=${3:-}
    [[ "$keep" =~ ^[1-9][0-9]*$ ]] || fail 'Keep count must be positive'
    active=$(current_target)
    kept_others=0
    while IFS= read -r release_path; do
      release_path=${release_path%/}
      release=${release_path##*/}
      valid_name "$release" || continue
      test ! -L "$release_path" || continue
      if [[ "releases/$release" == "$active" ]]; then
        continue
      fi
      if (( kept_others < keep - 1 )); then
        kept_others=$((kept_others + 1))
      else
        rm -rf "$release_path"
      fi
    done < <(ls -td "$base"/releases/*/ 2>/dev/null)
    ;;
  *)
    fail 'Usage: release.sh activate|rollback|prune BASE ARG'
    ;;
esac
