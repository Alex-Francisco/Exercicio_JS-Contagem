function contar() {
    var iniCont = parseInt(document.getElementById('iniCont').value)
    var fimCont = parseInt(document.getElementById('fimCont').value)
    var passoCont = parseInt(document.getElementById('passoCont').value)
    var divCont = document.getElementById('contagem')
    var divBgNum = document.createElement('div')
    divBgNum.classList.add('bgNum')
    var btnContar = document.getElementById('btnContar')

    console.log(iniCont.length)

    if (document.getElementById('iniCont').value == "" || document.getElementById('fimCont').value == "" || passoCont <= 0) {
        window.alert('ERRO! \nVerifique se o campo início ou final da contagem está vazio \nOu \nVerifique se o campo passo foi preenchido com 0')
    } else {
        if (document.getElementById('passoCont').value == "") {
            passoCont = 1
        }
        if ($('.bgNum')[0]) {
            document.location.reload()
            document.getElementsByClassName('bgNum').remove()
            document.location.reload()
        } else {
            if (iniCont < fimCont) {
                while (iniCont <= fimCont) {
                    divBgNum.innerHTML = iniCont
                    divCont.appendChild(divBgNum.cloneNode(true))
                    divBgNum.innerHTML = '&#8618;'
                    divCont.appendChild(divBgNum.cloneNode(true))   
                    iniCont += passoCont
                }
            } else {
                while (iniCont >= fimCont) {
                    divBgNum.innerHTML = iniCont
                    divCont.appendChild(divBgNum.cloneNode(true))
                    divBgNum.innerHTML = '&#8618;'
                    divCont.appendChild(divBgNum.cloneNode(true))   
                    iniCont -= passoCont
                }
            } 
            divBgNum.innerHTML = '&#127937'
            divCont.appendChild(divBgNum.cloneNode(true))
            document.getElementById('iniCont').disabled = true
            document.getElementById('fimCont').disabled = true
            document.getElementById('passoCont').disabled = true
            btnContar.innerText = 'Limpar para inserir novo  valores'
        }
    }
}