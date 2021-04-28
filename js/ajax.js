function success(){
    const form = document.querySelector('.form');
    form.innerHTML = '<h2 class="form__action">Спасибо, Ваша заявка в работе.</h2><br><span style="text-align: center; margin: 0 auto;" class="video-block__description video-block__description--modal">Ожидайте звонка менеджера.</span>'
}

function fail(){
    form.innerHTML = '<h2 class="form__action">Что-то пошло не так.</h2><br><span style="text-align: center;" class="video-block__description video-block__description--modal">Пиши в телеграм: @lovevscash_admin</span>'
}


$(function () {
    $("form").submit(function (e) {
      var $form = $(this);
      $.ajax({
        type: $form.attr("method"),
        url: $form.attr("action"),
        data: $form.serialize(),
      })
        .done(function() {
          success();
        })
        .fail(function(){
          fail();
        });
      e.preventDefault();
    });
  });