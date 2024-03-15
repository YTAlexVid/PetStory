const progress_bar_points = document.querySelector('.pick_and_feed__progress_bar-points');
const progress_bar_prices = document.querySelector('.pick_and_feed__progress_bar-prices');
const calculator_result = document.querySelector('.pick_and_feed__diet_calculator-result');
const prices_arr = [5000, 2000, 1000, 500, 250, 100, 50 ,25];

let selected_index = -1;
function recalc(){
    calculator_result.innerHTML=prices_arr[selected_index]/250;
}
progress_bar_points.addEventListener('click', e=>{
    if(!e.target.classList.contains('pick_and_feed__progress_bar-point') 
        && !e.target.classList.contains('pick_and_feed__progress_bar-point-inner') 
        && !e.target.classList.contains('pick_and_feed__progress_bar-point-after') 
        && !e.target.classList.contains('pick_and_feed__progress_bar-point-before')) return;
    let parent = e.target.parentNode, child=e.target;
    if(parent.classList.contains('pick_and_feed__progress_bar-point')){
        child = parent;
        parent=parent.parentNode;
    }
    let selected_index_next = Array.prototype.indexOf.call(parent.children, child);
    if(selected_index_next!==selected_index){
        if(selected_index!==-1){
            progress_bar_prices.children[selected_index].classList.toggle('pick_and_feed__progress_bar-price-selected');
            progress_bar_points.children[selected_index].children[0].classList.toggle('pick_and_feed__progress_bar-point-selected');
            progress_bar_points.children[selected_index].children[2].classList.toggle('pick_and_feed__progress_bar-point-selected');
        }
        selected_index=selected_index_next;
        child.children[0].classList.toggle('pick_and_feed__progress_bar-point-selected');
        child.children[2].classList.toggle('pick_and_feed__progress_bar-point-selected');
        progress_bar_prices.children[selected_index].classList.toggle('pick_and_feed__progress_bar-price-selected');
    }
    recalc();
})
progress_bar_prices.addEventListener('click', e=>{
    if(!e.target.classList.contains('pick_and_feed__progress_bar-price')) return;
    let parent = e.target.parentNode, child=e.target;
    let selected_index_next = Array.prototype.indexOf.call(parent.children, child);
    if(selected_index_next!==selected_index){
        if(selected_index!==-1){
            progress_bar_prices.children[selected_index].classList.toggle('pick_and_feed__progress_bar-price-selected');
            progress_bar_points.children[selected_index].children[0].classList.toggle('pick_and_feed__progress_bar-point-selected');
            progress_bar_points.children[selected_index].children[2].classList.toggle('pick_and_feed__progress_bar-point-selected');
        }
        selected_index=selected_index_next;
        child.children[0].classList.toggle('pick_and_feed__progress_bar-price-selected');
        child.children[2].classList.toggle('pick_and_feed__progress_bar-price-selected');
        progress_bar_points.children[selected_index].classList.toggle('pick_and_feed__progress_bar-point-selected');
    }
    recalc();
})