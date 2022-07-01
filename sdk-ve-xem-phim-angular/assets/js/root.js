
$(document).ready(function () {
    $(".input-has-clear").on("input", function () {
        let input = $(this),
            inputVal = input.val(),
            inputClear = input.parents(".form-input-icon-wrapper").find(".icon-clear");
        inputVal ? inputClear.removeClass("dnone") : inputClear.addClass("dnone");
    });
    $(".icon-clear").on("click", function () {
        $(this).parents(".form-input-icon-wrapper").find(".input-has-clear").val("").trigger("input");
        $(this).addClass("dnone");
    })
})