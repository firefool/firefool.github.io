// Hämtar den div som vi lägger in allt vårat innehåll i genom DOM
let contentDiv = document.getElementById("content");

// Kallar på funktionen som skapar våran grundläggande vy
createDescriptionPage();

// Här är menyknapparna, dessa kallar på våra "create" funktioner för att skriva ut rätt vy till användaren
let homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click", function buttonClick(){
    // Nollställer först vyn innan vi skapar sidan som ska visas upp
    contentDiv.textContent = "";
    createDescriptionPage();
});

let workButton = document.getElementById("workButton");
workButton.addEventListener("click", function buttonClick(){
    contentDiv.textContent = "";
    createProjectsPage();
});

// Här är våra funktioner för att skapa DOM element, funktionerna tar emot typen av html som ska skapas, eventuell text, id och klass vid behov och ett target på vart vi ska lägga
// till vårat nya element
function addText(_type, _text, _target, _id)
{
    let text = document.createElement(_type);
    text.innerHTML = _text;
    text.id = _id;
    document.getElementById(_target).appendChild(text);

}

function addImage(_img, _target)
{
    let img = new Image();
    img.src = "./" + _img;
    document.getElementById(_target).appendChild(img);
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

function addLink(_text, _link, _target, _class)
{
    let linkText = document.createTextNode(_text);
    let link = document.createElement("a");
    link.appendChild(linkText);
    link.href = _link;
    link.class = _class;
    _target.appendChild(link);
}


// Här kommer våra "create" funktioner, dessa skapar de olika vyerna som ska visas på sidan genom att använda våra DOM funktioner.
function createDescriptionPage()
{
    let cvText = "<h4>Hello and welcome to my portfolio page!</h4>" +
    "I'm a web developer, programmer, game and web designer. I have many years programming experience" +
    "mainly within school and university projects. I have studied Game Design and Programming at Uppsala University, Campus Gotland" +
    "for three years and I am currently studying Web Development at Jönköping University, Campus Värnamo. " +
    "I have a broad set of skills for design and development that I am currently sharpening into a proffesional skillset for web development. <br />" + 
    "Check out my sample projects and feel free to contact me if you have any questions of inqueries! <br /><br />" +

    "<b>Technical Skills</b><br>" +
    "<i>C#, C++, Java, HTML/CSS, Javascript, PHP <br />" +
    "Unity3D, GameMaker Studio, Adobe Photoshop</i><br /><br />" +

    "<b>Education</b><br />" +
    "Thoren Innovation School, Uddevalla - 2009-2012<br />" +
    "(f.d. Portalens Gymnasium Uddevalla)<br />" +
    "<i>IT-education with focus on programming.</i><br /><br />" + 

    "Uppsala Universitet, Campus Gotland, Visby - 2012-2016<br />" +
    "<i>Game Design and Programming.</i><br /><br />" + 

    "Jönköpings Universitet, Campus Värnamo, Remote education 2020-<br />" +
    "<i>Web Development.</i>";

    createDiv("containerDiv", "content");
    createDiv("descriptionDiv", "containerDiv");
    addText("p", cvText, "descriptionDiv");
    createDiv("sidebarDiv", "containerDiv");
    let description = document.getElementById("descriptionDiv");
    let sidebar = document.getElementById("sidebarDiv");

    addImage("jonas.jpg", "sidebarDiv");
    addText("p", "Github: ", "sidebarDiv");
    addLink("github.com/firefool/", "https://github.com/firefool/", sidebar);
    sidebar.appendChild(document.createElement("br"));
    sidebar.appendChild(document.createElement("br"));
    addText("p","Email Adress: ", "sidebarDiv");
    addLink("Jonazyzermans@gmail.com", "mailto:Jonazyzermans@gmail.com", sidebar);
}

function createProjectsPage()
{
    createDiv("containerProjectDiv", "content");
    
    createBtn("work1", "containerProjectDiv", "card");
    addText("h3", "School Projects", "work1");
    addText("p", "Here you can explore some samples from my school projects.", "work1");
    createDiv("projectImage1", "work1", "projectImage");
    addImage("schoolimg.png", "projectImage1");
    let work1 = document.getElementById("work1");
    work1.addEventListener("click", function buttonClick(){
        contentDiv.textContent = "";
        createSchoolPage();
    });

    createBtn("work2", "containerProjectDiv", "card");
    addText("h3", "Work Projects", "work2");
    addText("p", "Here is some of the proffesional website work I have done!", "work2");
    createDiv("projectImage2", "work2", "projectImage");
    addImage("workimg.png", "projectImage2");
    let work2 = document.getElementById("work2");
    work2.addEventListener("click", function buttonClick(){
        contentDiv.textContent = "";
        createWorkPage();
    });

    // Skapade en tredje kategori för personliga projekt, behåller den här för när jag har något att lägga in!
    /*
    createBtn("work3", "containerProjectDiv", "card");
    addText("h3", "Personal Projects", "work3");
    addText("p", "Here are some of my personal projects!", "work3");
    createDiv("projectImage3", "work3", "projectImage");
    let work3 = document.getElementById("work3");
    work3.addEventListener("click", function buttonClick(){
        contentDiv.textContent = "";
        createPersonalPage();
    });
*/
}

function createSchoolPage()
{
    createDiv("containerWorkDiv", "content");

    createWorkExampleText("Inloggningssida", "A simple login page made for a school assignment.", "Inloggnings-uppgift", "https://firefool.github.io/inloggning-uppgift_JonasYzermansFalkheden/", "containerWorkDiv");
}

function createWorkPage()
{
    createDiv("containerWorkDiv", "content");

    createWorkExampleText("Uddenskulptur 2020", "Website for the art exhibition Uddenskulptur 2020 located in Hunnebostrand, Bohuslän. Created with Squarespace.", "Uddenskulptur.se", "https://uddenskulptur2020.squarespace.com/", "containerWorkDiv");
    createWorkExampleText("Åsa Herrgård", "Website for the artist and sculptor Åsa Herrgård.", "WIP", "", "containerWorkDiv");
}

function createPersonalPage()
{
    createDiv("containerWorkDiv", "content");
    createWorkExampleText("", "There's nothing here right now, check back later!", "", "", "containerWorkDiv");
}


function createWorkExampleText(_title, _text, _linktext, _link, _element)
{
    let newDiv = document.createElement("div");
    newDiv.className = "workClass";

    let title = document.createElement("h3");
    title.innerHTML = _title;
    newDiv.appendChild(title);
    
    addLink(_linktext, _link, newDiv);
 
    let text = document.createElement("p");
    text.innerHTML = _text;
    newDiv.appendChild(text);

    document.getElementById(_element).appendChild(newDiv);
}



