//Comando para establecer la conexión
var socket = io();

var serachParams = new URLSearchParams(window.location.search);

if(!serachParams.has('escritorio')){

    window.location = 'index.html';
    throw new Error('El escritorio es necesario');

}
var label = $('small');
var escritorio = serachParams.get('escritorio');
$('h1').text('Escritorio ' + escritorio)




$('button').on('click', function(){
    socket.emit('atenderTicket', { escritorio: escritorio}, function(resp){
        
        if(resp === 'No hay tickets'){
            label.text(resp)
            alert(resp)
            return;
        }

        label.text('Ticket ' + resp.numero)
    })
})