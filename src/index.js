import "./styles/index.css";
import Working from "./assets/images/pexels-canva-studio-3153203.jpg";

const randomTextElement = document.createElement("p");
randomTextElement.textContent = "Random text";
document.body.appendChild(randomTextElement);

const workingImage = document.createElement("img");
workingImage.src = Working;
workingImage.alt = "Working";
document.body.appendChild(workingImage);