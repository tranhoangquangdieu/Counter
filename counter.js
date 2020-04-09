var n=0;
var somoi;
var socu = document.getElementById("giatri");

function thaydoi(){
    somoi = `${n}`;
    socu.textContent = somoi; 
}

plus.addEventListener("click",function(){
    n++;
    thaydoi();
})

minus.addEventListener("click",function(){
    n--;
    thaydoi();
})

var doimau = document.getElementsByClassName("dau");
for(let i=0;i<=doimau.length-1;i++){
doimau[i].addEventListener("mouseover",chuotlen);
doimau[i].addEventListener("mouseout",chuotra);
function chuotlen()
{
    doimau[i].style.backgroundColor="gray";
}
function chuotra()
{
    doimau[i].style.backgroundColor="gainsboro";
}
}