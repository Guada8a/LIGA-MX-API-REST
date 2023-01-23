fetch('https://63ccbcb2ea85515415242892.mockapi.io/jornada/')
    .then(response => response.json())
    .then(data => mostrarJornada(data))
    .catch(error => console.log(error))


const mostrarJornada = (data) => {
    
    for (let i = 1; i <= 17; i++){
        creaTablas(i);
        mostrarPartidos(data[i-1].id,data[i-1]);
    }
}

const creaTablas = (id) => {
    document.getElementById("carouselBody").innerHTML += `
    <div class="carousel-item ${id == 1 ? 'active' : ''}">
        <table id="jornada${id}" class="table-primary" width="80%">
            <thead class="table-dark">
                <tr>
                    <td colspan="9"><h5 align="right">JORNADA ${id}</h5></td>
                </tr>
                <tr>
                    <td colspan="6" width="44%">PARTIDO</td>
                    <td width="25%">ESTADIO</td>
                    <td width="15%">FECHA</td>
                    <td width="16%">ESTADO</td>
                </tr>
            </thead>
            <tbody id="jornada${id}b"></tbody>
        </table>
    </div>
    `
}

const mostrarPartidos = (id,jornada) => {
    let partidos = jornada.partidos;
    console.log(partidos);
    partidos.forEach(partido => {
        const jornadaBody = document.getElementById(`jornada${id}b`);
        jornadaBody.innerHTML += `
        <tr>
            <td width="5%"><img src="${partido.LocalEscudo}"></td>
            <td width="12%" class="local">${partido.LocalEquipo}</td>
            ${partido.estado == 'POS' || partido.estado == 'NEW' ?
                `<td width="5%" class="gol">-</td>
                <td width="5%" class="gol">-</td>` :
            partido.LocalGoles == partido.VisitanteGoles ?
                `<td width="5%" class="gol">${partido.LocalGoles}</td>
                <td width="5%" class="gol">${partido.VisitanteGoles}</td>` :
                partido.LocalGoles > partido.VisitanteGoles ?
                    `<td width="5%" class="gol-win">${partido.LocalGoles}</td>
                    <td width="5%" class="gol">${partido.VisitanteGoles}</td>` :
                        `<td width="5%" class="gol">${partido.LocalGoles}</td>
                        <td width="5%" class="gol-win">${partido.VisitanteGoles}</td>`
            }
            <td width="12%" class="visita">${partido.VisitanteEquipo}</td>
            <td width="5%"><img src="${partido.VisitanteEscudo}"></td>
            <td width="25%">${partido.Estadio}</td>
            <td width="15%">${formatearFecha(partido.Fecha)}</td>
            <td width="16%">${partido.estado == 'FIN' ?
            `<span class="badge text-bg-danger">${partido.estado}</span>` : partido.estado == 'POS' ?
                `<span class="badge text-bg-warning">${partido.estado}</span>` : partido.estado == 'VIVO' ? `<span class="badge text-bg-info">${partido.estado}</span>` : `<span class="badge text-bg-success">${partido.estado}</span>`}</td>
        </tr>
        `
    })
}

const formatearFecha = (fecha) => {
    let fechaFormateada = new Date(fecha);
    let dia = fechaFormateada.getDate();
    let mes = fechaFormateada.getMonth();
    let meses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    let hora = fechaFormateada.getHours();
    let minutos = fechaFormateada.getMinutes();
    return `${dia} ${meses[mes]} ${hora}:${minutos<=9?`0${minutos}`:minutos }`
}
