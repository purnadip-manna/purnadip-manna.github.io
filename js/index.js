var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


$(function() {
	  $(".progress").each(function() {

	    var value = $(this).attr('data-value');
	    var left = $(this).find('.progress-left .progress-bar');
	    var right = $(this).find('.progress-right .progress-bar');

	    if (value > 0) {
	      if (value <= 50) {
	        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
	      } else {
	        right.css('transform', 'rotate(180deg)')
	        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
	      }
	    }

	  })

	  function percentageToDegrees(percentage) {

	    return percentage / 100 * 360

	  }

});

$("#submitbtn").click(function(){
	let name = document.getElementById('inputName').value;
		let email = document.getElementById('inputEmail').value;
		let sub = document.getElementById('inputSubject').value;
		let msg = document.getElementById('inputMessage').value;
	$.ajax({type: "POST", url: "https://purnadip-manna.purnadip2702.repl.co/submit", data: {"name" : name, "email" : email, "subject" : sub, "message" : msg}, success: function(result){
		$("#resText").html(result);
	}});
});


var navbar = document.getElementById("navbarId");
window.onscroll = function () {
	if (window.pageYOffset > 80) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
};

var navmenu = document.getElementById("menuId");
function showmenu() {
	navmenu.classList.toggle("active");
}
function hidemenu(){
	navmenu.classList.remove("active");
	$(".menu-toggle").toggleClass("on");
}
$(".menu-toggle").on('click', function() {
	$(this).toggleClass("on");
});

