import { concatenation1 } from './concatenation.js';
function concatenation(firstWord, secondWord) {
    console.log(`${firstWord} ${secondWord}`);
}
export { concatenation };
const button = document.querySelector('button');
const input = document.querySelector('input');
if (input && button) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
        concatenation1(input.value, 'hello!');
    });
}
//# sourceMappingURL=index.js.map