// 返回顶部
window.onscroll = function() {
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollTop >= 1000) document.querySelector('.return').style.display = 'block';
	else document.querySelector('.return').style.display = 'none';	
};
// 注册下拉框
document.querySelector('.return').onclick = function() {
	var target = document.documentElement || document.body;
	target.scrollTop = 0;
}
// document.querySelector('.header-right>li.logon').onclick = function() {
// 	document.querySelector('.logon-aside').style.top = '0px';
// 
// }
// document.querySelector('.logon-aside-content .close').onclick = function() {
// 	document.querySelector('.logon-aside').style.top = '-800px';
// 
// }
// document.querySelector('.agreement-footer>.disagree').onclick = function() {
// 	document.querySelector('.logon-aside').style.top = '-800px';
// 
// }

// 注册框的协议内容切换
document.querySelectorAll('div.agreement>span').forEach(function(item, i) {
	item.onclick = function() {
		if(this.className === 'active') return;
		document.querySelector('div.agreement>span.active').className = '';
		document.querySelector('div.agreement-content>ul>li.active').className = '';
		this.className = 'active';
		document.querySelectorAll('div.agreement-content>ul>li')[i].className = 'active agree';
	}
});

// 拿到登录的用户名
if(typeof Cookies.get('uName') !== 'undefined') {
	$('a.login').text(Cookies.get('uName'));
	$('.header-right>li.login').css('padding','0 20px');
	// $('.login-after').css('display','block');
}
// 登录功能
$('ul.header-right>li>a.login').click(function() {
	if(typeof Cookies.get('uName') === 'undefined')
		window.location.href = './login/login.html';
});
// 注册
$('ul.header-right>li>a.logon').click(function() {
	window.location.href = './logon/logon.html';
});



// $('.header-right>li.login').mouseout(function() {}
// $('.header-right>li.login').mouseover(function() {
// 	$(this).css('background-color','#fff');
// 	$('.header-right>li.login>a').css('color','#ff6700')
// 	$('.header-right>li.login>div').css('height','160px');
// });
// $('.header-right>li.login').mouseout(function() {
// 	$('.header-right>li.login>div').css('height','0');
// });
// $('.header-right>li.login>div>a').mouseover(function() {
// 	$(this).css({
// 	'color':'#ff6700',
// 	'background-color':'rgb(245,245,245)'
// 	})
// });
// $('.header-right>li.login>div>a').mouseout(function() {
// 	$(this).css({
// 	'color':'rgb(66,66,66)',
// 	'background-color':'#fff'
// 	})
// });
// 退出登录
// $('.logout').click(function() {
// 	Cookies.remove('uName');
// 	window.location.href = '../header/header.html';
// });

// $('ul.login-after>.name').mouseover(function() {
// 	$('div.login-after').css('height','170px');
// });
// $('ul.login-after>.name').mouseout(function() {
// 	$('div.login-after').css('height','0');
// });
// $('div.login-after>a').mouseover(function() {
// 	$(this).css({'color':'#ff6700','background-color':'rgb(245,245,245)'});
// });
// $('div.login-after>a').mouseout(function() {
// 	$(this).css({'color':'rgb(66,66,66)','background-color':'#fff'});
// });



function showTitle() {
	var titleHtml = '';
	title.forEach(function(item){
		titleHtml += `<li data-id="${ item.id }"><a src="#">${ item.title }</a></li>`;
	});
	document.querySelector('.title>.title-content').innerHTML = titleHtml;
	var titleItems = document.querySelectorAll('.title-content>li');//取所有标题的li
	titleItems[0].className = 'active';//默认第几个激活
	for(var i = 0; i < titleItems.length; i++) {
		if( i > 7) {
			titleItems[i].onmouseover = function(e) {
			document.querySelector('.title-content>li').className = '';
			e.stopPropagation();
			};
		}
		else {
			(function(j) {
				titleItems[j].onmouseover = function() {
					if(this.className === 'active' ) return;
					document.querySelector('.title-content>li.active').className = '';
					this.className = 'active';
					updatepage();
				};
			}
			)(i);
		}
	}
// 	titleItems.forEach(function(item) {
// 		item.onmouseover = function() {
// 		if(this.className === 'active') return;
// 		document.querySelector('.title-content>li.active').className = '';
// 		this.className = "active";
// 		updatepage();
// 		}; 
// 	});
}
showTitle();
function updateContent(data) {
	var contentHtml = '';
	for(var i =0; i < data.length; i++) {
		contentHtml += 
		`
			<li>
			<a><img src="${ data[i].images}"/></a>
			<p>${ data[i].title.substr(0,12) + "..." }</p>
			<span>${ data[i].price }</span>
			</li>
		`;
	}
	document.querySelector(".title-body-list").innerHTML = contentHtml;
}
//添加滑过事件
var titleMouse = document.querySelector('.title');
titleMouse.onmouseover = function() {
	document.querySelector(".title-body").className += ' active';
};
titleMouse.onmouseout = function() {
	document.querySelector('.title-body').className = 'title-body';
};
function updatepage() {
	var cid = parseInt(document.querySelector('.title-content>li.active').getAttribute("data-id"));
	var data = contents.filter(function(item) {return item.cid === cid;});
	updateContent(data);
}
updatepage();
  // 轮播图的相关代码
var index = 0 ,timer = null;  //表示第一张图片几乎 
function toggleImage(targetIndex) {
	document.querySelector(".banner-images>.active").className = "";
	document.querySelector(".banner-indicators>.active").className = "";
	index = targetIndex;
	document.querySelectorAll(".banner-images>li")[index].className = "active";
	document.querySelectorAll(".banner-indicators>li")[index].className = "active";

}
//开始轮播
function autoPlay() {  //自动播放
	timer = setInterval(function() {toggleImage(index + 1 > 4 ? 0 : index + 1);},3000);
}
//鼠标滑过停止自动播放
document.querySelector(".banner").onmouseover = function() { clearInterval(timer);};
//鼠标滑出重新开始自动播放
document.querySelector(".banner").onmouseout =  function(){ autoPlay();};
//前一张点击按钮事件
document.querySelector(".banner-prev").onclick = function() { toggleImage( index - 1 < 0 ? 4 :index - 1);};
//后一张点击按钮事件
document.querySelector(".banner-next").onclick = function() { toggleImage( index + 1 > 4 ? 0 : index + 1);}; 
var indicators = document.querySelectorAll(".banner-indicators>li");
for( var i = 0; i < indicators.length; i++) {
	(function(j){
		indicators[j].onclick= function(){toggleImage(j);};
	})(i);
}
autoPlay();
//左栏二级菜单弹出
var bannerItems = document.querySelectorAll('.banner-wrapper>li');
bannerItems.forEach(function(item) {
	var cid = parseInt($(item).attr('data-id'));
	var data = menuList.filter(function(item2) { return item2.cid === cid});
	data.forEach(function(item2) {
		$(`
			<li>
				<a href="#"><img src="${ item2.avatar }" /></a>
				<span>${ item2.name }</span>
			</li>
		`).appendTo($(item).find('ul'))
		;
	});
});
bannerItems.forEach(function(item){
	item.onmouseover = function(event) {
		this.className = "active"; //当前鼠标滑过的li激活
		event.stopPropagation();
	}; 
	item.onmouseout = function() { 
		this.className = '';
		event.stopPropagation();
	}
});
//---------------------------------------------------------------------------------------
//分类
$('.category-list .right-list').on('mouseenter', 'li', function() { //绑定鼠标进入事件
        $(this).addClass('active');
});
$('.category-list .right-list').on('mouseleave', 'li', function() { //绑定鼠标划出事件
        $(this).removeClass('active');
});

var tabs = document.getElementById('#tabs').getElementsByTagName('li');
console.log(tabs);
var lists = document.querySelectorAll('.category-list .content>div.appliance-right');
console.log(lists);
for (var i = 0; i < tabs.length; i++) {
        tabs[i].onmouseover = showlist
}

function showlist() {
        for (var i = 0; i < tabs.length; i++) {
                if (tabs[i] === this) {
                        tabs[i].className = 'tab-active';
                        lists[i].className = 'right appliance-right  list-active';
                } else {
                        tabs[i].className = '';
                        lists[i].className = 'right appliance-right';
                }
        }
}

function updateRightList(data) {
        var htmlStr = '';
        for (var i = 0; i < data.length; i++) {
                if(i < 7) {
                        htmlStr += "<li>";
                        htmlStr += "<a class='model-img'>";
                        htmlStr += "<img class='model-img-public' src='" + data[i].avatar + "'/>";
                        htmlStr += "</a>";
                        htmlStr += "<a class='model'>" + data[i].name + "</a>";
                        htmlStr += "<p>" + data[i].brief + "</p>";
                        htmlStr += "<span>" + data[i].price + "元</span>";
                        if (data[i].oldprice == undefined) {
                                htmlStr += "<span class='old-price'>" + data[i].oldPrice + "</span>";
                        }
                        htmlStr += "<div class='eject'>";
                        htmlStr += "<a>";
                        htmlStr += "<span class='review'>" + data[i].comment + "</span>";
                        htmlStr += "<span class='author'>" + data[i].user + "</span>";
                        htmlStr += "</a>";
                        htmlStr += "</div>";
                        htmlStr += "</li>";
                        var ulObj = document.getElementById('target-smart');
                        ulObj.innerHTML = htmlStr;
                } else  {
                        htmlStr += "<li class='last-top'>";
                        htmlStr += "<a>";
                        htmlStr +=  "<img src='" + data[i].avatar + "'/>";
                        htmlStr += "</a>";
                        htmlStr += "<a class='last-top-a'>" + data[i].name + "</a>";
                        htmlStr += "<span>" + data[i].price + "元</span>"
                        htmlStr += "</li>";
                        htmlStr += "<li class='last-bottom'>";
                        htmlStr += "<a>";
                        htmlStr += "<i class='iconfont icon-more'>";
                        htmlStr += "</i>"
                        htmlStr += "</a>";
                        htmlStr += "<a class='last-bottom-more-a'>";
                        htmlStr += "<p class='last-bottom-more'>" + "浏览更多" + "</p>";
                        htmlStr += "<span>"
                        htmlStr += "</span>"
                        htmlStr += "</a>"
                        htmlStr += "</li>";
                        var ulObj = document.getElementById('target-smart');
                        // var ulObj = document.getElementById('target-match');
                        ulObj.innerHTML = htmlStr;
                }
        }
}
var tabsActive = document.querySelectorAll('ul.tabs>li');
tabsActive.forEach(function(item) {
        item.onmouseover = function() {
                if(item.className === 'tab-active') return;
                else {
                        document.querySelector('ul.tabs>li.tab-active').className = '';
                        this.className = 'tab-active';
                        updateContent();
                }
        };
});
function updateContent1() {
        var id = parseInt(document.querySelector('.tabs>li.tab-active').getAttribute('data-id'));
        var idd = parseInt(document.querySelector('.tabs-match>li.tab-active').getAttribute('data-id'));
        //alert(id);
        var data = smartHot.filter(function(item) {return item.cid === id;});
        var data2 = smartHot.filter(function(item) {return item.cid === idd;});
        console.log(data2);
        //alert(data);
        updateRightList(data);
        //updateRightList(data);
}

var tabsActiveA = document.querySelectorAll('ul.tabs-match>li');
tabsActiveA.forEach(function(item) {
        item.onmouseover = function() {
                if(item.className === 'tab-active') return;
                else {
                        document.querySelector('ul.tabs-match>li.tab-active').className = '';
                        this.className = 'tab-active';
                        updateContent1();
                        //var id = parseInt(document.querySelector('.tabs-match>li.tab-active').getAttribute('data-id'));
                        // alert(id);
                        //	var data = smartHot.filter(function(item) {return item.cid === id;});
                        // alert(data);
                        //	console.log(data,id)
                        //updateMatchList(data);
                }
        };
});
updateContent1();











