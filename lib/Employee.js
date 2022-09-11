const inquirer = require('inquirer');

class Employee{
    constructor(name, id, email){
        /*var pattern = /^[a-z]+$/i;
        if(!pattern.test(name)){
            throw "The employee name should be alphabets only.";
        }*/

        this.name=name;

        this.id= id;

        this.email= email;
    };

    getName(){
        return this.name;
    }

    getId(){
       return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }


}

module.exports = Employee;