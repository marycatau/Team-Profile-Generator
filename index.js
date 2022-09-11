// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const endofhtml = `
</div>
</body>
</html>
`

// TODO: Create a function to initialize app
async function init() {
    var markup = await Manager.askUserInputForManager(inquirer);
    if(!markup)
        return;
        
    while(await askIfAddTeammate()){
        var teammateType = await askTypeOfTeammate();        
        console.log(teammateType);
        //engineer or intern
        if(teammateType === "Engineer"){
            console.log('engineer');
            var addmarkup = await Engineer.askUserInputForEngineer();
            markup += addmarkup;
        }
        else{ //intern
            console.log('intern');
            var addMarkUp=await Intern.askUserInputForintern();
            markup +=addMarkUp;
        }
    }

    //add end of html
    markup += endofhtml;
    console.log (markup);

 
    //fs.appendFileSync('index.html', endofhtml);
    fs.writeFileSync('./dist/index.html', markup);
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
