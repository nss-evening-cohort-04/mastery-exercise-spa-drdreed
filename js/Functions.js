var CarLot = (function(augIife) {
  var cards = document.getElementsByClassName("card");
  augIife.removeBorderAndBg = function() {
    for (var x = 0; x < cards.length; x++) {
          cards[x].classList.remove('thick-border');
          cards[x].classList.remove('red');
        }
    }

  augIife.addBorderAndBg = function (selectedCar, color) {
        selectedCar.classList.add('thick-border');
        selectedCar.classList.add(color);
    }

  return augIife;
})(CarLot || {});
