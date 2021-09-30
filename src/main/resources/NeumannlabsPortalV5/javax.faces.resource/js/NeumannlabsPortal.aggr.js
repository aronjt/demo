(function (b) {
    b.fn.grtCookie = function (a) {
        var c = b.extend({
            textcolor: "#333",
            background: "#fff",
            buttonbackground: "#333",
            buttontextcolor: "#fff",
            duration: 365
        }, a);
        if (-1 < document.cookie.indexOf("acceptgrt=0")) this.remove(); else {
            this.css({color: c.textcolor, background: c.background});
            b("span.grt-cookie-button").css({background: c.buttonbackground, color: c.buttontextcolor});
            this.addClass("grt-cookie-active");
            a = new Date;
            c = c.duration;
            a.setTime(a.getTime() + 864E5 * c);
            var d = "expires=" + a.toUTCString();
            document.cookie =
                "acceptgrt=1;" + d + ";path=/";
            b(".grt-cookie-button").on("click", function () {
                b(this).parent().remove();
                document.cookie = "acceptgrt=0;" + d + ";path=/"
            })
        }
        return this
    }
})(jQuery);
$(document).ready(function () {
    addFlagIconsToChooser();
    menuHandler()
});

function menuHandler() {
    $(".ui-steps-item").click(function () {
        menuChange([{name: "tab", value: $(this).index()}]);
        return !1
    });
    $(".ui-steps-item").removeClass("ui-state-disabled")
}

function addFlagIconsToChooser() {
    try {
        var b = $("#language_input").val();
        $("#language_label").removeClass("en hu es ro pl it");
        $("#language_label").addClass(b);
        var a = 1;
        $("#language_input option").each(function () {
            var b = $(this).val();
            $("#language_items li:nth-child(" + a++ + ")").addClass(b)
        })
    } catch (c) {
    }
}

function handleChangeAccordionTab() {
    try {
        for (var b = PF("samples-accordion").getJQ().find("> .ui-accordion-header").length, a = 0; a < b; a++) PF("samples-accordion").unselect(a)
    } catch (c) {
    }
}

PrimeFaces.locales.hu = {
    closeText: "Bez\u00e1r\u00e1s",
    prevText: "El\u0151z\u0151",
    nextText: "K\u00f6vetkez\u0151",
    monthNames: "Janu\u00e1r,Febru\u00e1r,M\u00e1rcius,\u00c1prilis,M\u00e1jus,J\u00fanius,J\u00falius,Augusztus,Szeptember,Okt\u00f3ber,November,December".split(","),
    monthNamesShort: "Jan,Febr,M\u00e1rc,\u00c1pr,M\u00e1j,J\u00fan,J\u00fal,Aug,Szept,Okt,Nov,Dec".split(","),
    dayNames: "Vas\u00e1rnap,H\u00e9tf\u0151,Kedd,Szerda,Cs\u00fct\u00f6rt\u00f6k,P\u00e9ntek,Szombat".split(","),
    dayNamesShort: "Vas,H,K,Sze,Cs\u00fct,P,Szo".split(","),
    dayNamesMin: "V,H,K,Sze ,Cs,P ,Szo".split(","),
    weekHeader: "H\u00e9t",
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !0,
    yearSuffix: ".",
    timeOnlyTitle: "Csak \u00f3ra",
    timeText: "Id\u0151pont",
    hourText: "\u00d3ra",
    minuteText: "Perc",
    secondText: "M\u00e1sodperc",
    currentText: "Ma",
    ampm: !1,
    month: "H\u00f3nap",
    week: "H\u00e9t",
    day: "Nap",
    allDayText: "Eg\u00e9sz nap"
};
PrimeFaces.locales.es = {
    closeText: "Cerrar",
    prevText: "Anterior",
    nextText: "Siguiente",
    monthNames: "Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre".split(","),
    monthNamesShort: "Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic".split(","),
    dayNames: "Domingo,Lunes,Martes,Mi\u00e9rcoles,Jueves,Viernes,S\u00e1bado".split(","),
    dayNamesShort: "Dom,Lun,Mar,Mie,Jue,Vie,Sab".split(","),
    dayNamesMin: "D,L,M,X,J,V,S".split(","),
    weekHeader: "Semana",
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !1,
    yearSuffix: "",
    timeOnlyTitle: "S\u00f3lo hora",
    timeText: "Tiempo",
    hourText: "Hora",
    minuteText: "Minuto",
    secondText: "Segundo",
    currentText: "Fecha actual",
    ampm: !1,
    month: "Mes",
    week: "Semana",
    day: "D\u00eda",
    allDayText: "Todo el d\u00eda",
    messages: {
        "javax.faces.component.UIInput.REQUIRED": "{0}: Error de validaci\u00f3n: se necesita un valor.",
        "javax.faces.converter.IntegerConverter.INTEGER": "{2}: '{0}' debe ser un n\u00famero formado por uno o varios d\u00edgitos.",
        "javax.faces.converter.IntegerConverter.INTEGER_detail": "{2}: '{0}' debe ser un n\u00famero entre -2147483648 y 2147483647. Ejemplo: {1}",
        "javax.faces.converter.DoubleConverter.DOUBLE": "{2}: '{0}' debe ser un n\u00famero formado por uno o varios d\u00edgitos.",
        "javax.faces.converter.DoubleConverter.DOUBLE_detail": "{2}: '{0}' debe ser un n\u00famero entre 4.9E-324 y 1.7976931348623157E308  Ejemplo: {1}",
        "javax.faces.converter.BigDecimalConverter.DECIMAL": "{2}: '{0}' debe ser un n\u00famero decimal positivo o negativo.",
        "javax.faces.converter.BigDecimalConverter.DECIMAL_detail": "{2}: '{0}' debe ser un n\u00famero decimal positivo o negativo formado por cero o m\u00e1s d\u00edgitos, que pueden incluir a continuaci\u00f3n una coma decimal y una fracci\u00f3n.  Ejemplo: {1}",
        "javax.faces.converter.BigIntegerConverter.BIGINTEGER": "{2}: '{0}' debe ser un n\u00famero formado por uno o varios d\u00edgitos.",
        "javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail": "{2}: '{0}' debe ser un n\u00famero formado por uno o varios d\u00edgitos. Ejemplo: {1}",
        "javax.faces.converter.ByteConverter.BYTE": "{2}: '{0}' debe ser un n\u00famero entre 0 y 255.",
        "javax.faces.converter.ByteConverter.BYTE_detail": "{2}: '{0}' debe ser un n\u00famero entre 0 y 255.  Ejemplo: {1}",
        "javax.faces.converter.CharacterConverter.CHARACTER": "{1}: '{0}' debe ser un car\u00e1cter v\u00e1lido.",
        "javax.faces.converter.CharacterConverter.CHARACTER_detail": "{1}: '{0}' debe ser un car\u00e1cter ASCII v\u00e1lido.",
        "javax.faces.converter.ShortConverter.SHORT": "{2}: '{0}' debe ser un n\u00famero formado por uno o varios d\u00edgitos.",
        "javax.faces.converter.ShortConverter.SHORT_detail": "{2}: '{0}' debe ser un n\u00famero entre -32768 y 32767 Ejemplo: {1}",
        "javax.faces.converter.BooleanConverter.BOOLEAN": "{1}: '{0}' debe ser 'true' o 'false'",
        "javax.faces.converter.BooleanConverter.BOOLEAN_detail": "{1}: '{0}' debe ser 'true' o 'false'.  Cualquier valor diferente a 'true' se evaluar\u00e1 como 'false'.",
        "javax.faces.validator.LongRangeValidator.MAXIMUM": "{1}: Error de validaci\u00f3n: el valor es mayor que el m\u00e1ximo permitido de '{0}'",
        "javax.faces.validator.LongRangeValidator.MINIMUM": "{1}: Error de validaci\u00f3n: el valor es inferior que el m\u00ednimo permitido de '{0}'",
        "javax.faces.validator.LongRangeValidator.NOT_IN_RANGE": "{2}: Error de validaci\u00f3n: el atributo especificado no est\u00e1 entre los valores esperados {0} y {1}.",
        "javax.faces.validator.LongRangeValidator.TYPE={0}": "Error de validaci\u00f3n: el valor no tiene el tipo correcto.",
        "javax.faces.validator.DoubleRangeValidator.MAXIMUM": "{1}: Error de validaci\u00f3n: el valor es mayor que el m\u00e1ximo permitido de '{0}'",
        "javax.faces.validator.DoubleRangeValidator.MINIMUM": "{1}: Error de validaci\u00f3n: el valor es inferior que el m\u00ednimo permitido de '{0}'",
        "javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE": "{2}: Error de validaci\u00f3n: el atributo especificado no est\u00e1 entre los valores esperados {0} y {1}",
        "javax.faces.validator.DoubleRangeValidator.TYPE={0}": "Error de validaci\u00f3n: el valor no tiene el tipo correcto.",
        "javax.faces.converter.FloatConverter.FLOAT": "{2}: '{0}' debe ser un n\u00famero formado por uno o varios d\u00edgitos.",
        "javax.faces.converter.FloatConverter.FLOAT_detail": "{2}: '{0}' debe ser un n\u00famero entre 1.4E-45 y 3.4028235E38  Ejemplo: {1}",
        "javax.faces.converter.DateTimeConverter.DATE": "{2}: '{0}' no se ha podido reconocer como fecha.",
        "javax.faces.converter.DateTimeConverter.DATE_detail": "{2}: '{0}' no se ha podido reconocer como fecha. Ejemplo: {1}",
        "javax.faces.converter.DateTimeConverter.TIME": "{2}: '{0}' no se ha podido reconocer como hora.",
        "javax.faces.converter.DateTimeConverter.TIME_detail": "{2}: '{0}' no se ha podido reconocer como hora. Ejemplo: {1}",
        "javax.faces.converter.DateTimeConverter.DATETIME": "{2}: '{0}' no se ha podido reconocer como fecha y hora.",
        "javax.faces.converter.DateTimeConverter.DATETIME_detail": "{2}: '{0}' no se ha podido reconocer como fecha y hora. Ejemplo: {1}",
        "javax.faces.converter.DateTimeConverter.PATTERN_TYPE": "{1}: debe especificarse el atributo 'pattern' o 'type' para convertir el valor '{0}'",
        "javax.faces.converter.NumberConverter.CURRENCY": "{2}: '{0}' no se ha podido reconocer como un valor de divisa.",
        "javax.faces.converter.NumberConverter.CURRENCY_detail": "{2}: '{0}' no se ha podido reconocer como un valor de divisa. Ejemplo: {1}",
        "javax.faces.converter.NumberConverter.PERCENT": "{2}: '{0}' no se ha podido reconocer como porcentaje.",
        "javax.faces.converter.NumberConverter.PERCENT_detail": "{2}: '{0}' no se ha podido reconocer como porcentaje. Ejemplo: {1}",
        "javax.faces.converter.NumberConverter.NUMBER": "{2}: '{0}' no se ha podido reconocer como fecha.",
        "javax.faces.converter.NumberConverter.NUMBER_detail": "{2}: '{0}' no es un n\u00famero. Ejemplo: {1}",
        "javax.faces.converter.NumberConverter.PATTERN": "{2}: '{0}' no es un patr\u00f3n num\u00e9rico.",
        "javax.faces.converter.NumberConverter.PATTERN_detail": "{2}: '{0}' no es un patr\u00f3n num\u00e9rico. Ejemplo: {1}",
        "javax.faces.validator.LengthValidator.MINIMUM": "{1}: Error de validaci\u00f3n: el largo es inferior que el m\u00ednimo permitido de '{0}'",
        "javax.faces.validator.LengthValidator.MAXIMUM": "{1}: Error de validaci\u00f3n: el largo es mayor que el m\u00e1ximo permitido de '{0}'",
        "javax.faces.validator.RegexValidator.PATTERN_NOT_SET": "Se debe establecer el patr\u00f3n de Regex.",
        "javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail": "El patr\u00f3n Regex debe establecerse en un valor no vac\u00edo.",
        "javax.faces.validator.RegexValidator.NOT_MATCHED": "El patr\u00f3n Regex no coincide",
        "javax.faces.validator.RegexValidator.NOT_MATCHED_detail": "El patr\u00f3n Regex de '{0}' no coincide",
        "javax.faces.validator.RegexValidator.MATCH_EXCEPTION": "Error en expresi\u00f3n regular.",
        "javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail": "Error en expresi\u00f3n regular, '{0}'",
        "javax.faces.validator.BeanValidator.MESSAGE": "{0}",
        "javax.validation.constraints.AssertFalse.message": "debe ser falso",
        "javax.validation.constraints.AssertTrue.message": "debe ser verdadero",
        "javax.validation.constraints.DecimalMax.message": "debe ser menor que o igual a {0}",
        "javax.validation.constraints.DecimalMin.message": "debe ser mayor que o igual a {0}",
        "javax.validation.constraints.Digits.message": "valor num\u00e9rico fuera de los l\u00edmites (se esperaba (<{0} digitos>.<{1} digitos>)",
        "javax.validation.constraints.Future.message": "debe ser una fecha futura",
        "javax.validation.constraints.Max.message": "debe ser menor que o igual a {0}",
        "javax.validation.constraints.Min.message": "debe ser mayor que o igual a {0}",
        "javax.validation.constraints.NotNull.message": "no debe ser nulo",
        "javax.validation.constraints.Null.message": "debe ser nulo",
        "javax.validation.constraints.Past.message": "debe ser una fecha pasada",
        "javax.validation.constraints.Pattern.message": 'debe coincidir con "{0}"',
        "javax.validation.constraints.Size.message": "el tama\u00f1o debe estar entre {0} y {1}"
    }
};
PrimeFaces.locales.ro = {
    closeText: "\u00cenchide",
    prevText: "\u00cenapoi",
    nextText: "\u00cenainte",
    currentText: "Acas\u0103",
    monthNames: "Ianuarie,Februarie,Martie,Aprilie,Mai,Iunie,Iulie,August,Septembrie,Octombrie,Noiembrie,Decembrie".split(","),
    monthNamesShort: "Ian,Feb,Mar,Apr,Mai,Iun,Iul,Aug,Sep,Oct,Noi,Dec".split(","),
    dayNames: "Duminic\u0103,Luni,Mar\u021bi,Miercuri,Joi,Vineri,S\u00e2mb\u0103t\u0103".split(","),
    dayNamesShort: "Dum,Lun,Mar,Mie,Joi,Vin,S\u00e2m".split(","),
    dayNamesMin: "D,L,M,M,J,V,S".split(","),
    weekHeader: "S\u0103pt\u0103m\u00e2na",
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !1,
    yearSuffix: "",
    timeOnlyTitle: "Numai timp",
    timeText: "Timp",
    hourText: "Ora",
    minuteText: "Minut",
    secondText: "Secunde",
    ampm: !1,
    month: "Luna",
    week: "S\u0103pt\u0103m\u00e2na",
    day: "Zi",
    allDayText: "Toat\u0103 ziua"
};
PrimeFaces.locales.pl = {
    closeText: "Zamknij",
    prevText: "Poprzedni",
    nextText: "Nast\u0119pny",
    monthNames: "Stycze\u0144,Luty,Marzec,Kwiecie\u0144,Maj,Czerwiec,Lipiec,Sierpie\u0144,Wrzesie\u0144,Pa\u017adziernik,Listopad,Grudzie\u0144".split(","),
    monthNamesShort: "Sty,Lut,Mar,Kwi,Maj,Cze,Lip,Sie,Wrz,Pa\u017a,Lis,Gru".split(","),
    dayNames: "Niedziela,Poniedzia\u0142ek,Wtorek,\u015aroda,Czwartek,Pi\u0105tek,Sobota".split(","),
    dayNamesShort: "Nie,Pon,Wt,\u015ar,Czw,Pt,So".split(","),
    dayNamesMin: "N,P,W,\u015a,Cz,P,S".split(","),
    weekHeader: "Tydzie\u0144",
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !1,
    yearSuffix: "r",
    timeOnlyTitle: "Tylko czas",
    timeText: "Czas",
    hourText: "Godzina",
    minuteText: "Minuta",
    secondText: "Sekunda",
    currentText: "Teraz",
    ampm: !1,
    month: "Miesi\u0105c",
    week: "Tydzie\u0144",
    day: "Dzie\u0144",
    allDayText: "Ca\u0142y dzie\u0144"
};
var myGeoIpLookup = function (b) {
    $.get("https://ipinfo.io?token=69eee3e914b972", function () {
    }, "jsonp").always(function (a) {
        b(a && a.country ? a.country : "")
    })
};

function showProgressBar() {
    $(".ajaxStatusBlock .ui-progressbar").fadeIn();
    $("button").addClass("component-disabled")
}

function hideProgressBar() {
    $(".ajaxStatusBlock .ui-progressbar").fadeOut();
    $("button").removeClass("component-disabled")
}

function initPhones() {
    try {
        $(".phone-widget").each(function () {
            var a = $(this).val(), b = $(this).attr("data-id");
            PF(b).iti._setFlag(a)
        })
    } catch (b) {
    }
}

function resetCursor(b) {
    var a = b.value.indexOf("_");
    if (-1 < a) return b.setSelectionRange(a, a), !1
};