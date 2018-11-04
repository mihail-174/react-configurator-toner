(function ($) {
  $(document).ready(function(){

    $(document).on("submit", ".wf__form", function(e) {
      e.preventDefault();
      var $wf = $(this).parents('.wf');
      var $form = $(this);
      var actionUrl = $form.attr("action");
      $form.find(".error").removeClass("error");
      $.post(
        actionUrl,
        $form.serialize(),
        function(data) {
          var res = JSON.parse(data);
          if (res.STATUS === 1) {
            if (res.FORM_TITLE) {
              $form.find(".heading").html(res.FORM_TITLE);
            }
            $form.find("input, select, textarea").attr("disabled", "disabled").hide();
            if (res.SUCCESSFULLY) {
              $('#app-calc-toner .md__ttl').remove();
              $wf.find(".wf__message").html(res.SUCCESSFULLY).addClass('wf__message_success').removeClass('wf__message_errors');
              $form.remove();
            }
            if (res.RELOAD == 1) {
              location.reload();
            }
          } else {
            if (res.MSG) {
              $wf.find(".wf__message").html(res.MSG).addClass('wf__message_errors').removeClass('wf__message_success');
            }
            for(var i in res.ERROR_FIELDS) {
              var fName = res.ERROR_FIELDS[i];
              var $input = $form.find("[name='"+ fName + "']").addClass("error");
            }
          }
        }
      );
      return false;
    });

  });
})(jQuery);
