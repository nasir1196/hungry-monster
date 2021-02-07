function clickHandler() {
    const input = document.getElementById('input').value;
    loadData(input);
}

function loadData(inputValue) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(promise => promise.json())
        .then(data => dataShow(data.meals));

}

const bodyContent = document.getElementById('body-content');
function dataShow(data) {
    data.forEach(mealItem => {
        const div = document.createElement('div');
        div.className = 'style-meal'
        const img = document.createElement('img');
        img.src = `${mealItem.strMealThumb}`;
        div.appendChild(img);
        const h4 = document.createElement('h4');
        h4.className = "style-name";
        h4.innerText = mealItem.strMeal;
        div.appendChild(h4);
        bodyContent.appendChild(div)


    });
}

const displayFoodDetail = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => DetailInfo(data));
}

function DetailInfo(detailData) {
    const detailDiv = document.getElementById('get-detail');
    detailDiv.innerHTML = `
    <h1>${detailData.strMeal}</h1>
    <img src = "${detailData.strMealThumb}">
    <p>1:${detailData.strMeasure1}</p>
    <p>2: ${detailData.strMeasure2}</p>
    <p>3: ${detailData.strMeasure3}</p>
    <p>4: ${detailData.strMeasure4}</p>
    <p>5: ${detailData.strMeasure5}</p>
    <p>6: ${detailData.strMeasure6}</p>
    <p>7: ${detailData.strMeasure7}</p>
    `
}
