window.baseUrl = String(window.location.origin).includes('vercel') ? 'https://bingwadeals.eu.pythonanywhere.com' : 'http://127.0.0.1:5000';

function setCookie(name, value, days=1) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}


function getCookie(name) { 
    const ca = document.cookie.split(';'); 
    for (let c of ca) { c = c.trim(); if (c.startsWith(`${name}=`)) return c.substring(name.length + 1); } 
    return null;
}

function showToast(type, msg) {
    const t = document.getElementById('toast');
    t.className = `toast ${type}`;
    t.textContent = msg;
    t.style.display = 'block';
    setTimeout(() => { t.style.display = 'none'; }, 5000);
}
window.setCookie = setCookie
window.getCookie = getCookie
window.showToast = showToast

