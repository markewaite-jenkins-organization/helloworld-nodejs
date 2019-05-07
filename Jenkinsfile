pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Hello world from Build stage using a Message step'
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