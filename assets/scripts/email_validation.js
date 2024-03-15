const subscribe_field = document.querySelector('#footer__input-field');
const subscribe_button = document.querySelector('.footer__input-button');
const subscribe_result = document.querySelector('.footer__input-result');
const email_regex = /^[\w\-\.]+@[\w\-]+\.[\w\-]{2,4}$/g
subscribe_field.value="";

subscribe_button.disabled=true;
subscribe_button.style.cursor='not-allowed';
subscribe_field.style.borderColor='rgb(254, 143, 24)';
subscribe_result.style.display='none';

subscribe_field.addEventListener("input", e=>{
    let input_text = e.target.value;
    if(input_text.length===0){
        subscribe_button.disabled=true;
        subscribe_button.style.cursor='not-allowed';
        subscribe_field.style.borderColor='rgb(254, 143, 24)';
        subscribe_result.style.display='none';
        return;
    }
    let isValid = input_text.match(email_regex);
    subscribe_button.disabled=!isValid;
    subscribe_field.style.borderColor = (isValid?'green':'red');
    subscribe_result.style.display='block';
    subscribe_result.style.color=(isValid?'green':'red');
    subscribe_button.style.cursor=(isValid?'pointer':'not-allowed');
    subscribe_result.textContent = (isValid?'Success':'Invalid email');
})