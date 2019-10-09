
// Prompt User and give choices
var option = prompt("Which Food Item do you prefer? 'Steak', 'Pie', 'Fruit'");
var pic = document.getElementById("Picture");
// Standardize input to lower case
option.toLocaleLowerCase();

// Option of Steak
if (option != null && option == "steak") {
    // TODO - Return picture of steak
    option.toUpperCase;
    document.getElementById("Results").innerHTML = "You selected " + option;
    pic.setAttribute("src","./Media/steak.jpg");
    document.getElementById("desc").innerHTML = "This is a delicious steak"
}
// Option of Pie
else if (option != null && option == "pie") {
    // TODO - Return picture of Pie
    option.toUpperCase;
    document.getElementById("Results").innerHTML = "You selected " + option;
    pic.setAttribute("src","./Media/pie.jpg");
    document.getElementById("desc").innerHTML = "You can never have too much pie";
}
// Optino of Fruit
else if (option != null && option == "fruit") {
    // TODO - return picture of fruit
    option.toUpperCase;
    document.getElementById("Results").innerHTML = "You selected" + option;
    pic.setAttribute("src","./Media/fruit.jpg");
    document.getElementById("desc").innerHTML = "Great for Smoothies!!";
}
// No Input or Incorrect Input
else {
    document.getElementById("Results").innerHTML = "You did not choose a correect option....";
    pic.setAttribute("src","./Media/wrong.jpg");
    document.getElementById("desc").innerHTML = "how could you...";
}
