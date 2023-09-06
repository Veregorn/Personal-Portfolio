import "./styles/index.css";
import Me from "./assets/images/charles-deloye-9hFPS9YYaTo-unsplash.jpg";

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

const MeImage = createElement("img");
MeImage.src = Me;
MeImage.alt = "Me";
home.appendChild(MeImage);

// About
const aboutHeader = createElement("div", "section-header", "about-header");
const aboutBody = createElement("div", "section-body", "about-body");
about.appendChild(aboutHeader);
about.appendChild(aboutBody);

const aboutHeaderText = createElement("h2", "section-header-text", "about-header-text");
aboutHeaderText.textContent = "02. ";
const aboutHeaderTitle = createElement("span", "section-header-title", "about-header-title");
aboutHeaderTitle.textContent = "About Me";
aboutHeaderText.appendChild(aboutHeaderTitle);
aboutHeader.appendChild(aboutHeaderText);
const aboutHeaderLine = createElement("div", "section-header-line", "about-header-line");
aboutHeader.appendChild(aboutHeaderLine);

const aboutBodyImage = createElement("img", "section-body-image", "about-body-image");
aboutBodyImage.src = Me;
aboutBodyImage.alt = "Me";
aboutBody.appendChild(aboutBodyImage);
const aboutBodyText = createElement("p", "section-body-text", "about-body-text");
aboutBodyText.textContent = "I am a Full Stack Developer with a passion for learning and creating. I am currently looking for a job as a Full Stack Developer. I am a fast learner and I am always looking for new challenges and opportunities to grow as a developer.";
aboutBody.appendChild(aboutBodyText);

// Create the credits and append them to the footer
const credits = createElement("p","credits",null)
// eslint-disable-next-line quotes
credits.innerHTML = 'Created by RAÚL JIMÉNEZ. Follow my work on GitHub: <br><br><a class="github-link" href="https://github.com/veregorn" target="_blank" rel="noopener noreferrer"><svg class="github-icon" width="32" height="32" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a>'
footer.appendChild(credits)