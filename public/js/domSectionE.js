const result = document.getElementById('analysis')

const e1 = document.getElementById('E.1');
const e2 = document.getElementById('E.2');
const e3 = document.getElementById('E.3');

e1.addEventListener('change' , ()=>{
  if(e1.checked){
    console.log(e1.value);
  }
})

e2.addEventListener('change' , ()=>{
  if(e2.checked){
    console.log(e2.value);
  }
})

e3.addEventListener('change' , ()=>{
  if(e3.checked){
    console.log(e3.value);
  }
})
