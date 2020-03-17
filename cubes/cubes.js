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
 * Change position of the cube
 * @param elements elements to be moved
 */

const move = (elements) =>  {
    if (!elements.length) return false;
    for (let j = 0; j < elements.length; j++) {
        elements[j].style.top = `${random(0, 100)}px`;
        elements[j].style.left = `${random(0, 100)}px`;
        elements[j].style.opacity = `${random(0, 1)}px`;
    }
};

/**
 * Change elements position each 1,5s
 * @param elems
 */

const anima = (elems) => {
    let timerId = setTimeout(function tick (elems) {
        move(elems);
        timerId = setTimeout(tick, 1000, elems);
    }, 0, elems);
};

/**
 * Add cubes to the body
 * @returns {NodeListOf<Element>} cubes
 */

const cubes = () => {
    let cubesContainersContainer = document.querySelector('.cubes__containers-container');
    let colors = ['cubes__cube-red', 'cubes__cube-green', 'cubes__cube-yellow', 'cubes__cube-pink'];

    for (let k = 0; k < 4; k++) {
        let cubesContainer = document.createElement("div");
        cubesContainer.className = "cubes__container";
        let genNum = random(20, 40);
        for (let i = 0; i <= genNum; i++) {
            let el =  document.createElement("div");
            el.className = `cubes__cube ${colors[k]}`;
            cubesContainer.appendChild(el);
        }
        cubesContainersContainer.appendChild(cubesContainer);
    }

    return document.querySelectorAll('.cubes__cube');
};

window.onload = () => {
    anima(cubes());
};