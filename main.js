$(window).on("load", function(){
    $(".cssload-container").delay(1000).fadeOut(500);
});

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("input#txtano")
    var res = document.getElementById("res")
    var foto = document.getElementById("img")

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Coloca o ano (certo) nessa porra arrombado 😡')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        if(fsex[0].checked){
            gen = 'homem'
            if (idade >= 0 && idade < 10){
                foto.src = './imagens/bebemenino.png'
            }
            else if (idade < 17){
                foto.src = './imagens/meninojovem.png'
            }
            else if (idade < 30){
                foto.src = './imagens/jovemenino.png'
            }
            else if(idade < 60){
                foto.src = './imagens/homem.png'
            }
            else if (idade < 90) {
                foto.src = './imagens/idoso.png'
            }
            else if (idade < 200){
                foto.src = './imagens/dompedro.png'
            }
            else if (idade < 300){
                foto.src = './imagens/isaac.png'
            }
            else {
                foto.src = './imagens/mamaca.png'
            } 
        }
        else if(fsex[1].checked){
            gen = 'mulher'
            if (idade >= 0 && idade < 10){
                foto.src = './imagens/bebemenina.png'
            }
            else if (idade < 17){
                foto.src = './imagens/meninajovem.png'
            }
            else if (idade < 30){
                foto.src = './imagens/jovemenina.png'
            }
            else if(idade < 60){
                foto.src = './imagens/mulher.png'
            }
            else if (idade < 90) {
                foto.src = './imagens/idosa.png'
            }
            else if (idade < 200){
                foto.src = './imagens/isabel.png'
            }
            else if (idade < 300){
                foto.src = './imagens/elizabeth.png'
            }
            else{
                foto.src = 'mamaca.png'
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
    }
}