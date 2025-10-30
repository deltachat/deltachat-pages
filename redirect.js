
function getLanguageFolder() {
  var supported = ['id', 'ca', 'cs', 'de', 'es', 'fr', 'gl', 'it', 'nl',
                   'pl', 'pt', 'pt_BR', 'sq', 'sk', 'tr', 'ru', 'uk', 'zh_CN'];

  var desired = navigator.language || navigator.userLanguage;
  desired = desired.replace('-', '_');

  if (supported.indexOf(desired) != -1) {
    return desired;
  }

  desired = desired.split('_')[0].toLowerCase();
  if (supported.indexOf(desired) != -1) {
    return desired;
  }

  return 'en'
}

function getRedirectParam() {
  var metaTag = document.querySelector('meta[http-equiv="refresh"]');
  var content = metaTag.getAttribute('content');

  var urlMatch = content.match(/url\s*=\s*([^;]+)/i);
  if (urlMatch && urlMatch[1]) {
    return urlMatch[1].trim();
  }

  return '';
}

function getAbsRedirect() {
  var param = getRedirectParam();

  var urlMatch = param.match(/en\/(.+)/i);
  if (urlMatch && urlMatch[1]) {
    return getLanguageFolder() + '/' + urlMatch[1] + window.location.hash;
  }

  return param;
}

var newLocation = getAbsRedirect();
window.location.href = newLocation;
