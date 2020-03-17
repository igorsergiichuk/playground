/**
 * Random integer in range
 * @param min Lower limit
 * @param max Upper limit
 * @returns {number} random integer
 */
const random = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
};

/**
 * Deletes all child nodes of an element
 * @param el element which child nodes to be deleted
 */
const deleteChild = (el) => {
    let child = el.lastElementChild;
    while (child) {
        el.removeChild(child);
        child = el.lastElementChild;
    }
};

/**
 * Adding random number of waves to the container
 */
function addWaves() {

    // Set quantity of waves rows

    let stripsQuantity = random(3, 5);
    let container = document.querySelector(".wv__container");

    // Clear container in of any child nodes (previously generated waves)

    deleteChild(container);

    // Append waves rows to the container

    for (let i = 0; i < stripsQuantity; i++)  {
        let strip = document.createElement('div');
        strip.className = "wv__ocean-strip";

        // First wave row should have higher margin

        if (!i) {
            strip.style.marginTop = "60px";
        }

        let wavesQuantity = random(2, 6);

        // Append waves to row

        for (let i = 0; i < wavesQuantity; i++)  {
            let wave = document.createElement("span");
            wave.className = `wv__wave wv__wave-${random(3, wavesQuantity > 3 ? wavesQuantity : 4)}`;

            // Append wave curve to wave

            let curve =  document.createElement("span");
            curve.className = "wv__curve";
            wave.append(curve);
            strip.appendChild(wave);
        }
        container.appendChild(strip);
    }
}

// Generate new waves set every 3s

window.onload = function () {
    let timerId = setTimeout(function tick() {
        addWaves();
        timerId = setTimeout(tick, 3000);
    }, 0);
};