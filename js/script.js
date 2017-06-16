var c = document.getElementById('mycanvas');
var ctx = c.getContext('2d');
window.onload = function(){
	loading();

}

//逻辑值
var putcard = true;
var getcard = false;
var stopcard   = false;
var betft = true;

//投注面值
var BET = 0;
//要牌次数
var getcardcount = 2;
//boss要牌次数
var bgetcardcount = 2;
//分数
var score = 5000;
//玩家牌点 
var playeraccount = 0;
//庄家牌点
var bossaccount  = 0; 
//记A出现次数
var pcountA = 0;
var bcountA = 0;


//起始画面
var loading = function(){
var img = new Image();
	img.src = "images/bgimg.jpg";
	img.onload = function(){
			ctx.clearRect(0,0,800,400);
			ctx.drawImage(img,0,0,800,400);
			scores();
			// startimg();
			
			obj();
			

			putcards();


			betText();
			bet100();
			bet200();
			bet500();
			bet800();

			 // getcards();
			// stopcards();
			
		}	
}
var loading2 = function(){
var img = new Image();
	img.src = "images/bgimg.jpg";
	img.onload = function(){
			ctx.clearRect(0,0,800,400);
			ctx.drawImage(img,0,0,800,400);
			obj();
			betnum();
			scores();
			
			sentcards1();
			sentcards2();
			
			
			sentcards3();
			sentcards4();
			getcards();
			stopcards();
			bossaccountText();
			playeraccountText();

			// bet100();
			// bet200();
			// bet500();
			// bet800();
		}	
}
// //开始
// var startimg = function(){
// 	ctx.fillStyle="#669900";

// 			ctx.fillRect(340,140,100,50);
// 			ctx.globalAlpha=0.2;
// 			ctx.globalAlpha=1;
			
// 			ctx.font = "50px 幼圆";
// 			ctx.fillStyle = "#0000ff";
// 			ctx.fillText("开始",340,180);
// }
//分数			
var scores  = function(){ // void scores  //function scores(){}
	ctx.font = "30px 微软雅黑";
	ctx.fillStyle = "#CC3333";
	
	ctx.fillText("分数:" + score,10,380);
}

//100注
// var bet100 = function(){
// 	ctx.fillStyle="#669900";
// 	ctx.beginPath();
// 	ctx.arc(200,290,25,0,2*Math.PI);
// 	ctx.closePath();
// 	ctx.fill();	
	
// 	ctx.font = "25px 幼圆";
// 	ctx.fillStyle = "#0000ff";
// 	ctx.fillText("100",180,298);
// 	ctx.fillStyle="#0000ff";
// 	ctx.beginPath();
// 	ctx.arc(200,290,25,0,2*Math.PI);
// 	ctx.closePath();
// 	ctx.stroke();

// }


// 投注
var bet = function(x,y,t){
	// ctx.fillStyle="#669900";
	// ctx.beginPath();
	// ctx.arc(x,y,20,0,2*Math.PI);
	// ctx.closePath();
	// ctx.fill();

	// ctx.font = "20px 幼圆";
	// ctx.fillStyle = "#0000ff";
	// ctx.fillText(t,x-15,y+8);
	// ctx.fillStyle="#0000ff";
	// ctx.beginPath();
	
	// ctx.arc(x,y,20,0,2*Math.PI);
	// ctx.closePath();
	// ctx.stroke();
	var img = new Image();
	img.src = t;
	img.onload = function(){
		ctx.drawImage(img,x,y,40,40);
	}
}
//下注文本
var betText = function(){
	ctx.font = "30px 幼圆";
	ctx.fillStyle = "#CC3333";
	
	ctx.fillText("请下注:",40,320);
}

var bet100 = function(){
	bet(180,290,"images/button 7.png");
}

var bet200= function(){
	bet(250,290,"images/button 8.png");
}

var bet500 = function(){
	bet(320,290,"images/button 9.png");
}

var bet800 = function(){
	bet(390,290,"images/button 10.png");
}
//面值文本
var betnum = function(){
	ctx.font = "30px 黑体";
	ctx.fillStyle = "#CC3333";
	
	ctx.fillText("下注:"+BET,550,320);
}
// var bet100 = function(){
// 	bet(320,290,100);
// }

// var bet500 = function(){
// 	bet(350,290,500);
// }

//操作
var putcards = function(){
			// ctx.fillStyle="#669900";
			// ctx.fillRect(335,343,87,47);
			// ctx.globalAlpha=0.2;
			// ctx.globalAlpha=1;
			// //ctx.color = "#669900";
			// ctx.font = "40px 华文楷体";
			// ctx.fillStyle = "#0000ff";
			// ctx.fillText("发牌",340,380);
			var img = new Image();
	img.src = "images/button 1.png";
	img.onload = function(){
		ctx.drawImage(img,335,343,87,47);}
}
//要牌
var getcards = function(){
			// ctx.fillStyle="#669900";
			// ctx.fillRect(445,343,87,47);
			// ctx.globalAlpha=0.2;
			// ctx.globalAlpha=1;
			// //ctx.color = "#669900";
			// ctx.font = "40px 华文楷体";
			// ctx.fillStyle = "#0000ff";
			// ctx.fillText("要牌",450,380);
			var img = new Image();
	img.src = "images/button 5.png";
	img.onload = function(){
		ctx.drawImage(img,445,343,87,47);}

}

//停牌
var stopcards = function(){
			// ctx.fillStyle="#669900";
			// ctx.fillRect(555,343,87,47);
			// ctx.globalAlpha=0.2;
			// ctx.globalAlpha=1;
			// ctx.color = "#669900";
			// ctx.font = "40px 华文楷体";
			// ctx.fillStyle = "#0000ff";
			// ctx.fillText("停牌",560,380);
			var img = new Image();
	img.src = "images/button 3.png";
	img.onload = function(){
		ctx.drawImage(img,555,343,87,47);}
}
//庄家
var obj  = function(score){
	ctx.font = "30px 华文行楷";
	ctx.fillStyle = "#CC3333";
	
	ctx.fillText("庄家:" ,260,30);
}

// //玩家一
// var player1  = function(score){
// 	ctx.font = "15px 幼圆";
// 	ctx.fillStyle = "#CC3333";
	
// 	ctx.fillText("玩家一:" ,20,120);
// }

// //玩家二
// var player2  = function(score){
// 	ctx.font = "15px 幼圆";
// 	ctx.fillStyle = "#CC3333";
	
// 	ctx.fillText("玩家二:",630,270);
// }


//玩家牌点大小
var bossaccountText  = function(score){
	
	var img1 = new Image();
	img1.src = "images/bg2.bmp";
	img1.onload = function(){
		ctx.clearRect(300,50,100,35);
		ctx.drawImage(img1,300,50,100,35);
		
		if (bossaccount<=21) {
			ctx.font = "15px 黑体";
			ctx.fillStyle = "#0000ff";
		
			ctx.fillText("点数:"+ bossaccount ,300,80);
		} else{
			ctx.font = "15px 黑体";
			ctx.fillStyle = "#0000ff";
		
			ctx.fillText("爆炸",300,80);
		};
		
	}

	
}
//玩家牌点
var playeraccountText  = function(){
	
	var img1 = new Image();
	img1.src = "images/bg2.bmp";
	img1.onload = function(){
		ctx.clearRect(300,280,100,35);
		ctx.drawImage(img1,300,280,100,35);
		

		if (playeraccount<=21) {
		ctx.font = "15px 黑体";
		ctx.fillStyle = "#0000ff";
	
		ctx.fillText("点数:"+ playeraccount ,300,300);
		} else{
			ctx.font = "15px 黑体";
		ctx.fillStyle = "#0000ff";
	
		ctx.fillText("爆炸" ,300,300);
		};
		
	}


	
}

//装载图片
var imgsrc = [53];
for (var i = 1; i <= 53; i++) {
  	
  	imgsrc[i] = "images/cards/" +i+".jpg";
  };  

//随机发牌
var sentcards1 = function(){
	var num =  Math.ceil(Math.random()*52);
	var image =  new Image();
	image.src = imgsrc[num];
	countmath(num);
	image.onload = function(){
	ctx.drawImage(image,300,190,50,80);
	}
}

var sentcards2 = function(){
	var num =  Math.ceil(Math.random()*52);
	countmath2(num);
	var image =  new Image();
	image.src = imgsrc[num];
	image.onload = function(){
	ctx.drawImage(image,350,190,50,80);
	}

}

var sentcards3 = function(){
	var num =  Math.ceil(Math.random()*52);
	var image =  new Image();
	image.src = imgsrc[num];
	bcountmath(num);
	image.onload = function(){
	ctx.drawImage(image,300,90,50,80);
	}

}

var sentcards4 = function(){
	var num =  Math.ceil(Math.random()*52);
	var image =  new Image();
	image.src = imgsrc[num];
	bcountmath2(num);
	image.onload = function(){
	ctx.drawImage(image,350,90,50,80);
	}

}
//庄家要牌API
var tsentcards =  function(c){
	var num =  Math.ceil(Math.random()*52);
	bcountmath2(num);
	var image =  new Image();
	image.src = imgsrc[num];
	var a = 50*c;
	var t = 300+a;
	image.onload = function(){
	ctx.drawImage(image,t,90,50,80);
	}
}
//玩家要牌API
var bsentcards = function(c){
	var num =  Math.ceil(Math.random()*52);
	countmath2(num);
	var image =  new Image();
	image.src = imgsrc[num];
	var a = 50*c;
	var b = 300+a;
	image.onload = function(){
	ctx.drawImage(image,b,190,50,80);
	}
}
//点击事件

c.onclick = function(e){
	var x = e.offsetX;
	var y = e.offsetY;

	putcarding(x,y);
	beting(x,y);
	getcarding(x,y);
	stopcarding(x,y);
}

//投注事件
var beting = function(x,y){
	var bet1 = function(n,m,b,x,y){
		if (x>n) {
			if (x<m) {
				if (y>295) {
					if (y<335) {
						var img1 = new Image();
							img1.src = "images/bg2.bmp";
							img1.onload = function(){
							ctx.clearRect(300,250,150,35);
							ctx.drawImage(img1,300,250,150,35);};
						BET = b;
						betnum();
						betft = false;

					};
				};
			};
		};
	}
	if (putcard) {
		if (betft) {
		bet1(180,220,100,x,y);
		bet1(250,290,200,x,y);
		bet1(320,360,500,x,y);
		bet1(390,430,800,x,y);
		};
	};

	
}
//发牌事件
var putcarding = function(x,y){
 
 if(putcard){
	if (x<422) {
		if (x>335) {
			if (y>343) {
				if (y<390) {
					if (BET>0) {
						loading2();
						sentcards1();
						getcards();
						putcard = false;
						getcard = true;
						stopcard = true;
					} else{
						 	var img1 = new Image();
							img1.src = "images/bg2.bmp";
							img1.onload = function(){
							ctx.clearRect(300,250,100,35);
							ctx.drawImage(img1,300,250,100,35);
							ctx.font = "15px 华文琥珀";
							ctx.fillStyle = "#0000ff";
						
							ctx.fillText("你还没有下注！！！！" ,300,270);};
		
		
	                           
						};
					
					
				};
			};
		};
	};
 };

 
}

//要牌事件
var getcarding = function(x,y){
   if(getcard){
	if(playeraccount<21){
	if (x<532) {
		if (x>445) {
			if (y>343) {
				if (y<390) {
					
					bsentcards(getcardcount);
					//tsentcards(bgetcardcount);
					getcardcount = getcardcount+1;
					//bgetcardcount = bgetcardcount +1;
					//bossaccountText();
					playeraccountText();
					if (playeraccount>=21) {
						bossmath();
					};
					
				};
			};
		};
	};
 };
};

}
//停牌事件
var stopcarding = function(x,y){
	if(stopcard){
	if (x<642) {
		if (x>555) {
			if (y>343) {
				if (y<390) {
					//test("停牌",20);
					bossmath();
				};
			};
		};
	};
 };
}
//点数运算
var countmath = function(count){
	var cc= count % 13;
	if (cc == 1) {
		if (playeraccount<=10) {
			cc = 11;
			pcountA+1;
		};
	} else{
		if (cc>10) {
			cc = 10;
		};
		if (cc == 0) {
			cc = 10;
		};
	};
	playeraccount =  cc;
	//test(cc,20);
}
var countmath2 = function(count){
	var cc= count % 13;
	if (cc == 1) {
		if (playeraccount<=10) {
			cc = 11;
			pcountA+1;
		};
	} else{
		if (cc>10) {
			cc = 10;
		};
		if (cc == 0) {
			cc = 10;
		};
		if (pcountA>0) {
			playeraccount - 10;
		};
	};
	var temp = playeraccount; 
	playeraccount =temp+cc;
	//test(cc,40);
}
//boss点数
var bcountmath = function(count){
	var cc= count % 13;
	if (cc == 1) {
		if (playeraccount<=10) {
			cc = 11;
			bcountA +1;
		};
	} else{
		if (cc>10) {
			cc = 10;
		};
		if (cc == 0) {
			cc = 10;
		};
	};
	bossaccount =  cc;
	//test(cc,20);
}
var bcountmath2 = function(count){
	var cc= count % 13;
	if (cc == 1) {
		if (playeraccount<=10) {
			cc = 11;
			bcountA+1;
		};
	} else{
		if (cc>10) {
			cc = 10;
		};
		if (cc == 0) {
			cc = 10;
		};
		if (bcountA>0) {
			if(count>2){
				bossaccount - 10;}
		};
	};
	var temp = bossaccount; 
	bossaccount = temp+cc;
	//test(cc,40);
}
//测试输出
var test = function(tt,y){
	ctx.font = "30px 华文彩云";
	ctx.fillStyle = "#0000ff";
	
	ctx.fillText(tt,10,y);
}



//boss算法
var bossmath = function(){
	if (playeraccount == 21) {
		do{
		tsentcards(bgetcardcount);
		bgetcardcount= bgetcardcount +1;
		bossaccountText();
		}while(playeraccount>=bossaccount);

		if (playeraccount == bossaccount) {
			//平局
			test("平局...",40);
			score = score;

		}else{
			//玩家赢
			test("你赢了！！",40);
			score = score + BET;
			
		};

		

	} else{
		if (playeraccount>21) {
			//玩家输
			test("你输了！！",40);
			score = score - BET;
		} else{
			if (bossaccount<=playeraccount) {
				do{
					tsentcards(bgetcardcount);
					bgetcardcount+1;
					bossaccountText();
				}while(bossaccount<playeraccount);
				
				if (bossaccount>21) {
					//玩家赢
					test("你赢了！！",40);
					score = score + BET;
				}else{//玩家输
				test("你输了！！",40);
				score = score - BET;
				};
				
			} else{
				//玩家输
				test("你输了！！",40);
				score = score - BET;
			};
		};
	};
	sleeptime();
}
//需要清零的数；
var clearncount  = function(){
//逻辑值
 putcard = true;
 getcard = false;
 stopcard  = false;
 betft = true;

//投注面值
 BET = 0;
//要牌次数
 getcardcount = 2;
//boss要牌次数
 bgetcardcount = 2;

//玩家牌点 
 playeraccount = 0;
//庄家牌点
 bossaccount  = 0; 
//记A出现次数
 pcountA = 0;
 bcountA = 0;
}

var sleeptime = function(){
	getcard = false;
 	stopcard  = false;
	var t1 = setTimeout("clearncount();",2000)
	var t2 = setTimeout("loading();",2000)
}

// //UI
c.onmousedown = function(e){
	var x = e.offsetX;
	var y = e.offsetY;
	
	onbeting(x,y);
	ongetcarding(x,y);
	onputcarding(x,y);
	onstopcarding(x,y);

}

// 投注
// var uibet = function(x,y,t){
// 	// ctx.fillStyle="#D56F2B";
// 	// ctx.beginPath();
// 	// ctx.arc(x,y,20,0,2*Math.PI);
// 	// ctx.closePath();
// 	// ctx.fill();

// 	// ctx.font = "20px 幼圆";
// 	// ctx.fillStyle = "#0000ff";
// 	// ctx.fillText(t,x-15,y+8);
// 	// ctx.fillStyle="#FF0099";
// 	// ctx.beginPath();
	
// 	// ctx.arc(x,y,20,0,2*Math.PI);
// 	// ctx.closePath();
// 	// ctx.stroke();
// 	var img = new Image();
// 			img.src = t;
// 			img.onload = function(){
// 				ctx.drawImage(img,x,y,87,47);
// 			}
// }

// var uibet100 = function(){
// 	uibet(180,315,100);
// }

// var uibet200= function(){
// 	uibet(250,315,200);
// }

// var uibet500 = function(){
// 	uibet(320,315,500);
// }

// var uibet800 = function(){
// 	uibet(390,315,800);
// }

var onbeting = function(x,y){
	var bet1 = function(n,m,b,x,y){
		if (x>n) {
			if (x<m) {
				if (y>295) {
					if (y<335) {

						var img = new Image();
							img.src = b;
							img.onload = function(){
							ctx.drawImage(img,n,290,40,40);
			}
					};
				};
			};
		};
	}
	if (putcard) {
		if (betft) {
		bet1(180,220,"images/button 11.png",x,y);
		bet1(250,290,"images/button 12.png",x,y);
		bet1(320,360,"images/button 13.png",x,y);
		bet1(390,430,"images/button 14.png",x,y);
		};
	};

	
}

//操作
var uiputcards = function(){
			// ctx.fillStyle="#33CCAE";
			// ctx.fillRect(335,343,87,47);
			// ctx.globalAlpha=0.2;
			// ctx.globalAlpha=1;
			// //ctx.color = "#669900";
			// ctx.font = "40px 华文楷体";
			// ctx.fillStyle = "#882274";
			// ctx.fillText("发牌",340,380);
			var img = new Image();
			img.src = "images/button 2.png";
			img.onload = function(){
				ctx.drawImage(img,335,343,87,47);
			}
}
//要牌
var uigetcards = function(){
			// ctx.fillStyle="#33CCAE";
			// ctx.fillRect(445,343,87,47);
			// ctx.globalAlpha=0.2;
			// ctx.globalAlpha=1;
			// //ctx.color = "#669900";
			// ctx.font = "40px 华文楷体";
			// ctx.fillStyle = "#882274";
			// ctx.fillText("要牌",450,380);
			var img = new Image();
			img.src = "images/button 6.png";
			img.onload = function(){
				ctx.drawImage(img,445,343,87,47);
			}
}

//停牌
var uistopcards = function(){
			// ctx.fillStyle="#33CCAE";
			// ctx.fillRect(555,343,87,47);
			// ctx.globalAlpha=0.2;
			// ctx.globalAlpha=1;
			// ctx.color = "#669900";
			// ctx.font = "40px 华文楷体";
			// ctx.fillStyle = "#882274";
			// ctx.fillText("停牌",560,380);
			var img = new Image();
			img.src = "images/button 4.png";
			img.onload = function(){
				ctx.drawImage(img,555,343,87,47);
			}
}

var onputcarding = function(x,y){
 
 if(putcard){
	if (x<422) {
		if (x>335) {
			if (y>343) {
				if (y<390) {
					
					uiputcards();
					
				
			};
		};
	};
  };
 }
}
 var ongetcarding = function(x,y){
   if(getcard){
	if(playeraccount<21){
	if (x<532) {
		if (x>445) {
			if (y>343) {
				if (y<390) {
				uigetcards();	
				};
			};
		};
	};
   };
 };

}

var onstopcarding = function(x,y){
	if(stopcard){
	if (x<642) {
		if (x>555) {
			if (y>343) {
				if (y<390) {
					//test("停牌",20);
					uistopcards();
				};
			};
		};
	};
 };
}

c.onmouseup = function(e){
	var x = e.offsetX;
	var y = e.offsetY;
	
	outbeting(x,y);
	outgetcarding(x,y);
	outputcarding(x,y);
	outstopcarding(x,y);

}

var outputcarding = function(x,y){
 
 if(putcard){
	if (x<422) {
		if (x>335) {
			if (y>343) {
				if (y<390) {
					
					putcards();
					
				
			};
		};
	};
  };
 }
}
 var outgetcarding = function(x,y){
   if(getcard){
	if(playeraccount<21){
	if (x<532) {
		if (x>445) {
			if (y>343) {
				if (y<390) {
				getcards();	
				};
			};
		};
	};
   };
 };

}

var outstopcarding = function(x,y){
	if(stopcard){
	if (x<642) {
		if (x>555) {
			if (y>343) {
				if (y<390) {
					//test("停牌",20);
					stopcards();
				};
			};
		};
	};
 };
}

var outbeting = function(x,y){
	var bet1 = function(n,m,b,x,y){
		if (x>n) {
			if (x<m) {
				if (y>295) {
					if (y<335) {

						var img = new Image();
							img.src = b;
							img.onload = function(){
							ctx.drawImage(img,n,290,40,40);
			}
					};
				};
			};
		};
	}
	if (putcard) {
		if (betft) {
		bet1(180,220,"images/button 7.png",x,y);
		bet1(250,290,"images/button 8.png",x,y);
		bet1(320,360,"images/button 9.png",x,y);
		bet1(390,430,"images/button 10.png",x,y);
		};
	};

	
}