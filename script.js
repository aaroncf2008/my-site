var input = document.getElementById("terminal-input");
const commands = ["help", "portfolio", "resume", "contact", "clear"];

var definitions = {
    "help": "Portfolio - This command links you to my portfolio\nResume - This command links you to my resume\n Contact - This commands will list ways to contact me\n Clear - Clears the terminal",
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
        let spanval = span.innerText.replace("<br>", '\n');
        span.innerText = spanval + notfound;
    }
    else if (inputval == "resume"){
        let spanval = span.innerText.replace("<br>", '\n');
        let prefix = "root@aaron:~# " + input.value + "\n";
        let final = "Forwarding you to my resume!\n";
        window.open("https://pastebin.com/raw/0A9Utp54");
        span.innerText = spanval + prefix + final;
    }
    else if (inputval == "portfolio"){
        let spanval = span.innerText.replace("<br>", '\n');
        let prefix = "root@aaron:~# " + input.value + "\n";
        let final = "Forwarding you to my portfolio!\n";
        window.open("https://pastebin.com/raw/51WzKCdE");
        span.innerText = spanval + prefix + final;
    }
    else if (inputval == "clear"){
        span.innerText = "";
    }
    else {
        let prefix = "root@aaron:~# " + input.value + "\n";
        let description = definitions[inputval];
        span.innerText = prefix + description + "\n";
    }
    input.value = "";
}
});