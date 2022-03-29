/**
 * 変数の宣言方法
 * const 変数名 = 初期値;
 * →再代入出来ない、再定義もできない
 * 
 * let   変数名 = 初期値;
 * →再代入できる、再定義できない
 * 
 * var   変数名 = 初期値;
 * →再代入できる、再定義できる
 * 
 */

//基本的には堅牢なconst/letを使い、varは使ったら負けと思え！！

const obj = {
	foo: 123
};
console.log(obj.foo);
obj.foo = 456;
console.log(obj.foo);


let letNumber = 100;
letNumber = 200;
//let letNumber = 300;
console.log(letNumber);


var varNumber = 100;
var varNumber = 300;
console.log(varNumber);