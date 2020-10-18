//progressive enhancement
document.getElementById("js--terminal--text").innerHTML = ""; //leeg halen
typeText = (textToBeTyped) => {
    if(textToBeTyped != ""){
        document.getElementById("js--terminal--text").innerHTML += textToBeTyped[0]; 
        textToBeTyped.splice(0,1);
        setTimeout(() => { //set time out voor elke char van links naar rechts
            typeText(textToBeTyped);
        }, 55);
    }
    
}

typeText(Array.from("Hello World")); //String is a string van CHARS