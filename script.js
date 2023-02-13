$(document).ready(function () {

    $('#btnSend').click(function () {

        var erros = '';

        if ($('#names').val() == '') {
            erros += '<p>Escreva o seu nome</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else {
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        if ($('#email').val() == '') {
            erros += '<p>Informe o seu email</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else {
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        if ($('#phone').val() == '') {
            erros += '<p>Informe o seu telefone fixo ou mobile</p>';
            $('#phone').css("border-bottom-color", "#F14B4B")
        } else {
            $('#phone').css("border-bottom-color", "#d1d1d1")
        }

        if ($('#mensagem').val() == '') {
            erros += '<p>Escreva uma mensagem</p>';
            $('#mensagem').css("border-bottom-color", "#F14B4B")
        } else {
            $('#mensagem').css("border-bottom-color", "#d1d1d1")
        }

        if (erros == '' == false) {
            var mensagemModal = '<div class="modal_wrap">' +
                '<div class="mensagem_modal">' +
                '<h3>Erros encontrados</h3>' +
                erros +
                '<span id="btnClose">Encerrar</span>' +
                '</div>' +
                '</div>'

            $('body').append(mensagemModal);
        } else {
            $(document).ready(function () {
                $('#btnSend').click(function () {
                    $('.modal-wrapper').toggleClass('open');
                    $('.page-wrapper').toggleClass('blur');
                    return false;
                });
            });
        }

        $('#btnClose').click(function () {
            $('.modal_wrap').remove();
        });

        $('.close').click(function () {
            $('.modal-wrapper').remove();

        });

        $(document).ready(function () {

            setTimeout(function () {
                $('#ctn-preloader').addClass('loaded');
                // Una vez haya terminado el preloader aparezca el scroll
                $('body').removeClass('no-scroll-y');

                if ($('#ctn-preloader').hasClass('loaded')) {
                    // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
                    $('#preloader').delay(1000).queue(function () {
                        $(this).remove();
                    });
                }
            }, 3000);

        });

    });

});
