 const e1 = selectorById('E.1');
 const e2 = selectorById('E.2');
 const e3 = selectorById('E.3');

 e1.addEventListener('change', () => {
   if (e1.checked) {
     console.log(e1.value);
   }
 })

 e2.addEventListener('change', () => {
   if (e2.checked) {
     console.log(e2.value);
   }
 })

 e3.addEventListener('change', () => {
   if (e3.checked) {
     console.log(e3.value);
   }
 })
