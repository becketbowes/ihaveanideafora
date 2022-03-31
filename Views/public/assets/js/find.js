const popularOrder = ['upvoted_ideas', 'DESC']
const recentOrder = ['created_at', 'DESC']
const oldestOrder = ['created_at', 'DESC']
const orderSyntaxer = function(order) {
    if (order === 'mostlikes') {
        order = popularOrder
    } else if (order === 'oldest') {
        order = oldestOrder
    } else if (order === 'mostrecent') {
        order = recentOrder
    } else {
        order = false;
    } return order;
};

async function findOffers() {
    const offer = document.querySelector('#offer').value;
    const offerString = `/find/offer/${offer}`;
    // const order = orderSyntaxer(document.querySelector('#offerorder').value);

    if (offer) {
        const res = await fetch(offerString, {
            method: 'GET',
            // params: JSON.stringify({ offer: offer, order: order}),
            // params: JSON.stringify({ offer: offer }),
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
    const categorytype = document.querySelector('#category').value;
    const categoryOrder = orderSyntaxer(document.querySelector('#categoryorder').value);

    if (categorytype) {
        const res = await fetch('/find/category', {
            method: 'GET',
            params: JSON.stringify({ category: categorytype, order: categoryOrder}),
            headers: { 'Content-Type': 'application/json' }
        });
        if (res.ok) {
            console.log('public/find.js42 reporting for duty maam');     
        } else {
            alert(res.statusText);
        }
    }
}

async function findLanguages() {
    const languagetype = document.querySelector('#language').value;
    const languageOrder = orderSyntaxer(document.querySelector('#languageorder').value);

    if (languagetype) {
        const res = await fetch('/find/language', {
            method: 'GET',
            params: JSON.stringify({ language: languagetype, order: languageOrder}),
            headers: { 'Content-Type': 'application/json' }
        });
        if (res.ok) {
            console.log('public/find.js60 reporting for duty maam');     
        } else {
            alert(res.statusText);
        }
    }
}

document.querySelector('.findoffer').addEventListener("click", findOffers);
document.querySelector('.findcategory').addEventListener("click", findCategories);
document.querySelector('.findlanguage').addEventListener("click", findLanguages);

document.querySelector('#languages').selectedIndex = -1;
document.querySelector('#languageorder').selectedIndex = -1;
document.querySelector('#offer').selectedIndex = -1;
document.querySelector('#offerorder').selectedIndex = -1;
document.querySelector('#category').selectedIndex = -1;
document.querySelector('#categoryorder').selectedIndex = -1;