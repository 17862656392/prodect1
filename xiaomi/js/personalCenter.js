var newaddress = [
];
var addressForm = document.forms.address;//获取表单输入的值
//点击个人中心隐藏，个人中心默认显示个人信息，先判断是否点击的是个人中心
$('.myPersonal').click(function() {
	if($('.right-userMessage').attr('display') === 'block') return;
	$('.right-userMessage').css('display','block');
	$('.show-personal-address').css('display','none')
});
//让收货地址隐藏，
$('.add').click(function() {
	$('.right-userMessage').css('display','none');
	$('.show-personal-address').css('display','block')
});//点击新增的时候让个人信息隐藏，让地址出来
$('.address-add-body li:nth-child(1)>input').focus(function() {
	$('.address-add-body li:nth-child(1)>label').addClass('active');
	$('.address-add-body li:nth-child(1)>input').attr('placeholder','收货人姓名').fadeIn(600);
});
$('.address-add-body li:nth-child(1)>input').blur(function() {
	var str = $(this).val();
	var reg = /^[\u4e00-\u9fa5]{2,4}$/;
	if(str === '') {
		alert('请输入姓名');
		return false;
		}
	if(!reg.test(str)) { alert('请输入正确的姓名'); return false;}

		$('.address-add-body li:nth-child(1)>label').css('color','#ccc')
	//	$('.address-add-body li:nth-child(1)>label').removeClass('active');
		$('.address-add-body li:nth-child(1)>input').attr('placeholder','');
		return true;
});

$('.address-add-body li:nth-child(2)>input').focus(function() {
	$('.address-add-body li:nth-child(2)>label').addClass('active');
	$('.address-add-body li:nth-child(2)>input').attr('placeholder','11位手机号').fadeIn(800);
});
$('.address-add-body li:nth-child(2)>input').blur(function() {
	var reg = /^1[34578]\d{9}$/;
	var str = $(this).val();
	if(str === '') {
		alert('请输入正确的手机号！');
		return false;
		
	}
	if(!reg.test(str)) { 
		alert('请输入正确的手机号！'); 
		$('.address-add-body li:nth-child(2)>label').css('color','red');
		return false;
		}
	$('.address-add-body li:nth-child(2)>label').css('color','#ccc');
	//$('.address-add-body li:nth-child(2)>label').removeClass('active');
	$('.address-add-body li:nth-child(2)>input').attr('placeholder','');
});

$('.address-add-body li:nth-child(4)>textarea').focus(function() {
	$('.address-add-body li:nth-child(4)>label').addClass('active');
});
$('.address-add-body li:nth-child(4)>textarea').blur(function() {
	if(this.value !== '') {
		$('.address-add-body li:nth-child(4)>label').css('color','#ccc')
		return;
	}
	$('.address-add-body li:nth-child(4)>label').removeClass('active');
});
$('.address-add-body li:nth-child(5)>input').focus(function() {
	$('.address-add-body li:nth-child(5)>label').addClass('active');
});
$('.address-add-body li:nth-child(5)>input').blur(function() {
	if(this.value !== '') {
		$('.address-add-body li:nth-child(5)>label').css('color','#ccc')
		return;
	}
	$('.address-add-body li:nth-child(5)>label').removeClass('active');
});

$('.address-add-body li:nth-child(6)>input').focus(function() {
	$('.address-add-body li:nth-child(6)>label').addClass('active');
});
$('.address-add-body li:nth-child(6)>input').blur(function() {
	if(this.value !== '') {
		$('.address-add-body li:nth-child(6)>label').css('color','#ccc')
		return;
	}
	$('.address-add-body li:nth-child(6)>label').removeClass('active');
});

$('.show-personal-address .add-new-message>li:nth-child(1)').click(function() {
	addressForm.reset();//清空数据
	addressForm.mode.value = '1';//标识当前是新增加的
	$('.personal-address').fadeIn(80);
});//地址新增
$('.icon-close,.return').click(function() {
	$('.personal-address').fadeOut(80);
});//添加新的地址
$('.save').click(function(e) {
	if(addressForm.mode.value === '1') addAddress();
	else updateAddress(e);
});
//添加保存当前数据
function showData() {
	var htmlStr ='';
	for(var i=0; i < newaddress.length; i++) {
		htmlStr += createLi(newaddress[i]);
	}
	$('.add-new-message').append(htmlStr);
}
function createLi(address) {
	return(
		`<li data-id='${parseInt(newaddress.length)}'>
			<dl>
			<dt>${ address.name }</dt>
			<dd class='number'>${ address.number }</dd>
			<dd class="province">${ address.s_province}</dd>
			<dd class='city'>${ address.s_city}</dd>
			<dd class='city'>${ address.s_county}</dd>
			<dd class='useraddress'>${ address.useraddress }</dd>
			<dd class='code'>${ address.code }</dd>
			<dd class='labels'>${ address.labels }</dd>
			<dd class='operate'><span class='update'>修改</span><span class='delete'>删除</span></dd>
			</dl>	
		</li>
		`
	);
}
showData();
function addAddress() {
	$('.personal-address').fadeOut(80);
	var address = {
		id: `${parseInt(newaddress.length)}`,
		name: addressForm.name.value,
		number: addressForm.number.value,
		s_province: addressForm.s_province.value,
		s_city: addressForm.s_city.value,
		s_county: addressForm.s_county.value,
		useraddress: addressForm.useraddress.value,
		code: addressForm.code.value,
		labels: addressForm.labels.value,
	};
	if( address.s_province == '省份') {confirm('请输入正确的地址'); return;}
	var addressHtml = 
	`<li data-id='${parseInt(newaddress.length)}'>
		<dl>
		<dt>${ address.name }</dt>
		<dd class='number'>${ address.number }</dd>
		<dd class="province">${ address.s_province}</dd>
		<dd class='city'>${ address.s_city}</dd>
		<dd class='city'>${ address.s_county}</dd>
		<dd class='useraddress'>${ address.useraddress }</dd>
		<dd class='code'>${ address.code }</dd>
		<dd class='labels'>${ address.labels }</dd>
		<dd class='operate'><span class='update'>修改</span><span class='delete'>删除</span></dd>
		</dl>	
	</li>
	`;
	$('.add-new-message').append(addressHtml);
	alert('添加成功');
	newaddress.push(address);
}
function updateHandler(e) {
	{
			var id = $(e.target.parentNode.parentNode.parentNode).attr('data-id');
			for(var i =0; i < newaddress.length; i++) {
				if(newaddress[i].id === id) {
					addressForm.id = newaddress[i].id;
					addressForm.name.value = newaddress[i].name;
					addressForm.number.value = newaddress[i].number;
					addressForm.s_province.value = newaddress[i].s_province;
					addressForm.s_city.value = newaddress[i].s_city;
					addressForm.s_county.value = newaddress[i].s_county;
					addressForm.useraddress.value = newaddress[i].useraddress;
					addressForm.code.value = newaddress[i].code;
					addressForm.labels.value = newaddress[i].labels;
					break;
				}
			}	
		}
		addressForm.mode.value = '0';
		$('.personal-address').fadeIn(80);
}
//给新添加的每一个li里的删除跟修改绑定点击事件
$('.add-new-message').click(function(e) {
		if($(e.target).hasClass('update'))
			updateHandler(e);
		if($(e.target).hasClass('delete')) {
			if(!confirm('删除？')) return;
			{
				var id = $(e.target.parentNode.parentNode.parentNode).attr('data-id');
				for(var i =0; i < newaddress.length; i++) {
					if(newaddress[i].id !== id) continue;
						newaddress.splice(i,1);
				}
				$(e.target).closest('li').remove();
				alert('删除成功！');
			}	
			
		} 	
	});

//更新地址
function updateAddress(e) {
	var address = {
		id: addressForm.id,
		name: addressForm.name.value,
		number: addressForm.number.value,
		s_province: addressForm.s_province.value,
		s_city: addressForm.s_city.value,
		s_county: addressForm.s_county.value,
		useraddress: addressForm.useraddress.value,
		code: addressForm.code.value,
		labels: addressForm.labels.value,
	};
	var id = $(e.target.parentNode.parentNode.parentNode).attr('data-id');
	for(var i =0; i < newaddress.length; i++) {
		if(newaddress[i].id === address.id) {
			newaddress.splice(i,1,address);
			break;
		}
	}
	var lis = $('.show-personal-address .add-new-message>li:not(:first-child)');
	for(var i =0; i < lis.length; i++) {
		if($(lis[i]).attr('data-id') === address.id) {
			console.log(address);
			$(lis[i]).find('dl>dt').text(address.name);
			$(lis[i]).find('dl>dd:nth-child(1)').text(address.number);
			$(lis[i]).find('dl>dd:nth-child(2)').text(address.s_province);
			$(lis[i]).find('dl>dd:nth-child(3)').text(address.s_city);
			$(lis[i]).find('dl>dd:nth-child(4)').text(address.s_county);
			$(lis[i]).find('dl>dd:nth-child(5)').text(address.useraddress);
			$(lis[i]).find('dl>dd:nth-child(6)').text(address.code);
			$(lis[i]).find('dl>dd:nth-child(7)').text(address.labels);
			break;
		}
	}
	alert('修改成功');
	$('.personal-address').fadeOut(80);
}
//修改事件