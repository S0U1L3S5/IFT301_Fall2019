// Declare the variables that will be used for this script
var yourMemeName = "Women Yelling at Cat";
var yourYear = 2019;
var yourReason = "this meme has given me so many laughs this year. It has been adapted to so many different situations, plus the cat's face is so sarcastic.";
var yourMessage = "The First time I saw " + yourMemeName + " was in " + yourYear + " and I like it because " + yourReason; 

//Get document items by ID and display appropriate variables
var memeTitle = document.getElementById('MemeName');
memeTitle.textContent = yourMemeName;

var memeMessage = document.getElementById('MemeMessage');
memeMessage.textContent = yourMessage;