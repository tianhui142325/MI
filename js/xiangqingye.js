function lunbotu() {
		let li = document.querySelectorAll(".banner img");
		let yuan = document.querySelectorAll(".main-left-bottom>ul li");
		let btnleft = document.querySelector(".main-left-bottom-jiantou1");
		let btnright = document.querySelector(".main-left-bottom-jiantou2");
		let bigBox = document.querySelector(".main-left");
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
				yuan[b].classList.remove("active1");
			})
			li[n].style.opacity = "1";
			yuan[n].classList.add("active1");
		}
		yuan.forEach(function(val, index) {
			val.onclick = function() {
				n = index;
				limove();
			}
		})


	}
	lunbotu();