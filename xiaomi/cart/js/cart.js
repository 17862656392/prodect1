// 验证登录
checkLogin();
// 获取登录用户名 插入到个人按钮
var uName = Cookies.get('uName');
$('.r-a1').text(uName);
//用户菜单绑定点击事件
var userMenu = $('.title-right>a')
for( var i = 0; i<userMenu.length; i++) {
		if(i>0) {
			$(userMenu[i]).mouseover(function(e) {
				$('.user-menu').addClass('');
				e.stopPropagation();
			});
		} else {
			// (function() {
				$('.title-right').mouseover(function() {
					$('.user-menu').addClass('show');
				});
				$('.title-right').mouseout(function() {
					$('.user-menu').removeClass('show');
				});
			// })(i)
		}
};
//退出登录按钮
$('.logout').click(function() {
	Cookies.remove('uName');
	sessionStorage.clear();
	window.location.href = '../登录login/登录login.html';
})



// 显示用户购物信息
var shoppingInfo = JSON.parse(sessionStorage.getItem('shoppingInfo'));
function showCart() {
// 进入页面后/如果购物信息为空那么购物车display none 拼接购物车为空页面。如果不为空。那么拼接购物车页面
	if(shoppingInfo.length === 0) {
	$('.cart-table').addClass('none');
	$('.cart-none').removeClass('none');
	$(`
		<div class='w cart-none  clearfix'>
			<img src='../static/images/background/001.png'/>
			<h2>您的购物车还是空的！</h2>
			<a href='../列表list/列表list.html'>马上去购物</a>
		</div>
	`).prependTo('.content');
	// return;
}else{
	$('.cart-table').removeClass('none');
	$('.cart-none').addClass('none');
	shoppingInfo.forEach(function(item) {
	var product = products.find(function(item2) { return item2.id === item.productId;});
	$(`
		<li data-id='${ item.id}'>
			<span class='product-checkbox'><i class='iconfont icon-Checkmark input checked'></i></span>
			<span class='product-avatar'><a href='#'><img src='${ product.avatar }'></a></span>
			<span class='product-name'><a href='#'>${ product.name }</a></span>
			<span class='product-price'><span class='price'>${ product.price }</span>元</span>
			<span class='product-count'>
				<span class='decrease'>-</span>
				<span class='count'>${ item.count }</span>
				<span class='increase'>+</span>
			</span>
			<span class='product-sub-acount'><span class='sub-acount'>${ product.price * item.count}</span><span class='sub-acount-r'>元</span></span>
			<span class='product-delete'><span class='delete'>×</span></span>
		</li>
	`).appendTo('.cart-body>ul');
});
}
// 进入页面后如果滚动条的高度小于购物车那么设置购物车底部fixed
	var cartHeight = $('.cart-table').height() + $('.header').height() + 38;
	var scrollTop = $(window).scrollTop() + $(window).height();
	if(scrollTop < cartHeight) {
		$('.cart-bottom').addClass('cart-bottom-fixed');
	}
}
showCart();//调用展示购物车
updateResult();//更新购物车底部结果
// 全选反选
$('.all').click(function() {
	if($(this).hasClass("checked")){//如果点击时全选按钮有checked属性，那么删除掉。如果没有那么添加上
		$(this).removeClass("checked");
		$('.cart-body .input').removeClass('checked');
	}else{
		$(this).addClass("checked");
		$('.cart-body .input').addClass('checked');
	}
	updateResult();
});

$('.cart-body .input').click(function() {
	if($(this).hasClass("checked")){//如果点击时按钮有checked属性，那么删除掉。如果没有那么添加上
		$(this).removeClass("checked");
	}else{
		$(this).addClass("checked");
	}
	// console.log($('.cart-body .input').length);
	if($('.cart-body .checked').length < $('.cart-body .input').length){
		$('.all').removeClass("checked");//如果选中的长度小于所有按钮的长度那么全选按钮取消选中。否则全选按钮选中
	} else {
		$('.all').addClass("checked");
	}
	updateResult();
});
// 数量增减  利用事件冒泡给ul判断操作
$('.cart-body>ul').click(function(e) {
	var id = parseInt($(e.target).closest('li').attr('data-id'));//id为藏在li里面的data-id
	var target = shoppingInfo.find(function(item) { return item.id === id});//筛选出与当前id相对应的购物信息
	var cartHeight = $('.cart-table').height() + $('.header').height() + 38;//购物车的高度为页头高度加本身高度加上所设置的padding
	var scrollTop = $(window).scrollTop() + $(window).height();//scrollTop为滚动条的滚动距离加上页面的高度。
	var price = parseInt($(e.target).closest('li').find('.price').text());
	if(e.target.className === 'decrease') { //如果点击事件目标的class='decrease' 
		if(target.count === 1) return;
		target.count -= 1;
		$(e.target).next().text(target.count);//所点击元素的下一个元素的数值更新
	}else {
		if(e.target.className === 'increase'){//如果点击事件目标的class='increase' 
			if(target.count === 5) { alert('购买数量已达上限..'); return;}
			target.count +=1
			$(e.target).prev().text(target.count);//所点击元素的上一个元素数值更新
		} else {
			if(e.target.className === 'delete'){//如果点击事件目标的class='delete' 
				if(!confirm('确定删除？')) {return;}
				for(var i = 0; i < shoppingInfo.length; i++) {//迭代每一条购物信息，筛选出id等于当前行data-id的对象
					if(shoppingInfo[i].id === id) {
						shoppingInfo.splice(i,1);//删除当前底标的一个对象
						sessionStorage.setItem('shoppingInfo',JSON.stringify(shoppingInfo));//删除后将购物信息存回sessionStorage
						$(e.target).closest('li').fadeOut(1000,function() {//当前行的li在1000毫秒后删除，更新结果
							$(e.target).remove();
							updateResult();
						});
						break;
					}
				}
				// 如果删除时cart高度小于滚动条那么取消fixed
				if(scrollTop > cartHeight) {
					$('.cart-bottom').removeClass('cart-bottom-fixed');
				}
				if(shoppingInfo.length === 0) {//如果购物信息为空那么购物车display none 拼接购物车为空页面
				$('.cart-table').addClass('none');
				$(`
					<div class='w cart-none  clearfix'>
						<img src='../static/images/background/001.png'/>
						<h2>您的购物车还是空的！</h2>
						<a href='../列表list/列表list.html'>马上去购物</a>
					</div>
				`).prependTo('.content');
				} //else { return;}
			}
		}
	}
	sessionStorage.setItem('shoppingInfo',JSON.stringify(shoppingInfo));
	$(e.target).closest('li').find('.sub-acount').text(target.count * price);
	updateResult();
});

// 更新总计
function updateResult() {
	var total = 0, acount = 0;
	$('.cart-body li:has(span>.checked)').each(function(i,item) {
		total += parseInt($(item).find(' .count').text());
		acount += parseInt($(item).find(' .sub-acount').text());
	});
	$('.total').text(total);
	$('.acount').text(acount);
}

// 拼接推荐商品
function showRecommend() {
	for(var i = 0; i < products.length; i++) {
		if(i > 9) return;
		$(`
			<li data-id='${products[i].id}'>
				<div class='recommend-wrapper'>
					<a href='#'>
						<img src='${products[i].avatar}'>
						<h5>${products[i].name}</h5>
						<span>${products[i].price}元</span>
						<span>${products[i].reviews}</span>
					</a>
					<span class='add-cart' href='#'>加入购物车</span>
				</div>
			</li>
		`).appendTo('.recommend-content>ul')
	};
}
showRecommend();
// 推荐部分加入购物车

$('.add-cart').click(function() {
	var $id = parseInt($(this).closest('li').attr('data-id'));
	var $target = shoppingInfo.find(function(item) { return item.productId === $id});
	var $product = products.find(function(item) {return item.id === $id});
	// console.log($target.id);
	// 如果购物信息为空那么id从1开始添加，如果不为空那么id为shoppingInfo最后一个对象的id +1
	if(shoppingInfo.length === 0){
		shoppingInfo.push({
		id: 1,
		name: Cookies.get('uName'),
		productId: $id,
		count: 1,
		});
		$('.cart-table').removeClass('none');
		$('.cart-none').addClass('none');
		$(`
			<li data-id='${ shoppingInfo[shoppingInfo.length - 1].id }'>
				<span class='product-checkbox'><i class='iconfont icon-Checkmark input checked'></i></span>
				<span class='product-avatar'><a href='#'><img src='${ $product.avatar }'></a></span>
				<span class='product-name'><a href='#'>${ $product.name }</a></span>
				<span class='product-price'><span class='price'>${ $product.price }</span>元</span>
				<span class='product-count'>
					<span class='decrease'>-</span>
					<span class='count'>${ 1 }</span>
					<span class='increase'>+</span>
				</span>
				<span class='product-sub-acount'><span class='sub-acount'>${ $product.price * 1}</span><span class='sub-acount-r'>元</span></span>
				<span class='product-delete'><span class='delete'>×</span></span>
			</li>
		`).appendTo('.cart-body>ul');
	} else {
		if(typeof $target === 'undefined') {
			shoppingInfo.push({
			id: shoppingInfo[shoppingInfo.length - 1].id + 1,
			name: Cookies.get('uName'),
			productId: $id,
			count: 1,
			});
			$(`
				<li data-id='${ shoppingInfo[shoppingInfo.length - 1].id }'>
					<span class='product-checkbox'><i class='iconfont icon-Checkmark input checked'></i></span>
					<span class='product-avatar'><a href='#'><img src='${ $product.avatar }'></a></span>
					<span class='product-name'><a href='#'>${ $product.name }</a></span>
					<span class='product-price'><span class='price'>${ $product.price }</span>元</span>
					<span class='product-count'>
						<span class='decrease'>-</span>
						<span class='count'>${ 1 }</span>
						<span class='increase'>+</span>
					</span>
					<span class='product-sub-acount'><span class='sub-acount'>${ $product.price * 1}</span><span class='sub-acount-r'>元</span></span>
					<span class='product-delete'><span class='delete'>×</span></span>
				</li>
			`).appendTo('.cart-body>ul');
		} else {
			if($target.count === 5){
				alert('当前商品在购物车中的数量已达到上限..')
				return;
			} else {
				//
				$target.count +=1;
				
				// console.log($(this).closest('li').attr('data-id'));
				var $lis = $('.cart-body li');
				for( var i = 0; i < $lis.length; i++) {
					if(parseInt($lis[i].getAttribute('data-id')) === $target.id){
							var price = $($lis[i]).find('.price').text();
							$($lis[i]).find('.count').text($target.count)
							$($lis[i]).find('.sub-acount').text($target.count * price);
							updateResult();
					}
					
				}
			}
			
		}
	}
		
	sessionStorage.setItem('shoppingInfo',JSON.stringify(shoppingInfo));
	// showCart();//更新购物车
				// window.location.reload();
});
// 设置cart-bottom 的高度。
$(window).scroll(function () {
	var cartHeight = $('.cart-table').height() + $('.header').height() + 38;
	var scrollTop = $(window).scrollTop() + $(window).height();
	if(scrollTop < cartHeight) {
		$('.cart-bottom').addClass('cart-bottom-fixed');
	} else { 
		$('.cart-bottom').removeClass('cart-bottom-fixed');
	}	
});
