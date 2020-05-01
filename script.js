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

    if (navigator.share) {
        navigator.share({
          text: document.getElementById('input').innerHTML,
          url: '',
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }
}
