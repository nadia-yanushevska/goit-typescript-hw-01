import { concatenation1 } from './concatenation';

function concatenation(firstWord: string, secondWord: string) {
    console.log(`${firstWord} ${secondWord}`);
}

export { concatenation };

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (input && button) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
        concatenation1(input.value, 'hello!');
    });
}
