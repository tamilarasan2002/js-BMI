
let btn=document.getElementById("calculet");
let a=btn.addEventListener("click",function(){
let height=parseInt(document.getElementById("height").value);
let weight=parseInt(document.getElementById("weight").value);
height=height/100;
let sumofvalue=weight/(height*height);
var bmi=document.getElementById("bmi")
bmi.value=sumofvalue;
var text=document.getElementById(textvalue);
if(sumofvalue >= 0&&sumofvalue <= 18.5){
    text.innerHTML="under weight";
    
}
else if(sumofvalue >= 18.5&&sumofvalue<=24.9){

    text.innerHTML="normal weight";
}
else{
    
    text.innerHTML="Over weight";
}

});
