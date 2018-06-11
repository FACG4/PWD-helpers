var b1 = selectorById('B.1');
var b2 = selectorById('B.2');
var b3 = selectorById('B.3');
var b4 = selectorById('B.4');
var b5 = selectorById('B.5');
var b6 = selectorById('B.6');
var b7 = selectorById('B.7');
var textArea = selectorById('sectionBTextarea');
let values = [];
let solution = [];

submitDataToGetAnalysis.addEventListener('click', (e) => {
  e.preventDefault();

  if (b1.checked) {
    values.push("answer for " + b1.name + " is "+b1.value);}

  if (b2.checked) {
    values.push(b2.value)}

  if (b3.checked) {
    values.push(b3.value)}


  const data = JSON.stringify({
    body: values,
  });
  console.log(data);


  fetch('/sramy', {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    body: data,
  })
})




 
