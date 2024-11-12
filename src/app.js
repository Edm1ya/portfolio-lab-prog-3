import { createNavHTML } from './nav/navigation.js';

export const App = (elementId) => {
    const element = document.querySelector(elementId);

    navigation = createNavHTML(elementId);
    element.appendChild(navigation);
}