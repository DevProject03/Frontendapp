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
        stage('SonarQube analysis') {
            steps {
                script{
                    def scannerHome = tool 'SonarQubeScanner-9.7.1';
                    withSonarQubeEnv('sonarqube') {
                        sh "${tool("SonarQubeScanner-9.7.1")}/bin/sonar-scanner \
                        -Dsonar.projectKey=frontendapp \
                        -Dsonar.projectName=frontendapp"
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
