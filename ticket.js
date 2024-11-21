const dropEl = document.getElementById('drop');

const trandivEl = document.getElementById('trandiv');

const btnEl1 = document.getElementById('btn1');

const btnEl2 = document.getElementById('btn2');

const btnEl3 = document.getElementById('btn3');

const btnEl4 = document.getElementById('btn4');

btnEl1.addEventListener('click', ()=> {
  trandivEl.classList.add('show');
  dropEl.classList.add('show');

})

dropEl.addEventListener('click', ()=> {
  trandivEl.classList.remove('show');
  dropEl.classList.remove('show');
})


console.log('hey');