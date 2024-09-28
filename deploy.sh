#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd build

# if you are deploying to a custom domain
 echo 'www.cv.eduardovaz.dev' > CNAME

# copy index.html to 404.html
cp index.html 404.html

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:eduardocvaz/curriculum-vitae.git master:gh-pages

cd -
