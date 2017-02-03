var csv = ".txt";
var datapath = "https://cocoflyliu.github.io/stock_crawler/data/"; // 股票的data位址
// 學長的參考path 是 https://cocoflyliu.github.io/stock_crawler/data/
// getelementbyid 在每個js都有出現 暫時預設是從資料庫append東西的可用函數

// 資料分成四個類別
// fx 是第 x 個類別的來源 ， groupx 是裏頭的資料
// form 1~4 是暫且沿用學長的變數名稱 要依據隊友寫了甚麼改

var f1 = document.getElementById("form1");
var f2 = document.getElementById("form2");
var f3 = document.getElementById("form3");
var f4 = document.getElementById("form4");


/*
var group1 = {target:f1.target1.value, comparison:f1.comparison1.value , data:f1.text1.value, searchable:f1.checkValidity()};
var group2 = {target:f2.target2.value, comparison:f2.comparison2.value , data:f2.text2.value, searchable:f2.checkValidity()};
var group3 = {target:f3.target3.value, comparison:f3.comparison3.value , data:f3.text3.value, searchable:f3.checkValidity()};
var group4 = {target:f4.target4.value, comparison:f4.comparison4.value , data:f4.text4.value, searchable:f4.checkValidity()};
*/

document.getElementById("form1").target1.option 

 var ans1 = []
 var ans2 = []
 var ans3 = []
 var ans4 = []
 var outcome = []

function getURL(x){
	var f = x.target;
	var ans = datapath + f + csv;
	return ans;
}
function display(x){
	// 這邊是用來output各種需要display的東西的 
	// x代表要output甚麼 : EPS == 每股盈餘...
}
function sentID(x){
	var ic = "s" + x;
	// singlestock is a function come from graphing.js
	// if there are other functions' name , remember to change it
	if(group1.searchable == true){
		singlestock1(ic); //**
	}
	if(group2.searchable == true){
		singlestock2(ic); 
	}
	if(group3.searchable == true){
		singlestock3(ic); 
	}
	if(group4.searchable == true){
		singlestock4(ic); 
	}
}
//clear2 就是在做清理資料 完全要依據資料庫大改QQ 只是大概寫個樣子比較好改
function clear2(){
	document.getElementById("form1").reset(); //**
	document.getElementById("form2").reset();
	document.getElementById("form3").reset();
	document.getElementById("form4").reset();
	// resultHere 要看資料庫的取名
	var ans = document.getelementbyid("resultHere"); 
	ans.removeChild(document.getElementById("mytable2"));
	var tmp = document.createElementById("div");

	tmp.setAttribute("id","mytable2");
	tmp.setAttribute("class","col-md-12 col-xs-12 "); 
	// cant figure out what did col-md-12 col-xs-12 precisely mean orzz
	ans.appendChild(tmp);	
}
function search(){
	var orgForm = document.getElementById("target1").value;
	var output = document.write(orgForm);
	alert(orgForm);
	var file = "https://cocoflyliu.github.io/stock_crawler/data/DY-js.csv";
	d3.csv(file, function(data) {
    console.log(data);});
}