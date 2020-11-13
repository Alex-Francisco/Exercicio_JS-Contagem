function contar() {
    var iniCont = parseInt(document.getElementById('iniCont').value)
    var fimCont = parseInt(document.getElementById('fimCont').value)
    var passoCont = parseInt(document.getElementById('passoCont').value)
    var divCont = document.getElementById('contagem')
    var divBgNum = document.createElement('div')

    while (iniCont <= fimCont) {
        divCont.appendChild(divBgNum)          
        
        iniCont += passoCont
    }  
    divBgNum.innerHTML += iniCont
}