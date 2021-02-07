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

bodyContent.addEventListener('click', function (event) {
    const getDetail = document.getElementById('get-detail')
    const getId = event.target.innerText;
    displayFoodDetail(getId)
    function displayFoodDetail(name) {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
        fetch(url)
            .then(res => res.json())
            .then(data => DetailInfo(data.meals[0]));
    }

    function DetailInfo(detailData) {
        getDetail.innerHTML += `
        <h1>Food Name: ${detailData.strMeal}</h1>
        <img id="detail-img" src = "${detailData.strMealThumb}">
        <p>Place: ${detailData.strArea}</p>
        <p>Category: ${detailData.strCategory}</p>
        <p>1: ${detailData.strIngredient1}</p>
        <p>2: ${detailData.strIngredient2}</p>
        <p>3: ${detailData.strIngredient3}</p>
        <p>4: ${detailData.strIngredient4}</p>
        <p>5: ${detailData.strIngredient5}</p>
        <p>6: ${detailData.strIngredient6}</p>
        <p>7: ${detailData.strIngredient7}</p>
        <p>8: ${detailData.strIngredient8}</p>
        <p>9: ${detailData.strIngredient9}</p>
        <p>10: ${detailData.strIngredient10}</p>
        <p>11: ${detailData.strIngredient11}</p>
        
        `
    }
})

