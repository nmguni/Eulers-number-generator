$("input").on("keypress", function(event) {
  if (event.which === 13) {
    if ($(this).val() <= 20) {
      let decimalPLace = $(this).val();
      let answer = parseFloat(Math.E).toFixed(decimalPLace);
      $("#answer").html(answer);
    } else {
      $("#answer").html($(this).val() + " is too big");
    }
  }
});
