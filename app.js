let raiting=0;

document.querySelector('.b1').onclick=function(){
    raiting=1;
    console.log(rating);
}

document.querySelector('.b2').onclick=function(){
    raiting=2;
}
document.querySelector('.b3').onclick=function(){
    raiting=3;
}
document.querySelector('.b4').onclick=function(){
    raiting=4;
}
document.querySelector('.b5').onclick=function(){
    raiting=5;
}

document.querySelector('.sumbit').onclick=function(){
if(raiting==0){
    alert("PICK CORRECTLY RAITING");
}
else{
    document.querySelector('.first_page').classList.add("hidden");
    document.querySelector('.second_page').classList.remove("hidden");
    document.querySelector('.YS').innerHTML= `You selcted  ${raiting} out of 5`;
}
}