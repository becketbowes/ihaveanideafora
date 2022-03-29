const showIdeas = () => document.location.replace('/');
const showFaqs = () => document.location.replace('/faq');
const showPost = () => document.location.replace('/compose');
const showFind = () => document.location.replace('find');
const logout = () => alert('Do Not Forget The Cookies!!!');

//once we get the cookies ->

// async function logout() {
//     const res = await fetch('/api/user-routes/', {
//         method: 'post',
//         headers: { 'Content-Type': 'application/json' }
//     });
//     if (res.ok) {
//         document.location.replace('login');
//     } else {
//         alert(response.statusText);
//     }
// }

document.querySelector('.home').addEventListener('click', showIdeas);
document.querySelector('.faqs').addEventListener('click', showFaqs);
document.querySelector('.post').addEventListener('click', showPost);
document.querySelector('.find').addEventListener('click', showFind);
document.querySelector('.logout').addEventListener('click', logout);