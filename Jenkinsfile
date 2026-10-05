pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nexacart .'
            }
        }

        stage('Remove Old Container') {
            steps {
                sh 'docker rm -f nexacart || true'
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'docker run -d --name nexacart -p 80:80 nexacart'
            }
        }
    }
}