/**
 * 非同期関数
 * JavaScriptの仕事
 * →①データのやり取り
 * →②DOM操作
 */

// async function callApi() {
// 	//実際にAPIを叩く処理
// 	const res =　await window.fetch("https://jsonplaceholder.typicode.com/users");
// 	//→fetchをしたらpromiseオブジェクトが帰ってくる

// 	const users = await res.json();
// 	console.log(users);
// }

/**
 * api_app
 */

//DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");


//表示されているリストの次に追加表示する処理
function addList(user) {
	const list = document.createElement("li");
	list.innerText = user.name;
	lists.appendChild(list); 
};

//APIを叩いてユーザーを取る処理
async function getUsers() {
	//データのやり取り
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await res.json();
	return users;
};

//ユーザーリストを表にして追加する
async function listUsers() {
	const users = await getUsers();
	//DOM操作(forEach文)
	users.forEach(addList);

	//DOM操作(forEach文)→上と同じ処理
	// for (let index = 0; index < users.length; index++) {
	// 	const user = users[index];
	// 	const list = document.createElement("li");
	// 	list.innerText = user.address.street;
	// 	lists.appendChild(list); //表示されているリストの次に追加表示
	// }
};

//イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);
	
