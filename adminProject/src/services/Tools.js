function validarCPFCNPJ(strCPFCNPJ) {
    strCPFCNPJ = strCPFCNPJ.replace(/[.]|[-]|[/]/g, '');
    if (strCPFCNPJ.length === 11) {
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPFCNPJ == "00000000000") return false;

        for (var i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPFCNPJ.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPFCNPJ.substring(9, 10))) return false;

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPFCNPJ.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPFCNPJ.substring(10, 11))) return false;
        return true;
    } else if (strCPFCNPJ.length > 11) {
        strCPFCNPJ = strCPFCNPJ.replace(/[^\d]+/g, '');

        if (strCPFCNPJ == '') return false;

        if (strCPFCNPJ.length != 14)
            return false;

        // Elimina strCPFCNPJs invalidos conhecidos
        if (strCPFCNPJ == "00000000000000" ||
            strCPFCNPJ == "11111111111111" ||
            strCPFCNPJ == "22222222222222" ||
            strCPFCNPJ == "33333333333333" ||
            strCPFCNPJ == "44444444444444" ||
            strCPFCNPJ == "55555555555555" ||
            strCPFCNPJ == "66666666666666" ||
            strCPFCNPJ == "77777777777777" ||
            strCPFCNPJ == "88888888888888" ||
            strCPFCNPJ == "99999999999999")
            return false;

        // Valida DVs
        var tamanho = strCPFCNPJ.length - 2
        var numeros = strCPFCNPJ.substring(0, tamanho);
        var digitos = strCPFCNPJ.substring(tamanho);
        var soma = 0;
        var pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;

        tamanho = tamanho + 1;
        numeros = strCPFCNPJ.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;

        return true;
    }
}

function blockUI(status = true) {
    try {
        if(status === true){
            $.blockUI({
                message: "<i style='font-size: 50px; color: #004ea0;' class='fa fa-cog fa-spin fa-3x fa-fw'></i>",
                css:{
                    border: 'none', 
                    backgroundColor: '#ffffff00', 
                    left:'40%'
                },
                overlayCSS: {
                    backgroundColor: '#ffffff'
                },
            });
        }else{
            $.unblockUI(); 
        }
        return true;
    } catch (error) {
        return true
    }
}

export {
    validarCPFCNPJ,
    blockUI
};