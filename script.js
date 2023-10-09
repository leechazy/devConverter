const form = document.getElementById('form');
form.addEventListener('submit',handleSubmit)

const inputValue = document.getElementById('value-real');
const selectCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted = 0;

function handleSubmit(e){
  e.preventDefault();
  
  if(!inputValue.value || inputValue.value < 0){
    alert('Informe um valor correto!');
    return;
  } else if(!selectCurrency.value){
    alert('Escolha uma moeda!');
    return;
  }

  converter();

};

function converter(){
  if (selectCurrency.value === 'eur'){
    valueConverted = inputValue.value / 5.44;
    result.innerHTML = valueFormatter('pt-BR', 'EUR');

    animatedResult();
  } else if (selectCurrency.value === 'dol'){
    valueConverted = inputValue.value / 5.15;
    result.innerHTML = valueFormatter('en-Us', 'USD');

    animatedResult();
  }

  inputValue.value = '';
  selectCurrency.value = '';
  
};

function valueFormatter(locale, currency) {
  const value = valueConverted.toLocaleString(`${locale}`, { style: 'currency', currency: `${currency}`});
  return `<span>🤑</span> ${value} <span>🤑</span>`;
};

function animatedResult(){
  return result.animate([
    { transform: 'translateY(-150px'},
    { transform: 'translateY(0px'},
  ], { duration: 500});
}