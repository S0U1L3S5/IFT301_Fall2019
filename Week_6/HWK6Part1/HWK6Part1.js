var name = "#093 - Haunter";
var type = "Ghost";
var description = "Haunter is a dangerous Pokémon. If one beckons you while floating in darkness, you must never approach it. This Pokémon will try to lick you with its tongue and steal your life away.";
var characteristicsHeader = ['Height','Weight','Category','Abilities'];
var characteristicsInfo = ['5ft 3in','0.2lbs','Gas','Levitate'];
var statsCategory = ['HP','Attack','Defense','Special Attack','Special Defense','Speed'];
var statsInfo =['2/10','3/10','2/10','6/10','2/10','5/10',];
var table = document.getElementById("stats");
var charList = document.getElementById("chars");
var charListInfo = document.getElementById("charsInfo");
var infoButton = document.getElementById("ShowInfo");
var link = document.getElementById("Link");


// Function to fill in card information
function DisplayPokemon() {
    // Displa Basic Pokemon Information
    var pokemonName = document.getElementById("Name");
    pokemonName.innerText = name;
    var pokemonType = document.getElementById("Type");
    pokemonType.innerText = type;
    var pokemonDesctiption = document.getElementById("Description");
    pokemonDesctiption.innerText = description;
    var pokemonPicture = document.getElementById("Pokemon");
    pokemonPicture.setAttribute("src","./media/Haunter.png");
    pokemonPicture.setAttribute("alt","Haunter Pokemon Picture");

    // Generate Stats Info
    var i=0;
    for(i=0; i < statsCategory.length; i++ ) {
        // create row and insert data each iteration
        var row = table.insertRow(-1);
        var cell_1 = row.insertCell(0);
        var cell_2 = row.insertCell(1);
        cell_1.innerHTML = statsCategory[i];
        cell_2.innerHTML = statsInfo[i];
    }

    // Generate Characteristics Headers
    i=0;
    for(i=0; i < characteristicsHeader.length; i++) { 
        var node = document.createElement("li");
        var textnode = document.createTextNode(characteristicsHeader[i]);
        node.appendChild(textnode);
        charList.appendChild(node);
    }

    // Generate characteristic info
    i=0;
    for(i=0; i < characteristicsHeader.length; i++) {
        var node = document.createElement("li");
        var textnode = document.createTextNode(characteristicsInfo[i]);
        node.appendChild(textnode);
        charListInfo.appendChild(node);
    }

    //Add link to the bottom of the card to the pokemon site
    link.setAttribute("href","https://www.pokemon.com/us/pokedex/haunter");

    // Hide Button after click
    infoButton.setAttribute("style","visibility:hidden");
}