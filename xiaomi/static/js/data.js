var users = [
	{ name: 'user1', pwd: '123' },
	{ name: 'user2', pwd: '123' }
];

var categorys = [ 
	{ id: 1, name: '手机' },
	{ id: 2, name: '家电' },
	{ id: 3, name: '笔记本' },
];
var products = [
	{
		id: 1,
		cid: 1,
		price: 2999,
		avatar: '../static/images/product/phone/001.png',
		name: '小米9',
		reviews: '1.2万人好评',
	},
	{
		id: 2,
		cid: 1,
		price: 999,
		avatar: '../static/images/product/phone/002.png',
		name: 'Redmi Note7 3GB+32G',
		reviews: '1.3万人好评',
	},
	{
		id: 3,
		cid: 1,
		price: 1999,
		avatar: '../static/images/product/phone/003.png',
		name: '小米9 SE',
		reviews: '1.1万人好评',
	},
	{
		id: 4,
		cid: 1,
		price: 1599,
		avatar: '../static/images/product/phone/004.png',
		name: '小米8 SE',
		reviews: '1.4万人好评',
	},
	{
		id: 5,
		cid: 1,
		price: 1499,
		avatar: '../static/images/product/phone/005.png',
		name: '小米8 青春版',
		reviews: '1.5万人好评',
	},
	{
		id: 6,
		cid: 2,
		price: 399,
		avatar: '../static/images/product/homeappliance/001.jpg',
		name: '米家iHealth血压计',
		reviews: '1.4万人好评',
	},
	{
		id: 7,
		cid: 2,
		price: 69,
		avatar: '../static/images/product/homeappliance/002.jpg',
		name: '米家蓝牙温湿度计',
		reviews: '1.2万人好评',
	},
	{
		id: 8,
		cid: 2,
		price: 9,
		avatar: '../static/images/product/homeappliance/003.jpg',
		name: '彩虹5号电池（10粒装）',
		reviews: '17.7万人好评',
	},
	{
		id: 9,
		cid: 2,
		price: 1999,
		avatar: '../static/images/product/homeappliance/004.jpg',
		name: '米家互联网空调',
		reviews: '1.9万人好评',
	},
	{
		id: 10,
		cid: 2,
		price: 1599.00,
		avatar: '../static/images/product/homeappliance/005.jpg',
		name: '米家空调',
		reviews: '1.0万人好评',
	},
	{
		id: 11,
		cid: 3,
		price: 3599,
		avatar: '../static/images/product/laptop/001.jpg',
		name: '小米笔记本air',
		reviews: '1.0万人好评',
	},
];

var cart = [
	{ id: 1, name: 'user1', productId: 3, count: 3},
	{ id: 2, name: 'user1', productId: 4, count: 1},
	{ id: 3, name: 'user1', productId: 1, count: 2},
	{ id: 4, name: 'user1', productId: 5, count: 5},
	{ id: 5, name: 'user1', productId: 2, count: 5},
	{ id: 6, name: 'user2', productId: 2, count: 3},
	{ id: 7, name: 'user2', productId: 3, count: 1},
];

var orderState = [
	{id: 1, name: '全部有效订单'},
	{id: 2, name: '待支付'},
	{id: 3, name: '待收货'},
	{id: 4, name: '已关闭'},
]

var orders = [
	{
		id: 1,
		cid: 1,
		state: '已收货',
		time: '2018年06月30日 06:48',
		user: 'user1',
		orderId:2019000011,
		pay: '小米钱包',
		price: 2999.00,
		avatar: '../static/images/product/phone/001.png',
		name: '小米9',
		acount: '2999元x1'
	},
	{
		id: 2,
		cid: 2,
		state: '待支付',
		time: '2018年07月06日 12:30',
		user: 'user1',
		orderId:2019000012,
		pay: '银联支付',
		price: 999,
		avatar: '../static/images/product/phone/002.png',
		name: 'Redmi Note7 3GB+32G',
		acount: '1599元x1'
	},
	{
		id: 3,
		cid: 4,
		state: '已退款',
		time: '2018年07月20日 13:12',
		user: 'user1',
		orderId:2019000013,
		pay: '小米钱包',
		price: 1999.00,
		avatar: '../static/images/product/phone/003.png',
		name: '小米9 SE',
		acount: '1999元x1'
	},
	{
		id: 4,
		cid: 3,
		state: '待收货',
		time: '2018年08月30日 11:20',
		user: 'user1',
		orderId:2019000014,
		pay: '支付宝付款',
		price: 1599,
		avatar: '../static/images/product/phone/004.png',
		name: '小米8 SE',
		acount: '3299元x1'
	},
	{
		id: 5,
		cid: 1,
		state: '已收货',
		time: '2018年09月03日 10:10',
		user: 'user1',
		orderId:2019000015,
		pay: '支付宝付款',
		price: 1499.00,
		avatar: '../static/images/product/phone/005.png',
		name: '小米8 青春版',
		acount: '1499元x1'
	},
	{
		id: 1,
		cid: 1,
		state: '已收货',
		time: '2018年06月30日 06:48',
		user: 'user2',
		orderId:2019000011,
		pay: '小米钱包',
		price: 2999.00,
		avatar: '../static/images/product/phone/001.png',
		name: '小米9',
		acount: '2999元x1'
	},
	{
		id: 2,
		cid: 2,
		state: '待支付',
		time: '2018年07月06日 12:30',
		user: 'user2',
		orderId:2019000012,
		pay: '银联支付',
		price: 999,
		avatar: '../static/images/product/phone/002.png',
		name: 'Redmi Note7 3GB+32G',
		acount: '1599元x1'
	},
	{
		id: 3,
		cid: 4,
		state: '已退款',
		time: '2018年07月20日 13:12',
		user: 'user2',
		orderId:2019000013,
		pay: '小米钱包',
		price: 1999.00,
		avatar: '../static/images/product/phone/003.png',
		name: '小米9 SE',
		acount: '1999元x1'
	},
	{
		id: 4,
		cid: 2,
		state: '已收货',
		time: '2018年08月30日 11:20',
		user: 'user2',
		orderId:2019000014,
		pay: '支付宝付款',
		price: 1599,
		avatar: '../static/images/product/phone/004.png',
		name: '小米8 SE',
		acount: '3299元x1'
	},
	{
		id: 5,
		cid: 3,
		state: '待收货',
		time: '2018年09月03日 10:10',
		user: 'user2',
		orderId:2019000015,
		pay: '支付宝付款',
		price: 1499.00,
		avatar: '../static/images/product/phone/005.png',
		name: '小米8 青春版',
		acount: '1499元x1'
	},
];


