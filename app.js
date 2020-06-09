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
// private function
var financeController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  // private function
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  // private data
  var data = {
    Items: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };
  return {
    addItem: function (type, description, value) {
      var item, id;
      if (data.items[type].length === 0) id = 1;
      else {
        id = data.items[type][data.items[type].length - 1].id + 1;
      }
      if (type === "inc") {
        item = new Income(id, description, value);
      } else {
        item = new Expense(id, description, value);
      }
      data.items[type].push(item);
    },
    data: function () {
      return data;
    },
  };
})();
// холбогч модулар
var appController = (function (userInterferController, financeController) {
  var ctrladdItem = function () {
    // 1. оруулах өгөгдлийг дэлгэцнээс олж авна
    var input = userInterferController.getInput();
    // 2. олж авсан өгөгдлүүдээ санхүүгийн контроллорт дамжуулж тэндээ хадгална
    financeController.addItem(input.type, input.description, input.value);
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
