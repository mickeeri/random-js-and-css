var Notification = function() {
  var target = document.getElementById("notification");
  var showMessageButton = document.getElementById("show-message-button");

  function __constructor() {}

  function _show() {
    target.classList.remove("hidden");
    target.classList.remove("removing");
    target.classList.add("showing");
  }

  function _dismiss(e) {
    target.classList.remove("showing");
    target.classList.add("removing");
  }

  function _append() {

    var notification = "Det här är ett meddelande";
    var html = "";

    html += "<span class='icon'>!</span>";
    html += "<p class='icon'>" + notification + "</span>";
    html += "<p id='close-button'>x</p>";

    target.innerHTML = html;
    _show();

    var closeButton = document.getElementById("close-button");
    closeButton.addEventListener('click', _dismiss)
  }

  function _get(url) {
    var showMessageButton = document.getElementById("show-message-button");
    showMessageButton.addEventListener("click", _append);
  }

  __constructor();

  return {
    get: function(url) {
      _get(url);
    }
  };
}();

window.onload = Notification.get("https//:localhost:3300");
