function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
function hide(){
    var nop = document.getElementById('container');
    var yes = document.getElementById('error');
    nop.style.display='none';
    yes.style.display = 'block';
}