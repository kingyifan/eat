$i = 0;
$("#start").click(function () {
  $i++;
  if ($i >= 6) {
    $("#start").hide();
    $("#stop").show();
  }
});
$("#stop").click(function () {
	alert("哼！静静还没挑到你心坎里呀，那就听我的吧！");
  $(this).hide();
});
