 const result = document.getElementById('analysis')

 var b1 = document.getElementById('B.1');
 var b2 = document.getElementById('B.2');
 var b3 = document.getElementById('B.3');
 var b4 = document.getElementById('B.4');
 var b5 = document.getElementById('B.5');
 var b6 = document.getElementById('B.6');
 var b7 = document.getElementById('B.7');
 var textArea = document.getElementById('sectionBTextarea');

b1.addEventListener('change' , ()=>{
  if(b1.checked){
    console.log(b1.value);
  }
})
b2.addEventListener('change' , ()=>{
  if(b2.checked){
    console.log(b2.value);
  }
})
b3.addEventListener('change' , ()=>{
  if(b3.checked){
    console.log(b3.value);
  }
})
b4.addEventListener('change' , ()=>{
  if(b4.checked){
    console.log(b4.value);
  }
})
b5.addEventListener('change' , ()=>{
  if(b5.checked){
    console.log(b5.value);
  }
})
b6.addEventListener('change' , ()=>{
  if(b6.checked){
    console.log(b6.value);
  }
})
b7.addEventListener('change' , ()=>{
  if(b7.checked){
    console.log(b7.value);
  }
})
