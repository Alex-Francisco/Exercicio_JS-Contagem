function contar() {
    var iniCont = parseInt(document.getElementById('iniCont').value)
    var fimCont = parseInt(document.getElementById('fimCont').value)
    var passoCont = parseInt(document.getElementById('passoCont').value)
    var divCont = document.getElementById('contagem')
    var divBgNum = document.createElement('div')
    divBgNum.classList.add('teste')
    var btnContar = document.getElementById('btnContar')

    console.log(iniCont.length)

    if (document.getElementById('iniCont').value == "" || document.getElementById('fimCont').value == "" || passoCont == 0) {
        window.alert('ERRO!')
    } else {
        if (document.getElementById('passoCont').value == "") {
            passoCont = 1
        }
        if ($('.teste')[0]) {
            document.location.reload()
            document.getElementsByClassName('teste').remove()
            document.location.reload()
        } else {
            if (iniCont < fimCont) {
                while (iniCont <= fimCont) {
                    divBgNum.innerHTML = iniCont
                    divCont.appendChild(divBgNum.cloneNode(true))
                    divBgNum.innerHTML = '>'
                    divCont.appendChild(divBgNum.cloneNode(true))   
                    iniCont += passoCont
                }
            } else {
                while (iniCont >= fimCont) {
                    divBgNum.innerHTML = iniCont
                    divCont.appendChild(divBgNum.cloneNode(true))
                    divBgNum.innerHTML = '>'
                    divCont.appendChild(divBgNum.cloneNode(true))   
                    iniCont -= passoCont
                }
            } 
            divBgNum.innerHTML = '&#127937'
            divCont.appendChild(divBgNum.cloneNode(true))
            btnContar.innerText = 'Limpar para inserir novo  valores'
        }
    }
}