function validate()
{

var x=document.getElementById("pswd");
var y=document.getElementById("pswd1");
if(x.value!="" && y.value!="")
{
if(x.value==y.value){
if(x.value.length>=8)
{
return true;
}
else
{
alert("Password must be atleast 8 characters long.")
}
}
else{ 
alert("Password must be equal with Repeat Password.")
return false;
}
}

return false;
}
