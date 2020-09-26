let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " + 
"labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " + 
"aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore " + 
"eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let contentDiv = document.getElementById("content");

createDescriptionPage();


function addText(_type, _text, _element, _id)
{
    let text = document.createElement(_type);
    text.innerHTML = _text;
    text.id = _id;
    document.getElementById(_element).appendChild(text);

}

function addImage(_img, _element)
{
    let img = new Image();
    img.src = "./" + _img + ".jpg";
    document.getElementById(_element).appendChild(img);
}

function createDiv(_div, _target, _class)
{
    let div = document.createElement("div");
    div.id = _div;
    div.className = _class;

    document.getElementById(_target).appendChild(div);
}

function createBtn(_id, _target, _class)
{
    let btn = document.createElement("button");
    btn.id = _id;
    btn.className = _class;

    document.getElementById(_target).appendChild(btn);
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
    addText("p", loremIpsum, "descriptionDiv");
    createDiv("sidebarDiv", "containerDiv");
    let description = document.getElementById("descriptionDiv");
    let sidebar = document.getElementById("sidebarDiv");

    addImage("jonas", "sidebarDiv");

    addText("p", "<b>Github: </b>", "sidebarDiv");
    let linkText = document.createTextNode("https://github.com/firefool/");
    let link = document.createElement("a");
    link.appendChild(linkText);
    link.href = "https://github.com/firefool/";
    sidebar.appendChild(link);

    sidebar.appendChild(document.createElement("br"));
    sidebar.appendChild(document.createElement("br"));

    addText("p","<b>Email Adress: </b>", "sidebarDiv");
    linkText = document.createTextNode("Jonazyzermans@gmail.com");
    link = document.createElement("a");
    link.appendChild(linkText);
    link.href = "mailto:Jonazyzermans@gmail.com";
    sidebar.appendChild(link);

}

function createProjectsPage()
{
    createDiv("containerProjectDiv", "content");
    
    createBtn("work1", "containerProjectDiv", "card");
    addText("h3", "School Projects", "work1");
    addText("p", "This is some sample text", "work1");
    createDiv("visual1", "work1", "visual");
    let work1 = document.getElementById("work1");
    work1.addEventListener("click", function buttonClick(){
        contentDiv.textContent = "";
        createSchoolPage();
    });

    createBtn("work2", "containerProjectDiv", "card");
    addText("h3", "Work Projects", "work2");
    addText("p", "This is some sample text", "work2");
    createDiv("visual2", "work2", "visual");
    let work2 = document.getElementById("work2");
    work2.addEventListener("click", function buttonClick(){
        contentDiv.textContent = "";
        createWorkPage();
    });

    createBtn("work3", "containerProjectDiv", "card");
    addText("h3", "Personal Projects", "work3");
    addText("p", "This is some sample text", "work3");
    createDiv("visual3", "work3", "visual");
    let work3 = document.getElementById("work3");
    work3.addEventListener("click", function buttonClick(){
        contentDiv.textContent = "";
        createPersonalPage();
    });



}

function createSchoolPage()
{
    createDiv("containerWorkDiv", "content");

    createWorkExampleText("Skoluppgift #1", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Skoluppgift #2", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Skoluppgift #3", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Skoluppgift #4", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Skoluppgift #1", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Skoluppgift #2", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Skoluppgift #3", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Skoluppgift #4", loremIpsum, "www.google.com", "containerWorkDiv");
}

function createWorkPage()
{
    createDiv("containerWorkDiv", "content");

    createWorkExampleText("Arbetsexempel #1", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Arbetsexempel #2", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Arbetsexempel #3", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Arbetsexempel #4", loremIpsum, "www.google.com", "containerWorkDiv");
   
}

function createPersonalPage()
{
    createDiv("containerWorkDiv", "content");

    createWorkExampleText("Projekt #1", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Projekt #2", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Projekt #3", loremIpsum, "www.google.com", "containerWorkDiv");
    createWorkExampleText("Projekt #4", loremIpsum, "www.google.com", "containerWorkDiv");

}


function createWorkExampleText(_title, _text, _link, _element)
{
    let newDiv = document.createElement("div");
    newDiv.className = "workClass";

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
    createProjectsPage();
});

