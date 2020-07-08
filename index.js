/**document.querySelector(".urName").addEventListener("focus",function()
{
    var h3=document.querySelector(".ContactMe");
    h3.textContent="Hi,It's  going to be nice to know you!";
});**/
document.querySelector(".feedback").addEventListener("keydown",countChar);
document.querySelector(".urName").addEventListener("input",addMsg);

function countChar(e){
  var charLeft=180-(e.target.value.length);
  var msg=document.querySelector(".msg");
  msg.innerHTML="<em> Characters Left-"+charLeft+"</em>";

}
function addMsg(e)
{
   var h3=document.querySelector(".ContactMe");
   h3.textContent="Hi ,"+ e.target.value +" It's  going to be nice to know you!😊";
}
document.querySelector(".submit").addEventListener("click",sendemail);
function sendemail()
{
    var body = "Name: " + document.getElementsByClassName("urName").value + "\n";
    body+="PhoneNo:" + document.getElementsByClassName("ph").value+"\n";
    body+="Feedback:"+document.getElementsByClassName("feedback").value+"\n";
    var location = "mailto:dhananjaysinghmakkerr@gmail.com?subject=feedback for you&body=" + encodeURIComponent(body);
    window.location.href = location;
}
