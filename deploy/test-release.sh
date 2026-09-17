#!/usr/bin/env bash
set -euo pipefail

script_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
release_script="$script_dir/release.sh"
test_root=$(mktemp -d)
trap 'rm -rf "$test_root"' EXIT

old=$(printf '%040d' 1)
new="$(printf '%040d' 2)-100-1"
base="$test_root/activate"
mkdir -p "$base/releases/$old" "$base/releases/$new"
printf 'old\n' > "$base/releases/$old/index.html"
printf 'new\n' > "$base/releases/$new/index.html"
ln -s "releases/$old" "$base/current"

previous=$(bash "$release_script" activate "$base" "$new")
test "$previous" = "releases/$old"
test "$(readlink "$base/current")" = "releases/$new"
test "$(cat "$base/releases/$old/index.html")" = old

if bash "$release_script" activate "$base" "$(printf '%040d' 3)-101-1" > /dev/null 2>&1; then
  echo 'activate accepted a release without index.html' >&2
  exit 1
fi
test "$(readlink "$base/current")" = "releases/$new"

bash "$release_script" rollback "$base" "$previous"
test "$(readlink "$base/current")" = "releases/$old"
if bash "$release_script" rollback "$base" '../../outside' > /dev/null 2>&1; then
  echo 'rollback accepted a path outside releases' >&2
  exit 1
fi
test "$(readlink "$base/current")" = "releases/$old"

base="$test_root/prune"
mkdir -p "$base/releases"
for number in 1 2 3 4 5 6 7; do
  release="$(printf '%040d' "$number")-$number-1"
  mkdir -p "$base/releases/$release"
  printf '%s\n' "$number" > "$base/releases/$release/index.html"
  touch -t "20260917010$number" "$base/releases/$release"
done
active="$(printf '%040d' 1)-1-1"
ln -s "releases/$active" "$base/current"
bash "$release_script" prune "$base" 5
test "$(find "$base/releases" -mindepth 1 -maxdepth 1 -type d | wc -l | tr -d ' ')" = 5
test -d "$base/releases/$active"
test ! -d "$base/releases/$(printf '%040d' 2)-2-1"
test ! -d "$base/releases/$(printf '%040d' 3)-3-1"
for number in 4 5 6 7; do
  test -d "$base/releases/$(printf '%040d' "$number")-$number-1"
done

echo 'Release activation, rollback, and pruning passed.'
