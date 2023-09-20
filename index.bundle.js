(self["webpackChunkpersonal_portfolio"] = self["webpackChunkpersonal_portfolio"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _assets_images_man_white_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/man-white.jpg */ "./src/assets/images/man-white.jpg");
/* harmony import */ var _assets_images_handsome_man_with_blue_glasses_presenting_something_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/handsome-man-with-blue-glasses-presenting-something.jpg */ "./src/assets/images/handsome-man-with-blue-glasses-presenting-something.jpg");
/* harmony import */ var _assets_images_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/linkedin-icon.svg */ "./src/assets/images/linkedin-icon.svg");
/* harmony import */ var _assets_images_instagram_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/instagram-icon.svg */ "./src/assets/images/instagram-icon.svg");
/* harmony import */ var _assets_images_github_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/github-icon.svg */ "./src/assets/images/github-icon.svg");
/* harmony import */ var _assets_images_x_icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/x-icon.svg */ "./src/assets/images/x-icon.svg");
/* harmony import */ var _assets_images_mail_icon_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/mail-icon.svg */ "./src/assets/images/mail-icon.svg");
/* harmony import */ var _assets_data_projects_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/data/projects.json */ "./src/assets/data/projects.json");










// Function that imports an image based on an input name
async function loadImage(imageName) {
  const imageModule = await __webpack_require__("./src/assets/images lazy recursive ^\\.\\/.*$")(`./${imageName}`);
  return imageModule.default;
}

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
const MeImage = createElement("img", "home-image");
MeImage.classList.add("home-image");
MeImage.src = _assets_images_man_white_jpg__WEBPACK_IMPORTED_MODULE_1__;
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
aboutBodyImage.src = _assets_images_handsome_man_with_blue_glasses_presenting_something_jpg__WEBPACK_IMPORTED_MODULE_2__;
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
_assets_data_projects_json__WEBPACK_IMPORTED_MODULE_8__.projects.forEach(createProject);

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
linkedInImg.src = _assets_images_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_3__;
linkedInImg.alt = "LinkedIn";
linkedInLink.appendChild(linkedInImg);
const instagramLink = createElement("a", "contact-body-social-link");
instagramLink.href = "https://www.instagram.com/rauljimenezfernandez/";
instagramLink.target = "_blank";
instagramLink.rel = "noopener noreferrer";
contactBodySocial.appendChild(instagramLink);
const instagramImg = createElement("img", "social-img");
instagramImg.src = _assets_images_instagram_icon_svg__WEBPACK_IMPORTED_MODULE_4__;
instagramImg.alt = "Instagram";
instagramLink.appendChild(instagramImg);
const githubLink = createElement("a", "contact-body-social-link");
githubLink.href = "";
githubLink.target = "_blank";
githubLink.rel = "noopener noreferrer";
contactBodySocial.appendChild(githubLink);
const githubImg = createElement("img", "social-img");
githubImg.src = _assets_images_github_icon_svg__WEBPACK_IMPORTED_MODULE_5__;
githubImg.alt = "GitHub";
githubLink.appendChild(githubImg);
const xLink = createElement("a", "contact-body-social-link");
xLink.href = "https://www.xing.com/profile/Raul_JimenezFernandez/cv";
xLink.target = "_blank";
xLink.rel = "noopener noreferrer";
contactBodySocial.appendChild(xLink);
const xImg = createElement("img", "social-img");
xImg.src = _assets_images_x_icon_svg__WEBPACK_IMPORTED_MODULE_6__;
xImg.alt = "X";
xLink.appendChild(xImg);
const mailLink = createElement("a", "contact-body-social-link");
mailLink.href = "mailto:rjbarco@gmail.com";
mailLink.target = "_blank";
mailLink.rel = "noopener noreferrer";
contactBodySocial.appendChild(mailLink);
const mailImg = createElement("img", "social-img");
mailImg.src = _assets_images_mail_icon_svg__WEBPACK_IMPORTED_MODULE_7__;
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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/handsome-man-holding-something.jpg */ "./src/assets/images/handsome-man-holding-something.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
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
    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* MY OWN STYLES FROM HERE */\n\n@font-face {\n    font-family: 'Space Grotesk';\n    src: url('../assets/fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf');\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    background-color: #ffffff;\n    font-family: 'Space Grotesk', sans-serif;\n    font-size: calc(12px + 0.390625vw);\n    color: #000000;\n    min-height: 100vh;\n}\n\nh1 {\n    font-size: 3rem;\n}\n\nh2 {\n    font-size: 2.5rem;\n}\n\nh3 {\n    font-size: 2rem;\n}\n\nh4 {\n    font-size: 1.5rem;\n}\n\nheader,footer {\n    display: flex;\n    align-items: center;\n    padding: 20px 40px;\n    background-color: #000000;\n    color: #E6FFF6;\n}\n\nheader {\n    justify-content: space-between;\n    font-size: 2;\n}\n\n.logo {\n    color: #E6FFF6;\n}\n\nnav {\n    display: flex;\n    align-items: center;\n}\n\n.menu {\n    display: flex;\n    align-items: center;\n}\n\n.menu-item {\n    margin-left: 5px;\n    cursor: pointer;\n}\n\n.menu-item::after {\n    content: '';\n    width: 0%;\n    height: 1px;\n    margin-top: 5px;\n    display: block;\n    transition: all 0.3s ease;\n}\n\n.menu-item:hover::after {\n    width: 100%;\n    height: 1px;\n    margin-top: 5px;\n    background-color: #E6FFF6;\n}\n\n.menu-item-number {\n    margin-left: 20px;\n    color: #00A97F;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex-grow: 1; /* Esto hace que main ocupe todo el espacio restante después de header y antes de footer */\n    gap: 5%;\n}\n\nsection {\n    /* padding-top: 6rem; */\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex-grow: 1;\n    gap: 5%;\n}\n\n.home {\n    /* padding-top: 6rem; */\n    width: 100%;\n    background: url('../assets/images/circuit-primary.svg') no-repeat;\n    display: flex;\n    flex-direction: row;\n    align-items: end;\n    justify-content: end;\n    flex-grow: 1;\n    gap: 5%;\n    margin-right: 4rem;\n    min-height: 100vh;\n}\n\n.main-text {\n    color: #01876C;\n    line-height: 4rem;\n    text-align: end;\n    margin-bottom: 30%;\n}\n\n.main-text-name {\n    color: #000000;\n    font-size: 4rem;\n}\n\n.main-text-role {\n    color: #01876C;\n}\n\n.home-image {\n    width: 600px;\n    height: auto;\n}\n\n/* About section */\n\n.section-header {\n    width: 100%;\n    margin-bottom: 2rem;\n}\n\n.section-header-text {\n    color: #01876C;\n}\n\n.section-header-title {\n    color: #000000;\n}\n\n.section-header-line {\n    width: 100%;\n    height: 1px;\n    /* margin-top: 0.5rem; */\n    margin-bottom: 1.5rem;\n    background-color: #00A97F;\n}\n\n#about-body {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: top;\n    justify-content: center;\n    gap: 5%;\n}\n\n#about-body-image {\n    width: 500px;\n    height: auto;\n}\n\n.section-body-text {\n    color: #000000;\n    line-height: 2rem;\n    text-align: justify;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 1rem;\n}\n\n/* Stack section */\n\ntable {\n    width: 100%;\n    margin-bottom: 4rem;\n}\n\nth {\n    width: 8rem;\n    padding: 1rem;\n    text-align: center;\n    vertical-align: middle;\n    border-bottom: 1px solid #00A97F;\n}\n\n.section-body-table-body-cell-filled {\n    position: relative;\n    padding: 10px;\n}\n\n.section-body-table-body-cell-empty {\n    position: relative;\n    padding: 10px;\n}\n\n.section-body-table-body-cell-filled::after {\n    content: '';\n    position: absolute;\n    top: 15px;\n    left: 5px;\n    right: 5px;\n    bottom: 15px;\n    background-color: #00A97F;\n}\n\n.section-body-table-body-cell-empty::after {\n    content: '';\n    position: absolute;\n    top: 15px;\n    left: 5px;\n    right: 5px;\n    bottom: 15px;\n    background-color: #000000;\n}\n\n/* Projects section */\n\n#projects-body {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5%;\n}\n\n\n#projects-body-div {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5%;\n}\n\n.project-div {\n    margin-bottom: 4rem;\n    width: 800px;\n}\n\n.project-div-top {\n    display: flex;\n    flex-direction: row;\n    align-items: top;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n}\n\n.project-title {\n    margin-bottom: 1rem;\n}\n\n.project-div-top-right {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 1rem;\n    max-width: 70%;\n}\n\n.project-description {\n    text-align: justify;\n    line-height: 2rem;\n}\n\n.project-link-button {\n    padding: 0.5rem 1rem;\n    border: 1px solid #00A97F;\n    border-radius: 5px;\n    background-color: #00A97F;\n    color: #ffffff;\n    text-decoration: none;\n    transition: all 0.3s ease;\n}\n\n.project-link-button:hover {\n    background-color: #ffffff;\n    color: #00A97F;\n}\n\n.project-div-bottom {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 5%;\n}\n\n.project-image {\n    width: 800px;\n    height: auto;\n    border: 8px solid #000000;\n    border-radius: 20px;\n    box-shadow: 0 10px 5px -4px rgba(0, 0, 0, 0.5);\n}\n\n/* Contact section */\n\n#contact-body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5%;\n}\n\n.contact-body-top {\n    color: #000000;\n    line-height: 2rem;\n    margin-bottom: 2rem;\n}\n\n.contact-body-bottom {\n    width: 60%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 4rem;\n    background: url('../assets/images/handsome-man-holding-something.jpg') no-repeat;\n}\n\n.contact-body-social {\n    padding-left: 4rem;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n    gap: 1.5rem;\n}\n\n.contact-body-text {\n    color: #000000;\n    line-height: 2rem;\n    text-align: justify;\n    margin-bottom: 1rem;\n}\n\n.contact-body-form {\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #00A97F;\n    border-radius: 10px;\n    padding: 2rem 4rem;\n    background-color: #C8FCEA;\n}\n\n.form-field-div {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 10%;\n    padding: 1rem;\n}\n\n.contact-body-form-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.contact-body-form-label {\n    width: 30%;\n    text-align: left;\n    color: #000000;\n    padding-top: 0.5rem;\n}\n\n.contact-body-form-input {\n    width: 70%;\n    padding: 0.5rem;\n    border: 1px solid #52BD9F;\n    border-radius: 5px;\n    background-color: #ffffff;\n    color: #000000;\n    transition: all 0.3s ease;\n    font-size: 1rem;\n}\n\n.contact-body-form-input:focus {\n    outline: none;\n    border: 2px solid #00A97F;\n}\n\n.contact-body-form-textarea {\n    width: 70%;\n    padding: 0.5rem;\n    border: 1px solid #52BD9F;\n    border-radius: 5px;\n    background-color: #ffffff;\n    color: #000000;\n    transition: all 0.3s ease;\n    font-size: 1rem;\n}\n\n.contact-body-form-textarea:focus {\n    outline: none;\n    border: 2px solid #00A97F;\n}\n\n.contact-body-form-button {\n    margin-top: 1rem;\n    padding: 0.5rem 1rem;\n    border: 1px solid #00A97F;\n    border-radius: 5px;\n    background-color: #00A97F;\n    color: #ffffff;\n    text-decoration: none;\n    transition: all 0.3s ease;\n    font-size: 1rem;\n}\n\n.contact-body-form-button:hover {\n    background-color: #ffffff;\n    color: #00A97F;\n}\n\n.social-img {\n    width: 50px;\n    height: auto;\n    transition: all 0.3s ease;\n}\n\n.social-img:hover {\n    transform: scale(1.2);\n}\n\n/* footer */\n\nfooter {\n    justify-content: center;\n}\n\n.credits {\n    text-align: center;\n}\n\n/* Style the link to remove default styling */\n.github-link {\n    display: inline-block;\n    text-decoration: none;\n    color: inherit;\n}\n\n/* Add the hover effect */\n.github-icon {\n    transition: transform 0.5s ease-in-out; /* Add a transition for the transform property */\n}\n\n.github-link:hover .github-icon {\n    transform: rotate(180deg); /* Rotate the icon 180 degrees when hovered */\n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/images lazy recursive ^\\.\\/.*$":
/*!***********************************************************!*\
  !*** ./src/assets/images/ lazy ^\.\/.*$ namespace object ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./17F96B97-9B2E-426B-A68B-6936D6FDD12E.jpg": [
		"./src/assets/images/17F96B97-9B2E-426B-A68B-6936D6FDD12E.jpg",
		"src_assets_images_17F96B97-9B2E-426B-A68B-6936D6FDD12E_jpg"
	],
	"./charles-deloye-9hFPS9YYaTo-unsplash.jpg": [
		"./src/assets/images/charles-deloye-9hFPS9YYaTo-unsplash.jpg",
		"src_assets_images_charles-deloye-9hFPS9YYaTo-unsplash_jpg"
	],
	"./circuit-primary.svg": [
		"./src/assets/images/circuit-primary.svg"
	],
	"./github-icon.svg": [
		"./src/assets/images/github-icon.svg"
	],
	"./handsome-man-holding-something.jpg": [
		"./src/assets/images/handsome-man-holding-something.jpg"
	],
	"./handsome-man-with-blue-glasses-presenting-something.jpg": [
		"./src/assets/images/handsome-man-with-blue-glasses-presenting-something.jpg"
	],
	"./instagram-icon.svg": [
		"./src/assets/images/instagram-icon.svg"
	],
	"./linkedin-icon.svg": [
		"./src/assets/images/linkedin-icon.svg"
	],
	"./mail-icon.svg": [
		"./src/assets/images/mail-icon.svg"
	],
	"./man-white.jpg": [
		"./src/assets/images/man-white.jpg"
	],
	"./pexels-artem-podrez-4817406.jpg": [
		"./src/assets/images/pexels-artem-podrez-4817406.jpg",
		"src_assets_images_pexels-artem-podrez-4817406_jpg"
	],
	"./pexels-canva-studio-3153203.jpg": [
		"./src/assets/images/pexels-canva-studio-3153203.jpg",
		"src_assets_images_pexels-canva-studio-3153203_jpg"
	],
	"./pexels-marcus-silva-10508561-2.jpg": [
		"./src/assets/images/pexels-marcus-silva-10508561-2.jpg",
		"src_assets_images_pexels-marcus-silva-10508561-2_jpg"
	],
	"./pexels-marcus-silva-10508561-3.jpg": [
		"./src/assets/images/pexels-marcus-silva-10508561-3.jpg",
		"src_assets_images_pexels-marcus-silva-10508561-3_jpg"
	],
	"./pexels-marcus-silva-10508561.jpg": [
		"./src/assets/images/pexels-marcus-silva-10508561.jpg",
		"src_assets_images_pexels-marcus-silva-10508561_jpg"
	],
	"./project1.png": [
		"./src/assets/images/project1.png",
		"src_assets_images_project1_png"
	],
	"./project2.png": [
		"./src/assets/images/project2.png",
		"src_assets_images_project2_png"
	],
	"./project3.png": [
		"./src/assets/images/project3.png",
		"src_assets_images_project3_png"
	],
	"./x-icon.svg": [
		"./src/assets/images/x-icon.svg"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__.t(id, 1 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/assets/images lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/assets/fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf":
/*!***************************************************************************!*\
  !*** ./src/assets/fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1036357b9651eff7d3dd.ttf";

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

/***/ "./src/assets/images/handsome-man-holding-something.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/images/handsome-man-holding-something.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "baa04cb501cdc33b5285.jpg";

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
module.exports = JSON.parse('{"projects":[{"title":"Proyecto A","subtitle":"Subtítulo del Proyecto A","description":"Esta es la descripción detallada del Proyecto A.","link":"https://linkalproyectoA.com","image":"project1.png","alt":"Imagen descriptiva del Proyecto A"},{"title":"Proyecto B","subtitle":"Subtítulo del Proyecto B","description":"Esta es la descripción detallada del Proyecto B.","link":"https://linkalproyectoB.com","image":"project2.png","alt":"Imagen descriptiva del Proyecto B"},{"title":"Proyecto C","subtitle":"Subtítulo del Proyecto C","description":"Esta es la descripción detallada del Proyecto C.","link":"https://linkalproyectoC.com","image":"project3.png","alt":"Imagen descriptiva del Proyecto C"}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CLENBQUMsT0FBTyx5RkFBeUYsTUFBTSxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSx1QkFBdUIsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFB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d2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9hc3NldHMvaW1hZ2VzLyBsYXp5IF5cXC5cXC8uKiQgbmFtZXNwYWNlIG9iamVjdCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5jc3NcIjtcbmltcG9ydCBNZSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL21hbi13aGl0ZS5qcGdcIjtcbmltcG9ydCBBYm91dEltZyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2hhbmRzb21lLW1hbi13aXRoLWJsdWUtZ2xhc3Nlcy1wcmVzZW50aW5nLXNvbWV0aGluZy5qcGdcIjtcbmltcG9ydCBMaW5rZWRJbiBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2xpbmtlZGluLWljb24uc3ZnXCI7XG5pbXBvcnQgSW5zdGFncmFtIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvaW5zdGFncmFtLWljb24uc3ZnXCI7XG5pbXBvcnQgR2l0SHViIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvZ2l0aHViLWljb24uc3ZnXCI7XG5pbXBvcnQgWCBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3gtaWNvbi5zdmdcIjtcbmltcG9ydCBNYWlsIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvbWFpbC1pY29uLnN2Z1wiO1xuaW1wb3J0IHByb2plY3RzRGF0YSBmcm9tIFwiLi9hc3NldHMvZGF0YS9wcm9qZWN0cy5qc29uXCI7XG5cbi8vIEZ1bmN0aW9uIHRoYXQgaW1wb3J0cyBhbiBpbWFnZSBiYXNlZCBvbiBhbiBpbnB1dCBuYW1lXG5hc3luYyBmdW5jdGlvbiBsb2FkSW1hZ2UoaW1hZ2VOYW1lKSB7XG4gICAgY29uc3QgaW1hZ2VNb2R1bGUgPSBhd2FpdCBpbXBvcnQoYC4vYXNzZXRzL2ltYWdlcy8ke2ltYWdlTmFtZX1gKTtcbiAgICByZXR1cm4gaW1hZ2VNb2R1bGUuZGVmYXVsdDtcbn1cblxuLy8gQ3JlYXRlIGFuIGVsZW1lbnQgd2l0aCBhbiBvcHRpb25hbCBDU1MgY2xhc3MgYW5kIG9wdGlvbmFsIENTUyBpZFxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSwgaWQpIHtcbiAgICAgICAgXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKVxuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgIH1cblxuICAgIGlmIChpZCkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsaWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRcblxufVxuXG4vLyBSZXRyaWV2ZSBhbiBlbGVtZW50IGZyb20gdGhlIERPTVxuLyogZnVuY3Rpb24gZ2V0RWxlbWVudChpZCkge1xuICAgICAgICBcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG5cbiAgICByZXR1cm4gZWxlbWVudFxuXG59ICovXG5cbi8vIENyZWF0ZSAzIG1haW4gc2VjdGlvbnNcbmNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5jb25zdCBtYWluID0gY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5jb25zdCBmb290ZXIgPSBjcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXG4vLyBBZGQgZWFjaCBzZWN0aW9uIHRvIHRoZSBET01cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbi8vIEFkZCAyIHN1YnNlY3Rpb25zIHRvIGhlYWRlciwgb25lIGZvciBhIGxvZ28gYW5kIG9uZSBmb3IgYSBuYXZcbmNvbnN0IGxvZ28gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibG9nb1wiKTtcbmNvbnN0IG5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cbi8vIEFkZCBjb250ZW50IHRvIGxvZ28gc3Vic2VjdGlvblxuY29uc3QgbG9nb1RleHQgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJsb2dvLXRleHRcIik7XG5sb2dvVGV4dC50ZXh0Q29udGVudCA9IFwiUi5KLlwiO1xubG9nby5hcHBlbmRDaGlsZChsb2dvVGV4dCk7XG5cbi8vIEFkZCBjb250ZW50IHRvIG5hdiBzdWJzZWN0aW9uIChtZW51IGxpbmsgaXRlbXMpXG5jb25zdCBtZW51ID0gY3JlYXRlRWxlbWVudChcInVsXCIsIFwibWVudVwiKTtcbmNvbnN0IG1lbnVJdGVtcyA9IFtcIkhvbWVcIiwgXCJBYm91dFwiLCBcIlN0YWNrXCIsIFwiUHJvamVjdHNcIiwgXCJDb250YWN0XCJdO1xuLy8gQ3JlYXRlIGEgYWx3YXlzIHR3byBkaWdpdCBjb3VudGVyIGZvciB0aGUgbWVudSBpdGVtc1xubGV0IGNvdW50ZXIgPSAxO1xuXG5mdW5jdGlvbiB0d29EaWdpdENvdW50ZXIodmFsdWUpIHtcbiAgICBcbiAgICBpZiAodmFsdWUgPCAxMCkge1xuICAgICAgICByZXR1cm4gYDAke3ZhbHVlfS5gO1xuICAgIH0gXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICBcbn1cblxubWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBudW1MYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwibWVudS1pdGVtLW51bWJlclwiKTtcbiAgICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBcIm1lbnUtaXRlbVwiKTtcbiAgICBjb25zdCBpdGVtTGluayA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIFwibWVudS1pdGVtLWxpbmtcIik7XG4gICAgbnVtTGFiZWwudGV4dENvbnRlbnQgPSB0d29EaWdpdENvdW50ZXIoY291bnRlcik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChudW1MYWJlbCk7XG4gICAgY291bnRlciArPSAxO1xuICAgIGl0ZW1MaW5rLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtTGluayk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG59KTtcblxubmF2LmFwcGVuZENoaWxkKG1lbnUpO1xuXG4vLyBBZGQgZWFjaCBzdWJzZWN0aW9uIHRvIHRoZSBoZWFkZXJcbmhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbmhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4vLyBBZGQgY29udGVudCB0byBtYWluIHNlY3Rpb25cbi8vIEZpcnN0IGNyZWF0ZSA1IGJpZyBzdWJzZWN0aW9uc1xuY29uc3QgaG9tZSA9IGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFwiaG9tZVwiKTtcbmNvbnN0IGFib3V0ID0gY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgXCJhYm91dFwiKTtcbmNvbnN0IHN0YWNrID0gY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgXCJzdGFja1wiKTtcbmNvbnN0IHByb2plY3RzID0gY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgXCJwcm9qZWN0c1wiKTtcbmNvbnN0IGNvbnRhY3QgPSBjcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBcImNvbnRhY3RcIik7XG5cbi8vIEFkZCBlYWNoIHN1YnNlY3Rpb24gdG8gdGhlIG1haW4gc2VjdGlvblxubWFpbi5hcHBlbmRDaGlsZChob21lKTtcbm1haW4uYXBwZW5kQ2hpbGQoYWJvdXQpO1xubWFpbi5hcHBlbmRDaGlsZChzdGFjayk7XG5tYWluLmFwcGVuZENoaWxkKHByb2plY3RzKTtcbm1haW4uYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbi8vIEFkZCBjb250ZW50IHRvIGVhY2ggc3Vic2VjdGlvblxuLy8gSG9tZVxuY29uc3QgbWFpblRleHQgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJtYWluLXRleHRcIik7XG5tYWluVGV4dC50ZXh0Q29udGVudCA9IFwiSGVsbG8hIEkgYW1cIjtcbmhvbWUuYXBwZW5kQ2hpbGQobWFpblRleHQpO1xuY29uc3QgbmV3TGluZTEgPSBjcmVhdGVFbGVtZW50KFwiYnJcIik7XG5tYWluVGV4dC5hcHBlbmRDaGlsZChuZXdMaW5lMSk7XG5jb25zdCBzcGFuTmFtZSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwibWFpbi10ZXh0LW5hbWVcIik7XG5zcGFuTmFtZS50ZXh0Q29udGVudCA9IFwiUmHDumwgSmltw6luZXpcIjtcbm1haW5UZXh0LmFwcGVuZENoaWxkKHNwYW5OYW1lKTtcbmNvbnN0IG5ld0xpbmUyID0gY3JlYXRlRWxlbWVudChcImJyXCIpO1xubWFpblRleHQuYXBwZW5kQ2hpbGQobmV3TGluZTIpO1xuY29uc3Qgc3BhblJvbGUgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcIm1haW4tdGV4dC1yb2xlXCIpO1xuc3BhblJvbGUudGV4dENvbnRlbnQgPSBcIkZ1bGwgU3RhY2sgRGV2ZWxvcGVyXCI7XG5tYWluVGV4dC5hcHBlbmRDaGlsZChzcGFuUm9sZSk7XG5cbmNvbnN0IE1lSW1hZ2UgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwiaG9tZS1pbWFnZVwiKTtcbk1lSW1hZ2UuY2xhc3NMaXN0LmFkZChcImhvbWUtaW1hZ2VcIik7XG5NZUltYWdlLnNyYyA9IE1lO1xuTWVJbWFnZS5hbHQgPSBcIk1lXCI7XG5ob21lLmFwcGVuZENoaWxkKE1lSW1hZ2UpO1xuXG4vLyBBYm91dFxuY29uc3QgYWJvdXRIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1oZWFkZXJcIiwgXCJhYm91dC1oZWFkZXJcIik7XG5jb25zdCBhYm91dEJvZHkgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1ib2R5XCIsIFwiYWJvdXQtYm9keVwiKTtcbmFib3V0LmFwcGVuZENoaWxkKGFib3V0SGVhZGVyKTtcbmFib3V0LmFwcGVuZENoaWxkKGFib3V0Qm9keSk7XG5cbmNvbnN0IGFib3V0SGVhZGVyTGluZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWhlYWRlci1saW5lXCIsIFwiYWJvdXQtaGVhZGVyLWxpbmVcIik7XG5hYm91dEhlYWRlci5hcHBlbmRDaGlsZChhYm91dEhlYWRlckxpbmUpO1xuY29uc3QgYWJvdXRIZWFkZXJUZXh0ID0gY3JlYXRlRWxlbWVudChcImgyXCIsIFwic2VjdGlvbi1oZWFkZXItdGV4dFwiLCBcImFib3V0LWhlYWRlci10ZXh0XCIpO1xuYWJvdXRIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCIwMi4gXCI7XG5jb25zdCBhYm91dEhlYWRlclRpdGxlID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJzZWN0aW9uLWhlYWRlci10aXRsZVwiLCBcImFib3V0LWhlYWRlci10aXRsZVwiKTtcbmFib3V0SGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IE1lXCI7XG5hYm91dEhlYWRlclRleHQuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkZXJUaXRsZSk7XG5hYm91dEhlYWRlci5hcHBlbmRDaGlsZChhYm91dEhlYWRlclRleHQpO1xuXG5jb25zdCBhYm91dEJvZHlJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJzZWN0aW9uLWJvZHktaW1hZ2VcIiwgXCJhYm91dC1ib2R5LWltYWdlXCIpO1xuYWJvdXRCb2R5SW1hZ2Uuc3JjID0gQWJvdXRJbWc7XG5hYm91dEJvZHlJbWFnZS5hbHQgPSBcIk1lXCI7XG5hYm91dEJvZHkuYXBwZW5kQ2hpbGQoYWJvdXRCb2R5SW1hZ2UpO1xuY29uc3QgYWJvdXRCb2R5RGl2VGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWJvZHktZGl2LXRleHRcIiwgXCJhYm91dC1ib2R5LWRpdi10ZXh0XCIpO1xuYWJvdXRCb2R5LmFwcGVuZENoaWxkKGFib3V0Qm9keURpdlRleHQpO1xuY29uc3QgYWJvdXRCb2R5VGV4dDEgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInNlY3Rpb24tYm9keS10ZXh0XCIsIFwiYWJvdXQtYm9keS10ZXh0LTFcIik7XG5hYm91dEJvZHlUZXh0MS50ZXh0Q29udGVudCA9IFwiSGV5IHRoZXJlISBJJ20gUmHDumwsIGFuZCBJIHdhbnQgdG8gc2hhcmUgYSBiaXQgb2YgbXkgc3Rvcnkgd2l0aCB5b3UuXCI7XG5hYm91dEJvZHlEaXZUZXh0LmFwcGVuZENoaWxkKGFib3V0Qm9keVRleHQxKTtcbmNvbnN0IGFib3V0Qm9keVRleHQyID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJzZWN0aW9uLWJvZHktdGV4dFwiLCBcImFib3V0LWJvZHktdGV4dC0yXCIpO1xuYWJvdXRCb2R5VGV4dDIudGV4dENvbnRlbnQgPSBcIkFib3V0IDIwIHllYXJzIGFnbywgSSBncmFkdWF0ZWQgaW4gQ29tcHV0ZXIgU2NpZW5jZS4gQWZ0ZXIgbGVhdmluZyB1bml2ZXJzaXR5LCBJIHNwZW50IHNvbWUgdGltZSB3b3JraW5nIGluIHRlY2ggY29tcGFuaWVzLCBidXQgc29vbiBlbm91Z2gsIEkganVtcGVkIGludG8gdGhlIGZhbWlseSBidXNpbmVzcyB0byBoZWxwIGl0IGdyb3cuIEZvciAxNSB5ZWFycywgSSB3b3JrZWQgc2lkZSBieSBzaWRlIHdpdGggbXkgZmF0aGVyIGFuZCBicm90aGVyLCB0YWNrbGluZyB0aGUgY2hhbGxlbmdlcyB0aGF0IGNvbWUgd2l0aCBtYW5hZ2luZyB5b3VyIG93biBjb21wYW55IGFuZCBsZWFkaW5nIGEgdGVhbS5cIjtcbmFib3V0Qm9keURpdlRleHQuYXBwZW5kQ2hpbGQoYWJvdXRCb2R5VGV4dDIpO1xuY29uc3QgYWJvdXRCb2R5VGV4dDMgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInNlY3Rpb24tYm9keS10ZXh0XCIsIFwiYWJvdXQtYm9keS10ZXh0LTNcIik7XG5hYm91dEJvZHlUZXh0My50ZXh0Q29udGVudCA9IFwiV2l0aCBteSBmYXRoZXIgcmV0aXJlZCBhbmQgdGhlIGJ1c2luZXNzIHdlbGwtZXN0YWJsaXNoZWQsIG15IGJyb3RoZXIgYW5kIEkgbWFkZSB0aGUgZGVjaXNpb24gdG8gc2VsbCBpdCBhbmQgdGFrZSBvbiBuZXcgY2hhbGxlbmdlcy4gSW4gbXkgY2FzZSwgc29tZXRoaW5nIGRlZXAgZG93biBhbHdheXMgd2FudGVkIHRvIHJldHVybiB0byB0aGUgd29ybGQgb2YgSVQsIHNvIEkgZGVjaWRlZCB0byBnbyBhbGwtaW4gYW5kIGdldCBiYWNrIHVwIHRvIHNwZWVkLlwiO1xuYWJvdXRCb2R5RGl2VGV4dC5hcHBlbmRDaGlsZChhYm91dEJvZHlUZXh0Myk7XG5jb25zdCBhYm91dEJvZHlUZXh0NCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwic2VjdGlvbi1ib2R5LXRleHRcIiwgXCJhYm91dC1ib2R5LXRleHQtNFwiKTtcbmFib3V0Qm9keVRleHQ0LnRleHRDb250ZW50ID0gXCJTaW5jZSB0aGVuLCBJJ3ZlIGJlZW4gZGl2aW5nIGludG8gdGhlIGxhdGVzdCB0ZWNobm9sb2dpZXMgYW5kIG1ldGhvZG9sb2dpZXMsIHRha2luZyBvbiBwcm9qZWN0cyBhbmQgbWFraW5nIHRoZSBtb3N0IG9mIHRoZW0uIEkndmUgYWx3YXlzIGJlZW4ga25vd24gZm9yIG15IGFkYXB0YWJpbGl0eSwgcHJvYmxlbS1zb2x2aW5nIHNraWxscywgYW5kIG15IGFiaWxpdHkgdG8gd29yayBlZmZlY3RpdmVseSB3aXRoaW4gYSB0ZWFtLiBJJ20gbm90IGFmcmFpZCB0byBlbWJyYWNlIG5ldyBjaGFsbGVuZ2VzIGFuZCBJIGhhdmUgYSBzdHJvbmcgcGFzc2lvbiBmb3Igc3RheWluZyB1cC10by1kYXRlIHdpdGggdGhlIGV2ZXItZXZvbHZpbmcgdGVjaCBsYW5kc2NhcGUuXCI7XG5hYm91dEJvZHlEaXZUZXh0LmFwcGVuZENoaWxkKGFib3V0Qm9keVRleHQ0KTtcbmNvbnN0IGFib3V0Qm9keVRleHQ1ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJzZWN0aW9uLWJvZHktdGV4dFwiLCBcImFib3V0LWJvZHktdGV4dC01XCIpO1xuYWJvdXRCb2R5VGV4dDUudGV4dENvbnRlbnQgPSBcIkkgdGhyaXZlIG9uIGxlYXJuaW5nIGFuZCBhcHBseWluZyB0aGUgbW9zdCBzdWNjZXNzZnVsIHByYWN0aWNlcyBvZiB0aGUgbW9tZW50LCBhbGwgd2hpbGUgdGFja2xpbmcgcHJvamVjdHMgaGVhZC1vbi4gSXQncyBiZWVuIHF1aXRlIGEgam91cm5leSwgYW5kIEknbSBleGNpdGVkIHRvIGJyaW5nIG15IHdlYWx0aCBvZiBleHBlcmllbmNlLCBjb21iaW5lZCB3aXRoIG15IGRlZGljYXRpb24gdG8gaW5ub3ZhdGlvbiwgdG8geW91ciB0ZWFtLiBMZXQncyBjcmVhdGUgc29tZSBhbWF6aW5nIHRlY2ggdG9nZXRoZXIhXCI7XG5hYm91dEJvZHlEaXZUZXh0LmFwcGVuZENoaWxkKGFib3V0Qm9keVRleHQ1KTtcblxuLy8gU3RhY2tcbmNvbnN0IHN0YWNrSGVhZGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNlY3Rpb24taGVhZGVyXCIsIFwic3RhY2staGVhZGVyXCIpO1xuY29uc3Qgc3RhY2tCb2R5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNlY3Rpb24tYm9keVwiLCBcInN0YWNrLWJvZHlcIik7XG5zdGFjay5hcHBlbmRDaGlsZChzdGFja0hlYWRlcik7XG5zdGFjay5hcHBlbmRDaGlsZChzdGFja0JvZHkpO1xuXG5jb25zdCBzdGFja0hlYWRlckxpbmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1oZWFkZXItbGluZVwiLCBcInN0YWNrLWhlYWRlci1saW5lXCIpO1xuc3RhY2tIZWFkZXIuYXBwZW5kQ2hpbGQoc3RhY2tIZWFkZXJMaW5lKTtcbmNvbnN0IHN0YWNrSGVhZGVyVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcInNlY3Rpb24taGVhZGVyLXRleHRcIiwgXCJzdGFjay1oZWFkZXItdGV4dFwiKTtcbnN0YWNrSGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiMDMuIFwiO1xuY29uc3Qgc3RhY2tIZWFkZXJUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwic2VjdGlvbi1oZWFkZXItdGl0bGVcIiwgXCJzdGFjay1oZWFkZXItdGl0bGVcIik7XG5zdGFja0hlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJNeSBTa2lsbHNcIjtcbnN0YWNrSGVhZGVyVGV4dC5hcHBlbmRDaGlsZChzdGFja0hlYWRlclRpdGxlKTtcbnN0YWNrSGVhZGVyLmFwcGVuZENoaWxkKHN0YWNrSGVhZGVyVGV4dCk7XG5cbmNvbnN0IHN0YWNrVGFibGUgPSBjcmVhdGVFbGVtZW50KFwidGFibGVcIiwgXCJzZWN0aW9uLWJvZHktdGFibGVcIiwgXCJzdGFjay10YWJsZVwiKTtcbnN0YWNrQm9keS5hcHBlbmRDaGlsZChzdGFja1RhYmxlKTtcbmNvbnN0IHN0YWNrVGFibGVIZWFkID0gY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWhlYWRcIiwgXCJzdGFjay10YWJsZS1oZWFkXCIpO1xuc3RhY2tUYWJsZS5hcHBlbmRDaGlsZChzdGFja1RhYmxlSGVhZCk7XG5jb25zdCBzdGFja1RhYmxlSGVhZFJvdyA9IGNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1oZWFkLXJvd1wiLCBcInN0YWNrLXRhYmxlLWhlYWQtcm93XCIpO1xuc3RhY2tUYWJsZUhlYWQuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUhlYWRSb3cpO1xuY29uc3Qgc3RhY2tUYWJsZUhlYWRDb2wxID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWhlYWQtY2VsbFwiLCBcInN0YWNrLXRhYmxlLWhlYWQtY2VsbC0xXCIpO1xuc3RhY2tUYWJsZUhlYWRDb2wxLnNldEF0dHJpYnV0ZShcImNvbHNwYW5cIiwgXCIyXCIpO1xuc3RhY2tUYWJsZUhlYWRDb2wxLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVIZWFkUm93LmFwcGVuZENoaWxkKHN0YWNrVGFibGVIZWFkQ29sMSk7XG5jb25zdCBzdGFja1RhYmxlSGVhZENvbDIgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtaGVhZC1jZWxsXCIsIFwic3RhY2stdGFibGUtaGVhZC1jZWxsLTJcIik7XG5zdGFja1RhYmxlSGVhZENvbDIudGV4dENvbnRlbnQgPSBcIkJlZ2lubmVyXCI7XG5zdGFja1RhYmxlSGVhZFJvdy5hcHBlbmRDaGlsZChzdGFja1RhYmxlSGVhZENvbDIpO1xuY29uc3Qgc3RhY2tUYWJsZUhlYWRDb2wzID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWhlYWQtY2VsbFwiLCBcInN0YWNrLXRhYmxlLWhlYWQtY2VsbC0zXCIpO1xuc3RhY2tUYWJsZUhlYWRDb2wzLnRleHRDb250ZW50ID0gXCJFbGVtZW50YXJ5XCI7XG5zdGFja1RhYmxlSGVhZFJvdy5hcHBlbmRDaGlsZChzdGFja1RhYmxlSGVhZENvbDMpO1xuY29uc3Qgc3RhY2tUYWJsZUhlYWRDb2w0ID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWhlYWQtY2VsbFwiLCBcInN0YWNrLXRhYmxlLWhlYWQtY2VsbC00XCIpO1xuc3RhY2tUYWJsZUhlYWRDb2w0LnRleHRDb250ZW50ID0gXCJJbnRlcm1lZGlhdGVcIjtcbnN0YWNrVGFibGVIZWFkUm93LmFwcGVuZENoaWxkKHN0YWNrVGFibGVIZWFkQ29sNCk7XG5jb25zdCBzdGFja1RhYmxlSGVhZENvbDUgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtaGVhZC1jZWxsXCIsIFwic3RhY2stdGFibGUtaGVhZC1jZWxsLTVcIik7XG5zdGFja1RhYmxlSGVhZENvbDUudGV4dENvbnRlbnQgPSBcIkFkdmFuY2VkXCI7XG5zdGFja1RhYmxlSGVhZFJvdy5hcHBlbmRDaGlsZChzdGFja1RhYmxlSGVhZENvbDUpO1xuY29uc3Qgc3RhY2tUYWJsZUhlYWRDb2w2ID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWhlYWQtY2VsbFwiLCBcInN0YWNrLXRhYmxlLWhlYWQtY2VsbC02XCIpO1xuc3RhY2tUYWJsZUhlYWRDb2w2LnRleHRDb250ZW50ID0gXCJFeHBlcnRcIjtcbnN0YWNrVGFibGVIZWFkUm93LmFwcGVuZENoaWxkKHN0YWNrVGFibGVIZWFkQ29sNik7XG5jb25zdCBzdGFja1RhYmxlQm9keSA9IGNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5XCIsIFwic3RhY2stdGFibGUtYm9keVwiKTtcbnN0YWNrVGFibGUuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHkpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlSb3cxID0gY3JlYXRlRWxlbWVudChcInRyXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktcm93XCIsIFwic3RhY2stdGFibGUtYm9keS1yb3dcIik7XG5zdGFja1RhYmxlQm9keS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keVJvdzEpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlIZWFkMSA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWhlYWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWhlYWQtMVwiKTtcbnN0YWNrVGFibGVCb2R5SGVhZDEudGV4dENvbnRlbnQgPSBcIkxhbmd1YWdlc1wiO1xuc3RhY2tUYWJsZUJvZHlIZWFkMS5zZXRBdHRyaWJ1dGUoXCJyb3dzcGFuXCIsIFwiNFwiKTtcbnN0YWNrVGFibGVCb2R5SGVhZDEuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJyb3dncm91cFwiKTtcbnN0YWNrVGFibGVCb2R5Um93MS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUhlYWQxKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5SGVhZDIgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1oZWFkXCIsIFwic3RhY2stdGFibGUtYm9keS1oZWFkLTJcIik7XG5zdGFja1RhYmxlQm9keUhlYWQyLnRleHRDb250ZW50ID0gXCJIVE1MXCI7XG5zdGFja1RhYmxlQm9keUhlYWQyLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3cxLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDIpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTFcIik7XG5zdGFja1RhYmxlQm9keUNlbGwxLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93MS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwxKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDIgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0yXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMi50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzEuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMik7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwzID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtM1wiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDMudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3cxLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDMpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsNCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTRcIik7XG5zdGFja1RhYmxlQm9keUNlbGw0LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93MS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw0KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDRiaXMgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTQxXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsNGJpcy50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzEuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsNGJpcyk7XG5jb25zdCBzdGFja1RhYmxlQm9keVJvdzIgPSBjcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1yb3dcIiwgXCJzdGFjay10YWJsZS1ib2R5LXJvd1wiKTtcbnN0YWNrVGFibGVCb2R5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Um93Mik7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQzID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktaGVhZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktaGVhZC0zXCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkMy50ZXh0Q29udGVudCA9IFwiQ1NTXCI7XG5zdGFja1RhYmxlQm9keUhlYWQzLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3cyLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDMpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsNSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTVcIik7XG5zdGFja1RhYmxlQm9keUNlbGw1LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Mi5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw1KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDYgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC02XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsNi50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzIuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsNik7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGw3ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtN1wiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDcudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3cyLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDcpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsOCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLThcIik7XG5zdGFja1RhYmxlQm9keUNlbGw4LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Mi5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw4KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDgxID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC04MVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDgxLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Mi5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw4MSk7XG5jb25zdCBzdGFja1RhYmxlQm9keVJvdzMgPSBjcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1yb3dcIiwgXCJzdGFjay10YWJsZS1ib2R5LXJvd1wiKTtcbnN0YWNrVGFibGVCb2R5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Um93Myk7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQ0ID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktaGVhZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktaGVhZC00XCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkNC50ZXh0Q29udGVudCA9IFwiSmF2YVNjcmlwdFwiO1xuc3RhY2tUYWJsZUJvZHlIZWFkNC5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcInJvd1wiKTtcbnN0YWNrVGFibGVCb2R5Um93My5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUhlYWQ0KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDkgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC05XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsOS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzMuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsOSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwxMCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTEwXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMTAudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3czLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDEwKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDExID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMTFcIik7XG5zdGFja1RhYmxlQm9keUNlbGwxMS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzMuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMTEpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMTIgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0xMlwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDEyLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93My5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwxMik7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwxMjEgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTEyMVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDEyMS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzMuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMTIxKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Um93NCA9IGNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LXJvd1wiLCBcInN0YWNrLXRhYmxlLWJvZHktcm93XCIpO1xuc3RhY2tUYWJsZUJvZHkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlSb3c0KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5SGVhZDUgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1oZWFkXCIsIFwic3RhY2stdGFibGUtYm9keS1oZWFkLTVcIik7XG5zdGFja1RhYmxlQm9keUhlYWQ1LnRleHRDb250ZW50ID0gXCJQeXRob25cIjtcbnN0YWNrVGFibGVCb2R5SGVhZDUuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJyb3dcIik7XG5zdGFja1RhYmxlQm9keVJvdzQuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlIZWFkNSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwxMyA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTEzXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMTMudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c0LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDEzKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDE0ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMTRcIik7XG5zdGFja1RhYmxlQm9keUNlbGwxNC50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzQuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMTQpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMTUgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0xNVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDE1LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93NC5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwxNSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwxNiA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMTZcIik7XG5zdGFja1RhYmxlQm9keUNlbGwxNi50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzQuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMTYpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMTcgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTE3XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMTcudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c0LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDE3KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Um93NSA9IGNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LXJvd1wiLCBcInN0YWNrLXRhYmxlLWJvZHktcm93XCIpO1xuc3RhY2tUYWJsZUJvZHkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlSb3c1KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5SGVhZDYgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1oZWFkXCIsIFwic3RhY2stdGFibGUtYm9keS1oZWFkLTZcIik7XG5zdGFja1RhYmxlQm9keUhlYWQ2LnRleHRDb250ZW50ID0gXCJGcmFtZXdvcmtzIC8gTGlicmFyaWVzXCI7XG5zdGFja1RhYmxlQm9keUhlYWQ2LnNldEF0dHJpYnV0ZShcInJvd3NwYW5cIiwgXCIyXCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkNi5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcInJvd2dyb3VwXCIpO1xuc3RhY2tUYWJsZUJvZHlSb3c1LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDYpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlIZWFkNyA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWhlYWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWhlYWQtN1wiKTtcbnN0YWNrVGFibGVCb2R5SGVhZDcudGV4dENvbnRlbnQgPSBcIlJlYWN0XCI7XG5zdGFja1RhYmxlQm9keUhlYWQ3LnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3c1LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDcpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMTggPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0xOFwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDE4LmNsYXNzTGlzdC5hZGQoXCJmcmFtZXdvcmtzXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMTgudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c1LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDE4KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDE5ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0xOVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDE5LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93NS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwxOSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwyMCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMjBcIik7XG5zdGFja1RhYmxlQm9keUNlbGwyMC50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzUuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMjApO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMjEgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTIxXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMjEudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c1LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDIxKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDIyID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0yMlwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDIyLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93NS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwyMik7XG5jb25zdCBzdGFja1RhYmxlQm9keVJvdzYgPSBjcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1yb3dcIiwgXCJzdGFjay10YWJsZS1ib2R5LXJvd1wiKTtcbnN0YWNrVGFibGVCb2R5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Um93Nik7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQ4ID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktaGVhZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktaGVhZC04XCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkOC50ZXh0Q29udGVudCA9IFwiTm9kZUpTXCI7XG5zdGFja1RhYmxlQm9keUhlYWQ4LnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3c2LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDgpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMjMgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0yM1wiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDIzLmNsYXNzTGlzdC5hZGQoXCJmcmFtZXdvcmtzXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMjMudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c2LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDIzKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDI0ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0yNFwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDI0LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Ni5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwyNCk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwyNSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMjVcIik7XG5zdGFja1RhYmxlQm9keUNlbGwyNS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzYuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMjUpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMjYgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTI2XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMjYudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c2LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDI2KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDI3ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0yN1wiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDI3LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Ni5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwyNyk7XG5jb25zdCBzdGFja1RhYmxlQm9keVJvdzcgPSBjcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1yb3dcIiwgXCJzdGFjay10YWJsZS1ib2R5LXJvd1wiKTtcbnN0YWNrVGFibGVCb2R5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Um93Nyk7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQ5ID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktaGVhZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktaGVhZC05XCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkOS50ZXh0Q29udGVudCA9IFwiVG9vbHNcIjtcbnN0YWNrVGFibGVCb2R5SGVhZDkuc2V0QXR0cmlidXRlKFwicm93c3BhblwiLCBcIjNcIik7XG5zdGFja1RhYmxlQm9keUhlYWQ5LnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93Z3JvdXBcIik7XG5zdGFja1RhYmxlQm9keVJvdzcuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlIZWFkOSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQxMCA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWhlYWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWhlYWQtMTBcIik7XG5zdGFja1RhYmxlQm9keUhlYWQxMC50ZXh0Q29udGVudCA9IFwiR2l0XCI7XG5zdGFja1RhYmxlQm9keUhlYWQxMC5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcInJvd1wiKTtcbnN0YWNrVGFibGVCb2R5Um93Ny5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUhlYWQxMCk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwyOCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTI4XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMjgudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c3LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDI4KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDI5ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMjlcIik7XG5zdGFja1RhYmxlQm9keUNlbGwyOS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzcuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMjkpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMzAgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0zMFwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDMwLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Ny5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwzMCk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwzMSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMzFcIik7XG5zdGFja1RhYmxlQm9keUNlbGwzMS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzcuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMzEpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMzIgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTMyXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMzIudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c3LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDMyKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Um93OCA9IGNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LXJvd1wiLCBcInN0YWNrLXRhYmxlLWJvZHktcm93XCIpO1xuc3RhY2tUYWJsZUJvZHkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlSb3c4KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5SGVhZDExID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktaGVhZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktaGVhZC0xMVwiKTtcbnN0YWNrVGFibGVCb2R5SGVhZDExLnRleHRDb250ZW50ID0gXCJOcG1cIjtcbnN0YWNrVGFibGVCb2R5SGVhZDExLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3c4LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDExKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDMzID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMzNcIik7XG5zdGFja1RhYmxlQm9keUNlbGwzMy50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzguYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMzMpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMzQgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0zNFwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDM0LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93OC5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwzNCk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwzNSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTM1XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMzUudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c4LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDM1KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDM2ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0zNlwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDM2LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93OC5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwzNik7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwzNyA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMzdcIik7XG5zdGFja1RhYmxlQm9keUNlbGwzNy50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzguYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMzcpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlSb3c5ID0gY3JlYXRlRWxlbWVudChcInRyXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktcm93XCIsIFwic3RhY2stdGFibGUtYm9keS1yb3dcIik7XG5zdGFja1RhYmxlQm9keS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keVJvdzkpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlIZWFkMTIgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1oZWFkXCIsIFwic3RhY2stdGFibGUtYm9keS1oZWFkLTEyXCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkMTIudGV4dENvbnRlbnQgPSBcIldlYnBhY2tcIjtcbnN0YWNrVGFibGVCb2R5SGVhZDEyLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3c5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDEyKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDM4ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMzhcIik7XG5zdGFja1RhYmxlQm9keUNlbGwzOC50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMzgpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMzkgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0zOVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDM5LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93OS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwzOSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGw0MCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTQwXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsNDAudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDQwKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDQxID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC00MVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDQxLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93OS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw0MSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGw0MiA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtNDJcIik7XG5zdGFja1RhYmxlQm9keUNlbGw0Mi50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsNDIpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlSb3cxMCA9IGNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LXJvd1wiLCBcInN0YWNrLXRhYmxlLWJvZHktcm93XCIpO1xuc3RhY2tUYWJsZUJvZHkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlSb3cxMCk7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQxMyA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWhlYWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWhlYWQtMTNcIik7XG5zdGFja1RhYmxlQm9keUhlYWQxMy50ZXh0Q29udGVudCA9IFwiVGVzdGluZ1wiO1xuc3RhY2tUYWJsZUJvZHlIZWFkMTMuc2V0QXR0cmlidXRlKFwicm93c3BhblwiLCBcIjFcIik7XG5zdGFja1RhYmxlQm9keUhlYWQxMy5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcInJvd2dyb3VwXCIpO1xuc3RhY2tUYWJsZUJvZHlSb3cxMC5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUhlYWQxMyk7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQxNCA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWhlYWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWhlYWQtMTRcIik7XG5zdGFja1RhYmxlQm9keUhlYWQxNC50ZXh0Q29udGVudCA9IFwiSmVzdFwiO1xuc3RhY2tUYWJsZUJvZHlIZWFkMTQuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJyb3dcIik7XG5zdGFja1RhYmxlQm9keVJvdzEwLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDE0KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDQzID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtNDNcIik7XG5zdGFja1RhYmxlQm9keUNlbGw0My50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzEwLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDQzKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDQ0ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtNDRcIik7XG5zdGFja1RhYmxlQm9keUNlbGw0NC50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzEwLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDQ0KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDQ1ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtNDVcIik7XG5zdGFja1RhYmxlQm9keUNlbGw0NS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzEwLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDQ1KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDQ2ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC00NlwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDQ2LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93MTAuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsNDYpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsNDcgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTQ3XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsNDcudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3cxMC5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw0Nyk7XG5cbi8vIFByb2plY3RzIG1haW4gY29udGFpbmVyXG5jb25zdCBwcm9qZWN0c0hlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWhlYWRlclwiLCBcInByb2plY3RzLWhlYWRlclwiKTtcbmNvbnN0IHByb2plY3RzQm9keSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWJvZHlcIiwgXCJwcm9qZWN0cy1ib2R5XCIpO1xucHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpO1xucHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNCb2R5KTtcblxuY29uc3QgcHJvamVjdHNIZWFkZXJMaW5lID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNlY3Rpb24taGVhZGVyLWxpbmVcIiwgXCJwcm9qZWN0cy1oZWFkZXItbGluZVwiKTtcbnByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyTGluZSk7XG5jb25zdCBwcm9qZWN0c0hlYWRlclRleHQgPSBjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJzZWN0aW9uLWhlYWRlci10ZXh0XCIsIFwicHJvamVjdHMtaGVhZGVyLXRleHRcIik7XG5wcm9qZWN0c0hlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIjA0LiBcIjtcbmNvbnN0IHByb2plY3RzSGVhZGVyVGl0bGUgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcInNlY3Rpb24taGVhZGVyLXRpdGxlXCIsIFwicHJvamVjdHMtaGVhZGVyLXRpdGxlXCIpO1xucHJvamVjdHNIZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiVGhpbmdzIEkndmUgQnVpbHRcIjtcbnByb2plY3RzSGVhZGVyVGV4dC5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlclRpdGxlKTtcbnByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyVGV4dCk7XG5cbmNvbnN0IHByb2plY3RzQm9keURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWJvZHktZGl2XCIsIFwicHJvamVjdHMtYm9keS1kaXZcIik7XG5wcm9qZWN0c0JvZHkuYXBwZW5kQ2hpbGQocHJvamVjdHNCb2R5RGl2KTtcblxuLy8gRnVuY3Rpb24gdGhhdCByZWNlaXZlcyBkYXRhIGZyb20gdGhlIEpTT04gZmlsZSBhbmQgY3JlYXRlcyB0aGUgcHJvamVjdHNcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1kaXZcIik7XG4gICAgcHJvamVjdHNCb2R5RGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIGNvbnN0IHByb2plY3REaXZUb3AgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1kaXYtdG9wXCIpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdlRvcCk7XG4gICAgY29uc3QgcHJvamVjdERpdlRvcExlZnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1kaXYtdG9wLWxlZnRcIik7XG4gICAgcHJvamVjdERpdlRvcC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2VG9wTGVmdCk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gY3JlYXRlRWxlbWVudChcImgzXCIsIFwicHJvamVjdC10aXRsZVwiKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHByb2plY3REaXZUb3BMZWZ0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgY29uc3QgcHJvamVjdFN1YnRpdGxlID0gY3JlYXRlRWxlbWVudChcImg0XCIsIFwicHJvamVjdC1zdWJ0aXRsZVwiKTtcbiAgICBwcm9qZWN0U3VidGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnN1YnRpdGxlO1xuICAgIHByb2plY3REaXZUb3BMZWZ0LmFwcGVuZENoaWxkKHByb2plY3RTdWJ0aXRsZSk7XG4gICAgY29uc3QgcHJvamVjdERpdlRvcFJpZ2h0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2plY3QtZGl2LXRvcC1yaWdodFwiKTtcbiAgICBwcm9qZWN0RGl2VG9wLmFwcGVuZENoaWxkKHByb2plY3REaXZUb3BSaWdodCk7XG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIpO1xuICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XG4gICAgcHJvamVjdERpdlRvcFJpZ2h0LmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG4gICAgY29uc3QgcHJvamVjdExpbmtCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcInByb2plY3QtbGluay1idXR0b25cIik7XG4gICAgcHJvamVjdExpbmtCdXR0b24uaHJlZiA9IHByb2plY3QubGluaztcbiAgICBwcm9qZWN0TGlua0J1dHRvbi50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIHByb2plY3RMaW5rQnV0dG9uLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICAgIHByb2plY3RMaW5rQnV0dG9uLnRleHRDb250ZW50ID0gXCJWaWV3IExpdmVcIjtcbiAgICBwcm9qZWN0RGl2VG9wUmlnaHQuYXBwZW5kQ2hpbGQocHJvamVjdExpbmtCdXR0b24pO1xuICAgIGNvbnN0IHByb2plY3REaXZCb3R0b20gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1kaXYtYm90dG9tXCIpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdkJvdHRvbSk7XG4gICAgXG4gICAgLy8gRGluYW1pY2FsbHkgbG9hZGluZyB0aGUgaW1hZ2VzXG4gICAgbG9hZEltYWdlKHByb2plY3QuaW1hZ2UpLnRoZW4oc3JjID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHByb2plY3RJbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIHByb2plY3RJbWFnZS5hbHQgPSBwcm9qZWN0LmFsdDtcbiAgICAgICAgcHJvamVjdEltYWdlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWltYWdlXCIpO1xuICAgICAgICBwcm9qZWN0RGl2Qm90dG9tLmFwcGVuZENoaWxkKHByb2plY3RJbWFnZSk7XG4gICAgfSk7XG59XG5cbi8vIEZldGNoaW5nIHRoZSBkYXRhIGZyb20gdGhlIEpTT04gZmlsZVxucHJvamVjdHNEYXRhLnByb2plY3RzLmZvckVhY2goY3JlYXRlUHJvamVjdCk7XG5cbi8vIENvbnRhY3RcbmNvbnN0IGNvbnRhY3RIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1oZWFkZXJcIiwgXCJjb250YWN0LWhlYWRlclwiKTtcbmNvbnN0IGNvbnRhY3RCb2R5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNlY3Rpb24tYm9keVwiLCBcImNvbnRhY3QtYm9keVwiKTtcbmNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG5jb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RCb2R5KTtcblxuY29uc3QgY29udGFjdEhlYWRlckxpbmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1oZWFkZXItbGluZVwiLCBcImNvbnRhY3QtaGVhZGVyLWxpbmVcIik7XG5jb250YWN0SGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXJMaW5lKTtcbmNvbnN0IGNvbnRhY3RIZWFkZXJUZXh0ID0gY3JlYXRlRWxlbWVudChcImgyXCIsIFwic2VjdGlvbi1oZWFkZXItdGV4dFwiLCBcImNvbnRhY3QtaGVhZGVyLXRleHRcIik7XG5jb250YWN0SGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiMDUuIFwiO1xuY29uc3QgY29udGFjdEhlYWRlclRpdGxlID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJzZWN0aW9uLWhlYWRlci10aXRsZVwiLCBcImNvbnRhY3QtaGVhZGVyLXRpdGxlXCIpO1xuY29udGFjdEhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJHZXQgSW4gVG91Y2hcIjtcbmNvbnRhY3RIZWFkZXJUZXh0LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXJUaXRsZSk7XG5jb250YWN0SGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXJUZXh0KTtcblxuY29uc3QgY29udGFjdEJvZHlUb3AgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY29udGFjdC1ib2R5LXRvcFwiKTtcbmNvbnRhY3RCb2R5LmFwcGVuZENoaWxkKGNvbnRhY3RCb2R5VG9wKTtcbmNvbnN0IGNvbnRhY3RCb2R5VGV4dDEgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImNvbnRhY3QtYm9keS10ZXh0XCIpO1xuY29udGFjdEJvZHlUZXh0MS50ZXh0Q29udGVudCA9IFwiSSdtIGN1cnJlbnRseSBsb29raW5nIGZvciBuZXcgb3Bwb3J0dW5pdGllcywgYm90aCBmcmVlbGFuY2UgYW5kIGZ1bGwtdGltZS4gSWYgeW91J2QgbGlrZSB0byBnZXQgaW4gdG91Y2gsIHlvdSBjYW4gY29udGFjdCBtZSB2aWEgdGhlIGZvcm0gYmVsb3cuIFlvdSBjYW4gYWxzbyByZWFjaCBvdXQgdG8gbWUgb24gU29jaWFsIE5ldHdvcmtzLlwiO1xuY29udGFjdEJvZHlUb3AuYXBwZW5kQ2hpbGQoY29udGFjdEJvZHlUZXh0MSk7XG5jb25zdCBjb250YWN0Qm9keVRleHQyID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJjb250YWN0LWJvZHktdGV4dFwiKTtcbmNvbnRhY3RCb2R5VGV4dDIudGV4dENvbnRlbnQgPSBcIkknbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgcG9zc2libGUhXCI7XG5jb250YWN0Qm9keVRvcC5hcHBlbmRDaGlsZChjb250YWN0Qm9keVRleHQyKTtcbmNvbnN0IGNvbnRhY3RCb2R5Qm90dG9tID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNvbnRhY3QtYm9keS1ib3R0b21cIik7XG5jb250YWN0Qm9keS5hcHBlbmRDaGlsZChjb250YWN0Qm9keUJvdHRvbSk7XG5jb25zdCBjb250YWN0Qm9keUZvcm0gPSBjcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBcImNvbnRhY3QtYm9keS1mb3JtXCIpO1xuY29udGFjdEJvZHlCb3R0b20uYXBwZW5kQ2hpbGQoY29udGFjdEJvZHlGb3JtKTtcbmNvbnN0IGNvbnRhY3RCb2R5U29jaWFsID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNvbnRhY3QtYm9keS1zb2NpYWxcIik7XG5jb250YWN0Qm9keUJvdHRvbS5hcHBlbmRDaGlsZChjb250YWN0Qm9keVNvY2lhbCk7XG5jb25zdCBsaW5rZWRJbkxpbmsgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcImNvbnRhY3QtYm9keS1zb2NpYWwtbGlua1wiKTtcbmxpbmtlZEluTGluay5ocmVmID0gXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcmF1bC1qaW1lbmV6LWZlcm5hbmRlei9cIjtcbmxpbmtlZEluTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xubGlua2VkSW5MaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuY29udGFjdEJvZHlTb2NpYWwuYXBwZW5kQ2hpbGQobGlua2VkSW5MaW5rKTtcbmNvbnN0IGxpbmtlZEluSW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcInNvY2lhbC1pbWdcIik7XG5saW5rZWRJbkltZy5zcmMgPSBMaW5rZWRJbjtcbmxpbmtlZEluSW1nLmFsdCA9IFwiTGlua2VkSW5cIjtcbmxpbmtlZEluTGluay5hcHBlbmRDaGlsZChsaW5rZWRJbkltZyk7XG5jb25zdCBpbnN0YWdyYW1MaW5rID0gY3JlYXRlRWxlbWVudChcImFcIiwgXCJjb250YWN0LWJvZHktc29jaWFsLWxpbmtcIik7XG5pbnN0YWdyYW1MaW5rLmhyZWYgPSBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcmF1bGppbWVuZXpmZXJuYW5kZXovXCI7XG5pbnN0YWdyYW1MaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5pbnN0YWdyYW1MaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuY29udGFjdEJvZHlTb2NpYWwuYXBwZW5kQ2hpbGQoaW5zdGFncmFtTGluayk7XG5jb25zdCBpbnN0YWdyYW1JbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwic29jaWFsLWltZ1wiKTtcbmluc3RhZ3JhbUltZy5zcmMgPSBJbnN0YWdyYW07XG5pbnN0YWdyYW1JbWcuYWx0ID0gXCJJbnN0YWdyYW1cIjtcbmluc3RhZ3JhbUxpbmsuYXBwZW5kQ2hpbGQoaW5zdGFncmFtSW1nKTtcbmNvbnN0IGdpdGh1YkxpbmsgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcImNvbnRhY3QtYm9keS1zb2NpYWwtbGlua1wiKTtcbmdpdGh1YkxpbmsuaHJlZiA9IFwiXCJcbmdpdGh1YkxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbmdpdGh1YkxpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5jb250YWN0Qm9keVNvY2lhbC5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbmNvbnN0IGdpdGh1YkltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJzb2NpYWwtaW1nXCIpO1xuZ2l0aHViSW1nLnNyYyA9IEdpdEh1YjtcbmdpdGh1YkltZy5hbHQgPSBcIkdpdEh1YlwiO1xuZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJbWcpO1xuY29uc3QgeExpbmsgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcImNvbnRhY3QtYm9keS1zb2NpYWwtbGlua1wiKTtcbnhMaW5rLmhyZWYgPSBcImh0dHBzOi8vd3d3LnhpbmcuY29tL3Byb2ZpbGUvUmF1bF9KaW1lbmV6RmVybmFuZGV6L2N2XCI7XG54TGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xueExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5jb250YWN0Qm9keVNvY2lhbC5hcHBlbmRDaGlsZCh4TGluayk7XG5jb25zdCB4SW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcInNvY2lhbC1pbWdcIik7XG54SW1nLnNyYyA9IFg7XG54SW1nLmFsdCA9IFwiWFwiO1xueExpbmsuYXBwZW5kQ2hpbGQoeEltZyk7XG5jb25zdCBtYWlsTGluayA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIFwiY29udGFjdC1ib2R5LXNvY2lhbC1saW5rXCIpO1xubWFpbExpbmsuaHJlZiA9IFwibWFpbHRvOnJqYmFyY29AZ21haWwuY29tXCI7XG5tYWlsTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xubWFpbExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5jb250YWN0Qm9keVNvY2lhbC5hcHBlbmRDaGlsZChtYWlsTGluayk7XG5jb25zdCBtYWlsSW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcInNvY2lhbC1pbWdcIik7XG5tYWlsSW1nLnNyYyA9IE1haWw7XG5tYWlsSW1nLmFsdCA9IFwiTWFpbFwiO1xubWFpbExpbmsuYXBwZW5kQ2hpbGQobWFpbEltZyk7XG5jb25zdCBjb250YWN0Qm9keUZvcm1EaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY29udGFjdC1ib2R5LWZvcm0tZGl2XCIpO1xuY29udGFjdEJvZHlGb3JtLmFwcGVuZENoaWxkKGNvbnRhY3RCb2R5Rm9ybURpdik7XG5jb25zdCBuYW1lRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZvcm0tZmllbGQtZGl2XCIsIFwibmFtZS1kaXZcIik7XG5jb250YWN0Qm9keUZvcm1EaXYuYXBwZW5kQ2hpbGQobmFtZURpdik7XG5jb25zdCBuYW1lTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJjb250YWN0LWJvZHktZm9ybS1sYWJlbFwiLCBcIm5hbWUtbGFiZWxcIik7XG5uYW1lTGFiZWwuZm9yID0gXCJuYW1lXCI7XG5uYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWVcIjtcbm5hbWVEaXYuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbmNvbnN0IG5hbWVJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcImNvbnRhY3QtYm9keS1mb3JtLWlucHV0XCIsIFwibmFtZS1pbnB1dFwiKTtcbm5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5uYW1lSW5wdXQuaWQgPSBcIm5hbWVcIjtcbm5hbWVJbnB1dC5uYW1lID0gXCJuYW1lXCI7XG5uYW1lRGl2LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5jb25zdCBlbWFpbERpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmb3JtLWZpZWxkLWRpdlwiLCBcImVtYWlsLWRpdlwiKTtcbmNvbnRhY3RCb2R5Rm9ybURpdi5hcHBlbmRDaGlsZChlbWFpbERpdik7XG5jb25zdCBlbWFpbExhYmVsID0gY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIFwiY29udGFjdC1ib2R5LWZvcm0tbGFiZWxcIiwgXCJlbWFpbC1sYWJlbFwiKTtcbmVtYWlsTGFiZWwuZm9yID0gXCJlbWFpbFwiO1xuZW1haWxMYWJlbC50ZXh0Q29udGVudCA9IFwiRW1haWxcIjtcbmVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuY29uc3QgZW1haWxJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcImNvbnRhY3QtYm9keS1mb3JtLWlucHV0XCIsIFwiZW1haWwtaW5wdXRcIik7XG5lbWFpbElucHV0LnR5cGUgPSBcImVtYWlsXCI7XG5lbWFpbElucHV0LmlkID0gXCJlbWFpbFwiO1xuZW1haWxJbnB1dC5uYW1lID0gXCJlbWFpbFwiO1xuZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG5jb25zdCBtZXNzYWdlRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZvcm0tZmllbGQtZGl2XCIsIFwibWVzc2FnZS1kaXZcIik7XG5jb250YWN0Qm9keUZvcm1EaXYuYXBwZW5kQ2hpbGQobWVzc2FnZURpdik7XG5jb25zdCBtZXNzYWdlTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJjb250YWN0LWJvZHktZm9ybS1sYWJlbFwiLCBcIm1lc3NhZ2UtbGFiZWxcIik7XG5tZXNzYWdlTGFiZWwuZm9yID0gXCJtZXNzYWdlXCI7XG5tZXNzYWdlTGFiZWwudGV4dENvbnRlbnQgPSBcIk1lc3NhZ2VcIjtcbm1lc3NhZ2VEaXYuYXBwZW5kQ2hpbGQobWVzc2FnZUxhYmVsKTtcbmNvbnN0IG1lc3NhZ2VUZXh0YXJlYSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBcImNvbnRhY3QtYm9keS1mb3JtLXRleHRhcmVhXCIsIFwibWVzc2FnZS10ZXh0YXJlYVwiKTtcbm1lc3NhZ2VUZXh0YXJlYS5pZCA9IFwibWVzc2FnZVwiO1xubWVzc2FnZVRleHRhcmVhLm5hbWUgPSBcIm1lc3NhZ2VcIjtcbm1lc3NhZ2VUZXh0YXJlYS5yb3dzID0gXCI1XCI7XG5tZXNzYWdlRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2VUZXh0YXJlYSk7XG5jb25zdCBjb250YWN0Qm9keUZvcm1CdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiY29udGFjdC1ib2R5LWZvcm0tYnV0dG9uXCIpO1xuY29udGFjdEJvZHlGb3JtQnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuY29udGFjdEJvZHlGb3JtQnV0dG9uLnRleHRDb250ZW50ID0gXCJTZW5kIE1lc3NhZ2VcIjtcbmNvbnRhY3RCb2R5Rm9ybURpdi5hcHBlbmRDaGlsZChjb250YWN0Qm9keUZvcm1CdXR0b24pO1xuXG4vLyBDcmVhdGUgdGhlIGNyZWRpdHMgYW5kIGFwcGVuZCB0aGVtIHRvIHRoZSBmb290ZXJcbmNvbnN0IGNyZWRpdHMgPSBjcmVhdGVFbGVtZW50KFwicFwiLFwiY3JlZGl0c1wiLG51bGwpXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcXVvdGVzXG5jcmVkaXRzLmlubmVySFRNTCA9ICdDcmVhdGVkIGJ5IFJBw5pMIEpJTcOJTkVaLiBGb2xsb3cgbXkgd29yayBvbiBHaXRIdWI6IDxicj48YnI+PGEgY2xhc3M9XCJnaXRodWItbGlua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmVyZWdvcm5cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PHN2ZyBjbGFzcz1cImdpdGh1Yi1pY29uXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCAwQzMuNTggMCAwIDMuNTggMCA4YzAgMy41NCAyLjI5IDYuNTMgNS40NyA3LjU5LjQuMDcuNTUtLjE3LjU1LS4zOCAwLS4xOS0uMDEtLjgyLS4wMS0xLjQ5LTIuMDEuMzctMi41My0uNDktMi42OS0uOTQtLjA5LS4yMy0uNDgtLjk0LS44Mi0xLjEzLS4yOC0uMTUtLjY4LS41Mi0uMDEtLjUzLjYzLS4wMSAxLjA4LjU4IDEuMjMuODIuNzIgMS4yMSAxLjg3Ljg3IDIuMzMuNjYuMDctLjUyLjI4LS44Ny41MS0xLjA3LTEuNzgtLjItMy42NC0uODktMy42NC0zLjk1IDAtLjg3LjMxLTEuNTkuODItMi4xNS0uMDgtLjItLjM2LTEuMDIuMDgtMi4xMiAwIDAgLjY3LS4yMSAyLjIuODIuNjQtLjE4IDEuMzItLjI3IDItLjI3LjY4IDAgMS4zNi4wOSAyIC4yNyAxLjUzLTEuMDQgMi4yLS44MiAyLjItLjgyLjQ0IDEuMS4xNiAxLjkyLjA4IDIuMTIuNTEuNTYuODIgMS4yNy44MiAyLjE1IDAgMy4wNy0xLjg3IDMuNzUtMy42NSAzLjk1LjI5LjI1LjU0LjczLjU0IDEuNDggMCAxLjA3LS4wMSAxLjkzLS4wMSAyLjIgMCAuMjEuMTUuNDYuNTUuMzhBOC4wMTMgOC4wMTMgMCAwIDAgMTYgOGMwLTQuNDItMy41OC04LTgtOHpcIi8+PC9zdmc+PC9hPidcbmZvb3Rlci5hcHBlbmRDaGlsZChjcmVkaXRzKSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvU3BhY2VfR3JvdGVzay9TcGFjZUdyb3Rlc2stVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9jaXJjdWl0LXByaW1hcnkuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9oYW5kc29tZS1tYW4taG9sZGluZy1zb21ldGhpbmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuLyogTVkgT1dOIFNUWUxFUyBGUk9NIEhFUkUgKi9cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdTcGFjZSBHcm90ZXNrJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdTcGFjZSBHcm90ZXNrJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuMzkwNjI1dncpO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbmgzIHtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbmg0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuaGVhZGVyLGZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGNvbG9yOiAjRTZGRkY2O1xufVxuXG5oZWFkZXIge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LXNpemU6IDI7XG59XG5cbi5sb2dvIHtcbiAgICBjb2xvcjogI0U2RkZGNjtcbn1cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZW51LWl0ZW0ge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudS1pdGVtOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4ubWVudS1pdGVtOmhvdmVyOjphZnRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkZGRjY7XG59XG5cbi5tZW51LWl0ZW0tbnVtYmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBjb2xvcjogIzAwQTk3Rjtcbn1cblxubWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1ncm93OiAxOyAvKiBFc3RvIGhhY2UgcXVlIG1haW4gb2N1cGUgdG9kbyBlbCBlc3BhY2lvIHJlc3RhbnRlIGRlc3B1w6lzIGRlIGhlYWRlciB5IGFudGVzIGRlIGZvb3RlciAqL1xuICAgIGdhcDogNSU7XG59XG5cbnNlY3Rpb24ge1xuICAgIC8qIHBhZGRpbmctdG9wOiA2cmVtOyAqL1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGdhcDogNSU7XG59XG5cbi5ob21lIHtcbiAgICAvKiBwYWRkaW5nLXRvcDogNnJlbTsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgbm8tcmVwZWF0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBnYXA6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLm1haW4tdGV4dCB7XG4gICAgY29sb3I6ICMwMTg3NkM7XG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIG1hcmdpbi1ib3R0b206IDMwJTtcbn1cblxuLm1haW4tdGV4dC1uYW1lIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDRyZW07XG59XG5cbi5tYWluLXRleHQtcm9sZSB7XG4gICAgY29sb3I6ICMwMTg3NkM7XG59XG5cbi5ob21lLWltYWdlIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBBYm91dCBzZWN0aW9uICovXG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnNlY3Rpb24taGVhZGVyLXRleHQge1xuICAgIGNvbG9yOiAjMDE4NzZDO1xufVxuXG4uc2VjdGlvbi1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uc2VjdGlvbi1oZWFkZXItbGluZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgLyogbWFyZ2luLXRvcDogMC41cmVtOyAqL1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBOTdGO1xufVxuXG4jYWJvdXQtYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiB0b3A7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA1JTtcbn1cblxuI2Fib3V0LWJvZHktaW1hZ2Uge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zZWN0aW9uLWJvZHktdGV4dCB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLyogU3RhY2sgc2VjdGlvbiAqL1xuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cblxudGgge1xuICAgIHdpZHRoOiA4cmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMEE5N0Y7XG59XG5cbi5zZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQTk3Rjtcbn1cblxuLnNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHk6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgICByaWdodDogNXB4O1xuICAgIGJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4vKiBQcm9qZWN0cyBzZWN0aW9uICovXG5cbiNwcm9qZWN0cy1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDUlO1xufVxuXG5cbiNwcm9qZWN0cy1ib2R5LWRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA1JTtcbn1cblxuLnByb2plY3QtZGl2IHtcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgIHdpZHRoOiA4MDBweDtcbn1cblxuLnByb2plY3QtZGl2LXRvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiB0b3A7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ucHJvamVjdC1kaXYtdG9wLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICAgIG1heC13aWR0aDogNzAlO1xufVxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbn1cblxuLnByb2plY3QtbGluay1idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEE5N0Y7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE5N0Y7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5wcm9qZWN0LWxpbmstYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMDBBOTdGO1xufVxuXG4ucHJvamVjdC1kaXYtYm90dG9tIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDUlO1xufVxuXG4ucHJvamVjdC1pbWFnZSB7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXI6IDhweCBzb2xpZCAjMDAwMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDVweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLyogQ29udGFjdCBzZWN0aW9uICovXG5cbiNjb250YWN0LWJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNSU7XG59XG5cbi5jb250YWN0LWJvZHktdG9wIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uY29udGFjdC1ib2R5LWJvdHRvbSB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBuby1yZXBlYXQ7XG59XG5cbi5jb250YWN0LWJvZHktc29jaWFsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMS41cmVtO1xufVxuXG4uY29udGFjdC1ib2R5LXRleHQge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmNvbnRhY3QtYm9keS1mb3JtIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEE5N0Y7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4RkNFQTtcbn1cblxuLmZvcm0tZmllbGQtZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTAlO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5jb250YWN0LWJvZHktZm9ybS1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFjdC1ib2R5LWZvcm0tbGFiZWwge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xufVxuXG4uY29udGFjdC1ib2R5LWZvcm0taW5wdXQge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MkJEOUY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jb250YWN0LWJvZHktZm9ybS1pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBBOTdGO1xufVxuXG4uY29udGFjdC1ib2R5LWZvcm0tdGV4dGFyZWEge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MkJEOUY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jb250YWN0LWJvZHktZm9ybS10ZXh0YXJlYTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBBOTdGO1xufVxuXG4uY29udGFjdC1ib2R5LWZvcm0tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEE5N0Y7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE5N0Y7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY29udGFjdC1ib2R5LWZvcm0tYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMDBBOTdGO1xufVxuXG4uc29jaWFsLWltZyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5zb2NpYWwtaW1nOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi8qIGZvb3RlciAqL1xuXG5mb290ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3JlZGl0cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBTdHlsZSB0aGUgbGluayB0byByZW1vdmUgZGVmYXVsdCBzdHlsaW5nICovXG4uZ2l0aHViLWxpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIEFkZCB0aGUgaG92ZXIgZWZmZWN0ICovXG4uZ2l0aHViLWljb24ge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0OyAvKiBBZGQgYSB0cmFuc2l0aW9uIGZvciB0aGUgdHJhbnNmb3JtIHByb3BlcnR5ICovXG59XG5cbi5naXRodWItbGluazpob3ZlciAuZ2l0aHViLWljb24ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IC8qIFJvdGF0ZSB0aGUgaWNvbiAxODAgZGVncmVlcyB3aGVuIGhvdmVyZWQgKi9cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUEsNEJBQTRCOztBQUU1QjtJQUNJLDRCQUE0QjtJQUM1Qiw0Q0FBNEU7QUFDaEY7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qix3Q0FBd0M7SUFDeEMsa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7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LGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSw2Q0FBNkM7QUFDN0M7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0ksc0NBQXNDLEVBQUUsZ0RBQWdEO0FBQzVGOztBQUVBO0lBQ0kseUJBQXlCLEVBQUUsNkNBQTZDO0FBQzVFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogTVkgT1dOIFNUWUxFUyBGUk9NIEhFUkUgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTcGFjZSBHcm90ZXNrJztcXG4gICAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9TcGFjZV9Hcm90ZXNrL1NwYWNlR3JvdGVzay1WYXJpYWJsZUZvbnRfd2dodC50dGYnKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiAnU3BhY2UgR3JvdGVzaycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC4zOTA2MjV2dyk7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5oNCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5oZWFkZXIsZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICBjb2xvcjogI0U2RkZGNjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IDI7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgY29sb3I6ICNFNkZGRjY7XFxufVxcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDAlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3Zlcjo6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RkZGNjtcXG59XFxuXFxuLm1lbnUtaXRlbS1udW1iZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgY29sb3I6ICMwMEE5N0Y7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAxOyAvKiBFc3RvIGhhY2UgcXVlIG1haW4gb2N1cGUgdG9kbyBlbCBlc3BhY2lvIHJlc3RhbnRlIGRlc3B1w6lzIGRlIGhlYWRlciB5IGFudGVzIGRlIGZvb3RlciAqL1xcbiAgICBnYXA6IDUlO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgLyogcGFkZGluZy10b3A6IDZyZW07ICovXFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbi5ob21lIHtcXG4gICAgLyogcGFkZGluZy10b3A6IDZyZW07ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9pbWFnZXMvY2lyY3VpdC1wcmltYXJ5LnN2ZycpIG5vLXJlcGVhdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZ2FwOiA1JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm1haW4tdGV4dCB7XFxuICAgIGNvbG9yOiAjMDE4NzZDO1xcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMCU7XFxufVxcblxcbi5tYWluLXRleHQtbmFtZSB7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5tYWluLXRleHQtcm9sZSB7XFxuICAgIGNvbG9yOiAjMDE4NzZDO1xcbn1cXG5cXG4uaG9tZS1pbWFnZSB7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBBYm91dCBzZWN0aW9uICovXFxuXFxuLnNlY3Rpb24taGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5zZWN0aW9uLWhlYWRlci10ZXh0IHtcXG4gICAgY29sb3I6ICMwMTg3NkM7XFxufVxcblxcbi5zZWN0aW9uLWhlYWRlci10aXRsZSB7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4uc2VjdGlvbi1oZWFkZXItbGluZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgLyogbWFyZ2luLXRvcDogMC41cmVtOyAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE5N0Y7XFxufVxcblxcbiNhYm91dC1ib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiB0b3A7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbn1cXG5cXG4jYWJvdXQtYm9keS1pbWFnZSB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc2VjdGlvbi1ib2R5LXRleHQge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi8qIFN0YWNrIHNlY3Rpb24gKi9cXG5cXG50YWJsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG50aCB7XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDBBOTdGO1xcbn1cXG5cXG4uc2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uc2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICBsZWZ0OiA1cHg7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIGJvdHRvbTogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQTk3RjtcXG59XFxuXFxuLnNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHk6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNXB4O1xcbiAgICBsZWZ0OiA1cHg7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIGJvdHRvbTogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLyogUHJvamVjdHMgc2VjdGlvbiAqL1xcblxcbiNwcm9qZWN0cy1ib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbn1cXG5cXG5cXG4jcHJvamVjdHMtYm9keS1kaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbi5wcm9qZWN0LWRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxuICAgIHdpZHRoOiA4MDBweDtcXG59XFxuXFxuLnByb2plY3QtZGl2LXRvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiB0b3A7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1kaXYtdG9wLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG1heC13aWR0aDogNzAlO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1saW5rLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBBOTdGO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE5N0Y7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbi5wcm9qZWN0LWxpbmstYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgY29sb3I6ICMwMEE5N0Y7XFxufVxcblxcbi5wcm9qZWN0LWRpdi1ib3R0b20ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1JTtcXG59XFxuXFxuLnByb2plY3QtaW1hZ2Uge1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiA4cHggc29saWQgIzAwMDAwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDVweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLyogQ29udGFjdCBzZWN0aW9uICovXFxuXFxuI2NvbnRhY3QtYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbn1cXG5cXG4uY29udGFjdC1ib2R5LXRvcCB7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtYm9keS1ib3R0b20ge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2hhbmRzb21lLW1hbi1ob2xkaW5nLXNvbWV0aGluZy5qcGcnKSBuby1yZXBlYXQ7XFxufVxcblxcbi5jb250YWN0LWJvZHktc29jaWFsIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtYm9keS10ZXh0IHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uY29udGFjdC1ib2R5LWZvcm0ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwQTk3RjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMnJlbSA0cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhGQ0VBO1xcbn1cXG5cXG4uZm9ybS1maWVsZC1kaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jb250YWN0LWJvZHktZm9ybS1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtYm9keS1mb3JtLWxhYmVsIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XFxufVxcblxcbi5jb250YWN0LWJvZHktZm9ybS1pbnB1dCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzUyQkQ5RjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uY29udGFjdC1ib2R5LWZvcm0taW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBBOTdGO1xcbn1cXG5cXG4uY29udGFjdC1ib2R5LWZvcm0tdGV4dGFyZWEge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MkJEOUY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtYm9keS1mb3JtLXRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwQTk3RjtcXG59XFxuXFxuLmNvbnRhY3QtYm9keS1mb3JtLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBBOTdGO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE5N0Y7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtYm9keS1mb3JtLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGNvbG9yOiAjMDBBOTdGO1xcbn1cXG5cXG4uc29jaWFsLWltZyB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbi5zb2NpYWwtaW1nOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNyZWRpdHMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIFN0eWxlIHRoZSBsaW5rIHRvIHJlbW92ZSBkZWZhdWx0IHN0eWxpbmcgKi9cXG4uZ2l0aHViLWxpbmsge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qIEFkZCB0aGUgaG92ZXIgZWZmZWN0ICovXFxuLmdpdGh1Yi1pY29uIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7IC8qIEFkZCBhIHRyYW5zaXRpb24gZm9yIHRoZSB0cmFuc2Zvcm0gcHJvcGVydHkgKi9cXG59XFxuXFxuLmdpdGh1Yi1saW5rOmhvdmVyIC5naXRodWItaWNvbiB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IC8qIFJvdGF0ZSB0aGUgaWNvbiAxODAgZGVncmVlcyB3aGVuIGhvdmVyZWQgKi9cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vMTdGOTZCOTctOUIyRS00MjZCLUE2OEItNjkzNkQ2RkREMTJFLmpwZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvaW1hZ2VzLzE3Rjk2Qjk3LTlCMkUtNDI2Qi1BNjhCLTY5MzZENkZERDEyRS5qcGdcIixcblx0XHRcInNyY19hc3NldHNfaW1hZ2VzXzE3Rjk2Qjk3LTlCMkUtNDI2Qi1BNjhCLTY5MzZENkZERDEyRV9qcGdcIlxuXHRdLFxuXHRcIi4vY2hhcmxlcy1kZWxveWUtOWhGUFM5WVlhVG8tdW5zcGxhc2guanBnXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2hhcmxlcy1kZWxveWUtOWhGUFM5WVlhVG8tdW5zcGxhc2guanBnXCIsXG5cdFx0XCJzcmNfYXNzZXRzX2ltYWdlc19jaGFybGVzLWRlbG95ZS05aEZQUzlZWWFUby11bnNwbGFzaF9qcGdcIlxuXHRdLFxuXHRcIi4vY2lyY3VpdC1wcmltYXJ5LnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpcmN1aXQtcHJpbWFyeS5zdmdcIlxuXHRdLFxuXHRcIi4vZ2l0aHViLWljb24uc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZ2l0aHViLWljb24uc3ZnXCJcblx0XSxcblx0XCIuL2hhbmRzb21lLW1hbi1ob2xkaW5nLXNvbWV0aGluZy5qcGdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9oYW5kc29tZS1tYW4taG9sZGluZy1zb21ldGhpbmcuanBnXCJcblx0XSxcblx0XCIuL2hhbmRzb21lLW1hbi13aXRoLWJsdWUtZ2xhc3Nlcy1wcmVzZW50aW5nLXNvbWV0aGluZy5qcGdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9oYW5kc29tZS1tYW4td2l0aC1ibHVlLWdsYXNzZXMtcHJlc2VudGluZy1zb21ldGhpbmcuanBnXCJcblx0XSxcblx0XCIuL2luc3RhZ3JhbS1pY29uLnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvaW1hZ2VzL2luc3RhZ3JhbS1pY29uLnN2Z1wiXG5cdF0sXG5cdFwiLi9saW5rZWRpbi1pY29uLnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvaW1hZ2VzL2xpbmtlZGluLWljb24uc3ZnXCJcblx0XSxcblx0XCIuL21haWwtaWNvbi5zdmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9tYWlsLWljb24uc3ZnXCJcblx0XSxcblx0XCIuL21hbi13aGl0ZS5qcGdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9tYW4td2hpdGUuanBnXCJcblx0XSxcblx0XCIuL3BleGVscy1hcnRlbS1wb2RyZXotNDgxNzQwNi5qcGdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9wZXhlbHMtYXJ0ZW0tcG9kcmV6LTQ4MTc0MDYuanBnXCIsXG5cdFx0XCJzcmNfYXNzZXRzX2ltYWdlc19wZXhlbHMtYXJ0ZW0tcG9kcmV6LTQ4MTc0MDZfanBnXCJcblx0XSxcblx0XCIuL3BleGVscy1jYW52YS1zdHVkaW8tMzE1MzIwMy5qcGdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9wZXhlbHMtY2FudmEtc3R1ZGlvLTMxNTMyMDMuanBnXCIsXG5cdFx0XCJzcmNfYXNzZXRzX2ltYWdlc19wZXhlbHMtY2FudmEtc3R1ZGlvLTMxNTMyMDNfanBnXCJcblx0XSxcblx0XCIuL3BleGVscy1tYXJjdXMtc2lsdmEtMTA1MDg1NjEtMi5qcGdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9wZXhlbHMtbWFyY3VzLXNpbHZhLTEwNTA4NTYxLTIuanBnXCIsXG5cdFx0XCJzcmNfYXNzZXRzX2ltYWdlc19wZXhlbHMtbWFyY3VzLXNpbHZhLTEwNTA4NTYxLTJfanBnXCJcblx0XSxcblx0XCIuL3BleGVscy1tYXJjdXMtc2lsdmEtMTA1MDg1NjEtMy5qcGdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9wZXhlbHMtbWFyY3VzLXNpbHZhLTEwNTA4NTYxLTMuanBnXCIsXG5cdFx0XCJzcmNfYXNzZXRzX2ltYWdlc19wZXhlbHMtbWFyY3VzLXNpbHZhLTEwNTA4NTYxLTNfanBnXCJcblx0XSxcblx0XCIuL3BleGVscy1tYXJjdXMtc2lsdmEtMTA1MDg1NjEuanBnXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcGV4ZWxzLW1hcmN1cy1zaWx2YS0xMDUwODU2MS5qcGdcIixcblx0XHRcInNyY19hc3NldHNfaW1hZ2VzX3BleGVscy1tYXJjdXMtc2lsdmEtMTA1MDg1NjFfanBnXCJcblx0XSxcblx0XCIuL3Byb2plY3QxLnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvaW1hZ2VzL3Byb2plY3QxLnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19pbWFnZXNfcHJvamVjdDFfcG5nXCJcblx0XSxcblx0XCIuL3Byb2plY3QyLnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvaW1hZ2VzL3Byb2plY3QyLnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19pbWFnZXNfcHJvamVjdDJfcG5nXCJcblx0XSxcblx0XCIuL3Byb2plY3QzLnBuZ1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvaW1hZ2VzL3Byb2plY3QzLnBuZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19pbWFnZXNfcHJvamVjdDNfcG5nXCJcblx0XSxcblx0XCIuL3gtaWNvbi5zdmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy94LWljb24uc3ZnXCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBQcm9taXNlLmFsbChpZHMuc2xpY2UoMSkubWFwKF9fd2VicGFja19yZXF1aXJlX18uZSkpLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQoaWQsIDEgfCAxNik7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKE9iamVjdC5rZXlzKG1hcCkpO1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyJdLCJuYW1lcyI6WyJNZSIsIkFib3V0SW1nIiwiTGlua2VkSW4iLCJJbnN0YWdyYW0iLCJHaXRIdWIiLCJYIiwiTWFpbCIsInByb2plY3RzRGF0YSIsImxvYWRJbWFnZSIsImltYWdlTmFtZSIsImltYWdlTW9kdWxlIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJ0YWciLCJjbGFzc05hbWUiLCJpZCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImhlYWRlciIsIm1haW4iLCJmb290ZXIiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJsb2dvIiwibmF2IiwibG9nb1RleHQiLCJ0ZXh0Q29udGVudCIsIm1lbnUiLCJtZW51SXRlbXMiLCJjb3VudGVyIiwidHdvRGlnaXRDb3VudGVyIiwidmFsdWUiLCJmb3JFYWNoIiwiaXRlbSIsIm51bUxhYmVsIiwibWVudUl0ZW0iLCJpdGVtTGluayIsImhvbWUiLCJhYm91dCIsInN0YWNrIiwicHJvamVjdHMiLCJjb250YWN0IiwibWFpblRleHQiLCJuZXdMaW5lMSIsInNwYW5OYW1lIiwibmV3TGluZTIiLCJzcGFuUm9sZSIsIk1lSW1hZ2UiLCJzcmMiLCJhbHQiLCJhYm91dEhlYWRlciIsImFib3V0Qm9keSIsImFib3V0SGVhZGVyTGluZSIsImFib3V0SGVhZGVyVGV4dCIsImFib3V0SGVhZGVyVGl0bGUiLCJhYm91dEJvZHlJbWFnZSIsImFib3V0Qm9keURpdlRleHQiLCJhYm91dEJvZHlUZXh0MSIsImFib3V0Qm9keVRleHQyIiwiYWJvdXRCb2R5VGV4dDMiLCJhYm91dEJvZHlUZXh0NCIsImFib3V0Qm9keVRleHQ1Iiwic3RhY2tIZWFkZXIiLCJzdGFja0JvZHkiLCJzdGFja0hlYWRlckxpbmUiLCJzdGFja0hlYWRlclRleHQiLCJzdGFja0hlYWRlclRpdGxlIiwic3RhY2tUYWJsZSIsInN0YWNrVGFibGVIZWFkIiwic3RhY2tUYWJsZUhlYWRSb3ciLCJzdGFja1RhYmxlSGVhZENvbDEiLCJzdGFja1RhYmxlSGVhZENvbDIiLCJzdGFja1RhYmxlSGVhZENvbDMiLCJzdGFja1RhYmxlSGVhZENvbDQiLCJzdGFja1RhYmxlSGVhZENvbDUiLCJzdGFja1RhYmxlSGVhZENvbDYiLCJzdGFja1RhYmxlQm9keSIsInN0YWNrVGFibGVCb2R5Um93MSIsInN0YWNrVGFibGVCb2R5SGVhZDEiLCJzdGFja1RhYmxlQm9keUhlYWQyIiwic3RhY2tUYWJsZUJvZHlDZWxsMSIsInN0YWNrVGFibGVCb2R5Q2VsbDIiLCJzdGFja1RhYmxlQm9keUNlbGwzIiwic3RhY2tUYWJsZUJvZHlDZWxsNCIsInN0YWNrVGFibGVCb2R5Q2VsbDRiaXMiLCJzdGFja1RhYmxlQm9keVJvdzIiLCJzdGFja1RhYmxlQm9keUhlYWQzIiwic3RhY2tUYWJsZUJvZHlDZWxsNSIsInN0YWNrVGFibGVCb2R5Q2VsbDYiLCJzdGFja1RhYmxlQm9keUNlbGw3Iiwic3RhY2tUYWJsZUJvZHlDZWxsOCIsInN0YWNrVGFibGVCb2R5Q2VsbDgxIiwic3RhY2tUYWJsZUJvZHlSb3czIiwic3RhY2tUYWJsZUJvZHlIZWFkNCIsInN0YWNrVGFibGVCb2R5Q2VsbDkiLCJzdGFja1RhYmxlQm9keUNlbGwxMCIsInN0YWNrVGFibGVCb2R5Q2VsbDExIiwic3RhY2tUYWJsZUJvZHlDZWxsMTIiLCJzdGFja1RhYmxlQm9keUNlbGwxMjEiLCJzdGFja1RhYmxlQm9keVJvdzQiLCJzdGFja1RhYmxlQm9keUhlYWQ1Iiwic3RhY2tUYWJsZUJvZHlDZWxsMTMiLCJzdGFja1RhYmxlQm9keUNlbGwxNCIsInN0YWNrVGFibGVCb2R5Q2VsbDE1Iiwic3RhY2tUYWJsZUJvZHlDZWxsMTYiLCJzdGFja1RhYmxlQm9keUNlbGwxNyIsInN0YWNrVGFibGVCb2R5Um93NSIsInN0YWNrVGFibGVCb2R5SGVhZDYiLCJzdGFja1RhYmxlQm9keUhlYWQ3Iiwic3RhY2tUYWJsZUJvZHlDZWxsMTgiLCJzdGFja1RhYmxlQm9keUNlbGwxOSIsInN0YWNrVGFibGVCb2R5Q2VsbDIwIiwic3RhY2tUYWJsZUJvZHlDZWxsMjEiLCJzdGFja1RhYmxlQm9keUNlbGwyMiIsInN0YWNrVGFibGVCb2R5Um93NiIsInN0YWNrVGFibGVCb2R5SGVhZDgiLCJzdGFja1RhYmxlQm9keUNlbGwyMyIsInN0YWNrVGFibGVCb2R5Q2VsbDI0Iiwic3RhY2tUYWJsZUJvZHlDZWxsMjUiLCJzdGFja1RhYmxlQm9keUNlbGwyNiIsInN0YWNrVGFibGVCb2R5Q2VsbDI3Iiwic3RhY2tUYWJsZUJvZHlSb3c3Iiwic3RhY2tUYWJsZUJvZHlIZWFkOSIsInN0YWNrVGFibGVCb2R5SGVhZDEwIiwic3RhY2tUYWJsZUJvZHlDZWxsMjgiLCJzdGFja1RhYmxlQm9keUNlbGwyOSIsInN0YWNrVGFibGVCb2R5Q2VsbDMwIiwic3RhY2tUYWJsZUJvZHlDZWxsMzEiLCJzdGFja1RhYmxlQm9keUNlbGwzMiIsInN0YWNrVGFibGVCb2R5Um93OCIsInN0YWNrVGFibGVCb2R5SGVhZDExIiwic3RhY2tUYWJsZUJvZHlDZWxsMzMiLCJzdGFja1RhYmxlQm9keUNlbGwzNCIsInN0YWNrVGFibGVCb2R5Q2VsbDM1Iiwic3RhY2tUYWJsZUJvZHlDZWxsMzYiLCJzdGFja1RhYmxlQm9keUNlbGwzNyIsInN0YWNrVGFibGVCb2R5Um93OSIsInN0YWNrVGFibGVCb2R5SGVhZDEyIiwic3RhY2tUYWJsZUJvZHlDZWxsMzgiLCJzdGFja1RhYmxlQm9keUNlbGwzOSIsInN0YWNrVGFibGVCb2R5Q2VsbDQwIiwic3RhY2tUYWJsZUJvZHlDZWxsNDEiLCJzdGFja1RhYmxlQm9keUNlbGw0MiIsInN0YWNrVGFibGVCb2R5Um93MTAiLCJzdGFja1RhYmxlQm9keUhlYWQxMyIsInN0YWNrVGFibGVCb2R5SGVhZDE0Iiwic3RhY2tUYWJsZUJvZHlDZWxsNDMiLCJzdGFja1RhYmxlQm9keUNlbGw0NCIsInN0YWNrVGFibGVCb2R5Q2VsbDQ1Iiwic3RhY2tUYWJsZUJvZHlDZWxsNDYiLCJzdGFja1RhYmxlQm9keUNlbGw0NyIsInByb2plY3RzSGVhZGVyIiwicHJvamVjdHNCb2R5IiwicHJvamVjdHNIZWFkZXJMaW5lIiwicHJvamVjdHNIZWFkZXJUZXh0IiwicHJvamVjdHNIZWFkZXJUaXRsZSIsInByb2plY3RzQm9keURpdiIsImNyZWF0ZVByb2plY3QiLCJwcm9qZWN0IiwicHJvamVjdERpdiIsInByb2plY3REaXZUb3AiLCJwcm9qZWN0RGl2VG9wTGVmdCIsInByb2plY3RUaXRsZSIsInRpdGxlIiwicHJvamVjdFN1YnRpdGxlIiwic3VidGl0bGUiLCJwcm9qZWN0RGl2VG9wUmlnaHQiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInByb2plY3RMaW5rQnV0dG9uIiwiaHJlZiIsImxpbmsiLCJ0YXJnZXQiLCJyZWwiLCJwcm9qZWN0RGl2Qm90dG9tIiwiaW1hZ2UiLCJ0aGVuIiwicHJvamVjdEltYWdlIiwiSW1hZ2UiLCJjb250YWN0SGVhZGVyIiwiY29udGFjdEJvZHkiLCJjb250YWN0SGVhZGVyTGluZSIsImNvbnRhY3RIZWFkZXJUZXh0IiwiY29udGFjdEhlYWRlclRpdGxlIiwiY29udGFjdEJvZHlUb3AiLCJjb250YWN0Qm9keVRleHQxIiwiY29udGFjdEJvZHlUZXh0MiIsImNvbnRhY3RCb2R5Qm90dG9tIiwiY29udGFjdEJvZHlGb3JtIiwiY29udGFjdEJvZHlTb2NpYWwiLCJsaW5rZWRJbkxpbmsiLCJsaW5rZWRJbkltZyIsImluc3RhZ3JhbUxpbmsiLCJpbnN0YWdyYW1JbWciLCJnaXRodWJMaW5rIiwiZ2l0aHViSW1nIiwieExpbmsiLCJ4SW1nIiwibWFpbExpbmsiLCJtYWlsSW1nIiwiY29udGFjdEJvZHlGb3JtRGl2IiwibmFtZURpdiIsIm5hbWVMYWJlbCIsImZvciIsIm5hbWVJbnB1dCIsInR5cGUiLCJuYW1lIiwiZW1haWxEaXYiLCJlbWFpbExhYmVsIiwiZW1haWxJbnB1dCIsIm1lc3NhZ2VEaXYiLCJtZXNzYWdlTGFiZWwiLCJtZXNzYWdlVGV4dGFyZWEiLCJyb3dzIiwiY29udGFjdEJvZHlGb3JtQnV0dG9uIiwiY3JlZGl0cyIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=