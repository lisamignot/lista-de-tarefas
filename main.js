$(document).ready(function() {

    
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#btn-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()

        const novoItem = $('#novo-item').val() //recebe valor input
        
        $('ul').append('<li style="list-style: circle">' + novoItem + '</li>') //adiciona item à lista
        $('#novo-item').val("") //limpa formulário
    })

    $('ul').on('click', 'li', function(){
        $(this).toggleClass('checked')
    }) //um clique risca item
    
    $('ul').on('dblclick', 'li', function(){
        $(this).toggleClass('strike').fadeOut('slow')
    }) //duplo clique exclui item
    
})
