var name = document.getElementById("name").value;
var employeeID = Number(document.getElementById("employeeID").value);
var joiningDate = document.getElementById("joiningDate").value;
var hoursWorked = document.getElementById("hourWorked").value;
var designation = document.getElementById('designation').value;


function processForm(){


    alert('In process Form')
    function Employee(name, employeeID, joiningDate, hoursWorked, designation){
        this.name = name;
        this.employeeID = employeeID;
        this.joiningDate = joiningDate;
        this.hoursWorked = hoursWorked;
        this.designation = designation;
    }

    let employee1 = new Employee(name,employeeID,joiningDate,hoursWorked, designation)

    if (designation =="Manager"){
        var pay = employee1.hoursWorked * 90;
        return pay;
    }
    else if (designation == "Consultant"){
        var pay = employee1.hoursWorked * 75;
        return pay;
    }
    else{
        var pay = employee1.hoursWorked * 45;
        return pay;
    }

    document.getElementById("pay").value = pay;
}

