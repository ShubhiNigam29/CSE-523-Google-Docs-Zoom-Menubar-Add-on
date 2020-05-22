// Base Code.gs file_v0
function onOpen() {
  DocumentApp.getUi()
      .createMenu('Menu')
      .addItem('Open', 'openDialog')
      .addToUi();
}

function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile('dialog');
  DocumentApp.getUi()
            .showModalDialog(html, 'Menu Listing')
}

var URL = 'https://us-central1-menu-1585020565561.cloudfunctions.net/getDOM';

function returnDOM() {
  return UrlFetchApp.fetch(URL).getContentText();
}
