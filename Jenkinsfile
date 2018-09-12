pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000 -p 5000:5000' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh './scripts/install.sh'
            }
        }
        stage('Lint') {
            steps {
                sh './scripts/lint.sh'
            }
        }
        stage('Test') {
            steps {
                sh './scripts/cover.sh'
            }
        }
        stage('Merge') {
            steps {
                sh './scripts/merge.sh'
            }
        }
    }
}