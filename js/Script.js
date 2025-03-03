const numberInput = document.getElementById('age')
const checkButton = document.getElementById('check')
var resultBox = document.getElementById('result')



checkButton.onclick = function(){
    if(numberInput.value % 2 == 0 ){
        resultBox.innerText='عدد جفت است'
    }else{
        resultBox.innerText='عدد طاق است'

    }
}