


#起始画面的绘制

###利用canvas绘制

* 在index.html文件中添加一个canvas标签

* 使用css布局文件进行简单的样式更改

	    display: block;
    	margin: 50px auto;
    	box-shadow: -2px -2px 2px #efefef,5px 5px 5px #b9b9b9; 
    	border-radius: 25px;

* 然后在canvas中新建一张图片，当图片装载时，清空canvas中的内容
		
		var img = new Image();
		img.src = "images/bgimg.jpg";
		img.onload = function(){
			ctx.clearRect(0,0,800,400);
		}
* 再把这张图片画下来
		
		ctx.drawImage(img,0,0,800,400);
#####利用canvas绘制canvas里面的类容
* 分数
        
		var scores  = function(){
    		ctx.font = "30px 微软雅黑";
    		ctx.fillStyle = "#CC3333";
    		ctx.fillText("分数:" + score,10,380);
			}  
* 庄家
	    
		var obj  = function(score){
    	ctx.font = "30px 华文行楷";
    	ctx.fillStyle = "#CC3333";
    	ctx.fillText("庄家:" ,260,30);
    	}
* 发牌按钮
 
		var putcards = function(){
		ctx.fillStyle="#669900";
		ctx.fillRect(335,343,87,47);
		ctx.globalAlpha=0.2;
		ctx.globalAlpha=1;
		ctx.font = "40px 华文楷体";
		ctx.fillStyle = "#0000ff";
		ctx.fillText("发牌",340,380);
		}
* 分数			
	
	    var scores  = function(){
    	ctx.font = "30px 微软雅黑";
    	ctx.fillStyle = "#CC3333";
    	ctx.fillText("分数:" + score,10,380);
    	}
####投注的筹码绘制
* 写一个方法，根据不同的路径来绘制筹码

		var bet = function(x,y,t){
		ctx.fillStyle="#669900";
		ctx.beginPath();
		ctx.arc(x,y,20,0,2*Math.PI);
		ctx.closePath();
		ctx.fill();
	
		ctx.font = "20px 幼圆";
		ctx.fillStyle = "#0000ff";
		ctx.fillText(t,x-15,y+8);
		ctx.fillStyle="#0000ff";
		ctx.beginPath();
		
		ctx.arc(x,y,20,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
		}
* 使用上面的方法，分别绘制不同面值的筹码
## 第二个画面的绘制
* 擦掉第一个画面，重新绘制，再添加绘制好的文本，和按钮组件
	
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
    		}	
    	}

##绘制组件
####扑克牌的绘制
* 现将图片路径读入数组中
	
	    var imgsrc = [53];
    	for (var i = 1; i <= 53; i++) {
      	imgsrc[i] = "images/cards/" +i+".jpg";
      	};	
* 新建一张图片，加一个随机数，来随机读取图片

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
* 同上写一个方法，按路径发牌
		
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
##为不同按钮添加事件
* 取得canvas的onclic事件，根据不同坐标点的位置来响应不同的事件
	
		c.onclick = function(e){
		var x = e.offsetX;
		var y = e.offsetY;
	
		putcarding(x,y);//发牌事件
		beting(x,y);//投注事件
		getcarding(x,y);//要牌事件
		stopcarding(x,y);//停牌事件
		} 
####为这些事件，绑定方法
* 发牌事件
>先判断发牌按钮的位置，为发牌事件绑定执行的功能
	
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
* 其他按钮思路同上
##逻辑结构
>首先定义一些在程序执行过程中的全局变量
>例如putcard的真假定义，用来判断发牌按钮是否可以点击。
>BET的定义，当按下不同面值的筹码时，为BET赋值，用来当局完成后
>结算分数的依据。

* 全局变量的定义
	
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

* 判断玩家输赢，和电脑出牌思路。

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
