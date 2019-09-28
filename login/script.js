$(document).ready(function() {
  $("#login_btn").click(function(){
    $("#login_btn").attr("disabled", true);
    $.ajax({
      url: "https://savemeapp.000webhostapp.com/Transactions/distributor_login.php",
      type: "POST",
      data: {org : $('#uname').val(), pw: $('#psw').val()},
      success: function(res){
        if(res !== 0) {
          localStorage.setItem("user", res);
          location.href="../home/index.html";
        } else {
          alert("No user found");
        }
      },
      error: function(err){
        alert(err);
        $("#login_btn").attr("disabled", false);
      }
    });
  });
});