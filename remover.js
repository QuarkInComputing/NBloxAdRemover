const adverts = ["GJIQSRSLKRJGJSMQGILEBIVOJTPIHG", "AGIOSPIKKPJEZQMOGGPSBGLNJRFHNE", "GHKMIOYIUCXHXTASWEFRREJQTE", "GHKMIOYIUCXHXTASWEFRREJQTE"];

for(let i = 0; i< 4; i++){
    const advert = document.getElementsByClassName(adverts[i])[0];
    if (advert) advert.remove();
};