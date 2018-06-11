var b1 = selectorById('B.1');
var b2 = selectorById('B.2');
var b3 = selectorById('B.3');
var b4 = selectorById('B.4');
var b5 = selectorById('B.5');
var b6 = selectorById('B.6');
var b7 = selectorById('B.7');
var textArea = selectorById('sectionBTextarea');

b1.addEventListener('change', () => {
  if (b1.checked) {
     console.log(b1.value);
     analysis.textContent = 'Sallam';
  }
})

b2.addEventListener('change', () => {
  if (b2.checked) {
    console.log(b2.value);
  }
})

b3.addEventListener('change', () => {
  if (b3.checked) {
    console.log(b3.value);
  }
})

b4.addEventListener('change', () => {
  if (b4.checked) {
    console.log(b4.value);
  }
})

b5.addEventListener('change', () => {
  if (b5.checked) {
    console.log(b5.value);
  }
})

b6.addEventListener('change', () => {
  if (b6.checked) {
    console.log(b6.value);
  }
})

b7.addEventListener('change', () => {
  if (b7.checked) {
    console.log(b7.value);
  }
})
