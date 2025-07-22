pipeline {
    agent any
    
    // Docker configuration commented out
    // agent {
    //     docker {
    //         image 'node:18-alpine'
    //         args '-v /var/run/docker.sock:/var/run/docker.sock'
    //     }
    // }
    
    environment {
        // IMAGE_NAME = 'belajar-react'
        // IMAGE_TAG = "${BUILD_NUMBER}"
        BUILD_DIR = 'build'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }
        
        stage('Test') {
            steps {
                bat 'npm test -- --coverage --watchAll=false'
            }
        }
        
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        
        // Docker Build stage commented out
        // stage('Docker Build') {
        //     steps {
        //         sh 'apk add --no-cache docker'
        //         sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
        //         sh "docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${IMAGE_NAME}:latest"
        //     }
        // }
        
        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'build/**/*', fingerprint: true
            }
        }
        
        // Docker Deploy stage commented out
        // stage('Deploy') {
        //     steps {
        //         sh "docker stop ${IMAGE_NAME} || true"
        //         sh "docker rm ${IMAGE_NAME} || true"
        //         sh "docker run -d --name ${IMAGE_NAME} -p 3001:80 --restart unless-stopped ${IMAGE_NAME}:latest"
        //     }
        // }
    }
    
    post {
        failure {
            echo 'Pipeline failed!'
        }
        success {
            echo 'Pipeline succeeded!'
        }
    }
}