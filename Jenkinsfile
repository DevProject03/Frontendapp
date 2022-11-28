pipeline {
    
    agent any

    stages {
        stage('Initial_cleanup'){
            steps {

                dir ("${WORKSPACE}"){
                    deleteDir()
                }
                
            }
        }
        stage('checkout'){
            steps {

                script {
                    sh "pwd && ls"
                    sh "git clone https://github.com/DevProject03/Frontendapp.git"
                }
                
            }
        }
        stage("Build"){
            steps {
                script{ 
                    sh "cd Frontendapp && npm install"
                }
            }
        }
        stage('SCM') {
            steps{
                script{
                    sh "checkout scm"
                }
            }

        }
        stage('SonarQube analysis') {
            steps {
                script{
                     def scannerHome = tool 'SonarScanner';
                     withSonarQubeEnv() {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }   
        }
        stage("Build image"){
            steps{
                script{
                    sh "cd Frontendapp && docker build -t lizdockerhub/crudapp"
                    
                }
            }

        }
        stage("Push image"){
            steps{
                script{
                    sh "docker login -u ${env.username} -p ${env.password}"
                    sh "docker push lizdockerhub/crudapp"
                }
            }

        }
         stage("Docker logout"){
            steps{
                script{
                    sh "docker logout"
                }
            }

        }

    }
}
