#!/bin/sh

echo "Checking out gh-pages"
git checkout gh-pages

echo "Merging master"
git merge master

echo "Pushing gh-pages"
git push origin gh-pages

echo "Checking out master"
git checkout master