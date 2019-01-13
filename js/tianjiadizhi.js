let newAdress = document.querySelector(".icon");
let zezhao =document.querySelector(".tanchu_tiajian")
let form = document.querySelector(".write_xx")
let cuo = document.querySelector(".iccon_tc")
newAdress.onclick = function(){
	zezhao.style.display = "block";
	form.style.display ="block"
	form.style.top ="50%";
	form.style.left ="50%";
	form.style.transform ="translate(-50%,-50%)";
}
cuo.onclick = function(){
	form.style.display = "none";
}