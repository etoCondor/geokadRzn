jQuery(document).ready(function ($) {
  $(".ajax-contact-form").submit(function () {
    var str = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "https://geokadrzn.ru/contact.php",
      data: str,
      success: function (msg) {
        if (msg == "OK") {
          result =
            "<span>Ваш заказ принят.<br><br>Наш менеджер свяжется с Вами в ближайшее время!</span>";
          $(".fields").hide();
        } else {
          result = msg;
        }
        $(".note").html(result);
      },
    });
    return false;
  });
});
