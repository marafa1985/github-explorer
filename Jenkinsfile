pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                npm command: 'ci --quiet --no-progress'
            }
        }
        stage('Format') {
            steps {
                npm command: 'run format:check'
            }
        }
        stage('Typecheck') {
            steps {
                npm command: 'run typecheck'
            }
        }

        stage('Test') {
            steps {
                npm command: 'test'
            }
        }
        stage('Build') {
            steps {
                npm command: 'run build'
            }
        }
    }
}