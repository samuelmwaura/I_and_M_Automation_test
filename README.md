# Cypress Automation 

## Description

This is an automation project for the following tasks in the i&M bank official website:
 -Navigation through all the headers in the website's homepage
 -Credit  card menu interaction. 
    Visit the cards > credit card section of the website and scroll down to the bottom of the credit card page.
    Click on im-visa-international-gold-card
 -Terms and conditions expansion
    Locate and expand the ‘Terms and Conditions’ accordion
 -Form Automation
   Identify the form requesting user information and fill in all the necessary information in the form fields.
 
 ## Requirements
- NodeJS (v18.17.0), and npm
- Cypress (13.7.1)

See Environment Setup below for instructions on installing these tools.

## Setup

Start by **cloning** (not forking) the project  repository(git@github.com:samuelmwaura/I_and_M_Automation_test.git) into your local folder.

Change the directory to the cloned project
Install the required packages
Start the Cypress Test Runner
In the test runner click on the i&mSpec to run it.

Below is the order of the commands as should be run in the console.

```console
$ git clone git@github.com:samuelmwaura/I_and_M_Automation_test.git your-project-name
$ cd I_and_M_Automation_test
$ npm i --save
$ npx cypress open
```