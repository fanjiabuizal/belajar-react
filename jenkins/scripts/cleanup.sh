#!/bin/bash

IMAGE_NAME=${1:-belajar-react}

echo "Cleaning up Docker resources for $IMAGE_NAME"

# Remove old containers
docker ps -a --filter "name=$IMAGE_NAME" --format "{{.ID}}" | head -n -1 | xargs -r docker rm -f

# Remove dangling images
docker images --filter "dangling=true" -q | xargs -r docker rmi

echo "Cleanup completed"