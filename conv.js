function cod() {
    var baseSelecionada = document.querySelector("#cript").selectedIndex
    if (baseSelecionada == 2) {
        var mensagem = document.getElementById("msg").value
        if (document.querySelector("#codific").checked) {
            document.getElementById("resultado").innerHTML = btoa(mensagem);
        }
        else {
            document.getElementById("resultado").innerHTML = atob(mensagem);
        }
    }
    else {
        var mensagem = document.getElementById("msg").value
        var resultado = document.getElementById("resultado")
        var chave = parseInt(document.getElementById("numero").value)

        if (document.querySelector("#codific").checked) {
            document.getElementById("resultado").innerHTML = decod(mensagem, chave);
        }
        else {
            document.getElementById("resultado").innerHTML = decodd(mensagem, chave);
        }
    }
}
function decod(string, chave) {
    var result = []
    var lista = string.split("")
    for (i = 0; i < lista.length; i++) {
        var codigo = lista[i].charCodeAt()
        var resultado = ((codigo - 97 + chave) % 26) + 97
        result.push(String.fromCharCode(resultado))
    }
    return result.join("")
}
function decodd(string, chave) {
    var result = []
    var lista = string.split("")
    for (i = 0; i < lista.length; i++) {
        var codigo = lista[i].charCodeAt()
        if ((codigo - 97 - chave) < 0) var resultado = ((codigo - 97 - chave + 26) % 26) + 97
        else var resultado = ((codigo - 97 - chave) % 26) + 97
        result.push(String.fromCharCode(resultado))
    }
    return result.join("")
}