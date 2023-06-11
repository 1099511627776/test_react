node {
    checkout scm
    docker.image('node:lts-bullseye-slim').inside {
        stage('Checkout') {
            sh 'echo "This is a test"'
        }
        stage('Test and Report'){
            sh 'echo "testing"'
        }
        stage('Test'){
            steps {
                sh 'npm run test'
            }
        }
    }
}