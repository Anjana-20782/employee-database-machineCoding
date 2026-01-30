(async function () {
    
const data=await fetch("./data.json");
// console.log(data);
const res=await data.json();
// console.log(res);

let employee=res;

let selectedEmployeeId = employee[0].id;
let selectedEmployee = employee[0];

const employeeList = document.querySelector(".employees__names--list")
const employeeInfo = document.querySelector(".employees__single--list")


})();