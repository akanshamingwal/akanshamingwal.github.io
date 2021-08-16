var num1=document.getElementById("num1");
var num2=document.getElementById("num2");
var form=document.getElementById("form1");
form.addEventListener("submit",function(event){
	if(!num1.value || !num2.value){
		alert("enter numbers!!!");
	}
    else{
    	var x=parseFloat(num1.value); //value was string
    	var y=parseFloat(num2.value);
    	var r=x/y;
    	var p=r*100;
    	resultfield.innerText="answer is "+p+"%";
        event.preventDefault();
    }

})