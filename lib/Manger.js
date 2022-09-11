const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./Employee.js');

// TODO: Create an array of questions for user input of manger 
const mgrquestions = [ 
    {
      type: 'input',
      name: 'MgrName',
      message: 'What is the name of the Manager ?',
    },
    {
      type: 'input',
      name: 'MgrId',
      message: 'Please enter the ID of Manger:',
    },
    {
      type: 'input',
      name: 'Mgremail',
      message: 'Please enter the email of manger:',
    },
    {
      type: 'input',
      name: 'Mgrtel',
      message: 'Please enter the office number of Manager:',
    },
   
  ]

class Manager extends Employee{
    //class member
    static async askUserInputForManager(){
        var answers = await inquirer.prompt(mgrquestions);
        console.log(answers);
        //generate relevant html for manager  
        var managerObj = new Manager(answers.MgrName, answers.MgrId, answers.Mgremail, answers.Mgrtel);
        var markup = managerObj.generateMarkdown();
        //console.log(markup);
        fs.writeFileSync('index.html', markup);
        console.log('Successfully created the Manager Part!');
        return true;
    }

    //object members
    constructor(name, id, email, tel){
        super(name, id, email);
        this.tel = tel;
    }

    getRole(){
        return "Manager";
    }
        

    
    generateMarkdown = () => {
        //console.log(data);
        //${data.projectTitle} ${renderLicenseBadge(data.license)}
        return ` 
<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
</head>
        
<body>
    <div class="wrapper">
    <header class="h1 bg-primary text-white text-center" >
        <h1> My Team</h1>
    </header>
            
    <!-- Manger Details -->
    <div class="row  justify-content-evenly">  
      <div class="card">
        <div class="card-header"> 
            <h2>${this.name}</h2>
            <h2>Team Manager</h2>
        </div>

        <div class="card-body">
            <table class="table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Content</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">ID</th>
                <td>${this.id}</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>${this.email}</td>
              </tr>
              <tr>
                <th scope="row">Tel:</th>
                <td >${this.tel}</td>
              </tr>
            </tbody>
          </table>
        </div>
    
    </div>
`
    }
 
}
  
  module.exports = Manager;