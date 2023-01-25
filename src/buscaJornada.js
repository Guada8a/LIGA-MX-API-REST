$(document).ready(function () {
    for (let i = 1; i <= 17; i++){
        $("#nJornada").append(`<option value="${i}">Jornada ${i}</option>`);
    }

    $("#btnBuscar").click(function () {
        let jornada = $('select[name="jornadas"] option:selected').val();
        $('div.active').removeClass('active');
        $(`#j${jornada}`).removeClass('carousel-item');
        $(`#j${jornada}`).addClass('carousel-item active');

    });
});