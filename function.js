

/**
 * 関数の構文
 */
function 関数名(仮引数1, 仮引数2) {
	//処理
	return 関数の戻り値;
}

const foo = {
	// alert: function () {},
	alert() {}, //省略系
};

//Tweetが文字数を超えているかどうかの検証
function isTweetable(text) {
	return text.length <= 140;
}

function alertTweetable(text) {
	if (text.length <= 140) {
		window.alert('you can tweet anything!!');
	}
}
//console.log(alertTweetable("success"));
alertTweetable("success");


