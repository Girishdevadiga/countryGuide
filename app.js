const btn = document.getElementById('search-btn');
const cInput = document.getElementById('country-inp');

const countName=document.querySelector('.countName');
const container=document.querySelector('.cotnainer');
const cap=document.getElementById('capital');
const conty=document.getElementById('conty');
const popu=document.getElementById('popu');
const currency=document.getElementById('currency');
const cmnLag=document.getElementById('cmnLag');
const flagImg=document.getElementById('flag-img');
const erSpan=document.getElementById('Error');


btn.addEventListener('click', () => {
    erSpan.textContent="";
    let cName = cInput.value;
    console.log(cName);
    fetch( `https://restcountries.com/v3.1/name/${cName}?fullText=true`).then((response)=>response.json())
    .then(data=>{
        console.log(data[0]);
        console.log(data[0].name.common);
        console.log(data[0].capital);
        console.log(data[0].flags.png);
        console.log(data[0].languages);
        console.log(data[0].population);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(", "));

        flagImg.src=data[0].flags.png;
        countName.textContent=data[0].name.common;
        cap.textContent=data[0].capital;
        conty.textContent=data[0].continents[0];
        popu.textContent=data[0].population;
        currency.textContent= Object.keys(data[0].currencies)[0]+" - "+data[0].currencies[Object.keys(data[0].currencies)].name;
        cmnLag.textContent=Object.values(data[0].languages).toString().split(",").join(", ");

        

    })
    .catch(error=>{
      console.log("ERRRORRRRRR")
      erSpan.textContent="Cant Find Country Check  Spelling"
      erSpan.style.color='red';
      erSpan.style.paddingLeft='59px';
    });

})
