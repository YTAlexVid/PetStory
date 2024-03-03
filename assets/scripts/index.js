const subscribe_field = document.querySelector('#footer__input-field');
const subscribe_button = document.querySelector('.footer__input-button');
const email_regex = /^[\w\-\.]+@[\w\-]+\.[\w\-]{2,4}$/g
subscribe_field.value="";
subscribe_field.addEventListener("input", e=>{
    let input_text = e.target.value;
    if(input_text.length===0){
        subscribe_button.disabled=true;
        
        return;
    }
    let isValid = input_text.match(email_regex);
    subscribe_button.disabled=!isValid;
    
})