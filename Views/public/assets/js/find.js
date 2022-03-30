const popularOrder = ['upvoted_ideas', 'DESC']
const recentOrder = ['created_at', 'DESC']
const orderSyntaxer = function(order) {
    if (order === 'mostlikes') {
        order = popularOrder
    } else if (order === 'mostrecent') {
        order = recentOrder
    } else {
        order = false;
    } return order;
};

async function findOffers() {
    const offertype = document.querySelector('#offer').value;
    const offerOrder = orderSyntaxer(document.querySelector('#offerorder').value);

    if (offertype) {
        const res = await fetch('/find/offer', {
            method: 'GET',
            body: JSON.stringify({ offer: offertype, offerOrder}),
            headers: { 'Content-Type': 'application/json' }
        });
        if (res.ok) {
            console.log('public/find.js24 reporting for duty maam');     
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
            body: JSON.stringify({ category: categorytype, categoryOrder}),
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
            body: JSON.stringify({ language: languagetype, languageOrder}),
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