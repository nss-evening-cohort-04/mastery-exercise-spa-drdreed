const carsDiv = document.getElementById("cars-container");

function populatePage (inventory) {
  // Loop over the inventory and populate the page
  let finalHTML = inventory.map((car,i) => {
    let html = "";
    if (i === 0) {
      html += `<div class="row">`;
    }
    html += `<div class="col-sm-4">`;
    html += `<div class="card">`;    
    html += `<div class="make-model">${car.make} ${car.model}</div>`;
    html += `<div class="year">${car.year}</div>`;
    html += `<div class="description">${car.description}</div>`;
    html += `<div class="price pull-right">${formatter.format(car.price)}</div>`;
    html += `</div>`;
    html += `</div>`;

    if((i+1)%3 === 0 && i !== inventory.length - 1){
      html += `</div><div class="row">`;
    }

    if(i === inventory.length - 1 && (i+1)%3 !== 0){
      html += `</div>`;
    }

    return html;
  }).join("");

  carsDiv.innerHTML = finalHTML;
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});
