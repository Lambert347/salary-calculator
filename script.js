console.log('JAVAJAVAJAVAJAVA');

const employees = [];


$(document).ready(readyOn);

function readyOn(){
    console.log('JQ');
    $('#submitButton').on('click', addEmployee);
    renderEmployees();
}

function renderEmployees(){
    $('.empTableBody').empty();

    for (let person of employees){
        $('.empTableBody').append(`
            <tr>
                <td>${person.firstName}</td>
                <td>${person.lastName}</td>
                <td>${person.number}</td>
                <td>${person.jobTitle}</td>
                <td>${person.annualSalary}</td>
            </tr>
        `)  
    }
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
    
    renderEmployees();
}

function clearInputFields(){
    $('#inFirstName').val('');
    $('#inLastName').val('');
    $('#inNumber').val('');
    $('#inJobTitle').val('');
    $('#inAnnualSalary').val('');
}

