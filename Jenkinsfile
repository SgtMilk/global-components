pipeline {
    agent { dockerfile true }

    stages {
        stage('Dependencies') {
            steps {
                echo 'Getting Dependencies..'
                sh "npm cache clean --force"
                sh 'npm i'
            }
        }
        stage('Linting') {
            steps {
                echo 'Linting..'
                sh 'npm run lint'
            }
        }
        stage('Build Storybook') {
            steps {
                echo 'Building Storybook..'
                sh 'npm run build-storybook'
            }
        }
        stage('Build Rollup') {
            steps {
                echo 'Building Rollup..'
                sh 'npm run build-rollup'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm run test'
            }
        }
    }
}