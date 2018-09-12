#!bin/sh

branch=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)

git checkout develop
git merge $branch
git push origin develop
git push origin --delete $branch
