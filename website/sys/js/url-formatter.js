(function (window, document) {

    "use strict";

    var cdnDomain = 'https://' + (location.href.replace('http://', '').replace('https://', '') +'cdn'),
        repoDomain = 'https://' + (location.href.replace('http://', '').replace('https://', '') + 'repo'),

        gistCDNDomain = location.href.replace('http://', '').replace('https://', '') + 'gistcdn',
        gistDomain = location.href.replace('http://', '').replace('https://', '') + 'gist',

        devEl  = document.getElementById('url-dev'),
        urlEl  = document.getElementById('url');

    urlEl.addEventListener('input', function () {
        var url = decodeURIComponent(urlEl.value.trim()).replace('http://','').replace('https://','').split('/'),
            type = url.shift().replace('.githubusercontent.com', ''),
            //user = url.shift(),
            //repo = url.shift(),
            //commit = url.shift(),
            //file = url.join('/'),
            base = decodeURIComponent(urlEl.value.trim()).replace('http://','').replace('https://','').split('/');
            base.splice(0,1);
            base = base.join('/');

        //Gists
        if (type === 'gist') {
            urlEl.classList.add('valid');
            urlEl.classList.remove('invalid');

            devEl.classList.add('valid');
            devEl.classList.remove('invalid');


            var newURL = repoDomain + '/' + base
            devEl.value  = encodeURI(newURL);
        }

        //Raw files
        else if (type === 'raw') {

            urlEl.classList.add('valid');
            urlEl.classList.remove('invalid');

            devEl.classList.add('valid');
            devEl.classList.remove('invalid');


            var newURL = repoDomain + '/' + base
            devEl.value  = encodeURI(newURL);

        }

        //invalid url
        else {
            urlEl.classList.remove('valid');

            if (url.length) {
                urlEl.classList.add('invalid');
            } else {
                urlEl.classList.remove('invalid');
            }

            devEl.value  = '';

            devEl.classList.remove('valid');
        }








/*
    if (REGEX_RAW_URL.test(url)) {
        urlEl.classList.remove('invalid');
        urlEl.classList.add('valid');

        devEl.value  = encodeURI(url.replace(REGEX_RAW_URL, '$1://' + devDomain + '/$2/$3'));

        devEl.classList.add('valid');
    }
    else if (REGEX_REPO_URL.test(url)) {
        urlEl.classList.remove('invalid');
        urlEl.classList.add('valid');

        devEl.value  = encodeURI(url.replace(REGEX_REPO_URL, '$1://' + devDomain + '/$2/$3/$4'));
        prodEl.value = encodeURI(url.replace(REGEX_REPO_URL, '$1://' + cdnDomain + '/$2/$3/$4'));

        devEl.classList.add('valid');
        prodEl.classList.add('valid');
    }
    else if (REGEX_GIST_URL.test(url)) {
        urlEl.classList.remove('invalid');
        urlEl.classList.add('valid');

        devEl.value  = encodeURI(url.replace(REGEX_GIST_URL, '$1://' + gistDomain + '/$2/$3/raw/'));

        devEl.classList.add('valid');

    }
    else {
        urlEl.classList.remove('valid');

        if (url.length) {
            urlEl.classList.add('invalid');
        } else {
            urlEl.classList.remove('invalid');
        }

        devEl.value  = '';

        devEl.classList.remove('valid');
    }

*/











    }, false);

    devEl.addEventListener('focus', onFocus);

    function onFocus(e) {
        setTimeout(function () {
            e.target.select();
        }, 1);
    }
}(window, document));
