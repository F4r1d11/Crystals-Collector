var lost = 0;
var randomResult;
var win = 0;
var sum = 0;

$("#Collector").html("CrystalsCollector!");
$("#randomN").html("Get this number:");

var game = function (){

    $(".crystalContainer").empty();

    var images = [
      
      src="assets/images/Crystal_1.jpg",
      src="assets/images/Crystal_2.png",
      src="assets/images/Crystal_3.jpg",
      src="assets/images/Crystal_4.jpg",
    ];

    randomResult = Math.floor(Math.random()*101)+19;

    $("#randomR").html(randomResult);

    for (var i = 0; i < 4; i++) {
      var random = Math.floor(Math.random() * 11)+1;
      
      var crystal = $("<div>");
          crystal.attr("class", "crystal");
          crystal.attr("randNumber", random);
  
crystal.css({
    "background-image":"url(" + images[i] + ")",
    "background-size":"cover"
});

      $(".crystalContainer").append(crystal);
    }
    $("#sum").html("Your total score is:" + " " + sum);
    $("#win").html("Wins:" + " " + win);
    $("#lost").html("Losses:" + " " + lost);
}
game();

$(document).on("click", ".crystal", function(){

  var clickNum = parseInt($(this).attr("randNumber"));

  sum += clickNum;

  $("#sum").html("Your total score is:" +" " + sum);

  console.log(sum);

  if (sum > randomResult){
  lost++;
  $("#lost").html("Losses:" + " " + lost);
  sum = 0;

  game();
}
  if (sum === randomResult){
    
    win++;

  $("#win").html("Wins:" + " " + win);
  sum = 0;
  game();
  }
});

