import "./styles/index.css";
import Me from "./assets/images/home-image.png";
import AboutBigImg from "./assets/images/about-big-image.jpg";
import AboutSmallImg from "./assets/images/about-small-image.jpg";
import LinkedIn from "./assets/images/linkedin-icon.svg";
import Instagram from "./assets/images/instagram-icon.svg";
import GitHub from "./assets/images/github-icon.svg";
import X from "./assets/images/x-icon.svg";
import Mail from "./assets/images/mail-icon.svg";
import projectsData from "./assets/data/projects.json";

// Function that imports an image based on an input name
async function loadImage(imageName) {
    const imageModule = await import(`./assets/images/${imageName}`);
    return imageModule.default;
}

// Create an element with an optional CSS class and optional CSS id
function createElement(tag, className, id) {
        
    const element = document.createElement(tag)

    if (className) {
        element.classList.add(className)
    }

    if (id) {
        element.setAttribute("id",id)
    }

    return element

}

// Retrieve an element from the DOM
/* function getElement(id) {
        
    const element = document.getElementById(id)

    return element

} */

// Create 3 main sections
const header = createElement("header");
const main = createElement("main");
const footer = createElement("footer");

// Add each section to the DOM
document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);

// Add 2 subsections to header, one for a logo and one for a nav
const logo = createElement("div", "logo");
const nav = createElement("nav");

// Add content to logo subsection
const logoText = createElement("h1", "logo-text");
logoText.textContent = "R.J.";
logo.appendChild(logoText);

// Add content to nav subsection (menu link items)
const menu = createElement("ul", "menu");
const menuItems = ["Home", "About", "Stack", "Projects", "Contact"];
// Create a always two digit counter for the menu items
let counter = 1;

function twoDigitCounter(value) {
    
    if (value < 10) {
        return `0${value}.`;
    } 
        return value;
    
}

menuItems.forEach((item) => {
    const numLabel = createElement("span", "menu-item-number");
    const menuItem = createElement("li", "menu-item");
    const itemLink = createElement("a", "menu-item-link");
    numLabel.textContent = twoDigitCounter(counter);
    menu.appendChild(numLabel);
    counter += 1;
    itemLink.textContent = item;
    menuItem.appendChild(itemLink);
    menu.appendChild(menuItem);
});

nav.appendChild(menu);

// Add a div for small screen devices (burger menu)
const smallScreenMenu = createElement("div", "small-screen-menu");
const smallScreenMenuLine1 = createElement("div", "small-screen-menu-line", "small-screen-menu-line-1");
const smallScreenMenuLine2 = createElement("div", "small-screen-menu-line", "small-screen-menu-line-2");
const smallScreenMenuLine3 = createElement("div", "small-screen-menu-line", "small-screen-menu-line-3");
smallScreenMenu.appendChild(smallScreenMenuLine1);
smallScreenMenu.appendChild(smallScreenMenuLine2);
smallScreenMenu.appendChild(smallScreenMenuLine3);
nav.appendChild(smallScreenMenu);

// Add each subsection to the header
header.appendChild(logo);
header.appendChild(nav);

// Add an event listener to the small screen menu
smallScreenMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
    smallScreenMenuLine1.classList.toggle("small-screen-menu-line-1-active");
    smallScreenMenuLine2.classList.toggle("small-screen-menu-line-2-active");
    smallScreenMenuLine3.classList.toggle("small-screen-menu-line-3-active");
});

// Add content to main section
// First create 5 big subsections
const home = createElement("section", "home");
const about = createElement("section", "about");
const stack = createElement("section", "stack");
const projects = createElement("section", "projects");
const contact = createElement("section", "contact");

// Add each subsection to the main section
main.appendChild(home);
main.appendChild(about);
main.appendChild(stack);
main.appendChild(projects);
main.appendChild(contact);

// Add content to each subsection
// Home
const mainText = createElement("h1", "main-text");
mainText.textContent = "Hello! I am";
home.appendChild(mainText);
const newLine1 = createElement("br");
mainText.appendChild(newLine1);
const spanName = createElement("span", "main-text-name");
spanName.textContent = "Raúl Jiménez";
mainText.appendChild(spanName);
const newLine2 = createElement("br");
mainText.appendChild(newLine2);
const spanRole = createElement("span", "main-text-role");
spanRole.textContent = "Full Stack Developer";
mainText.appendChild(spanRole);

const MeImage = createElement("img", "home-image");
MeImage.classList.add("home-image");
MeImage.src = Me;
MeImage.alt = "Me";
home.appendChild(MeImage);

// About
const aboutHeader = createElement("div", "section-header", "about-header");
const aboutBody = createElement("div", "section-body", "about-body");
about.appendChild(aboutHeader);
about.appendChild(aboutBody);

const aboutHeaderLine = createElement("div", "section-header-line", "about-header-line");
aboutHeader.appendChild(aboutHeaderLine);
const aboutHeaderText = createElement("h2", "section-header-text", "about-header-text");
aboutHeaderText.textContent = "02. ";
const aboutHeaderTitle = createElement("span", "section-header-title", "about-header-title");
aboutHeaderTitle.textContent = "About Me";
aboutHeaderText.appendChild(aboutHeaderTitle);
aboutHeader.appendChild(aboutHeaderText);

// About - Body
// About - Body - Picture selector
const aboutBodyPicture = createElement("picture", "section-body-picture", "about-body-picture");
aboutBody.appendChild(aboutBodyPicture);
const aboutBodySource1 = createElement("source", "section-body-source", "about-body-source-1");
aboutBodySource1.srcset = AboutSmallImg;
aboutBodySource1.media = "(max-width: 876px)";
aboutBodyPicture.appendChild(aboutBodySource1);
const aboutBodySource2 = createElement("source", "section-body-source", "about-body-source-2");
aboutBodySource2.srcset = AboutBigImg;
aboutBodySource2.media = "(min-width: 877px)";
aboutBodyPicture.appendChild(aboutBodySource2);
const aboutBodyImage = createElement("img", "section-body-image", "about-body-image");
aboutBodyImage.src = AboutBigImg;
aboutBodyImage.alt = "Me";
aboutBodyPicture.appendChild(aboutBodyImage);

const aboutBodyDivText = createElement("div", "section-body-div-text", "about-body-div-text");
aboutBody.appendChild(aboutBodyDivText);
const aboutBodyText1 = createElement("p", "section-body-text", "about-body-text-1");
aboutBodyText1.textContent = "Hey there! I'm Raúl, and I want to share a bit of my story with you.";
aboutBodyDivText.appendChild(aboutBodyText1);
const aboutBodyText2 = createElement("p", "section-body-text", "about-body-text-2");
aboutBodyText2.textContent = "About 20 years ago, I graduated in Computer Science. After leaving university, I spent some time working in tech companies, but soon enough, I jumped into the family business to help it grow. For 15 years, I worked side by side with my father and brother, tackling the challenges that come with managing your own company and leading a team.";
aboutBodyDivText.appendChild(aboutBodyText2);
const aboutBodyText3 = createElement("p", "section-body-text", "about-body-text-3");
aboutBodyText3.textContent = "With my father retired and the business well-established, my brother and I made the decision to sell it and take on new challenges. In my case, something deep down always wanted to return to the world of IT, so I decided to go all-in and get back up to speed.";
aboutBodyDivText.appendChild(aboutBodyText3);
const aboutBodyText4 = createElement("p", "section-body-text", "about-body-text-4");
aboutBodyText4.textContent = "Since then, I've been diving into the latest technologies and methodologies, taking on projects and making the most of them. I've always been known for my adaptability, problem-solving skills, and my ability to work effectively within a team. I'm not afraid to embrace new challenges and I have a strong passion for staying up-to-date with the ever-evolving tech landscape.";
aboutBodyDivText.appendChild(aboutBodyText4);
const aboutBodyText5 = createElement("p", "section-body-text", "about-body-text-5");
aboutBodyText5.textContent = "I thrive on learning and applying the most successful practices of the moment, all while tackling projects head-on. It's been quite a journey, and I'm excited to bring my wealth of experience, combined with my dedication to innovation, to your team. Let's create some amazing tech together!";
aboutBodyDivText.appendChild(aboutBodyText5);

// Stack
const stackHeader = createElement("div", "section-header", "stack-header");
const stackBody = createElement("div", "section-body", "stack-body");
stack.appendChild(stackHeader);
stack.appendChild(stackBody);

const stackHeaderLine = createElement("div", "section-header-line", "stack-header-line");
stackHeader.appendChild(stackHeaderLine);
const stackHeaderText = createElement("h2", "section-header-text", "stack-header-text");
stackHeaderText.textContent = "03. ";
const stackHeaderTitle = createElement("span", "section-header-title", "stack-header-title");
stackHeaderTitle.textContent = "My Skills";
stackHeaderText.appendChild(stackHeaderTitle);
stackHeader.appendChild(stackHeaderText);

const stackTable = createElement("table", "section-body-table", "stack-table");
stackBody.appendChild(stackTable);
const stackTableHead = createElement("thead", "section-body-table-head", "stack-table-head");
stackTable.appendChild(stackTableHead);
const stackTableHeadRow = createElement("tr", "section-body-table-head-row", "stack-table-head-row");
stackTableHead.appendChild(stackTableHeadRow);
const stackTableHeadCol1 = createElement("th", "section-body-table-head-cell", "stack-table-head-cell-1");
stackTableHeadCol1.setAttribute("colspan", "2");
stackTableHeadCol1.textContent = "";
stackTableHeadRow.appendChild(stackTableHeadCol1);
const stackTableHeadCol2 = createElement("th", "section-body-table-head-cell", "stack-table-head-cell-2");
stackTableHeadCol2.textContent = "Beginner";
stackTableHeadCol2.classList.add("hide-on-mobile");
stackTableHeadRow.appendChild(stackTableHeadCol2);
const stackTableHeadCol3 = createElement("th", "section-body-table-head-cell", "stack-table-head-cell-3");
stackTableHeadCol3.textContent = "Elementary";
stackTableHeadCol3.classList.add("hide-on-mobile");
stackTableHeadRow.appendChild(stackTableHeadCol3);
const stackTableHeadCol4 = createElement("th", "section-body-table-head-cell", "stack-table-head-cell-4");
stackTableHeadCol4.textContent = "Intermediate";
stackTableHeadCol4.classList.add("hide-on-mobile");
stackTableHeadRow.appendChild(stackTableHeadCol4);
const stackTableHeadCol5 = createElement("th", "section-body-table-head-cell", "stack-table-head-cell-5");
stackTableHeadCol5.textContent = "Advanced";
stackTableHeadCol5.classList.add("hide-on-mobile");
stackTableHeadRow.appendChild(stackTableHeadCol5);
const stackTableHeadCol6 = createElement("th", "section-body-table-head-cell", "stack-table-head-cell-6");
stackTableHeadCol6.textContent = "Expert";
stackTableHeadCol6.classList.add("hide-on-mobile");
stackTableHeadRow.appendChild(stackTableHeadCol6);
const stackTableBody = createElement("tbody", "section-body-table-body", "stack-table-body");
stackTable.appendChild(stackTableBody);
const stackTableBodyRow1 = createElement("tr", "section-body-table-body-row", "stack-table-body-row");
stackTableBody.appendChild(stackTableBodyRow1);
const stackTableBodyHead1 = createElement("th", "section-body-table-body-head", "stack-table-body-head-1");
stackTableBodyHead1.textContent = "Languages";
stackTableBodyHead1.setAttribute("rowspan", "4");
stackTableBodyHead1.setAttribute("scope", "rowgroup");
stackTableBodyRow1.appendChild(stackTableBodyHead1);
const stackTableBodyHead2 = createElement("th", "section-body-table-body-head", "stack-table-body-head-2");
stackTableBodyHead2.textContent = "HTML";
stackTableBodyHead2.setAttribute("scope", "row");
stackTableBodyRow1.appendChild(stackTableBodyHead2);
const stackTableBodyCell1 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-1");
stackTableBodyCell1.textContent = "";
stackTableBodyRow1.appendChild(stackTableBodyCell1);
const stackTableBodyCell2 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-2");
stackTableBodyCell2.textContent = "";
stackTableBodyRow1.appendChild(stackTableBodyCell2);
const stackTableBodyCell3 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-3");
stackTableBodyCell3.textContent = "";
stackTableBodyRow1.appendChild(stackTableBodyCell3);
const stackTableBodyCell4 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-4");
stackTableBodyCell4.textContent = "";
stackTableBodyRow1.appendChild(stackTableBodyCell4);
const stackTableBodyCell4bis = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-41");
stackTableBodyCell4bis.textContent = "";
stackTableBodyRow1.appendChild(stackTableBodyCell4bis);
const stackTableBodyRow2 = createElement("tr", "section-body-table-body-row", "stack-table-body-row");
stackTableBody.appendChild(stackTableBodyRow2);
const stackTableBodyHead3 = createElement("th", "section-body-table-body-head", "stack-table-body-head-3");
stackTableBodyHead3.textContent = "CSS";
stackTableBodyHead3.setAttribute("scope", "row");
stackTableBodyRow2.appendChild(stackTableBodyHead3);
const stackTableBodyCell5 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-5");
stackTableBodyCell5.textContent = "";
stackTableBodyRow2.appendChild(stackTableBodyCell5);
const stackTableBodyCell6 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-6");
stackTableBodyCell6.textContent = "";
stackTableBodyRow2.appendChild(stackTableBodyCell6);
const stackTableBodyCell7 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-7");
stackTableBodyCell7.textContent = "";
stackTableBodyRow2.appendChild(stackTableBodyCell7);
const stackTableBodyCell8 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-8");
stackTableBodyCell8.textContent = "";
stackTableBodyRow2.appendChild(stackTableBodyCell8);
const stackTableBodyCell81 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-81");
stackTableBodyCell81.textContent = "";
stackTableBodyRow2.appendChild(stackTableBodyCell81);
const stackTableBodyRow3 = createElement("tr", "section-body-table-body-row", "stack-table-body-row");
stackTableBody.appendChild(stackTableBodyRow3);
const stackTableBodyHead4 = createElement("th", "section-body-table-body-head", "stack-table-body-head-4");
stackTableBodyHead4.textContent = "JavaScript";
stackTableBodyHead4.setAttribute("scope", "row");
stackTableBodyRow3.appendChild(stackTableBodyHead4);
const stackTableBodyCell9 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-9");
stackTableBodyCell9.textContent = "";
stackTableBodyRow3.appendChild(stackTableBodyCell9);
const stackTableBodyCell10 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-10");
stackTableBodyCell10.textContent = "";
stackTableBodyRow3.appendChild(stackTableBodyCell10);
const stackTableBodyCell11 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-11");
stackTableBodyCell11.textContent = "";
stackTableBodyRow3.appendChild(stackTableBodyCell11);
const stackTableBodyCell12 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-12");
stackTableBodyCell12.textContent = "";
stackTableBodyRow3.appendChild(stackTableBodyCell12);
const stackTableBodyCell121 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-121");
stackTableBodyCell121.textContent = "";
stackTableBodyRow3.appendChild(stackTableBodyCell121);
const stackTableBodyRow4 = createElement("tr", "section-body-table-body-row", "stack-table-body-row");
stackTableBody.appendChild(stackTableBodyRow4);
const stackTableBodyHead5 = createElement("th", "section-body-table-body-head", "stack-table-body-head-5");
stackTableBodyHead5.textContent = "Python";
stackTableBodyHead5.setAttribute("scope", "row");
stackTableBodyRow4.appendChild(stackTableBodyHead5);
const stackTableBodyCell13 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-13");
stackTableBodyCell13.textContent = "";
stackTableBodyRow4.appendChild(stackTableBodyCell13);
const stackTableBodyCell14 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-14");
stackTableBodyCell14.textContent = "";
stackTableBodyRow4.appendChild(stackTableBodyCell14);
const stackTableBodyCell15 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-15");
stackTableBodyCell15.textContent = "";
stackTableBodyRow4.appendChild(stackTableBodyCell15);
const stackTableBodyCell16 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-16");
stackTableBodyCell16.textContent = "";
stackTableBodyRow4.appendChild(stackTableBodyCell16);
const stackTableBodyCell17 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-17");
stackTableBodyCell17.textContent = "";
stackTableBodyRow4.appendChild(stackTableBodyCell17);
const stackTableBodyRow5 = createElement("tr", "section-body-table-body-row", "stack-table-body-row");
stackTableBody.appendChild(stackTableBodyRow5);
const stackTableBodyHead6 = createElement("th", "section-body-table-body-head", "stack-table-body-head-6");
stackTableBodyHead6.textContent = "Frameworks / Libraries";
stackTableBodyHead6.setAttribute("rowspan", "2");
stackTableBodyHead6.setAttribute("scope", "rowgroup");
stackTableBodyRow5.appendChild(stackTableBodyHead6);
const stackTableBodyHead7 = createElement("th", "section-body-table-body-head", "stack-table-body-head-7");
stackTableBodyHead7.textContent = "React";
stackTableBodyHead7.setAttribute("scope", "row");
stackTableBodyRow5.appendChild(stackTableBodyHead7);
const stackTableBodyCell18 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-18");
stackTableBodyCell18.classList.add("frameworks");
stackTableBodyCell18.textContent = "";
stackTableBodyRow5.appendChild(stackTableBodyCell18);
const stackTableBodyCell19 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-19");
stackTableBodyCell19.textContent = "";
stackTableBodyRow5.appendChild(stackTableBodyCell19);
const stackTableBodyCell20 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-20");
stackTableBodyCell20.textContent = "";
stackTableBodyRow5.appendChild(stackTableBodyCell20);
const stackTableBodyCell21 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-21");
stackTableBodyCell21.textContent = "";
stackTableBodyRow5.appendChild(stackTableBodyCell21);
const stackTableBodyCell22 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-22");
stackTableBodyCell22.textContent = "";
stackTableBodyRow5.appendChild(stackTableBodyCell22);
const stackTableBodyRow6 = createElement("tr", "section-body-table-body-row", "stack-table-body-row");
stackTableBody.appendChild(stackTableBodyRow6);
const stackTableBodyHead8 = createElement("th", "section-body-table-body-head", "stack-table-body-head-8");
stackTableBodyHead8.textContent = "NodeJS";
stackTableBodyHead8.setAttribute("scope", "row");
stackTableBodyRow6.appendChild(stackTableBodyHead8);
const stackTableBodyCell23 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-23");
stackTableBodyCell23.classList.add("frameworks");
stackTableBodyCell23.textContent = "";
stackTableBodyRow6.appendChild(stackTableBodyCell23);
const stackTableBodyCell24 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-24");
stackTableBodyCell24.textContent = "";
stackTableBodyRow6.appendChild(stackTableBodyCell24);
const stackTableBodyCell25 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-25");
stackTableBodyCell25.textContent = "";
stackTableBodyRow6.appendChild(stackTableBodyCell25);
const stackTableBodyCell26 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-26");
stackTableBodyCell26.textContent = "";
stackTableBodyRow6.appendChild(stackTableBodyCell26);
const stackTableBodyCell27 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-27");
stackTableBodyCell27.textContent = "";
stackTableBodyRow6.appendChild(stackTableBodyCell27);
const stackTableBodyRow7 = createElement("tr", "section-body-table-body-row", "stack-table-body-row");
stackTableBody.appendChild(stackTableBodyRow7);
const stackTableBodyHead9 = createElement("th", "section-body-table-body-head", "stack-table-body-head-9");
stackTableBodyHead9.textContent = "Tools";
stackTableBodyHead9.setAttribute("rowspan", "3");
stackTableBodyHead9.setAttribute("scope", "rowgroup");
stackTableBodyRow7.appendChild(stackTableBodyHead9);
const stackTableBodyHead10 = createElement("th", "section-body-table-body-head", "stack-table-body-head-10");
stackTableBodyHead10.textContent = "Git";
stackTableBodyHead10.setAttribute("scope", "row");
stackTableBodyRow7.appendChild(stackTableBodyHead10);
const stackTableBodyCell28 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-28");
stackTableBodyCell28.textContent = "";
stackTableBodyRow7.appendChild(stackTableBodyCell28);
const stackTableBodyCell29 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-29");
stackTableBodyCell29.textContent = "";
stackTableBodyRow7.appendChild(stackTableBodyCell29);
const stackTableBodyCell30 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-30");
stackTableBodyCell30.textContent = "";
stackTableBodyRow7.appendChild(stackTableBodyCell30);
const stackTableBodyCell31 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-31");
stackTableBodyCell31.textContent = "";
stackTableBodyRow7.appendChild(stackTableBodyCell31);
const stackTableBodyCell32 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-32");
stackTableBodyCell32.textContent = "";
stackTableBodyRow7.appendChild(stackTableBodyCell32);
const stackTableBodyRow8 = createElement("tr", "section-body-table-body-row", "stack-table-body-row");
stackTableBody.appendChild(stackTableBodyRow8);
const stackTableBodyHead11 = createElement("th", "section-body-table-body-head", "stack-table-body-head-11");
stackTableBodyHead11.textContent = "Npm";
stackTableBodyHead11.setAttribute("scope", "row");
stackTableBodyRow8.appendChild(stackTableBodyHead11);
const stackTableBodyCell33 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-33");
stackTableBodyCell33.textContent = "";
stackTableBodyRow8.appendChild(stackTableBodyCell33);
const stackTableBodyCell34 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-34");
stackTableBodyCell34.textContent = "";
stackTableBodyRow8.appendChild(stackTableBodyCell34);
const stackTableBodyCell35 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-35");
stackTableBodyCell35.textContent = "";
stackTableBodyRow8.appendChild(stackTableBodyCell35);
const stackTableBodyCell36 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-36");
stackTableBodyCell36.textContent = "";
stackTableBodyRow8.appendChild(stackTableBodyCell36);
const stackTableBodyCell37 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-37");
stackTableBodyCell37.textContent = "";
stackTableBodyRow8.appendChild(stackTableBodyCell37);
const stackTableBodyRow9 = createElement("tr", "section-body-table-body-row", "stack-table-body-row");
stackTableBody.appendChild(stackTableBodyRow9);
const stackTableBodyHead12 = createElement("th", "section-body-table-body-head", "stack-table-body-head-12");
stackTableBodyHead12.textContent = "Webpack";
stackTableBodyHead12.setAttribute("scope", "row");
stackTableBodyRow9.appendChild(stackTableBodyHead12);
const stackTableBodyCell38 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-38");
stackTableBodyCell38.textContent = "";
stackTableBodyRow9.appendChild(stackTableBodyCell38);
const stackTableBodyCell39 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-39");
stackTableBodyCell39.textContent = "";
stackTableBodyRow9.appendChild(stackTableBodyCell39);
const stackTableBodyCell40 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-40");
stackTableBodyCell40.textContent = "";
stackTableBodyRow9.appendChild(stackTableBodyCell40);
const stackTableBodyCell41 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-41");
stackTableBodyCell41.textContent = "";
stackTableBodyRow9.appendChild(stackTableBodyCell41);
const stackTableBodyCell42 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-42");
stackTableBodyCell42.textContent = "";
stackTableBodyRow9.appendChild(stackTableBodyCell42);
const stackTableBodyRow10 = createElement("tr", "section-body-table-body-row", "stack-table-body-row");
stackTableBody.appendChild(stackTableBodyRow10);
const stackTableBodyHead13 = createElement("th", "section-body-table-body-head", "stack-table-body-head-13");
stackTableBodyHead13.textContent = "Testing";
stackTableBodyHead13.setAttribute("rowspan", "1");
stackTableBodyHead13.setAttribute("scope", "rowgroup");
stackTableBodyRow10.appendChild(stackTableBodyHead13);
const stackTableBodyHead14 = createElement("th", "section-body-table-body-head", "stack-table-body-head-14");
stackTableBodyHead14.textContent = "Jest";
stackTableBodyHead14.setAttribute("scope", "row");
stackTableBodyRow10.appendChild(stackTableBodyHead14);
const stackTableBodyCell43 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-43");
stackTableBodyCell43.textContent = "";
stackTableBodyRow10.appendChild(stackTableBodyCell43);
const stackTableBodyCell44 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-44");
stackTableBodyCell44.textContent = "";
stackTableBodyRow10.appendChild(stackTableBodyCell44);
const stackTableBodyCell45 = createElement("td", "section-body-table-body-cell-filled", "stack-table-body-cell-45");
stackTableBodyCell45.textContent = "";
stackTableBodyRow10.appendChild(stackTableBodyCell45);
const stackTableBodyCell46 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-46");
stackTableBodyCell46.textContent = "";
stackTableBodyRow10.appendChild(stackTableBodyCell46);
const stackTableBodyCell47 = createElement("td", "section-body-table-body-cell-empty", "stack-table-body-cell-47");
stackTableBodyCell47.textContent = "";
stackTableBodyRow10.appendChild(stackTableBodyCell47);

// Projects main container
const projectsHeader = createElement("div", "section-header", "projects-header");
const projectsBody = createElement("div", "section-body", "projects-body");
projects.appendChild(projectsHeader);
projects.appendChild(projectsBody);

const projectsHeaderLine = createElement("div", "section-header-line", "projects-header-line");
projectsHeader.appendChild(projectsHeaderLine);
const projectsHeaderText = createElement("h2", "section-header-text", "projects-header-text");
projectsHeaderText.textContent = "04. ";
const projectsHeaderTitle = createElement("span", "section-header-title", "projects-header-title");
projectsHeaderTitle.textContent = "Things I've Built";
projectsHeaderText.appendChild(projectsHeaderTitle);
projectsHeader.appendChild(projectsHeaderText);

const projectsBodyDiv = createElement("div", "section-body-div", "projects-body-div");
projectsBody.appendChild(projectsBodyDiv);

// Function that receives data from the JSON file and creates the projects
function createProject(project) {
    const projectDiv = createElement("div", "project-div");
    projectsBodyDiv.appendChild(projectDiv);
    const projectDivTop = createElement("div", "project-div-top");
    projectDiv.appendChild(projectDivTop);
    const projectDivTopLeft = createElement("div", "project-div-top-left");
    projectDivTop.appendChild(projectDivTopLeft);
    const projectTitle = createElement("h3", "project-title");
    projectTitle.textContent = project.title;
    projectDivTopLeft.appendChild(projectTitle);
    const projectSubtitle = createElement("h4", "project-subtitle");
    projectSubtitle.textContent = project.subtitle;
    projectDivTopLeft.appendChild(projectSubtitle);
    const projectDivTopRight = createElement("div", "project-div-top-right");
    projectDivTop.appendChild(projectDivTopRight);
    const projectDescription = createElement("p", "project-description");
    projectDescription.textContent = project.description;
    projectDivTopRight.appendChild(projectDescription);
    const projectLinkButton = createElement("a", "project-link-button");
    projectLinkButton.href = project.link;
    projectLinkButton.target = "_blank";
    projectLinkButton.rel = "noopener noreferrer";
    projectLinkButton.textContent = "View Live";
    projectDivTopRight.appendChild(projectLinkButton);
    const projectDivBottom = createElement("div", "project-div-bottom");
    projectDiv.appendChild(projectDivBottom);
    
    // Dinamically loading the images
    loadImage(project.image).then(src => {
        const projectImage = new Image();
        projectImage.src = src;
        projectImage.alt = project.alt;
        projectImage.classList.add("project-image");
        projectDivBottom.appendChild(projectImage);
    });
}

// Fetching the data from the JSON file
projectsData.projects.forEach(createProject);

// Contact
const contactHeader = createElement("div", "section-header", "contact-header");
const contactBody = createElement("div", "section-body", "contact-body");
contact.appendChild(contactHeader);
contact.appendChild(contactBody);

const contactHeaderLine = createElement("div", "section-header-line", "contact-header-line");
contactHeader.appendChild(contactHeaderLine);
const contactHeaderText = createElement("h2", "section-header-text", "contact-header-text");
contactHeaderText.textContent = "05. ";
const contactHeaderTitle = createElement("span", "section-header-title", "contact-header-title");
contactHeaderTitle.textContent = "Get In Touch";
contactHeaderText.appendChild(contactHeaderTitle);
contactHeader.appendChild(contactHeaderText);

const contactBodyTop = createElement("div", "contact-body-top");
contactBody.appendChild(contactBodyTop);
const contactBodyText1 = createElement("p", "contact-body-text");
contactBodyText1.textContent = "I'm currently looking for new opportunities, both freelance and full-time. If you'd like to get in touch, you can contact me via the form below. You can also reach out to me on Social Networks.";
contactBodyTop.appendChild(contactBodyText1);
const contactBodyText2 = createElement("p", "contact-body-text");
contactBodyText2.textContent = "I'll get back to you as soon as possible!";
contactBodyTop.appendChild(contactBodyText2);
const contactBodyBottom = createElement("div", "contact-body-bottom");
contactBody.appendChild(contactBodyBottom);
const contactBodyForm = createElement("form", "contact-body-form");
contactBodyBottom.appendChild(contactBodyForm);
const contactBodySocial = createElement("div", "contact-body-social");
contactBodyBottom.appendChild(contactBodySocial);
const linkedInLink = createElement("a", "contact-body-social-link");
linkedInLink.href = "https://www.linkedin.com/in/raul-jimenez-fernandez/";
linkedInLink.target = "_blank";
linkedInLink.rel = "noopener noreferrer";
contactBodySocial.appendChild(linkedInLink);
const linkedInImg = createElement("img", "social-img");
linkedInImg.src = LinkedIn;
linkedInImg.alt = "LinkedIn";
linkedInLink.appendChild(linkedInImg);
const instagramLink = createElement("a", "contact-body-social-link");
instagramLink.href = "https://www.instagram.com/rauljimenezfernandez/";
instagramLink.target = "_blank";
instagramLink.rel = "noopener noreferrer";
contactBodySocial.appendChild(instagramLink);
const instagramImg = createElement("img", "social-img");
instagramImg.src = Instagram;
instagramImg.alt = "Instagram";
instagramLink.appendChild(instagramImg);
const githubLink = createElement("a", "contact-body-social-link");
githubLink.href = ""
githubLink.target = "_blank";
githubLink.rel = "noopener noreferrer";
contactBodySocial.appendChild(githubLink);
const githubImg = createElement("img", "social-img");
githubImg.src = GitHub;
githubImg.alt = "GitHub";
githubLink.appendChild(githubImg);
const xLink = createElement("a", "contact-body-social-link");
xLink.href = "https://www.xing.com/profile/Raul_JimenezFernandez/cv";
xLink.target = "_blank";
xLink.rel = "noopener noreferrer";
contactBodySocial.appendChild(xLink);
const xImg = createElement("img", "social-img");
xImg.src = X;
xImg.alt = "X";
xLink.appendChild(xImg);
const mailLink = createElement("a", "contact-body-social-link");
mailLink.href = "mailto:rjbarco@gmail.com";
mailLink.target = "_blank";
mailLink.rel = "noopener noreferrer";
contactBodySocial.appendChild(mailLink);
const mailImg = createElement("img", "social-img");
mailImg.src = Mail;
mailImg.alt = "Mail";
mailLink.appendChild(mailImg);
const contactBodyFormDiv = createElement("div", "contact-body-form-div");
contactBodyForm.appendChild(contactBodyFormDiv);
const nameDiv = createElement("div", "form-field-div", "name-div");
contactBodyFormDiv.appendChild(nameDiv);
const nameLabel = createElement("label", "contact-body-form-label", "name-label");
nameLabel.for = "name";
nameLabel.textContent = "Name";
nameDiv.appendChild(nameLabel);
const nameInput = createElement("input", "contact-body-form-input", "name-input");
nameInput.type = "text";
nameInput.id = "name";
nameInput.name = "name";
nameDiv.appendChild(nameInput);
const emailDiv = createElement("div", "form-field-div", "email-div");
contactBodyFormDiv.appendChild(emailDiv);
const emailLabel = createElement("label", "contact-body-form-label", "email-label");
emailLabel.for = "email";
emailLabel.textContent = "Email";
emailDiv.appendChild(emailLabel);
const emailInput = createElement("input", "contact-body-form-input", "email-input");
emailInput.type = "email";
emailInput.id = "email";
emailInput.name = "email";
emailDiv.appendChild(emailInput);
const messageDiv = createElement("div", "form-field-div", "message-div");
contactBodyFormDiv.appendChild(messageDiv);
const messageLabel = createElement("label", "contact-body-form-label", "message-label");
messageLabel.for = "message";
messageLabel.textContent = "Message";
messageDiv.appendChild(messageLabel);
const messageTextarea = createElement("textarea", "contact-body-form-textarea", "message-textarea");
messageTextarea.id = "message";
messageTextarea.name = "message";
messageTextarea.rows = "5";
messageDiv.appendChild(messageTextarea);
const contactBodyFormButton = createElement("button", "contact-body-form-button");
contactBodyFormButton.type = "submit";
contactBodyFormButton.textContent = "Send Message";
contactBodyFormDiv.appendChild(contactBodyFormButton);

// Create the credits and append them to the footer
const credits = createElement("p","credits",null)
// eslint-disable-next-line quotes
credits.innerHTML = 'Created by RAÚL JIMÉNEZ. Follow my work on GitHub: <br><br><a class="github-link" href="https://github.com/veregorn" target="_blank" rel="noopener noreferrer"><svg class="github-icon" width="32" height="32" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a>'
footer.appendChild(credits)