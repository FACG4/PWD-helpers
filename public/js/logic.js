const selectorById = (id) => {
return document.getElementById(id);
}

const allSectionContainer = selectorById('allSectionContainer');
const sideMenu = selectorById('sideMenu');
const analysis = selectorById('analysis');

const submitDataToGetAnalysis = selectorById('submitDataToGetAnalysis');
submitDataToGetAnalysis.addEventListener('click' , ()=>{

  allSectionContainer.style.display = 'none';
  sideMenu.style.display = 'none';
  analysis.style.display = 'block';
})
