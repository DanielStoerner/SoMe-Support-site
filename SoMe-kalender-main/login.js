function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="eaaa"&& password=="eaaa")
{

alert("du har logget ind");
window.open ("../forside/forside.html");
return false;
  }
else{
    alert("du har ikke adgang her mester")
}

}