var ip = sessionStorage.getItem('ip');

const ws = new WebSocket(ip);

const turtle = new Turtle('Jimin');



ws.onerror = function (e) {
    
    console.log(e.message);

}

// https://threejs.org/docs/?q=Mesh#api/en/materials/MeshToonMaterial
