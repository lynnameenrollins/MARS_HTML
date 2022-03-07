function processForm(){
        
    var name = document.getElementById("name").value;
    var employeeID = Number(document.getElementById("employeeID").value);
    var joiningDate = document.getElementById("joiningDate").value;
    var hoursWorked = Number(document.getElementById("hoursWorked").value);
   
    var designation = document.getElementById('designation').value;

    
    function Employee(name, employeeID, joiningDate, hoursWorked, designation){
        this.name = name;
        this.employeeID = employeeID;
        this.joiningDate = joiningDate;
        this.hoursWorked = hoursWorked;
        this.designation = designation;
    }

    let employee1 = new Employee(name,employeeID,joiningDate,hoursWorked, designation)
    
    if (designation =="manager"){
        var pay = employee1.hoursWorked * 90;
        // alert('Pay for ' + employee1.name + ' is: ' + pay)
    }
    else if (designation == "consultant"){
        var pay = employee1.hoursWorked * 75;
        // alert('Pay for ' + employee1.name + ' is: ' + pay)
    }
    else{
        var pay = employee1.hoursWorked * 45;
        // alert('Pay for ' + employee1.name + ' is: ' + pay)
    }

    sessionStorage.setItem("Employee Name", employee1.name)
    sessionStorage.setItem("Pay", pay)
}

