const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
  ];

   // Function to display all employees
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;

let totalSalary = employees.reduce((total, emp)=>total + emp.salary,0)

function calculateTotalSalaries() {
    let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0)
    alert(`Total Salaries: $${totalSalary}`);
}

function displayHREmployees() {
    const hrEmp = employees.filter(emp => emp.department == 'HR')
    const hrEmpDisply = hrEmp.map(emp => `<p>${emp.id}: ${emp.name}: ${emp.name} - ${emp.department} - $${emp.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmpDisply;
}


function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }  else {
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }
}

// function displayEmployees() {
//     employees.
// }