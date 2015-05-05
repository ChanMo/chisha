function select(){
  $("li").find("span").html('');
  var li = $("li");
  var id = Math.ceil(Math.random()*li.length)-1;
  $("li").eq(id).append("<span style='color:#FF6600;'>>>>开吃<span>");
}
