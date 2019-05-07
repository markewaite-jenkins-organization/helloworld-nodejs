pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Build Message'
        sh 'java -version'
      }
    }
    stage('Test') {
      steps {
        echo 'Test Message'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploy Message'
      }
    }
  }
}