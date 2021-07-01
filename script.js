function carregar () {
    
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12){
        
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#d3c29a'
    
    } else if (hora >= 12 && hora < 18) {
        
        img.src = 'img/fototarde.png'
        document.body.style.background = '#a14611'
    
    } else {
        
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#011319'
    }

    return 0
}
