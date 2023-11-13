const calculation = document.querySelector('[data-submit]')
const results = document.querySelector('#output')  


function weightHere (){
    let weightValue = document.getElementById('weight').value
    let heightValue = document.getElementById('height').value
    let sum = +weightValue / (+heightValue * +heightValue) 
    results.textContent = sum
}

calculation.addEventListener('click',weightHere)