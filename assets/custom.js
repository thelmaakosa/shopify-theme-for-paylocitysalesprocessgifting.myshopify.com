let myVar = setInterval(myTimer ,100);

function myTimer() {
    console.log("1");
   
    if ($(".product-section .product-single__form .pplr-sales-rep-email").length || $(".product-section .product-single__form .pplr-sales-rep-email-address").length){
        email_validation();
        $(".product-section .product-single__form button[type='submit']").appendTo(".product-section .product-single__form")
        clearInterval(myVar);
    }
}

function email_validation(){
    $(".pplr-recipient-email input").focusin(function() {
        $(".pplr-recipient-email").removeClass("pplr_red_wrapper")
        $(".pplr-recipient-email small.email-error").remove();
        $(".product-section .product-single__form button[type='submit']").removeAttr("disabled").css("opacity", 1);
    });

    $(".pplr-recipient-email input").focusout(function() {
        if (IsEmail($(this).val()) == false ){
            $(".pplr-recipient-email").addClass("pplr_red_wrapper");
            $(".pplr-recipient-email").append("<small class='email-error' style='color:red;'>Email is not valid</small>");
            $(".product-section .product-single__form button[type='submit']").attr("disabled", "true").css({"opacity":0.5, "background":"#2e373e", "color":"#FFF"});
        }
    })
    $(".pplr-sales-rep-email input").focusin(function() {
        $(".pplr-sales-rep-email").removeClass("pplr_red_wrapper")
        $(".pplr-sales-rep-email small.email-error").remove();
        $(".product-section .product-single__form button[type='submit']").removeAttr("disabled").css("opacity", 1);
    });

    $(".pplr-sales-rep-email input").focusout(function() {
        if (IsEmail($(this).val()) == false ){
            $(".pplr-sales-rep-email").addClass("pplr_red_wrapper");
            $(".pplr-sales-rep-email").append("<small class='email-error' style='color:red;'>Email is not valid</small>");
            $(".product-section .product-single__form button[type='submit']").attr("disabled", "true").css({"opacity":0.5, "background":"#2e373e", "color":"#FFF"});
        }
    })
    $(".pplr-sales-rep-email-address input").focusin(function() {
        $(".pplr-sales-rep-email-address").removeClass("pplr_red_wrapper")
        $(".pplr-sales-rep-email-address small.email-error").remove();
        $(".product-section .product-single__form button[type='submit']").removeAttr("disabled").css("opacity", 1);
    });

    $(".pplr-sales-rep-email-address input").focusout(function() {
        if (IsEmail($(this).val()) == false ){
            $(".pplr-sales-rep-email-address").addClass("pplr_red_wrapper");
            $(".pplr-sales-rep-email-address").append("<small class='email-error' style='color:red;'>Email is not valid</small>");
            $(".product-section .product-single__form button[type='submit']").attr("disabled", "true").css({"opacity":0.5, "background":"#2e373e", "color":"#FFF"});
        }
    })
}

function IsEmail(email) {
    var regex =/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    }
    else {
        return true;
    }
}