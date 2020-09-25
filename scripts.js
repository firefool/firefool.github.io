let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " + 
"labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " + 
"aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore " + 
"eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let contentDiv = document.getElementById("content");

createDescriptionPage();


function addText(_text, _element)
{
    let text = document.createElement("p");
    text.innerHTML = _text;
    document.getElementById(_element).appendChild(text);

}

function addImage(_img, _element)
{
    let img = new Image();
    img.src = "./" + _img + ".jpg";
    document.getElementById(_element).appendChild(img);
}

function createDiv(_div, _target)
{
    let container = document.createElement("div");
    container.id = _div;
    document.getElementById(_target).appendChild(container);
}

function createDescriptionPage()
{
    /*let container = document.createElement("div");
    container.id = "containerDiv";
    document.getElementById("content").appendChild(container);*/
    /*
    let newDiv = document.createElement("div");
    newDiv.id = "descriptionDiv";
    container.appendChild(newDiv);*/
  /*   newDiv = document.createElement("div");
    newDiv.id = "sidebarDiv";
    container.appendChild(newDiv);*/   
    
    createDiv("containerDiv", "content");
    createDiv("descriptionDiv", "containerDiv");
    addText(loremIpsum, "descriptionDiv");
    createDiv("sidebarDiv", "containerDiv");
    let description = document.getElementById("descriptionDiv");
    let sidebar = document.getElementById("sidebarDiv");

    addImage("jonas", "sidebarDiv");

    addText("Github: ", "sidebarDiv");
    let linkText = document.createTextNode("https://github.com/firefool/");
    let link = document.createElement("a");
    link.appendChild(linkText);
    link.href = "https://github.com/firefool/";
    sidebar.appendChild(link);

    sidebar.appendChild(document.createElement("br"));
    sidebar.appendChild(document.createElement("br"));

    addText("Email Adress: ", "sidebarDiv");
    linkText = document.createTextNode("Jonazyzermans@gmail.com");
    link = document.createElement("a");
    link.appendChild(linkText);
    link.href = "mailto:Jonazyzermans@gmail.com";
    sidebar.appendChild(link);

}

function createWorkPage()
{
    let container = document.createElement("div");
    container.id = "containerWorkDiv";
    document.getElementById("content").appendChild(container);

    createWorkExampleText("Skoluppgift #1", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Skoluppgift #2", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Skoluppgift #3", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Skoluppgift #4", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Skoluppgift #1", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Skoluppgift #2", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Skoluppgift #3", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Skoluppgift #4", loremIpsum, "www.google.com", "containerWorkDiv");
}

function createWorkExampleText(_title, _text, _link, _element)
{
    let newDiv = document.createElement("div");
    newDiv.className = "workClass";
/*
    let line = document.createElement("hr");
    line.className = "line";
    newDiv.appendChild(line);*/

    let title = document.createElement("h3");
    title.innerHTML = _title;
    newDiv.appendChild(title);
    
    let link = document.createElement("a");
    let linkText = document.createTextNode(_link);
    link.appendChild(linkText);
    link.href = "https://" + _link;
    newDiv.appendChild(link);

    let text = document.createElement("p");
    text.innerHTML = _text;
    newDiv.appendChild(text);

    document.getElementById(_element).appendChild(newDiv);
}

let homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click", function buttonClick(){
    contentDiv.textContent = "";
    createDescriptionPage();
});

let workButton = document.getElementById("workButton");
workButton.addEventListener("click", function buttonClick(){
    contentDiv.textContent = "";
    createWorkPage();
});

