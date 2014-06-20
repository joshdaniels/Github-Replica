var cID = client_id || '';
var sID = client_secret || '';
var runtemplate = _.template($(".template").html());
var runtemplate2= _.template($(".template2").html());
var runtemplate3= _.template($(".template3").html());

$.getJSON('https://api.github.com/users/joshdaniels', {client_id: cID, client_secret: sID}, function(data){

  $(".pi").append(runtemplate(data)); 
  $(".email_link").append(runtemplate3(data));
});


 $.getJSON("https://api.github.com/users/joshdaniels/repos", {client_id: cID, client_secret: sID}, function(data){

_.each(data,function(repo){
     // $(".right_column").append(repo.name + "<br />");
     $(".right_column").append(runtemplate2(repo));
 });

 });




