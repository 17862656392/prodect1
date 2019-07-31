var htmlStr = '';
for (var i = 0; i < menu.length; i++) {
	htmlStr += '<li><a href="#">' + menu[i].name + '</a></li>';
}
document.querySelector('.logo-container>.menu').innerHTML = htmlStr;

window.onscroll = function() {
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if (scrollTop >= 200) $('.slide').css('top','0');//document.querySelector('.slide').setAttribute('style','top: 0'); //
	else $('.slide').css('top','-60px');//document.querySelector('.slide').setAttribute('style','top: -60px');//
};


