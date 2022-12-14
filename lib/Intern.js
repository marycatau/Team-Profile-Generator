const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./Employee.js');

// TODO: Create an array of questions for user input of engineer 
const internquestions = [ 
    {
      type: 'input',
      name: 'InternName',
      message: 'What is the name of the Intern?:',
      validate: val => /[a-z]/gi.test(val),
    },
    {
      type: 'input',
      name: 'InternId',
      message: 'Please enter the ID of Intern:',
      validate: val => /[0-9]/gi.test(val),
    },
    {
      type: 'input',
      name: 'Internemail',
      message: 'Please enter the email of Intern:',
      validate: val => /[@]/gi.test(val),
    },
    {
      type: 'input',
      name: 'school',
      message: 'Please enter the school name of the Intern:',
      validate: val => /[a-z]/gi.test(val),
    },
   
  ]

class Intern extends Employee{
    static async askUserInputForintern(pInquirer){
        var answers = await pInquirer.prompt(internquestions);
        //console.log(answers);
        //generate relevant html for manager  
        var InternObj = new Intern(answers.InternName, answers.InternId, answers.Internemail, answers.school);
        var markup = InternObj.generateMarkdown();
        return markup;
    }


    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    
    getschool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }

    generateMarkdown = () => {
        //console.log(data);
return `             
<!-- Intern Detail -->
<div class="card" style="width: 18rem;">
<div class="card-header"> 
<h2>${this.name}</h2>
<h2>Intern</h2>
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
<th scope="row">School:</th>
<td >${this.school}</td>
</tr>
</tbody>
</table>
</div>

</div>
`
    }
 
}
  
  module.exports = Intern;