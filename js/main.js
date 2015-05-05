function select(){
  $("li").find("span").html('');
  var li = $("li");
  var id = Math.ceil(Math.random()*li.length)-1;
  //$("li").eq(id).append("<span style='color:#2DC296;'>>>>开吃<span>");
  $("li").removeClass("active");
  $("li").eq(id).addClass("active");
}
