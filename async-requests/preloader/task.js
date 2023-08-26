const items = document.getElementById('items');
const loader = document.getElementById('loader');

function displayCurrency(data) {
  for (let currency in data.Valute) {
    const currencyDiv = document.createElement('div');
    currencyDiv.classList.add('item');
    
    currencyDiv.innerHTML = `
      <div class="item__code">
        ${data.Valute[currency].CharCode}
      </div>
      <div class="item__value">
        ${data.Valute[currency].Value}
      </div>
      <div class="item__currency">
        руб.
      </div>
    `;
    items.appendChild(currencyDiv);
  }
}

fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then(response => response.json())
  .then(data => {
    displayCurrency(data.response);
    
    loader.classList.remove('loader_active');
  })
  .catch(error => {
    console.error('Произошла ошибка при загрузке данных: ', error);
  });
