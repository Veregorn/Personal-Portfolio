(self["webpackChunkpersonal_portfolio"] = self["webpackChunkpersonal_portfolio"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _assets_images_handsome_man_with_blue_glasses_presenting_something_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/handsome-man-with-blue-glasses-presenting-something.jpg */ "./src/assets/images/handsome-man-with-blue-glasses-presenting-something.jpg");
/* harmony import */ var _assets_images_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/linkedin-icon.svg */ "./src/assets/images/linkedin-icon.svg");
/* harmony import */ var _assets_images_instagram_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/instagram-icon.svg */ "./src/assets/images/instagram-icon.svg");
/* harmony import */ var _assets_images_github_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/github-icon.svg */ "./src/assets/images/github-icon.svg");
/* harmony import */ var _assets_images_x_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/x-icon.svg */ "./src/assets/images/x-icon.svg");
/* harmony import */ var _assets_images_mail_icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/mail-icon.svg */ "./src/assets/images/mail-icon.svg");

// import Me from "./assets/images/man-white.jpg";

// import Project1 from "./assets/images/project1.png";
// import Project2 from "./assets/images/project2.png";






// Creating a context for images
const imagesContext = __webpack_require__("./src/assets/images sync \\.(png%7Cjpe?g%7Csvg%7Cgif)$");

// Import data from JSON files
const projectsData = __webpack_require__(/*! ./assets/data/projects.json */ "./src/assets/data/projects.json");

// Create an element with an optional CSS class and optional CSS id
function createElement(tag, className, id) {
  const element = document.createElement(tag);
  if (className) {
    element.classList.add(className);
  }
  if (id) {
    element.setAttribute("id", id);
  }
  return element;
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
menuItems.forEach(item => {
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

// Add each subsection to the header
header.appendChild(logo);
header.appendChild(nav);

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

// const MeImage = createElement("img", "home-image");
const MeImage = new Image();
MeImage.classList.add("home-image");
// MeImage.src = Me;
MeImage.src = "images/man-white.jpg";
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
const aboutBodyImage = createElement("img", "section-body-image", "about-body-image");
aboutBodyImage.src = _assets_images_handsome_man_with_blue_glasses_presenting_something_jpg__WEBPACK_IMPORTED_MODULE_1__;
aboutBodyImage.alt = "Me";
aboutBody.appendChild(aboutBodyImage);
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
stackTableHeadRow.appendChild(stackTableHeadCol2);
const stackTableHeadCol3 = createElement("th", "section-body-table-head-cell", "stack-table-head-cell-3");
stackTableHeadCol3.textContent = "Elementary";
stackTableHeadRow.appendChild(stackTableHeadCol3);
const stackTableHeadCol4 = createElement("th", "section-body-table-head-cell", "stack-table-head-cell-4");
stackTableHeadCol4.textContent = "Intermediate";
stackTableHeadRow.appendChild(stackTableHeadCol4);
const stackTableHeadCol5 = createElement("th", "section-body-table-head-cell", "stack-table-head-cell-5");
stackTableHeadCol5.textContent = "Advanced";
stackTableHeadRow.appendChild(stackTableHeadCol5);
const stackTableHeadCol6 = createElement("th", "section-body-table-head-cell", "stack-table-head-cell-6");
stackTableHeadCol6.textContent = "Expert";
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
  // const projectImage = createElement("img", "project-image");
  const projectImage = new Image();
  projectImage.src = imagesContext(`${project.image}`);
  projectImage.alt = project.alt;
  projectDivBottom.appendChild(projectImage);
}

// Fetching the data from the JSON file
projectsData.projects.forEach(createProject);

/* const projectDiv = createElement("div", "project-div");
projectsBodyDiv.appendChild(projectDiv);
const projectDivTop = createElement("div", "project-div-top");
projectDiv.appendChild(projectDivTop);
const projectDivTopLeft = createElement("div", "project-div-top-left");
projectDivTop.appendChild(projectDivTopLeft);
const projectTitle1 = createElement("h3", "project-title");
projectTitle1.textContent = "Project 1";
projectDivTopLeft.appendChild(projectTitle1);
const projectSubtitle1 = createElement("h4", "project-subtitle");
projectSubtitle1.textContent = "Project 1 subtitle";
projectDivTopLeft.appendChild(projectSubtitle1);
const projectDivTopRight = createElement("div", "project-div-top-right");
projectDivTop.appendChild(projectDivTopRight);
const projectDescription1 = createElement("p", "project-description");
projectDescription1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl";
projectDivTopRight.appendChild(projectDescription1);
const projectLinkButton1 = createElement("a", "project-link-button");
projectLinkButton1.href = "#";
projectLinkButton1.target = "_blank";
projectLinkButton1.rel = "noopener noreferrer";
projectLinkButton1.textContent = "View Live";
projectDivTopRight.appendChild(projectLinkButton1);
const projectDivBottom = createElement("div", "project-div-bottom");
projectDiv.appendChild(projectDivBottom);
const projectImage = createElement("img", "project-image");
projectImage.src = Project1;
projectImage.alt = "Project 1";
projectDivBottom.appendChild(projectImage); */

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
linkedInImg.src = _assets_images_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_2__;
linkedInImg.alt = "LinkedIn";
linkedInLink.appendChild(linkedInImg);
const instagramLink = createElement("a", "contact-body-social-link");
instagramLink.href = "https://www.instagram.com/rauljimenezfernandez/";
instagramLink.target = "_blank";
instagramLink.rel = "noopener noreferrer";
contactBodySocial.appendChild(instagramLink);
const instagramImg = createElement("img", "social-img");
instagramImg.src = _assets_images_instagram_icon_svg__WEBPACK_IMPORTED_MODULE_3__;
instagramImg.alt = "Instagram";
instagramLink.appendChild(instagramImg);
const githubLink = createElement("a", "contact-body-social-link");
githubLink.href = "";
githubLink.target = "_blank";
githubLink.rel = "noopener noreferrer";
contactBodySocial.appendChild(githubLink);
const githubImg = createElement("img", "social-img");
githubImg.src = _assets_images_github_icon_svg__WEBPACK_IMPORTED_MODULE_4__;
githubImg.alt = "GitHub";
githubLink.appendChild(githubImg);
const xLink = createElement("a", "contact-body-social-link");
xLink.href = "https://www.xing.com/profile/Raul_JimenezFernandez/cv";
xLink.target = "_blank";
xLink.rel = "noopener noreferrer";
contactBodySocial.appendChild(xLink);
const xImg = createElement("img", "social-img");
xImg.src = _assets_images_x_icon_svg__WEBPACK_IMPORTED_MODULE_5__;
xImg.alt = "X";
xLink.appendChild(xImg);
const mailLink = createElement("a", "contact-body-social-link");
mailLink.href = "mailto:rjbarco@gmail.com";
mailLink.target = "_blank";
mailLink.rel = "noopener noreferrer";
contactBodySocial.appendChild(mailLink);
const mailImg = createElement("img", "social-img");
mailImg.src = _assets_images_mail_icon_svg__WEBPACK_IMPORTED_MODULE_6__;
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
const credits = createElement("p", "credits", null);
// eslint-disable-next-line quotes
credits.innerHTML = 'Created by RAÚL JIMÉNEZ. Follow my work on GitHub: <br><br><a class="github-link" href="https://github.com/veregorn" target="_blank" rel="noopener noreferrer"><svg class="github-icon" width="32" height="32" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a>';
footer.appendChild(credits);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf */ "./src/assets/fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/circuit-primary.svg */ "./src/assets/images/circuit-primary.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* MY OWN STYLES FROM HERE */

@font-face {
    font-family: 'Space Grotesk';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    font-family: 'Space Grotesk', sans-serif;
    font-size: calc(12px + 0.390625vw);
    color: #000000;
    min-height: 100vh;
}

h1 {
    font-size: 3rem;
}

h2 {
    font-size: 2.5rem;
}

h3 {
    font-size: 2rem;
}

h4 {
    font-size: 1.5rem;
}

header,footer {
    display: flex;
    align-items: center;
    padding: 20px 40px;
    background-color: #000000;
    color: #E6FFF6;
}

header {
    justify-content: space-between;
    font-size: 2;
}

.logo {
    color: #E6FFF6;
}

nav {
    display: flex;
    align-items: center;
}

.menu {
    display: flex;
    align-items: center;
}

.menu-item {
    margin-left: 5px;
    cursor: pointer;
}

.menu-item::after {
    content: '';
    width: 0%;
    height: 1px;
    margin-top: 5px;
    display: block;
    transition: all 0.3s ease;
}

.menu-item:hover::after {
    width: 100%;
    height: 1px;
    margin-top: 5px;
    background-color: #E6FFF6;
}

.menu-item-number {
    margin-left: 20px;
    color: #00A97F;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1; /* Esto hace que main ocupe todo el espacio restante después de header y antes de footer */
    gap: 5%;
}

section {
    /* padding-top: 6rem; */
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    gap: 5%;
}

.home {
    /* padding-top: 6rem; */
    width: 100%;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: end;
    flex-grow: 1;
    gap: 5%;
    margin-right: 4rem;
    min-height: 100vh;
}

.main-text {
    color: #01876C;
    line-height: 4rem;
    text-align: end;
    margin-bottom: 30%;
}

.main-text-name {
    color: #000000;
    font-size: 4rem;
}

.main-text-role {
    color: #01876C;
}

.home-image {
    width: 600px;
    height: auto;
}

/* About section */

.section-header {
    width: 100%;
    margin-bottom: 2rem;
}

.section-header-text {
    color: #01876C;
}

.section-header-title {
    color: #000000;
}

.section-header-line {
    width: 100%;
    height: 1px;
    /* margin-top: 0.5rem; */
    margin-bottom: 1.5rem;
    background-color: #00A97F;
}

#about-body {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: center;
    gap: 5%;
}

#about-body-image {
    width: 500px;
    height: auto;
}

.section-body-text {
    color: #000000;
    line-height: 2rem;
    text-align: justify;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

/* Stack section */

table {
    width: 100%;
    margin-bottom: 4rem;
}

th {
    width: 8rem;
    padding: 1rem;
    text-align: center;
    vertical-align: middle;
    border-bottom: 1px solid #00A97F;
}

.section-body-table-body-cell-filled {
    position: relative;
    padding: 10px;
}

.section-body-table-body-cell-empty {
    position: relative;
    padding: 10px;
}

.section-body-table-body-cell-filled::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 5px;
    right: 5px;
    bottom: 15px;
    background-color: #00A97F;
}

.section-body-table-body-cell-empty::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 5px;
    right: 5px;
    bottom: 15px;
    background-color: #000000;
}

/* Projects section */

#projects-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5%;
}


#projects-body-div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5%;
}

.project-div {
    margin-bottom: 4rem;
    width: 800px;
}

.project-div-top {
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.project-title {
    margin-bottom: 1rem;
}

.project-div-top-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    max-width: 70%;
}

.project-description {
    text-align: justify;
    line-height: 2rem;
}

.project-link-button {
    padding: 0.5rem 1rem;
    border: 1px solid #00A97F;
    border-radius: 5px;
    background-color: #00A97F;
    color: #ffffff;
    text-decoration: none;
    transition: all 0.3s ease;
}

.project-link-button:hover {
    background-color: #ffffff;
    color: #00A97F;
}

.project-div-bottom {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5%;
}

.project-image {
    width: 800px;
    height: auto;
    border: 8px solid #000000;
    border-radius: 20px;
    box-shadow: 0 10px 5px -4px rgba(0, 0, 0, 0.5);
}

/* Contact section */

#contact-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5%;
}

.contact-body-top {
    color: #000000;
    line-height: 2rem;
    margin-bottom: 2rem;
}

.contact-body-bottom {
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;
}

.contact-body-social {
    padding-left: 4rem;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1.5rem;
}

.contact-body-text {
    color: #000000;
    line-height: 2rem;
    text-align: justify;
    margin-bottom: 1rem;
}

.contact-body-form {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #00A97F;
    border-radius: 10px;
    padding: 2rem 4rem;
    background-color: #C8FCEA;
}

.form-field-div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10%;
    padding: 1rem;
}

.contact-body-form-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.contact-body-form-label {
    width: 30%;
    text-align: left;
    color: #000000;
    padding-top: 0.5rem;
}

.contact-body-form-input {
    width: 70%;
    padding: 0.5rem;
    border: 1px solid #52BD9F;
    border-radius: 5px;
    background-color: #ffffff;
    color: #000000;
    transition: all 0.3s ease;
    font-size: 1rem;
}

.contact-body-form-input:focus {
    outline: none;
    border: 2px solid #00A97F;
}

.contact-body-form-textarea {
    width: 70%;
    padding: 0.5rem;
    border: 1px solid #52BD9F;
    border-radius: 5px;
    background-color: #ffffff;
    color: #000000;
    transition: all 0.3s ease;
    font-size: 1rem;
}

.contact-body-form-textarea:focus {
    outline: none;
    border: 2px solid #00A97F;
}

.contact-body-form-button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid #00A97F;
    border-radius: 5px;
    background-color: #00A97F;
    color: #ffffff;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1rem;
}

.contact-body-form-button:hover {
    background-color: #ffffff;
    color: #00A97F;
}

.social-img {
    width: 50px;
    height: auto;
    transition: all 0.3s ease;
}

.social-img:hover {
    transform: scale(1.2);
}

/* footer */

footer {
    justify-content: center;
}

.credits {
    text-align: center;
}

/* Style the link to remove default styling */
.github-link {
    display: inline-block;
    text-decoration: none;
    color: inherit;
}

/* Add the hover effect */
.github-icon {
    transition: transform 0.5s ease-in-out; /* Add a transition for the transform property */
}

.github-link:hover .github-icon {
    transform: rotate(180deg); /* Rotate the icon 180 degrees when hovered */
}`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* MY OWN STYLES FROM HERE */\n\n@font-face {\n    font-family: 'Space Grotesk';\n    src: url('../assets/fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf');\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    background-color: #ffffff;\n    font-family: 'Space Grotesk', sans-serif;\n    font-size: calc(12px + 0.390625vw);\n    color: #000000;\n    min-height: 100vh;\n}\n\nh1 {\n    font-size: 3rem;\n}\n\nh2 {\n    font-size: 2.5rem;\n}\n\nh3 {\n    font-size: 2rem;\n}\n\nh4 {\n    font-size: 1.5rem;\n}\n\nheader,footer {\n    display: flex;\n    align-items: center;\n    padding: 20px 40px;\n    background-color: #000000;\n    color: #E6FFF6;\n}\n\nheader {\n    justify-content: space-between;\n    font-size: 2;\n}\n\n.logo {\n    color: #E6FFF6;\n}\n\nnav {\n    display: flex;\n    align-items: center;\n}\n\n.menu {\n    display: flex;\n    align-items: center;\n}\n\n.menu-item {\n    margin-left: 5px;\n    cursor: pointer;\n}\n\n.menu-item::after {\n    content: '';\n    width: 0%;\n    height: 1px;\n    margin-top: 5px;\n    display: block;\n    transition: all 0.3s ease;\n}\n\n.menu-item:hover::after {\n    width: 100%;\n    height: 1px;\n    margin-top: 5px;\n    background-color: #E6FFF6;\n}\n\n.menu-item-number {\n    margin-left: 20px;\n    color: #00A97F;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex-grow: 1; /* Esto hace que main ocupe todo el espacio restante después de header y antes de footer */\n    gap: 5%;\n}\n\nsection {\n    /* padding-top: 6rem; */\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex-grow: 1;\n    gap: 5%;\n}\n\n.home {\n    /* padding-top: 6rem; */\n    width: 100%;\n    background: url('../assets/images/circuit-primary.svg') no-repeat;\n    display: flex;\n    flex-direction: row;\n    align-items: end;\n    justify-content: end;\n    flex-grow: 1;\n    gap: 5%;\n    margin-right: 4rem;\n    min-height: 100vh;\n}\n\n.main-text {\n    color: #01876C;\n    line-height: 4rem;\n    text-align: end;\n    margin-bottom: 30%;\n}\n\n.main-text-name {\n    color: #000000;\n    font-size: 4rem;\n}\n\n.main-text-role {\n    color: #01876C;\n}\n\n.home-image {\n    width: 600px;\n    height: auto;\n}\n\n/* About section */\n\n.section-header {\n    width: 100%;\n    margin-bottom: 2rem;\n}\n\n.section-header-text {\n    color: #01876C;\n}\n\n.section-header-title {\n    color: #000000;\n}\n\n.section-header-line {\n    width: 100%;\n    height: 1px;\n    /* margin-top: 0.5rem; */\n    margin-bottom: 1.5rem;\n    background-color: #00A97F;\n}\n\n#about-body {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: top;\n    justify-content: center;\n    gap: 5%;\n}\n\n#about-body-image {\n    width: 500px;\n    height: auto;\n}\n\n.section-body-text {\n    color: #000000;\n    line-height: 2rem;\n    text-align: justify;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 1rem;\n}\n\n/* Stack section */\n\ntable {\n    width: 100%;\n    margin-bottom: 4rem;\n}\n\nth {\n    width: 8rem;\n    padding: 1rem;\n    text-align: center;\n    vertical-align: middle;\n    border-bottom: 1px solid #00A97F;\n}\n\n.section-body-table-body-cell-filled {\n    position: relative;\n    padding: 10px;\n}\n\n.section-body-table-body-cell-empty {\n    position: relative;\n    padding: 10px;\n}\n\n.section-body-table-body-cell-filled::after {\n    content: '';\n    position: absolute;\n    top: 15px;\n    left: 5px;\n    right: 5px;\n    bottom: 15px;\n    background-color: #00A97F;\n}\n\n.section-body-table-body-cell-empty::after {\n    content: '';\n    position: absolute;\n    top: 15px;\n    left: 5px;\n    right: 5px;\n    bottom: 15px;\n    background-color: #000000;\n}\n\n/* Projects section */\n\n#projects-body {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5%;\n}\n\n\n#projects-body-div {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5%;\n}\n\n.project-div {\n    margin-bottom: 4rem;\n    width: 800px;\n}\n\n.project-div-top {\n    display: flex;\n    flex-direction: row;\n    align-items: top;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n}\n\n.project-title {\n    margin-bottom: 1rem;\n}\n\n.project-div-top-right {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 1rem;\n    max-width: 70%;\n}\n\n.project-description {\n    text-align: justify;\n    line-height: 2rem;\n}\n\n.project-link-button {\n    padding: 0.5rem 1rem;\n    border: 1px solid #00A97F;\n    border-radius: 5px;\n    background-color: #00A97F;\n    color: #ffffff;\n    text-decoration: none;\n    transition: all 0.3s ease;\n}\n\n.project-link-button:hover {\n    background-color: #ffffff;\n    color: #00A97F;\n}\n\n.project-div-bottom {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 5%;\n}\n\n.project-image {\n    width: 800px;\n    height: auto;\n    border: 8px solid #000000;\n    border-radius: 20px;\n    box-shadow: 0 10px 5px -4px rgba(0, 0, 0, 0.5);\n}\n\n/* Contact section */\n\n#contact-body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5%;\n}\n\n.contact-body-top {\n    color: #000000;\n    line-height: 2rem;\n    margin-bottom: 2rem;\n}\n\n.contact-body-bottom {\n    width: 60%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 4rem;\n}\n\n.contact-body-social {\n    padding-left: 4rem;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n    gap: 1.5rem;\n}\n\n.contact-body-text {\n    color: #000000;\n    line-height: 2rem;\n    text-align: justify;\n    margin-bottom: 1rem;\n}\n\n.contact-body-form {\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #00A97F;\n    border-radius: 10px;\n    padding: 2rem 4rem;\n    background-color: #C8FCEA;\n}\n\n.form-field-div {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 10%;\n    padding: 1rem;\n}\n\n.contact-body-form-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.contact-body-form-label {\n    width: 30%;\n    text-align: left;\n    color: #000000;\n    padding-top: 0.5rem;\n}\n\n.contact-body-form-input {\n    width: 70%;\n    padding: 0.5rem;\n    border: 1px solid #52BD9F;\n    border-radius: 5px;\n    background-color: #ffffff;\n    color: #000000;\n    transition: all 0.3s ease;\n    font-size: 1rem;\n}\n\n.contact-body-form-input:focus {\n    outline: none;\n    border: 2px solid #00A97F;\n}\n\n.contact-body-form-textarea {\n    width: 70%;\n    padding: 0.5rem;\n    border: 1px solid #52BD9F;\n    border-radius: 5px;\n    background-color: #ffffff;\n    color: #000000;\n    transition: all 0.3s ease;\n    font-size: 1rem;\n}\n\n.contact-body-form-textarea:focus {\n    outline: none;\n    border: 2px solid #00A97F;\n}\n\n.contact-body-form-button {\n    margin-top: 1rem;\n    padding: 0.5rem 1rem;\n    border: 1px solid #00A97F;\n    border-radius: 5px;\n    background-color: #00A97F;\n    color: #ffffff;\n    text-decoration: none;\n    transition: all 0.3s ease;\n    font-size: 1rem;\n}\n\n.contact-body-form-button:hover {\n    background-color: #ffffff;\n    color: #00A97F;\n}\n\n.social-img {\n    width: 50px;\n    height: auto;\n    transition: all 0.3s ease;\n}\n\n.social-img:hover {\n    transform: scale(1.2);\n}\n\n/* footer */\n\nfooter {\n    justify-content: center;\n}\n\n.credits {\n    text-align: center;\n}\n\n/* Style the link to remove default styling */\n.github-link {\n    display: inline-block;\n    text-decoration: none;\n    color: inherit;\n}\n\n/* Add the hover effect */\n.github-icon {\n    transition: transform 0.5s ease-in-out; /* Add a transition for the transform property */\n}\n\n.github-link:hover .github-icon {\n    transform: rotate(180deg); /* Rotate the icon 180 degrees when hovered */\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images sync \\.(png%7Cjpe?g%7Csvg%7Cgif)$":
/*!***************************************************************************!*\
  !*** ./src/assets/images/ sync nonrecursive \.(png%7Cjpe?g%7Csvg%7Cgif)$ ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./17F96B97-9B2E-426B-A68B-6936D6FDD12E.jpg": "./src/assets/images/17F96B97-9B2E-426B-A68B-6936D6FDD12E.jpg",
	"./charles-deloye-9hFPS9YYaTo-unsplash.jpg": "./src/assets/images/charles-deloye-9hFPS9YYaTo-unsplash.jpg",
	"./circuit-primary.svg": "./src/assets/images/circuit-primary.svg",
	"./github-icon.svg": "./src/assets/images/github-icon.svg",
	"./handsome-man-with-blue-glasses-presenting-something.jpg": "./src/assets/images/handsome-man-with-blue-glasses-presenting-something.jpg",
	"./instagram-icon.svg": "./src/assets/images/instagram-icon.svg",
	"./linkedin-icon.svg": "./src/assets/images/linkedin-icon.svg",
	"./mail-icon.svg": "./src/assets/images/mail-icon.svg",
	"./man-white.jpg": "./src/assets/images/man-white.jpg",
	"./pexels-artem-podrez-4817406.jpg": "./src/assets/images/pexels-artem-podrez-4817406.jpg",
	"./pexels-canva-studio-3153203.jpg": "./src/assets/images/pexels-canva-studio-3153203.jpg",
	"./pexels-marcus-silva-10508561-2.jpg": "./src/assets/images/pexels-marcus-silva-10508561-2.jpg",
	"./pexels-marcus-silva-10508561-3.jpg": "./src/assets/images/pexels-marcus-silva-10508561-3.jpg",
	"./pexels-marcus-silva-10508561.jpg": "./src/assets/images/pexels-marcus-silva-10508561.jpg",
	"./project1.png": "./src/assets/images/project1.png",
	"./project2.png": "./src/assets/images/project2.png",
	"./x-icon.svg": "./src/assets/images/x-icon.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync \\.(png%7Cjpe?g%7Csvg%7Cgif)$";

/***/ }),

/***/ "./src/assets/fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf":
/*!***************************************************************************!*\
  !*** ./src/assets/fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1036357b9651eff7d3dd.ttf";

/***/ }),

/***/ "./src/assets/images/17F96B97-9B2E-426B-A68B-6936D6FDD12E.jpg":
/*!********************************************************************!*\
  !*** ./src/assets/images/17F96B97-9B2E-426B-A68B-6936D6FDD12E.jpg ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fa6e18c599bb0b922c3a.jpg";

/***/ }),

/***/ "./src/assets/images/charles-deloye-9hFPS9YYaTo-unsplash.jpg":
/*!*******************************************************************!*\
  !*** ./src/assets/images/charles-deloye-9hFPS9YYaTo-unsplash.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "45c0125ecace6063c151.jpg";

/***/ }),

/***/ "./src/assets/images/circuit-primary.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/circuit-primary.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "053bed0dc0b6846f942d.svg";

/***/ }),

/***/ "./src/assets/images/github-icon.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/github-icon.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bf3ced565010463bfed0.svg";

/***/ }),

/***/ "./src/assets/images/handsome-man-with-blue-glasses-presenting-something.jpg":
/*!***********************************************************************************!*\
  !*** ./src/assets/images/handsome-man-with-blue-glasses-presenting-something.jpg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "29bee072f3e0c45b8f02.jpg";

/***/ }),

/***/ "./src/assets/images/instagram-icon.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/instagram-icon.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d505e743bd799e955b09.svg";

/***/ }),

/***/ "./src/assets/images/linkedin-icon.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/linkedin-icon.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ec72efab974636e30c3d.svg";

/***/ }),

/***/ "./src/assets/images/mail-icon.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/mail-icon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "961806770ef85717841f.svg";

/***/ }),

/***/ "./src/assets/images/man-white.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/man-white.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a624c7497ffc79ea3327.jpg";

/***/ }),

/***/ "./src/assets/images/pexels-artem-podrez-4817406.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/pexels-artem-podrez-4817406.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5c2148f7a703aafe40d9.jpg";

/***/ }),

/***/ "./src/assets/images/pexels-canva-studio-3153203.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/images/pexels-canva-studio-3153203.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c98b8cd1363671c5b8dc.jpg";

/***/ }),

/***/ "./src/assets/images/pexels-marcus-silva-10508561-2.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/pexels-marcus-silva-10508561-2.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6c5fc618a10a368bb611.jpg";

/***/ }),

/***/ "./src/assets/images/pexels-marcus-silva-10508561-3.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/pexels-marcus-silva-10508561-3.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0c0ccabcfb1500224e41.jpg";

/***/ }),

/***/ "./src/assets/images/pexels-marcus-silva-10508561.jpg":
/*!************************************************************!*\
  !*** ./src/assets/images/pexels-marcus-silva-10508561.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bf4bdadff1d915f2a65f.jpg";

/***/ }),

/***/ "./src/assets/images/project1.png":
/*!****************************************!*\
  !*** ./src/assets/images/project1.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9c27d3392e471d0321b5.png";

/***/ }),

/***/ "./src/assets/images/project2.png":
/*!****************************************!*\
  !*** ./src/assets/images/project2.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b23646f6a8157cd6725d.png";

/***/ }),

/***/ "./src/assets/images/x-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/images/x-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5b5e76984feac6b33e4b.svg";

/***/ }),

/***/ "./src/assets/data/projects.json":
/*!***************************************!*\
  !*** ./src/assets/data/projects.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"projects":[{"title":"Proyecto A","subtitle":"Subtítulo del Proyecto A","description":"Esta es la descripción detallada del Proyecto A.","link":"https://linkalproyectoA.com","image":"project1.png","alt":"Imagen descriptiva del Proyecto A"},{"title":"Proyecto B","subtitle":"Subtítulo del Proyecto B","description":"Esta es la descripción detallada del Proyecto B.","link":"https://linkalproyectoB.com","image":"project2.png","alt":"Imagen descriptiva del Proyecto B"}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQixDQUFDLE9BQU8seUZBQXlGLE1BQU0saUJBQWlCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsdUJBQXVCLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEs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QSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2ltYWdlcy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5jc3NcIjtcbi8vIGltcG9ydCBNZSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL21hbi13aGl0ZS5qcGdcIjtcbmltcG9ydCBBYm91dEltZyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2hhbmRzb21lLW1hbi13aXRoLWJsdWUtZ2xhc3Nlcy1wcmVzZW50aW5nLXNvbWV0aGluZy5qcGdcIjtcbi8vIGltcG9ydCBQcm9qZWN0MSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3Byb2plY3QxLnBuZ1wiO1xuLy8gaW1wb3J0IFByb2plY3QyIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvcHJvamVjdDIucG5nXCI7XG5pbXBvcnQgTGlua2VkSW4gZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9saW5rZWRpbi1pY29uLnN2Z1wiO1xuaW1wb3J0IEluc3RhZ3JhbSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2luc3RhZ3JhbS1pY29uLnN2Z1wiO1xuaW1wb3J0IEdpdEh1YiBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2dpdGh1Yi1pY29uLnN2Z1wiO1xuaW1wb3J0IFggZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy94LWljb24uc3ZnXCI7XG5pbXBvcnQgTWFpbCBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL21haWwtaWNvbi5zdmdcIjtcblxuLy8gQ3JlYXRpbmcgYSBjb250ZXh0IGZvciBpbWFnZXNcbmNvbnN0IGltYWdlc0NvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXCIuL2Fzc2V0cy9pbWFnZXNcIiwgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2Z3xnaWYpJC8pO1xuXG4vLyBJbXBvcnQgZGF0YSBmcm9tIEpTT04gZmlsZXNcbmNvbnN0IHByb2plY3RzRGF0YSA9IHJlcXVpcmUoXCIuL2Fzc2V0cy9kYXRhL3Byb2plY3RzLmpzb25cIik7XG5cbi8vIENyZWF0ZSBhbiBlbGVtZW50IHdpdGggYW4gb3B0aW9uYWwgQ1NTIGNsYXNzIGFuZCBvcHRpb25hbCBDU1MgaWRcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc05hbWUsIGlkKSB7XG4gICAgICAgIFxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZylcblxuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICB9XG5cbiAgICBpZiAoaWQpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLGlkKVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50XG5cbn1cblxuLy8gUmV0cmlldmUgYW4gZWxlbWVudCBmcm9tIHRoZSBET01cbi8qIGZ1bmN0aW9uIGdldEVsZW1lbnQoaWQpIHtcbiAgICAgICAgXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuXG4gICAgcmV0dXJuIGVsZW1lbnRcblxufSAqL1xuXG4vLyBDcmVhdGUgMyBtYWluIHNlY3Rpb25zXG5jb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuLy8gQWRkIGVhY2ggc2VjdGlvbiB0byB0aGUgRE9NXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4vLyBBZGQgMiBzdWJzZWN0aW9ucyB0byBoZWFkZXIsIG9uZSBmb3IgYSBsb2dvIGFuZCBvbmUgZm9yIGEgbmF2XG5jb25zdCBsb2dvID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImxvZ29cIik7XG5jb25zdCBuYXYgPSBjcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXG4vLyBBZGQgY29udGVudCB0byBsb2dvIHN1YnNlY3Rpb25cbmNvbnN0IGxvZ29UZXh0ID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwibG9nby10ZXh0XCIpO1xubG9nb1RleHQudGV4dENvbnRlbnQgPSBcIlIuSi5cIjtcbmxvZ28uYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xuXG4vLyBBZGQgY29udGVudCB0byBuYXYgc3Vic2VjdGlvbiAobWVudSBsaW5rIGl0ZW1zKVxuY29uc3QgbWVudSA9IGNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBcIm1lbnVcIik7XG5jb25zdCBtZW51SXRlbXMgPSBbXCJIb21lXCIsIFwiQWJvdXRcIiwgXCJTdGFja1wiLCBcIlByb2plY3RzXCIsIFwiQ29udGFjdFwiXTtcbi8vIENyZWF0ZSBhIGFsd2F5cyB0d28gZGlnaXQgY291bnRlciBmb3IgdGhlIG1lbnUgaXRlbXNcbmxldCBjb3VudGVyID0gMTtcblxuZnVuY3Rpb24gdHdvRGlnaXRDb3VudGVyKHZhbHVlKSB7XG4gICAgXG4gICAgaWYgKHZhbHVlIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGAwJHt2YWx1ZX0uYDtcbiAgICB9IFxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgXG59XG5cbm1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbnVtTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcIm1lbnUtaXRlbS1udW1iZXJcIik7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVFbGVtZW50KFwibGlcIiwgXCJtZW51LWl0ZW1cIik7XG4gICAgY29uc3QgaXRlbUxpbmsgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcIm1lbnUtaXRlbS1saW5rXCIpO1xuICAgIG51bUxhYmVsLnRleHRDb250ZW50ID0gdHdvRGlnaXRDb3VudGVyKGNvdW50ZXIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobnVtTGFiZWwpO1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgICBpdGVtTGluay50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUxpbmspO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xufSk7XG5cbm5hdi5hcHBlbmRDaGlsZChtZW51KTtcblxuLy8gQWRkIGVhY2ggc3Vic2VjdGlvbiB0byB0aGUgaGVhZGVyXG5oZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuLy8gQWRkIGNvbnRlbnQgdG8gbWFpbiBzZWN0aW9uXG4vLyBGaXJzdCBjcmVhdGUgNSBiaWcgc3Vic2VjdGlvbnNcbmNvbnN0IGhvbWUgPSBjcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBcImhvbWVcIik7XG5jb25zdCBhYm91dCA9IGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFwiYWJvdXRcIik7XG5jb25zdCBzdGFjayA9IGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFwic3RhY2tcIik7XG5jb25zdCBwcm9qZWN0cyA9IGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFwicHJvamVjdHNcIik7XG5jb25zdCBjb250YWN0ID0gY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgXCJjb250YWN0XCIpO1xuXG4vLyBBZGQgZWFjaCBzdWJzZWN0aW9uIHRvIHRoZSBtYWluIHNlY3Rpb25cbm1haW4uYXBwZW5kQ2hpbGQoaG9tZSk7XG5tYWluLmFwcGVuZENoaWxkKGFib3V0KTtcbm1haW4uYXBwZW5kQ2hpbGQoc3RhY2spO1xubWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG5tYWluLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4vLyBBZGQgY29udGVudCB0byBlYWNoIHN1YnNlY3Rpb25cbi8vIEhvbWVcbmNvbnN0IG1haW5UZXh0ID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwibWFpbi10ZXh0XCIpO1xubWFpblRleHQudGV4dENvbnRlbnQgPSBcIkhlbGxvISBJIGFtXCI7XG5ob21lLmFwcGVuZENoaWxkKG1haW5UZXh0KTtcbmNvbnN0IG5ld0xpbmUxID0gY3JlYXRlRWxlbWVudChcImJyXCIpO1xubWFpblRleHQuYXBwZW5kQ2hpbGQobmV3TGluZTEpO1xuY29uc3Qgc3Bhbk5hbWUgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcIm1haW4tdGV4dC1uYW1lXCIpO1xuc3Bhbk5hbWUudGV4dENvbnRlbnQgPSBcIlJhw7psIEppbcOpbmV6XCI7XG5tYWluVGV4dC5hcHBlbmRDaGlsZChzcGFuTmFtZSk7XG5jb25zdCBuZXdMaW5lMiA9IGNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcbm1haW5UZXh0LmFwcGVuZENoaWxkKG5ld0xpbmUyKTtcbmNvbnN0IHNwYW5Sb2xlID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJtYWluLXRleHQtcm9sZVwiKTtcbnNwYW5Sb2xlLnRleHRDb250ZW50ID0gXCJGdWxsIFN0YWNrIERldmVsb3BlclwiO1xubWFpblRleHQuYXBwZW5kQ2hpbGQoc3BhblJvbGUpO1xuXG4vLyBjb25zdCBNZUltYWdlID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcImhvbWUtaW1hZ2VcIik7XG5jb25zdCBNZUltYWdlID0gbmV3IEltYWdlKCk7XG5NZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJob21lLWltYWdlXCIpO1xuLy8gTWVJbWFnZS5zcmMgPSBNZTtcbk1lSW1hZ2Uuc3JjID0gXCJpbWFnZXMvbWFuLXdoaXRlLmpwZ1wiO1xuTWVJbWFnZS5hbHQgPSBcIk1lXCI7XG5ob21lLmFwcGVuZENoaWxkKE1lSW1hZ2UpO1xuXG4vLyBBYm91dFxuY29uc3QgYWJvdXRIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1oZWFkZXJcIiwgXCJhYm91dC1oZWFkZXJcIik7XG5jb25zdCBhYm91dEJvZHkgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1ib2R5XCIsIFwiYWJvdXQtYm9keVwiKTtcbmFib3V0LmFwcGVuZENoaWxkKGFib3V0SGVhZGVyKTtcbmFib3V0LmFwcGVuZENoaWxkKGFib3V0Qm9keSk7XG5cbmNvbnN0IGFib3V0SGVhZGVyTGluZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWhlYWRlci1saW5lXCIsIFwiYWJvdXQtaGVhZGVyLWxpbmVcIik7XG5hYm91dEhlYWRlci5hcHBlbmRDaGlsZChhYm91dEhlYWRlckxpbmUpO1xuY29uc3QgYWJvdXRIZWFkZXJUZXh0ID0gY3JlYXRlRWxlbWVudChcImgyXCIsIFwic2VjdGlvbi1oZWFkZXItdGV4dFwiLCBcImFib3V0LWhlYWRlci10ZXh0XCIpO1xuYWJvdXRIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCIwMi4gXCI7XG5jb25zdCBhYm91dEhlYWRlclRpdGxlID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJzZWN0aW9uLWhlYWRlci10aXRsZVwiLCBcImFib3V0LWhlYWRlci10aXRsZVwiKTtcbmFib3V0SGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IE1lXCI7XG5hYm91dEhlYWRlclRleHQuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkZXJUaXRsZSk7XG5hYm91dEhlYWRlci5hcHBlbmRDaGlsZChhYm91dEhlYWRlclRleHQpO1xuXG5jb25zdCBhYm91dEJvZHlJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJzZWN0aW9uLWJvZHktaW1hZ2VcIiwgXCJhYm91dC1ib2R5LWltYWdlXCIpO1xuYWJvdXRCb2R5SW1hZ2Uuc3JjID0gQWJvdXRJbWc7XG5hYm91dEJvZHlJbWFnZS5hbHQgPSBcIk1lXCI7XG5hYm91dEJvZHkuYXBwZW5kQ2hpbGQoYWJvdXRCb2R5SW1hZ2UpO1xuY29uc3QgYWJvdXRCb2R5RGl2VGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWJvZHktZGl2LXRleHRcIiwgXCJhYm91dC1ib2R5LWRpdi10ZXh0XCIpO1xuYWJvdXRCb2R5LmFwcGVuZENoaWxkKGFib3V0Qm9keURpdlRleHQpO1xuY29uc3QgYWJvdXRCb2R5VGV4dDEgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInNlY3Rpb24tYm9keS10ZXh0XCIsIFwiYWJvdXQtYm9keS10ZXh0LTFcIik7XG5hYm91dEJvZHlUZXh0MS50ZXh0Q29udGVudCA9IFwiSGV5IHRoZXJlISBJJ20gUmHDumwsIGFuZCBJIHdhbnQgdG8gc2hhcmUgYSBiaXQgb2YgbXkgc3Rvcnkgd2l0aCB5b3UuXCI7XG5hYm91dEJvZHlEaXZUZXh0LmFwcGVuZENoaWxkKGFib3V0Qm9keVRleHQxKTtcbmNvbnN0IGFib3V0Qm9keVRleHQyID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJzZWN0aW9uLWJvZHktdGV4dFwiLCBcImFib3V0LWJvZHktdGV4dC0yXCIpO1xuYWJvdXRCb2R5VGV4dDIudGV4dENvbnRlbnQgPSBcIkFib3V0IDIwIHllYXJzIGFnbywgSSBncmFkdWF0ZWQgaW4gQ29tcHV0ZXIgU2NpZW5jZS4gQWZ0ZXIgbGVhdmluZyB1bml2ZXJzaXR5LCBJIHNwZW50IHNvbWUgdGltZSB3b3JraW5nIGluIHRlY2ggY29tcGFuaWVzLCBidXQgc29vbiBlbm91Z2gsIEkganVtcGVkIGludG8gdGhlIGZhbWlseSBidXNpbmVzcyB0byBoZWxwIGl0IGdyb3cuIEZvciAxNSB5ZWFycywgSSB3b3JrZWQgc2lkZSBieSBzaWRlIHdpdGggbXkgZmF0aGVyIGFuZCBicm90aGVyLCB0YWNrbGluZyB0aGUgY2hhbGxlbmdlcyB0aGF0IGNvbWUgd2l0aCBtYW5hZ2luZyB5b3VyIG93biBjb21wYW55IGFuZCBsZWFkaW5nIGEgdGVhbS5cIjtcbmFib3V0Qm9keURpdlRleHQuYXBwZW5kQ2hpbGQoYWJvdXRCb2R5VGV4dDIpO1xuY29uc3QgYWJvdXRCb2R5VGV4dDMgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInNlY3Rpb24tYm9keS10ZXh0XCIsIFwiYWJvdXQtYm9keS10ZXh0LTNcIik7XG5hYm91dEJvZHlUZXh0My50ZXh0Q29udGVudCA9IFwiV2l0aCBteSBmYXRoZXIgcmV0aXJlZCBhbmQgdGhlIGJ1c2luZXNzIHdlbGwtZXN0YWJsaXNoZWQsIG15IGJyb3RoZXIgYW5kIEkgbWFkZSB0aGUgZGVjaXNpb24gdG8gc2VsbCBpdCBhbmQgdGFrZSBvbiBuZXcgY2hhbGxlbmdlcy4gSW4gbXkgY2FzZSwgc29tZXRoaW5nIGRlZXAgZG93biBhbHdheXMgd2FudGVkIHRvIHJldHVybiB0byB0aGUgd29ybGQgb2YgSVQsIHNvIEkgZGVjaWRlZCB0byBnbyBhbGwtaW4gYW5kIGdldCBiYWNrIHVwIHRvIHNwZWVkLlwiO1xuYWJvdXRCb2R5RGl2VGV4dC5hcHBlbmRDaGlsZChhYm91dEJvZHlUZXh0Myk7XG5jb25zdCBhYm91dEJvZHlUZXh0NCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwic2VjdGlvbi1ib2R5LXRleHRcIiwgXCJhYm91dC1ib2R5LXRleHQtNFwiKTtcbmFib3V0Qm9keVRleHQ0LnRleHRDb250ZW50ID0gXCJTaW5jZSB0aGVuLCBJJ3ZlIGJlZW4gZGl2aW5nIGludG8gdGhlIGxhdGVzdCB0ZWNobm9sb2dpZXMgYW5kIG1ldGhvZG9sb2dpZXMsIHRha2luZyBvbiBwcm9qZWN0cyBhbmQgbWFraW5nIHRoZSBtb3N0IG9mIHRoZW0uIEkndmUgYWx3YXlzIGJlZW4ga25vd24gZm9yIG15IGFkYXB0YWJpbGl0eSwgcHJvYmxlbS1zb2x2aW5nIHNraWxscywgYW5kIG15IGFiaWxpdHkgdG8gd29yayBlZmZlY3RpdmVseSB3aXRoaW4gYSB0ZWFtLiBJJ20gbm90IGFmcmFpZCB0byBlbWJyYWNlIG5ldyBjaGFsbGVuZ2VzIGFuZCBJIGhhdmUgYSBzdHJvbmcgcGFzc2lvbiBmb3Igc3RheWluZyB1cC10by1kYXRlIHdpdGggdGhlIGV2ZXItZXZvbHZpbmcgdGVjaCBsYW5kc2NhcGUuXCI7XG5hYm91dEJvZHlEaXZUZXh0LmFwcGVuZENoaWxkKGFib3V0Qm9keVRleHQ0KTtcbmNvbnN0IGFib3V0Qm9keVRleHQ1ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJzZWN0aW9uLWJvZHktdGV4dFwiLCBcImFib3V0LWJvZHktdGV4dC01XCIpO1xuYWJvdXRCb2R5VGV4dDUudGV4dENvbnRlbnQgPSBcIkkgdGhyaXZlIG9uIGxlYXJuaW5nIGFuZCBhcHBseWluZyB0aGUgbW9zdCBzdWNjZXNzZnVsIHByYWN0aWNlcyBvZiB0aGUgbW9tZW50LCBhbGwgd2hpbGUgdGFja2xpbmcgcHJvamVjdHMgaGVhZC1vbi4gSXQncyBiZWVuIHF1aXRlIGEgam91cm5leSwgYW5kIEknbSBleGNpdGVkIHRvIGJyaW5nIG15IHdlYWx0aCBvZiBleHBlcmllbmNlLCBjb21iaW5lZCB3aXRoIG15IGRlZGljYXRpb24gdG8gaW5ub3ZhdGlvbiwgdG8geW91ciB0ZWFtLiBMZXQncyBjcmVhdGUgc29tZSBhbWF6aW5nIHRlY2ggdG9nZXRoZXIhXCI7XG5hYm91dEJvZHlEaXZUZXh0LmFwcGVuZENoaWxkKGFib3V0Qm9keVRleHQ1KTtcblxuLy8gU3RhY2tcbmNvbnN0IHN0YWNrSGVhZGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNlY3Rpb24taGVhZGVyXCIsIFwic3RhY2staGVhZGVyXCIpO1xuY29uc3Qgc3RhY2tCb2R5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNlY3Rpb24tYm9keVwiLCBcInN0YWNrLWJvZHlcIik7XG5zdGFjay5hcHBlbmRDaGlsZChzdGFja0hlYWRlcik7XG5zdGFjay5hcHBlbmRDaGlsZChzdGFja0JvZHkpO1xuXG5jb25zdCBzdGFja0hlYWRlckxpbmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1oZWFkZXItbGluZVwiLCBcInN0YWNrLWhlYWRlci1saW5lXCIpO1xuc3RhY2tIZWFkZXIuYXBwZW5kQ2hpbGQoc3RhY2tIZWFkZXJMaW5lKTtcbmNvbnN0IHN0YWNrSGVhZGVyVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcInNlY3Rpb24taGVhZGVyLXRleHRcIiwgXCJzdGFjay1oZWFkZXItdGV4dFwiKTtcbnN0YWNrSGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiMDMuIFwiO1xuY29uc3Qgc3RhY2tIZWFkZXJUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwic2VjdGlvbi1oZWFkZXItdGl0bGVcIiwgXCJzdGFjay1oZWFkZXItdGl0bGVcIik7XG5zdGFja0hlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJNeSBTa2lsbHNcIjtcbnN0YWNrSGVhZGVyVGV4dC5hcHBlbmRDaGlsZChzdGFja0hlYWRlclRpdGxlKTtcbnN0YWNrSGVhZGVyLmFwcGVuZENoaWxkKHN0YWNrSGVhZGVyVGV4dCk7XG5cbmNvbnN0IHN0YWNrVGFibGUgPSBjcmVhdGVFbGVtZW50KFwidGFibGVcIiwgXCJzZWN0aW9uLWJvZHktdGFibGVcIiwgXCJzdGFjay10YWJsZVwiKTtcbnN0YWNrQm9keS5hcHBlbmRDaGlsZChzdGFja1RhYmxlKTtcbmNvbnN0IHN0YWNrVGFibGVIZWFkID0gY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWhlYWRcIiwgXCJzdGFjay10YWJsZS1oZWFkXCIpO1xuc3RhY2tUYWJsZS5hcHBlbmRDaGlsZChzdGFja1RhYmxlSGVhZCk7XG5jb25zdCBzdGFja1RhYmxlSGVhZFJvdyA9IGNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1oZWFkLXJvd1wiLCBcInN0YWNrLXRhYmxlLWhlYWQtcm93XCIpO1xuc3RhY2tUYWJsZUhlYWQuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUhlYWRSb3cpO1xuY29uc3Qgc3RhY2tUYWJsZUhlYWRDb2wxID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWhlYWQtY2VsbFwiLCBcInN0YWNrLXRhYmxlLWhlYWQtY2VsbC0xXCIpO1xuc3RhY2tUYWJsZUhlYWRDb2wxLnNldEF0dHJpYnV0ZShcImNvbHNwYW5cIiwgXCIyXCIpO1xuc3RhY2tUYWJsZUhlYWRDb2wxLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVIZWFkUm93LmFwcGVuZENoaWxkKHN0YWNrVGFibGVIZWFkQ29sMSk7XG5jb25zdCBzdGFja1RhYmxlSGVhZENvbDIgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtaGVhZC1jZWxsXCIsIFwic3RhY2stdGFibGUtaGVhZC1jZWxsLTJcIik7XG5zdGFja1RhYmxlSGVhZENvbDIudGV4dENvbnRlbnQgPSBcIkJlZ2lubmVyXCI7XG5zdGFja1RhYmxlSGVhZFJvdy5hcHBlbmRDaGlsZChzdGFja1RhYmxlSGVhZENvbDIpO1xuY29uc3Qgc3RhY2tUYWJsZUhlYWRDb2wzID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWhlYWQtY2VsbFwiLCBcInN0YWNrLXRhYmxlLWhlYWQtY2VsbC0zXCIpO1xuc3RhY2tUYWJsZUhlYWRDb2wzLnRleHRDb250ZW50ID0gXCJFbGVtZW50YXJ5XCI7XG5zdGFja1RhYmxlSGVhZFJvdy5hcHBlbmRDaGlsZChzdGFja1RhYmxlSGVhZENvbDMpO1xuY29uc3Qgc3RhY2tUYWJsZUhlYWRDb2w0ID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWhlYWQtY2VsbFwiLCBcInN0YWNrLXRhYmxlLWhlYWQtY2VsbC00XCIpO1xuc3RhY2tUYWJsZUhlYWRDb2w0LnRleHRDb250ZW50ID0gXCJJbnRlcm1lZGlhdGVcIjtcbnN0YWNrVGFibGVIZWFkUm93LmFwcGVuZENoaWxkKHN0YWNrVGFibGVIZWFkQ29sNCk7XG5jb25zdCBzdGFja1RhYmxlSGVhZENvbDUgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtaGVhZC1jZWxsXCIsIFwic3RhY2stdGFibGUtaGVhZC1jZWxsLTVcIik7XG5zdGFja1RhYmxlSGVhZENvbDUudGV4dENvbnRlbnQgPSBcIkFkdmFuY2VkXCI7XG5zdGFja1RhYmxlSGVhZFJvdy5hcHBlbmRDaGlsZChzdGFja1RhYmxlSGVhZENvbDUpO1xuY29uc3Qgc3RhY2tUYWJsZUhlYWRDb2w2ID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWhlYWQtY2VsbFwiLCBcInN0YWNrLXRhYmxlLWhlYWQtY2VsbC02XCIpO1xuc3RhY2tUYWJsZUhlYWRDb2w2LnRleHRDb250ZW50ID0gXCJFeHBlcnRcIjtcbnN0YWNrVGFibGVIZWFkUm93LmFwcGVuZENoaWxkKHN0YWNrVGFibGVIZWFkQ29sNik7XG5jb25zdCBzdGFja1RhYmxlQm9keSA9IGNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5XCIsIFwic3RhY2stdGFibGUtYm9keVwiKTtcbnN0YWNrVGFibGUuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHkpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlSb3cxID0gY3JlYXRlRWxlbWVudChcInRyXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktcm93XCIsIFwic3RhY2stdGFibGUtYm9keS1yb3dcIik7XG5zdGFja1RhYmxlQm9keS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keVJvdzEpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlIZWFkMSA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWhlYWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWhlYWQtMVwiKTtcbnN0YWNrVGFibGVCb2R5SGVhZDEudGV4dENvbnRlbnQgPSBcIkxhbmd1YWdlc1wiO1xuc3RhY2tUYWJsZUJvZHlIZWFkMS5zZXRBdHRyaWJ1dGUoXCJyb3dzcGFuXCIsIFwiNFwiKTtcbnN0YWNrVGFibGVCb2R5SGVhZDEuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJyb3dncm91cFwiKTtcbnN0YWNrVGFibGVCb2R5Um93MS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUhlYWQxKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5SGVhZDIgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1oZWFkXCIsIFwic3RhY2stdGFibGUtYm9keS1oZWFkLTJcIik7XG5zdGFja1RhYmxlQm9keUhlYWQyLnRleHRDb250ZW50ID0gXCJIVE1MXCI7XG5zdGFja1RhYmxlQm9keUhlYWQyLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3cxLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDIpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTFcIik7XG5zdGFja1RhYmxlQm9keUNlbGwxLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93MS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwxKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDIgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0yXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMi50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzEuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMik7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwzID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtM1wiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDMudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3cxLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDMpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsNCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTRcIik7XG5zdGFja1RhYmxlQm9keUNlbGw0LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93MS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw0KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDRiaXMgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTQxXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsNGJpcy50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzEuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsNGJpcyk7XG5jb25zdCBzdGFja1RhYmxlQm9keVJvdzIgPSBjcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1yb3dcIiwgXCJzdGFjay10YWJsZS1ib2R5LXJvd1wiKTtcbnN0YWNrVGFibGVCb2R5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Um93Mik7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQzID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktaGVhZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktaGVhZC0zXCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkMy50ZXh0Q29udGVudCA9IFwiQ1NTXCI7XG5zdGFja1RhYmxlQm9keUhlYWQzLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3cyLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDMpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsNSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTVcIik7XG5zdGFja1RhYmxlQm9keUNlbGw1LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Mi5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw1KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDYgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC02XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsNi50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzIuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsNik7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGw3ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtN1wiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDcudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3cyLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDcpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsOCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLThcIik7XG5zdGFja1RhYmxlQm9keUNlbGw4LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Mi5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw4KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDgxID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC04MVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDgxLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Mi5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw4MSk7XG5jb25zdCBzdGFja1RhYmxlQm9keVJvdzMgPSBjcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1yb3dcIiwgXCJzdGFjay10YWJsZS1ib2R5LXJvd1wiKTtcbnN0YWNrVGFibGVCb2R5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Um93Myk7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQ0ID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktaGVhZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktaGVhZC00XCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkNC50ZXh0Q29udGVudCA9IFwiSmF2YVNjcmlwdFwiO1xuc3RhY2tUYWJsZUJvZHlIZWFkNC5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcInJvd1wiKTtcbnN0YWNrVGFibGVCb2R5Um93My5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUhlYWQ0KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDkgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC05XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsOS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzMuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsOSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwxMCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTEwXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMTAudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3czLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDEwKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDExID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMTFcIik7XG5zdGFja1RhYmxlQm9keUNlbGwxMS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzMuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMTEpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMTIgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0xMlwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDEyLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93My5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwxMik7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwxMjEgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTEyMVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDEyMS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzMuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMTIxKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Um93NCA9IGNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LXJvd1wiLCBcInN0YWNrLXRhYmxlLWJvZHktcm93XCIpO1xuc3RhY2tUYWJsZUJvZHkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlSb3c0KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5SGVhZDUgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1oZWFkXCIsIFwic3RhY2stdGFibGUtYm9keS1oZWFkLTVcIik7XG5zdGFja1RhYmxlQm9keUhlYWQ1LnRleHRDb250ZW50ID0gXCJQeXRob25cIjtcbnN0YWNrVGFibGVCb2R5SGVhZDUuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJyb3dcIik7XG5zdGFja1RhYmxlQm9keVJvdzQuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlIZWFkNSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwxMyA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTEzXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMTMudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c0LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDEzKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDE0ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMTRcIik7XG5zdGFja1RhYmxlQm9keUNlbGwxNC50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzQuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMTQpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMTUgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0xNVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDE1LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93NC5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwxNSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwxNiA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMTZcIik7XG5zdGFja1RhYmxlQm9keUNlbGwxNi50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzQuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMTYpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMTcgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTE3XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMTcudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c0LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDE3KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Um93NSA9IGNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LXJvd1wiLCBcInN0YWNrLXRhYmxlLWJvZHktcm93XCIpO1xuc3RhY2tUYWJsZUJvZHkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlSb3c1KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5SGVhZDYgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1oZWFkXCIsIFwic3RhY2stdGFibGUtYm9keS1oZWFkLTZcIik7XG5zdGFja1RhYmxlQm9keUhlYWQ2LnRleHRDb250ZW50ID0gXCJGcmFtZXdvcmtzIC8gTGlicmFyaWVzXCI7XG5zdGFja1RhYmxlQm9keUhlYWQ2LnNldEF0dHJpYnV0ZShcInJvd3NwYW5cIiwgXCIyXCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkNi5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcInJvd2dyb3VwXCIpO1xuc3RhY2tUYWJsZUJvZHlSb3c1LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDYpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlIZWFkNyA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWhlYWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWhlYWQtN1wiKTtcbnN0YWNrVGFibGVCb2R5SGVhZDcudGV4dENvbnRlbnQgPSBcIlJlYWN0XCI7XG5zdGFja1RhYmxlQm9keUhlYWQ3LnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3c1LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDcpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMTggPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0xOFwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDE4LmNsYXNzTGlzdC5hZGQoXCJmcmFtZXdvcmtzXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMTgudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c1LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDE4KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDE5ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0xOVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDE5LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93NS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwxOSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwyMCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMjBcIik7XG5zdGFja1RhYmxlQm9keUNlbGwyMC50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzUuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMjApO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMjEgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTIxXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMjEudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c1LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDIxKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDIyID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0yMlwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDIyLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93NS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwyMik7XG5jb25zdCBzdGFja1RhYmxlQm9keVJvdzYgPSBjcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1yb3dcIiwgXCJzdGFjay10YWJsZS1ib2R5LXJvd1wiKTtcbnN0YWNrVGFibGVCb2R5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Um93Nik7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQ4ID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktaGVhZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktaGVhZC04XCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkOC50ZXh0Q29udGVudCA9IFwiTm9kZUpTXCI7XG5zdGFja1RhYmxlQm9keUhlYWQ4LnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3c2LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDgpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMjMgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0yM1wiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDIzLmNsYXNzTGlzdC5hZGQoXCJmcmFtZXdvcmtzXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMjMudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c2LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDIzKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDI0ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0yNFwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDI0LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Ni5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwyNCk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwyNSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMjVcIik7XG5zdGFja1RhYmxlQm9keUNlbGwyNS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzYuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMjUpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMjYgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTI2XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMjYudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c2LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDI2KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDI3ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0yN1wiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDI3LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Ni5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwyNyk7XG5jb25zdCBzdGFja1RhYmxlQm9keVJvdzcgPSBjcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1yb3dcIiwgXCJzdGFjay10YWJsZS1ib2R5LXJvd1wiKTtcbnN0YWNrVGFibGVCb2R5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Um93Nyk7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQ5ID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktaGVhZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktaGVhZC05XCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkOS50ZXh0Q29udGVudCA9IFwiVG9vbHNcIjtcbnN0YWNrVGFibGVCb2R5SGVhZDkuc2V0QXR0cmlidXRlKFwicm93c3BhblwiLCBcIjNcIik7XG5zdGFja1RhYmxlQm9keUhlYWQ5LnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93Z3JvdXBcIik7XG5zdGFja1RhYmxlQm9keVJvdzcuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlIZWFkOSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQxMCA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWhlYWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWhlYWQtMTBcIik7XG5zdGFja1RhYmxlQm9keUhlYWQxMC50ZXh0Q29udGVudCA9IFwiR2l0XCI7XG5zdGFja1RhYmxlQm9keUhlYWQxMC5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcInJvd1wiKTtcbnN0YWNrVGFibGVCb2R5Um93Ny5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUhlYWQxMCk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwyOCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTI4XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMjgudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c3LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDI4KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDI5ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMjlcIik7XG5zdGFja1RhYmxlQm9keUNlbGwyOS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzcuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMjkpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMzAgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0zMFwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDMwLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Ny5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwzMCk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwzMSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMzFcIik7XG5zdGFja1RhYmxlQm9keUNlbGwzMS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzcuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMzEpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMzIgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTMyXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMzIudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c3LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDMyKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Um93OCA9IGNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LXJvd1wiLCBcInN0YWNrLXRhYmxlLWJvZHktcm93XCIpO1xuc3RhY2tUYWJsZUJvZHkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlSb3c4KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5SGVhZDExID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktaGVhZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktaGVhZC0xMVwiKTtcbnN0YWNrVGFibGVCb2R5SGVhZDExLnRleHRDb250ZW50ID0gXCJOcG1cIjtcbnN0YWNrVGFibGVCb2R5SGVhZDExLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3c4LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDExKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDMzID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMzNcIik7XG5zdGFja1RhYmxlQm9keUNlbGwzMy50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzguYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMzMpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMzQgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0zNFwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDM0LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93OC5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwzNCk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwzNSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTM1XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMzUudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c4LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDM1KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDM2ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0zNlwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDM2LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93OC5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwzNik7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwzNyA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMzdcIik7XG5zdGFja1RhYmxlQm9keUNlbGwzNy50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzguYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMzcpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlSb3c5ID0gY3JlYXRlRWxlbWVudChcInRyXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktcm93XCIsIFwic3RhY2stdGFibGUtYm9keS1yb3dcIik7XG5zdGFja1RhYmxlQm9keS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keVJvdzkpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlIZWFkMTIgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1oZWFkXCIsIFwic3RhY2stdGFibGUtYm9keS1oZWFkLTEyXCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkMTIudGV4dENvbnRlbnQgPSBcIldlYnBhY2tcIjtcbnN0YWNrVGFibGVCb2R5SGVhZDEyLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3c5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDEyKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDM4ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMzhcIik7XG5zdGFja1RhYmxlQm9keUNlbGwzOC50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMzgpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMzkgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0zOVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDM5LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93OS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwzOSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGw0MCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTQwXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsNDAudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDQwKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDQxID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC00MVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDQxLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93OS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw0MSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGw0MiA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtNDJcIik7XG5zdGFja1RhYmxlQm9keUNlbGw0Mi50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsNDIpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlSb3cxMCA9IGNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LXJvd1wiLCBcInN0YWNrLXRhYmxlLWJvZHktcm93XCIpO1xuc3RhY2tUYWJsZUJvZHkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlSb3cxMCk7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQxMyA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWhlYWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWhlYWQtMTNcIik7XG5zdGFja1RhYmxlQm9keUhlYWQxMy50ZXh0Q29udGVudCA9IFwiVGVzdGluZ1wiO1xuc3RhY2tUYWJsZUJvZHlIZWFkMTMuc2V0QXR0cmlidXRlKFwicm93c3BhblwiLCBcIjFcIik7XG5zdGFja1RhYmxlQm9keUhlYWQxMy5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcInJvd2dyb3VwXCIpO1xuc3RhY2tUYWJsZUJvZHlSb3cxMC5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUhlYWQxMyk7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQxNCA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWhlYWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWhlYWQtMTRcIik7XG5zdGFja1RhYmxlQm9keUhlYWQxNC50ZXh0Q29udGVudCA9IFwiSmVzdFwiO1xuc3RhY2tUYWJsZUJvZHlIZWFkMTQuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJyb3dcIik7XG5zdGFja1RhYmxlQm9keVJvdzEwLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDE0KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDQzID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtNDNcIik7XG5zdGFja1RhYmxlQm9keUNlbGw0My50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzEwLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDQzKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDQ0ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtNDRcIik7XG5zdGFja1RhYmxlQm9keUNlbGw0NC50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzEwLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDQ0KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDQ1ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtNDVcIik7XG5zdGFja1RhYmxlQm9keUNlbGw0NS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzEwLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDQ1KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDQ2ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC00NlwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDQ2LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93MTAuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsNDYpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsNDcgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTQ3XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsNDcudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3cxMC5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw0Nyk7XG5cbi8vIFByb2plY3RzIG1haW4gY29udGFpbmVyXG5jb25zdCBwcm9qZWN0c0hlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWhlYWRlclwiLCBcInByb2plY3RzLWhlYWRlclwiKTtcbmNvbnN0IHByb2plY3RzQm9keSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWJvZHlcIiwgXCJwcm9qZWN0cy1ib2R5XCIpO1xucHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpO1xucHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNCb2R5KTtcblxuY29uc3QgcHJvamVjdHNIZWFkZXJMaW5lID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNlY3Rpb24taGVhZGVyLWxpbmVcIiwgXCJwcm9qZWN0cy1oZWFkZXItbGluZVwiKTtcbnByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyTGluZSk7XG5jb25zdCBwcm9qZWN0c0hlYWRlclRleHQgPSBjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJzZWN0aW9uLWhlYWRlci10ZXh0XCIsIFwicHJvamVjdHMtaGVhZGVyLXRleHRcIik7XG5wcm9qZWN0c0hlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIjA0LiBcIjtcbmNvbnN0IHByb2plY3RzSGVhZGVyVGl0bGUgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcInNlY3Rpb24taGVhZGVyLXRpdGxlXCIsIFwicHJvamVjdHMtaGVhZGVyLXRpdGxlXCIpO1xucHJvamVjdHNIZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiVGhpbmdzIEkndmUgQnVpbHRcIjtcbnByb2plY3RzSGVhZGVyVGV4dC5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlclRpdGxlKTtcbnByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyVGV4dCk7XG5cbmNvbnN0IHByb2plY3RzQm9keURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWJvZHktZGl2XCIsIFwicHJvamVjdHMtYm9keS1kaXZcIik7XG5wcm9qZWN0c0JvZHkuYXBwZW5kQ2hpbGQocHJvamVjdHNCb2R5RGl2KTtcblxuLy8gRnVuY3Rpb24gdGhhdCByZWNlaXZlcyBkYXRhIGZyb20gdGhlIEpTT04gZmlsZSBhbmQgY3JlYXRlcyB0aGUgcHJvamVjdHNcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1kaXZcIik7XG4gICAgcHJvamVjdHNCb2R5RGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIGNvbnN0IHByb2plY3REaXZUb3AgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1kaXYtdG9wXCIpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdlRvcCk7XG4gICAgY29uc3QgcHJvamVjdERpdlRvcExlZnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1kaXYtdG9wLWxlZnRcIik7XG4gICAgcHJvamVjdERpdlRvcC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2VG9wTGVmdCk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gY3JlYXRlRWxlbWVudChcImgzXCIsIFwicHJvamVjdC10aXRsZVwiKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHByb2plY3REaXZUb3BMZWZ0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgY29uc3QgcHJvamVjdFN1YnRpdGxlID0gY3JlYXRlRWxlbWVudChcImg0XCIsIFwicHJvamVjdC1zdWJ0aXRsZVwiKTtcbiAgICBwcm9qZWN0U3VidGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnN1YnRpdGxlO1xuICAgIHByb2plY3REaXZUb3BMZWZ0LmFwcGVuZENoaWxkKHByb2plY3RTdWJ0aXRsZSk7XG4gICAgY29uc3QgcHJvamVjdERpdlRvcFJpZ2h0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2plY3QtZGl2LXRvcC1yaWdodFwiKTtcbiAgICBwcm9qZWN0RGl2VG9wLmFwcGVuZENoaWxkKHByb2plY3REaXZUb3BSaWdodCk7XG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIpO1xuICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XG4gICAgcHJvamVjdERpdlRvcFJpZ2h0LmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG4gICAgY29uc3QgcHJvamVjdExpbmtCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcInByb2plY3QtbGluay1idXR0b25cIik7XG4gICAgcHJvamVjdExpbmtCdXR0b24uaHJlZiA9IHByb2plY3QubGluaztcbiAgICBwcm9qZWN0TGlua0J1dHRvbi50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIHByb2plY3RMaW5rQnV0dG9uLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICAgIHByb2plY3RMaW5rQnV0dG9uLnRleHRDb250ZW50ID0gXCJWaWV3IExpdmVcIjtcbiAgICBwcm9qZWN0RGl2VG9wUmlnaHQuYXBwZW5kQ2hpbGQocHJvamVjdExpbmtCdXR0b24pO1xuICAgIGNvbnN0IHByb2plY3REaXZCb3R0b20gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1kaXYtYm90dG9tXCIpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdkJvdHRvbSk7XG4gICAgLy8gY29uc3QgcHJvamVjdEltYWdlID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcInByb2plY3QtaW1hZ2VcIik7XG4gICAgY29uc3QgcHJvamVjdEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgcHJvamVjdEltYWdlLnNyYyA9IGltYWdlc0NvbnRleHQoYCR7cHJvamVjdC5pbWFnZX1gKTtcbiAgICBwcm9qZWN0SW1hZ2UuYWx0ID0gcHJvamVjdC5hbHQ7XG4gICAgcHJvamVjdERpdkJvdHRvbS5hcHBlbmRDaGlsZChwcm9qZWN0SW1hZ2UpO1xufVxuXG4vLyBGZXRjaGluZyB0aGUgZGF0YSBmcm9tIHRoZSBKU09OIGZpbGVcbnByb2plY3RzRGF0YS5wcm9qZWN0cy5mb3JFYWNoKGNyZWF0ZVByb2plY3QpO1xuXG4vKiBjb25zdCBwcm9qZWN0RGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2plY3QtZGl2XCIpO1xucHJvamVjdHNCb2R5RGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuY29uc3QgcHJvamVjdERpdlRvcCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0LWRpdi10b3BcIik7XG5wcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REaXZUb3ApO1xuY29uc3QgcHJvamVjdERpdlRvcExlZnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1kaXYtdG9wLWxlZnRcIik7XG5wcm9qZWN0RGl2VG9wLmFwcGVuZENoaWxkKHByb2plY3REaXZUb3BMZWZ0KTtcbmNvbnN0IHByb2plY3RUaXRsZTEgPSBjcmVhdGVFbGVtZW50KFwiaDNcIiwgXCJwcm9qZWN0LXRpdGxlXCIpO1xucHJvamVjdFRpdGxlMS50ZXh0Q29udGVudCA9IFwiUHJvamVjdCAxXCI7XG5wcm9qZWN0RGl2VG9wTGVmdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUxKTtcbmNvbnN0IHByb2plY3RTdWJ0aXRsZTEgPSBjcmVhdGVFbGVtZW50KFwiaDRcIiwgXCJwcm9qZWN0LXN1YnRpdGxlXCIpO1xucHJvamVjdFN1YnRpdGxlMS50ZXh0Q29udGVudCA9IFwiUHJvamVjdCAxIHN1YnRpdGxlXCI7XG5wcm9qZWN0RGl2VG9wTGVmdC5hcHBlbmRDaGlsZChwcm9qZWN0U3VidGl0bGUxKTtcbmNvbnN0IHByb2plY3REaXZUb3BSaWdodCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwcm9qZWN0LWRpdi10b3AtcmlnaHRcIik7XG5wcm9qZWN0RGl2VG9wLmFwcGVuZENoaWxkKHByb2plY3REaXZUb3BSaWdodCk7XG5jb25zdCBwcm9qZWN0RGVzY3JpcHRpb24xID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIpO1xucHJvamVjdERlc2NyaXB0aW9uMS50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTnVsbGEgZXVpc21vZCwgbmlzbCB2aXRhZSBhbGlxdWFtIHVsdHJpY2llcywgbnVuYyBuaXNsIHVsdHJpY2llcyBudW5jLCB2aXRhZSBhbGlxdWFtIG5pc2wgbmlzbCB2aXRhZSBhbGlxdWFtIHVsdHJpY2llcywgbnVuYyBuaXNsIHVsdHJpY2llcyBudW5jLCB2aXRhZSBhbGlxdWFtIG5pc2xcIjtcbnByb2plY3REaXZUb3BSaWdodC5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24xKTtcbmNvbnN0IHByb2plY3RMaW5rQnV0dG9uMSA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIFwicHJvamVjdC1saW5rLWJ1dHRvblwiKTtcbnByb2plY3RMaW5rQnV0dG9uMS5ocmVmID0gXCIjXCI7XG5wcm9qZWN0TGlua0J1dHRvbjEudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbnByb2plY3RMaW5rQnV0dG9uMS5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbnByb2plY3RMaW5rQnV0dG9uMS50ZXh0Q29udGVudCA9IFwiVmlldyBMaXZlXCI7XG5wcm9qZWN0RGl2VG9wUmlnaHQuYXBwZW5kQ2hpbGQocHJvamVjdExpbmtCdXR0b24xKTtcbmNvbnN0IHByb2plY3REaXZCb3R0b20gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1kaXYtYm90dG9tXCIpO1xucHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2Qm90dG9tKTtcbmNvbnN0IHByb2plY3RJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJwcm9qZWN0LWltYWdlXCIpO1xucHJvamVjdEltYWdlLnNyYyA9IFByb2plY3QxO1xucHJvamVjdEltYWdlLmFsdCA9IFwiUHJvamVjdCAxXCI7XG5wcm9qZWN0RGl2Qm90dG9tLmFwcGVuZENoaWxkKHByb2plY3RJbWFnZSk7ICovXG5cbi8vIENvbnRhY3RcbmNvbnN0IGNvbnRhY3RIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1oZWFkZXJcIiwgXCJjb250YWN0LWhlYWRlclwiKTtcbmNvbnN0IGNvbnRhY3RCb2R5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNlY3Rpb24tYm9keVwiLCBcImNvbnRhY3QtYm9keVwiKTtcbmNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG5jb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RCb2R5KTtcblxuY29uc3QgY29udGFjdEhlYWRlckxpbmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1oZWFkZXItbGluZVwiLCBcImNvbnRhY3QtaGVhZGVyLWxpbmVcIik7XG5jb250YWN0SGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXJMaW5lKTtcbmNvbnN0IGNvbnRhY3RIZWFkZXJUZXh0ID0gY3JlYXRlRWxlbWVudChcImgyXCIsIFwic2VjdGlvbi1oZWFkZXItdGV4dFwiLCBcImNvbnRhY3QtaGVhZGVyLXRleHRcIik7XG5jb250YWN0SGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiMDUuIFwiO1xuY29uc3QgY29udGFjdEhlYWRlclRpdGxlID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJzZWN0aW9uLWhlYWRlci10aXRsZVwiLCBcImNvbnRhY3QtaGVhZGVyLXRpdGxlXCIpO1xuY29udGFjdEhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJHZXQgSW4gVG91Y2hcIjtcbmNvbnRhY3RIZWFkZXJUZXh0LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXJUaXRsZSk7XG5jb250YWN0SGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXJUZXh0KTtcblxuY29uc3QgY29udGFjdEJvZHlUb3AgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY29udGFjdC1ib2R5LXRvcFwiKTtcbmNvbnRhY3RCb2R5LmFwcGVuZENoaWxkKGNvbnRhY3RCb2R5VG9wKTtcbmNvbnN0IGNvbnRhY3RCb2R5VGV4dDEgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImNvbnRhY3QtYm9keS10ZXh0XCIpO1xuY29udGFjdEJvZHlUZXh0MS50ZXh0Q29udGVudCA9IFwiSSdtIGN1cnJlbnRseSBsb29raW5nIGZvciBuZXcgb3Bwb3J0dW5pdGllcywgYm90aCBmcmVlbGFuY2UgYW5kIGZ1bGwtdGltZS4gSWYgeW91J2QgbGlrZSB0byBnZXQgaW4gdG91Y2gsIHlvdSBjYW4gY29udGFjdCBtZSB2aWEgdGhlIGZvcm0gYmVsb3cuIFlvdSBjYW4gYWxzbyByZWFjaCBvdXQgdG8gbWUgb24gU29jaWFsIE5ldHdvcmtzLlwiO1xuY29udGFjdEJvZHlUb3AuYXBwZW5kQ2hpbGQoY29udGFjdEJvZHlUZXh0MSk7XG5jb25zdCBjb250YWN0Qm9keVRleHQyID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJjb250YWN0LWJvZHktdGV4dFwiKTtcbmNvbnRhY3RCb2R5VGV4dDIudGV4dENvbnRlbnQgPSBcIkknbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgcG9zc2libGUhXCI7XG5jb250YWN0Qm9keVRvcC5hcHBlbmRDaGlsZChjb250YWN0Qm9keVRleHQyKTtcbmNvbnN0IGNvbnRhY3RCb2R5Qm90dG9tID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNvbnRhY3QtYm9keS1ib3R0b21cIik7XG5jb250YWN0Qm9keS5hcHBlbmRDaGlsZChjb250YWN0Qm9keUJvdHRvbSk7XG5jb25zdCBjb250YWN0Qm9keUZvcm0gPSBjcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBcImNvbnRhY3QtYm9keS1mb3JtXCIpO1xuY29udGFjdEJvZHlCb3R0b20uYXBwZW5kQ2hpbGQoY29udGFjdEJvZHlGb3JtKTtcbmNvbnN0IGNvbnRhY3RCb2R5U29jaWFsID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNvbnRhY3QtYm9keS1zb2NpYWxcIik7XG5jb250YWN0Qm9keUJvdHRvbS5hcHBlbmRDaGlsZChjb250YWN0Qm9keVNvY2lhbCk7XG5jb25zdCBsaW5rZWRJbkxpbmsgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcImNvbnRhY3QtYm9keS1zb2NpYWwtbGlua1wiKTtcbmxpbmtlZEluTGluay5ocmVmID0gXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcmF1bC1qaW1lbmV6LWZlcm5hbmRlei9cIjtcbmxpbmtlZEluTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xubGlua2VkSW5MaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuY29udGFjdEJvZHlTb2NpYWwuYXBwZW5kQ2hpbGQobGlua2VkSW5MaW5rKTtcbmNvbnN0IGxpbmtlZEluSW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcInNvY2lhbC1pbWdcIik7XG5saW5rZWRJbkltZy5zcmMgPSBMaW5rZWRJbjtcbmxpbmtlZEluSW1nLmFsdCA9IFwiTGlua2VkSW5cIjtcbmxpbmtlZEluTGluay5hcHBlbmRDaGlsZChsaW5rZWRJbkltZyk7XG5jb25zdCBpbnN0YWdyYW1MaW5rID0gY3JlYXRlRWxlbWVudChcImFcIiwgXCJjb250YWN0LWJvZHktc29jaWFsLWxpbmtcIik7XG5pbnN0YWdyYW1MaW5rLmhyZWYgPSBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcmF1bGppbWVuZXpmZXJuYW5kZXovXCI7XG5pbnN0YWdyYW1MaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5pbnN0YWdyYW1MaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuY29udGFjdEJvZHlTb2NpYWwuYXBwZW5kQ2hpbGQoaW5zdGFncmFtTGluayk7XG5jb25zdCBpbnN0YWdyYW1JbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwic29jaWFsLWltZ1wiKTtcbmluc3RhZ3JhbUltZy5zcmMgPSBJbnN0YWdyYW07XG5pbnN0YWdyYW1JbWcuYWx0ID0gXCJJbnN0YWdyYW1cIjtcbmluc3RhZ3JhbUxpbmsuYXBwZW5kQ2hpbGQoaW5zdGFncmFtSW1nKTtcbmNvbnN0IGdpdGh1YkxpbmsgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcImNvbnRhY3QtYm9keS1zb2NpYWwtbGlua1wiKTtcbmdpdGh1YkxpbmsuaHJlZiA9IFwiXCJcbmdpdGh1YkxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbmdpdGh1YkxpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5jb250YWN0Qm9keVNvY2lhbC5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbmNvbnN0IGdpdGh1YkltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJzb2NpYWwtaW1nXCIpO1xuZ2l0aHViSW1nLnNyYyA9IEdpdEh1YjtcbmdpdGh1YkltZy5hbHQgPSBcIkdpdEh1YlwiO1xuZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJbWcpO1xuY29uc3QgeExpbmsgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcImNvbnRhY3QtYm9keS1zb2NpYWwtbGlua1wiKTtcbnhMaW5rLmhyZWYgPSBcImh0dHBzOi8vd3d3LnhpbmcuY29tL3Byb2ZpbGUvUmF1bF9KaW1lbmV6RmVybmFuZGV6L2N2XCI7XG54TGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xueExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5jb250YWN0Qm9keVNvY2lhbC5hcHBlbmRDaGlsZCh4TGluayk7XG5jb25zdCB4SW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcInNvY2lhbC1pbWdcIik7XG54SW1nLnNyYyA9IFg7XG54SW1nLmFsdCA9IFwiWFwiO1xueExpbmsuYXBwZW5kQ2hpbGQoeEltZyk7XG5jb25zdCBtYWlsTGluayA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIFwiY29udGFjdC1ib2R5LXNvY2lhbC1saW5rXCIpO1xubWFpbExpbmsuaHJlZiA9IFwibWFpbHRvOnJqYmFyY29AZ21haWwuY29tXCI7XG5tYWlsTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xubWFpbExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5jb250YWN0Qm9keVNvY2lhbC5hcHBlbmRDaGlsZChtYWlsTGluayk7XG5jb25zdCBtYWlsSW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcInNvY2lhbC1pbWdcIik7XG5tYWlsSW1nLnNyYyA9IE1haWw7XG5tYWlsSW1nLmFsdCA9IFwiTWFpbFwiO1xubWFpbExpbmsuYXBwZW5kQ2hpbGQobWFpbEltZyk7XG5jb25zdCBjb250YWN0Qm9keUZvcm1EaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY29udGFjdC1ib2R5LWZvcm0tZGl2XCIpO1xuY29udGFjdEJvZHlGb3JtLmFwcGVuZENoaWxkKGNvbnRhY3RCb2R5Rm9ybURpdik7XG5jb25zdCBuYW1lRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZvcm0tZmllbGQtZGl2XCIsIFwibmFtZS1kaXZcIik7XG5jb250YWN0Qm9keUZvcm1EaXYuYXBwZW5kQ2hpbGQobmFtZURpdik7XG5jb25zdCBuYW1lTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJjb250YWN0LWJvZHktZm9ybS1sYWJlbFwiLCBcIm5hbWUtbGFiZWxcIik7XG5uYW1lTGFiZWwuZm9yID0gXCJuYW1lXCI7XG5uYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWVcIjtcbm5hbWVEaXYuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbmNvbnN0IG5hbWVJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcImNvbnRhY3QtYm9keS1mb3JtLWlucHV0XCIsIFwibmFtZS1pbnB1dFwiKTtcbm5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5uYW1lSW5wdXQuaWQgPSBcIm5hbWVcIjtcbm5hbWVJbnB1dC5uYW1lID0gXCJuYW1lXCI7XG5uYW1lRGl2LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5jb25zdCBlbWFpbERpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmb3JtLWZpZWxkLWRpdlwiLCBcImVtYWlsLWRpdlwiKTtcbmNvbnRhY3RCb2R5Rm9ybURpdi5hcHBlbmRDaGlsZChlbWFpbERpdik7XG5jb25zdCBlbWFpbExhYmVsID0gY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIFwiY29udGFjdC1ib2R5LWZvcm0tbGFiZWxcIiwgXCJlbWFpbC1sYWJlbFwiKTtcbmVtYWlsTGFiZWwuZm9yID0gXCJlbWFpbFwiO1xuZW1haWxMYWJlbC50ZXh0Q29udGVudCA9IFwiRW1haWxcIjtcbmVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuY29uc3QgZW1haWxJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcImNvbnRhY3QtYm9keS1mb3JtLWlucHV0XCIsIFwiZW1haWwtaW5wdXRcIik7XG5lbWFpbElucHV0LnR5cGUgPSBcImVtYWlsXCI7XG5lbWFpbElucHV0LmlkID0gXCJlbWFpbFwiO1xuZW1haWxJbnB1dC5uYW1lID0gXCJlbWFpbFwiO1xuZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG5jb25zdCBtZXNzYWdlRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZvcm0tZmllbGQtZGl2XCIsIFwibWVzc2FnZS1kaXZcIik7XG5jb250YWN0Qm9keUZvcm1EaXYuYXBwZW5kQ2hpbGQobWVzc2FnZURpdik7XG5jb25zdCBtZXNzYWdlTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJjb250YWN0LWJvZHktZm9ybS1sYWJlbFwiLCBcIm1lc3NhZ2UtbGFiZWxcIik7XG5tZXNzYWdlTGFiZWwuZm9yID0gXCJtZXNzYWdlXCI7XG5tZXNzYWdlTGFiZWwudGV4dENvbnRlbnQgPSBcIk1lc3NhZ2VcIjtcbm1lc3NhZ2VEaXYuYXBwZW5kQ2hpbGQobWVzc2FnZUxhYmVsKTtcbmNvbnN0IG1lc3NhZ2VUZXh0YXJlYSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBcImNvbnRhY3QtYm9keS1mb3JtLXRleHRhcmVhXCIsIFwibWVzc2FnZS10ZXh0YXJlYVwiKTtcbm1lc3NhZ2VUZXh0YXJlYS5pZCA9IFwibWVzc2FnZVwiO1xubWVzc2FnZVRleHRhcmVhLm5hbWUgPSBcIm1lc3NhZ2VcIjtcbm1lc3NhZ2VUZXh0YXJlYS5yb3dzID0gXCI1XCI7XG5tZXNzYWdlRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2VUZXh0YXJlYSk7XG5jb25zdCBjb250YWN0Qm9keUZvcm1CdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiY29udGFjdC1ib2R5LWZvcm0tYnV0dG9uXCIpO1xuY29udGFjdEJvZHlGb3JtQnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuY29udGFjdEJvZHlGb3JtQnV0dG9uLnRleHRDb250ZW50ID0gXCJTZW5kIE1lc3NhZ2VcIjtcbmNvbnRhY3RCb2R5Rm9ybURpdi5hcHBlbmRDaGlsZChjb250YWN0Qm9keUZvcm1CdXR0b24pO1xuXG4vLyBDcmVhdGUgdGhlIGNyZWRpdHMgYW5kIGFwcGVuZCB0aGVtIHRvIHRoZSBmb290ZXJcbmNvbnN0IGNyZWRpdHMgPSBjcmVhdGVFbGVtZW50KFwicFwiLFwiY3JlZGl0c1wiLG51bGwpXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcXVvdGVzXG5jcmVkaXRzLmlubmVySFRNTCA9ICdDcmVhdGVkIGJ5IFJBw5pMIEpJTcOJTkVaLiBGb2xsb3cgbXkgd29yayBvbiBHaXRIdWI6IDxicj48YnI+PGEgY2xhc3M9XCJnaXRodWItbGlua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmVyZWdvcm5cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PHN2ZyBjbGFzcz1cImdpdGh1Yi1pY29uXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCAwQzMuNTggMCAwIDMuNTggMCA4YzAgMy41NCAyLjI5IDYuNTMgNS40NyA3LjU5LjQuMDcuNTUtLjE3LjU1LS4zOCAwLS4xOS0uMDEtLjgyLS4wMS0xLjQ5LTIuMDEuMzctMi41My0uNDktMi42OS0uOTQtLjA5LS4yMy0uNDgtLjk0LS44Mi0xLjEzLS4yOC0uMTUtLjY4LS41Mi0uMDEtLjUzLjYzLS4wMSAxLjA4LjU4IDEuMjMuODIuNzIgMS4yMSAxLjg3Ljg3IDIuMzMuNjYuMDctLjUyLjI4LS44Ny41MS0xLjA3LTEuNzgtLjItMy42NC0uODktMy42NC0zLjk1IDAtLjg3LjMxLTEuNTkuODItMi4xNS0uMDgtLjItLjM2LTEuMDIuMDgtMi4xMiAwIDAgLjY3LS4yMSAyLjIuODIuNjQtLjE4IDEuMzItLjI3IDItLjI3LjY4IDAgMS4zNi4wOSAyIC4yNyAxLjUzLTEuMDQgMi4yLS44MiAyLjItLjgyLjQ0IDEuMS4xNiAxLjkyLjA4IDIuMTIuNTEuNTYuODIgMS4yNy44MiAyLjE1IDAgMy4wNy0xLjg3IDMuNzUtMy42NSAzLjk1LjI5LjI1LjU0LjczLjU0IDEuNDggMCAxLjA3LS4wMSAxLjkzLS4wMSAyLjIgMCAuMjEuMTUuNDYuNTUuMzhBOC4wMTMgOC4wMTMgMCAwIDAgMTYgOGMwLTQuNDItMy41OC04LTgtOHpcIi8+PC9zdmc+PC9hPidcbmZvb3Rlci5hcHBlbmRDaGlsZChjcmVkaXRzKSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvU3BhY2VfR3JvdGVzay9TcGFjZUdyb3Rlc2stVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9jaXJjdWl0LXByaW1hcnkuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4vKiBNWSBPV04gU1RZTEVTIEZST00gSEVSRSAqL1xuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1NwYWNlIEdyb3Rlc2snO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LWZhbWlseTogJ1NwYWNlIEdyb3Rlc2snLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC4zOTA2MjV2dyk7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuaDMge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuaDQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5oZWFkZXIsZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgY29sb3I6ICNFNkZGRjY7XG59XG5cbmhlYWRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtc2l6ZTogMjtcbn1cblxuLmxvZ28ge1xuICAgIGNvbG9yOiAjRTZGRkY2O1xufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnUtaXRlbSB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZW51LWl0ZW06OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5tZW51LWl0ZW06aG92ZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RkZGNjtcbn1cblxuLm1lbnUtaXRlbS1udW1iZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGNvbG9yOiAjMDBBOTdGO1xufVxuXG5tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWdyb3c6IDE7IC8qIEVzdG8gaGFjZSBxdWUgbWFpbiBvY3VwZSB0b2RvIGVsIGVzcGFjaW8gcmVzdGFudGUgZGVzcHXDqXMgZGUgaGVhZGVyIHkgYW50ZXMgZGUgZm9vdGVyICovXG4gICAgZ2FwOiA1JTtcbn1cblxuc2VjdGlvbiB7XG4gICAgLyogcGFkZGluZy10b3A6IDZyZW07ICovXG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZ2FwOiA1JTtcbn1cblxuLmhvbWUge1xuICAgIC8qIHBhZGRpbmctdG9wOiA2cmVtOyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBuby1yZXBlYXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGdhcDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4ubWFpbi10ZXh0IHtcbiAgICBjb2xvcjogIzAxODc2QztcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMzAlO1xufVxuXG4ubWFpbi10ZXh0LW5hbWUge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbn1cblxuLm1haW4tdGV4dC1yb2xlIHtcbiAgICBjb2xvcjogIzAxODc2Qztcbn1cblxuLmhvbWUtaW1hZ2Uge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIEFib3V0IHNlY3Rpb24gKi9cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uc2VjdGlvbi1oZWFkZXItdGV4dCB7XG4gICAgY29sb3I6ICMwMTg3NkM7XG59XG5cbi5zZWN0aW9uLWhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5zZWN0aW9uLWhlYWRlci1saW5lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICAvKiBtYXJnaW4tdG9wOiAwLjVyZW07ICovXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE5N0Y7XG59XG5cbiNhYm91dC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IHRvcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDUlO1xufVxuXG4jYWJvdXQtYm9keS1pbWFnZSB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLnNlY3Rpb24tYm9keS10ZXh0IHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4vKiBTdGFjayBzZWN0aW9uICovXG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG50aCB7XG4gICAgd2lkdGg6IDhyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwQTk3Rjtcbn1cblxuLnNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWQ6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgICByaWdodDogNXB4O1xuICAgIGJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBOTdGO1xufVxuXG4uc2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5cbi8qIFByb2plY3RzIHNlY3Rpb24gKi9cblxuI3Byb2plY3RzLWJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNSU7XG59XG5cblxuI3Byb2plY3RzLWJvZHktZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDUlO1xufVxuXG4ucHJvamVjdC1kaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgd2lkdGg6IDgwMHB4O1xufVxuXG4ucHJvamVjdC1kaXYtdG9wIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IHRvcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wcm9qZWN0LWRpdi10b3AtcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgbWF4LXdpZHRoOiA3MCU7XG59XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuXG4ucHJvamVjdC1saW5rLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwQTk3RjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQTk3RjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLnByb2plY3QtbGluay1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMwMEE5N0Y7XG59XG5cbi5wcm9qZWN0LWRpdi1ib3R0b20ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNSU7XG59XG5cbi5wcm9qZWN0LWltYWdlIHtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlcjogOHB4IHNvbGlkICMwMDAwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggNXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4vKiBDb250YWN0IHNlY3Rpb24gKi9cblxuI2NvbnRhY3QtYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA1JTtcbn1cblxuLmNvbnRhY3QtYm9keS10b3Age1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5jb250YWN0LWJvZHktYm90dG9tIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5cbi5jb250YWN0LWJvZHktc29jaWFsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMS41cmVtO1xufVxuXG4uY29udGFjdC1ib2R5LXRleHQge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmNvbnRhY3QtYm9keS1mb3JtIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEE5N0Y7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4RkNFQTtcbn1cblxuLmZvcm0tZmllbGQtZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTAlO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5jb250YWN0LWJvZHktZm9ybS1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFjdC1ib2R5LWZvcm0tbGFiZWwge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xufVxuXG4uY29udGFjdC1ib2R5LWZvcm0taW5wdXQge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MkJEOUY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jb250YWN0LWJvZHktZm9ybS1pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBBOTdGO1xufVxuXG4uY29udGFjdC1ib2R5LWZvcm0tdGV4dGFyZWEge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MkJEOUY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jb250YWN0LWJvZHktZm9ybS10ZXh0YXJlYTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBBOTdGO1xufVxuXG4uY29udGFjdC1ib2R5LWZvcm0tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEE5N0Y7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE5N0Y7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY29udGFjdC1ib2R5LWZvcm0tYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMDBBOTdGO1xufVxuXG4uc29jaWFsLWltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5zb2NpYWwtaW1nOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi8qIGZvb3RlciAqL1xuXG5mb290ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3JlZGl0cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBTdHlsZSB0aGUgbGluayB0byByZW1vdmUgZGVmYXVsdCBzdHlsaW5nICovXG4uZ2l0aHViLWxpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIEFkZCB0aGUgaG92ZXIgZWZmZWN0ICovXG4uZ2l0aHViLWljb24ge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0OyAvKiBBZGQgYSB0cmFuc2l0aW9uIGZvciB0aGUgdHJhbnNmb3JtIHByb3BlcnR5ICovXG59XG5cbi5naXRodWItbGluazpob3ZlciAuZ2l0aHViLWljb24ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IC8qIFJvdGF0ZSB0aGUgaWNvbiAxODAgZGVncmVlcyB3aGVuIGhvdmVyZWQgKi9cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUEsNEJBQTRCOztBQUU1QjtJQUNJLDRCQUE0QjtJQUM1Qiw0Q0FBNEU7QUFDaEY7O0FBRUE7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QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLDZDQUE2QztBQUM3QztJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSxzQ0FBc0MsRUFBRSxnREFBZ0Q7QUFDNUY7O0FBRUE7SUFDSSx5QkFBeUIsRUFBRSw2Q0FBNkM7QUFDNUVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4vKiBNWSBPV04gU1RZTEVTIEZST00gSEVSRSAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1NwYWNlIEdyb3Rlc2snO1xcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NwYWNlX0dyb3Rlc2svU3BhY2VHcm90ZXNrLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgZm9udC1mYW1pbHk6ICdTcGFjZSBHcm90ZXNrJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjM5MDYyNXZ3KTtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmg0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmhlYWRlcixmb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAgIGNvbG9yOiAjRTZGRkY2O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZTogMjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBjb2xvcjogI0U2RkZGNjtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMCU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyOjphZnRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZGRkY2O1xcbn1cXG5cXG4ubWVudS1pdGVtLW51bWJlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBjb2xvcjogIzAwQTk3RjtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7IC8qIEVzdG8gaGFjZSBxdWUgbWFpbiBvY3VwZSB0b2RvIGVsIGVzcGFjaW8gcmVzdGFudGUgZGVzcHXDqXMgZGUgaGVhZGVyIHkgYW50ZXMgZGUgZm9vdGVyICovXFxuICAgIGdhcDogNSU7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgICAvKiBwYWRkaW5nLXRvcDogNnJlbTsgKi9cXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZ2FwOiA1JTtcXG59XFxuXFxuLmhvbWUge1xcbiAgICAvKiBwYWRkaW5nLXRvcDogNnJlbTsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzL2ltYWdlcy9jaXJjdWl0LXByaW1hcnkuc3ZnJykgbm8tcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBnYXA6IDUlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWFpbi10ZXh0IHtcXG4gICAgY29sb3I6ICMwMTg3NkM7XFxuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwJTtcXG59XFxuXFxuLm1haW4tdGV4dC1uYW1lIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLm1haW4tdGV4dC1yb2xlIHtcXG4gICAgY29sb3I6ICMwMTg3NkM7XFxufVxcblxcbi5ob21lLWltYWdlIHtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qIEFib3V0IHNlY3Rpb24gKi9cXG5cXG4uc2VjdGlvbi1oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnNlY3Rpb24taGVhZGVyLXRleHQge1xcbiAgICBjb2xvcjogIzAxODc2QztcXG59XFxuXFxuLnNlY3Rpb24taGVhZGVyLXRpdGxlIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5zZWN0aW9uLWhlYWRlci1saW5lIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICAvKiBtYXJnaW4tdG9wOiAwLjVyZW07ICovXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQTk3RjtcXG59XFxuXFxuI2Fib3V0LWJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IHRvcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbiNhYm91dC1ib2R5LWltYWdlIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5zZWN0aW9uLWJvZHktdGV4dCB7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLyogU3RhY2sgc2VjdGlvbiAqL1xcblxcbnRhYmxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcblxcbnRoIHtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMEE5N0Y7XFxufVxcblxcbi5zZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIGxlZnQ6IDVweDtcXG4gICAgcmlnaHQ6IDVweDtcXG4gICAgYm90dG9tOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBOTdGO1xcbn1cXG5cXG4uc2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIGxlZnQ6IDVweDtcXG4gICAgcmlnaHQ6IDVweDtcXG4gICAgYm90dG9tOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4vKiBQcm9qZWN0cyBzZWN0aW9uICovXFxuXFxuI3Byb2plY3RzLWJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxufVxcblxcblxcbiNwcm9qZWN0cy1ib2R5LWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1JTtcXG59XFxuXFxuLnByb2plY3QtZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1kaXYtdG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IHRvcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWRpdi10b3AtcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgbWF4LXdpZHRoOiA3MCU7XFxufVxcblxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0LWxpbmstYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEE5N0Y7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQTk3RjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLnByb2plY3QtbGluay1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBjb2xvcjogIzAwQTk3RjtcXG59XFxuXFxuLnByb2plY3QtZGl2LWJvdHRvbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbn1cXG5cXG4ucHJvamVjdC1pbWFnZSB7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZCAjMDAwMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDEwcHggNXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4vKiBDb250YWN0IHNlY3Rpb24gKi9cXG5cXG4jY29udGFjdC1ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbi5jb250YWN0LWJvZHktdG9wIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uY29udGFjdC1ib2R5LWJvdHRvbSB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4uY29udGFjdC1ib2R5LXNvY2lhbCB7XFxuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5jb250YWN0LWJvZHktdGV4dCB7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtYm9keS1mb3JtIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEE5N0Y7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4RkNFQTtcXG59XFxuXFxuLmZvcm0tZmllbGQtZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY29udGFjdC1ib2R5LWZvcm0tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWJvZHktZm9ybS1sYWJlbCB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG5cXG4uY29udGFjdC1ib2R5LWZvcm0taW5wdXQge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MkJEOUY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtYm9keS1mb3JtLWlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwQTk3RjtcXG59XFxuXFxuLmNvbnRhY3QtYm9keS1mb3JtLXRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTJCRDlGO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5jb250YWN0LWJvZHktZm9ybS10ZXh0YXJlYTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMEE5N0Y7XFxufVxcblxcbi5jb250YWN0LWJvZHktZm9ybS1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwQTk3RjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBOTdGO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5jb250YWN0LWJvZHktZm9ybS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBjb2xvcjogIzAwQTk3RjtcXG59XFxuXFxuLnNvY2lhbC1pbWcge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4uc29jaWFsLWltZzpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuXFxuZm9vdGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jcmVkaXRzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgbGluayB0byByZW1vdmUgZGVmYXVsdCBzdHlsaW5nICovXFxuLmdpdGh1Yi1saW5rIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4vKiBBZGQgdGhlIGhvdmVyIGVmZmVjdCAqL1xcbi5naXRodWItaWNvbiB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0OyAvKiBBZGQgYSB0cmFuc2l0aW9uIGZvciB0aGUgdHJhbnNmb3JtIHByb3BlcnR5ICovXFxufVxcblxcbi5naXRodWItbGluazpob3ZlciAuZ2l0aHViLWljb24ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyAvKiBSb3RhdGUgdGhlIGljb24gMTgwIGRlZ3JlZXMgd2hlbiBob3ZlcmVkICovXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuLzE3Rjk2Qjk3LTlCMkUtNDI2Qi1BNjhCLTY5MzZENkZERDEyRS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzLzE3Rjk2Qjk3LTlCMkUtNDI2Qi1BNjhCLTY5MzZENkZERDEyRS5qcGdcIixcblx0XCIuL2NoYXJsZXMtZGVsb3llLTloRlBTOVlZYVRvLXVuc3BsYXNoLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2hhcmxlcy1kZWxveWUtOWhGUFM5WVlhVG8tdW5zcGxhc2guanBnXCIsXG5cdFwiLi9jaXJjdWl0LXByaW1hcnkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaXJjdWl0LXByaW1hcnkuc3ZnXCIsXG5cdFwiLi9naXRodWItaWNvbi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2dpdGh1Yi1pY29uLnN2Z1wiLFxuXHRcIi4vaGFuZHNvbWUtbWFuLXdpdGgtYmx1ZS1nbGFzc2VzLXByZXNlbnRpbmctc29tZXRoaW5nLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaGFuZHNvbWUtbWFuLXdpdGgtYmx1ZS1nbGFzc2VzLXByZXNlbnRpbmctc29tZXRoaW5nLmpwZ1wiLFxuXHRcIi4vaW5zdGFncmFtLWljb24uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pbnN0YWdyYW0taWNvbi5zdmdcIixcblx0XCIuL2xpbmtlZGluLWljb24uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9saW5rZWRpbi1pY29uLnN2Z1wiLFxuXHRcIi4vbWFpbC1pY29uLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbC1pY29uLnN2Z1wiLFxuXHRcIi4vbWFuLXdoaXRlLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFuLXdoaXRlLmpwZ1wiLFxuXHRcIi4vcGV4ZWxzLWFydGVtLXBvZHJlei00ODE3NDA2LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcGV4ZWxzLWFydGVtLXBvZHJlei00ODE3NDA2LmpwZ1wiLFxuXHRcIi4vcGV4ZWxzLWNhbnZhLXN0dWRpby0zMTUzMjAzLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcGV4ZWxzLWNhbnZhLXN0dWRpby0zMTUzMjAzLmpwZ1wiLFxuXHRcIi4vcGV4ZWxzLW1hcmN1cy1zaWx2YS0xMDUwODU2MS0yLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcGV4ZWxzLW1hcmN1cy1zaWx2YS0xMDUwODU2MS0yLmpwZ1wiLFxuXHRcIi4vcGV4ZWxzLW1hcmN1cy1zaWx2YS0xMDUwODU2MS0zLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcGV4ZWxzLW1hcmN1cy1zaWx2YS0xMDUwODU2MS0zLmpwZ1wiLFxuXHRcIi4vcGV4ZWxzLW1hcmN1cy1zaWx2YS0xMDUwODU2MS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3BleGVscy1tYXJjdXMtc2lsdmEtMTA1MDg1NjEuanBnXCIsXG5cdFwiLi9wcm9qZWN0MS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3Byb2plY3QxLnBuZ1wiLFxuXHRcIi4vcHJvamVjdDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9wcm9qZWN0Mi5wbmdcIixcblx0XCIuL3gtaWNvbi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3gtaWNvbi5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcyBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnJTdDZ2lmKSRcIjsiXSwibmFtZXMiOlsiQWJvdXRJbWciLCJMaW5rZWRJbiIsIkluc3RhZ3JhbSIsIkdpdEh1YiIsIlgiLCJNYWlsIiwiaW1hZ2VzQ29udGV4dCIsInJlcXVpcmUiLCJjb250ZXh0IiwicHJvamVjdHNEYXRhIiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImNsYXNzTmFtZSIsImlkIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwiaGVhZGVyIiwibWFpbiIsImZvb3RlciIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImxvZ28iLCJuYXYiLCJsb2dvVGV4dCIsInRleHRDb250ZW50IiwibWVudSIsIm1lbnVJdGVtcyIsImNvdW50ZXIiLCJ0d29EaWdpdENvdW50ZXIiLCJ2YWx1ZSIsImZvckVhY2giLCJpdGVtIiwibnVtTGFiZWwiLCJtZW51SXRlbSIsIml0ZW1MaW5rIiwiaG9tZSIsImFib3V0Iiwic3RhY2siLCJwcm9qZWN0cyIsImNvbnRhY3QiLCJtYWluVGV4dCIsIm5ld0xpbmUxIiwic3Bhbk5hbWUiLCJuZXdMaW5lMiIsInNwYW5Sb2xlIiwiTWVJbWFnZSIsIkltYWdlIiwic3JjIiwiYWx0IiwiYWJvdXRIZWFkZXIiLCJhYm91dEJvZHkiLCJhYm91dEhlYWRlckxpbmUiLCJhYm91dEhlYWRlclRleHQiLCJhYm91dEhlYWRlclRpdGxlIiwiYWJvdXRCb2R5SW1hZ2UiLCJhYm91dEJvZHlEaXZUZXh0IiwiYWJvdXRCb2R5VGV4dDEiLCJhYm91dEJvZHlUZXh0MiIsImFib3V0Qm9keVRleHQzIiwiYWJvdXRCb2R5VGV4dDQiLCJhYm91dEJvZHlUZXh0NSIsInN0YWNrSGVhZGVyIiwic3RhY2tCb2R5Iiwic3RhY2tIZWFkZXJMaW5lIiwic3RhY2tIZWFkZXJUZXh0Iiwic3RhY2tIZWFkZXJUaXRsZSIsInN0YWNrVGFibGUiLCJzdGFja1RhYmxlSGVhZCIsInN0YWNrVGFibGVIZWFkUm93Iiwic3RhY2tUYWJsZUhlYWRDb2wxIiwic3RhY2tUYWJsZUhlYWRDb2wyIiwic3RhY2tUYWJsZUhlYWRDb2wzIiwic3RhY2tUYWJsZUhlYWRDb2w0Iiwic3RhY2tUYWJsZUhlYWRDb2w1Iiwic3RhY2tUYWJsZUhlYWRDb2w2Iiwic3RhY2tUYWJsZUJvZHkiLCJzdGFja1RhYmxlQm9keVJvdzEiLCJzdGFja1RhYmxlQm9keUhlYWQxIiwic3RhY2tUYWJsZUJvZHlIZWFkMiIsInN0YWNrVGFibGVCb2R5Q2VsbDEiLCJzdGFja1RhYmxlQm9keUNlbGwyIiwic3RhY2tUYWJsZUJvZHlDZWxsMyIsInN0YWNrVGFibGVCb2R5Q2VsbDQiLCJzdGFja1RhYmxlQm9keUNlbGw0YmlzIiwic3RhY2tUYWJsZUJvZHlSb3cyIiwic3RhY2tUYWJsZUJvZHlIZWFkMyIsInN0YWNrVGFibGVCb2R5Q2VsbDUiLCJzdGFja1RhYmxlQm9keUNlbGw2Iiwic3RhY2tUYWJsZUJvZHlDZWxsNyIsInN0YWNrVGFibGVCb2R5Q2VsbDgiLCJzdGFja1RhYmxlQm9keUNlbGw4MSIsInN0YWNrVGFibGVCb2R5Um93MyIsInN0YWNrVGFibGVCb2R5SGVhZDQiLCJzdGFja1RhYmxlQm9keUNlbGw5Iiwic3RhY2tUYWJsZUJvZHlDZWxsMTAiLCJzdGFja1RhYmxlQm9keUNlbGwxMSIsInN0YWNrVGFibGVCb2R5Q2VsbDEyIiwic3RhY2tUYWJsZUJvZHlDZWxsMTIxIiwic3RhY2tUYWJsZUJvZHlSb3c0Iiwic3RhY2tUYWJsZUJvZHlIZWFkNSIsInN0YWNrVGFibGVCb2R5Q2VsbDEzIiwic3RhY2tUYWJsZUJvZHlDZWxsMTQiLCJzdGFja1RhYmxlQm9keUNlbGwxNSIsInN0YWNrVGFibGVCb2R5Q2VsbDE2Iiwic3RhY2tUYWJsZUJvZHlDZWxsMTciLCJzdGFja1RhYmxlQm9keVJvdzUiLCJzdGFja1RhYmxlQm9keUhlYWQ2Iiwic3RhY2tUYWJsZUJvZHlIZWFkNyIsInN0YWNrVGFibGVCb2R5Q2VsbDE4Iiwic3RhY2tUYWJsZUJvZHlDZWxsMTkiLCJzdGFja1RhYmxlQm9keUNlbGwyMCIsInN0YWNrVGFibGVCb2R5Q2VsbDIxIiwic3RhY2tUYWJsZUJvZHlDZWxsMjIiLCJzdGFja1RhYmxlQm9keVJvdzYiLCJzdGFja1RhYmxlQm9keUhlYWQ4Iiwic3RhY2tUYWJsZUJvZHlDZWxsMjMiLCJzdGFja1RhYmxlQm9keUNlbGwyNCIsInN0YWNrVGFibGVCb2R5Q2VsbDI1Iiwic3RhY2tUYWJsZUJvZHlDZWxsMjYiLCJzdGFja1RhYmxlQm9keUNlbGwyNyIsInN0YWNrVGFibGVCb2R5Um93NyIsInN0YWNrVGFibGVCb2R5SGVhZDkiLCJzdGFja1RhYmxlQm9keUhlYWQxMCIsInN0YWNrVGFibGVCb2R5Q2VsbDI4Iiwic3RhY2tUYWJsZUJvZHlDZWxsMjkiLCJzdGFja1RhYmxlQm9keUNlbGwzMCIsInN0YWNrVGFibGVCb2R5Q2VsbDMxIiwic3RhY2tUYWJsZUJvZHlDZWxsMzIiLCJzdGFja1RhYmxlQm9keVJvdzgiLCJzdGFja1RhYmxlQm9keUhlYWQxMSIsInN0YWNrVGFibGVCb2R5Q2VsbDMzIiwic3RhY2tUYWJsZUJvZHlDZWxsMzQiLCJzdGFja1RhYmxlQm9keUNlbGwzNSIsInN0YWNrVGFibGVCb2R5Q2VsbDM2Iiwic3RhY2tUYWJsZUJvZHlDZWxsMzciLCJzdGFja1RhYmxlQm9keVJvdzkiLCJzdGFja1RhYmxlQm9keUhlYWQxMiIsInN0YWNrVGFibGVCb2R5Q2VsbDM4Iiwic3RhY2tUYWJsZUJvZHlDZWxsMzkiLCJzdGFja1RhYmxlQm9keUNlbGw0MCIsInN0YWNrVGFibGVCb2R5Q2VsbDQxIiwic3RhY2tUYWJsZUJvZHlDZWxsNDIiLCJzdGFja1RhYmxlQm9keVJvdzEwIiwic3RhY2tUYWJsZUJvZHlIZWFkMTMiLCJzdGFja1RhYmxlQm9keUhlYWQxNCIsInN0YWNrVGFibGVCb2R5Q2VsbDQzIiwic3RhY2tUYWJsZUJvZHlDZWxsNDQiLCJzdGFja1RhYmxlQm9keUNlbGw0NSIsInN0YWNrVGFibGVCb2R5Q2VsbDQ2Iiwic3RhY2tUYWJsZUJvZHlDZWxsNDciLCJwcm9qZWN0c0hlYWRlciIsInByb2plY3RzQm9keSIsInByb2plY3RzSGVhZGVyTGluZSIsInByb2plY3RzSGVhZGVyVGV4dCIsInByb2plY3RzSGVhZGVyVGl0bGUiLCJwcm9qZWN0c0JvZHlEaXYiLCJjcmVhdGVQcm9qZWN0IiwicHJvamVjdCIsInByb2plY3REaXYiLCJwcm9qZWN0RGl2VG9wIiwicHJvamVjdERpdlRvcExlZnQiLCJwcm9qZWN0VGl0bGUiLCJ0aXRsZSIsInByb2plY3RTdWJ0aXRsZSIsInN1YnRpdGxlIiwicHJvamVjdERpdlRvcFJpZ2h0IiwicHJvamVjdERlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJwcm9qZWN0TGlua0J1dHRvbiIsImhyZWYiLCJsaW5rIiwidGFyZ2V0IiwicmVsIiwicHJvamVjdERpdkJvdHRvbSIsInByb2plY3RJbWFnZSIsImltYWdlIiwiY29udGFjdEhlYWRlciIsImNvbnRhY3RCb2R5IiwiY29udGFjdEhlYWRlckxpbmUiLCJjb250YWN0SGVhZGVyVGV4dCIsImNvbnRhY3RIZWFkZXJUaXRsZSIsImNvbnRhY3RCb2R5VG9wIiwiY29udGFjdEJvZHlUZXh0MSIsImNvbnRhY3RCb2R5VGV4dDIiLCJjb250YWN0Qm9keUJvdHRvbSIsImNvbnRhY3RCb2R5Rm9ybSIsImNvbnRhY3RCb2R5U29jaWFsIiwibGlua2VkSW5MaW5rIiwibGlua2VkSW5JbWciLCJpbnN0YWdyYW1MaW5rIiwiaW5zdGFncmFtSW1nIiwiZ2l0aHViTGluayIsImdpdGh1YkltZyIsInhMaW5rIiwieEltZyIsIm1haWxMaW5rIiwibWFpbEltZyIsImNvbnRhY3RCb2R5Rm9ybURpdiIsIm5hbWVEaXYiLCJuYW1lTGFiZWwiLCJmb3IiLCJuYW1lSW5wdXQiLCJ0eXBlIiwibmFtZSIsImVtYWlsRGl2IiwiZW1haWxMYWJlbCIsImVtYWlsSW5wdXQiLCJtZXNzYWdlRGl2IiwibWVzc2FnZUxhYmVsIiwibWVzc2FnZVRleHRhcmVhIiwicm93cyIsImNvbnRhY3RCb2R5Rm9ybUJ1dHRvbiIsImNyZWRpdHMiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9