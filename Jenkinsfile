pipeline {
  agent {
    node {
      label 'nodejs-app'
    }
  }
  stages {
    stage('Build') {
      steps {
        container('nodejs') {
          echo 'Hello world from Build stage using a Message step'
          sh 'npm -version'
        }
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
