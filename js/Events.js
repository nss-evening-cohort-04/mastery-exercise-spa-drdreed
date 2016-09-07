var CarLot = (function(augIife) {
  var cards = document.getElementsByClassName("card");
  var searchInput = document.getElementById("search-input");
  var selectedCar;
  augIife.activateEvents = function() {
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", function(event) {
        selectedCar = event.currentTarget;
        CarLot.removeBorderAndBg();
        CarLot.addBorderAndBg(selectedCar, "red" )
        searchInput.value = '';
        searchInput.focus();
      });
    }

    searchInput.addEventListener('keyup', function () {
      selectedCar.querySelector('.description').innerHTML = searchInput.value;
    })
  };

  return augIife;
})(CarLot || {});
