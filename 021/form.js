console.log('Nice Form');


const form = document.querySelector('form');
const button = form.querySelector('button');

const inputs = form.querySelectorAll('input');
const selects = form.querySelectorAll('select');
const textareas = form.querySelectorAll('textarea');

const data = {};


button.addEventListener('click', _ => {
    inputs.forEach(input => {
        data[input.name] = input.value;
    });
    selects.forEach(select => {
        data[select.name] = select.value;
    });
    textareas.forEach(textarea => {
        data[textarea.name] = textarea.value;
    });

    console.log(data);
});