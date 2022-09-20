import { content, createHtmlElement } from './index';

export const renderContact = () => {
    const divMain = createHtmlElement('div', 'contact', null);
    const contactGrid = createHtmlElement('div', 'contact-grid', null);
    const hours = createContactElement('Hours', ['Monday - Sunday 5-10:30 pm']);
    const location = createContactElement('Location', ['550 Capicola Blvd, Fort Lauderdale, FL 33304', 'info@tonypepperoni.com']);
    const footer = createHtmlElement('p', 'footer', 'Tony O\'s is a part of TPG - The Pepperoni Group');

    content.appendChild(divMain);
    divMain.appendChild(contactGrid);
    contactGrid.appendChild(hours);
    contactGrid.appendChild(location);
    divMain.appendChild(footer);
};

const createContactElement = (elementName, descLines) => {
    const contactElement = createHtmlElement('div', 'contact-element', `${elementName}`);
    const contactElementName = createHtmlElement('p', 'contact-element-name', null);
    contactElement.appendChild(contactElementName);
    descLines.forEach(line => {
        const htmlLine = createHtmlElement('p', 'contact-para', `${line}`);
        contactElement.appendChild(htmlLine);
    });

    return contactElement;
}