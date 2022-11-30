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
//                      sh "npm install -D sonarqube-scanner"
//                      sh "ls /var/lib/jenkins/tools/"
//                      def scannerHome = tool 'SonarScanner';
                     withSonarQubeEnv("sonarqube-9.7.1") {
                        sh "${SonarScanner}/bin/sonar-scanner -Dsonar.projectKey=Frontendapp -Dsonar.sources=. "
                    }
                }
            }   
        }
        stage("Build image"){
            steps{
                script{
                    sh "cd Frontendapp && docker build -t lizdockerhub/frontendapp ."
                    
                }
            }

        }
        stage("Push image"){
            steps{
                script{
                    sh "docker login -u ${env.username} -p ${env.password}"
                    sh "docker push lizdockerhub/frontendapp"
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
