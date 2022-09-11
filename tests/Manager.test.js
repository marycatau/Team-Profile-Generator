const Manager = require("../lib/Manager");

describe("manager-module", () => {
    test("getOfficeNumber_validOfficeNumber_ReturnSuccess", () =>{
        //arrange
        const mgrTel= '07713459999';
        const mgr1 = new Manager('helen','00035a','helen@gmail.com',mgrTel);
        //act
        const result = mgr1.officeNumber();
        //assert
        expect(result).toBe(mgrTel);     
    });

    
    test("getRole_validRole_eturnSuccess", () =>{
        //arrange
        const mgrRole = 'Manager';
        const mgr1 = new Manager('helen','00053a','helen@gmail.com','07713459999');
        //act
        const result = mgr1.getRole();
        //assert
        expect(result).toBe(mgrRole);      
    });

    test("askUserInputForManager_validAnswers_returnSuccess", async() =>{
        //arrange
        const mockInquirer = {      
            //this is a fake prompt function to bypass the testing      
            prompt: function(questions, answers){
                return new Promise((resolve, reject) => {
                    resolve({
                        MgrName: "helen",
                        MgrId: "0053A",
                        Mgremail: "helen@gmail.com",
                        Mgrtel: "07713459999"
                    });
                });
            }
        };
        const mockManager = new Manager("helen","0053A","helen@gmail.com","07713459999");
        const expectResult = mockManager.generateMarkdown(); 
        //act
        const result = await Manager.askUserInputForManager(mockInquirer);
        //assert
        expect(result).toBe(expectResult);      
    });

    test("generatemarkdown_validMarkup_ReturnSuccess", () =>{
        //arrange
        const markupsample= `
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
<div class="card" style="width: 18rem;">
<div class="card-header"> 
<h2>helen</h2>
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
<td>00053a</td>
</tr>
<tr>
<th scope="row">Email</th>
<td><a href="mailto:helen@gmail.com">helen@gmail.com</a></td>
</tr>
<tr>
<th scope="row">Tel:</th>
<td >07713459999</td>
</tr>
</tbody>
</table>
</div>
</div>`;
        const mgr1 = new Manager('helen','00053a','helen@gmail.com','07713459999');
        //act
        const result = mgr1.generateMarkdown();
        //assert
        expect(result).toBe(markupsample);      
    });
    

});