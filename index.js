// Code your solution in this file!
function distanceFromHqInBlocks(miles){
    if(miles > 42){
        return miles - 42
    }else if (miles < 42) {  
        return 42 - miles;
    }
    }
  
   function distanceFromHqInFeet(miles) {
   return  distanceFromHqInBlocks(miles)*264
    }
    function distanceTravelledInFeet(start, end){
       if(start > end){
        return(start-end)*264
       }else if (start < end){
        return (end  - start)*264
       }
    }
function calculatesFarePrice(start, destination){
    if(distanceTravelledInFeet(start, destination)<400){
        return 0;
    }else if(distanceTravelledInFeet(start, destination)<=2000){
        return (distanceTravelledInFeet(start, destination)-400)/50;
    }else if(distanceTravelledInFeet(start, destination)>2500){
        return "cannot travel that far";
    }else{
        return 25;
    }
}
    