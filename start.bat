@ECHO OFF
Echo Choose a package manager to start off.
Echo 1. npm
Echo 2. yarn
SET /P pm=   

IF %pm%==1 (
	Echo You have chosen npm. Let's begin by updating some details in the package file.
	npm init
    	Echo Awesome! Now lets install the packages. This may take a few minutes. Go grab a coffee!
	npm install
    )
IF %pm%==2 (
	Echo You have chosen npm. Let's begin by updating some details in the package file.
	yarn init
    	Echo Awesome! Now lets install the packages. This may take a few minutes. Go grab a coffee!
	yarn install
    )