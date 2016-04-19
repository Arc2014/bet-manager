#!/bin/bash
### [BOF] VARIABLES

#Common base
readonly       JAVA_PACKAGES="openjdk-8-jdk "
readonly       POSTGRESQL_CLIENT="postgresql-client "
readonly       POSTGRESQL="postgresql postgresql-contrib "
readonly       PGADMIN="pgadmin3 "


### [EOF] VARIABLES

function doInstallJavaOracle {
   echo -n Desejar instalar o java 8 ? [S/N]
   read r

    if [[r == "S"]]; 
   	then
   		add-apt-repository ppa:webupd8team/java
  	 	apt-get update
   		apt-get install oracle-java8-installer 
   	fi   
}

function doInstall {	
   	apt-get --assume-yes install -f
   	apt-get --assume-yes install $1
}

function upCachePostgres {
  apt-cache search postgres
}

function updatePasswordPostgresUser {
 sudo -u postgres psql -U postgres -d postgres -c "ALTER USER postgres WITH password 'root'";
}

function createPostgresUserRoot {
 sudo -u postgres psql -U postgres -d postgres -c "CREATE USER root WITH SUPERUSER PASSWORD 'root'";
}

function createDatabaseBetManager {
 sudo psql postgres -c "CREATE DATABASE betmanager WITH OWNER root "
}



echo "Instalando java"
doInstallJavaOracle
doInstall $JAVA_PACKAGES 
echo "Instalando postgres"
doInstall $POSTGRESQL_CLIENT 
doInstall $POSTGRESQL 
upCachePostgres
doInstall $PGADMIN 
echo "Alterando senha do usuario postgres (senha nova root) postgres"
updatePasswordPostgresUser;
echo "Criando usuario root (senha root)"
createPostgresUserRoot
echo "Criando database betmanager"
createDatabaseBetManager
