document.querySelector('main div:first-child + .ligne-bouton input:first-child').addEventListener('click', reset);
document.querySelector('main div:first-child + .ligne-bouton input:nth-child(2)').addEventListener('click', exposant_2);
document.querySelector('main div:first-child + .ligne-bouton input:nth-child(3)').addEventListener('click', retour);
document.querySelector('main div:first-child + .ligne-bouton input:last-child').addEventListener('click', division);

document.querySelector('main div:nth-child(3) input:nth-child(1)').addEventListener('click', entrerNombre);
document.querySelector('main div:nth-child(3) input:nth-child(2)').addEventListener('click', entrerNombre);
document.querySelector('main div:nth-child(3) input:nth-child(3)').addEventListener('click', entrerNombre);
document.querySelector('main div:nth-child(3) input:nth-child(4)').addEventListener('click', multiplication);

document.querySelector('main div:nth-child(4) input:nth-child(1)').addEventListener('click', entrerNombre);
document.querySelector('main div:nth-child(4) input:nth-child(2)').addEventListener('click', entrerNombre);
document.querySelector('main div:nth-child(4) input:nth-child(3)').addEventListener('click', entrerNombre);
document.querySelector('main div:nth-child(4) input:nth-child(4)').addEventListener('click', soustraction);

document.querySelector('main div:nth-child(5) input:nth-child(1)').addEventListener('click', entrerNombre);
document.querySelector('main div:nth-child(5) input:nth-child(2)').addEventListener('click', entrerNombre);
document.querySelector('main div:nth-child(5) input:nth-child(3)').addEventListener('click', entrerNombre);
document.querySelector('main div:nth-child(5) input:nth-child(4)').addEventListener('click', addition);

document.querySelector('input#bouton-zero').addEventListener('click', entrerNombre);
document.querySelector('input#bouton-egal').addEventListener('click', egal);