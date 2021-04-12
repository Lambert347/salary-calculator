
## Prerequisites
None


## Description
Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

First I added the necessary elements for the input fields to the index.html file. The necessary fields were the employee's first name, last name, ID number, job title, and annual salary. There also needed to be a submit button for those input fields to actually be used.

Secondly, the elements for the table needed to be constructed in the index.html file as well. The necessary fields included the above employee information but with the addition of a column for a delete button.

Finally, at least for the index file, I added a total monthly expenses h2 tag for later use to bring that value to the DOM after it has been calculated by the scripts. 

Speaking of scripts, the first component of the scripts was to declare an empty employee array for the employee information to be added to. The first function was, as always, the one to ready the DOM for manipulation. This also included emptying the monthly expenses value and appending in 0 that will later be replaced as the new monthly expense is calculated for each employee added. This ready function also included calling the functions for clicking on both the submit button and the delete button. 

After that, I created a function to add employee objects to the employees array. The function first created an object with properties equal to the value of the input fields. Then it checked to make sure that the employee numbers were both valid and unique. If both conditions were met, the employee was pushed to the array and the input fields were cleared. This function also called the renderEmployees function to make sure the information is displayed on the DOM and the calculateExpenses function to add the new expense for each employee. 

The function to calculate expenses first started by declaring an expense variable set to 0. Then, I created a loop to move through the employee array and add the annual salary for each employee divided by 12 (to get the salary per month). That expense is then appended into the monthlyOut element on the DOM which is the monthly expenses section in the index file. Finally, the function checks to see if the monthly expenses exceeds 20000 and if it does, to alert the user and turn the background color of the monthly expenses red. 

The function to render the employees first emptied the body of the employee table on the DOM, then appends in information from the employee object. Since this function is run at the time that the button to submit is pressed, it renders the employee with that information only. This function also adds a catagory for a delete button for each row with an employee in it. 

The last two functions for the scripts is one to clear the input fields and is run after the employee is pushed to the array. The other function is one for the delete button that removes the row from the DOM when the delete button is clicked. 

The last task was to style with the style.css file. The intent was to make the webpage readable and with a generous amount of spacing between each chunk of elements. Colors were chosen largely for readability and to be basic and not eye-searing in nature.

## Usage:
The program is designed with a straightforward approach. The user simply enters the data into the input fields and clicks the submit button. The program will check to make sure that the input is valid and will alert the user if that is not the case. In the alerts, there is solutions for solving any input issues with the information. 

When the information is added, it is clearly and cleanly displayed in the table. The delete button is displayed clearly and the total monthly expenses is front and center. The design is minimalist but clean and usable. 

## Built With Javascript, jQuery, CSS, and HTML 

## Thanks to Prime Digital Academy for the instruction and knowledge to create this application 

## Support 
Email lambe347@umn.edu for any suggestions or problems. 
