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

    

});