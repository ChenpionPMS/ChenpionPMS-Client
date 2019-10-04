pipeline {

  agent {
    label "jenkins-nodejs"
  }
  stages {
    stage('Clone Sources') {
      steps {
        git 'https://github.com/ChenpionPMS/ChenpionPMS-Client.git'
      }
    }
    stage('Information') {
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }
    stage('Dependencies') {
      steps {
        sh 'npm ci'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}
