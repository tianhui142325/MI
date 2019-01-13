let fs = document.querySelectorAll(".dl_zh span")
let ym = document.querySelectorAll(".dl_fs li")
console.log(ym)
fs.forEach(function(val, index) {
	val.onclick = function() {
		if (index == 0) {
			fs.forEach(function(val, index) {
				val.style.color = "#666";
			})
			ym.forEach(function(val, index) {
				ym[index].style.display = "none";
			})
			val.style.color = "#ff6700"
			ym[index].style.display = "block";

		}

		if (index == 2) {
			fs.forEach(function(val, index) {
				val.style.color = "#666"
			})
			ym.forEach(function(val, index) {
				ym[index].style.display = "none";
			})
			val.style.color = "#ff6700"
			ym[index-1].style.display = "block";
		}
	}
})
