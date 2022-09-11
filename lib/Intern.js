const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./Employee.js');

// TODO: Create an array of questions for user input of engineer 
const internquestions = [ 
    {
      type: 'input',
      name: 'InternName',
      message: 'What is the name of the Intern?:'
    },
    {
      type: 'input',
      name: 'InternId',
      message: 'Please enter the ID of Intern:',
    },
    {
      type: 'input',
      name: 'Internemail',
      message: 'Please enter the email of Intern:',
    },
    {
      type: 'input',
      name: 'school',
      message: 'Please enter the school name of the Intern:',
    },
   
  ]

class Intern extends Employee{
    static async askUserInputForintern(){
        var answers = await inquirer.prompt(internquestions);
        console.log(answers);
        //generate relevant html for manager  
        var InternObj = new Intern(answers.InternName, answers.InternId, answers.Internemail, answers.school);
        var markup = InternObj.generateMarkdown();
        //console.log(markup);
        fs.appendFileSync('index.html', markup);
        console.log('Successfully created the Intern Part!');
        return true;
    }



    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    
    askuserinput(){
        return inquirer.prompt(internquestions)
            .then((answers) => {
                console.log(answers);
                //generate relevant html for manager  
                var markup = this.generateMarkdown(answers);
                console.log(markup);
                fs.appendFile('index.html', markup , (err) =>{
                    err ? console.log(err) : console.log('Successfully created the Engineer Part!');
                    this.askaddteamate();
                });
        });
    }


    generateMarkdown = () => {
        //console.log(data);
        return `             
    <!-- Intern Detail -->
    <div id="step1" class="card">
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
                <td>${this.email}}</td>
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