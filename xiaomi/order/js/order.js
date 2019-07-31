checkLogin();
var shoppingInfo = JSON.parse(sessionStorage.getItem('shoppingInfo'));
//展示购物车数量
function showNum() {
	var count = 0;
	for( var i = 0; i < shoppingInfo.length; i++) {
		count += parseInt(shoppingInfo[i].count);
	};
	document.querySelector('.num').innerText = count;
}
showNum();

// shoppingInfo.forEach(function(item) {
// var product = products.find(function(item2) { return item2.id === item.productId;});
// $(`
// 	<li data-id='${ item.id}'>
// 		<span class='product-checkbox'><i class='iconfont icon-Checkmark input checked'></i></span>
// 		<span class='product-avatar'><a href='#'><img src='${ product.avatar }'></a></span>
// 		<span class='product-name'><a href='#'>${ product.name }</a></span>
// 		<span class='product-price'><span class='price'>${ product.price }</span>元</span>
// 		<span class='product-count'>
// 			<span class='decrease'>-</span>
// 			<span class='count'>${ item.count }</span>
// 			<span class='increase'>+</span>
// 		</span>
// 		<span class='product-sub-acount'><span class='sub-acount'>${ product.price * item.count}</span><span class='sub-acount-r'>元</span></span>
// 		<span class='product-delete'><span class='delete'>×</span></span>
// 	</li>
// `).appendTo('.cart-body>ul');
// });



 
function showMenu() {
	// 拼接显示菜单
	var stateHtml = '';
	orderState.forEach(function(item) {
		stateHtml += `<li data-id="${ item.id }"><a>${ item.name }</a></li>`;
	});
	document.querySelector('.right-top>ul').innerHTML = stateHtml;
	// 为菜单项绑定点击事件
	var stateItems = document.querySelectorAll('.right-top>ul>li')
	stateItems[0].className = 'active';// 默认让菜单的第一项有active值表示激活。
	// 给菜单项绑定点击事件
	stateItems.forEach(function(item) {
		item.onclick = function() {
			if(this.className === 'active') return;
			document.querySelector('.right-top>ul>li.active').className = '';
			this.className = 'active';
			updatePage();
		};
	});
}
showMenu();

// var orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
function updateDatail(data) {
		var datailStr = '';
	for( var i= 0; i < data.length; i++) {
		datailStr += `
			<div class='right-datail'>
				<div class='order-state clearfix'>
					<h2>${data[i].state}</h2>
					<p class='money'>实付金额：<span>${data[i].price}</span>元</p>
					<p class='info'>${data[i].time}<span>|</span>${data[i].user}<span>|</span>订单号: <a herf='#'>${data[i].orderId}</a><span>|</span>${data[i].pay}</p>
				</div>
				<div class='article-box clearfix'>
					<div class='article'>
						<ul>
							<li class='clearfix'>
								<a href="#" class="img"><img src="${data[i].avatar}"></a>
								<a href="#" class="img-r">${data[i].name}</a>
								<p>${data[i].acount}</p>
							</li>
						</ul>
					</div>
					<div class='article-button'>
						<a href='#'>订单详情</a>
						<a href='#'>申请售后</a>
					</div>
				</div>
			</div>
		
		
		`
	}
	document.querySelector('.right-bottom').innerHTML = datailStr;
}


function updatePage() {
	var cid = parseInt(document.querySelector('.right-top>ul>li.active').getAttribute('data-id'));
	var orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
	var uName = Cookies.get('uName');
	var data = 0;
	if(cid === 1 ){
		data = orderInfo.filter(function(item) { return item.user === uName})
	}else{
		data = orderInfo.filter(function(item) { return item.cid === cid})
	};
	// 数据添加字段
	updateDatail(data);
}
// 导火索代码
updatePage();