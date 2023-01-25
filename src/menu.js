$(document).ready(function () {
    //Menú entre apartados
    $("#navPartidos").click(function () {
        $(this).addClass("active");
        $("#navTabla").removeClass("active");
        $("#navLiguilla").removeClass("active");
        $("#partidos").css("display", "block");
        $("#tabla").css("display", "none");
        $("#liguilla").css("display", "none");
    });
    $("#navTabla").click(function () {
        $(this).addClass("active");
        $("#navPartidos").removeClass("active");
        $("#navLiguilla").removeClass("active");
        $("#tabla").css("display", "block");
        $("#partidos").css("display", "none");
        $("#liguilla").css("display", "none");
    });
    $("#navLiguilla").click(function () {
        $(this).addClass("active");
        $("#navPartidos").removeClass("active");
        $("#navTabla").removeClass("active");
        $("#liguilla").css("display", "block");
        $("#partidos").css("display", "none");
        $("#tabla").css("display", "none");
    });
    //Menú entre torneos
    $("#navApertura").click(function () {
        $(this).addClass("active");
        $("#navClausura").removeClass("active");
        $("#apertura").css("display", "block");
        $("#clausura").css("display", "none");
    });
    $("#navClausura").click(function () {
        $(this).addClass("active");
        $("#navApertura").removeClass("active");
        $("#clausura").css("display", "block");
        $("#apertura").css("display", "none");
    });
});