$("#submitbtn").click(function(){
	let name = document.getElementById('inputName').value;
		let email = document.getElementById('inputEmail').value;
		let sub = document.getElementById('inputSubject').value;
		let msg = document.getElementById('inputMessage').value;
	$.ajax({type: "POST", url: "https://purnadip-manna.purnadip2702.repl.co/submit", data: {"name" : name, "email" : email, "subject" : sub, "message" : msg}, success: function(result){
		$("#resText").html(result);
	}});
});
