// F to C       C to F      C to K
// F=1.8C+32    C=5/9(F-32) K=C+273.15

let button = document.querySelector('button');
let input = document.querySelector('input');
let massege = document.querySelector('.result');
let select1 = document.querySelector('.select1');
let select2 = document.querySelector('.select2');

select1.addEventListener('change',()=>{})
select2.addEventListener('change',()=>{})

function FtoC(){
    let f = input.value;
    let c = (f - 32) * 5/9;
    massege.innerHTML = c;
}
function CtoF(){
    let c = input.value;
    let f = c *(9/5) + 32;
    massege.innerHTML = f;
}

function CtoK(){
    let c = input.value;
    let k = c + 273.15;
    massege.innerHTML = k;
}

function KtoC(){
    let k = input.value;
    let c = k - 273.15;
    massege.innerHTML = c;
}

function FtoK(){
    let f = input.value;
    let k = (f - 273.15)*(9/5)+32;
    massege.innerHTML = k;
}

function KtoF(){
    let k = input.value;
    let f = (k - 32)*(9/5)+273.15;
    massege.innerHTML = f;
}
button.addEventListener('click',(event)=>{
    event.preventDefault();
    if(input.value){
        if(input.value >=0 || input.value <= 0){
            if(select1.value === "F" && select2.value === "C"){
                FtoC();
            }
            else if(select1.value === "C" && select2.value === "F"){
                CtoF();
            }
            else if(select1.value === "C" && select2.value === "K"){
                CtoK();
            }
            else if(select1.value === "K" && select2.value === "C"){
                KtoC();
            }
            else if(select1.value === "F" && select2.value === "K"){
                FtoK();
            }
            else if(select1.value === "K" && select2.value === "F"){
                KtoF();
            }
            else if(select1.value === select2.value){
                massege.innerHTML = input.value;
            }
        }
        else{
            massege.innerHTML = "Invalid input";
        }
    }
    else{
        massege.innerHTML = "Please enter a number";
    }
})