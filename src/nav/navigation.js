import navItems from './nav-items.json';

export const createNavHTML = (elementId) => {
    const nav = document.createElement('nav');
    nav.classList.add('main-nav');

    const element = document.querySelector(elementId);

    nav.innerHTML  = navItems.map(item => `<a class="link" href="${item.link}">${item.name} </a>`).join('');

    return nav;
}