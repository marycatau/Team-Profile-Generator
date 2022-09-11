const Intern = require("../lib/Intern");

describe("intern-module", () => {
    test("getschool_validGitHub_ReturnSuccess", () =>{
        //arrange
        const internSchool= 'stbedes';
        const intern1 = new Intern('helen','00035a','helen@gmail.com', internSchool);
        //act
        const result = intern1.getschool();
        //assert
        expect(result).toBe(internSchool);    
    });

    
    test("getRole_validRole_eturnSuccess", () =>{
        //arrange
        const internRole = 'Intern';
        const intern1 = new Intern('helen','00053a','helen@gmail.com','Stbedes');
        //act
        const result = intern1.getRole();
        //assert
        expect(result).toBe(internRole);      
    });

    test("askUserInputForIntern_validAnswers_returnSuccess", async() =>{
        //arrange
        const mockInquirer = {      
            //this is a fake prompt function to bypass the testing      
            prompt: function(questions, answers){
                return new Promise((resolve, reject) => {
                    resolve({
                        InternName: "Leo",
                        InternId: "00546",
                        Internemail: "Leo@gmail.com",
                        school: "Loretta High School"
                    });
                });
            }
        };
        const mockIntern = new Intern("Leo","00546","Leo@gmail.com","Loretta High School");
        const expectResult = mockIntern.generateMarkdown(); 
        //act
        const result = await Intern.askUserInputForintern(mockInquirer);
        //assert
        expect(result).toBe(expectResult);      
    });

    test("generatemarkdown_validMarkup_ReturnSuccess", () =>{
        //arrange
        const markupsample= `             
<!-- Intern Detail -->
<div class="card" style="width: 18rem;">
<div class="card-header"> 
<h2>Leo</h2>
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
<td>00546</td>
</tr>
<tr>
<th scope="row">Email</th>
<td><a href="mailto:Leo@gmail.com">Leo@gmail.com</a></td>
</tr>
<tr>
<th scope="row">School:</th>
<td >Loretta High School</td>
</tr>
</tbody>
</table>
</div>

</div>
`;
        const Intern1 = new Intern("Leo","00546","Leo@gmail.com","Loretta High School");
        //act
        const result = Intern1.generateMarkdown();
        //assert
        expect(result).toBe(markupsample);      
    });
    

});