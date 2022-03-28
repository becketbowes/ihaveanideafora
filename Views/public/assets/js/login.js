//login call: onclick "loginbutton" verify user and res.render ideas page, else return error

//signup call: onclick "signupbutton" create new user, res.render ideas page, else return error


async function loginHandler(event) {
    event.preventDefault();
    
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email, password
            }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.assign('/')
        } else {
            alert(response.statusText)
        }

    }
}












document.querySelector('.loginbutton').addEventListener("submit", loginHandler);
document.querySelector('.signupbutton').addEventListener("submit", signupHandler);