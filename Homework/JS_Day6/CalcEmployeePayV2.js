
function maxDate()
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd< 10){
        dd = '0' + dd;
    }

    if (mm < 10){
        mm = "0" + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    
    let myDate = document.getElementById('joiningDate')
    myDate.setAttribute('max', `${today}`);
}    
maxDate();

function processForm(){
        
    var name = document.getElementById("name").value;
    var employeeID = Number(document.getElementById("employeeID").value);
    var joiningDate = document.getElementById("joiningDate").value;
    var hoursWorked = Number(document.getElementById("hoursWorked").value);
    var designation = document.getElementById('designation').value;

    
   
    class Employee{
        #name;
        #employeeID;
        #joiningDate;
        #hoursWorked;
        #designation;
        constructor(name, employeeID, joiningDate, hoursWorked, designation){
            this.#name = name;
            this.#employeeID = employeeID;
            this.#joiningDate = joiningDate;
            this.#hoursWorked = hoursWorked;
            this.#designation = designation;
        }

        get name() {
            return this.#name
        }
        set name(name){
            //don't really need this because we are catching errors on client side
            //but put it here for reference
            if (name === ''){
                throw new Error('name filed of User cannot be empty')
            }
            this.#name = name;
        }
        get employeeID() {
            return this.#employeeID
        }
        set employeeID(employeeID){
            //don't really need this because we are catching errors on client side
            //but put it here for reference
            if (employeeID === 0){
                throw new Error('Employee ID cannot be 0')
            }
            this.#employeeID = employeeID;
        }
        get joiningDate() {
            return this.#joiningDate
        }
        set joiningDate(joiningDate){
            
            this.#joiningDate = joiningDate;
        }
        get hoursWorked() {
            return this.#hoursWorked
        }
        set hoursWorked(hoursWorked){
            
            this.#hoursWorked = hoursWorked;
        }
        get designation() {
            return this.#designation
        }
        set designation(designation){
            
            this.#designation = designation;
        }

        
    }

    
    const employee1 = new Employee(name,employeeID,joiningDate,hoursWorked, designation)
    

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


