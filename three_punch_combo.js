$i = 0;
$("#start").click(function () {
  $i++;
  if ($i >= 6) {
    $("#start").hide();
    $("#stop").show();
  }
});
$("#stop").click(function () {
	alert("哼！团子还没挑到你心坎里呀，那就听憨憨的吧！");
  $(this).hide();
});
