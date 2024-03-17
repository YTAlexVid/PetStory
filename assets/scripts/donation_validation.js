const donate_field = document.getElementById('pick_and_feed__custom-donation-field');
const donate_button = document.querySelector('.pick_and_feed__button-feed');
const donate_regex = /^[1-9][0-9]*$/g
donate_field.value="";

donate_button.disabled=true;
donate_button.style.cursor='not-allowed';
donate_button.style.background='gray';
donate_field.style.borderColor='rgb(254, 143, 24)';

donate_field.addEventListener("input", e=>{
    let input_text = e.target.value;
    if(input_text.length===0){
        donate_button.disabled=true;
        donate_button.style.cursor='not-allowed';
        donate_field.style.borderColor='rgb(254, 143, 24)';
        return;
    }
    let isValid = input_text.match(donate_regex);
    donate_button.disabled=!isValid;
    donate_field.style.borderColor = (isValid?'green':'red');
    donate_button.style.cursor=(isValid?'pointer':'not-allowed');
    donate_button.style.background='';

})