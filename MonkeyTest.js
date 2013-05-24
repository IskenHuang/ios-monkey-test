#import "tuneup/tuneup.js"

var delayTime = 1; //second
var minute = 10;
//type 1 = tap
//type 2 = double tap
//type 3 = dragFromToForDuration
//type 4 = touchAndHold
//type 5 = flickFromTo
//type 6 = pinchCloseFromToForDuration
//type 7 = pinchOpenFromToForDuration
//type 8 = rotateWithOptions

test("Monkey test", function(app, target) {
	var deviceWidth = app.rect().size.width;
	var deviceHeight = app.rect().size.height;
	 
	var times = (60/delayTime)*minute;
	
	for(var i = 0; i < times; i++){
		app.delay(delayTime);
		var randomX = Math.random()*(deviceWidth+1);
		var randomY = Math.random()*(deviceHeight+1);
	 	UIATarget.localTarget().captureScreenWithName("case"+i);
		var randomType = Math.round(Math.random()*(8));
	 
		switch(randomType){
	 		case 1:
	 			UIATarget.localTarget().tap({x:randomX,y:randomY});
	 			break;
	 		case 2:
	 			UIATarget.localTarget().doubleTap({x:randomX,y:randomY});
	 			break;
			case 3:
				var targetX = Math.random()*(deviceWidth+1);
				var targetY = Math.random()*(deviceHeight+1);
	 			var duration = Math.random()*(100);  //second 0.5~60
	 			duration = 0.5;
	 			UIATarget.localTarget().dragFromToForDuration({x:randomX,y:randomY}, {x:targetX,y:targetY}, duration);
	 			break;
	 		case 4:
	 			var duration = Math.random()*(100); //second 0.5~60
	 			duration = 0.5;
	 			UIATarget.localTarget().touchAndHold({x:randomX,y:randomY}, duration);
	 			break;
	 		case 5:
	 			var targetX = Math.random()*(deviceWidth+1);
				var targetY = Math.random()*(deviceHeight+1);
	 			UIATarget.localTarget().flickFromTo({x:randomX,y:randomY}, {x:targetX,y:targetY});
	 			break;
			case 6:
				var duration = Math.random()*(100); //second 0.5~60
	 			duration = 0.5;
	 			UIATarget.localTarget().pinchCloseFromToForDuration({x:deviceWidth/2,y: deviceHeight/2}, {x:0,y:0}, duration);
	 			break;
	 		case 7:
				var duration = Math.random()*(100); //second 0.5~60
	 			duration = 0.5;
	 			UIATarget.localTarget().pinchOpenFromToForDuration({x:0,y:0}, {x:deviceWidth/2,y:deviceHeight/2}, duration);
	 			break;
	 		case 8:
	 			var duration = Math.random()*(100); //second 0.5~60
	 			duration = 0.5;
	 			UIATarget.localTarget().rotateWithOptions({x:randomX,y:randomY}, {duration:duration});
	 			break;
	 	}
	  
	}
});

