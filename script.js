console.log('JAVAJAVAJAVAJAVA');

const employees = [];
let monthlyExpense = 0;

$(document).ready(readyOn);

//function to ready the DOM to be edited
function readyOn(){
    console.log('JQ');
    //empties the monthly expenses element in the html, then appends in the value of the variable monthly expense, which is 0
    let el = $('.monthlyOut');
    el.empty();
    el.append(monthlyExpense);
    //when the submit button is clicked, run the add employee function
    $('#submitButton').on('click', addEmployee);
    //when the delete button is clicked, run the delete employee function
    $('.empTableBody').on('click', '.delete', deleteDrone);
    
    renderEmployees();
    
}

//
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
                <td>
                    <button class ="delete">Delete</button>
                </td>
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
    
    for (let i = 0; i < employees.length; i++){
        if ($('#inNumber').val() === employees[i].number){
            alert('Employee ID Number must be unique');
            return 1;
        }

    }

    if (!$('#inNumber').val()){
        alert('Please Enter Employee Number');
    }
    else {
        employees.push(newEmployee);
        clearInputFields();
    }

    
    renderEmployees();
    calculateExpenses();
}

function calculateExpenses(){
    let expense = 0;
    for (let i = 0; i < employees.length; i++){
        expense += Number((employees[i].annualSalary)/12); 
    }
    let totalExpense = expense + monthlyExpense;
    let el = $('.monthlyOut');
    el.empty();
    el.append(totalExpense);
    if (totalExpense > 20000){
        $('.monthlyOut').css("background-color", "red");
        alert('Monthly Budget Exceeded. Please contact your supervisor.');
    }

}

function deleteDrone(){
    $(this).closest('tr').remove();
}


function clearInputFields(){
    $('#inFirstName').val('');
    $('#inLastName').val('');
    $('#inNumber').val('');
    $('#inJobTitle').val('');
    $('#inAnnualSalary').val('');
}

