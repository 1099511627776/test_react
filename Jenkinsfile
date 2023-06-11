node {
    checkout scm
    docker.image('node:lts-bullseye-slim').inside {
        stage('Build') {
            sh 'npm install'
        }
        stage('Test'){
            sh 'npm run test'
        }
        stage('Repost'){
            sh 'echo "So far no actions here"'
        }
    }
}