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
        })

        if (response.ok) {
            document.location.assign('/');
            // console.log("success")
        } else {
            alert(response.statusText);
        }
    }
}

async function signupHandler(event) {
    event.preventDefault();
    
    const name = document.querySelector('#signup-username').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
    const role = document.querySelector('#signup-role').value.trim();

    if (name && email && password && role) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                name, email, password, role
            }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.assign('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.loginbutton').addEventListener("click", loginHandler);
document.querySelector('.signupbutton').addEventListener("click", signupHandler);

document.querySelector('#signup-role').selectedIndex = -1;