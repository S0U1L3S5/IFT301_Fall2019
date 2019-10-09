
// Declare Variables
var items = ['Eagle Brand Milk','Cream Cheese','Lemon Juice','Graham  Cracker Crust','Blender'];
var amounts = ['1 can','2 packages','1 tbs','1 complete crust','1 clean one']
var table = document.getElementById('incredients');

// Loop through ingredients and add to table
var i;
for(i=0; i < items.length; i++ ) {
    // console test
    console.log(items[i] + " -------- " + amounts[i]);

    // create row and insert data each iteration
    var row = table.insertRow(-1);
    var cell_1 = row.insertCell(0);
    var cell_2 = row.insertCell(1);
    cell_1.innerHTML = items[i];
    cell_2.innerHTML = amounts[i];
}
