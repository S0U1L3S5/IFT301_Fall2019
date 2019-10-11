// get table element
var table = document.getElementById("formData");
var button = document.getElementById("addButton");

function addToTable() {
    // Get form data
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var myAge = document.getElementById("myage").value;

    // check if values are null
    if (firstName == "" || lastName == "" || myAge == "") {
        window.alert("All Values must be entered")
    }
    // verify correct data types
    else if (isNaN(firstName) && isNaN(lastName) && isNaN(myAge) != true) { // & Number.isInteger(myAge)) {
        var row = table.insertRow(-1);
        var cell_1 = row.insertCell(0);
        var cell_2 = row.insertCell(1);
        var cell_3 = row.insertCell(2);
        cell_1.innerHTML = firstName;
        cell_2.innerHTML = lastName;
        cell_3.innerHTML = myAge;
    }
    else {
        window.alert("Check your data types and try again")
    }
}

