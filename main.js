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
                foto.src = 'bebemenino.png'
            }
            else if (idade < 17){
                foto.src = 'meninojovem.png'
            }
            else if (idade < 30){
                foto.src = 'jovemenino.png'
            }
            else if(idade < 60){
                foto.src = 'homem.png'
            }
            else {
                foto.src = 'idoso.png'
            }
        }
        else if(fsex[1].checked){
            gen = 'mulher'
            if (idade >= 0 && idade < 10){
                foto.src = 'bebemenina.png'
            }
            else if (idade < 17){
                foto.src = 'meninajovem.png'
            }
            else if (idade < 30){
                foto.src = 'jovemenina.png'
            }
            else if(idade < 60){
                foto.src = 'mulher.png'
            }
            else {
                foto.src = 'idosa.png'
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
    }
}