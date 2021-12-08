var input = document.getElementById("terminalinput");
const commands = ["help", "portfolio"];

var definitions = {
    "help": "this is a help command",
    "portfolio": "This command will link you to my portfolio (eventually)",
};

input.addEventListener("keyup", function(event) {

  if (event.keyCode === 13) {

    event.preventDefault();
    
    var span = document.getElementById("name");
    
    if (commands.includes(input.value) == false){
        let notfound = `${input.value}: command not found`;
        span.innerText = notfound;
    }
    else {
        let description = definitions[input.value];
        span.innerText = description;
    }

  }
});