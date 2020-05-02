var unicoder          = new Unicoder();
var keys              = unicoder.getDictionaryKeys();

const input = document.getElementById('input');
const countContainer = document.getElementById('count');
const shareButton = document.getElementById('share');

const limit = 280;

var isIOS = (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
!window.MSStream

var isAndroid = (/android/i.test(navigator.userAgent));

if (isIOS) {
    console.log("ios");
    shareButton.innerText = "Post to Twitter";
} 

if (isAndroid) {
    console.log("android");
    shareButton.innerHTML = "Share";
}

input.onkeydown = function(e){
    if (e.keyCode == 13)
        e.preventDefault();
};

function getSelectionHtml(type) {
    var html = "";

    s = window.getSelection().getRangeAt(0).startOffset;
    e = window.getSelection().getRangeAt(0).endOffset;

    console.log(s,e);
    html = input.innerHTML;

    stringStart = html.substring(0, s);
    stringEnd = html.substring(e, html.length);

    replace = html.substring(s, e)

    input.innerHTML = stringStart +  unicoder.translate(replace, type) + stringEnd;
}

function count() {
    chars = input.innerText.length;
    console.log(chars);

    remaining = limit - chars;
    countContainer.innerText = remaining;
    if (remaining < 25){
        countContainer.classList.add("low");
    } else {
        countContainer.classList.remove("low");
    }
    
}
function share() {
    message = document.getElementById('input').innerText;
    if (navigator.share) {
        if (isIOS) {
            message = input.innerText;
            window.open("twitter://post?message="+encodeURIComponent(message));
        } else if (isAndroid) {
            navigator.share({
            text: message,
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        } else {
            window.open('https://twitter.com/compose/tweet?text='+encodeURIComponent(message));
        }
      }
}
