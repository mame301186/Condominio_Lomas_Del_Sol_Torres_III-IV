(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_JvmTiBznC7irFw1OoF95Z');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_gnxvk99', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });



    var botonFormulario = document.querySelector('#boton_formulario');

    function alertButton() {
        Swal.fire({
            icon: 'success',
            iconColor: '#06DD09',
            title: 'Su mensaje fue enviado',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#0059E1'

        });
    }

    botonFormulario.addEventListener('click', alertButton, false);

}







//
//window.onload = function() {
//    document.getElementById('contact-form').addEventListener('submit', function(event) {
//        event.preventDefault();
//        // generate a five digit number for the contact_number variable
//        this.contact_number.value = Math.random() * 100000 | 0;
//        // these IDs from the previous steps
//        emailjs.sendForm('service_gnxvk99', 'contact_form', this)
//            .then(function() {
//                console.log('SUCCESS!');
//            }, function(error) {
//                console.log('FAILED...', error);
//            });
//    });
//}