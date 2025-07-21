@echo off
set IMAGE_NAME=%1
set IMAGE_TAG=%2
set PORT=%3

if "%IMAGE_NAME%"=="" set IMAGE_NAME=belajar-react
if "%IMAGE_TAG%"=="" set IMAGE_TAG=latest
if "%PORT%"=="" set PORT=3000

echo Deploying %IMAGE_NAME%:%IMAGE_TAG% on port %PORT%

docker stop %IMAGE_NAME% 2>nul
docker rm %IMAGE_NAME% 2>nul

docker run -d --name %IMAGE_NAME% -p %PORT%:80 --restart unless-stopped %IMAGE_NAME%:%IMAGE_TAG%

echo Deployment completed