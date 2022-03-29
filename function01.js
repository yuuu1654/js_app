/**
 * 4.匿名(無名)関数について理解する
 * 	関数は値として利用できる
 * 
 * 
 */

function isTweetable(text) {
	return text.length <= 140;
};

const isTweetable = function(text) {  //匿名関数・無名関数
	return text.length <= 140;
};

console.log(isTweetable("foo"));

function alertTweetable(text) {
	if (isTweetable(text)) {
		console.log("you can tweet!");
	}
};


