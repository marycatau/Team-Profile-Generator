const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./Employee.js');

// TODO: Create an array of questions for user input of engineer 
const engquestions = [ 
    {
      type: 'input',
      name: 'EngName',
      message: 'What is the name of the Engineer ?',
      validate: val => /[a-z]/gi.test(val),
    },
    {
      type: 'input',
      name: 'EngId',
      message: 'Please enter the ID of Engineer:',
      validate: val => /[0-9]/gi.test(val),
    },
    {
      type: 'input',
      name: 'Engemail',
      message: 'Please enter the email of Engineer:',
      validate: val => /[@]/gi.test(val),
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'Please enter the GitHub user name of engineer:',
      validate: val => /[a-z0-9]/gi.test(val),
    },
   
  ]

class Engineer extends Employee{
  static async askUserInputForEngineer(){
    var answers = await inquirer.prompt(engquestions);
    console.log(answers);
    //generate relevant html for manager  
    var engineerObj = new Engineer(answers.EngName, answers.EngId, answers.Engemail, answers.gitHub);
    var markup = engineerObj.generateMarkdown();
    return markup;
}


    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    
    getRole(){
      return "Engineer";
    }
      
    getGitHub(){
      return this.github;
    }

    generateMarkdown = () => {
        //console.log(data);
        return `             
    <!-- Engineer Details -->
    <div class="card" style="width: 18rem;">
        <div class="card-header"> 
            <h2>${this.name}</h2>
            <h2>Engineer</h2>
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
                <td><a href="mailto:${this.email}">${this.email}</a></td>
              </tr>
              <tr>
                <th scope="row">GitHub:</th>
                <td ><a href="https://github.com/${this.github}">${this.github}</a></td>
              </tr>
            </tbody>
          </table>
        </div>
    
    </div>
`
    }
 
}
  
  module.exports = Engineer;