/**
 * 5.コールバック関数について理解する
 * 　windowオブジェクトのメソッドなどでもよく使われます
 */


function 高階関数(コールバック関数) { //関数の中で関数を実行する
	//処理
	コールバック関数();
}

//Tweetをキャンセルする・フォローを外す関数を自作する

function unfollow() {
	console.log("フォローを外しました");
}

function cancelTweet() {
	console.log("ツイートをキャンセルしました");
}

// unfollow();
// cancelTweet();

//高階関数
function confirmed(fn) {
	if (window.confirm("実行しますか？")) {
		fn();
	}
}

//confirmed(unfollow);
//window.prompt("実行しますか？");

const foods = ["にんじん", "ジャガイモ", "玉ねぎ"];

foods.forEach(function(food) {
	console.log(food);
});


