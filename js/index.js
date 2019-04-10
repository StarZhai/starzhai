/*相恋时间*/
var lovetime = document.getElementById('lovetime');
var mylovetime = Date.parse("Nov 14, 2016");
setInterval(function () {
	var date = new Date();
	var loveminute = (date.getTime() - mylovetime) / 1000 / 60;
	var lovesecond = (date.getTime() - mylovetime) / 1000 % 60;
	lovetime.textContent = "已相恋" + parseInt(loveminute) + "分钟" + parseInt(lovesecond) + "秒";
}, 1000);


