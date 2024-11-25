const dropEl = document.getElementById('drop');

const trandivEl = document.getElementById('trandiv');

const btnEl1 = document.getElementById('btn1');

const btnEl2 = document.getElementById('btn2');

const btnEl3 = document.getElementById('btn3');

const btnEl4 = document.getElementById('btn4');

const secondEl = document.getElementById('select');

const transEl = document.getElementById('trans')

btnEl1.addEventListener('click', ()=> {
  secondEl.classList.add('show');
  dropEl.classList.add('show');
  console.log('hey');
})

dropEl.addEventListener('click', ()=> {
  secondEl.classList.remove('show');
  trandivEl.classList.remove('show');
  dropEl.classList.remove('show');
})


transEl.addEventListener('click', () => {
  trandivEl.classList.add('index');
  trandivEl.classList.add('show');
  dropEl.classList.add('show');
  console.log('hey');
})
