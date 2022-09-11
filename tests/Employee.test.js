const Employee = require("../lib/Employee");

describe("employee-module", () => {
    test("getName_validEmployeeName_ReturnSuccess", () =>{
        //arrange
        const employeeName = 'helen';
        const employee1 = new Employee(employeeName,'001','helen@gmail.com');
        //act
        const result = employee1.getName();
        //assert
        expect(result).toBe(employeeName);        
    });

    test("getId_validId_ReturnSuccess", () =>{
        //arrange
        const employeeId = '00053a';
        const employee1 = new Employee('helen',employeeId,'helen@gmail.com');
        //act
        const result = employee1.getId();
        //assert
        expect(result).toBe(employeeId);      
    });

    test("getEmail_validEmail_ReturnSuccess", () =>{
        //arrange
        const employeeEmail= 'helen@gmail.com';
        const employee1 = new Employee('helen','00035a','helen@gmail.com');
        //act
        const result = employee1.getEmail();
        //assert
        expect(result).toBe(employeeEmail);     
    });

    
    test("getRole_validRole_eturnSuccess", () =>{
        //arrange
        const employeeRole = 'Employee';
        const employee1 = new Employee('helen','00053a','helen@gmail.com');
        //act
        const result = employee1.getRole();
        //assert
        expect(result).toBe('Employee');      
    });

    

});