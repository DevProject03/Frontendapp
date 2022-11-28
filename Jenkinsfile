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
                    sh "git clone https://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@github.com/madeniji017/bankapp_project_frontend.git"
                }
                
            }
        }
        stage("Build"){
            steps {
                script{
                    
                    sh "cd bankapp_project_frontend && npm install"
                   
                    
                }
            }
        }
        stage("Build image"){
            steps{
                script{
                    sh "cd bankapp_project_frontend && docker build -t mlarry/frontend_app:1.0 ."
                    
                }
            }

        }
        stage("Push image"){
            steps{
                script{
                    sh "docker login -u ${env.user} -p ${env.passwd}"
                    sh "docker push mlarry/frontend_app:1.0"
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
