document.getElementById('run-code').addEventListener('click', function () {
    var x = Module.ccall("start_compiler", "string", ["string"], [document.getElementById('editor-algo').value]);
    console.log(x.length)
    if (x.length == 0) {
        document.getElementById('result').firstElementChild.nextElementSibling.innerHTML = "Erreurs de syntaxe";
        document.getElementById('editor-c').value = '';
        
    } else
    document.getElementById('editor-c').value = x;

})

document.getElementById('mots').innerText += " " + document.getElementsByClassName('text-area')[0].innerText.split('').length;
document.getElementById('lettres').innerText += " " + document.getElementsByClassName('text-area')[0].innerText.split('').length;
document.getElementsByClassName('text-area')[0].value = `fonction toto (entier a, entier b) : entier {
}
`;

let counters = document.getElementsByClassName('line-counter');

for (let i in document.getElementsByClassName('text-area')) {
    const textarea = document.getElementsByClassName('text-area')[i];

    if (textarea.className) {
        if (i != 0)
            textarea.value = '';
        textarea.addEventListener('input', updateCounter);
        textarea.addEventListener('click', function () {
            textarea.dispatchEvent(new Event('input'));

        });
        textarea.addEventListener('scroll', function () {
            counters[0].scrollTop = this.scrollTop
        })

        enableTab('editor-algo');
    }

    if (!counters[i])
        continue;

    if (counters[i].id) {
        counters[i].nbRows = 1;
        counters[i].innerHTML += "<div class='count'>" + counters[i].nbRows + "</div>";
    }
}
document.getElementsByClassName('text-area')[0].dispatchEvent(new Event('input'));

function updateCounter(event) {
    document.getElementById('mots').innerText = "Mots : " + document.getElementById('editor-algo').value.split(/\s[a-zA-Z]/).length
    document.getElementById('lettres').innerText = "Lettres : " + document.getElementById('editor-algo').value.split('').filter((w) => w != '\n').length
    let counter = document.getElementById(this.getAttribute('target'))

    const nbLignes = this.value.split('\n').length
    if (nbLignes > counter.nbRows) {
        for (let i = 0; i <= Math.abs(nbLignes - counter.nbRows); i++) {
            counter.nbRows++;
            counter.innerHTML += "<div class='count'>" + counter.nbRows + "</div>";
        }
        const e = new Event("input");
        this.dispatchEvent(e);
    }
    else if (nbLignes < counter.nbRows) {
        for (let i = 0; i <= Math.abs(nbLignes - counter.nbRows); i++) {
            counter.nbRows--;
            counter.removeChild(counter.lastElementChild)
        }
        const e = new Event("input");
        this.dispatchEvent(e);
    }

}


let scrollers = document.getElementsByClassName('text-area');

function enableTab(id) {
    let el = document.getElementById(id);
    el.onkeydown = function (e) {
        if (e.keyCode === 9) {

            const val = this.value;
            const start = this.selectionStart;
            const end = this.selectionEnd;

            this.value = val.substring(0, start) + '\t' + val.substring(end);

            this.selectionEnd = start + 1
            this.selectionStart = this.selectionEnd;

            return false;

        }
    };
}
