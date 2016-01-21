var count = function(countBy, countTo) {
  var array = []
  for (var i = 0; i <= countTo; i += countBy) {
    array.push(" " + i);
  }
  return array;
};

$(document).ready(function(){
  $("form").submit(function(event){
  var countBy = parseInt($("input#countBy").val());
  var countTo = parseInt($("input#countTo").val());
  $(".result").text(count(countBy, countTo));

  event.preventDefault();
  });
});
