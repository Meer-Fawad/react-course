function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    domElement.textContent = reactElement.children;

    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    container.appendChild(domElement);
}

const reactElement = {

    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Google'

};
const reactElement2 = {

    type: 'a',
    props: {
        href: 'https://www.chatgpt.com',
        target: '_blank',
    },
    children: 'ChatGPT'
};


const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
customRender(reactElement2, mainContainer);