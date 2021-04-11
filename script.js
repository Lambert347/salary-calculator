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

//function to render the employees to the DOM
function renderEmployees(){
    //empties the table prior to adding the new employee
    $('.empTableBody').empty();
    //loops through the employee array and appends the information to their respective cells in the table on the DOM
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
//function to add employees to the employee array
function addEmployee(){
    let newEmployee = {
        firstName: $('#inFirstName').val(),
        lastName: $('#inLastName').val(),
        number: $('#inNumber').val(),
        jobTitle: $('#inJobTitle').val(),
        annualSalary: $('#inAnnualSalary').val(),
    }
    //loop to check if the employee id number is unique, if not, it alerts the user and returns an error
    for (let i = 0; i < employees.length; i++){
        if ($('#inNumber').val() === employees[i].number){
            alert('Employee ID Number must be unique');
            return 1;
        }

    }
    //checks if there is an employee number, if not, alerts the user
    if (!$('#inNumber').val()){
        alert('Please Enter Employee Number');
    }
    //if the above two conditions check out, then the employee is added to the array and then the input fields are cleared.
    else {
        employees.push(newEmployee);
        clearInputFields();
    }

    //runs the renderEmployees function
    renderEmployees();
    //runs the calculateExpenses fuction
    calculateExpenses();
}
//function to calculate the new expenses with each new employee added
function calculateExpenses(){
    let expense = 0;
    //loop to move through the employee array and add the annual salary divided by 12 to the monthly expenses 
    for (let i = 0; i < employees.length; i++){
        expense += Number((employees[i].annualSalary)/12); 
    }
    //adds the expenses together
    let totalExpense = expense + monthlyExpense;
    //empties the expenses on the DOM, then appends in the total expenses to the monthly expenses on the DOM
    let el = $('.monthlyOut');
    el.empty();
    el.append(totalExpense);
    //if the monthly expenses exceeds 20000, then the expenses turns red and the user is alerted.
    if (totalExpense > 20000){
        $('.monthlyOut').css("background-color", "red");
        alert('Monthly Budget Exceeded. Please contact your supervisor.');
    }

}
//function to delete an employee from the DOM
function deleteDrone(){
    $(this).closest('tr').remove();
}

//function to clear the input fields
function clearInputFields(){
    $('#inFirstName').val('');
    $('#inLastName').val('');
    $('#inNumber').val('');
    $('#inJobTitle').val('');
    $('#inAnnualSalary').val('');
}

