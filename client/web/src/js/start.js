function start(page, ip) {
    sessionStorage.setItem('ip', ip);
    window.location.href = page;
}