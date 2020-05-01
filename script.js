var unicoder          = new Unicoder();
var keys              = unicoder.getDictionaryKeys();


function getSelectionHtml(type) {
    var html = "";
    console.log(window.getSelection().getRangeAt(0));


        s = window.getSelection().getRangeAt(0).startOffset;
        e = window.getSelection().getRangeAt(0).endOffset;

        console.log(s,e);
        input = document.getElementById('input')
        html = input.innerHTML;


        stringStart = html.substring(0, s);
        stringEnd = html.substring(e, html.length);

        replace = html.substring(s, e)


        input.innerHTML = stringStart +  unicoder.translate(replace, type) + stringEnd;
}

function share() {
    intent = "intent:#Intent;action=android.intent.action.SEND;type=text/plain;S.android.intent.extra.TEXT=";
    content = document.getElementById('input').innerHTML;
    window.open(intent + encodeURIComponent(content) + ";end");
}
