// дэлгэцтэй ажиллах модулар
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
    getDomstrings: function () {
      return DOMstrings;
    },
  };
})();
// санхүүгийн модулар
var financeController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
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
// холбогч модулар
var appController = (function (userInterferController, financeController) {
  var ctrladdItem = function () {
    // 1. оруулах өгөгдлийг дэлгэцнээс олж авна
    console.log(userInterferController.getInput());
    // 2. олж авсан өгөгдлүүдээ санхүүгийн контроллорт дамжуулж тэндээ хадгална
    // 3. олж авсан өгөгдлүүдээ вэб дээрээ тохирох газар нь тавина
    // 4. төсөв тооцоолно
    // 5. эцэсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана
  };
  var setupEventListener = function () {
    var DOM = userInterferController.getDomstrings();
    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrladdItem();
    });
    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13) {
        ctrladdItem();
      }
    });
  };
  return {
    init: function () {
      console.log("app started");
      setupEventListener();
    },
  };
})(userInterferController, financeController);
appController.init();
