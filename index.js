
data.then((formations) => {

    // Récupération de l'ID articles du HTML
    const formationAlternance = document.getElementById(altern);
    console.log("élèves en formation en alternace", formationAlternance);

    const formationContinue = document.getElementById(continu);
    console.log("élèves en formation continue", formationContinue);

    // Ajout de chaque article teddy
    for (formationAlternance of formations) {
        const article =
            ``

        // ajout automatique des articles sur la page HTML
        articles.innerHTML += article;
    };
})