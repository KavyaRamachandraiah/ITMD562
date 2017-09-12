function fizzBuzz(start, end){
	console.log("starting to run");
	if(start<end){
		for(var i=start;i<=end;i++){
			if(i % 3 ==0){
				if(i% 5 ==0){
					console.log("FizzBuzz");
				}else{
				 	console.log("Fizz");
				}
			}else if(i % 5 ==0){
				console.log("Buzz");
			}else{
				console.log(i);
			}
		}
	}
	else{
		console.log("Start cannot be larger than end");
	}
}