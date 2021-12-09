var input = document.getElementById("terminal-input");
const commands = ["help", "portfolio", "resume", "contact"];

var definitions = {
    "help": "Portfolio - This command links you to my portfolio\nResume - This command links you to my resume\n Contact - This commands will list ways to contact me",
    "contact": "Email: aaronfriedtech@gmail.com\nGitHub: aaroncf2008",
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