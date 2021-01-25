function jumbotron(){
    $(".jumboimage").css({ height: $(window).height() + "px" });

    $(window).on("resize", function() {
        $(".jumboimage").css({ height: $(window).height() + "px" });
});
}