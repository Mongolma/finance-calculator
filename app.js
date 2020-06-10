// дэлгэцтэй ажиллах модулар
var uiController = (function () {
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
    addListItem: function (type, item) {
      // орлого зарлагын элементийг агуулсан html-ийг бэлтгэнэ
      var html;
      if (type === "inc") {
        list = ".income__list";
        html =
          '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else {
        list = ".expense__list";
        html =
          '<div class="item clearfix" id="expense-%id%"><div class="item__description">description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      // тэр html дотроо орлого зарлагын утгуудыг replace ашиглаж өөрчилж өгнө
      html = html.replace("%id%", item.id);
      html = html.replace("%description%", item.description);
      html = html.replace("%value%", item.value);

      // бэлтгэсэн html ээ dom руу хийж өгнө
      document.querySelector(list).insertAdjacentHTML("beforeend");
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
    items: {
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
      console.log(data.items);
      return item;
    },
    seeData: function () {
      return data;
    },
  };
})();
// холбогч модулар
var appController = (function (uiController, financeController) {
  var ctrladdItem = function () {
    var input = uiController.getInput();
    financeController.addItem(input.type, input.description, input.value);
  };
  uiController.addListItem(items, input.type);
  var setupEventListener = function () {
    var DOM = uiController.getDomstrings();
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
})(uiController, financeController);

appController.init();
