$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(XX) XXXXX-XXXX'
    });

    $('#documento').mask('000.000.000-00', {
        placeholder: 'XXX.XXX.XXX-XX'
    });

    $('#codigoPostal').mask('00.000-000', {
        placeholder: 'XX.XXX-XXX'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            documento: {
                required: true
            },
            endereco: {
                required: true
            },
            codigoPostal: {
                required: true
            }
        },
        messages: {
            nome: 'Por Favor, Insira o Seu Nome',
            email: 'Por Favor, Insira o Seu E-mail',
            telefone: 'Por Favor, Insira o Seu Telefone',
            documento: 'Por Favor, Insira o Seu CPF',
            endereco: 'Por Favor, Insira o Seu Endereço',
            codigoPostal: 'Por Favor, Insira o Seu CEP'
        },

        errorPlacement: function(error, element) {
            error.addClass('error-message');
            error.insertAfter(element);
        }
    })
});
