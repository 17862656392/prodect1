// <script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
function checkLogin() {
	if(typeof Cookies.get('uName') === 'undefined'){
			Cookies.set( 'url', window.location.href);
			window.location.href = '../login/login.html';
		}
}