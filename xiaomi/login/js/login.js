console.log($('input.name').val().length);
// 账号管理与扫码登录选项卡的切换
document.querySelectorAll('ul.tab-title>li').forEach(function(item, i) {
	item.onclick = function() {
		if (this.className === 'show') return;
		document.querySelector('ul.tab-title>li.show').className = '';
		document.querySelector('ul.tab-content>li.active').className = '';
		this.className = 'show';
		document.querySelectorAll('ul.tab-content>li')[i].className = 'active';
	};
});
document.querySelectorAll('ul.tab-title a').forEach(function(item, i) {
	item.onclick = function() {
		if (this.className === 'show') return;
		document.querySelector('ul.tab-title a.show').className = '';
		this.className = 'show';
	};
});

// 只要input获得焦点，li.alert的css的display就为none
$('input').focus(function() {
	$('li.alert').css('display', 'none');
});
$('li.alert').css('display', 'none');

// 账号登录功能的实现
$('.login').click(function() {
	var alert = document.querySelectorAll('li.alert');
	var user = users.find(function(item){
		return item.name === $('.name').val();
	});
	
	if($('input.name').val().length == 0) {
		$('li.alert').css('display', 'none');
		$('li.alert1').css('display', 'block');
		$('input.name').css('border', '1px solid #ff6700');
		return;
	};
	
	if($('input.pwd').val().length == 0) {
		$('li.alert').css('display', 'none');
		$('li.alert2').css('display', 'block');
		$('input.name').css('border', '1px solid #ff6700');
		return;
	};
	
	if(typeof user === "undefined") {
		$('li.alert').css('display', 'none');
		$('li.alert3').css('display', 'block');
		$('input.name').css('border', '1px solid #ff6700');
		return;
	}
	if(user.pwd !== $('.pwd').val()) {
		$('li.alert').css('display', 'none');
		$('li.alert3').css('display', 'block');
		$('input.name').css('border', '1px solid #ff6700');
		return;
	}
	
	Cookies.set('uName',user.name);
// 	var shoppingInfo = cart.filter(function(item) { return item.name === user.name;});
// 	var orderInfo = orders.filter(function(item) { return item.user === user.name;})
// 	sessionStorage.setItem('shoppingInfo',JSON.stringify(shoppingInfo));
// 	sessionStorage.setItem('orderInfo',JSON.stringify(orderInfo));
	// window.location.href = Cookies.get('url') || '../个人中心profile/个人中心profile.html';
	window.location.href = '../index.html';
});



