import { content, createHtmlElement } from './index';
import { createMenuPage } from './index';

export const renderHome = () => {
    
    const divMain = createHtmlElement('div', 'home', null);
    const cursivePara = createHtmlElement('p', 'cursive', 'Tony O\'s');
    const basicPara = createHtmlElement('p', null, 'FINE CUISINE.');
    const orderNow = createHtmlElement('button', 'order', 'VIEW MENU');
    orderNow.addEventListener('click', createMenuPage);
    const footer = createHtmlElement('p', 'footer', 'Tony O\'s is a part of TPG - The Pepperoni Group');

    content.appendChild(divMain);
    divMain.appendChild(cursivePara);
    divMain.appendChild(basicPara);
    divMain.appendChild(orderNow);
    divMain.appendChild(footer);
};


