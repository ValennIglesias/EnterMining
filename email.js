let btn = document.querySelector('.inputBoton');
document.getElementById('contact-form').addEventListener('submit', function (event) {
    emailjs.init('-e47niS5ubsKQvh4x');
    event.preventDefault();
    btn.value = 'Enviando..'
    emailjs.sendForm('service_elyaujh', 'template_952mjab', this)
        .then(function () {
            Toastify({
                text: "Email enviado, pronto atenderemos su consulta",
                close: true,
                duration: 3000,
                gravity: "top",
                className: "styleToastify",
                style: {
                    background: "black",
                }
            }).showToast()
            btn.value = 'SUBMIT';
        }, function (error) {
            console.log('Mail status: failed', error);
        });
});