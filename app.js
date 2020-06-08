// дэлгэцтэй ажилллах
var userInterferController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDomstring: function () {
      return DOMstrings;
    },
  };
})();

// санхүүгийн модулар
var financeController = (function () {
  var Income = function (id, value, description) {
    this.id = id;
    this.value = value;
    this.description = description;
  };

  var Expense = function (id, value, description) {
    this.id = id;
    this.value = value;
    this.description = description;
  };

  var data = {
    allItems: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };
})();

// холбогч хэсэг
var appController = (function (uiController, fnController) {
  var ctrlAddItem = function () {
    //   1. Оруулах өгөгдлөө дэлгэцнээс авна.
    console.log(userInterferController.getInput());
    //   2. Олж авсан өгөгдлүүдээ санхүүгийн модуларт оруулж хадгална.
    //  3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана.
    // 4. Төслийг тооцоолно.
    // 5. Эцэсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };
  var setupEventListener = function () {
    var DOM = uiController.getDomstring();

    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });
    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };
  return {
    init: function () {
      console.log("app started...");
      setupEventListener();
    },
  };
})(userInterferController, financeController);

appController.init();
