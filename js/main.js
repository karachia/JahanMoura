

//by default it is set on Farsi
var lang = 1;

function changeLang(newLang) {
    var mylang = '';

    if (newLang == 1) {
        if (lang != 1) {
            mylang = 'fa';
            lang = 1;
            document.getElementById("JS-Content").innerHTML = '<script src="js/fa-content.js"></script>';
        }

    } else if (newLang == 2) {
        if (lang != 2) {
            mylang = 'en';
            lang = 2;
            document.getElementById("JS-Content").innerHTML = '<script src="js/en-content.js"></script>';
        }
    }
    document.getElementsByTagName('html')[0].setAttribute('lang', mylang);
    reloadContent();

}


