"use strict";
(self["webpackChunkpersonal_portfolio"] = self["webpackChunkpersonal_portfolio"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _assets_images_man_white_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/man-white.jpg */ "./src/assets/images/man-white.jpg");
/* harmony import */ var _assets_images_handsome_man_with_blue_glasses_presenting_something_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/handsome-man-with-blue-glasses-presenting-something.jpg */ "./src/assets/images/handsome-man-with-blue-glasses-presenting-something.jpg");




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
stackHeaderTitle.textContent = "Stack";
stackHeaderText.appendChild(stackHeaderTitle);
stackHeader.appendChild(stackHeaderText);
const stackTable = createElement("table", "section-body-table", "stack-table");
stackBody.appendChild(stackTable);
const stackTableHead = createElement("thead", "section-body-table-head", "stack-table-head");
stackTable.appendChild(stackTableHead);
const stackTableHeadRow = createElement("tr", "section-body-table-head-row", "stack-table-head-row");
stackTableHead.appendChild(stackTableHeadRow);
const stackTableHeadCell0 = createElement("th", "section-body-table-head-cell", "stack-table-head-cell-0");
stackTableHeadCell0.textContent = "";
stackTableHeadRow.appendChild(stackTableHeadCell0);
const stackTableHeadCell1 = createElement("th", "section-body-table-head-cell", "stack-table-head-cell-1");
stackTableHeadCell1.textContent = "";
stackTableHeadRow.appendChild(stackTableHeadCell1);
const stackTableHeadCell2 = createElement("th", "section-body-table-head-cell", "stack-table-head-cell-2");
stackTableHeadCell2.textContent = "Beginner";
stackTableHeadRow.appendChild(stackTableHeadCell2);
const stackTableHeadCell3 = createElement("th", "section-body-table-head-cell", "stack-table-head-cell-3");
stackTableHeadCell3.textContent = "Elementary";
stackTableHeadRow.appendChild(stackTableHeadCell3);
const stackTableHeadCell4 = createElement("th", "section-body-table-head-cell", "stack-table-head-cell-4");
stackTableHeadCell4.textContent = "Intermediate";
stackTableHeadRow.appendChild(stackTableHeadCell4);
const stackTableHeadCell5 = createElement("th", "section-body-table-head-cell", "stack-table-head-cell-5");
stackTableHeadCell5.textContent = "Advanced";
stackTableHeadRow.appendChild(stackTableHeadCell5);
const stackTableHeadCell6 = createElement("th", "section-body-table-head-cell", "stack-table-head-cell-6");
stackTableHeadCell6.textContent = "Expert";
stackTableHeadRow.appendChild(stackTableHeadCell6);
const stackTableBody = createElement("tbody", "section-body-table-body", "stack-table-body");
stackTable.appendChild(stackTableBody);
const stackTableBodyRow = createElement("tr", "section-body-table-body-row", "stack-table-body-row");
stackTableBody.appendChild(stackTableBodyRow);
const stackTableBodyCell1 = createElement("td", "section-body-table-body-cell", "stack-table-body-cell-1");
stackTableBodyCell1.textContent = "JavaScript";
stackTableBodyRow.appendChild(stackTableBodyCell1);
const stackTableBodyCell2 = createElement("td", "section-body-table-body-cell", "stack-table-body-cell-2");
stackTableBodyCell2.textContent = "React";
stackTableBodyRow.appendChild(stackTableBodyCell2);
const stackTableBodyCell3 = createElement("td", "section-body-table-body-cell", "stack-table-body-cell-3");
stackTableBodyCell3.textContent = "Redux";

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
    font-size: 2.5rem;
}

h2 {
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

.about {
    /* padding-top: 6rem; */
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    gap: 5%;
}

.section-header {
    width: 100%;
    margin-bottom: 2rem;
}

#about-header-text {
    color: #01876C;
}

#about-header-title {
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

.stack {
    /* padding-top: 6rem; */
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    gap: 5%;
}

#stack-header-text {
    color: #01876C;
}

#stack-header-title {
    color: #000000;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* MY OWN STYLES FROM HERE */\n\n@font-face {\n    font-family: 'Space Grotesk';\n    src: url('../assets/fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf');\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    background-color: #ffffff;\n    font-family: 'Space Grotesk', sans-serif;\n    font-size: calc(12px + 0.390625vw);\n    color: #000000;\n    min-height: 100vh;\n}\n\nh1 {\n    font-size: 2.5rem;\n}\n\nh2 {\n    font-size: 1.5rem;\n}\n\nheader,footer {\n    display: flex;\n    align-items: center;\n    padding: 20px 40px;\n    background-color: #000000;\n    color: #E6FFF6;\n}\n\nheader {\n    justify-content: space-between;\n    font-size: 2;\n}\n\n.logo {\n    color: #E6FFF6;\n}\n\nnav {\n    display: flex;\n    align-items: center;\n}\n\n.menu {\n    display: flex;\n    align-items: center;\n}\n\n.menu-item {\n    margin-left: 5px;\n    cursor: pointer;\n}\n\n.menu-item::after {\n    content: '';\n    width: 0%;\n    height: 1px;\n    margin-top: 5px;\n    display: block;\n    transition: all 0.3s ease;\n}\n\n.menu-item:hover::after {\n    width: 100%;\n    height: 1px;\n    margin-top: 5px;\n    background-color: #E6FFF6;\n}\n\n.menu-item-number {\n    margin-left: 20px;\n    color: #00A97F;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex-grow: 1; /* Esto hace que main ocupe todo el espacio restante después de header y antes de footer */\n    gap: 5%;\n}\n\n.home {\n    /* padding-top: 6rem; */\n    width: 100%;\n    background: url('../assets/images/circuit-primary.svg') no-repeat;\n    display: flex;\n    flex-direction: row;\n    align-items: end;\n    justify-content: end;\n    flex-grow: 1;\n    gap: 5%;\n    margin-right: 4rem;\n    min-height: 100vh;\n}\n\n.main-text {\n    color: #01876C;\n    line-height: 4rem;\n    text-align: end;\n    margin-bottom: 30%;\n}\n\n.main-text-name {\n    color: #000000;\n    font-size: 4rem;\n}\n\n.main-text-role {\n    color: #01876C;\n}\n\n.home-image {\n    width: 600px;\n    height: auto;\n}\n\n/* About section */\n\n.about {\n    /* padding-top: 6rem; */\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex-grow: 1;\n    gap: 5%;\n}\n\n.section-header {\n    width: 100%;\n    margin-bottom: 2rem;\n}\n\n#about-header-text {\n    color: #01876C;\n}\n\n#about-header-title {\n    color: #000000;\n}\n\n.section-header-line {\n    width: 100%;\n    height: 1px;\n    /* margin-top: 0.5rem; */\n    margin-bottom: 1.5rem;\n    background-color: #00A97F;\n}\n\n#about-body {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: top;\n    justify-content: center;\n    gap: 5%;\n}\n\n#about-body-image {\n    width: 500px;\n    height: auto;\n}\n\n.section-body-text {\n    color: #000000;\n    line-height: 2rem;\n    text-align: justify;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 1rem;\n}\n\n/* Stack section */\n\n.stack {\n    /* padding-top: 6rem; */\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex-grow: 1;\n    gap: 5%;\n}\n\n#stack-header-text {\n    color: #01876C;\n}\n\n#stack-header-title {\n    color: #000000;\n}\n\n/* footer */\n\nfooter {\n    justify-content: center;\n}\n\n.credits {\n    text-align: center;\n}\n\n/* Style the link to remove default styling */\n.github-link {\n    display: inline-block;\n    text-decoration: none;\n    color: inherit;\n}\n\n/* Add the hover effect */\n.github-icon {\n    transition: transform 0.5s ease-in-out; /* Add a transition for the transform property */\n}\n\n.github-link:hover .github-icon {\n    transform: rotate(180deg); /* Rotate the icon 180 degrees when hovered */\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/assets/fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf":
/*!***************************************************************************!*\
  !*** ./src/assets/fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1036357b9651eff7d3dd.ttf";

/***/ }),

/***/ "./src/assets/images/circuit-primary.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/circuit-primary.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "053bed0dc0b6846f942d.svg";

/***/ }),

/***/ "./src/assets/images/handsome-man-with-blue-glasses-presenting-something.jpg":
/*!***********************************************************************************!*\
  !*** ./src/assets/images/handsome-man-with-blue-glasses-presenting-something.jpg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29bee072f3e0c45b8f02.jpg";

/***/ }),

/***/ "./src/assets/images/man-white.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/man-white.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a624c7497ffc79ea3327.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxPQUFPLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsdUJBQXVCLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FB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QUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5jc3NcIjtcbmltcG9ydCBNZSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL21hbi13aGl0ZS5qcGdcIjtcbmltcG9ydCBBYm91dEltZyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2hhbmRzb21lLW1hbi13aXRoLWJsdWUtZ2xhc3Nlcy1wcmVzZW50aW5nLXNvbWV0aGluZy5qcGdcIjtcblxuLy8gQ3JlYXRlIGFuIGVsZW1lbnQgd2l0aCBhbiBvcHRpb25hbCBDU1MgY2xhc3MgYW5kIG9wdGlvbmFsIENTUyBpZFxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSwgaWQpIHtcbiAgICAgICAgXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKVxuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgIH1cblxuICAgIGlmIChpZCkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsaWQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRcblxufVxuXG4vLyBDcmVhdGUgMyBtYWluIHNlY3Rpb25zXG5jb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuLy8gQWRkIGVhY2ggc2VjdGlvbiB0byB0aGUgRE9NXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4vLyBBZGQgMiBzdWJzZWN0aW9ucyB0byBoZWFkZXIsIG9uZSBmb3IgYSBsb2dvIGFuZCBvbmUgZm9yIGEgbmF2XG5jb25zdCBsb2dvID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImxvZ29cIik7XG5jb25zdCBuYXYgPSBjcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXG4vLyBBZGQgY29udGVudCB0byBsb2dvIHN1YnNlY3Rpb25cbmNvbnN0IGxvZ29UZXh0ID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwibG9nby10ZXh0XCIpO1xubG9nb1RleHQudGV4dENvbnRlbnQgPSBcIlIuSi5cIjtcbmxvZ28uYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xuXG4vLyBBZGQgY29udGVudCB0byBuYXYgc3Vic2VjdGlvbiAobWVudSBsaW5rIGl0ZW1zKVxuY29uc3QgbWVudSA9IGNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBcIm1lbnVcIik7XG5jb25zdCBtZW51SXRlbXMgPSBbXCJIb21lXCIsIFwiQWJvdXRcIiwgXCJTdGFja1wiLCBcIlByb2plY3RzXCIsIFwiQ29udGFjdFwiXTtcbi8vIENyZWF0ZSBhIGFsd2F5cyB0d28gZGlnaXQgY291bnRlciBmb3IgdGhlIG1lbnUgaXRlbXNcbmxldCBjb3VudGVyID0gMTtcblxuZnVuY3Rpb24gdHdvRGlnaXRDb3VudGVyKHZhbHVlKSB7XG4gICAgXG4gICAgaWYgKHZhbHVlIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGAwJHt2YWx1ZX0uYDtcbiAgICB9IFxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgXG59XG5cbm1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbnVtTGFiZWwgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcIm1lbnUtaXRlbS1udW1iZXJcIik7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVFbGVtZW50KFwibGlcIiwgXCJtZW51LWl0ZW1cIik7XG4gICAgY29uc3QgaXRlbUxpbmsgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcIm1lbnUtaXRlbS1saW5rXCIpO1xuICAgIG51bUxhYmVsLnRleHRDb250ZW50ID0gdHdvRGlnaXRDb3VudGVyKGNvdW50ZXIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobnVtTGFiZWwpO1xuICAgIGNvdW50ZXIgKz0gMTtcbiAgICBpdGVtTGluay50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUxpbmspO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xufSk7XG5cbm5hdi5hcHBlbmRDaGlsZChtZW51KTtcblxuLy8gQWRkIGVhY2ggc3Vic2VjdGlvbiB0byB0aGUgaGVhZGVyXG5oZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuLy8gQWRkIGNvbnRlbnQgdG8gbWFpbiBzZWN0aW9uXG4vLyBGaXJzdCBjcmVhdGUgNSBiaWcgc3Vic2VjdGlvbnNcbmNvbnN0IGhvbWUgPSBjcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBcImhvbWVcIik7XG5jb25zdCBhYm91dCA9IGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFwiYWJvdXRcIik7XG5jb25zdCBzdGFjayA9IGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFwic3RhY2tcIik7XG5jb25zdCBwcm9qZWN0cyA9IGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFwicHJvamVjdHNcIik7XG5jb25zdCBjb250YWN0ID0gY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgXCJjb250YWN0XCIpO1xuXG4vLyBBZGQgZWFjaCBzdWJzZWN0aW9uIHRvIHRoZSBtYWluIHNlY3Rpb25cbm1haW4uYXBwZW5kQ2hpbGQoaG9tZSk7XG5tYWluLmFwcGVuZENoaWxkKGFib3V0KTtcbm1haW4uYXBwZW5kQ2hpbGQoc3RhY2spO1xubWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG5tYWluLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4vLyBBZGQgY29udGVudCB0byBlYWNoIHN1YnNlY3Rpb25cbi8vIEhvbWVcbmNvbnN0IG1haW5UZXh0ID0gY3JlYXRlRWxlbWVudChcImgxXCIsIFwibWFpbi10ZXh0XCIpO1xubWFpblRleHQudGV4dENvbnRlbnQgPSBcIkhlbGxvISBJIGFtXCI7XG5ob21lLmFwcGVuZENoaWxkKG1haW5UZXh0KTtcbmNvbnN0IG5ld0xpbmUxID0gY3JlYXRlRWxlbWVudChcImJyXCIpO1xubWFpblRleHQuYXBwZW5kQ2hpbGQobmV3TGluZTEpO1xuY29uc3Qgc3Bhbk5hbWUgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcIm1haW4tdGV4dC1uYW1lXCIpO1xuc3Bhbk5hbWUudGV4dENvbnRlbnQgPSBcIlJhw7psIEppbcOpbmV6XCI7XG5tYWluVGV4dC5hcHBlbmRDaGlsZChzcGFuTmFtZSk7XG5jb25zdCBuZXdMaW5lMiA9IGNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcbm1haW5UZXh0LmFwcGVuZENoaWxkKG5ld0xpbmUyKTtcbmNvbnN0IHNwYW5Sb2xlID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJtYWluLXRleHQtcm9sZVwiKTtcbnNwYW5Sb2xlLnRleHRDb250ZW50ID0gXCJGdWxsIFN0YWNrIERldmVsb3BlclwiO1xubWFpblRleHQuYXBwZW5kQ2hpbGQoc3BhblJvbGUpO1xuXG5jb25zdCBNZUltYWdlID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCBcImhvbWUtaW1hZ2VcIik7XG5NZUltYWdlLnNyYyA9IE1lO1xuTWVJbWFnZS5hbHQgPSBcIk1lXCI7XG5ob21lLmFwcGVuZENoaWxkKE1lSW1hZ2UpO1xuXG4vLyBBYm91dFxuY29uc3QgYWJvdXRIZWFkZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1oZWFkZXJcIiwgXCJhYm91dC1oZWFkZXJcIik7XG5jb25zdCBhYm91dEJvZHkgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1ib2R5XCIsIFwiYWJvdXQtYm9keVwiKTtcbmFib3V0LmFwcGVuZENoaWxkKGFib3V0SGVhZGVyKTtcbmFib3V0LmFwcGVuZENoaWxkKGFib3V0Qm9keSk7XG5cbmNvbnN0IGFib3V0SGVhZGVyTGluZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWhlYWRlci1saW5lXCIsIFwiYWJvdXQtaGVhZGVyLWxpbmVcIik7XG5hYm91dEhlYWRlci5hcHBlbmRDaGlsZChhYm91dEhlYWRlckxpbmUpO1xuY29uc3QgYWJvdXRIZWFkZXJUZXh0ID0gY3JlYXRlRWxlbWVudChcImgyXCIsIFwic2VjdGlvbi1oZWFkZXItdGV4dFwiLCBcImFib3V0LWhlYWRlci10ZXh0XCIpO1xuYWJvdXRIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCIwMi4gXCI7XG5jb25zdCBhYm91dEhlYWRlclRpdGxlID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJzZWN0aW9uLWhlYWRlci10aXRsZVwiLCBcImFib3V0LWhlYWRlci10aXRsZVwiKTtcbmFib3V0SGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IE1lXCI7XG5hYm91dEhlYWRlclRleHQuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkZXJUaXRsZSk7XG5hYm91dEhlYWRlci5hcHBlbmRDaGlsZChhYm91dEhlYWRlclRleHQpO1xuXG5jb25zdCBhYm91dEJvZHlJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgXCJzZWN0aW9uLWJvZHktaW1hZ2VcIiwgXCJhYm91dC1ib2R5LWltYWdlXCIpO1xuYWJvdXRCb2R5SW1hZ2Uuc3JjID0gQWJvdXRJbWc7XG5hYm91dEJvZHlJbWFnZS5hbHQgPSBcIk1lXCI7XG5hYm91dEJvZHkuYXBwZW5kQ2hpbGQoYWJvdXRCb2R5SW1hZ2UpO1xuY29uc3QgYWJvdXRCb2R5RGl2VGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJzZWN0aW9uLWJvZHktZGl2LXRleHRcIiwgXCJhYm91dC1ib2R5LWRpdi10ZXh0XCIpO1xuYWJvdXRCb2R5LmFwcGVuZENoaWxkKGFib3V0Qm9keURpdlRleHQpO1xuY29uc3QgYWJvdXRCb2R5VGV4dDEgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInNlY3Rpb24tYm9keS10ZXh0XCIsIFwiYWJvdXQtYm9keS10ZXh0LTFcIik7XG5hYm91dEJvZHlUZXh0MS50ZXh0Q29udGVudCA9IFwiSGV5IHRoZXJlISBJJ20gUmHDumwsIGFuZCBJIHdhbnQgdG8gc2hhcmUgYSBiaXQgb2YgbXkgc3Rvcnkgd2l0aCB5b3UuXCI7XG5hYm91dEJvZHlEaXZUZXh0LmFwcGVuZENoaWxkKGFib3V0Qm9keVRleHQxKTtcbmNvbnN0IGFib3V0Qm9keVRleHQyID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJzZWN0aW9uLWJvZHktdGV4dFwiLCBcImFib3V0LWJvZHktdGV4dC0yXCIpO1xuYWJvdXRCb2R5VGV4dDIudGV4dENvbnRlbnQgPSBcIkFib3V0IDIwIHllYXJzIGFnbywgSSBncmFkdWF0ZWQgaW4gQ29tcHV0ZXIgU2NpZW5jZS4gQWZ0ZXIgbGVhdmluZyB1bml2ZXJzaXR5LCBJIHNwZW50IHNvbWUgdGltZSB3b3JraW5nIGluIHRlY2ggY29tcGFuaWVzLCBidXQgc29vbiBlbm91Z2gsIEkganVtcGVkIGludG8gdGhlIGZhbWlseSBidXNpbmVzcyB0byBoZWxwIGl0IGdyb3cuIEZvciAxNSB5ZWFycywgSSB3b3JrZWQgc2lkZSBieSBzaWRlIHdpdGggbXkgZmF0aGVyIGFuZCBicm90aGVyLCB0YWNrbGluZyB0aGUgY2hhbGxlbmdlcyB0aGF0IGNvbWUgd2l0aCBtYW5hZ2luZyB5b3VyIG93biBjb21wYW55IGFuZCBsZWFkaW5nIGEgdGVhbS5cIjtcbmFib3V0Qm9keURpdlRleHQuYXBwZW5kQ2hpbGQoYWJvdXRCb2R5VGV4dDIpO1xuY29uc3QgYWJvdXRCb2R5VGV4dDMgPSBjcmVhdGVFbGVtZW50KFwicFwiLCBcInNlY3Rpb24tYm9keS10ZXh0XCIsIFwiYWJvdXQtYm9keS10ZXh0LTNcIik7XG5hYm91dEJvZHlUZXh0My50ZXh0Q29udGVudCA9IFwiV2l0aCBteSBmYXRoZXIgcmV0aXJlZCBhbmQgdGhlIGJ1c2luZXNzIHdlbGwtZXN0YWJsaXNoZWQsIG15IGJyb3RoZXIgYW5kIEkgbWFkZSB0aGUgZGVjaXNpb24gdG8gc2VsbCBpdCBhbmQgdGFrZSBvbiBuZXcgY2hhbGxlbmdlcy4gSW4gbXkgY2FzZSwgc29tZXRoaW5nIGRlZXAgZG93biBhbHdheXMgd2FudGVkIHRvIHJldHVybiB0byB0aGUgd29ybGQgb2YgSVQsIHNvIEkgZGVjaWRlZCB0byBnbyBhbGwtaW4gYW5kIGdldCBiYWNrIHVwIHRvIHNwZWVkLlwiO1xuYWJvdXRCb2R5RGl2VGV4dC5hcHBlbmRDaGlsZChhYm91dEJvZHlUZXh0Myk7XG5jb25zdCBhYm91dEJvZHlUZXh0NCA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwic2VjdGlvbi1ib2R5LXRleHRcIiwgXCJhYm91dC1ib2R5LXRleHQtNFwiKTtcbmFib3V0Qm9keVRleHQ0LnRleHRDb250ZW50ID0gXCJTaW5jZSB0aGVuLCBJJ3ZlIGJlZW4gZGl2aW5nIGludG8gdGhlIGxhdGVzdCB0ZWNobm9sb2dpZXMgYW5kIG1ldGhvZG9sb2dpZXMsIHRha2luZyBvbiBwcm9qZWN0cyBhbmQgbWFraW5nIHRoZSBtb3N0IG9mIHRoZW0uIEkndmUgYWx3YXlzIGJlZW4ga25vd24gZm9yIG15IGFkYXB0YWJpbGl0eSwgcHJvYmxlbS1zb2x2aW5nIHNraWxscywgYW5kIG15IGFiaWxpdHkgdG8gd29yayBlZmZlY3RpdmVseSB3aXRoaW4gYSB0ZWFtLiBJJ20gbm90IGFmcmFpZCB0byBlbWJyYWNlIG5ldyBjaGFsbGVuZ2VzIGFuZCBJIGhhdmUgYSBzdHJvbmcgcGFzc2lvbiBmb3Igc3RheWluZyB1cC10by1kYXRlIHdpdGggdGhlIGV2ZXItZXZvbHZpbmcgdGVjaCBsYW5kc2NhcGUuXCI7XG5hYm91dEJvZHlEaXZUZXh0LmFwcGVuZENoaWxkKGFib3V0Qm9keVRleHQ0KTtcbmNvbnN0IGFib3V0Qm9keVRleHQ1ID0gY3JlYXRlRWxlbWVudChcInBcIiwgXCJzZWN0aW9uLWJvZHktdGV4dFwiLCBcImFib3V0LWJvZHktdGV4dC01XCIpO1xuYWJvdXRCb2R5VGV4dDUudGV4dENvbnRlbnQgPSBcIkkgdGhyaXZlIG9uIGxlYXJuaW5nIGFuZCBhcHBseWluZyB0aGUgbW9zdCBzdWNjZXNzZnVsIHByYWN0aWNlcyBvZiB0aGUgbW9tZW50LCBhbGwgd2hpbGUgdGFja2xpbmcgcHJvamVjdHMgaGVhZC1vbi4gSXQncyBiZWVuIHF1aXRlIGEgam91cm5leSwgYW5kIEknbSBleGNpdGVkIHRvIGJyaW5nIG15IHdlYWx0aCBvZiBleHBlcmllbmNlLCBjb21iaW5lZCB3aXRoIG15IGRlZGljYXRpb24gdG8gaW5ub3ZhdGlvbiwgdG8geW91ciB0ZWFtLiBMZXQncyBjcmVhdGUgc29tZSBhbWF6aW5nIHRlY2ggdG9nZXRoZXIhXCI7XG5hYm91dEJvZHlEaXZUZXh0LmFwcGVuZENoaWxkKGFib3V0Qm9keVRleHQ1KTtcblxuLy8gU3RhY2tcbmNvbnN0IHN0YWNrSGVhZGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNlY3Rpb24taGVhZGVyXCIsIFwic3RhY2staGVhZGVyXCIpO1xuY29uc3Qgc3RhY2tCb2R5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInNlY3Rpb24tYm9keVwiLCBcInN0YWNrLWJvZHlcIik7XG5zdGFjay5hcHBlbmRDaGlsZChzdGFja0hlYWRlcik7XG5zdGFjay5hcHBlbmRDaGlsZChzdGFja0JvZHkpO1xuXG5jb25zdCBzdGFja0hlYWRlckxpbmUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwic2VjdGlvbi1oZWFkZXItbGluZVwiLCBcInN0YWNrLWhlYWRlci1saW5lXCIpO1xuc3RhY2tIZWFkZXIuYXBwZW5kQ2hpbGQoc3RhY2tIZWFkZXJMaW5lKTtcbmNvbnN0IHN0YWNrSGVhZGVyVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBcInNlY3Rpb24taGVhZGVyLXRleHRcIiwgXCJzdGFjay1oZWFkZXItdGV4dFwiKTtcbnN0YWNrSGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiMDMuIFwiO1xuY29uc3Qgc3RhY2tIZWFkZXJUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwic2VjdGlvbi1oZWFkZXItdGl0bGVcIiwgXCJzdGFjay1oZWFkZXItdGl0bGVcIik7XG5zdGFja0hlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJTdGFja1wiO1xuc3RhY2tIZWFkZXJUZXh0LmFwcGVuZENoaWxkKHN0YWNrSGVhZGVyVGl0bGUpO1xuc3RhY2tIZWFkZXIuYXBwZW5kQ2hpbGQoc3RhY2tIZWFkZXJUZXh0KTtcblxuY29uc3Qgc3RhY2tUYWJsZSA9IGNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCBcInNlY3Rpb24tYm9keS10YWJsZVwiLCBcInN0YWNrLXRhYmxlXCIpO1xuc3RhY2tCb2R5LmFwcGVuZENoaWxkKHN0YWNrVGFibGUpO1xuY29uc3Qgc3RhY2tUYWJsZUhlYWQgPSBjcmVhdGVFbGVtZW50KFwidGhlYWRcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtaGVhZFwiLCBcInN0YWNrLXRhYmxlLWhlYWRcIik7XG5zdGFja1RhYmxlLmFwcGVuZENoaWxkKHN0YWNrVGFibGVIZWFkKTtcbmNvbnN0IHN0YWNrVGFibGVIZWFkUm93ID0gY3JlYXRlRWxlbWVudChcInRyXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWhlYWQtcm93XCIsIFwic3RhY2stdGFibGUtaGVhZC1yb3dcIik7XG5zdGFja1RhYmxlSGVhZC5hcHBlbmRDaGlsZChzdGFja1RhYmxlSGVhZFJvdyk7XG5jb25zdCBzdGFja1RhYmxlSGVhZENlbGwwID0gY3JlYXRlRWxlbWVudChcInRoXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWhlYWQtY2VsbFwiLCBcInN0YWNrLXRhYmxlLWhlYWQtY2VsbC0wXCIpO1xuc3RhY2tUYWJsZUhlYWRDZWxsMC50ZXh0Q29udGVudCA9IFwiXCI7XG5zdGFja1RhYmxlSGVhZFJvdy5hcHBlbmRDaGlsZChzdGFja1RhYmxlSGVhZENlbGwwKTtcbmNvbnN0IHN0YWNrVGFibGVIZWFkQ2VsbDEgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtaGVhZC1jZWxsXCIsIFwic3RhY2stdGFibGUtaGVhZC1jZWxsLTFcIik7XG5zdGFja1RhYmxlSGVhZENlbGwxLnRleHRDb250ZW50ID0gXCJcIjtcbnN0YWNrVGFibGVIZWFkUm93LmFwcGVuZENoaWxkKHN0YWNrVGFibGVIZWFkQ2VsbDEpO1xuY29uc3Qgc3RhY2tUYWJsZUhlYWRDZWxsMiA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1oZWFkLWNlbGxcIiwgXCJzdGFjay10YWJsZS1oZWFkLWNlbGwtMlwiKTtcbnN0YWNrVGFibGVIZWFkQ2VsbDIudGV4dENvbnRlbnQgPSBcIkJlZ2lubmVyXCI7XG5zdGFja1RhYmxlSGVhZFJvdy5hcHBlbmRDaGlsZChzdGFja1RhYmxlSGVhZENlbGwyKTtcbmNvbnN0IHN0YWNrVGFibGVIZWFkQ2VsbDMgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtaGVhZC1jZWxsXCIsIFwic3RhY2stdGFibGUtaGVhZC1jZWxsLTNcIik7XG5zdGFja1RhYmxlSGVhZENlbGwzLnRleHRDb250ZW50ID0gXCJFbGVtZW50YXJ5XCI7XG5zdGFja1RhYmxlSGVhZFJvdy5hcHBlbmRDaGlsZChzdGFja1RhYmxlSGVhZENlbGwzKTtcbmNvbnN0IHN0YWNrVGFibGVIZWFkQ2VsbDQgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtaGVhZC1jZWxsXCIsIFwic3RhY2stdGFibGUtaGVhZC1jZWxsLTRcIik7XG5zdGFja1RhYmxlSGVhZENlbGw0LnRleHRDb250ZW50ID0gXCJJbnRlcm1lZGlhdGVcIjtcbnN0YWNrVGFibGVIZWFkUm93LmFwcGVuZENoaWxkKHN0YWNrVGFibGVIZWFkQ2VsbDQpO1xuY29uc3Qgc3RhY2tUYWJsZUhlYWRDZWxsNSA9IGNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1oZWFkLWNlbGxcIiwgXCJzdGFjay10YWJsZS1oZWFkLWNlbGwtNVwiKTtcbnN0YWNrVGFibGVIZWFkQ2VsbDUudGV4dENvbnRlbnQgPSBcIkFkdmFuY2VkXCI7XG5zdGFja1RhYmxlSGVhZFJvdy5hcHBlbmRDaGlsZChzdGFja1RhYmxlSGVhZENlbGw1KTtcbmNvbnN0IHN0YWNrVGFibGVIZWFkQ2VsbDYgPSBjcmVhdGVFbGVtZW50KFwidGhcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtaGVhZC1jZWxsXCIsIFwic3RhY2stdGFibGUtaGVhZC1jZWxsLTZcIik7XG5zdGFja1RhYmxlSGVhZENlbGw2LnRleHRDb250ZW50ID0gXCJFeHBlcnRcIjtcbnN0YWNrVGFibGVIZWFkUm93LmFwcGVuZENoaWxkKHN0YWNrVGFibGVIZWFkQ2VsbDYpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHkgPSBjcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgXCJzZWN0aW9uLWJvZHktdGFibGUtYm9keVwiLCBcInN0YWNrLXRhYmxlLWJvZHlcIik7XG5zdGFja1RhYmxlLmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5KTtcbmNvbnN0IHN0YWNrVGFibGVCb2R5Um93ID0gY3JlYXRlRWxlbWVudChcInRyXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktcm93XCIsIFwic3RhY2stdGFibGUtYm9keS1yb3dcIik7XG5zdGFja1RhYmxlQm9keS5hcHBlbmRDaGlsZChzdGFja1RhYmxlQm9keVJvdyk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwxID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0xXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMS50ZXh0Q29udGVudCA9IFwiSmF2YVNjcmlwdFwiO1xuc3RhY2tUYWJsZUJvZHlSb3cuYXBwZW5kQ2hpbGQoc3RhY2tUYWJsZUJvZHlDZWxsMSk7XG5jb25zdCBzdGFja1RhYmxlQm9keUNlbGwyID0gY3JlYXRlRWxlbWVudChcInRkXCIsIFwic2VjdGlvbi1ib2R5LXRhYmxlLWJvZHktY2VsbFwiLCBcInN0YWNrLXRhYmxlLWJvZHktY2VsbC0yXCIpO1xuc3RhY2tUYWJsZUJvZHlDZWxsMi50ZXh0Q29udGVudCA9IFwiUmVhY3RcIjtcbnN0YWNrVGFibGVCb2R5Um93LmFwcGVuZENoaWxkKHN0YWNrVGFibGVCb2R5Q2VsbDIpO1xuY29uc3Qgc3RhY2tUYWJsZUJvZHlDZWxsMyA9IGNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBcInNlY3Rpb24tYm9keS10YWJsZS1ib2R5LWNlbGxcIiwgXCJzdGFjay10YWJsZS1ib2R5LWNlbGwtM1wiKTtcbnN0YWNrVGFibGVCb2R5Q2VsbDMudGV4dENvbnRlbnQgPSBcIlJlZHV4XCI7XG5cbi8vIENyZWF0ZSB0aGUgY3JlZGl0cyBhbmQgYXBwZW5kIHRoZW0gdG8gdGhlIGZvb3RlclxuY29uc3QgY3JlZGl0cyA9IGNyZWF0ZUVsZW1lbnQoXCJwXCIsXCJjcmVkaXRzXCIsbnVsbClcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBxdW90ZXNcbmNyZWRpdHMuaW5uZXJIVE1MID0gJ0NyZWF0ZWQgYnkgUkHDmkwgSklNw4lORVouIEZvbGxvdyBteSB3b3JrIG9uIEdpdEh1YjogPGJyPjxicj48YSBjbGFzcz1cImdpdGh1Yi1saW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92ZXJlZ29yblwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj48c3ZnIGNsYXNzPVwiZ2l0aHViLWljb25cIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04IDBDMy41OCAwIDAgMy41OCAwIDhjMCAzLjU0IDIuMjkgNi41MyA1LjQ3IDcuNTkuNC4wNy41NS0uMTcuNTUtLjM4IDAtLjE5LS4wMS0uODItLjAxLTEuNDktMi4wMS4zNy0yLjUzLS40OS0yLjY5LS45NC0uMDktLjIzLS40OC0uOTQtLjgyLTEuMTMtLjI4LS4xNS0uNjgtLjUyLS4wMS0uNTMuNjMtLjAxIDEuMDguNTggMS4yMy44Mi43MiAxLjIxIDEuODcuODcgMi4zMy42Ni4wNy0uNTIuMjgtLjg3LjUxLTEuMDctMS43OC0uMi0zLjY0LS44OS0zLjY0LTMuOTUgMC0uODcuMzEtMS41OS44Mi0yLjE1LS4wOC0uMi0uMzYtMS4wMi4wOC0yLjEyIDAgMCAuNjctLjIxIDIuMi44Mi42NC0uMTggMS4zMi0uMjcgMi0uMjcuNjggMCAxLjM2LjA5IDIgLjI3IDEuNTMtMS4wNCAyLjItLjgyIDIuMi0uODIuNDQgMS4xLjE2IDEuOTIuMDggMi4xMi41MS41Ni44MiAxLjI3LjgyIDIuMTUgMCAzLjA3LTEuODcgMy43NS0zLjY1IDMuOTUuMjkuMjUuNTQuNzMuNTQgMS40OCAwIDEuMDctLjAxIDEuOTMtLjAxIDIuMiAwIC4yMS4xNS40Ni41NS4zOEE4LjAxMyA4LjAxMyAwIDAgMCAxNiA4YzAtNC40Mi0zLjU4LTgtOC04elwiLz48L3N2Zz48L2E+J1xuZm9vdGVyLmFwcGVuZENoaWxkKGNyZWRpdHMpIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9TcGFjZV9Hcm90ZXNrL1NwYWNlR3JvdGVzay1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2NpcmN1aXQtcHJpbWFyeS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi8qIE1ZIE9XTiBTVFlMRVMgRlJPTSBIRVJFICovXG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnU3BhY2UgR3JvdGVzayc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnU3BhY2UgR3JvdGVzaycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjM5MDYyNXZ3KTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmhlYWRlcixmb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICBjb2xvcjogI0U2RkZGNjtcbn1cblxuaGVhZGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1zaXplOiAyO1xufVxuXG4ubG9nbyB7XG4gICAgY29sb3I6ICNFNkZGRjY7XG59XG5cbm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudS1pdGVtIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUtaXRlbTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLm1lbnUtaXRlbTpob3Zlcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZGRkY2O1xufVxuXG4ubWVudS1pdGVtLW51bWJlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgY29sb3I6ICMwMEE5N0Y7XG59XG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMTsgLyogRXN0byBoYWNlIHF1ZSBtYWluIG9jdXBlIHRvZG8gZWwgZXNwYWNpbyByZXN0YW50ZSBkZXNwdcOpcyBkZSBoZWFkZXIgeSBhbnRlcyBkZSBmb290ZXIgKi9cbiAgICBnYXA6IDUlO1xufVxuXG4uaG9tZSB7XG4gICAgLyogcGFkZGluZy10b3A6IDZyZW07ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIG5vLXJlcGVhdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZ2FwOiA1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5tYWluLXRleHQge1xuICAgIGNvbG9yOiAjMDE4NzZDO1xuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMCU7XG59XG5cbi5tYWluLXRleHQtbmFtZSB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC1zaXplOiA0cmVtO1xufVxuXG4ubWFpbi10ZXh0LXJvbGUge1xuICAgIGNvbG9yOiAjMDE4NzZDO1xufVxuXG4uaG9tZS1pbWFnZSB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLyogQWJvdXQgc2VjdGlvbiAqL1xuXG4uYWJvdXQge1xuICAgIC8qIHBhZGRpbmctdG9wOiA2cmVtOyAqL1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGdhcDogNSU7XG59XG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuI2Fib3V0LWhlYWRlci10ZXh0IHtcbiAgICBjb2xvcjogIzAxODc2Qztcbn1cblxuI2Fib3V0LWhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5zZWN0aW9uLWhlYWRlci1saW5lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICAvKiBtYXJnaW4tdG9wOiAwLjVyZW07ICovXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE5N0Y7XG59XG5cbiNhYm91dC1ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IHRvcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDUlO1xufVxuXG4jYWJvdXQtYm9keS1pbWFnZSB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLnNlY3Rpb24tYm9keS10ZXh0IHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4vKiBTdGFjayBzZWN0aW9uICovXG5cbi5zdGFjayB7XG4gICAgLyogcGFkZGluZy10b3A6IDZyZW07ICovXG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZ2FwOiA1JTtcbn1cblxuI3N0YWNrLWhlYWRlci10ZXh0IHtcbiAgICBjb2xvcjogIzAxODc2Qztcbn1cblxuI3N0YWNrLWhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi8qIGZvb3RlciAqL1xuXG5mb290ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3JlZGl0cyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBTdHlsZSB0aGUgbGluayB0byByZW1vdmUgZGVmYXVsdCBzdHlsaW5nICovXG4uZ2l0aHViLWxpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIEFkZCB0aGUgaG92ZXIgZWZmZWN0ICovXG4uZ2l0aHViLWljb24ge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0OyAvKiBBZGQgYSB0cmFuc2l0aW9uIGZvciB0aGUgdHJhbnNmb3JtIHByb3BlcnR5ICovXG59XG5cbi5naXRodWItbGluazpob3ZlciAuZ2l0aHViLWljb24ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7IC8qIFJvdGF0ZSB0aGUgaWNvbiAxODAgZGVncmVlcyB3aGVuIGhvdmVyZWQgKi9cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFD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c291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIE1ZIE9XTiBTVFlMRVMgRlJPTSBIRVJFICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU3BhY2UgR3JvdGVzayc7XFxuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU3BhY2VfR3JvdGVzay9TcGFjZUdyb3Rlc2stVmFyaWFibGVGb250X3dnaHQudHRmJyk7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LWZhbWlseTogJ1NwYWNlIEdyb3Rlc2snLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuMzkwNjI1dncpO1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmhlYWRlcixmb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICAgIGNvbG9yOiAjRTZGRkY2O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZTogMjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBjb2xvcjogI0U2RkZGNjtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMCU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyOjphZnRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZGRkY2O1xcbn1cXG5cXG4ubWVudS1pdGVtLW51bWJlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBjb2xvcjogIzAwQTk3RjtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7IC8qIEVzdG8gaGFjZSBxdWUgbWFpbiBvY3VwZSB0b2RvIGVsIGVzcGFjaW8gcmVzdGFudGUgZGVzcHXDqXMgZGUgaGVhZGVyIHkgYW50ZXMgZGUgZm9vdGVyICovXFxuICAgIGdhcDogNSU7XFxufVxcblxcbi5ob21lIHtcXG4gICAgLyogcGFkZGluZy10b3A6IDZyZW07ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9pbWFnZXMvY2lyY3VpdC1wcmltYXJ5LnN2ZycpIG5vLXJlcGVhdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZ2FwOiA1JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm1haW4tdGV4dCB7XFxuICAgIGNvbG9yOiAjMDE4NzZDO1xcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMCU7XFxufVxcblxcbi5tYWluLXRleHQtbmFtZSB7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5tYWluLXRleHQtcm9sZSB7XFxuICAgIGNvbG9yOiAjMDE4NzZDO1xcbn1cXG5cXG4uaG9tZS1pbWFnZSB7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBBYm91dCBzZWN0aW9uICovXFxuXFxuLmFib3V0IHtcXG4gICAgLyogcGFkZGluZy10b3A6IDZyZW07ICovXFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGdhcDogNSU7XFxufVxcblxcbi5zZWN0aW9uLWhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4jYWJvdXQtaGVhZGVyLXRleHQge1xcbiAgICBjb2xvcjogIzAxODc2QztcXG59XFxuXFxuI2Fib3V0LWhlYWRlci10aXRsZSB7XFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4uc2VjdGlvbi1oZWFkZXItbGluZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgLyogbWFyZ2luLXRvcDogMC41cmVtOyAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE5N0Y7XFxufVxcblxcbiNhYm91dC1ib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiB0b3A7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDUlO1xcbn1cXG5cXG4jYWJvdXQtYm9keS1pbWFnZSB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc2VjdGlvbi1ib2R5LXRleHQge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi8qIFN0YWNrIHNlY3Rpb24gKi9cXG5cXG4uc3RhY2sge1xcbiAgICAvKiBwYWRkaW5nLXRvcDogNnJlbTsgKi9cXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZ2FwOiA1JTtcXG59XFxuXFxuI3N0YWNrLWhlYWRlci10ZXh0IHtcXG4gICAgY29sb3I6ICMwMTg3NkM7XFxufVxcblxcbiNzdGFjay1oZWFkZXItdGl0bGUge1xcbiAgICBjb2xvcjogIzAwMDAwMDtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuXFxuZm9vdGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jcmVkaXRzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgbGluayB0byByZW1vdmUgZGVmYXVsdCBzdHlsaW5nICovXFxuLmdpdGh1Yi1saW5rIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4vKiBBZGQgdGhlIGhvdmVyIGVmZmVjdCAqL1xcbi5naXRodWItaWNvbiB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0OyAvKiBBZGQgYSB0cmFuc2l0aW9uIGZvciB0aGUgdHJhbnNmb3JtIHByb3BlcnR5ICovXFxufVxcblxcbi5naXRodWItbGluazpob3ZlciAuZ2l0aHViLWljb24ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyAvKiBSb3RhdGUgdGhlIGljb24gMTgwIGRlZ3JlZXMgd2hlbiBob3ZlcmVkICovXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIk1lIiwiQWJvdXRJbWciLCJjcmVhdGVFbGVtZW50IiwidGFnIiwiY2xhc3NOYW1lIiwiaWQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJoZWFkZXIiLCJtYWluIiwiZm9vdGVyIiwiYm9keSIsImFwcGVuZENoaWxkIiwibG9nbyIsIm5hdiIsImxvZ29UZXh0IiwidGV4dENvbnRlbnQiLCJtZW51IiwibWVudUl0ZW1zIiwiY291bnRlciIsInR3b0RpZ2l0Q291bnRlciIsInZhbHVlIiwiZm9yRWFjaCIsIml0ZW0iLCJudW1MYWJlbCIsIm1lbnVJdGVtIiwiaXRlbUxpbmsiLCJob21lIiwiYWJvdXQiLCJzdGFjayIsInByb2plY3RzIiwiY29udGFjdCIsIm1haW5UZXh0IiwibmV3TGluZTEiLCJzcGFuTmFtZSIsIm5ld0xpbmUyIiwic3BhblJvbGUiLCJNZUltYWdlIiwic3JjIiwiYWx0IiwiYWJvdXRIZWFkZXIiLCJhYm91dEJvZHkiLCJhYm91dEhlYWRlckxpbmUiLCJhYm91dEhlYWRlclRleHQiLCJhYm91dEhlYWRlclRpdGxlIiwiYWJvdXRCb2R5SW1hZ2UiLCJhYm91dEJvZHlEaXZUZXh0IiwiYWJvdXRCb2R5VGV4dDEiLCJhYm91dEJvZHlUZXh0MiIsImFib3V0Qm9keVRleHQzIiwiYWJvdXRCb2R5VGV4dDQiLCJhYm91dEJvZHlUZXh0NSIsInN0YWNrSGVhZGVyIiwic3RhY2tCb2R5Iiwic3RhY2tIZWFkZXJMaW5lIiwic3RhY2tIZWFkZXJUZXh0Iiwic3RhY2tIZWFkZXJUaXRsZSIsInN0YWNrVGFibGUiLCJzdGFja1RhYmxlSGVhZCIsInN0YWNrVGFibGVIZWFkUm93Iiwic3RhY2tUYWJsZUhlYWRDZWxsMCIsInN0YWNrVGFibGVIZWFkQ2VsbDEiLCJzdGFja1RhYmxlSGVhZENlbGwyIiwic3RhY2tUYWJsZUhlYWRDZWxsMyIsInN0YWNrVGFibGVIZWFkQ2VsbDQiLCJzdGFja1RhYmxlSGVhZENlbGw1Iiwic3RhY2tUYWJsZUhlYWRDZWxsNiIsInN0YWNrVGFibGVCb2R5Iiwic3RhY2tUYWJsZUJvZHlSb3ciLCJzdGFja1RhYmxlQm9keUNlbGwxIiwic3RhY2tUYWJsZUJvZHlDZWxsMiIsInN0YWNrVGFibGVCb2R5Q2VsbDMiLCJjcmVkaXRzIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==