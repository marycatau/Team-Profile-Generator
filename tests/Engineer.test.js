const Engineer = require("../lib/Engineer");

describe("engineer-module", () => {
    test("getGitHub_validGitHub_ReturnSuccess", () =>{
        //arrange
        const engGitHub= 'helenchan';
        const eng1 = new Engineer('helen','00035a','helen@gmail.com',engGitHub);
        //act
        const result = eng1.getGitHub();
        //assert
        expect(result).toBe(engGitHub);     
    });

    
    test("getRole_validRole_eturnSuccess", () =>{
        //arrange
        const engRole = 'Engineer';
        const eng1 = new Engineer('helen','00053a','helen@gmail.com','helenchan');
        //act
        const result = eng1.getRole();
        //assert
        expect(result).toBe(engRole);      
    });

    test("askUserInputForEngineer_validAnswers_returnSuccess", async() =>{
        //arrange
        const mockInquirer = {      
            //this is a fake prompt function to bypass the testing      
            prompt: function(questions, answers){
                return new Promise((resolve, reject) => {
                    resolve({
                        EngName: "helen",
                        EngId: "0053A",
                        Engemail: "helen@gmail.com",
                        gitHub: "helenchan"
                    });
                });
            }
        };
        const mockEng = new Engineer("helen","0053A","helen@gmail.com","helenchan");
        const expectResult = mockEng.generateMarkdown(); 
        //act
        const result = await Engineer.askUserInputForEngineer(mockInquirer);
        //assert
        expect(result).toBe(expectResult);      
    });

    test("generatemarkdown_validMarkup_ReturnSuccess", () =>{
        //arrange
        const markupsample= `             
<!-- Engineer Details -->
<div class="card" style="width: 18rem;">
<div class="card-header"> 
<h2>helen</h2>
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
<td>00053a</td>
</tr>
<tr>
<th scope="row">Email</th>
<td><a href="mailto:helen@gmail.com">helen@gmail.com</a></td>
</tr>
<tr>
<th scope="row">GitHub:</th>
<td ><a href="https://github.com/helenku">helenku</a></td>
</tr>
</tbody>
</table>
</div>

</div>
`;
        const eng1 = new Engineer('helen','00053a','helen@gmail.com','helenku');
        //act
        const result = eng1.generateMarkdown();
        //assert
        expect(result).toBe(markupsample);      
    });
    

});