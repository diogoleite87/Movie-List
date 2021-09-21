function adicionarFilme() {
    var campoFilme = document.getElementById("input-filme").value;

    if (campoFilme.endsWith(".jpg") || campoFilme.endsWith(".jpeg") || campoFilme.endsWith(".png")) {

        catalogo(campoFilme);
    
    } else {

        alert("Formato de arquivo não aceito, favor inserir extensões com .jpg, .JPEG ou .PNG no final.");
        console.error("Formato de arquivo não aceito, favor inserir extensões com .jpg, .JPEG ou .PNG no final.")

    }

    document.getElementById("input-filme").value = "";
}

function catalogo(filmes) {

    var adicionarFilme = "<img src=" + filmes + ">";

    var listaFilmes = document.getElementById("listaFilmes");

    listaFilmes.innerHTML = listaFilmes.innerHTML + adicionarFilme;

}
