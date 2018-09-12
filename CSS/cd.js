var name=prompt("Enter Your Name to See This website");
if(name==""){
    myFunction(name);
}else{
    alert("Welcome "+ name.toUpperCase() + " to my website");
}
function myFunction(name){
    var myName=prompt("Please enter your Name");
    if(name==""){
        myFunction(name);
    }else{
        alert("Welcome "+ myName.toUpperCase() + " to my website");
    }
}
$('.carousel').carousel({
interval:700, 
keyboard:true,
});
