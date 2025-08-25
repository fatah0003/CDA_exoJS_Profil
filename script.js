document.addEventListener('DOMContentLoaded', () => {
    // tableau de choix de discription
    let arraydescription = [
        "Amateur de jeux vidéos",
        "Sportif",
        "Developpeur"
    ];

    // récupération des differents champs et boutons
    let discription_changeBTN = document.getElementById("description-change");
    let description = document.getElementById("description");
    let pseudo = document.getElementById("pseudo");
    let btn = document.getElementById("btn");
    let profil_form = document.getElementById("profil-form");
    let profil = document.getElementById("profil");
    let img_profil = document.getElementById("img-profil");
    let pseudo_profil = document.getElementById("pseudo-profil");
    let description_profil = document.getElementById("description-profil");
    let regex = /^[a-zA-Z]+$/;

    // choisir une description random dans le tableau

    discription_changeBTN.addEventListener("click", () => {
        let randomDiscription = Math.floor(Math.random() * arraydescription.length);
        description.textContent = arraydescription[randomDiscription];
    })


pseudo.addEventListener("input", () => {
    if (regex.test(pseudo.value.trim())) {
        btn.disabled = false; // bouton activé
    } else {
        btn.disabled = true;  // bouton désactivé
    }
});

// envoyer le formulaire et afficher le profil

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    pseudo_profil.textContent = pseudo.value;
    description_profil.textContent = description.textContent;
    
    

    profil_form.style.display = "none";
    profil.style.display = "block";
    
})
})