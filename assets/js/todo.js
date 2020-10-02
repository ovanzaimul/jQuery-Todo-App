//Check off Specific Todos By Clicking
$("ul").on("click", "li", function () { //when an li is clicked inside of an ul(add eventListener to the lis insede of UL)
  $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function (event) {//don't use $("li") because lis wasn't there when the page is loads
  $(this).parent().fadeOut("10", function () {
    $(this).remove();//refers to li element($(this).parent())
  });
  event.stopPropagation();//prevent event bubling
});

$("input[type='text']").on("keypress", function (event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    $(this).val("");
  }
});

$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});