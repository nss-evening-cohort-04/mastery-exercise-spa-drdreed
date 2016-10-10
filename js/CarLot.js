var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.addEventListener("load", function () {
        let data = JSON.parse(this.response);
        inventory = data.cars;
        populatePage(inventory);
      });
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
    },
    getInventory: function () {
      return inventory;
    }
  };

})();
