$("#submitbtn").click(function () {
  let name = document.getElementById("inputName").value;
  let email = document.getElementById("inputEmail").value;
  let sub = document.getElementById("inputSubject").value;
  let msg = document.getElementById("inputMessage").value;
  $.ajax({
    type: "POST",
    url: "https://purnadip2702.pythonanywhere.com/submit",
    data: { name: name, email: email, subject: sub, message: msg },
    success: function (result) {
      $("#resText").html(result);
    },
  });
});
