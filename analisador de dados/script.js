    var num = document.getElementById('fnum')
    var lista = document.getElementById('flista')
    var res = document.getElementById ('res')   
    var valores = []
   
    function isNumero (n){
        if(Number(n) >=1 && Number(n) <= 100){
            return true
        } else{ 
            return false
        }
    }

    function inLista (n, l){
        if (l.indexOf(Number(n)) != -1){
            return true
        }else {
            return false
        }
    }
 function analise(){
        if(isNumero(num.value) && !inLista(num.value, valores)) {
            valores.push(Number(num.value))
            var item = document.createElement('option')
            item.text = `valor de ${num.value} adicionado ` 
            lista.appendChild(item)
            res.innerHTML=''
        }else{
            window.alert('Valor invalido ou já encontrado na lista')
     } 
 

 num.value = ''
 num.focus()
   
}
     function finalizar(){
        if (valores.length == 0 ){
            window.alert('adicione valores antes de finalizar')
        }else{
            var tot = valores.length
            var maior = valores [0]
            var menor = valores [0]
            var soma = 0
            var media = 0
            for(var pos in valores){
                soma += valores[pos]
                if (valores[pos] > maior)
                    maior = valores[pos]
                if(valores[pos] < menor)
                    menor = valores[pos]
            }
            media = soma / tot
            res.innerHTML = ''
            res.innerHTML += `<p> ao total temos ${tot} valores adicionados </p>`
            res.innerHTML += `<p> o maior valor digitado foi ${maior} </p>`
            res.innerHTML += `<p> o menor valor digitado foi ${menor} </P>`
            res.innerHTML += `<p> a soma de todos os numeros é ${soma}</p>`
            res.innerHTML += `<p> a media entre os valores é ${media}</p>`
            
            
            
            

        }
    }
