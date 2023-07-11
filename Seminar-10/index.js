import { dataInfo } from "./data.js";

const divTitle = document.querySelector('h1');
const content = document.querySelector('.content');
const data = JSON.parse(dataInfo);
console.log(data);

divTitle.textContent = 'Цветочная лавка';
divTitle.style.textAlign = 'center';
divTitle.style.marginBottom = '45px';


data.forEach(({ id, name, quantity, description, url}) => {
    const div = document.createElement('div');
    div.classList.add('card');
    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = url;
    img.width = 300;
    img.height = 250;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.style.display = 'flex';
    cardBody.style.flexDirection = 'column';
    cardBody.style.justifyContent = 'center';
    cardBody.style.alignItems = 'center';
    cardBody.style.gap = '10px';
    cardBody.style.width = 300;


    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = name;
    title.style.color = 'grey';
    title.style.fontSize = '24px';
    title.style.textAlign = 'center';
    title.style.margin = '0';

    const subtitle = document.createElement('h6');
    subtitle.classList.add('card-subtitle');
    subtitle.textContent = quantity + " шт";
    subtitle.style.fontSize = '18px';
    subtitle.style.margin = 0;

    const txt = document.createElement('p');
    txt.classList.add('card-txt');
    txt.textContent = description;
    txt.style.fontSize = '16px';
    txt.style.margin = 0;
    txt.style.width = '300px';
    txt.style.textAlign = 'center';

    const idPara = document.createElement('p');
    idPara.classList.add('card-content');
    idPara.textContent = `ID ${id}`;

    cardBody.appendChild(title);
    cardBody.appendChild(txt);
    cardBody.appendChild(subtitle);
    cardBody.appendChild(idPara);
    
    
    div.appendChild(img);
    div.appendChild(cardBody);

    content.appendChild(div);
    content.style.display = 'flex';
    content.style.gap = '19px';
    content.style.justifyContent = 'center';
});