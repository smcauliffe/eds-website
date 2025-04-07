// add delayed functionality here

const spotify = document.createElement('div');
spotify.classList.add('spotify-embed');
spotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1FEtZvz9cTqsN4LofCmwYm?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';

const footerDiv = document.querySelector('.footer > div');
footerDiv.prepend(spotify);
spotify.parentNode.classList.add('section');
