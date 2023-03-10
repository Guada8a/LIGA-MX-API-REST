fetch('https://63ccbcb2ea85515415242892.mockapi.io/jornada/')
    .then(response => response.json())
    .then(data => mostrarJornada(data))
    .catch(error => console.log(error))

const mostrarJornada = (data) => {
    data.forEach(jornada => {
        creaTablas(jornada.id);
        mostrarPartidos(jornada.id, jornada);
    });
    
}

const creaTablas = (id) => {
    document.getElementById("carouselBody").innerHTML += `
    <div id="j${id}" class="carousel-item ${id == 1 ? 'active' : ''}">
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
            <td width="5%"><img src="${logoEquipo(partido.LocalEquipo)}"></td>
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
            <td width="5%"><img src="${logoEquipo(partido.VisitanteEquipo)}"></td>
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

const logoEquipo = (equipo) => {
    switch (equipo) {
        case 'Am??rica':
            return 'https://cess-images.mediotiempo.com/nzXDJshhEXUE8aCwo25lRkH4q0Y=/0x30/images/team_images/t1292.png';
            break;
        case 'Atlas':
            return 'https://cess-images.mediotiempo.com/5-kDy4axug7WyV6czMethUOuqIU=/0x30/images/team_images/t1284.png';
            break;
        case 'Cruz Azul':
            return 'https://cess-images.mediotiempo.com/OG6GKGvGvqEZaiY35QgorMrDNDw=/0x30/images/team_images/t853.png';
            break;
        case 'Guadalajara':
            return 'https://cess-images.mediotiempo.com/Hy0I88Gk0joqIxoQRpAcOsjur-w=/0x30/images/team_images/t1283.png';
            break;
        case 'FC Ju??rez':
            return 'https://cess-images.mediotiempo.com/AuUwKdLUJpIL7pz_mJ5AJh8_row=/0x30/images/team_images/t10991.png';
        case 'Le??n':
            return 'https://cess-images.mediotiempo.com/eDV_jsvcfm7FLvDbXTTJEonCUoU=/0x30/images/team_images/t1293.png';
            break;
        case 'Mazatl??n':
            return 'https://cess-images.mediotiempo.com/mBa54LYSYb_j2l4TBYAx4T1E8yk=/0x30/images/team_images/t16906.png';
            break;
        case 'Monterrey':
            return 'https://cess-images.mediotiempo.com/KlBTKHkZLZwMQJZnm2dPmZh5SsQ=/0x30/images/team_images/t741.png';
            break;
        case 'Necaxa':
            return 'https://cess-images.mediotiempo.com/lrQOA0IYS629r67YBztmS18pHDs=/0x30/images/team_images/t1174.png';
            break;
        case 'Pachuca':
            return 'https://cess-images.mediotiempo.com/qGOznrq6nB9GZ6ClDpraZFfBPCk=/0x30/images/team_images/t1295.png';
            break;
        case 'Puebla':
            return 'https://cess-images.mediotiempo.com/2kysZ2uk7bLfS37HLYsUUx1IOKk=/0x30/images/team_images/t1296.png';
            break;
        case 'Pumas':
            return 'https://cess-images.mediotiempo.com/i8HKjBUMNPndvrOw5jdc8OOsSCI=/0x30/images/team_images/t1297.png';
            break;
        case 'Quer??taro':
            return 'https://cess-images.mediotiempo.com/WlEglK_l3DfR6ZhTIpmPd9f_2BE=/0x30/images/team_images/t4047.png';
            break;
        case 'Santos Laguna':
            return 'https://cess-images.mediotiempo.com/JIDSJXbTv2Yv-AuvGub5w3W2Bz4=/0x30/images/team_images/t1287.png';
            break;
        case 'Atl??tico San Luis':
            return 'https://cess-images.mediotiempo.com/bZ7NobsET5jC3jsTw7merYcC7VA=/0x30/images/team_images/t9491.png';
            break;
        case 'Tigres UANL':
            return 'https://cess-images.mediotiempo.com/dE0t_qwHH-at_hE-05sukjQdr2U=/0x30/images/team_images/t1294.png';
            break;
        case 'Toluca':
            return 'https://cess-images.mediotiempo.com/LwIKF1LDOJheJyIdnrCkZdqjMcE=/0x30/images/team_images/t1286.png';
        case 'Xolos':
            return 'https://cess-images.mediotiempo.com/qMgjAuvUJC3--VWMbt8VgVe-nkc=/0x30/images/team_images/t4690.png';
            break;

    }
}

fetch('https://63ccbcb2ea85515415242892.mockapi.io/posiciones')
    .then(response => response.json())
    .then(data => mostrarPosiciones(data))
    .catch(error => console.log(error))

const mostrarPosiciones = (data) => {
    console.log(data);
    data.forEach(posicion => {
        creaTablaPosicion(posicion.id);
        ordenaEquipos(posicion.id,posicion.posiciones[0]);
    });
}

const creaTablaPosicion = (id) => {
    let tabla = "";
    if (id == "1")
        tabla = document.getElementById('apertura');
    else
        tabla = document.getElementById('clausura');
    tabla.innerHTML = `
        <table class="table table-striped table-dark posiciones" id="torneo${id}" style="width:70%">
            <thead>
                <tr>
                    <th scope="col" width="10%">Posici??n</th>
                    <th scope="col">Equipo</th>
                    <th scope="col">PJ</th>
                    <th scope="col">PG</th>
                    <th scope="col">PE</th>
                    <th scope="col">PP</th>
                    <th scope="col">GF</th>
                    <th scope="col">GC</th>
                    <th scope="col">DG</th>
                    <th scope="col">PTS</th>
                </tr>
            </thead>
            <tbody id="tablaBodyTorneo${id}">
            </tbody>
        </table>
        `;
}

const ordenaEquipos = (id, equipos) => {
    let tablaCuerpo = id == "1" ? document.getElementById('tablaBodyTorneo1') : document.getElementById('tablaBodyTorneo2');
    console.table(equipos);
    Object.entries(equipos).forEach(([key, value]) => {
        let equipo = document.createElement('tr');
        if (key <= 8) equipo.classList.add('clasificados');
        if (key >8 && key <= 12) equipo.classList.add('repesca');

        equipo.innerHTML = `
            <td>${key}</td>
            <td style="text-align:left" width="20%"><img src="${logoEquipo(value[0])}" alt="Logo del equipo" width="30px" height="30px"> ${value[0]}</td>
            <td>${value[1]}</td>
            <td>${value[2]}</td>
            <td>${value[3]}</td>
            <td>${value[4]}</td>
            <td>${value[5]}</td>
            <td>${value[6]}</td>
            <td>${value[7]}</td>
            <td>${value[8]}</td>
            `;
        tablaCuerpo.appendChild(equipo);
    }
    );
    document.getElementById('apertura').style.display = 'none';
}