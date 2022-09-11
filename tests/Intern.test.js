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

    

});