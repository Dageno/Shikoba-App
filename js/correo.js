$(document).ready(function(){
    $("#correo").on("submit", function(e){
        console.log("hola");
        e.preventDefault();
        $.ajax({
            type : 'post',	 
            url : 'http://shikoba.iesgrancapitan.org/shikobapp/enviarCorreoContrasenia.php',  
            data: { correo: $('#inputEmail').val()},  
            success:function(data) {  
                if(data != false){
                  
                    window.open('index.html', '_self');
                }
              
                console.log(data);
            }
        })
    })
})