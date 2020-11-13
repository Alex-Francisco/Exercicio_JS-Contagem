function contar() {
    var iniCont = parseInt(document.getElementById('iniCont').value)
    var fimCont = parseInt(document.getElementById('fimCont').value)
    var passoCont = parseInt(document.getElementById('passoCont').value)
    var divCont = document.getElementById('contagem')
    var divBgNum = document.createElement('div')

    if(iniCont.length == 0 || fimCont.length == 0 || passoCont.length == 0) {
        window.alert('ERRO!')
    }
     
    while (iniCont <= fimCont) {
        divBgNum.innerHTML = iniCont
        divCont.appendChild(divBgNum.cloneNode(true))
        divBgNum.innerHTML = '&#8618;'
        divCont.appendChild(divBgNum.cloneNode(true))   
        iniCont += passoCont
    }
    divCont.appendChild(divBgNum.cloneNode(true))  
    divBgNum.innerHTML = '>'
}