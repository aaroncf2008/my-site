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
    let inputval = input.value.toLowerCase();
    let prefix = "root@aaron:~# " + input.value + "\n";
    if (commands.includes(inputval) == false){
        let notfound = prefix + `${input.value}: command not found\n`;
        console.log(span.innerHTML)
        let spanval = span.innerHTML.replace("<br>", '\n');
        console.log(spanval)
        span.innerText = spanval + notfound;
    }
    else if (inputval == "resume"){
        window.open("https://pastebin.com/raw/0A9Utp54");
    }
    else if (inputval == "portfolio"){
        window.open("https://pastebin.com/raw/51WzKCdE");
    }
    else if (inputval == "clear"){
        span.innerText = "";
    }
    else {
        let description = definitions[inputval];
        span.innerText = description;
    }
}
});