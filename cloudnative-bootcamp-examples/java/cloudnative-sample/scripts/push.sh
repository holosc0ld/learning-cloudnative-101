#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_values_yaml() {
  git clone https://github.com/ibm-cloud-architecture/cloudnative_sample_app_deploy.git
  git checkout master
  cd cloudnative_sample_app_deploy
  cd chart/cloudnativesampleapp
  sed -i.bak '/^image/,/^service/ s/\(\s*tag\s*:\s*\).*/\ \ tag: '$COMMIT'/g' values.yaml
  rm values.yaml.bak
  git add . *.yaml
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

push_files() {
  git remote rm origin
  git remote add origin https://${GH_USER}:${GH_TOKEN}@github.com/ibm-cloud-architecture/cloudnative_sample_app_deploy.git > /dev/null 2>&1
  git push origin master --quiet
}

setup_git
commit_values_yaml

if [ $? -eq 0 ]; then
  echo "Uploading to GitHub"
  push_files
else
  echo "No changes"
fi
