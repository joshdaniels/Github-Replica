var cID = client_id || '';
var sID = client_secret || '';
var runtemplate = _.template($(".template").html());

$.getJSON('https://api.github.com/users/joshdaniels', {client_id: cID, client_secret: sID}, function(data){

  $(".pi").append(runtemplate(data)); 

	
});



