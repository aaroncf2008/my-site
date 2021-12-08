var input = document.getElementById("terminalinput");
const commands = ["help"];

var definitions = {
    "help": "this is a help command",
};

input.addEventListener("keyup", function(event) {

  if (event.keyCode === 13) {

    event.preventDefault();
    
    var span = document.getElementById("name");
    
    if (commands.includes(input.value) == false){
        let notfound = 
        span.innerText = notfound;
    }
    else {
        let description = definitions[input.value];
        span.innerText = description;
    }

  }
});