document.addEventListener("DOMContentLoaded",function(){

const form=document.querySelector("form");

const button=document.getElementById("predictBtn");

form.addEventListener("submit",function(e){

const cgpa=parseFloat(document.querySelector("[name='cgpa']").value);

const dsa=parseInt(document.querySelector("[name='dsa']").value);

const projects=parseInt(document.querySelector("[name='projects']").value);

const communication=parseInt(document.querySelector("[name='communication']").value);

const resume=document.querySelector("[name='resume']").files[0];

if(cgpa<0||cgpa>10){

alert("CGPA must be between 0 and 10");

e.preventDefault();

return;

}

if(dsa<0||dsa>100){

alert("DSA Score must be between 0 and 100");

e.preventDefault();

return;

}

if(projects<0||projects>20){

alert("Projects should be between 0 and 20");

e.preventDefault();

return;

}

if(communication<1||communication>10){

alert("Communication Skills must be between 1 and 10");

e.preventDefault();

return;

}

if(resume){

const extension=resume.name.split(".").pop().toLowerCase();

if(extension!="pdf"){

alert("Please upload PDF Resume only.");

e.preventDefault();

return;

}

}

button.innerHTML='<span class="spinner-border spinner-border-sm"></span> Predicting...';

button.disabled=true;

});

});