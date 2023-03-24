/**
 * Perform operations on objects
 */
const employee = {};

// Using literal notation
employee.name = "Joe";
employee["streetAddress"] = "salim rd";

function updateEmployeeWithKeyAndValue(employees, key, value){
    // This function should take in an employee Object, a key and a value.
    // The function should not mutate the employees parameter and return a new employee 
    // that has an updated value for the key passed in
    const newObj = {...employees};
    newObj[key] = value;
    return newObj;
    // return {...employee, [key]: value}
}
const sam = updateEmployeeWithKeyAndValue(employee, 'name', 'Sam');
const finalObj = updateEmployeeWithKeyAndValue(sam, "streetAddress", "11 Broadway");
console.log(employee,"\n", sam, "\n", finalObj);

function destructivelyUpdateEmployeeWithKeyAndValue(employees, key, value){
    //this function should work the same as updateEmployeeWithKeyAndValue()
    // but it should mutate the employees parameter passed in.
    employees[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employees, key){
    const newObj = {...employees};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employees, key){
    delete employees[key];
    return employees;
}