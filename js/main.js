// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg
// Вивести зображення з цієї папки, отримане випадковим чином (Math.random)

const imgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const urlImg = './img/';
const formatImg = '.jpg';
const numberFrom = 1;
const numberTo = 9;
const divCardBody = document.querySelector('div');


/**
 * @param {String} urlImg
 * @param {String} formatImg
 * @param {number} numberFrom
 * @param {number} numberTo
 */
function fillRandomImg(urlImg, formatImg, numberFrom, numberTo) {
    const randomNumb = Math.floor(Math.random() * (numberTo - numberFrom + 1)) + numberFrom;
    const divCol = document.createElement('div');
    const img = document.createElement('img');
    const div = document.createElement('div');
    const p = document.createElement('p');

    img.src = `${urlImg}${randomNumb}${formatImg}`;

    divCol.classList.add('card', 'col-4', 'm-3', 'p-1');
    img.classList.add('card-img-top');
    div.classList.add('card-body');
    p.classList.add('card-text');

    p.textContent = `Happy New Year and Christmas!`;

    divCardBody.appendChild(divCol);
    divCol.appendChild(img);
    divCol.appendChild(div);
    div.appendChild(p);
}

//РАНДОМНЕ ОДНЕ ЗОБРАЖЕННЯ
fillRandomImg(urlImg, formatImg, numberFrom, numberTo);


//РАНДОМНІ УСІ ЗОБРАЖЕННЯ
imgArr.forEach(item => fillRandomImg(urlImg, formatImg, numberFrom, numberTo));


// _____________________________________
// ХОТІЛА ВИТЯГНУТИ ФОТО З ПАПКИ В МАСИВ
// АЛЕ ШОСЬ ВОНО КРИВО ВИХОДЕ
// ЗАЛИШУ СПРОБУВАТИ ЩЕ
//
// function loadImages(i) {
//     i = i || 1;
//     let img = new Image();
//     img.onload = function () {
//         // document.body.appendChild(img);
//         imgArr.push(img);
//         loadImages(++i);
//     }
//     img.src = `${urlImg}${i}${formatImg}`;
// }

// loadImages();

// console.log(imgArr);