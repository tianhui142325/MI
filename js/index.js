window.onload = function() {
	let html = document.querySelector("html");
	html.style = "-webkit-user-select:none;"
	//家电
	function selectCard(selectCardTop, selectCardBottom) {
		let topLi = document.querySelectorAll(selectCardTop);
		let bottomUl = document.querySelectorAll(selectCardBottom);
		topLi.forEach(function(val, index) {
			val.onclick = function() {
				topLi.forEach(function(a, b) {
					a.classList.remove("active1");
					bottomUl[b].style.display = "none";
				})
				val.classList.add("active1");
				bottomUl[index].style.display = "block";
			}
		})
	}
	selectCard(".commodity-one-top-right-text", ".commodity-one-bottom-right ul");
	//家电结束
	//轮播图开始
	function lunbotu() {
		let li = document.querySelectorAll(".banner-picture-box li");
		let yuan = document.querySelectorAll(".banner-point-big li");
		let btnleft = document.querySelector(".banner-btn1-box");
		let btnright = document.querySelector(".banner-btn2-box");
		let bigBox = document.querySelector(".big_box");
		let n = 0;
		let size = li.length - 1;
		let html = document.querySelector("html");
		html.style = "-webkit-user-select:none;"
		let yiru = setInterval(function() {
			n++;
			limove();
		}, 5000)
		bigBox.onmouseout = function() {
			yiru = setInterval(function() {
				n++;
				limove();
			}, 5000)
		}
		bigBox.onmouseover = function() {
			clearInterval(yiru);
		}

		btnleft.onclick = function() {
			n++;
			limove();
			clearInterval(yiru);

		}
		btnright.onclick = function() {
			n--;
			limove();
			clearInterval(yiru);

		}

		function limove() {
			if (n > size) {
				n = 0;
			} else if (n < 0) {
				n = size
			}
			li.forEach(function(a, b) {
				a.style.opacity = "0";
				yuan[b].classList.remove("active2");
			})
			li[n].style.opacity = "1";
			yuan[n].classList.add("active2");
		}
		yuan.forEach(function(val, index) {
			val.onclick = function() {
				n = index;
				limove();
			}
		})


	}
	lunbotu();
	//轮播图结束

	//周边开始
	function lunbo(parten) {
		let btnleft = document.querySelector(parten + " .tushu_btn_left");
		let btnright = document.querySelector(parten + " .tushu_btn_right");
		let middleBig = document.querySelector(parten + " .tushu_one_big");
		let yuan = document.querySelectorAll(parten + " .commodity-bottom-small-dot")
		let n = 0;
		let html = document.querySelector("html");
		html.style = "-webkit-user-select:none";
		btnright.onclick = function() {
			if (n > yuan.length - 2) {
				return;
			}
			n++;
			move();
			yuan.forEach(function(a, b) {
				a.classList.remove("active4");
			})
			yuan[n].classList.add("active4");
		}
		btnleft.onclick = function() {
			if (n < 1) {
				return;
			}
			n--;
			move();
			yuan.forEach(function(a, b) {
				a.classList.remove("active4");
			})
			yuan[n].classList.add("active4");
		}

		yuan.forEach(function(val, index) {
			val.onclick = function() {
				n = index;
				yuan.forEach(function(a, b) {
					a.classList.remove("active4");
				})
				move();
				val.classList.add("active4");
			}
		})

		function move() {
			middleBig.style.left = n * -100 + "%";
			if (n == yuan.length - 1) {
				btnright.style.cursor = "default"
			} else if (n == 0) {
				btnleft.style.cursor = "default"

			} else {
				btnleft.style.cursor = "pointer"
				btnright.style.cursor = "pointer"
			}
		}
	}

	lunbo(".one1");
	lunbo(".one2");
	lunbo(".one3");
	lunbo(".one4");
	//周边结束
	//为你推荐开始
	let topLeft = document.querySelector(".recommend-right-left");
	let topRight = document.querySelector(".recommend-right-right");
	let li = document.querySelectorAll(".recommend-bottom-ul-li");
	let ul = document.querySelector(".recommend-bottom ul");
	let n =0;
	let size = li.length - 5;
	topRight.onclick = function(){
		n=n+5;
		move();
		if(n == size){
			
			topRight.style.cursor ="default";
			topRight.classList.remove("active5")
		}else{
			topRight.style.cursor ="pointer";
			topRight.classList.add("active5");
			topLeft.classList.add("active5");
		}
	}
	topLeft.onclick = function(){
		n = n-5;
		move();
		if(n == 0){
			
			topLeft.style.cursor ="default";
			topLeft.classList.remove("active5")
		}else{
			topLeft.style.cursor ="pointer";
			topLeft.classList.add("active5");
			topRight.classList.add("active5");
			
		}
	}
	
	function move(){
		if(n>size){
			n = size;
			ul.style.left = -248*n+"px";
		}else if(n<0){
			n = 0;
			ul.style.left = -248*n+"px";
		}
		ul.style.left = -248*n+"px";
	}
	//为你推荐结束
	
	//搜索框开始
	let inputs = document.querySelector(".search input");
	let serachFrom = document.querySelector(".resach_under");
	let lis = document.querySelectorAll(".ts-text li")
	let liBig = document.querySelector(".search .right");
	let searchBig = document.querySelector(".search")
	inputs.onfocus = function(){
		serachFrom.style.display ="block";
		searchBig.style.borderColor ="#FF6700";
		liBig.style.borderColor = "#FF6700";
		lis.forEach(function(val){
			val.style.display ="none";
		})
	}
	inputs.onblur = function(){
		serachFrom.style.display ="none";
		searchBig.style.borderColor ="#E0E0E0";
		liBig.style.borderColor = "#E0E0E0";
		lis.forEach(function(val){
			val.style.display ="block";
		})
	}
	//搜索框结束
	//下拉菜单开始
	let mean = document.querySelector(".mean_under");
	let meanSmall = document.querySelector(".mean_long_small");
	let old,news = 0;
	meanSmall.onmousemove = function(e){
		 old = e.offsetY;
		mean.style.display = "block";
	}
	meanSmall.onmouseout = function(e){
		news = e.offsetY;
		if(news > old){
			return;
		}else{
				mean.style.display = "none";
		}
	}
	mean.onmouseout = function(){
			mean.style.display = "none";

	}
	








	
	
















}
