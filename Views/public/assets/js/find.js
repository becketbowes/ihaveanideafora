async function findOffers() {
    const offer = document.querySelector('#offer').value;
    const offerString = `/find/offer/${offer}`;

    if (offer) {
        const res = await fetch(offerString, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        if (res.ok) {
            document.location.assign(offerString);     
        } else {
            alert(res.statusText);
        }
    }
}

async function findCategories() {
    const category = document.querySelector('#category').value;
    const categoryString = `/find/category/${category}`;

    if (category) {
        const res = await fetch(categoryString, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        if (res.ok) {
            document.location.assign(categoryString);     
        } else {
            alert(res.statusText);
        }
    }
}

async function findLanguages() {
    const language = document.querySelector('#languages').value;
    const languageString = `/find/language/${language}`;

    if (language) {
        const res = await fetch(languageString, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        if (res.ok) {
            document.location.assign(languageString);     
        } else {
            alert(res.statusText);
        }
    }
}


document.querySelector('.findoffer').addEventListener("click", findOffers);
document.querySelector('.findcategory').addEventListener("click", findCategories);
document.querySelector('.findlanguage').addEventListener("click", findLanguages);

document.querySelector('#languages').selectedIndex = -1;
document.querySelector('#offer').selectedIndex = -1;
document.querySelector('#category').selectedIndex = -1;