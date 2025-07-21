#!/bin/bash

IMAGE_NAME=${1:-belajar-react}
IMAGE_TAG=${2:-latest}
PORT=${3:-3000}

echo "Deploying $IMAGE_NAME:$IMAGE_TAG on port $PORT"

# Stop and remove existing container
docker stop $IMAGE_NAME 2>/dev/null || true
docker rm $IMAGE_NAME 2>/dev/null || true

# Run new container
docker run -d \
  --name $IMAGE_NAME \
  -p $PORT:80 \
  --restart unless-stopped \
  $IMAGE_NAME:$IMAGE_TAG

echo "Deployment completed"