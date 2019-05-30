$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["name", "address", "phone"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).append(userInput).val();
      $(userInput).click();
  });

     event.preventDefault();
  });
});
