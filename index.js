
// Récupération de l'ID des sections de formations du HTML
const formationAlternance = document.getElementById('altern');
// console.log("élèves en formation en alternace", formationAlternance);

const formationContinue = document.getElementById('continu');
// console.log("élèves en formation continue", formationContinue);


// Ajout des élèves
const elevesAlternance =
    `<h2>Élèves en alternance</h2>
            <div class="trombImage">
            <figure class="figure">
                <img src="images/trombi/30020064-une-photo-d-identité-de-jeune-attrayant-sexy-belle-femme-en-chemise-blanche-et-costume-isolé-sur-un-.webp"
                    class="figure-img img-fluid rounded-circle Small shadow" alt="photo d'identité">
            </figure>
            <div class="trombContent">
                <h5>Sabrina FOMBICHE</h5>
                <h6>Développeur web</h6>
                <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit. </cite>
            </div>
        </div>

        <div class="trombImage2">
            <figure class="figure">
                <img src="images/trombi/f42c98d299ef.jpg"
                    class="figure-img img-fluid rounded-circle Small shadow" alt="photo d'identité">
            </figure>
            <div class="trombContent">
                <h5>John DOE</h5>
                <h6>Développeur PHP</h6>

                <cite>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</cite>
            </div>
        </div>

        <div class="trombImage">
            <figure class="figure">
                <img src="images/trombi/image.jpg" class="figure-img img-fluid rounded-circle Small shadow"
                    alt="photo d'identité">
            </figure>
            <div class="trombContent">
                <h5>Jaffar ALADAWI</h5>
                <h6>Animateur e-commerce</h6>

                <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit.</cite>
            </div>
        </div>

        <div class="trombImage2">
            <figure class="figure">
                <img src="images/trombi/CV_exemple-3.jpg"
                    class="figure-img img-fluid rounded-circle  Small shadow" alt="photo d'identité">
            </figure>
            <div class="trombContent">
                <h5>Paola CABRI</h5>
                <h6>Animateur e-commerce</h6>

                <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit.</cite>
            </div>
        </div>

        <div class="trombImage">
            <figure class="figure">
                <img src="images/trombi/istockphoto-1125638891-612x612.jpg"
                    class="figure-img img-fluid rounded-circle  Small shadow" alt="photo d'identité">
            </figure>
            <div class="trombContent">
                <h5>Magalie STORMAN</h5>
                <h6>Concepteur d'applications</h6>

                <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit.</cite>
            </div>
        </div>

        <div class="trombImage2">
            <figure class="figure">
                <img src="images/trombi/istockphoto-491292474-612x612.jpg"
                    class="figure-img img-fluid rounded-circle  Small shadow" alt="photo d'identité">
            </figure>
            <div class="trombContent">
                <h5>Mathieu LAMBERT</h5>
                <h6>Développeur web</h6>

                <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit.</cite>
            </div>
        </div>

        <div class="trombImage">
            <figure class="figure">
                <img src="images/trombi/MASSEAUX-Léo-2-39366-Copie-2.jpg"
                    class="figure-img img-fluid rounded-circle  Small shadow" alt="photo d'identité">
            </figure>
            <div class="trombContent">
                <h5>Léo MASSEAUX</h5>
                <h6>Développeur JAVA</h6>

                <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit.</cite>
            </div>
        </div>

        <div class="trombImage2">
            <figure class="figure">
                <img src="images/trombi/me-jean-baptiste-le-dall-photo-amelie-marzouk-1594547994.jpg"
                    class="figure-img img-fluid rounded-circle  Small shadow" alt="photo d'identité">
            </figure>
            <div class="trombContent">
                <h5>Jean-Baptiste MARZOUK</h5>
                <h6>Concepteur d'applications</h6>

                <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit.</cite>
            </div>
        </div>

        <div class="trombImage">
            <figure class="figure">
                <img src="images/trombi/passfoto-beispiel-nachher.jpg"
                    class="figure-img img-fluid rounded-circle  Small shadow" alt="photo d'identité">
            </figure>
            <div class="trombContent">
                <h5>Nachher BEISPIEL</h5>
                <h6>Développeur web</h6>

                <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit.</cite>
            </div>
        </div>`

// ajout automatique des élèves en alternance sur la page HTML
formationAlternance.innerHTML = elevesAlternance;

const elevesContinu =
    `<h2>Élèves en continu</h2>
            <div class="trombImage">
                <figure class="figure">
                    <img src="images/trombi/FrancisLaurentFRPasseport35x45mmjpg_5e031965b7e3d.jpg"
                        class="figure-img img-fluid rounded-circle  Small shadow" alt="photo d'identité">
                </figure>
                <div class="trombContent">
                    <h5>Francis LAURENT</h5>
                    <h6>Technicien d'assistance informatique</h6>

                    <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit. </cite>
                </div>
            </div>
            <div class="trombImage2">
                <figure class="figure">
                    <img src="images/trombi/photo_identite_classique_vignette_400x400-1.400x400.jpg"
                        class="figure-img img-fluid rounded-circle  Small shadow" alt="photo d'identité">
                </figure>
                <div class="trombContent">
                    <h5>Brigitte FORTE</h5>
                    <h6>Développeur web</h6>

                    <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit.</cite>
                </div>
            </div>
            <div class="trombImage">
                <figure class="figure">
                    <img src="images/trombi/AUTRES-box-1.jpg"
                        class="figure-img img-fluid rounded-circle  Small shadow" alt="photo d'identité">
                </figure>
                <div class="trombContent">
                    <h5>Agathe MOUSIN</h5>
                    <h6>Développeur JAVA</h6>

                    <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit.</cite>
                </div>
            </div>
            <div class="trombImage2">
                <figure class="figure">
                    <img src="images/trombi/téléchargement (1).jpg"
                        class="figure-img img-fluid rounded-circle  Small shadow" alt="photo d'identité">
                </figure>
                <div class="trombContent">
                    <h5>Nadia BOUSLEÏKIM</h5>
                    <h6>Développeur PHP</h6>

                    <cite>Lorem ipsum dolor sit amet consectetur adipisicing elit.</cite>
                </div>
            </div>`

// ajout automatique des élèves en continu sur la page HTML
formationContinue.innerHTML = elevesContinu;

// const eleves = document.querySelectorAll("div.trombImage, div.trombContent, h6");
// console.log('les élèves sont : ', eleves);

function getTitles(formation) {
    let titles = document.getElementsByTagName("h6");
    for (let i = 0; i < titles.length; i++) {
        titles[i].parentNode.parentNode.style.display = "flex";
        if(titles[i].innerText != formation){
            titles[i].parentNode.parentNode.style.display = "none";
        }
        console.log(titles[i].parentNode.parentNode);
      }
  }

  function getForm(alternContinu) {
    let formations = document.querySelectorAll(".trombImage1", ".trombImage2");
    for (let i = 0; i < formations.length; i++) {
        formations[i].parentNode.style.display = "flex";
        if(formations[i].innerText != alternContinu){
            formations[i].parentNode.style.display = "none";
        }
        console.log(formations[i].parentNode);
      }
  }