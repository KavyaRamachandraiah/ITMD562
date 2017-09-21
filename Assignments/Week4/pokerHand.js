function handAssessor(arr){
  var real=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
  find(arr,real);
  console.log("Flush : "+isFlush(arr));
  isStraight(arr,real);
  isRoyalFlush(arr,real);
}

function find(arr,real){
      var counter2=0;
      var c=0;
      for(var i=0;i<real.length;i++ ){
            var counter1=0;
            for(var j=0;j<arr.length;j++){
                  if(real[i] == arr[j].rank){
                      counter1=counter1+1;
                  }
            }
            if(counter1==2){
                counter2=counter2+2;
            }else if(counter1==3){
                counter2=counter2+3;
            }else if(counter1==4){
                c=counter1;
                console.log("Its 4 of a kind");
            }else if(counter1==5){
                c=counter1;
                console.log("its 5 of a kind");
            }
      }
      if(counter2==2){
          console.log("its a pair");
      }else if(counter2==3){
          console.log("its 3 of a kind");
      }else if(counter2==4){
          console.log("its 2 sets of pair");
      }else if(counter2==5){
          console.log("Its 2 of a kind");
          console.log("Its 3 of a kind");
          console.log("Its a FULL HOUSE with 3 of a kind and a pair");
      }else if(c<=1 && counter2==0){
          return 1;
      }
}
function isStraight(arr,real){
    var min=10;
    var j=0;
    var index=0;
    if(find(arr,real)==1){
        for(var i=0;i<arr.length;i++){
            if((arr[i].rank!=real[9] &&arr[i].rank!=real[10]&&arr[i].rank!=real[11]&&arr[i].rank!=real[12])){
                if(arr[i].rank<=min){
                    min=arr[i].rank;
                   }
            }
        }
        for(j=0;j<real.length;j++){
            if(real[j]==min){
                index=j;
            }
        }
        var count1=0
        for(var k=index;k<index+5;k++){
            var count=0;
            for(var l=0;l<arr.length;l++){
                if(real[k]==arr[l].rank){
                    count=count+1;
                }
            }
            if(count!=0){
                count1=count1+1;
            }
        }
        if(count1==5 && isFlush(arr)){
            console.log("Its Straight flush");
        }else if(count1==5 && !(isFlush(arr))){
            console.log("Its Just Straight");
        }else if(count1!=5){
            console.log("Bust");
        }
    }
}
function isFlush(arr){
    var count=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i].suit==arr[0].suit){
            count=count+1;
        }
    }
    if(count==5){
        return true;
    }else{
        return false;
    }
}
function isRoyalFlush(arr,real){
    var count1=0
    for(var i=8;i<real.length;i++){
        var count=0;
        for(var j=0;j<arr.length;j++){
            if(real[i]==arr[j].rank){
                count=count+1;
            }
        }
        if(count!=0){
            count1=count1+1;
        }
    }
    if(count1==5 && isFlush(arr)){
        console.log("its Royal flush");
    }
}