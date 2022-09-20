import { content, createHtmlElement } from './index';

const starters = [
    {
        itemName:'TUNA CRUDO',
        description:'maitake mushroom. chili oil.',
        price: '24',
    },
    {
        itemName:'PROSCIUTTO+MELON',
        description:'buratta. balsamic. basil.',
        price: '22',
    },
    {
        itemName:'PANE BURRO E ALICI',
        description:'crostini. butter. anchovy.',
        price: '14',
    },
    {
        itemName:'MUSSELS',
        description:'coconut-curry. red chili.',
        price: '28',
    },
    {
        itemName:'MEATBALLS',
        description:'stracciatella. basil.',
        price: '20',
    },
];

const mains = [
    {
        itemName:'ORECCHIETTE',
        description:'broccoli rabe. sausage. cannelini beans.',
        price: '28',
    },
    {
        itemName:'BEET FETTUCCINE',
        description:'lamb. parmesean. mint.',
        price: '32',
    },
    {
        itemName:'CRISPY DUCK',
        description:'bourbon-berry. sweet potato.',
        price: '36',
    },
    {
        itemName:'HANGER STEAK',
        description:'soy glaze. asian salad.',
        price: '36',
    },
    {
        itemName:'SOCKEYE SALMON',
        description:'cedar plank. tomato. red chili.',
        price: '28',
    },
];

const desserts = [
    {
        itemName:'PEACHES & CREAM',
        description: 'grilled peach. vanilla ice cream. bordeaux crumble. ',
        price: '14',
    },
    {
        itemName:'CLASSIC CHIPWICH',
        description:'cookie. gelato.',
        price: '14',
    },
    {
        itemName:'HELLO DOLLY',
        description:'pecan. coconut. chocolate',
        price: '14',
    },
    {
        itemName:'ANGEL CAKE',
        description:'strawberry. whipped cream.'
        price: '14',
    },
];

const createMenuSection = (sectionName) => {
    const menuSection = createHtmlElement('div', null, null);
    const text = createHtmlElement('p', 'cursive-menu', `${sectionName}`);
    const hr = createHtmlElement('hr', null, null);

    menuSection.appendChild(text);
    menuSection.appendChild(hr);

    return menuSection;
};

const createMenuItem = (itemName, description, price) => {
    const menuItem = createHtmlElement('section', 'menu-item', null);
    const htmlItemName = createHtmlElement('p', 'item-name', `${itemName}`);
    const htmlDescription = createHtmlElement('p', 'item-desc', `${description}`);
    const htmlPrice = createHtmlElement('p', 'item-desc', `$${price}`);

    menuItem.appendChild(htmlItemName);
    menuItem.appendChild(htmlDescription);
    menuItem.appendChild(htmlPrice);

    return menuItem;
};

export const renderMenu = () => {
    
    const divMain = createHtmlElement('div', 'menu', null);
    content.appendChild(divMain);
    
    const startersSection = createMenuSection('Starters');
    divMain.appendChild(startersSection);
    starters.forEach(item => {
        const htmlItem = createMenuItem(`${item.itemName}`, `${item.description}`, `${item.price}`);
        divMain.appendChild(htmlItem);
    });

    const mainsSection = createMenuSection('Main dishes');
    divMain.appendChild(mainsSection);
    mains.forEach(item => {
        const htmlItem = createMenuItem(`${item.itemName}`, `${item.description}`, `${item.price}`);
        divMain.appendChild(htmlItem);
    });

    const dessertsSection = createMenuSection('Dessert');
    divMain.appendChild(dessertsSection);
    desserts.forEach(item => {
        const htmlItem = createMenuItem(`${item.itemName}`, `${item.description}`, `${item.price}`);
        divMain.appendChild(htmlItem);
    });
   
    const footer = createHtmlElement('p', 'footer', 'Osteria at the waterfront is a part of Spencer group');
    divMain.appendChild(footer);
};


