#!/usr/bin/env bash
SOURCE_BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
VERSION=$(jq -r '.version' ./package.json )
APP=svc

# Only execute release from develop branch
if [ $SOURCE_BRANCH == 'develop' ]; then
    # push to current branch
    git add .
    git commit -m "${APP}-${VERSION}"
    git tag "${APP}${VERSION}" -m "${APP} version ${VERSION}"
    git push
    # create branch release and push image
    git checkout -b release
    npm install
    npm run dist
    docker login -u flaviorita -p $DOCKER_IO_PWD
    docker build -t flaviorita/lambdaorm-${APP}:${VERSION} .
    docker push flaviorita/lambdaorm-${APP}:${VERSION}
    # cd ./dist && npm publish
    git push --set-upstream origin release
    # merge main branch
    git checkout main
    git pull
    git merge release
    git push
    # merge source branch
    git checkout ${SOURCE_BRANCH}
    git pull
    git merge release
    git push
    # remove branch release local and remote
    git branch -d release
    git push origin --delete release
else
    echo "Error: The release must be executed from the develop branch and not from the ${SOURCE_BRANCH} branch."
    exit -1
fi;
