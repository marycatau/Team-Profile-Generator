// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const generateMarkdown = require('./lib/generateMarkdown.js');
const Manager = require('./lib/Manger.js');
const Intern = require('./lib/Intern.js');


//initialize a new object
const manager = new Manager();

function addnewteammate(nextteamate){
    switch (nextteamate){
        case "Engineer": 
            const engineer = new Engineer();
            var next = engineer.askuserinput();
            return next;

        case "Intern":
            const intern = new Intern();
            var next = engineer.askuserinput();
            return next;


    
    

        }  
}


// TODO: Create a function to initialize app
async function init() {
    var isCreate = await Manager.askUserInputForManager();
    if(!isCreate)
        return;

    while(await askIfAddTeammate()){
        var teammateType = await askTypeOfTeammate();        
        console.log(teammateType);
        //engineer or intern
        if(teammateType === "Engineer"){
            console.log('engineer');
            await Engineer.askUserInputForEngineer();
        }
        else{ //intern
            console.log('intern');
            await Intern.askUserInputForintern();
        }
    }

    //add end of html
    console.log ('end of html');
    const endofhtml = `
    </div>
  </body>
</html>
    `
 
    fs.appendFileSync('index.html', endofhtml);
    console.log('created index.html file!');
  
};

async function askIfAddTeammate(){
    var isAddTeammate = await inquirer.prompt([{
        type: 'confirm',
        name: 'addteammate',
        message: 'Do you need to add another teammate?',
      },
    ]);
    console.log('isAddTeammate:'+isAddTeammate.addteammate);
    return isAddTeammate.addteammate;
}

async function askTypeOfTeammate(){
    var answer = await inquirer.prompt([{
        type: 'list',
        name: 'teammatetype',
        message: 'What type of teammate you would like to add?',
        choices:['Engineer', 'Intern'],
      },]);
    return answer.teammatetype;
}

// Function call to initialize app
init();
