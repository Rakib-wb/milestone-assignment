// feetToMile
 function feetToMile(feet){
     var mile = feet / 5280;
     return mile;
}
 var result = feetToMile(21120);
 console.log(result);


 //woodCalculator
  function woodCalculator(table, chair, khat){
      var tablecount = table * 8;
      var chaircount = chair * 18;
      var khatcount = khat * 22;
      var totalwood = tablecount + chaircount + khatcount;
      return totalwood;
  }
  var woodresult = woodCalculator(1, 6, 6);
  console.log(woodresult);


//brickCalculator
function brickCalculator(floorNumbers){
    if(floorNumbers <= 10){
        var feet1 = floorNumbers * 15;
        var eait = feet1 * 1000;
    }
    else if(floorNumbers <= 20){
        var feet2 = floorNumbers * 12;
        var eait = feet2 * 1000;
    }
    else if(floorNumbers > 20){
        var feet3 = floorNumbers * 10;
        var eait = feet3 * 1000;
    }
    
        return eait;
}
var result = brickCalculator(10);
console.log(result);


//tingFriends
 function tingFriends(friends){
     var small = friends[0];
     for(var i = 0; i < friends.length; i++){
         var currentFriend = friends[i];
         if(currentFriend > small){
             small = currentFriend;
        }
     }
     return small;
   
 }
 var smallFriend = tingFriends(['sakib', 'mamun', 'rakib', 'rohim', 'arman']);
 console.log(smallFriend);



