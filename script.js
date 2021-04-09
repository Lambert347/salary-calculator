console.log('JAVAJAVAJAVAJAVA');

const employees = [];


$(document).ready(readyOn);

function readyOn(){
    console.log('JQ');
    $('#submitButton').on('click', addEmployee);
}

function addEmployee(){
    let newEmployee = {
        firstName: $('#inFirstName').val(),
        lastName: $('#inLastName').val(),
        number: $('#inNumber').val(),
        jobTitle: $('#inJobTitle').val(),
        annualSalary: $('#inAnnualSalary').val(),
    }
    employees.push(newEmployee);
    
    clearInputFields();
    
    renderStudents();
}