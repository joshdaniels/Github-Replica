var cID = client_id || '';
var sID = client_secret || '';


// $.getJSON('https://api.github.com/users/joshdaniels', {client_id: cID, client_secret: sID}, function(data){


// 	console.log(data);
	
// 	});

var runtemplate = _.template($(".template").html());

$.getJSON("https://api.github.com/users/joshdaniels/repos", {client_id: cID, client_secret: sID}, function(data){

// data.forEach(function(repo){
// 	$(".name").append(repo.name + "<br />");
	
// });

_.each(data,function(repo){
	// $(".name").append(repo.name + "<br />");
	$(".name").append(runtemplate(repo));
});

});






// personal_info.forEach(function(a){
//   avatar= '<div class="avatar">' + '<img src="' + a.avatar_url + '</div>';
//   $('.personal_info').append('<div class="avatar">'  + '</div>');
// });