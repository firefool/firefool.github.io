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

function createDescriptionPage()
{
    addText(loremIpsum, "content");
    addImage("jonas", "content");
}

function createWorkPage()
{
    createWorkExampleText("Skoluppgift #1", loremIpsum, "content");
    createWorkExampleText("Skoluppgift #2", loremIpsum, "content");
    createWorkExampleText("Skoluppgift #3", loremIpsum, "content");
    createWorkExampleText("Skoluppgift #4", loremIpsum, "content");
}

function createWorkExampleText(_title, _text, _element)
{
    let line = document.createElement("hr");
    line.className = "line";
    document.getElementById(_element).appendChild(line);

    let title = document.createElement("h3");
    title.innerHTML = _title;
    document.getElementById(_element).appendChild(title);

    let link = document.createElement("a");
    let linkText = document.createTextNode("Here is a link");
    link.appendChild(linkText);
    link.href = "http://google.com";
    document.getElementById(_element).appendChild(link);

    let text = document.createElement("p");
    text.innerHTML = _text;
    document.getElementById(_element).appendChild(text);
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

