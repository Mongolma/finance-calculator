// дэлгэцтэй ажилллах
var userInterferController = (function () {})();

// санхүүгийн модулар
var financeController = (function () {})();

// холбогч хэсэг
var appController = (function (uiController, fnController) {
  var ctrlAddItem = function () {
    //   1. Оруулах өгөгдлөө дэлгэцнээс авна.
    console.log("дэлгэцнээс өгөгдөл авах хэсэг");
    //   2. Олж авсан өгөгдлүүдээ санхүүгийн модуларт оруулж хадгална.
    //  3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана.
    // 4. Төслийг тооцоолно.
    // 5. Эцэсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(userInterferController, financeController);
