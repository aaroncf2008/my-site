var input = document.getElementById("terminalinput");
const commands = ["help", "portfolio"];

var definitions = {
    "help": "portfolio - This command links you to my portfolio\nresume - This command links you to my resume",
};

input.addEventListener("keyup", function(event) {

  if (event.keyCode === 13) {

    event.preventDefault();
    
    var span = document.getElementById("name");
    
    if (commands.includes(input.value) == false){
        let notfound = `${input.value}: command not found`;
        span.innerText = notfound;
    }
    else if (input.value == "resume"){
        window.open("https://pastebin.com/raw/0A9Utp54");
    }
    else if (input.value == "portfolio"){
        window.open("https://pastebin.com/raw/51WzKCdE");
    }
    else {
        let description = definitions[input.value];
        span.innerText = description;
    }

  }
});