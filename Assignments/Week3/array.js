function max(arr){
	var m=0;
	var l=arr.length;
	if(l>1){
		for(var i=0;i<arr.length;i++)
			{
				if(arr[i]>m)
				{
					m=arr[i];
				}
			}
			console.log("max num in the array "+m);
			while(l!=0){
				for(var j=0;j<arr.length;j++){
						if(arr[j]<arr[j+1]){
								var a=arr[j];
								arr[j]=arr[j+1];
								arr[j+1]=a;
							}
						}
						l--;
					}
					console.log("the 1st 3 largest numbers in array are "+ arr[0]+","+arr[1]+","+arr[2]);
				}else{
					console.log("Array lenght should be more than 1");
				}
			}