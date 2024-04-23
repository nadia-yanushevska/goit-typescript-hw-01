import { concatenation } from './concatenation.js';
const button = document.querySelector('button');
const input = document.querySelector('input');
if (input && button) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
    });
}
//# sourceMappingURL=index.js.map