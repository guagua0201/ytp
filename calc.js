var csv = ".txt";
var datapath = "https://cocoflyliu.github.io/stock_crawler/data/"; // 股票的data位址
// 學長的參考path 是 https://cocoflyliu.github.io/stock_crawler/data/
// getelementbyid 在每個js都有出現 暫時預設是從資料庫append東西的可用函數

// 資料分成四個類別
// fx 是第 x 個類別的來源 ， groupx 是裏頭的資料
// form 1~4 是暫且沿用學長的變數名稱 要依據隊友寫了甚麼改

var f1 = document.getElementById("form1") //**
var f2 = document.getElementById("form2")
var f3 = document.getElementById("form3")
var f4 = document.getElementById("form4")


var group1 = {target:f1.target1.value, comparison:f1.comparison1.value , data:f1.text1.value, searchable:f1.checkValidity()}
var group2 = {target:f2.target2.value, comparison:f2.comparison2.value , data:f2.text2.value, searchable:f2.checkValidity()}
var group3 = {target:f3.target3.value, comparison:f3.comparison3.value , data:f3.text3.value, searchable:f3.checkValidity()}
var group4 = {target:f4.target4.value, comparison:f4.comparison4.value , data:f4.text4.value, searchable:f4.checkValidity()}


document.getElementById("form1").target1.option // 這行的功用存在疑問

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
	group1 = {target:f1.target1.value, comparison:f1.comparison1.value , data:f1.text1.value, searchable:f1.text1.value!=""};
    group2 = {target:f2.target2.value, comparison:f2.comparison2.value , data:f2.text2.value, searchable:f2.text2.value!=""};
    group3 = {target:f3.target3.value, comparison:f3.comparison3.value , data:f3.text3.value, searchable:f3.text3.value!=""};
    group4 = {target:f4.target4.value, comparison:f4.comparison4.value , data:f4.text4.value, searchable:f4.text4.value!=""};

	//parseInt == atoi in c++     
	// startyear , endyear , resulthere 命名取決於資料庫
    var styear = parseInt(document.getElementById("startyear").value) + 2011; //**
    var edyear = parseInt(document.getelementbyid("endyear").value) + 2011;
    var ans = document.getElementById("resultHere");
	ans.removeChild(document.getElementById("mytable2"));
	var tmp = document.createElementById("div");
	tmp.setAttribute("id","mytable2");
	tmp.setAttribute("class","col-md-12 col-xs-12 "); 
	ans.appendChild(tmp);	
	var outcome = [];
	var ans1 = [];
	var ans2 = [];
	var ans3 = [];
	var ans4 = [];
	if(group1.searchable == true){
		// d3 is in graphing.js , maybe change setting 
		// the name is just for temporary
		d3.csv(getURL(group1)),
		fucntion ask1(data1){
			console.log(data1);
			var i;
			for(i=0;i<data1.length;i++){
				var x = data1[i];
				var summary = 0;
				var j;
				//the function for endyear == 2017 and endyear!=2017 should be seperate.
				if(parseInt(edyear) == 2017){
					for(j = parseInt(styear); j < edyear ; j++){
						var sum = parseInt(x[j+"Q1"]) + parseInt(x[i+"Q2"]) + parseInt(x[i+"Q3"]) + parseInt(x[i+"Q4"]);
						summary += parseInt(sum);
					}
					// assume 2017 got Q__
					// value 2017 = sum of parseInt(x["2016Q(1~__)"])
					var value2017 = []; // 2017 連Q1財報都還沒有吧... ? 怎麼弄啊
					var average = (summary + value2017) / ((2016 - parseInt(styear)+1 )*4 + __);
				}
				else{
					for(j = parseInt(styear); j <= edyear ; j++){
						var sum = parseInt(x[j+"Q1"]) + parseInt(x[i+"Q2"]) + parseInt(x[i+"Q3"]) + parseInt(x[i+"Q4"]);
						summary += parseInt(sum);
					}
					var average = summary/ ((parseInt(edyear) - parseInt(styear)+1 )*4);
				}
				if(group1.comparison == 1){
					if(average >= group1.data){
						ans1.push({id : parseInt(x["index"]) , companyName:x["company name"], value: average});
					}
				}
				else if(group1.comparison == 2){
					if (average <= group1.data){
						ans1.push({id: parseInt(x["index"]) ,companyName:x["company name"], value: average});
					}
				}
			}
		}
		console.log(ans1);
	if(group2.searchable == true){
		d3.csv(getURL(group2)),
		fucntion ask2(data2){
			console.log(data2);
			var i;
			for(i=0;i<data2.length;i++){
				var x = data2[i];
				var summary = 0;
				var j;
				//the function for endyear == 2017 and endyear!=2017 should be seperate.
				if(parseInt(edyear) == 2017){
					for(j = parseInt(styear); j < edyear ; j++){
						var sum = parseInt(x[j+"Q1"]) + parseInt(x[i+"Q2"]) + parseInt(x[i+"Q3"]) + parseInt(x[i+"Q4"]);
						summary += parseInt(sum);
					}
					// assume 2017 got Q__
					// value 2017 = sum of parseInt(x["2016Q(1~__)"])
					var value2017 = []; // 2017 連Q1財報都還沒有吧... ? 怎麼弄啊
					var average = (summary + value2017) / ((2016 - parseInt(styear)+1 )*4 + __);
				}
				else{
					for(j = parseInt(styear); j <= edyear ; j++){
						var sum = parseInt(x[j+"Q1"]) + parseInt(x[i+"Q2"]) + parseInt(x[i+"Q3"]) + parseInt(x[i+"Q4"]);
						summary += parseInt(sum);
					}
					var average = summary/ ((parseInt(edyear) - parseInt(styear)+1 )*4);
				}
				if(group2.comparison == 1){
					if(average >= group2.data){
						ans2.push({id : parseInt(x["index"]) , companyName:x["company name"], value: average});
					}
				}
				else if(group2.comparison == 2){
					if (average <= group2.data){
						ans22.push({id: parseInt(x["index"]) ,companyName:x["company name"], value: average});
					}
				}
			}
		}
		console.log(ans2);
	if(group3.searchable == true){
		d3.csv(getURL(group3)),
		fucntion ask3(data3){
			console.log(data3);
			var i;
			for(i=0;i<data3.length;i++){
				var x = data3[i];
				var summary = 0;
				var j;
				//the function for endyear == 2017 and endyear!=2017 should be seperate.
				if(parseInt(edyear) == 2017){
					for(j = parseInt(styear); j < edyear ; j++){
						var sum = parseInt(x[j+"Q1"]) + parseInt(x[i+"Q2"]) + parseInt(x[i+"Q3"]) + parseInt(x[i+"Q4"]);
						summary += parseInt(sum);
					}
					// assume 2017 got Q__
					// value 2017 = sum of parseInt(x["2016Q(1~__)"])
					var value2017 = []; // 2017 連Q1財報都還沒有吧... ? 怎麼弄啊
					var average = (summary + value2017) / ((2016 - parseInt(styear)+1 )*4 + __);
				}
				else{
					for(j = parseInt(styear); j <= edyear ; j++){
						var sum = parseInt(x[j+"Q1"]) + parseInt(x[i+"Q2"]) + parseInt(x[i+"Q3"]) + parseInt(x[i+"Q4"]);
						summary += parseInt(sum);
					}
					var average = summary/ ((parseInt(edyear) - parseInt(styear)+1 )*4);
				}
				if(group3.comparison == 1){
					if(average >= group3.data){
						ans3.push({id : parseInt(x["index"]) , companyName:x["company name"], value: average});
					}
				}
				else if(group3.comparison == 2){
					if (average <= group3.data){
						ans3.push({id: parseInt(x["index"]) ,companyName:x["company name"], value: average});
					}
				}
			}
		}
		console.log(ans3);
	if(group4.searchable == true){
		d3.csv(getURL(group4)),
		fucntion ask4(data4){
			console.log(data4);
			var i;
			for(i=0;i<data4.length;i++){
				var x = data4[i];
				var summary = 0;
				var j;
				//the function for endyear == 2017 and endyear!=2017 should be seperate.
				if(parseInt(edyear) == 2017){
					for(j = parseInt(styear); j < edyear ; j++){
						var sum = parseInt(x[j+"Q1"]) + parseInt(x[i+"Q2"]) + parseInt(x[i+"Q3"]) + parseInt(x[i+"Q4"]);
						summary += parseInt(sum);
					}
					// assume 2017 got Q__
					// value 2017 = sum of parseInt(x["2016Q(1~__)"])
					var value2017 = []; // 2017 連Q1財報都還沒有吧... ? 怎麼弄啊
					var average = (summary + value2017) / ((2016 - parseInt(styear)+1 )*4 + __);
				}
				else{
					for(j = parseInt(styear); j <= edyear ; j++){
						var sum = parseInt(x[j+"Q1"]) + parseInt(x[i+"Q2"]) + parseInt(x[i+"Q3"]) + parseInt(x[i+"Q4"]);
						summary += parseInt(sum);
					}
					var average = summary/ ((parseInt(edyear) - parseInt(styear)+1 )*4);
				}
				if(group4.comparison == 1){
					if(average >= group4.data){
						ans4.push({id : parseInt(x["index"]) , companyName:x["company name"], value: average});
					}
				}
				else if(group4.comparison == 2){
					if (average <= group4.data){
						ans4.push({id: parseInt(x["index"]) ,companyName:x["company name"], value: average});
					}
				}
			}
		}
	console.log(ans4);
	var i1 , i2 , i3 , i4;
	var t1 , t2 , t3 , t4;
	for(i1 = 0 ; i1 < ans1.length ; i1++){
		t1 = ans1[i1];
		for(i2 = 0 ; i2 < ans2.length ; i2++){
			t2 = ans3[i2];
			if(t1["id"] != t2["id"]) continue;
			for(i3 = 0 ; i3 < ans3.length ; i3++){
				t3 = ans3[i3];
				if(t1["id"] != t3["id"]) continue;
				for(i4 = 0 ; i4 < ans4.length ; i4++){
					t4 = ans4[i4];
					if(t1["id"] != t4["id"]) continue;
					outcome.push({id:t1["id"],companyName:t1["companyName"], value1: t1["value"], value2: t2["value"], value3: t3["value"], value4: t4["value"]});
				}
			}
		}
	}
	console.log(outcome);
	/*
		此處又是與display類似的大量輸出擋 要確定到底要輸出個甚麼才能寫ORZ
	*/
	}
	else{
		var i1,i2,i3;
		var t1,t2,t3;
		for(i1 = 0; i1 < ans1.length ; i1++){
			t1 = ans1[i1];
			for(i2 = 0;i2 < ans2.length; i2++){
				t2 = ans2[i2];
				if(t1["id"] != t2["id"]) continue;
				for(i3 = 0;i3 < ans3.length; i3++){
					t3 = ans3[i3];
					if(t1["id"] != t3["id"]) continue;
					outcome.push({id:t1["id"],companyName:t1["companyName"],value1:t1["value"],value2:t2["value"],value3:t3["value"]});

				}
			}
		}
		console.log(outcome);
		// 同上 
		/*

		*/
	}
}
	else{
		var i1,i2;
		var t1,t2;
		for(i1 = 0;i1 < ans1.length ; i1++){
			t1 = ans1[i1];
			for(i2 = 0; i2 < ans2.length ; i2++){
				t2 = ans2[i2];
				if(t1["id"] != t2["id"]) continue;
				outcome.push({id:t1["id"],companyName:t1["companyName"],value1:t1["value"],value2:t2["value"]});
			}
		}
		console.log(outcome);
		// 同上
		/*

		*/
	}
}
	else{
		var i1,t1;
		for(i1 = 0;i1 < ans1.length ; i1++){
			t1 = ans1[i1];
			outcome.push({id:t1["id"],companyName:t1["companyName"],value1:t1["value"]});
			console.log(outcome);
			// 同上
			/*

			*/
		}
	}
}