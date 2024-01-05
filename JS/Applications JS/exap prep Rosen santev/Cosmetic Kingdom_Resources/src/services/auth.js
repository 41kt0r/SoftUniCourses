import { loginUrl, logoutUrl, registerUrl } from "../constsnts/index.js";
import  page  from "./../../node_modules/page/page.mjs"

function login(body) {
    return fetch(loginUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
    .then(res => {
        if (res.status !== 200) {
            throw new Error("Invalid credentials!")
        }

        return res.json();
    })
    .then((data) => {
        setAuthData(data);
    });
}

function register(body) {
    return fetch(registerUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
    .then(res => {
        if (res.status !== 200) {
            throw new Error("Invalid credentials!")
        }

        return res.json();
    })
    .then((data) => {
        setAuthData(data);
    });
}

function setAuthData(authData) {
    localStorage.setItem("auth", JSON.stringify(authData));
}

export function getAuthData() {
    return JSON.parse(localStorage.getItem("auth"))
}

export function handellogin(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if(!email || !password) {
        alert("All fields are required!");
        return;
    }

    const body = {
        email,
        password
    };
    login(body)
    .then(() =>{
        page.redirect("/")
    })
    
    .catch((err) => {
        alert(err.message);
        console.log(err)});
}

export function handleRegister (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePassword = formData.get('re-password');

    if(!email || !password) {
        alert("All fields are required!");
        return;
    }
    if(!rePassword || rePassword !== password) {
        alert("Passwords dont match");
        return;
    }

    const body = {
        email,
        password
    };
    register(body)
    .then(() =>{
        page.redirect("/")
    })
    
    .catch((err) => {
        alert(err.message);
        console.log(err)
    });
}

export function logout() {
    return fetch(logoutUrl, {
        method: "GET",
        headers: {
            //"Content-Type": "application/json",
            "X-Authorization": getAuthData().accessToken
        },
        //body: JSON.stringify(body),
    })
    // .then(res => {

    //     return res.json()
    //     if (res.status !== 200) {
    //         throw new Error("Invalid credentials!")
    //     }

    //    return res.json();
    // })
    .then(() => {
        localStorage.removeItem("auth")
        // page.redirect('/');
    });
}

