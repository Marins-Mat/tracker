class Registro {
    constructor(data, local, descricao) {
        this.data = data;
        this.local = local;
        this.descricao = descricao;
    }
}
class Rastreio {
    constructor(codigo, registros) {
        this.codigo = codigo;
        this.registros = registros; //Array de registros
    }


}

class BaseDeDados {
    constructor() {
        this.rastreios = [];
    }

    inserirRastreios(rastreio) {
        this.rastreios.push(rastreio);
    }

    procurarCodigo(codigo) {

        let rast = null;
        for (let rastreio of this.rastreios) {
            if (rastreio.codigo == codigo) {
                rast = rastreio;
                break;
            }
        }
        return rast;
    }
}

function popularDados() {
    let bd = new BaseDeDados;

    let registros = new Array();

    registros.push(new Registro('20/02/2024', 'CAMPINAS', 'DOCUMENTAÇÃO PRONTA'));
    registros.push(new Registro('21/02/2024', 'CAMPINAS', 'PACOTE ENVIADO'));
    registros.push(new Registro('21/02/2024', 'CAMPINAS', 'CHEGOU À UNIDADE'));
    registros.push(new Registro('21/02/2024', 'CAMPINAS', 'SAIU DA UNIDADE'));
    registros.push(new Registro('23/02/2024', 'FEIRA DE SANTANA', 'CHEGOU À UNIDADE'));
    registros.push(new Registro('24/02/2024', 'FEIRA DE SANTANA', 'SAIU DA UNIDADE'));
    registros.push(new Registro('25/02/2024', 'SALVADOR', 'CHEGOU AO DESTINO FINAL'));

    let rastreio = new Rastreio("ABC123", registros);
    bd.inserirRastreios(rastreio);

    registros = new Array();

    registros.push(new Registro('10/02/2025', 'MIAMI', 'DADO RECEBIDO'));
    registros.push(new Registro('10/02/2025', 'MIAMI', 'DOCUMENTACAO COMPLETA'));
    registros.push(new Registro('12/02/2025', 'MIAMI', 'Receptáculo recebido em instalações de transporte dos EUA'));
    registros.push(new Registro('12/02/2025', 'MIAMI', 'RECEBIDO'));
    registros.push(new Registro('12/02/2025', 'MIAMI', 'X-RAY SCAN'));
    registros.push(new Registro('12/02/2025', 'MIAMI', 'COLOCADO EM CONTAINER'));
    registros.push(new Registro('12/02/2025', 'MIAMI', 'PROCESADO'));
    registros.push(new Registro('12/02/2025', 'MIAMI', 'ENVIADO'));
    registros.push(new Registro('13/02/2025', 'MIAMI', 'O voo partiu'));
    registros.push(new Registro('14/02/2025', 'SÃO PAULO', 'CHEGOU NO PAIS'));
    registros.push(new Registro('14/02/2025', 'SÃO PAULO', 'Entrada aduaneira'));
    registros.push(new Registro('14/02/2025', 'SÃO PAULO', 'ENVIO LIBERADO'));
    registros.push(new Registro('14/02/2025', 'SÃO BERNARDO DO CAMPO', 'ENTREGUE A TRANSPORTADORA LOCAL'));
    registros.push(new Registro('17/02/2025', 'SÃO BERNARDO DO CAMPO', 'EM TRÂNSITO'));
    registros.push(new Registro('21/02/2025', 'SALVADOR', 'OBJETO Recebido'));
    registros.push(new Registro('21/02/2025', 'SALVADOR', 'Preparada para a transferencia'));
    registros.push(new Registro('21/02/2025', 'SALVADOR', 'OBJETO Recebido'));

    rastreio = new Rastreio("ABC321", registros);
    bd.inserirRastreios(rastreio);
    return bd;
}

function escreveRegistros(registros) {
    limpaRegistros();

    for (let i = registros.length - 1; i >= 0; i--) {

        console.log(registros.length);
        let novaLinha = document.createElement("tr");

        let dataRegistro = document.createElement("td");
        dataRegistro.innerText = registros[i].data;
        novaLinha.appendChild(dataRegistro);

        let localRegistro = document.createElement("td");
        localRegistro.innerText = registros[i].local;
        novaLinha.appendChild(localRegistro);

        let descricaoRegistro = document.createElement("td");
        descricaoRegistro.innerHTML = registros[i].descricao;
        novaLinha.appendChild(descricaoRegistro);

        if (i % 2 === 0) {
            novaLinha.classList.add("linha-clara");
        } else {
            novaLinha.classList.add("linha-escura");
        }
        novaLinha.classList.add("linha-adicionada");
        document.getElementById("tabela").appendChild(novaLinha);
    }

}


function limpaRegistros() {
    
    document.getElementById("tabela").innerHTML = " <tr> <th>DATA</th> <th>LOCAL</th> <th>DESCRIÇÃO</th> </tr>";

}

function procurarNaBase(codigo) {
    let rastreio = bd.procurarCodigo(codigo);

    if (rastreio != null) {
        escreveRegistros(rastreio.registros);
        document.getElementById("mensagemErro").style.visibility = "hidden";
    } else {
        limpaRegistros();
        document.getElementById("mensagemErro").style.visibility = "visible";
    }
}
function procurarClick() {

    codigo = document.getElementById("codigo").value;
    document.getElementById("codigo").value = null;
    codigo = codigo.trim();
    codigo = codigo.toUpperCase();
    procurarNaBase(codigo);
}



// INICIALIZANDO ===================================================

bd = popularDados();