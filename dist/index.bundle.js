(self["webpackChunkpersonal_portfolio"] = self["webpackChunkpersonal_portfolio"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _assets_images_home_image_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/home-image.png */ "./src/assets/images/home-image.png");
/* harmony import */ var _assets_images_about_big_image_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/about-big-image.jpg */ "./src/assets/images/about-big-image.jpg");
/* harmony import */ var _assets_images_about_small_image_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/about-small-image.jpg */ "./src/assets/images/about-small-image.jpg");
/* harmony import */ var _assets_images_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/linkedin-icon.svg */ "./src/assets/images/linkedin-icon.svg");
/* harmony import */ var _assets_images_instagram_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/instagram-icon.svg */ "./src/assets/images/instagram-icon.svg");
/* harmony import */ var _assets_images_github_icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/github-icon.svg */ "./src/assets/images/github-icon.svg");
/* harmony import */ var _assets_images_x_icon_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/x-icon.svg */ "./src/assets/images/x-icon.svg");
/* harmony import */ var _assets_images_mail_icon_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/mail-icon.svg */ "./src/assets/images/mail-icon.svg");
/* harmony import */ var _assets_data_projects_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/data/projects.json */ "./src/assets/data/projects.json");











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
MeImage.src = _assets_images_home_image_png__WEBPACK_IMPORTED_MODULE_1__;
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
aboutBodyImage.src = _assets_images_about_big_image_jpg__WEBPACK_IMPORTED_MODULE_2__;
aboutBodyImage.srcset = `${_assets_images_about_small_image_jpg__WEBPACK_IMPORTED_MODULE_3__} 668w, ${_assets_images_about_big_image_jpg__WEBPACK_IMPORTED_MODULE_2__} 743w`;
aboutBodyImage.sizes = "(max-width: 876px) 668px, (min-width: 877px) 743px";
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
_assets_data_projects_json__WEBPACK_IMPORTED_MODULE_9__.projects.forEach(createProject);

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
linkedInImg.src = _assets_images_linkedin_icon_svg__WEBPACK_IMPORTED_MODULE_4__;
linkedInImg.alt = "LinkedIn";
linkedInLink.appendChild(linkedInImg);
const instagramLink = createElement("a", "contact-body-social-link");
instagramLink.href = "https://www.instagram.com/rauljimenezfernandez/";
instagramLink.target = "_blank";
instagramLink.rel = "noopener noreferrer";
contactBodySocial.appendChild(instagramLink);
const instagramImg = createElement("img", "social-img");
instagramImg.src = _assets_images_instagram_icon_svg__WEBPACK_IMPORTED_MODULE_5__;
instagramImg.alt = "Instagram";
instagramLink.appendChild(instagramImg);
const githubLink = createElement("a", "contact-body-social-link");
githubLink.href = "";
githubLink.target = "_blank";
githubLink.rel = "noopener noreferrer";
contactBodySocial.appendChild(githubLink);
const githubImg = createElement("img", "social-img");
githubImg.src = _assets_images_github_icon_svg__WEBPACK_IMPORTED_MODULE_6__;
githubImg.alt = "GitHub";
githubLink.appendChild(githubImg);
const xLink = createElement("a", "contact-body-social-link");
xLink.href = "https://www.xing.com/profile/Raul_JimenezFernandez/cv";
xLink.target = "_blank";
xLink.rel = "noopener noreferrer";
contactBodySocial.appendChild(xLink);
const xImg = createElement("img", "social-img");
xImg.src = _assets_images_x_icon_svg__WEBPACK_IMPORTED_MODULE_7__;
xImg.alt = "X";
xLink.appendChild(xImg);
const mailLink = createElement("a", "contact-body-social-link");
mailLink.href = "mailto:rjbarco@gmail.com";
mailLink.target = "_blank";
mailLink.rel = "noopener noreferrer";
contactBodySocial.appendChild(mailLink);
const mailImg = createElement("img", "social-img");
mailImg.src = _assets_images_mail_icon_svg__WEBPACK_IMPORTED_MODULE_8__;
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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/curve-line.svg */ "./src/assets/images/curve-line.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/circuit-primary.svg */ "./src/assets/images/circuit-primary.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/curve-line-2.svg */ "./src/assets/images/curve-line-2.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
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

html {
    font-size: calc(12px + 0.390625vw); /* 1vw = 1% of viewport width. Only works if placed in html tag */
}

body {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    font-family: 'Space Grotesk', sans-serif;
    color: #000000;
    min-height: 100vh; /* Esto hace que el footer se quede abajo si el contenido es poco */
    overflow-x: hidden; /* Evita que el contenido se desborde horizontalmente */
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
    padding: 2rem 4rem;
    background-color: #000000;
    color: #E6FFF6;
    height: 50px;
}

header {
    justify-content: space-between;
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
    transition: right 0.5s ease;
}

.menu-item {
    margin-left: 0.5rem;
    margin-top: 0.3rem;
    cursor: pointer;
}

.menu-item::after {
    content: '';
    width: 0%;
    height: 1px;
    margin-top: 0.3rem;
    display: block;
    transition: all 0.3s ease;
}

.menu-item:hover::after {
    width: 100%;
    height: 1px;
    margin-top: 0.3rem;
    background-color: #E6FFF6;
}

.menu-item-number {
    margin-left: 2rem;
    color: #00A97F;
}

.small-screen-menu {
    display: none;
    padding-left: 1rem;
}

.small-screen-menu-line {
    width: 30px;
    height: 5px;
    margin-bottom: 5px;
    background-color: #E6FFF6;
    border-radius: 5px;
    transition: transform 0.5s, width 0.5s;
}

/* Main Content */

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1; /* Esto hace que main ocupe todo el espacio restante después de header y antes de footer */
    gap: 5%;
}

section {
    width: 90%;
    margin: 0 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* flex-grow: 1;
    gap: 5%; */
}

.home {
    width: 100%;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: end;
    /* flex-grow: 1; */
    /* gap: 5%; */
    height: calc(100vh - 50px); /* Resta el alto del header del alto total de la ventana del navegador */
}

.main-text {
    color: #01876C;
    line-height: 4rem;
    text-align: end;
    margin-bottom: 10%;
    margin-left: 1rem;
}

.main-text-name {
    color: #000000;
    font-size: 4rem;
}

.main-text-role {
    color: #01876C;
}

.home-image {
    max-width: 600px;
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
    margin-bottom: 1.5rem;
    background-color: #00A97F;
}

#about-body {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items:end;
    justify-content: center;
    gap: 5%;
}

#about-body-image {
    max-width: 500px;
    height: auto;
}

#about-body-div-text {
    padding-bottom: 4rem;
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

#stack-body {
    overflow-x: auto;
}

table {
    max-width: 100%;
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
    padding: 1rem;
}

.section-body-table-body-cell-empty {
    position: relative;
    padding: 1rem;
}

.section-body-table-body-cell-filled::after {
    content: '';
    position: absolute;
    top: 0.7rem;
    left: 0.2rem;
    right: 0.2rem;
    bottom: 0.7rem;
    background-color: #00A97F;
    border: 1px solid #00A97F;
}

.section-body-table-body-cell-empty::after {
    content: '';
    position: absolute;
    top: 0.7rem;
    left: 0.2rem;
    right: 0.2rem;
    bottom: 0.7rem;
    background-color: #fff;
    border: 1px solid #00A97F;
}

/* Projects section */

#projects-body {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5%;
}


#projects-body-div {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5%;
}

.project-div {
    margin-bottom: 4rem;
    max-width: 100%;
}

.project-div-top {
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    gap: 5%;
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
    margin: 0 auto;
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
    max-width: 800px;
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
    width: 80%;
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
    align-items: end;
    justify-content: center;
    gap: 1.5rem;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: cover;
    background-repeat: no-repeat; /* Evita que la imagen se repita */
    background-position: left; /* Centra la imagen en el div */
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
    border: 1px solid #00A97F;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
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
    border: 1px solid #00A97F;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
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
}

/* Small screens */

@media screen and (max-width: 876px) {
    
    nav {
        flex-direction: column;
    }

    .menu {
        flex-direction: column;
        align-items: end;
        padding: 20px;
        position: absolute;
        background-color: #000000;
        width: 100px;
        right: -150px;
        top: 6.8rem;
    }

    .menu-item {
        margin-left: 0;
        margin-top: 0;
        padding: 1rem 0;
        text-align: end;
    }

    .small-screen-menu {
        display: block;
        position: absolute;
        top: 2.7rem;
        right: 2rem;
    }

    .small-screen-menu:hover {
        cursor: pointer;
    }

    .menu-active {
        right: 0px;
    }

    .small-screen-menu-line-1-active {
        transform: rotate(-45deg) translate(-8px, 6px);
    }

    .small-screen-menu-line-2-active {
        width: 0;
    }

    .small-screen-menu-line-3-active {
        transform: rotate(45deg) translate(-8px, -6px);
    }

    .home {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: auto;
        background: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) no-repeat bottom;
    }

    .main-text {
        text-align: center;
        margin-top: 30px;
    }

    #about-body {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        gap: 5%;
    }

    .project-image {
        max-width: 500px;
    }

}

@media screen and (max-width: 740px) {
    
    .hide-on-mobile {
        display: none;
    }

    .project-div-top {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5%;
    }

    .project-div-top-left {
        text-align: center;
        margin-bottom: 2rem;
    }

    .project-div-top-right {
        margin-bottom: 2rem;
    }

}

@media screen and (max-width: 600px) {
    
    .project-div-top-right {
        max-width: 100%;
    }

    .project-image {
        max-width: 350px;
    }

}`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* MY OWN STYLES FROM HERE */\n\n@font-face {\n    font-family: 'Space Grotesk';\n    src: url('../assets/fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf');\n}\n\nhtml {\n    font-size: calc(12px + 0.390625vw); /* 1vw = 1% of viewport width. Only works if placed in html tag */\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    background-color: #ffffff;\n    font-family: 'Space Grotesk', sans-serif;\n    color: #000000;\n    min-height: 100vh; /* Esto hace que el footer se quede abajo si el contenido es poco */\n    overflow-x: hidden; /* Evita que el contenido se desborde horizontalmente */\n}\n\nh1 {\n    font-size: 3rem;\n}\n\nh2 {\n    font-size: 2.5rem;\n}\n\nh3 {\n    font-size: 2rem;\n}\n\nh4 {\n    font-size: 1.5rem;\n}\n\nheader,footer {\n    display: flex;\n    align-items: center;\n    padding: 2rem 4rem;\n    background-color: #000000;\n    color: #E6FFF6;\n    height: 50px;\n}\n\nheader {\n    justify-content: space-between;\n}\n\n.logo {\n    color: #E6FFF6;\n}\n\nnav {\n    display: flex;\n    align-items: center;\n}\n\n.menu {\n    display: flex;\n    align-items: center;\n    transition: right 0.5s ease;\n}\n\n.menu-item {\n    margin-left: 0.5rem;\n    margin-top: 0.3rem;\n    cursor: pointer;\n}\n\n.menu-item::after {\n    content: '';\n    width: 0%;\n    height: 1px;\n    margin-top: 0.3rem;\n    display: block;\n    transition: all 0.3s ease;\n}\n\n.menu-item:hover::after {\n    width: 100%;\n    height: 1px;\n    margin-top: 0.3rem;\n    background-color: #E6FFF6;\n}\n\n.menu-item-number {\n    margin-left: 2rem;\n    color: #00A97F;\n}\n\n.small-screen-menu {\n    display: none;\n    padding-left: 1rem;\n}\n\n.small-screen-menu-line {\n    width: 30px;\n    height: 5px;\n    margin-bottom: 5px;\n    background-color: #E6FFF6;\n    border-radius: 5px;\n    transition: transform 0.5s, width 0.5s;\n}\n\n/* Main Content */\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex-grow: 1; /* Esto hace que main ocupe todo el espacio restante después de header y antes de footer */\n    gap: 5%;\n}\n\nsection {\n    width: 90%;\n    margin: 0 5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    /* flex-grow: 1;\n    gap: 5%; */\n}\n\n.home {\n    width: 100%;\n    background: url('../assets/images/curve-line.svg') no-repeat;\n    display: flex;\n    flex-direction: row;\n    align-items: end;\n    justify-content: end;\n    /* flex-grow: 1; */\n    /* gap: 5%; */\n    height: calc(100vh - 50px); /* Resta el alto del header del alto total de la ventana del navegador */\n}\n\n.main-text {\n    color: #01876C;\n    line-height: 4rem;\n    text-align: end;\n    margin-bottom: 10%;\n    margin-left: 1rem;\n}\n\n.main-text-name {\n    color: #000000;\n    font-size: 4rem;\n}\n\n.main-text-role {\n    color: #01876C;\n}\n\n.home-image {\n    max-width: 600px;\n    height: auto;\n}\n\n/* About section */\n\n.section-header {\n    width: 100%;\n    margin-bottom: 2rem;\n}\n\n.section-header-text {\n    color: #01876C;\n}\n\n.section-header-title {\n    color: #000000;\n}\n\n.section-header-line {\n    width: 100%;\n    height: 1px;\n    margin-bottom: 1.5rem;\n    background-color: #00A97F;\n}\n\n#about-body {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items:end;\n    justify-content: center;\n    gap: 5%;\n}\n\n#about-body-image {\n    max-width: 500px;\n    height: auto;\n}\n\n#about-body-div-text {\n    padding-bottom: 4rem;\n}\n\n.section-body-text {\n    color: #000000;\n    line-height: 2rem;\n    text-align: justify;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 1rem;\n}\n\n/* Stack section */\n\n#stack-body {\n    overflow-x: auto;\n}\n\ntable {\n    max-width: 100%;\n    margin-bottom: 4rem;\n}\n\nth {\n    width: 8rem;\n    padding: 1rem;\n    text-align: center;\n    vertical-align: middle;\n    border-bottom: 1px solid #00A97F;\n}\n\n.section-body-table-body-cell-filled {\n    position: relative;\n    padding: 1rem;\n}\n\n.section-body-table-body-cell-empty {\n    position: relative;\n    padding: 1rem;\n}\n\n.section-body-table-body-cell-filled::after {\n    content: '';\n    position: absolute;\n    top: 0.7rem;\n    left: 0.2rem;\n    right: 0.2rem;\n    bottom: 0.7rem;\n    background-color: #00A97F;\n    border: 1px solid #00A97F;\n}\n\n.section-body-table-body-cell-empty::after {\n    content: '';\n    position: absolute;\n    top: 0.7rem;\n    left: 0.2rem;\n    right: 0.2rem;\n    bottom: 0.7rem;\n    background-color: #fff;\n    border: 1px solid #00A97F;\n}\n\n/* Projects section */\n\n#projects-body {\n    max-width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5%;\n}\n\n\n#projects-body-div {\n    max-width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5%;\n}\n\n.project-div {\n    margin-bottom: 4rem;\n    max-width: 100%;\n}\n\n.project-div-top {\n    display: flex;\n    flex-direction: row;\n    align-items: top;\n    justify-content: space-between;\n    gap: 5%;\n    margin-bottom: 1rem;\n}\n\n.project-title {\n    margin-bottom: 1rem;\n}\n\n.project-div-top-right {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 1rem;\n    max-width: 70%;\n}\n\n.project-description {\n    text-align: justify;\n    line-height: 2rem;\n}\n\n.project-link-button {\n    padding: 0.5rem 1rem;\n    border: 1px solid #00A97F;\n    border-radius: 5px;\n    background-color: #00A97F;\n    color: #ffffff;\n    text-decoration: none;\n    transition: all 0.3s ease;\n    margin: 0 auto;\n}\n\n.project-link-button:hover {\n    background-color: #ffffff;\n    color: #00A97F;\n}\n\n.project-div-bottom {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 5%;\n}\n\n.project-image {\n    max-width: 800px;\n    height: auto;\n    border: 8px solid #000000;\n    border-radius: 20px;\n    box-shadow: 0 10px 5px -4px rgba(0, 0, 0, 0.5);\n}\n\n/* Contact section */\n\n#contact-body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5%;\n}\n\n.contact-body-top {\n    color: #000000;\n    line-height: 2rem;\n    margin-bottom: 2rem;\n}\n\n.contact-body-bottom {\n    width: 80%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 4rem;\n}\n\n.contact-body-social {\n    padding-left: 4rem;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: end;\n    justify-content: center;\n    gap: 1.5rem;\n    background-image: url('../assets/images/circuit-primary.svg');\n    background-size: cover;\n    background-repeat: no-repeat; /* Evita que la imagen se repita */\n    background-position: left; /* Centra la imagen en el div */\n}\n\n.contact-body-text {\n    color: #000000;\n    line-height: 2rem;\n    text-align: justify;\n    margin-bottom: 1rem;\n}\n\n.contact-body-form {\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #00A97F;\n    border-radius: 10px;\n    padding: 2rem 4rem;\n    background-color: #C8FCEA;\n}\n\n.form-field-div {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: flex-start;\n    gap: 10%;\n    padding: 1rem;\n}\n\n.contact-body-form-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.contact-body-form-label {\n    width: 30%;\n    text-align: left;\n    color: #000000;\n    padding-top: 0.5rem;\n}\n\n.contact-body-form-input {\n    width: 70%;\n    padding: 0.5rem;\n    border: 1px solid #52BD9F;\n    border-radius: 5px;\n    background-color: #ffffff;\n    color: #000000;\n    transition: all 0.3s ease;\n    font-size: 1rem;\n}\n\n.contact-body-form-input:focus {\n    outline: none;\n    border: 1px solid #00A97F;\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);\n}\n\n.contact-body-form-textarea {\n    width: 70%;\n    padding: 0.5rem;\n    border: 1px solid #52BD9F;\n    border-radius: 5px;\n    background-color: #ffffff;\n    color: #000000;\n    transition: all 0.3s ease;\n    font-size: 1rem;\n}\n\n.contact-body-form-textarea:focus {\n    outline: none;\n    border: 1px solid #00A97F;\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);\n}\n\n.contact-body-form-button {\n    margin-top: 1rem;\n    padding: 0.5rem 1rem;\n    border: 1px solid #00A97F;\n    border-radius: 5px;\n    background-color: #00A97F;\n    color: #ffffff;\n    text-decoration: none;\n    transition: all 0.3s ease;\n    font-size: 1rem;\n}\n\n.contact-body-form-button:hover {\n    background-color: #ffffff;\n    color: #00A97F;\n}\n\n.social-img {\n    width: 50px;\n    height: auto;\n    transition: all 0.3s ease;\n}\n\n.social-img:hover {\n    transform: scale(1.2);\n}\n\n/* footer */\n\nfooter {\n    justify-content: center;\n}\n\n.credits {\n    text-align: center;\n}\n\n/* Style the link to remove default styling */\n.github-link {\n    display: inline-block;\n    text-decoration: none;\n    color: inherit;\n}\n\n/* Add the hover effect */\n.github-icon {\n    transition: transform 0.5s ease-in-out; /* Add a transition for the transform property */\n}\n\n.github-link:hover .github-icon {\n    transform: rotate(180deg); /* Rotate the icon 180 degrees when hovered */\n}\n\n/* Small screens */\n\n@media screen and (max-width: 876px) {\n    \n    nav {\n        flex-direction: column;\n    }\n\n    .menu {\n        flex-direction: column;\n        align-items: end;\n        padding: 20px;\n        position: absolute;\n        background-color: #000000;\n        width: 100px;\n        right: -150px;\n        top: 6.8rem;\n    }\n\n    .menu-item {\n        margin-left: 0;\n        margin-top: 0;\n        padding: 1rem 0;\n        text-align: end;\n    }\n\n    .small-screen-menu {\n        display: block;\n        position: absolute;\n        top: 2.7rem;\n        right: 2rem;\n    }\n\n    .small-screen-menu:hover {\n        cursor: pointer;\n    }\n\n    .menu-active {\n        right: 0px;\n    }\n\n    .small-screen-menu-line-1-active {\n        transform: rotate(-45deg) translate(-8px, 6px);\n    }\n\n    .small-screen-menu-line-2-active {\n        width: 0;\n    }\n\n    .small-screen-menu-line-3-active {\n        transform: rotate(45deg) translate(-8px, -6px);\n    }\n\n    .home {\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        height: auto;\n        background: url('../assets/images/curve-line-2.svg') no-repeat bottom;\n    }\n\n    .main-text {\n        text-align: center;\n        margin-top: 30px;\n    }\n\n    #about-body {\n        flex-direction: column-reverse;\n        align-items: center;\n        justify-content: center;\n        gap: 5%;\n    }\n\n    .project-image {\n        max-width: 500px;\n    }\n\n}\n\n@media screen and (max-width: 740px) {\n    \n    .hide-on-mobile {\n        display: none;\n    }\n\n    .project-div-top {\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 5%;\n    }\n\n    .project-div-top-left {\n        text-align: center;\n        margin-bottom: 2rem;\n    }\n\n    .project-div-top-right {\n        margin-bottom: 2rem;\n    }\n\n}\n\n@media screen and (max-width: 600px) {\n    \n    .project-div-top-right {\n        max-width: 100%;\n    }\n\n    .project-image {\n        max-width: 350px;\n    }\n\n}"],"sourceRoot":""}]);
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
	"./about-big-image.jpg": [
		"./src/assets/images/about-big-image.jpg"
	],
	"./about-small-image.jpg": [
		"./src/assets/images/about-small-image.jpg"
	],
	"./circuit-primary.svg": [
		"./src/assets/images/circuit-primary.svg"
	],
	"./curve-line-2.svg": [
		"./src/assets/images/curve-line-2.svg"
	],
	"./curve-line.svg": [
		"./src/assets/images/curve-line.svg"
	],
	"./github-icon.svg": [
		"./src/assets/images/github-icon.svg"
	],
	"./home-image.png": [
		"./src/assets/images/home-image.png"
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

/***/ "./src/assets/images/about-big-image.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/about-big-image.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "29bee072f3e0c45b8f02.jpg";

/***/ }),

/***/ "./src/assets/images/about-small-image.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/about-small-image.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7dedcfc3dab2249db33b.jpg";

/***/ }),

/***/ "./src/assets/images/circuit-primary.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/circuit-primary.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "053bed0dc0b6846f942d.svg";

/***/ }),

/***/ "./src/assets/images/curve-line-2.svg":
/*!********************************************!*\
  !*** ./src/assets/images/curve-line-2.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6a2ca7e111f1d82a934a.svg";

/***/ }),

/***/ "./src/assets/images/curve-line.svg":
/*!******************************************!*\
  !*** ./src/assets/images/curve-line.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2d0f8a8c20f20368251f.svg";

/***/ }),

/***/ "./src/assets/images/github-icon.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/github-icon.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bf3ced565010463bfed0.svg";

/***/ }),

/***/ "./src/assets/images/home-image.png":
/*!******************************************!*\
  !*** ./src/assets/images/home-image.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dbb7c579de7111975901.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0Esa0NBQWtDO0FBQ2xDLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUMsT0FBTyx5RkFBeUYsTUFBTSxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyx3QkFBd0IsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyx3QkFBd0IseUJBQXlCLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSx1QkFBdUIsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsd0JBQXdCLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEseUJBQXlCLHlCQUF5QixPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sd0JBQXdCLE9BQU8sS0FBSyx3QkFBd0IsT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFB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OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvYXNzZXRzL2ltYWdlcy8gbGF6eSBeXFwuXFwvLiokIG5hbWVzcGFjZSBvYmplY3QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5pbXBvcnQgTWUgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9ob21lLWltYWdlLnBuZ1wiO1xuaW1wb3J0IEFib3V0QmlnSW1nIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmlnLWltYWdlLmpwZ1wiO1xuaW1wb3J0IEFib3V0U21hbGxJbWcgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9hYm91dC1zbWFsbC1pbWFnZS5qcGdcIjtcbmltcG9ydCBMaW5rZWRJbiBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2xpbmtlZGluLWljb24uc3ZnXCI7XG5pbXBvcnQgSW5zdGFncmFtIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvaW5zdGFncmFtLWljb24uc3ZnXCI7XG5pbXBvcnQgR2l0SHViIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvZ2l0aHViLWljb24uc3ZnXCI7XG5pbXBvcnQgWCBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3gtaWNvbi5zdmdcIjtcbmltcG9ydCBNYWlsIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvbWFpbC1pY29uLnN2Z1wiO1xuaW1wb3J0IHByb2plY3RzRGF0YSBmcm9tIFwiLi9hc3NldHMvZGF0YS9wcm9qZWN0cy5qc29uXCI7XG5cbi8vIEZ1bmN0aW9uIHRoYXQgaW1wb3J0cyBhbiBpbWFnZSBiYXNlZCBvbiBhbiBpbnB1dCBuYW1lXG5hc3luYyBmdW5jdGlvbiBsb2FkSW1hZ2UoaW1hZ2VOYW1lKSB7XG4gICAgY29uc3QgaW1hZ2VNb2R1bGUgPSBhd2FpdCBpbXBvcnQoYC4vYXNzZXRzL2ltYWdlcy8ke2ltYWdlTmFtZX1gKTtcbiAgICByZXR1cm4gaW1hZ2VNb2R1bGUuZGVmYXVsdDtcbn1cblxuLy8gQ3JlYXRlIGFuIGVsZW1lbnQgd2l0aCBhbiBvcHRpb25hbCBDU1MgY2xhc3MgYW5kIG9wdGlvbmFsIENTUyBpZFxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSwgaWQpIHtcbiAgICAgICAgXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKVxuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgIH1cblxuICAgIGlmIChpZCkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsaWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRcblxufVxuXG4vLyBSZXRyaWV2ZSBhbiBlbGVtZW50IGZyb20gdGhlIERPTVxuLyogZnVuY3Rpb24gZ2V0RWxlbWVudChpZCkge1xuICAgICAgICBcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG5cbiAgICByZXR1cm4gZWxlbWVudFxuXG59ICovXG5cbi8vIENyZWF0ZSAzIG1haW4gc2VjdGlvbnNcbmNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5jb25zdCBtYWluID0gY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5jb25zdCBmb290ZXIgPSBjcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXG4vLyBBZGQgZWFjaCBzZWN0aW9uIHRvIHRoZSBET01cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbi8vIEFkZCAyIHN1YnNlY3Rpb25zIHRvIGhlYWRlciwgb25lIGZvciBhIGxvZ28gYW5kIG9uZSBmb3IgYSBuYXZcbmNvbnN0IGxvZ28gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibG9nb1wiKTtcbmNvbnN0IG5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cbi8vIEFkZCBjb250ZW50IHRvIGxvZ28gc3Vic2VjdGlvblxuY29uc3QgbG9nb1RleHQgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJsb2dvLXRleHRcIik7XG5sb2dvVGV4dC50ZXh0Q29udGVudCA9IFwiUi5KLlwiO1xubG9nby5hcHBlbmRDaGlsZChsb2dvVGV4dCk7XG5cbi8vIEFkZCBjb250ZW50IHRvIG5hdiBzdWJzZWN0aW9uIChtZW51IGxpbmsgaXRlbXMpXG5jb25zdCBtZW51ID0gY3JlYXRlRWxlbWVudChcInVsXCIsIFwibWVudVwiKTtcbmNvbnN0IG1lbnVJdGVtcyA9IFtcIkhvbWVcIiwgXCJBYm91dFwiLCBcIlN0YWNrXCIsIFwiUHJvamVjdHNcIiwgXCJDb250YWN0XCJdO1xuLy8gQ3JlYXRlIGEgYWx3YXlzIHR3byBkaWdpdCBjb3VudGVyIGZvciB0aGUgbWVudSBpdGVtc1xubGV0IGNvdW50ZXIgPSAxO1xuXG5mdW5jdGlvbiB0d29EaWdpdENvdW50ZXIodmFsdWUpIHtcbiAgICBcbiAgICBpZiAodmFsdWUgPCAxMCkge1xuICAgICAgICByZXR1cm4gYDAke3ZhbHVlfS5gO1xuICAgIH0gXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICBcbn1cblxubWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBudW1MYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwibWVudS1pdGVtLW51bWJlclwiKTtcbiAgICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBcIm1lbnUtaXRlbVwiKTtcbiAgICBjb25zdCBpdGVtTGluayA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIFwibWVudS1pdGVtLWxpbmtcIik7XG4gICAgbnVtTGFiZWwudGV4dENvbnRlbnQgPSB0d29EaWdpdENvdW50ZXIoY291bnRlcik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChudW1MYWJlbCk7XG4gICAgY291bnRlciArPSAxO1xuICAgIGl0ZW1MaW5rLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtTGluayk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG59KTtcblxubmF2LmFwcGVuZENoaWxkKG1lbnUpO1xuXG4vLyBBZGQgYSBkaXYgZm9yIHNtYWxsIHNjcmVlbiBkZXZpY2VzIChidXJnZXIgbWVudSlcbmNvbnN0IHNtYWxsU2NyZWVuTWVudSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzbWFsbC1zY3JlZW4tbWVudVwiKTtcbmNvbnN0IHNtYWxsU2NyZWVuTWVudUxpbmUxID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNtYWxsLXNjcmVlbi1tZW51LWxpbmVcIiwgXCJzbWFsbC1zY3JlZW4tbWVudS1saW5lLTFcIik7XG5jb25zdCBzbWFsbFNjcmVlbk1lbnVMaW5lMiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzbWFsbC1zY3JlZW4tbWVudS1saW5lXCIsIFwic21hbGwtc2NyZWVuLW1lbnUtbGluZS0yXCIpO1xuY29uc3Qgc21hbGxTY3JlZW5NZW51TGluZTMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic21hbGwtc2NyZWVuLW1lbnUtbGluZVwiLCBcInNtYWxsLXNjcmVlbi1tZW51LWxpbmUtM1wiKTtcbnNtYWxsU2NyZWVuTWVudS5hcHBlbmRDaGlsZChzbWFsbFNjcmVlbk1lbnVMaW5lMSk7XG5zbWFsbFNjcmVlbk1lbnUuYXBwZW5kQ2hpbGQoc21hbGxTY3JlZW5NZW51TGluZTIpO1xuc21hbGxTY3JlZW5NZW51LmFwcGVuZENoaWxkKHNtYWxsU2NyZWVuTWVudUxpbmUzKTtcbm5hdi5hcHBlbmRDaGlsZChzbWFsbFNjcmVlbk1lbnUpO1xuXG4vLyBBZGQgZWFjaCBzdWJzZWN0aW9uIHRvIHRoZSBoZWFkZXJcbmhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbmhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4vLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHNtYWxsIHNjcmVlbiBtZW51XG5zbWFsbFNjcmVlbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LWFjdGl2ZVwiKTtcbiAgICBzbWFsbFNjcmVlbk1lbnVMaW5lMS5jbGFzc0xpc3QudG9nZ2xlKFwic21hbGwtc2NyZWVuLW1lbnUtbGluZS0xLWFjdGl2ZVwiKTtcbiAgICBzbWFsbFNjcmVlbk1lbnVMaW5lMi5jbGFzc0xpc3QudG9nZ2xlKFwic21hbGwtc2NyZWVuLW1lbnUtbGluZS0yLWFjdGl2ZVwiKTtcbiAgICBzbWFsbFNjcmVlbk1lbnVMaW5lMy5jbGFzc0xpc3QudG9nZ2xlKFwic21hbGwtc2NyZWVuLW1lbnUtbGluZS0zLWFjdGl2ZVwiKTtcbn0pO1xuXG4vLyBBZGQgY29udGVudCB0byBtYWluIHNlY3Rpb25cbi8vIEZpcnN0IGNyZWF0ZSA1IGJpZyBzdWJzZWN0aW9uc1xuY29uc3QgaG9tZSA9IGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFwiaG9tZVwiKTtcbmNvbnN0IGFib3V0ID0gY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgXCJhYm91dFwiKTtcbmNvbnN0IHN0YWNrID0gY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgXCJzdGFja1wiKTtcbmNvbnN0IHByb2plY3RzID0gY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgXCJwcm9qZWN0c1wiKTtcbmNvbnN0IGNvbnRhY3QgPSBjcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBcImNvbnRhY3RcIik7XG5cbi8vIEFkZCBlYWNoIHN1YnNlY3Rpb24gdG8gdGhlIG1haW4gc2VjdGlvblxubWFpbi5hcHBlbmRDaGlsZChob21lKTtcbm1haW4uYXBwZW5kQ2hpbGQoYWJvdXQpO1xubWFpbi5hcHBlbmRDaGlsZChzdGFjayk7XG5tYWluLmFwcGVuZENoaWxkKHByb2plY3RzKTtcbm1haW4uYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbi8vIEFkZCBjb250ZW50IHRvIGVhY2ggc3Vic2VjdGlvblxuLy8gSG9tZVxuY29uc3QgbWFpblRleHQgPSBjcmVhdGVFbGVtZW50KFwiaDFcIiwgXCJtYWluLXRleHRcIik7XG5tYWluVGV4dC50ZXh0Q29udGVudCA9IFwiSGVsbG8hIEkgYW1cIjtcbmhvbWUuYXBwZW5kQ2hpbGQobWFpblRleHQpO1xuY29uc3QgbmV3TGluZTEgPSBjcmVhdGVFbGVtZW50KFwiYnJcIik7XG5tYWluVGV4dC5hcHBlbmRDaGlsZChuZXdMaW5lMSk7XG5jb25zdCBzcGFuTmFtZSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwibWFpbi10ZXh0LW5hbWVcIik7XG5zcGFuTmFtZS50ZXh0Q29udGVudCA9IFwiUmHDumwgSmltw6luZXpcIjtcbm1haW5UZXh0LmFwcGVuZENoaWxkKHNwYW5OYW1lKTtcbmNvbnN0IG5ld0xpbmUyID0gY3JlYXRlRWxlbWVudChcImJyXCIpO1xubWFpblRleHQuYXBwZW5kQ2hpbGQobmV3TGluZTIpO1xuY29uc3Qgc3BhblJvbGUgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcIm1haW4tdGV4dC1yb2xlXCIpO1xuc3BhblJvbGUudGV4dENvbnRlbnQgPSBcIkZ1bGwgU3RhY2sgRGV2ZWxvcGVyXCI7XG5tYWluVGV4dC5hcHBlbmRDaGlsZChzcGFuUm9sZSk7XG5cbmNvbnN0IE1lSW1hZ2UgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwiaG9tZS1pbWFnZVwiKTtcbk1lSW1hZ2UuY2xhc3NMaXN0LmFkZChcImhvbWUtaW1hZ2VcIik7XG5NZUltYWdlLnNyYyA9IE1lO1xuTWVJbWFnZS5hbHQgPSBcIk1lXCI7XG5ob21lLmFwcGVuZENoaWxkKE1lSW1hZ2UpO1xuXG4vLyBBYm91dFxuY29uc3QgYWJvdXRIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1oZWFkZXJcIiwgXCJhYm91dC1oZWFkZXJcIik7XG5jb25zdCBhYm91dEJvZHkgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1ib2R5XCIsIFwiYWJvdXQtYm9keVwiKTtcbmFib3V0LmFwcGVuZENoaWxkKGFib3V0SGVhZGVyKTtcbmFib3V0LmFwcGVuZENoaWxkKGFib3V0Qm9keSk7XG5cbmNvbnN0IGFib3V0SGVhZGVyTGluZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWhlYWRlci1saW5lXCIsIFwiYWJvdXQtaGVhZGVyLWxpbmVcIik7XG5hYm91dEhlYWRlci5hcHBlbmRDaGlsZChhYm91dEhlYWRlckxpbmUpO1xuY29uc3QgYWJvdXRIZWFkZXJUZXh0ID0gY3JlYXRlRWxlbWVudChcImgyXCIsIFwic2VjdGlvbi1oZWFkZXItdGV4dFwiLCBcImFib3V0LWhlYWRlci10ZXh0XCIpO1xuYWJvdXRIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCIwMi4gXCI7XG5jb25zdCBhYm91dEhlYWRlclRpdGxlID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJzZWN0aW9uLWhlYWRlci10aXRsZVwiLCBcImFib3V0LWhlYWRlci10aXRsZVwiKTtcbmFib3V0SGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IE1lXCI7XG5hYm91dEhlYWRlclRleHQuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkZXJUaXRsZSk7XG5hYm91dEhlYWRlci5hcHBlbmRDaGlsZChhYm91dEhlYWRlclRleHQpO1xuXG5jb25zdCBhYm91dEJvZHlJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJzZWN0aW9uLWJvZHktaW1hZ2VcIiwgXCJhYm91dC1ib2R5LWltYWdlXCIpO1xuYWJvdXRCb2R5SW1hZ2Uuc3JjID0gQWJvdXRCaWdJbWc7XG5hYm91dEJvZHlJbWFnZS5zcmNzZXQgPSBgJHtBYm91dFNtYWxsSW1nfSA2Njh3LCAke0Fib3V0QmlnSW1nfSA3NDN3YDtcbmFib3V0Qm9keUltYWdlLnNpemVzID0gXCIobWF4LXdpZHRoOiA4NzZweCkgNjY4cHgsIChtaW4td2lkdGg6IDg3N3B4KSA3NDNweFwiO1xuYWJvdXRCb2R5SW1hZ2UuYWx0ID0gXCJNZVwiO1xuYWJvdXRCb2R5LmFwcGVuZENoaWxkKGFib3V0Qm9keUltYWdlKTtcbmNvbnN0IGFib3V0Qm9keURpdlRleHQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1ib2R5LWRpdi10ZXh0XCIsIFwiYWJvdXQtYm9keS1kaXYtdGV4dFwiKTtcbmFib3V0Qm9keS5hcHBlbmRDaGlsZChhYm91dEJvZHlEaXZUZXh0KTtcbmNvbnN0IGFib3V0Qm9keVRleHQxID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJzZWN0aW9uLWJvZHktdGV4dFwiLCBcImFib3V0LWJvZHktdGV4dC0xXCIpO1xuYWJvdXRCb2R5VGV4dDEudGV4dENvbnRlbnQgPSBcIkhleSB0aGVyZSEgSSdtIFJhw7psLCBhbmQgSSB3YW50IHRvIHNoYXJlIGEgYml0IG9mIG15IHN0b3J5IHdpdGggeW91LlwiO1xuYWJvdXRCb2R5RGl2VGV4dC5hcHBlbmRDaGlsZChhYm91dEJvZHlUZXh0MSk7XG5jb25zdCBhYm91dEJvZHlUZXh0MiA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwic2VjdGlvbi1ib2R5LXRleHRcIiwgXCJhYm91dC1ib2R5LXRleHQtMlwiKTtcbmFib3V0Qm9keVRleHQyLnRleHRDb250ZW50ID0gXCJBYm91dCAyMCB5ZWFycyBhZ28sIEkgZ3JhZHVhdGVkIGluIENvbXB1dGVyIFNjaWVuY2UuIEFmdGVyIGxlYXZpbmcgdW5pdmVyc2l0eSwgSSBzcGVudCBzb21lIHRpbWUgd29ya2luZyBpbiB0ZWNoIGNvbXBhbmllcywgYnV0IHNvb24gZW5vdWdoLCBJIGp1bXBlZCBpbnRvIHRoZSBmYW1pbHkgYnVzaW5lc3MgdG8gaGVscCBpdCBncm93LiBGb3IgMTUgeWVhcnMsIEkgd29ya2VkIHNpZGUgYnkgc2lkZSB3aXRoIG15IGZhdGhlciBhbmQgYnJvdGhlciwgdGFja2xpbmcgdGhlIGNoYWxsZW5nZXMgdGhhdCBjb21lIHdpdGggbWFuYWdpbmcgeW91ciBvd24gY29tcGFueSBhbmQgbGVhZGluZyBhIHRlYW0uXCI7XG5hYm91dEJvZHlEaXZUZXh0LmFwcGVuZENoaWxkKGFib3V0Qm9keVRleHQyKTtcbmNvbnN0IGFib3V0Qm9keVRleHQzID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJzZWN0aW9uLWJvZHktdGV4dFwiLCBcImFib3V0LWJvZHktdGV4dC0zXCIpO1xuYWJvdXRCb2R5VGV4dDMudGV4dENvbnRlbnQgPSBcIldpdGggbXkgZmF0aGVyIHJldGlyZWQgYW5kIHRoZSBidXNpbmVzcyB3ZWxsLWVzdGFibGlzaGVkLCBteSBicm90aGVyIGFuZCBJIG1hZGUgdGhlIGRlY2lzaW9uIHRvIHNlbGwgaXQgYW5kIHRha2Ugb24gbmV3IGNoYWxsZW5nZXMuIEluIG15IGNhc2UsIHNvbWV0aGluZyBkZWVwIGRvd24gYWx3YXlzIHdhbnRlZCB0byByZXR1cm4gdG8gdGhlIHdvcmxkIG9mIElULCBzbyBJIGRlY2lkZWQgdG8gZ28gYWxsLWluIGFuZCBnZXQgYmFjayB1cCB0byBzcGVlZC5cIjtcbmFib3V0Qm9keURpdlRleHQuYXBwZW5kQ2hpbGQoYWJvdXRCb2R5VGV4dDMpO1xuY29uc3QgYWJvdXRCb2R5VGV4dDQgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInNlY3Rpb24tYm9keS10ZXh0XCIsIFwiYWJvdXQtYm9keS10ZXh0LTRcIik7XG5hYm91dEJvZHlUZXh0NC50ZXh0Q29udGVudCA9IFwiU2luY2UgdGhlbiwgSSd2ZSBiZWVuIGRpdmluZyBpbnRvIHRoZSBsYXRlc3QgdGVjaG5vbG9naWVzIGFuZCBtZXRob2RvbG9naWVzLCB0YWtpbmcgb24gcHJvamVjdHMgYW5kIG1ha2luZyB0aGUgbW9zdCBvZiB0aGVtLiBJJ3ZlIGFsd2F5cyBiZWVuIGtub3duIGZvciBteSBhZGFwdGFiaWxpdHksIHByb2JsZW0tc29sdmluZyBza2lsbHMsIGFuZCBteSBhYmlsaXR5IHRvIHdvcmsgZWZmZWN0aXZlbHkgd2l0aGluIGEgdGVhbS4gSSdtIG5vdCBhZnJhaWQgdG8gZW1icmFjZSBuZXcgY2hhbGxlbmdlcyBhbmQgSSBoYXZlIGEgc3Ryb25nIHBhc3Npb24gZm9yIHN0YXlpbmcgdXAtdG8tZGF0ZSB3aXRoIHRoZSBldmVyLWV2b2x2aW5nIHRlY2ggbGFuZHNjYXBlLlwiO1xuYWJvdXRCb2R5RGl2VGV4dC5hcHBlbmRDaGlsZChhYm91dEJvZHlUZXh0NCk7XG5jb25zdCBhYm91dEJvZHlUZXh0NSA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwic2VjdGlvbi1ib2R5LXRleHRcIiwgXCJhYm91dC1ib2R5LXRleHQtNVwiKTtcbmFib3V0Qm9keVRleHQ1LnRleHRDb250ZW50ID0gXCJJIHRocml2ZSBvbiBsZWFybmluZyBhbmQgYXBwbHlpbmcgdGhlIG1vc3Qgc3VjY2Vzc2Z1bCBwcmFjdGljZXMgb2YgdGhlIG1vbWVudCwgYWxsIHdoaWxlIHRhY2tsaW5nIHByb2plY3RzIGhlYWQtb24uIEl0J3MgYmVlbiBxdWl0ZSBhIGpvdXJuZXksIGFuZCBJJ20gZXhjaXRlZCB0byBicmluZyBteSB3ZWFsdGggb2YgZXhwZXJpZW5jZSwgY29tYmluZWQgd2l0aCBteSBkZWRpY2F0aW9uIHRvIGlubm92YXRpb24sIHRvIHlvdXIgdGVhbS4gTGV0J3MgY3JlYXRlIHNvbWUgYW1hemluZyB0ZWNoIHRvZ2V0aGVyIVwiO1xuYWJvdXRCb2R5RGl2VGV4dC5hcHBlbmRDaGlsZChhYm91dEJvZHlUZXh0NSk7XG5cbi8vIFN0YWNrXG5jb25zdCBzdGFja0hlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWhlYWRlclwiLCBcInN0YWNrLWhlYWRlclwiKTtcbmNvbnN0IHN0YWNrQm9keSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWJvZHlcIiwgXCJzdGFjay1ib2R5XCIpO1xuc3RhY2suYXBwZW5kQ2hpbGQoc3RhY2tIZWFkZXIpO1xuc3RhY2suYXBwZW5kQ2hpbGQoc3RhY2tCb2R5KTtcblxuY29uc3Qgc3RhY2tIZWFkZXJMaW5lID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNlY3Rpb24taGVhZGVyLWxpbmVcIiwgXCJzdGFjay1oZWFkZXItbGluZVwiKTtcbnN0YWNrSGVhZGVyLmFwcGVuZENoaWxkKHN0YWNrSGVhZGVyTGluZSk7XG5jb25zdCBzdGFja0hlYWRlclRleHQgPSBjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJzZWN0aW9uLWhlYWRlci10ZXh0XCIsIFwic3RhY2staGVhZGVyLXRleHRcIik7XG5zdGFja0hlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIjAzLiBcIjtcbmNvbnN0IHN0YWNrSGVhZGVyVGl0bGUgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcInNlY3Rpb24taGVhZGVyLXRpdGxlXCIsIFwic3RhY2staGVhZGVyLXRpdGxlXCIpO1xuc3RhY2tIZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiTXkgU2tpbGxzXCI7XG5zdGFja0hlYWRlclRleHQuYXBwZW5kQ2hpbGQoc3RhY2tIZWFkZXJUaXRsZSk7XG5zdGFja0hlYWRlci5hcHBlbmRDaGlsZChzdGFja0hlYWRlclRleHQpO1xuXG5jb25zdCBzdGFja1RhYmxlID0gY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlXCIsIFwic3RhY2stdGFibGVcIik7XG5zdGFja0JvZHkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZSk7XG5jb25zdCBzdGFja1RhYmxlSGVhZCA9IGNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1oZWFkXCIsIFwic3RhY2stdGFibGUtaGVhZFwiKTtcbnN0YWNrVGFibGUuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUhlYWQpO1xuY29uc3Qgc3RhY2tUYWJsZUhlYWRSb3cgPSBjcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtaGVhZC1yb3dcIiwgXCJzdGFjay10YWJsZS1oZWFkLXJvd1wiKTtcbnN0YWNrVGFibGVIZWFkLmFwcGVuZENoaWxkKHN0YWNrVGFibGVIZWFkUm93KTtcbmNvbnN0IHN0YWNrVGFibGVIZWFkQ29sMSA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1oZWFkLWNlbGxcIiwgXCJzdGFjay10YWJsZS1oZWFkLWNlbGwtMVwiKTtcbnN0YWNrVGFibGVIZWFkQ29sMS5zZXRBdHRyaWJ1dGUoXCJjb2xzcGFuXCIsIFwiMlwiKTtcbnN0YWNrVGFibGVIZWFkQ29sMS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlSGVhZFJvdy5hcHBlbmRDaGlsZChzdGFja1RhYmxlSGVhZENvbDEpO1xuY29uc3Qgc3RhY2tUYWJsZUhlYWRDb2wyID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWhlYWQtY2VsbFwiLCBcInN0YWNrLXRhYmxlLWhlYWQtY2VsbC0yXCIpO1xuc3RhY2tUYWJsZUhlYWRDb2wyLnRleHRDb250ZW50ID0gXCJCZWdpbm5lclwiO1xuc3RhY2tUYWJsZUhlYWRDb2wyLmNsYXNzTGlzdC5hZGQoXCJoaWRlLW9uLW1vYmlsZVwiKTtcbnN0YWNrVGFibGVIZWFkUm93LmFwcGVuZENoaWxkKHN0YWNrVGFibGVIZWFkQ29sMik7XG5jb25zdCBzdGFja1RhYmxlSGVhZENvbDMgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtaGVhZC1jZWxsXCIsIFwic3RhY2stdGFibGUtaGVhZC1jZWxsLTNcIik7XG5zdGFja1RhYmxlSGVhZENvbDMudGV4dENvbnRlbnQgPSBcIkVsZW1lbnRhcnlcIjtcbnN0YWNrVGFibGVIZWFkQ29sMy5jbGFzc0xpc3QuYWRkKFwiaGlkZS1vbi1tb2JpbGVcIik7XG5zdGFja1RhYmxlSGVhZFJvdy5hcHBlbmRDaGlsZChzdGFja1RhYmxlSGVhZENvbDMpO1xuY29uc3Qgc3RhY2tUYWJsZUhlYWRDb2w0ID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWhlYWQtY2VsbFwiLCBcInN0YWNrLXRhYmxlLWhlYWQtY2VsbC00XCIpO1xuc3RhY2tUYWJsZUhlYWRDb2w0LnRleHRDb250ZW50ID0gXCJJbnRlcm1lZGlhdGVcIjtcbnN0YWNrVGFibGVIZWFkQ29sNC5jbGFzc0xpc3QuYWRkKFwiaGlkZS1vbi1tb2JpbGVcIik7XG5zdGFja1RhYmxlSGVhZFJvdy5hcHBlbmRDaGlsZChzdGFja1RhYmxlSGVhZENvbDQpO1xuY29uc3Qgc3RhY2tUYWJsZUhlYWRDb2w1ID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWhlYWQtY2VsbFwiLCBcInN0YWNrLXRhYmxlLWhlYWQtY2VsbC01XCIpO1xuc3RhY2tUYWJsZUhlYWRDb2w1LnRleHRDb250ZW50ID0gXCJBZHZhbmNlZFwiO1xuc3RhY2tUYWJsZUhlYWRDb2w1LmNsYXNzTGlzdC5hZGQoXCJoaWRlLW9uLW1vYmlsZVwiKTtcbnN0YWNrVGFibGVIZWFkUm93LmFwcGVuZENoaWxkKHN0YWNrVGFibGVIZWFkQ29sNSk7XG5jb25zdCBzdGFja1RhYmxlSGVhZENvbDYgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtaGVhZC1jZWxsXCIsIFwic3RhY2stdGFibGUtaGVhZC1jZWxsLTZcIik7XG5zdGFja1RhYmxlSGVhZENvbDYudGV4dENvbnRlbnQgPSBcIkV4cGVydFwiO1xuc3RhY2tUYWJsZUhlYWRDb2w2LmNsYXNzTGlzdC5hZGQoXCJoaWRlLW9uLW1vYmlsZVwiKTtcbnN0YWNrVGFibGVIZWFkUm93LmFwcGVuZENoaWxkKHN0YWNrVGFibGVIZWFkQ29sNik7XG5jb25zdCBzdGFja1RhYmxlQm9keSA9IGNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5XCIsIFwic3RhY2stdGFibGUtYm9keVwiKTtcbnN0YWNrVGFibGUuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHkpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlSb3cxID0gY3JlYXRlRWxlbWVudChcInRyXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktcm93XCIsIFwic3RhY2stdGFibGUtYm9keS1yb3dcIik7XG5zdGFja1RhYmxlQm9keS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keVJvdzEpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlIZWFkMSA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWhlYWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWhlYWQtMVwiKTtcbnN0YWNrVGFibGVCb2R5SGVhZDEudGV4dENvbnRlbnQgPSBcIkxhbmd1YWdlc1wiO1xuc3RhY2tUYWJsZUJvZHlIZWFkMS5zZXRBdHRyaWJ1dGUoXCJyb3dzcGFuXCIsIFwiNFwiKTtcbnN0YWNrVGFibGVCb2R5SGVhZDEuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJyb3dncm91cFwiKTtcbnN0YWNrVGFibGVCb2R5Um93MS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUhlYWQxKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5SGVhZDIgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1oZWFkXCIsIFwic3RhY2stdGFibGUtYm9keS1oZWFkLTJcIik7XG5zdGFja1RhYmxlQm9keUhlYWQyLnRleHRDb250ZW50ID0gXCJIVE1MXCI7XG5zdGFja1RhYmxlQm9keUhlYWQyLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3cxLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDIpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTFcIik7XG5zdGFja1RhYmxlQm9keUNlbGwxLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93MS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwxKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDIgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0yXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMi50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzEuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMik7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwzID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtM1wiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDMudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3cxLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDMpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsNCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTRcIik7XG5zdGFja1RhYmxlQm9keUNlbGw0LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93MS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw0KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDRiaXMgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTQxXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsNGJpcy50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzEuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsNGJpcyk7XG5jb25zdCBzdGFja1RhYmxlQm9keVJvdzIgPSBjcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1yb3dcIiwgXCJzdGFjay10YWJsZS1ib2R5LXJvd1wiKTtcbnN0YWNrVGFibGVCb2R5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Um93Mik7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQzID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktaGVhZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktaGVhZC0zXCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkMy50ZXh0Q29udGVudCA9IFwiQ1NTXCI7XG5zdGFja1RhYmxlQm9keUhlYWQzLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3cyLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDMpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsNSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTVcIik7XG5zdGFja1RhYmxlQm9keUNlbGw1LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Mi5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw1KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDYgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC02XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsNi50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzIuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsNik7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGw3ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtN1wiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDcudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3cyLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDcpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsOCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLThcIik7XG5zdGFja1RhYmxlQm9keUNlbGw4LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Mi5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw4KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDgxID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC04MVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDgxLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Mi5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw4MSk7XG5jb25zdCBzdGFja1RhYmxlQm9keVJvdzMgPSBjcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1yb3dcIiwgXCJzdGFjay10YWJsZS1ib2R5LXJvd1wiKTtcbnN0YWNrVGFibGVCb2R5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Um93Myk7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQ0ID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktaGVhZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktaGVhZC00XCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkNC50ZXh0Q29udGVudCA9IFwiSmF2YVNjcmlwdFwiO1xuc3RhY2tUYWJsZUJvZHlIZWFkNC5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcInJvd1wiKTtcbnN0YWNrVGFibGVCb2R5Um93My5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUhlYWQ0KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDkgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC05XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsOS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzMuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsOSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwxMCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTEwXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMTAudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3czLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDEwKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDExID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMTFcIik7XG5zdGFja1RhYmxlQm9keUNlbGwxMS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzMuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMTEpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMTIgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0xMlwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDEyLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93My5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwxMik7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwxMjEgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTEyMVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDEyMS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzMuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMTIxKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Um93NCA9IGNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LXJvd1wiLCBcInN0YWNrLXRhYmxlLWJvZHktcm93XCIpO1xuc3RhY2tUYWJsZUJvZHkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlSb3c0KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5SGVhZDUgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1oZWFkXCIsIFwic3RhY2stdGFibGUtYm9keS1oZWFkLTVcIik7XG5zdGFja1RhYmxlQm9keUhlYWQ1LnRleHRDb250ZW50ID0gXCJQeXRob25cIjtcbnN0YWNrVGFibGVCb2R5SGVhZDUuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJyb3dcIik7XG5zdGFja1RhYmxlQm9keVJvdzQuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlIZWFkNSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwxMyA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTEzXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMTMudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c0LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDEzKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDE0ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMTRcIik7XG5zdGFja1RhYmxlQm9keUNlbGwxNC50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzQuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMTQpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMTUgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0xNVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDE1LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93NC5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwxNSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwxNiA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMTZcIik7XG5zdGFja1RhYmxlQm9keUNlbGwxNi50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzQuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMTYpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMTcgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTE3XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMTcudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c0LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDE3KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Um93NSA9IGNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LXJvd1wiLCBcInN0YWNrLXRhYmxlLWJvZHktcm93XCIpO1xuc3RhY2tUYWJsZUJvZHkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlSb3c1KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5SGVhZDYgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1oZWFkXCIsIFwic3RhY2stdGFibGUtYm9keS1oZWFkLTZcIik7XG5zdGFja1RhYmxlQm9keUhlYWQ2LnRleHRDb250ZW50ID0gXCJGcmFtZXdvcmtzIC8gTGlicmFyaWVzXCI7XG5zdGFja1RhYmxlQm9keUhlYWQ2LnNldEF0dHJpYnV0ZShcInJvd3NwYW5cIiwgXCIyXCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkNi5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcInJvd2dyb3VwXCIpO1xuc3RhY2tUYWJsZUJvZHlSb3c1LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDYpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlIZWFkNyA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWhlYWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWhlYWQtN1wiKTtcbnN0YWNrVGFibGVCb2R5SGVhZDcudGV4dENvbnRlbnQgPSBcIlJlYWN0XCI7XG5zdGFja1RhYmxlQm9keUhlYWQ3LnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3c1LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDcpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMTggPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0xOFwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDE4LmNsYXNzTGlzdC5hZGQoXCJmcmFtZXdvcmtzXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMTgudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c1LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDE4KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDE5ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0xOVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDE5LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93NS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwxOSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwyMCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMjBcIik7XG5zdGFja1RhYmxlQm9keUNlbGwyMC50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzUuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMjApO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMjEgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTIxXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMjEudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c1LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDIxKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDIyID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0yMlwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDIyLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93NS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwyMik7XG5jb25zdCBzdGFja1RhYmxlQm9keVJvdzYgPSBjcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1yb3dcIiwgXCJzdGFjay10YWJsZS1ib2R5LXJvd1wiKTtcbnN0YWNrVGFibGVCb2R5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Um93Nik7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQ4ID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktaGVhZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktaGVhZC04XCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkOC50ZXh0Q29udGVudCA9IFwiTm9kZUpTXCI7XG5zdGFja1RhYmxlQm9keUhlYWQ4LnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3c2LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDgpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMjMgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0yM1wiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDIzLmNsYXNzTGlzdC5hZGQoXCJmcmFtZXdvcmtzXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMjMudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c2LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDIzKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDI0ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0yNFwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDI0LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Ni5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwyNCk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwyNSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMjVcIik7XG5zdGFja1RhYmxlQm9keUNlbGwyNS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzYuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMjUpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMjYgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTI2XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMjYudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c2LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDI2KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDI3ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0yN1wiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDI3LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Ni5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwyNyk7XG5jb25zdCBzdGFja1RhYmxlQm9keVJvdzcgPSBjcmVhdGVFbGVtZW50KFwidHJcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1yb3dcIiwgXCJzdGFjay10YWJsZS1ib2R5LXJvd1wiKTtcbnN0YWNrVGFibGVCb2R5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Um93Nyk7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQ5ID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktaGVhZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktaGVhZC05XCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkOS50ZXh0Q29udGVudCA9IFwiVG9vbHNcIjtcbnN0YWNrVGFibGVCb2R5SGVhZDkuc2V0QXR0cmlidXRlKFwicm93c3BhblwiLCBcIjNcIik7XG5zdGFja1RhYmxlQm9keUhlYWQ5LnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93Z3JvdXBcIik7XG5zdGFja1RhYmxlQm9keVJvdzcuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlIZWFkOSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQxMCA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWhlYWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWhlYWQtMTBcIik7XG5zdGFja1RhYmxlQm9keUhlYWQxMC50ZXh0Q29udGVudCA9IFwiR2l0XCI7XG5zdGFja1RhYmxlQm9keUhlYWQxMC5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcInJvd1wiKTtcbnN0YWNrVGFibGVCb2R5Um93Ny5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUhlYWQxMCk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwyOCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTI4XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMjgudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c3LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDI4KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDI5ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMjlcIik7XG5zdGFja1RhYmxlQm9keUNlbGwyOS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzcuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMjkpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMzAgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0zMFwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDMwLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93Ny5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwzMCk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwzMSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMzFcIik7XG5zdGFja1RhYmxlQm9keUNlbGwzMS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzcuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMzEpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMzIgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTMyXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMzIudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c3LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDMyKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Um93OCA9IGNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LXJvd1wiLCBcInN0YWNrLXRhYmxlLWJvZHktcm93XCIpO1xuc3RhY2tUYWJsZUJvZHkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlSb3c4KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5SGVhZDExID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktaGVhZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktaGVhZC0xMVwiKTtcbnN0YWNrVGFibGVCb2R5SGVhZDExLnRleHRDb250ZW50ID0gXCJOcG1cIjtcbnN0YWNrVGFibGVCb2R5SGVhZDExLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3c4LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDExKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDMzID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMzNcIik7XG5zdGFja1RhYmxlQm9keUNlbGwzMy50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzguYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMzMpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMzQgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0zNFwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDM0LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93OC5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwzNCk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwzNSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTM1XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMzUudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c4LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDM1KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDM2ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0zNlwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDM2LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93OC5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwzNik7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwzNyA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMzdcIik7XG5zdGFja1RhYmxlQm9keUNlbGwzNy50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzguYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMzcpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlSb3c5ID0gY3JlYXRlRWxlbWVudChcInRyXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktcm93XCIsIFwic3RhY2stdGFibGUtYm9keS1yb3dcIik7XG5zdGFja1RhYmxlQm9keS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keVJvdzkpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlIZWFkMTIgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1oZWFkXCIsIFwic3RhY2stdGFibGUtYm9keS1oZWFkLTEyXCIpO1xuc3RhY2tUYWJsZUJvZHlIZWFkMTIudGV4dENvbnRlbnQgPSBcIldlYnBhY2tcIjtcbnN0YWNrVGFibGVCb2R5SGVhZDEyLnNldEF0dHJpYnV0ZShcInNjb3BlXCIsIFwicm93XCIpO1xuc3RhY2tUYWJsZUJvZHlSb3c5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDEyKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDM4ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtMzhcIik7XG5zdGFja1RhYmxlQm9keUNlbGwzOC50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMzgpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMzkgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0zOVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDM5LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93OS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGwzOSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGw0MCA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZmlsbGVkXCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTQwXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsNDAudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3c5LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDQwKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDQxID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC00MVwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDQxLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93OS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw0MSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGw0MiA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHlcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtNDJcIik7XG5zdGFja1RhYmxlQm9keUNlbGw0Mi50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsNDIpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlSb3cxMCA9IGNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LXJvd1wiLCBcInN0YWNrLXRhYmxlLWJvZHktcm93XCIpO1xuc3RhY2tUYWJsZUJvZHkuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlSb3cxMCk7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQxMyA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWhlYWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWhlYWQtMTNcIik7XG5zdGFja1RhYmxlQm9keUhlYWQxMy50ZXh0Q29udGVudCA9IFwiVGVzdGluZ1wiO1xuc3RhY2tUYWJsZUJvZHlIZWFkMTMuc2V0QXR0cmlidXRlKFwicm93c3BhblwiLCBcIjFcIik7XG5zdGFja1RhYmxlQm9keUhlYWQxMy5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcInJvd2dyb3VwXCIpO1xuc3RhY2tUYWJsZUJvZHlSb3cxMC5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUhlYWQxMyk7XG5jb25zdCBzdGFja1RhYmxlQm9keUhlYWQxNCA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWhlYWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWhlYWQtMTRcIik7XG5zdGFja1RhYmxlQm9keUhlYWQxNC50ZXh0Q29udGVudCA9IFwiSmVzdFwiO1xuc3RhY2tUYWJsZUJvZHlIZWFkMTQuc2V0QXR0cmlidXRlKFwic2NvcGVcIiwgXCJyb3dcIik7XG5zdGFja1RhYmxlQm9keVJvdzEwLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5SGVhZDE0KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDQzID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtNDNcIik7XG5zdGFja1RhYmxlQm9keUNlbGw0My50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzEwLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDQzKTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDQ0ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtNDRcIik7XG5zdGFja1RhYmxlQm9keUNlbGw0NC50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzEwLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDQ0KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDQ1ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWRcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtNDVcIik7XG5zdGFja1RhYmxlQm9keUNlbGw0NS50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlQm9keVJvdzEwLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDQ1KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Q2VsbDQ2ID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eVwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC00NlwiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDQ2LnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVCb2R5Um93MTAuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsNDYpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsNDcgPSBjcmVhdGVFbGVtZW50KFwidGRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5XCIsIFwic3RhY2stdGFibGUtYm9keS1jZWxsLTQ3XCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsNDcudGV4dENvbnRlbnQgPSBcIlwiO1xuc3RhY2tUYWJsZUJvZHlSb3cxMC5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keUNlbGw0Nyk7XG5cbi8vIFByb2plY3RzIG1haW4gY29udGFpbmVyXG5jb25zdCBwcm9qZWN0c0hlYWRlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWhlYWRlclwiLCBcInByb2plY3RzLWhlYWRlclwiKTtcbmNvbnN0IHByb2plY3RzQm9keSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWJvZHlcIiwgXCJwcm9qZWN0cy1ib2R5XCIpO1xucHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpO1xucHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdHNCb2R5KTtcblxuY29uc3QgcHJvamVjdHNIZWFkZXJMaW5lID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNlY3Rpb24taGVhZGVyLWxpbmVcIiwgXCJwcm9qZWN0cy1oZWFkZXItbGluZVwiKTtcbnByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyTGluZSk7XG5jb25zdCBwcm9qZWN0c0hlYWRlclRleHQgPSBjcmVhdGVFbGVtZW50KFwiaDJcIiwgXCJzZWN0aW9uLWhlYWRlci10ZXh0XCIsIFwicHJvamVjdHMtaGVhZGVyLXRleHRcIik7XG5wcm9qZWN0c0hlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIjA0LiBcIjtcbmNvbnN0IHByb2plY3RzSGVhZGVyVGl0bGUgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcInNlY3Rpb24taGVhZGVyLXRpdGxlXCIsIFwicHJvamVjdHMtaGVhZGVyLXRpdGxlXCIpO1xucHJvamVjdHNIZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiVGhpbmdzIEkndmUgQnVpbHRcIjtcbnByb2plY3RzSGVhZGVyVGV4dC5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlclRpdGxlKTtcbnByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyVGV4dCk7XG5cbmNvbnN0IHByb2plY3RzQm9keURpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWJvZHktZGl2XCIsIFwicHJvamVjdHMtYm9keS1kaXZcIik7XG5wcm9qZWN0c0JvZHkuYXBwZW5kQ2hpbGQocHJvamVjdHNCb2R5RGl2KTtcblxuLy8gRnVuY3Rpb24gdGhhdCByZWNlaXZlcyBkYXRhIGZyb20gdGhlIEpTT04gZmlsZSBhbmQgY3JlYXRlcyB0aGUgcHJvamVjdHNcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1kaXZcIik7XG4gICAgcHJvamVjdHNCb2R5RGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICAgIGNvbnN0IHByb2plY3REaXZUb3AgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1kaXYtdG9wXCIpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdlRvcCk7XG4gICAgY29uc3QgcHJvamVjdERpdlRvcExlZnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1kaXYtdG9wLWxlZnRcIik7XG4gICAgcHJvamVjdERpdlRvcC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2VG9wTGVmdCk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gY3JlYXRlRWxlbWVudChcImgzXCIsIFwicHJvamVjdC10aXRsZVwiKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHByb2plY3REaXZUb3BMZWZ0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgY29uc3QgcHJvamVjdFN1YnRpdGxlID0gY3JlYXRlRWxlbWVudChcImg0XCIsIFwicHJvamVjdC1zdWJ0aXRsZVwiKTtcbiAgICBwcm9qZWN0U3VidGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnN1YnRpdGxlO1xuICAgIHByb2plY3REaXZUb3BMZWZ0LmFwcGVuZENoaWxkKHByb2plY3RTdWJ0aXRsZSk7XG4gICAgY29uc3QgcHJvamVjdERpdlRvcFJpZ2h0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb2plY3QtZGl2LXRvcC1yaWdodFwiKTtcbiAgICBwcm9qZWN0RGl2VG9wLmFwcGVuZENoaWxkKHByb2plY3REaXZUb3BSaWdodCk7XG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIpO1xuICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XG4gICAgcHJvamVjdERpdlRvcFJpZ2h0LmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG4gICAgY29uc3QgcHJvamVjdExpbmtCdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcInByb2plY3QtbGluay1idXR0b25cIik7XG4gICAgcHJvamVjdExpbmtCdXR0b24uaHJlZiA9IHByb2plY3QubGluaztcbiAgICBwcm9qZWN0TGlua0J1dHRvbi50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIHByb2plY3RMaW5rQnV0dG9uLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICAgIHByb2plY3RMaW5rQnV0dG9uLnRleHRDb250ZW50ID0gXCJWaWV3IExpdmVcIjtcbiAgICBwcm9qZWN0RGl2VG9wUmlnaHQuYXBwZW5kQ2hpbGQocHJvamVjdExpbmtCdXR0b24pO1xuICAgIGNvbnN0IHByb2plY3REaXZCb3R0b20gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicHJvamVjdC1kaXYtYm90dG9tXCIpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdkJvdHRvbSk7XG4gICAgXG4gICAgLy8gRGluYW1pY2FsbHkgbG9hZGluZyB0aGUgaW1hZ2VzXG4gICAgbG9hZEltYWdlKHByb2plY3QuaW1hZ2UpLnRoZW4oc3JjID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHByb2plY3RJbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIHByb2plY3RJbWFnZS5hbHQgPSBwcm9qZWN0LmFsdDtcbiAgICAgICAgcHJvamVjdEltYWdlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWltYWdlXCIpO1xuICAgICAgICBwcm9qZWN0RGl2Qm90dG9tLmFwcGVuZENoaWxkKHByb2plY3RJbWFnZSk7XG4gICAgfSk7XG59XG5cbi8vIEZldGNoaW5nIHRoZSBkYXRhIGZyb20gdGhlIEpTT04gZmlsZVxucHJvamVjdHNEYXRhLnByb2plY3RzLmZvckVhY2goY3JlYXRlUHJvamVjdCk7XG5cbi8vIENvbnRhY3RcbmNvbnN0IGNvbnRhY3RIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1oZWFkZXJcIiwgXCJjb250YWN0LWhlYWRlclwiKTtcbmNvbnN0IGNvbnRhY3RCb2R5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNlY3Rpb24tYm9keVwiLCBcImNvbnRhY3QtYm9keVwiKTtcbmNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG5jb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RCb2R5KTtcblxuY29uc3QgY29udGFjdEhlYWRlckxpbmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1oZWFkZXItbGluZVwiLCBcImNvbnRhY3QtaGVhZGVyLWxpbmVcIik7XG5jb250YWN0SGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXJMaW5lKTtcbmNvbnN0IGNvbnRhY3RIZWFkZXJUZXh0ID0gY3JlYXRlRWxlbWVudChcImgyXCIsIFwic2VjdGlvbi1oZWFkZXItdGV4dFwiLCBcImNvbnRhY3QtaGVhZGVyLXRleHRcIik7XG5jb250YWN0SGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiMDUuIFwiO1xuY29uc3QgY29udGFjdEhlYWRlclRpdGxlID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJzZWN0aW9uLWhlYWRlci10aXRsZVwiLCBcImNvbnRhY3QtaGVhZGVyLXRpdGxlXCIpO1xuY29udGFjdEhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJHZXQgSW4gVG91Y2hcIjtcbmNvbnRhY3RIZWFkZXJUZXh0LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXJUaXRsZSk7XG5jb250YWN0SGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXJUZXh0KTtcblxuY29uc3QgY29udGFjdEJvZHlUb3AgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY29udGFjdC1ib2R5LXRvcFwiKTtcbmNvbnRhY3RCb2R5LmFwcGVuZENoaWxkKGNvbnRhY3RCb2R5VG9wKTtcbmNvbnN0IGNvbnRhY3RCb2R5VGV4dDEgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcImNvbnRhY3QtYm9keS10ZXh0XCIpO1xuY29udGFjdEJvZHlUZXh0MS50ZXh0Q29udGVudCA9IFwiSSdtIGN1cnJlbnRseSBsb29raW5nIGZvciBuZXcgb3Bwb3J0dW5pdGllcywgYm90aCBmcmVlbGFuY2UgYW5kIGZ1bGwtdGltZS4gSWYgeW91J2QgbGlrZSB0byBnZXQgaW4gdG91Y2gsIHlvdSBjYW4gY29udGFjdCBtZSB2aWEgdGhlIGZvcm0gYmVsb3cuIFlvdSBjYW4gYWxzbyByZWFjaCBvdXQgdG8gbWUgb24gU29jaWFsIE5ldHdvcmtzLlwiO1xuY29udGFjdEJvZHlUb3AuYXBwZW5kQ2hpbGQoY29udGFjdEJvZHlUZXh0MSk7XG5jb25zdCBjb250YWN0Qm9keVRleHQyID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJjb250YWN0LWJvZHktdGV4dFwiKTtcbmNvbnRhY3RCb2R5VGV4dDIudGV4dENvbnRlbnQgPSBcIkknbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgcG9zc2libGUhXCI7XG5jb250YWN0Qm9keVRvcC5hcHBlbmRDaGlsZChjb250YWN0Qm9keVRleHQyKTtcbmNvbnN0IGNvbnRhY3RCb2R5Qm90dG9tID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNvbnRhY3QtYm9keS1ib3R0b21cIik7XG5jb250YWN0Qm9keS5hcHBlbmRDaGlsZChjb250YWN0Qm9keUJvdHRvbSk7XG5jb25zdCBjb250YWN0Qm9keUZvcm0gPSBjcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBcImNvbnRhY3QtYm9keS1mb3JtXCIpO1xuY29udGFjdEJvZHlCb3R0b20uYXBwZW5kQ2hpbGQoY29udGFjdEJvZHlGb3JtKTtcbmNvbnN0IGNvbnRhY3RCb2R5U29jaWFsID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNvbnRhY3QtYm9keS1zb2NpYWxcIik7XG5jb250YWN0Qm9keUJvdHRvbS5hcHBlbmRDaGlsZChjb250YWN0Qm9keVNvY2lhbCk7XG5jb25zdCBsaW5rZWRJbkxpbmsgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcImNvbnRhY3QtYm9keS1zb2NpYWwtbGlua1wiKTtcbmxpbmtlZEluTGluay5ocmVmID0gXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcmF1bC1qaW1lbmV6LWZlcm5hbmRlei9cIjtcbmxpbmtlZEluTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xubGlua2VkSW5MaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuY29udGFjdEJvZHlTb2NpYWwuYXBwZW5kQ2hpbGQobGlua2VkSW5MaW5rKTtcbmNvbnN0IGxpbmtlZEluSW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcInNvY2lhbC1pbWdcIik7XG5saW5rZWRJbkltZy5zcmMgPSBMaW5rZWRJbjtcbmxpbmtlZEluSW1nLmFsdCA9IFwiTGlua2VkSW5cIjtcbmxpbmtlZEluTGluay5hcHBlbmRDaGlsZChsaW5rZWRJbkltZyk7XG5jb25zdCBpbnN0YWdyYW1MaW5rID0gY3JlYXRlRWxlbWVudChcImFcIiwgXCJjb250YWN0LWJvZHktc29jaWFsLWxpbmtcIik7XG5pbnN0YWdyYW1MaW5rLmhyZWYgPSBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcmF1bGppbWVuZXpmZXJuYW5kZXovXCI7XG5pbnN0YWdyYW1MaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5pbnN0YWdyYW1MaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuY29udGFjdEJvZHlTb2NpYWwuYXBwZW5kQ2hpbGQoaW5zdGFncmFtTGluayk7XG5jb25zdCBpbnN0YWdyYW1JbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwic29jaWFsLWltZ1wiKTtcbmluc3RhZ3JhbUltZy5zcmMgPSBJbnN0YWdyYW07XG5pbnN0YWdyYW1JbWcuYWx0ID0gXCJJbnN0YWdyYW1cIjtcbmluc3RhZ3JhbUxpbmsuYXBwZW5kQ2hpbGQoaW5zdGFncmFtSW1nKTtcbmNvbnN0IGdpdGh1YkxpbmsgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcImNvbnRhY3QtYm9keS1zb2NpYWwtbGlua1wiKTtcbmdpdGh1YkxpbmsuaHJlZiA9IFwiXCJcbmdpdGh1YkxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbmdpdGh1YkxpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5jb250YWN0Qm9keVNvY2lhbC5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbmNvbnN0IGdpdGh1YkltZyA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJzb2NpYWwtaW1nXCIpO1xuZ2l0aHViSW1nLnNyYyA9IEdpdEh1YjtcbmdpdGh1YkltZy5hbHQgPSBcIkdpdEh1YlwiO1xuZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJbWcpO1xuY29uc3QgeExpbmsgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcImNvbnRhY3QtYm9keS1zb2NpYWwtbGlua1wiKTtcbnhMaW5rLmhyZWYgPSBcImh0dHBzOi8vd3d3LnhpbmcuY29tL3Byb2ZpbGUvUmF1bF9KaW1lbmV6RmVybmFuZGV6L2N2XCI7XG54TGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xueExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5jb250YWN0Qm9keVNvY2lhbC5hcHBlbmRDaGlsZCh4TGluayk7XG5jb25zdCB4SW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcInNvY2lhbC1pbWdcIik7XG54SW1nLnNyYyA9IFg7XG54SW1nLmFsdCA9IFwiWFwiO1xueExpbmsuYXBwZW5kQ2hpbGQoeEltZyk7XG5jb25zdCBtYWlsTGluayA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIFwiY29udGFjdC1ib2R5LXNvY2lhbC1saW5rXCIpO1xubWFpbExpbmsuaHJlZiA9IFwibWFpbHRvOnJqYmFyY29AZ21haWwuY29tXCI7XG5tYWlsTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xubWFpbExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5jb250YWN0Qm9keVNvY2lhbC5hcHBlbmRDaGlsZChtYWlsTGluayk7XG5jb25zdCBtYWlsSW1nID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcInNvY2lhbC1pbWdcIik7XG5tYWlsSW1nLnNyYyA9IE1haWw7XG5tYWlsSW1nLmFsdCA9IFwiTWFpbFwiO1xubWFpbExpbmsuYXBwZW5kQ2hpbGQobWFpbEltZyk7XG5jb25zdCBjb250YWN0Qm9keUZvcm1EaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY29udGFjdC1ib2R5LWZvcm0tZGl2XCIpO1xuY29udGFjdEJvZHlGb3JtLmFwcGVuZENoaWxkKGNvbnRhY3RCb2R5Rm9ybURpdik7XG5jb25zdCBuYW1lRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZvcm0tZmllbGQtZGl2XCIsIFwibmFtZS1kaXZcIik7XG5jb250YWN0Qm9keUZvcm1EaXYuYXBwZW5kQ2hpbGQobmFtZURpdik7XG5jb25zdCBuYW1lTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJjb250YWN0LWJvZHktZm9ybS1sYWJlbFwiLCBcIm5hbWUtbGFiZWxcIik7XG5uYW1lTGFiZWwuZm9yID0gXCJuYW1lXCI7XG5uYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWVcIjtcbm5hbWVEaXYuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbmNvbnN0IG5hbWVJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcImNvbnRhY3QtYm9keS1mb3JtLWlucHV0XCIsIFwibmFtZS1pbnB1dFwiKTtcbm5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5uYW1lSW5wdXQuaWQgPSBcIm5hbWVcIjtcbm5hbWVJbnB1dC5uYW1lID0gXCJuYW1lXCI7XG5uYW1lRGl2LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5jb25zdCBlbWFpbERpdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmb3JtLWZpZWxkLWRpdlwiLCBcImVtYWlsLWRpdlwiKTtcbmNvbnRhY3RCb2R5Rm9ybURpdi5hcHBlbmRDaGlsZChlbWFpbERpdik7XG5jb25zdCBlbWFpbExhYmVsID0gY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIFwiY29udGFjdC1ib2R5LWZvcm0tbGFiZWxcIiwgXCJlbWFpbC1sYWJlbFwiKTtcbmVtYWlsTGFiZWwuZm9yID0gXCJlbWFpbFwiO1xuZW1haWxMYWJlbC50ZXh0Q29udGVudCA9IFwiRW1haWxcIjtcbmVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuY29uc3QgZW1haWxJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBcImNvbnRhY3QtYm9keS1mb3JtLWlucHV0XCIsIFwiZW1haWwtaW5wdXRcIik7XG5lbWFpbElucHV0LnR5cGUgPSBcImVtYWlsXCI7XG5lbWFpbElucHV0LmlkID0gXCJlbWFpbFwiO1xuZW1haWxJbnB1dC5uYW1lID0gXCJlbWFpbFwiO1xuZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG5jb25zdCBtZXNzYWdlRGl2ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZvcm0tZmllbGQtZGl2XCIsIFwibWVzc2FnZS1kaXZcIik7XG5jb250YWN0Qm9keUZvcm1EaXYuYXBwZW5kQ2hpbGQobWVzc2FnZURpdik7XG5jb25zdCBtZXNzYWdlTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgXCJjb250YWN0LWJvZHktZm9ybS1sYWJlbFwiLCBcIm1lc3NhZ2UtbGFiZWxcIik7XG5tZXNzYWdlTGFiZWwuZm9yID0gXCJtZXNzYWdlXCI7XG5tZXNzYWdlTGFiZWwudGV4dENvbnRlbnQgPSBcIk1lc3NhZ2VcIjtcbm1lc3NhZ2VEaXYuYXBwZW5kQ2hpbGQobWVzc2FnZUxhYmVsKTtcbmNvbnN0IG1lc3NhZ2VUZXh0YXJlYSA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCBcImNvbnRhY3QtYm9keS1mb3JtLXRleHRhcmVhXCIsIFwibWVzc2FnZS10ZXh0YXJlYVwiKTtcbm1lc3NhZ2VUZXh0YXJlYS5pZCA9IFwibWVzc2FnZVwiO1xubWVzc2FnZVRleHRhcmVhLm5hbWUgPSBcIm1lc3NhZ2VcIjtcbm1lc3NhZ2VUZXh0YXJlYS5yb3dzID0gXCI1XCI7XG5tZXNzYWdlRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2VUZXh0YXJlYSk7XG5jb25zdCBjb250YWN0Qm9keUZvcm1CdXR0b24gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiY29udGFjdC1ib2R5LWZvcm0tYnV0dG9uXCIpO1xuY29udGFjdEJvZHlGb3JtQnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuY29udGFjdEJvZHlGb3JtQnV0dG9uLnRleHRDb250ZW50ID0gXCJTZW5kIE1lc3NhZ2VcIjtcbmNvbnRhY3RCb2R5Rm9ybURpdi5hcHBlbmRDaGlsZChjb250YWN0Qm9keUZvcm1CdXR0b24pO1xuXG4vLyBDcmVhdGUgdGhlIGNyZWRpdHMgYW5kIGFwcGVuZCB0aGVtIHRvIHRoZSBmb290ZXJcbmNvbnN0IGNyZWRpdHMgPSBjcmVhdGVFbGVtZW50KFwicFwiLFwiY3JlZGl0c1wiLG51bGwpXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcXVvdGVzXG5jcmVkaXRzLmlubmVySFRNTCA9ICdDcmVhdGVkIGJ5IFJBw5pMIEpJTcOJTkVaLiBGb2xsb3cgbXkgd29yayBvbiBHaXRIdWI6IDxicj48YnI+PGEgY2xhc3M9XCJnaXRodWItbGlua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmVyZWdvcm5cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PHN2ZyBjbGFzcz1cImdpdGh1Yi1pY29uXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCAwQzMuNTggMCAwIDMuNTggMCA4YzAgMy41NCAyLjI5IDYuNTMgNS40NyA3LjU5LjQuMDcuNTUtLjE3LjU1LS4zOCAwLS4xOS0uMDEtLjgyLS4wMS0xLjQ5LTIuMDEuMzctMi41My0uNDktMi42OS0uOTQtLjA5LS4yMy0uNDgtLjk0LS44Mi0xLjEzLS4yOC0uMTUtLjY4LS41Mi0uMDEtLjUzLjYzLS4wMSAxLjA4LjU4IDEuMjMuODIuNzIgMS4yMSAxLjg3Ljg3IDIuMzMuNjYuMDctLjUyLjI4LS44Ny41MS0xLjA3LTEuNzgtLjItMy42NC0uODktMy42NC0zLjk1IDAtLjg3LjMxLTEuNTkuODItMi4xNS0uMDgtLjItLjM2LTEuMDIuMDgtMi4xMiAwIDAgLjY3LS4yMSAyLjIuODIuNjQtLjE4IDEuMzItLjI3IDItLjI3LjY4IDAgMS4zNi4wOSAyIC4yNyAxLjUzLTEuMDQgMi4yLS44MiAyLjItLjgyLjQ0IDEuMS4xNiAxLjkyLjA4IDIuMTIuNTEuNTYuODIgMS4yNy44MiAyLjE1IDAgMy4wNy0xLjg3IDMuNzUtMy42NSAzLjk1LjI5LjI1LjU0LjczLjU0IDEuNDggMCAxLjA3LS4wMSAxLjkzLS4wMSAyLjIgMCAuMjEuMTUuNDYuNTUuMzhBOC4wMTMgOC4wMTMgMCAwIDAgMTYgOGMwLTQuNDItMy41OC04LTgtOHpcIi8+PC9zdmc+PC9hPidcbmZvb3Rlci5hcHBlbmRDaGlsZChjcmVkaXRzKSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvU3BhY2VfR3JvdGVzay9TcGFjZUdyb3Rlc2stVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9jdXJ2ZS1saW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvY2lyY3VpdC1wcmltYXJ5LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvY3VydmUtbGluZS0yLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4vKiBNWSBPV04gU1RZTEVTIEZST00gSEVSRSAqL1xuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1NwYWNlIEdyb3Rlc2snO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5odG1sIHtcbiAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuMzkwNjI1dncpOyAvKiAxdncgPSAxJSBvZiB2aWV3cG9ydCB3aWR0aC4gT25seSB3b3JrcyBpZiBwbGFjZWQgaW4gaHRtbCB0YWcgKi9cbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdTcGFjZSBHcm90ZXNrJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogRXN0byBoYWNlIHF1ZSBlbCBmb290ZXIgc2UgcXVlZGUgYWJham8gc2kgZWwgY29udGVuaWRvIGVzIHBvY28gKi9cbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIEV2aXRhIHF1ZSBlbCBjb250ZW5pZG8gc2UgZGVzYm9yZGUgaG9yaXpvbnRhbG1lbnRlICovXG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuaDMge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuaDQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5oZWFkZXIsZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMnJlbSA0cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgY29sb3I6ICNFNkZGRjY7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG5oZWFkZXIge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxvZ28ge1xuICAgIGNvbG9yOiAjRTZGRkY2O1xufVxuXG5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiByaWdodCAwLjVzIGVhc2U7XG59XG5cbi5tZW51LWl0ZW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC4zcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUtaXRlbTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLm1lbnUtaXRlbTpob3Zlcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbi10b3A6IDAuM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZGRkY2O1xufVxuXG4ubWVudS1pdGVtLW51bWJlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgY29sb3I6ICMwMEE5N0Y7XG59XG5cbi5zbWFsbC1zY3JlZW4tbWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbi5zbWFsbC1zY3JlZW4tbWVudS1saW5lIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RkZGNjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMsIHdpZHRoIDAuNXM7XG59XG5cbi8qIE1haW4gQ29udGVudCAqL1xuXG5tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWdyb3c6IDE7IC8qIEVzdG8gaGFjZSBxdWUgbWFpbiBvY3VwZSB0b2RvIGVsIGVzcGFjaW8gcmVzdGFudGUgZGVzcHXDqXMgZGUgaGVhZGVyIHkgYW50ZXMgZGUgZm9vdGVyICovXG4gICAgZ2FwOiA1JTtcbn1cblxuc2VjdGlvbiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvKiBmbGV4LWdyb3c6IDE7XG4gICAgZ2FwOiA1JTsgKi9cbn1cblxuLmhvbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBuby1yZXBlYXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgLyogZmxleC1ncm93OiAxOyAqL1xuICAgIC8qIGdhcDogNSU7ICovXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7IC8qIFJlc3RhIGVsIGFsdG8gZGVsIGhlYWRlciBkZWwgYWx0byB0b3RhbCBkZSBsYSB2ZW50YW5hIGRlbCBuYXZlZ2Fkb3IgKi9cbn1cblxuLm1haW4tdGV4dCB7XG4gICAgY29sb3I6ICMwMTg3NkM7XG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLm1haW4tdGV4dC1uYW1lIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDRyZW07XG59XG5cbi5tYWluLXRleHQtcm9sZSB7XG4gICAgY29sb3I6ICMwMTg3NkM7XG59XG5cbi5ob21lLWltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLyogQWJvdXQgc2VjdGlvbiAqL1xuXG4uc2VjdGlvbi1oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5zZWN0aW9uLWhlYWRlci10ZXh0IHtcbiAgICBjb2xvcjogIzAxODc2Qztcbn1cblxuLnNlY3Rpb24taGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnNlY3Rpb24taGVhZGVyLWxpbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBOTdGO1xufVxuXG4jYWJvdXQtYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOmVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDUlO1xufVxuXG4jYWJvdXQtYm9keS1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbiNhYm91dC1ib2R5LWRpdi10ZXh0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcbn1cblxuLnNlY3Rpb24tYm9keS10ZXh0IHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4vKiBTdGFjayBzZWN0aW9uICovXG5cbiNzdGFjay1ib2R5IHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG50YWJsZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5cbnRoIHtcbiAgICB3aWR0aDogOHJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDBBOTdGO1xufVxuXG4uc2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1maWxsZWQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uc2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbC1lbXB0eSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5zZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAuN3JlbTtcbiAgICBsZWZ0OiAwLjJyZW07XG4gICAgcmlnaHQ6IDAuMnJlbTtcbiAgICBib3R0b206IDAuN3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBOTdGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEE5N0Y7XG59XG5cbi5zZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWVtcHR5OjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMC43cmVtO1xuICAgIGxlZnQ6IDAuMnJlbTtcbiAgICByaWdodDogMC4ycmVtO1xuICAgIGJvdHRvbTogMC43cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwQTk3Rjtcbn1cblxuLyogUHJvamVjdHMgc2VjdGlvbiAqL1xuXG4jcHJvamVjdHMtYm9keSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNSU7XG59XG5cblxuI3Byb2plY3RzLWJvZHktZGl2IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA1JTtcbn1cblxuLnByb2plY3QtZGl2IHtcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnByb2plY3QtZGl2LXRvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiB0b3A7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wcm9qZWN0LWRpdi10b3AtcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgbWF4LXdpZHRoOiA3MCU7XG59XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuXG4ucHJvamVjdC1saW5rLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwQTk3RjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQTk3RjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnByb2plY3QtbGluay1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMwMEE5N0Y7XG59XG5cbi5wcm9qZWN0LWRpdi1ib3R0b20ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNSU7XG59XG5cbi5wcm9qZWN0LWltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXI6IDhweCBzb2xpZCAjMDAwMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDVweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLyogQ29udGFjdCBzZWN0aW9uICovXG5cbiNjb250YWN0LWJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNSU7XG59XG5cbi5jb250YWN0LWJvZHktdG9wIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uY29udGFjdC1ib2R5LWJvdHRvbSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4uY29udGFjdC1ib2R5LXNvY2lhbCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRXZpdGEgcXVlIGxhIGltYWdlbiBzZSByZXBpdGEgKi9cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0OyAvKiBDZW50cmEgbGEgaW1hZ2VuIGVuIGVsIGRpdiAqL1xufVxuXG4uY29udGFjdC1ib2R5LXRleHQge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmNvbnRhY3QtYm9keS1mb3JtIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEE5N0Y7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4RkNFQTtcbn1cblxuLmZvcm0tZmllbGQtZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTAlO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5jb250YWN0LWJvZHktZm9ybS1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFjdC1ib2R5LWZvcm0tbGFiZWwge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xufVxuXG4uY29udGFjdC1ib2R5LWZvcm0taW5wdXQge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1MkJEOUY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jb250YWN0LWJvZHktZm9ybS1pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBBOTdGO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmNvbnRhY3QtYm9keS1mb3JtLXRleHRhcmVhIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTJCRDlGO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY29udGFjdC1ib2R5LWZvcm0tdGV4dGFyZWE6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwQTk3RjtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5jb250YWN0LWJvZHktZm9ybS1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwQTk3RjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQTk3RjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jb250YWN0LWJvZHktZm9ybS1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMwMEE5N0Y7XG59XG5cbi5zb2NpYWwtaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLnNvY2lhbC1pbWc6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLyogZm9vdGVyICovXG5cbmZvb3RlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jcmVkaXRzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIFN0eWxlIHRoZSBsaW5rIHRvIHJlbW92ZSBkZWZhdWx0IHN0eWxpbmcgKi9cbi5naXRodWItbGluayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLyogQWRkIHRoZSBob3ZlciBlZmZlY3QgKi9cbi5naXRodWItaWNvbiB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7IC8qIEFkZCBhIHRyYW5zaXRpb24gZm9yIHRoZSB0cmFuc2Zvcm0gcHJvcGVydHkgKi9cbn1cblxuLmdpdGh1Yi1saW5rOmhvdmVyIC5naXRodWItaWNvbiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgLyogUm90YXRlIHRoZSBpY29uIDE4MCBkZWdyZWVzIHdoZW4gaG92ZXJlZCAqL1xufVxuXG4vKiBTbWFsbCBzY3JlZW5zICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3NnB4KSB7XG4gICAgXG4gICAgbmF2IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAubWVudSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICByaWdodDogLTE1MHB4O1xuICAgICAgICB0b3A6IDYuOHJlbTtcbiAgICB9XG5cbiAgICAubWVudS1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgIC5zbWFsbC1zY3JlZW4tbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMi43cmVtO1xuICAgICAgICByaWdodDogMnJlbTtcbiAgICB9XG5cbiAgICAuc21hbGwtc2NyZWVuLW1lbnU6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLm1lbnUtYWN0aXZlIHtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICB9XG5cbiAgICAuc21hbGwtc2NyZWVuLW1lbnUtbGluZS0xLWFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC04cHgsIDZweCk7XG4gICAgfVxuXG4gICAgLnNtYWxsLXNjcmVlbi1tZW51LWxpbmUtMi1hY3RpdmUge1xuICAgICAgICB3aWR0aDogMDtcbiAgICB9XG5cbiAgICAuc21hbGwtc2NyZWVuLW1lbnUtbGluZS0zLWFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLTZweCk7XG4gICAgfVxuXG4gICAgLmhvbWUge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgbm8tcmVwZWF0IGJvdHRvbTtcbiAgICB9XG5cbiAgICAubWFpbi10ZXh0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cblxuICAgICNhYm91dC1ib2R5IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA1JTtcbiAgICB9XG5cbiAgICAucHJvamVjdC1pbWFnZSB7XG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MHB4KSB7XG4gICAgXG4gICAgLmhpZGUtb24tbW9iaWxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAucHJvamVjdC1kaXYtdG9wIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogNSU7XG4gICAgfVxuXG4gICAgLnByb2plY3QtZGl2LXRvcC1sZWZ0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIH1cblxuICAgIC5wcm9qZWN0LWRpdi10b3AtcmlnaHQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIFxuICAgIC5wcm9qZWN0LWRpdi10b3AtcmlnaHQge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnByb2plY3QtaW1hZ2Uge1xuICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgIH1cblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQSw0QkFBNEI7O0FBRTVCO0lBQ0ksNEJBQTRCO0lBQzVCLDRDQUE0RTtBQUNoRjs7QUFFQTtJQUNJLGtDQUFrQyxFQUFFLGlFQUFpRTtBQUN6Rzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHdDQUF3QztJQUN4QyxjQUFjO0lBQ2QsaUJBQWlCLEVBQUUsbUVBQW1FO0lBQ3RGLGtCQUFrQixFQUFFLHVEQUF1RDtBQUMvRTs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJ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RUE7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixPQUFPO0lBQ1g7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztBQUVKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIE1ZIE9XTiBTVFlMRVMgRlJPTSBIRVJFICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU3BhY2UgR3JvdGVzayc7XFxuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU3BhY2VfR3JvdGVzay9TcGFjZUdyb3Rlc2stVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuMzkwNjI1dncpOyAvKiAxdncgPSAxJSBvZiB2aWV3cG9ydCB3aWR0aC4gT25seSB3b3JrcyBpZiBwbGFjZWQgaW4gaHRtbCB0YWcgKi9cXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiAnU3BhY2UgR3JvdGVzaycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgLyogRXN0byBoYWNlIHF1ZSBlbCBmb290ZXIgc2UgcXVlZGUgYWJham8gc2kgZWwgY29udGVuaWRvIGVzIHBvY28gKi9cXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBFdml0YSBxdWUgZWwgY29udGVuaWRvIHNlIGRlc2JvcmRlIGhvcml6b250YWxtZW50ZSAqL1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmg0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmhlYWRlcixmb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAgIGNvbG9yOiAjRTZGRkY2O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBjb2xvcjogI0U2RkZGNjtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiByaWdodCAwLjVzIGVhc2U7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDAlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgbWFyZ2luLXRvcDogMC4zcmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLm1lbnUtaXRlbTpob3Zlcjo6YWZ0ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIG1hcmdpbi10b3A6IDAuM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RkZGNjtcXG59XFxuXFxuLm1lbnUtaXRlbS1udW1iZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgY29sb3I6ICMwMEE5N0Y7XFxufVxcblxcbi5zbWFsbC1zY3JlZW4tbWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLnNtYWxsLXNjcmVlbi1tZW51LWxpbmUge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RkZGNjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cywgd2lkdGggMC41cztcXG59XFxuXFxuLyogTWFpbiBDb250ZW50ICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7IC8qIEVzdG8gaGFjZSBxdWUgbWFpbiBvY3VwZSB0b2RvIGVsIGVzcGFjaW8gcmVzdGFudGUgZGVzcHXDqXMgZGUgaGVhZGVyIHkgYW50ZXMgZGUgZm9vdGVyICovXFxuICAgIGdhcDogNSU7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDAgNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIGZsZXgtZ3JvdzogMTtcXG4gICAgZ2FwOiA1JTsgKi9cXG59XFxuXFxuLmhvbWUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2N1cnZlLWxpbmUuc3ZnJykgbm8tcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgLyogZmxleC1ncm93OiAxOyAqL1xcbiAgICAvKiBnYXA6IDUlOyAqL1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTsgLyogUmVzdGEgZWwgYWx0byBkZWwgaGVhZGVyIGRlbCBhbHRvIHRvdGFsIGRlIGxhIHZlbnRhbmEgZGVsIG5hdmVnYWRvciAqL1xcbn1cXG5cXG4ubWFpbi10ZXh0IHtcXG4gICAgY29sb3I6ICMwMTg3NkM7XFxuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5tYWluLXRleHQtbmFtZSB7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5tYWluLXRleHQtcm9sZSB7XFxuICAgIGNvbG9yOiAjMDE4NzZDO1xcbn1cXG5cXG4uaG9tZS1pbWFnZSB7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogQWJvdXQgc2VjdGlvbiAqL1xcblxcbi5zZWN0aW9uLWhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uc2VjdGlvbi1oZWFkZXItdGV4dCB7XFxuICAgIGNvbG9yOiAjMDE4NzZDO1xcbn1cXG5cXG4uc2VjdGlvbi1oZWFkZXItdGl0bGUge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLnNlY3Rpb24taGVhZGVyLWxpbmUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQTk3RjtcXG59XFxuXFxuI2Fib3V0LWJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6ZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1JTtcXG59XFxuXFxuI2Fib3V0LWJvZHktaW1hZ2Uge1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbiNhYm91dC1ib2R5LWRpdi10ZXh0IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XFxufVxcblxcbi5zZWN0aW9uLWJvZHktdGV4dCB7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLyogU3RhY2sgc2VjdGlvbiAqL1xcblxcbiNzdGFjay1ib2R5IHtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG59XFxuXFxudGFibGUge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcblxcbnRoIHtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMEE5N0Y7XFxufVxcblxcbi5zZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5zZWN0aW9uLWJvZHktdGFibGUtYm9keS1jZWxsLWZpbGxlZDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDAuN3JlbTtcXG4gICAgbGVmdDogMC4ycmVtO1xcbiAgICByaWdodDogMC4ycmVtO1xcbiAgICBib3R0b206IDAuN3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQTk3RjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwQTk3RjtcXG59XFxuXFxuLnNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGwtZW1wdHk6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwLjdyZW07XFxuICAgIGxlZnQ6IDAuMnJlbTtcXG4gICAgcmlnaHQ6IDAuMnJlbTtcXG4gICAgYm90dG9tOiAwLjdyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEE5N0Y7XFxufVxcblxcbi8qIFByb2plY3RzIHNlY3Rpb24gKi9cXG5cXG4jcHJvamVjdHMtYm9keSB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxufVxcblxcblxcbiNwcm9qZWN0cy1ib2R5LWRpdiB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbi5wcm9qZWN0LWRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3QtZGl2LXRvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiB0b3A7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiA1JTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1kaXYtdG9wLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIG1heC13aWR0aDogNzAlO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1saW5rLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBBOTdGO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE5N0Y7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1saW5rLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGNvbG9yOiAjMDBBOTdGO1xcbn1cXG5cXG4ucHJvamVjdC1kaXYtYm90dG9tIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbi5wcm9qZWN0LWltYWdlIHtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZCAjMDAwMDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDEwcHggNXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4vKiBDb250YWN0IHNlY3Rpb24gKi9cXG5cXG4jY29udGFjdC1ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbi5jb250YWN0LWJvZHktdG9wIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uY29udGFjdC1ib2R5LWJvdHRvbSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbn1cXG5cXG4uY29udGFjdC1ib2R5LXNvY2lhbCB7XFxuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWFnZXMvY2lyY3VpdC1wcmltYXJ5LnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBFdml0YSBxdWUgbGEgaW1hZ2VuIHNlIHJlcGl0YSAqL1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0OyAvKiBDZW50cmEgbGEgaW1hZ2VuIGVuIGVsIGRpdiAqL1xcbn1cXG5cXG4uY29udGFjdC1ib2R5LXRleHQge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5jb250YWN0LWJvZHktZm9ybSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBBOTdGO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDOEZDRUE7XFxufVxcblxcbi5mb3JtLWZpZWxkLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtYm9keS1mb3JtLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1ib2R5LWZvcm0tbGFiZWwge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtYm9keS1mb3JtLWlucHV0IHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTJCRDlGO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5jb250YWN0LWJvZHktZm9ybS1pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEE5N0Y7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmNvbnRhY3QtYm9keS1mb3JtLXRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTJCRDlGO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5jb250YWN0LWJvZHktZm9ybS10ZXh0YXJlYTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEE5N0Y7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmNvbnRhY3QtYm9keS1mb3JtLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBBOTdGO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE5N0Y7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtYm9keS1mb3JtLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGNvbG9yOiAjMDBBOTdGO1xcbn1cXG5cXG4uc29jaWFsLWltZyB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbi5zb2NpYWwtaW1nOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNyZWRpdHMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIFN0eWxlIHRoZSBsaW5rIHRvIHJlbW92ZSBkZWZhdWx0IHN0eWxpbmcgKi9cXG4uZ2l0aHViLWxpbmsge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qIEFkZCB0aGUgaG92ZXIgZWZmZWN0ICovXFxuLmdpdGh1Yi1pY29uIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7IC8qIEFkZCBhIHRyYW5zaXRpb24gZm9yIHRoZSB0cmFuc2Zvcm0gcHJvcGVydHkgKi9cXG59XFxuXFxuLmdpdGh1Yi1saW5rOmhvdmVyIC5naXRodWItaWNvbiB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IC8qIFJvdGF0ZSB0aGUgaWNvbiAxODAgZGVncmVlcyB3aGVuIGhvdmVyZWQgKi9cXG59XFxuXFxuLyogU21hbGwgc2NyZWVucyAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3NnB4KSB7XFxuICAgIFxcbiAgICBuYXYge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAubWVudSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgcmlnaHQ6IC0xNTBweDtcXG4gICAgICAgIHRvcDogNi44cmVtO1xcbiAgICB9XFxuXFxuICAgIC5tZW51LWl0ZW0ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICB9XFxuXFxuICAgIC5zbWFsbC1zY3JlZW4tbWVudSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMi43cmVtO1xcbiAgICAgICAgcmlnaHQ6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLnNtYWxsLXNjcmVlbi1tZW51OmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAubWVudS1hY3RpdmUge1xcbiAgICAgICAgcmlnaHQ6IDBweDtcXG4gICAgfVxcblxcbiAgICAuc21hbGwtc2NyZWVuLW1lbnUtbGluZS0xLWFjdGl2ZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCA2cHgpO1xcbiAgICB9XFxuXFxuICAgIC5zbWFsbC1zY3JlZW4tbWVudS1saW5lLTItYWN0aXZlIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICB9XFxuXFxuICAgIC5zbWFsbC1zY3JlZW4tbWVudS1saW5lLTMtYWN0aXZlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLTZweCk7XFxuICAgIH1cXG5cXG4gICAgLmhvbWUge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzL2ltYWdlcy9jdXJ2ZS1saW5lLTIuc3ZnJykgbm8tcmVwZWF0IGJvdHRvbTtcXG4gICAgfVxcblxcbiAgICAubWFpbi10ZXh0IHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgI2Fib3V0LWJvZHkge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZ2FwOiA1JTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1pbWFnZSB7XFxuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICB9XFxuXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MHB4KSB7XFxuICAgIFxcbiAgICAuaGlkZS1vbi1tb2JpbGUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1kaXYtdG9wIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDUlO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWRpdi10b3AtbGVmdCB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWRpdi10b3AtcmlnaHQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgfVxcblxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBcXG4gICAgLnByb2plY3QtZGl2LXRvcC1yaWdodCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtaW1hZ2Uge1xcbiAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi8xN0Y5NkI5Ny05QjJFLTQyNkItQTY4Qi02OTM2RDZGREQxMkUuanBnXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvMTdGOTZCOTctOUIyRS00MjZCLUE2OEItNjkzNkQ2RkREMTJFLmpwZ1wiLFxuXHRcdFwic3JjX2Fzc2V0c19pbWFnZXNfMTdGOTZCOTctOUIyRS00MjZCLUE2OEItNjkzNkQ2RkREMTJFX2pwZ1wiXG5cdF0sXG5cdFwiLi9hYm91dC1iaWctaW1hZ2UuanBnXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmlnLWltYWdlLmpwZ1wiXG5cdF0sXG5cdFwiLi9hYm91dC1zbWFsbC1pbWFnZS5qcGdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9hYm91dC1zbWFsbC1pbWFnZS5qcGdcIlxuXHRdLFxuXHRcIi4vY2lyY3VpdC1wcmltYXJ5LnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NpcmN1aXQtcHJpbWFyeS5zdmdcIlxuXHRdLFxuXHRcIi4vY3VydmUtbGluZS0yLnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9hc3NldHMvaW1hZ2VzL2N1cnZlLWxpbmUtMi5zdmdcIlxuXHRdLFxuXHRcIi4vY3VydmUtbGluZS5zdmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jdXJ2ZS1saW5lLnN2Z1wiXG5cdF0sXG5cdFwiLi9naXRodWItaWNvbi5zdmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9naXRodWItaWNvbi5zdmdcIlxuXHRdLFxuXHRcIi4vaG9tZS1pbWFnZS5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9ob21lLWltYWdlLnBuZ1wiXG5cdF0sXG5cdFwiLi9pbnN0YWdyYW0taWNvbi5zdmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pbnN0YWdyYW0taWNvbi5zdmdcIlxuXHRdLFxuXHRcIi4vbGlua2VkaW4taWNvbi5zdmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9saW5rZWRpbi1pY29uLnN2Z1wiXG5cdF0sXG5cdFwiLi9tYWlsLWljb24uc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbWFpbC1pY29uLnN2Z1wiXG5cdF0sXG5cdFwiLi9wcm9qZWN0MS5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9wcm9qZWN0MS5wbmdcIixcblx0XHRcInNyY19hc3NldHNfaW1hZ2VzX3Byb2plY3QxX3BuZ1wiXG5cdF0sXG5cdFwiLi9wcm9qZWN0Mi5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9wcm9qZWN0Mi5wbmdcIixcblx0XHRcInNyY19hc3NldHNfaW1hZ2VzX3Byb2plY3QyX3BuZ1wiXG5cdF0sXG5cdFwiLi9wcm9qZWN0My5wbmdcIjogW1xuXHRcdFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9wcm9qZWN0My5wbmdcIixcblx0XHRcInNyY19hc3NldHNfaW1hZ2VzX3Byb2plY3QzX3BuZ1wiXG5cdF0sXG5cdFwiLi94LWljb24uc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2Fzc2V0cy9pbWFnZXMveC1pY29uLnN2Z1wiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoaWRzLnNsaWNlKDEpLm1hcChfX3dlYnBhY2tfcmVxdWlyZV9fLmUpKS50aGVuKCgpID0+IHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KGlkLCAxIHwgMTYpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiXSwibmFtZXMiOlsiTWUiLCJBYm91dEJpZ0ltZyIsIkFib3V0U21hbGxJbWciLCJMaW5rZWRJbiIsIkluc3RhZ3JhbSIsIkdpdEh1YiIsIlgiLCJNYWlsIiwicHJvamVjdHNEYXRhIiwibG9hZEltYWdlIiwiaW1hZ2VOYW1lIiwiaW1hZ2VNb2R1bGUiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImNsYXNzTmFtZSIsImlkIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwiaGVhZGVyIiwibWFpbiIsImZvb3RlciIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImxvZ28iLCJuYXYiLCJsb2dvVGV4dCIsInRleHRDb250ZW50IiwibWVudSIsIm1lbnVJdGVtcyIsImNvdW50ZXIiLCJ0d29EaWdpdENvdW50ZXIiLCJ2YWx1ZSIsImZvckVhY2giLCJpdGVtIiwibnVtTGFiZWwiLCJtZW51SXRlbSIsIml0ZW1MaW5rIiwic21hbGxTY3JlZW5NZW51Iiwic21hbGxTY3JlZW5NZW51TGluZTEiLCJzbWFsbFNjcmVlbk1lbnVMaW5lMiIsInNtYWxsU2NyZWVuTWVudUxpbmUzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImhvbWUiLCJhYm91dCIsInN0YWNrIiwicHJvamVjdHMiLCJjb250YWN0IiwibWFpblRleHQiLCJuZXdMaW5lMSIsInNwYW5OYW1lIiwibmV3TGluZTIiLCJzcGFuUm9sZSIsIk1lSW1hZ2UiLCJzcmMiLCJhbHQiLCJhYm91dEhlYWRlciIsImFib3V0Qm9keSIsImFib3V0SGVhZGVyTGluZSIsImFib3V0SGVhZGVyVGV4dCIsImFib3V0SGVhZGVyVGl0bGUiLCJhYm91dEJvZHlJbWFnZSIsInNyY3NldCIsInNpemVzIiwiYWJvdXRCb2R5RGl2VGV4dCIsImFib3V0Qm9keVRleHQxIiwiYWJvdXRCb2R5VGV4dDIiLCJhYm91dEJvZHlUZXh0MyIsImFib3V0Qm9keVRleHQ0IiwiYWJvdXRCb2R5VGV4dDUiLCJzdGFja0hlYWRlciIsInN0YWNrQm9keSIsInN0YWNrSGVhZGVyTGluZSIsInN0YWNrSGVhZGVyVGV4dCIsInN0YWNrSGVhZGVyVGl0bGUiLCJzdGFja1RhYmxlIiwic3RhY2tUYWJsZUhlYWQiLCJzdGFja1RhYmxlSGVhZFJvdyIsInN0YWNrVGFibGVIZWFkQ29sMSIsInN0YWNrVGFibGVIZWFkQ29sMiIsInN0YWNrVGFibGVIZWFkQ29sMyIsInN0YWNrVGFibGVIZWFkQ29sNCIsInN0YWNrVGFibGVIZWFkQ29sNSIsInN0YWNrVGFibGVIZWFkQ29sNiIsInN0YWNrVGFibGVCb2R5Iiwic3RhY2tUYWJsZUJvZHlSb3cxIiwic3RhY2tUYWJsZUJvZHlIZWFkMSIsInN0YWNrVGFibGVCb2R5SGVhZDIiLCJzdGFja1RhYmxlQm9keUNlbGwxIiwic3RhY2tUYWJsZUJvZHlDZWxsMiIsInN0YWNrVGFibGVCb2R5Q2VsbDMiLCJzdGFja1RhYmxlQm9keUNlbGw0Iiwic3RhY2tUYWJsZUJvZHlDZWxsNGJpcyIsInN0YWNrVGFibGVCb2R5Um93MiIsInN0YWNrVGFibGVCb2R5SGVhZDMiLCJzdGFja1RhYmxlQm9keUNlbGw1Iiwic3RhY2tUYWJsZUJvZHlDZWxsNiIsInN0YWNrVGFibGVCb2R5Q2VsbDciLCJzdGFja1RhYmxlQm9keUNlbGw4Iiwic3RhY2tUYWJsZUJvZHlDZWxsODEiLCJzdGFja1RhYmxlQm9keVJvdzMiLCJzdGFja1RhYmxlQm9keUhlYWQ0Iiwic3RhY2tUYWJsZUJvZHlDZWxsOSIsInN0YWNrVGFibGVCb2R5Q2VsbDEwIiwic3RhY2tUYWJsZUJvZHlDZWxsMTEiLCJzdGFja1RhYmxlQm9keUNlbGwxMiIsInN0YWNrVGFibGVCb2R5Q2VsbDEyMSIsInN0YWNrVGFibGVCb2R5Um93NCIsInN0YWNrVGFibGVCb2R5SGVhZDUiLCJzdGFja1RhYmxlQm9keUNlbGwxMyIsInN0YWNrVGFibGVCb2R5Q2VsbDE0Iiwic3RhY2tUYWJsZUJvZHlDZWxsMTUiLCJzdGFja1RhYmxlQm9keUNlbGwxNiIsInN0YWNrVGFibGVCb2R5Q2VsbDE3Iiwic3RhY2tUYWJsZUJvZHlSb3c1Iiwic3RhY2tUYWJsZUJvZHlIZWFkNiIsInN0YWNrVGFibGVCb2R5SGVhZDciLCJzdGFja1RhYmxlQm9keUNlbGwxOCIsInN0YWNrVGFibGVCb2R5Q2VsbDE5Iiwic3RhY2tUYWJsZUJvZHlDZWxsMjAiLCJzdGFja1RhYmxlQm9keUNlbGwyMSIsInN0YWNrVGFibGVCb2R5Q2VsbDIyIiwic3RhY2tUYWJsZUJvZHlSb3c2Iiwic3RhY2tUYWJsZUJvZHlIZWFkOCIsInN0YWNrVGFibGVCb2R5Q2VsbDIzIiwic3RhY2tUYWJsZUJvZHlDZWxsMjQiLCJzdGFja1RhYmxlQm9keUNlbGwyNSIsInN0YWNrVGFibGVCb2R5Q2VsbDI2Iiwic3RhY2tUYWJsZUJvZHlDZWxsMjciLCJzdGFja1RhYmxlQm9keVJvdzciLCJzdGFja1RhYmxlQm9keUhlYWQ5Iiwic3RhY2tUYWJsZUJvZHlIZWFkMTAiLCJzdGFja1RhYmxlQm9keUNlbGwyOCIsInN0YWNrVGFibGVCb2R5Q2VsbDI5Iiwic3RhY2tUYWJsZUJvZHlDZWxsMzAiLCJzdGFja1RhYmxlQm9keUNlbGwzMSIsInN0YWNrVGFibGVCb2R5Q2VsbDMyIiwic3RhY2tUYWJsZUJvZHlSb3c4Iiwic3RhY2tUYWJsZUJvZHlIZWFkMTEiLCJzdGFja1RhYmxlQm9keUNlbGwzMyIsInN0YWNrVGFibGVCb2R5Q2VsbDM0Iiwic3RhY2tUYWJsZUJvZHlDZWxsMzUiLCJzdGFja1RhYmxlQm9keUNlbGwzNiIsInN0YWNrVGFibGVCb2R5Q2VsbDM3Iiwic3RhY2tUYWJsZUJvZHlSb3c5Iiwic3RhY2tUYWJsZUJvZHlIZWFkMTIiLCJzdGFja1RhYmxlQm9keUNlbGwzOCIsInN0YWNrVGFibGVCb2R5Q2VsbDM5Iiwic3RhY2tUYWJsZUJvZHlDZWxsNDAiLCJzdGFja1RhYmxlQm9keUNlbGw0MSIsInN0YWNrVGFibGVCb2R5Q2VsbDQyIiwic3RhY2tUYWJsZUJvZHlSb3cxMCIsInN0YWNrVGFibGVCb2R5SGVhZDEzIiwic3RhY2tUYWJsZUJvZHlIZWFkMTQiLCJzdGFja1RhYmxlQm9keUNlbGw0MyIsInN0YWNrVGFibGVCb2R5Q2VsbDQ0Iiwic3RhY2tUYWJsZUJvZHlDZWxsNDUiLCJzdGFja1RhYmxlQm9keUNlbGw0NiIsInN0YWNrVGFibGVCb2R5Q2VsbDQ3IiwicHJvamVjdHNIZWFkZXIiLCJwcm9qZWN0c0JvZHkiLCJwcm9qZWN0c0hlYWRlckxpbmUiLCJwcm9qZWN0c0hlYWRlclRleHQiLCJwcm9qZWN0c0hlYWRlclRpdGxlIiwicHJvamVjdHNCb2R5RGl2IiwiY3JlYXRlUHJvamVjdCIsInByb2plY3QiLCJwcm9qZWN0RGl2IiwicHJvamVjdERpdlRvcCIsInByb2plY3REaXZUb3BMZWZ0IiwicHJvamVjdFRpdGxlIiwidGl0bGUiLCJwcm9qZWN0U3VidGl0bGUiLCJzdWJ0aXRsZSIsInByb2plY3REaXZUb3BSaWdodCIsInByb2plY3REZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwicHJvamVjdExpbmtCdXR0b24iLCJocmVmIiwibGluayIsInRhcmdldCIsInJlbCIsInByb2plY3REaXZCb3R0b20iLCJpbWFnZSIsInRoZW4iLCJwcm9qZWN0SW1hZ2UiLCJJbWFnZSIsImNvbnRhY3RIZWFkZXIiLCJjb250YWN0Qm9keSIsImNvbnRhY3RIZWFkZXJMaW5lIiwiY29udGFjdEhlYWRlclRleHQiLCJjb250YWN0SGVhZGVyVGl0bGUiLCJjb250YWN0Qm9keVRvcCIsImNvbnRhY3RCb2R5VGV4dDEiLCJjb250YWN0Qm9keVRleHQyIiwiY29udGFjdEJvZHlCb3R0b20iLCJjb250YWN0Qm9keUZvcm0iLCJjb250YWN0Qm9keVNvY2lhbCIsImxpbmtlZEluTGluayIsImxpbmtlZEluSW1nIiwiaW5zdGFncmFtTGluayIsImluc3RhZ3JhbUltZyIsImdpdGh1YkxpbmsiLCJnaXRodWJJbWciLCJ4TGluayIsInhJbWciLCJtYWlsTGluayIsIm1haWxJbWciLCJjb250YWN0Qm9keUZvcm1EaXYiLCJuYW1lRGl2IiwibmFtZUxhYmVsIiwiZm9yIiwibmFtZUlucHV0IiwidHlwZSIsIm5hbWUiLCJlbWFpbERpdiIsImVtYWlsTGFiZWwiLCJlbWFpbElucHV0IiwibWVzc2FnZURpdiIsIm1lc3NhZ2VMYWJlbCIsIm1lc3NhZ2VUZXh0YXJlYSIsInJvd3MiLCJjb250YWN0Qm9keUZvcm1CdXR0b24iLCJjcmVkaXRzIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==