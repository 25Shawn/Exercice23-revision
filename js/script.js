const bouton = document.querySelector('button');

bouton.addEventListener('button', AfficherMessage);

function AfficherMessage(e){
    let livre = e.target.value;

    const image = document.getElementById('imagelivre');

    image.setAttribute('src', "images/livres/" + livre + ".avif");
}
