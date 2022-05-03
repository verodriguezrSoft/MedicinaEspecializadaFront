@Library('ceiba-jenkins-library') _

pipeline {
  //Donde se va a ejecutar el Pipeline
  agent {
    label 'Slave_Induccion'
  }

  //Opciones específicas de Pipeline dentro del Pipeline
  options {
    	buildDiscarder(logRotator(numToKeepStr: '3'))
 	disableConcurrentBuilds()
  }

  //Una sección que define las herramientas “preinstaladas” en Jenkins
  tools {
    jdk 'JDK13_Centos' //Verisión preinstalada en la Configuración del Master
  }
/*	Versiones disponibles
      JDK8_Mac
      JDK6_Centos
      JDK7_Centos
      JDK8_Centos
      JDK10_Centos
      JDK11_Centos
      JDK13_Centos
      JDK14_Centos
*/

  //Aquí comienzan los “items” del Pipeline
  stages{
    stage('Checkout') {
      steps{
        echo "------------>Checkout<------------"
		echo "------------>Checkout<------------"
        checkout scm

      }
    }

     stage('NPM Install') {
      steps {
        withEnv(['NPM_CONFIG_LOGLEVEL=warn']) {
          sh 'npm install'
        }
      }
    }

	stage('Test Unit') {
      	steps{
			echo "------------>Test Unit<------------"
			sh 'npm run test -- --watch=false --browsers ChromeHeadless'
       	}
    	}

    	stage('Static Code Analysis') {
      	steps{
      		echo '------------>Análisis de código estático<------------'
        		withSonarQubeEnv('Sonar') {
			//sh "${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner -Dproject.settings=sonar-project.properties"
	  	}
		echo '------------>Empiezo<------------'
		sonarqubeMasQualityGatesP(sonarKey:'co.com.ceiba.adn:adnangular.medicina.especializada', 
        	sonarName:'CeibaADN-ADNAngular-MedicinaEspecializada', 
        	sonarPathProperties:'./sonar-project.properties') 
		echo '------------>Termino<------------'
      }
    }

    stage('Build') {
      steps {
		    echo "------------>Build<------------"
		    sh 'npm run build'
      }
    }

  }

  post {
    always {
      echo 'This will always run'
    }
    success {
      echo 'This will run only if successful'
    }
    failure {
      echo 'This will run only if failed'
      mail (to: 'victor.rodriguez@ceiba.com.co',subject: "Failed Pipeline:${currentBuild.fullDisplayName}",body: "Something is wrong with ${env.BUILD_URL}")
    }
    unstable {
      echo 'This will run only if the run was marked as unstable'
    }
    changed {
      echo 'This will run only if the state of the Pipeline has changed'
      echo 'For example, if the Pipeline was previously failing but is now successful'
    }
  }
}