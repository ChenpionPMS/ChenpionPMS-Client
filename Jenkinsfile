pipeline {

  agent {
    docker {
      image 'node'
    }
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
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}
