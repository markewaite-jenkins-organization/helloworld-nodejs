pipeline {
  agent {
    node {
      label 'nodejs-app'
    }
  }
  options { 
    buildDiscarder(logRotator(numToKeepStr: '2'))
    skipDefaultCheckout true
  }
  stages {
    stage('Build') {
      steps {
        checkout scm
        container('nodejs') {
          echo 'Hello world from Build stage using a Message step'
          sh 'node --version'
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
