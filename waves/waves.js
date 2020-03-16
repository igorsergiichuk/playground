function random(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function deleteChild(el) {
    let child = el.lastElementChild;
    while (child) {
        el.removeChild(child);
        child = el.lastElementChild;
    }
}

function addWaves() {
    let stripsQuantity = random(2, 5);
    let container = document.querySelector(".wv__container");
    deleteChild(container);
    for (let i = 0; i < stripsQuantity; i++)  {
        let strip = document.createElement('div');
        strip.className = "wv__ocean-strip";
        if (!i) {
            strip.style.marginTop = "60px";
        }
        let wavesQuantity = random(0, 6);
        for (let i = 0; i < wavesQuantity; i++)  {
            let wave = document.createElement("span");
            wave.className = `wv__wave wv__wave-${random(3, wavesQuantity > 3 ? wavesQuantity : 4)}`;
            let curve =  document.createElement("span");
            curve.className = "wv__curve";
            wave.append(curve);
            strip.appendChild(wave);
        }
        container.appendChild(strip);
    }
}

window.onload = function () {
    let timerId = setTimeout(function tick() {
        addWaves();
        timerId = setTimeout(tick, 6000); // (*)
    }, 0);
};