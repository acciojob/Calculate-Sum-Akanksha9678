//your JS code here. If required.
let btn=document.querySelector("#sum_btn");
btn.addEventListener("click",()=>{
	let num1=document.querySelector("#n1").value;
	let num2=document.querySelector("#n2").value;
	let output=document.querySelector("#sum");
	output.innerText=parseInt(num1)+parseInt(num2);
	
});
