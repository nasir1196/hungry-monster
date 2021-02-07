// create handler for search food 
const clickHandler = () => {
    const input = document.getElementById('input').value;
    loadFoodItemData(input);
}


// create function  for get handler value 
const loadFoodItemData = (inputValue) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(promise => promise.json())
        .then(data => showFoodItemData(data.meals));

}


// create function for show all body content images and title 
const bodyContent = document.getElementById('body-content');
const showFoodItemData = (data) => {
    data.forEach(ItemList => {
        const div = document.createElement('div');
        div.className = 'style-meal'
        const img = document.createElement('img');
        img.src = `${ItemList.strMealThumb}`;
        div.appendChild(img);
        const h4 = document.createElement('h4');
        h4.className = "style-name";
        h4.innerText = ItemList.strMeal;
        div.appendChild(h4);
        bodyContent.appendChild(div)


    });
}


// create click handler for see details 
bodyContent.addEventListener('click', function (event) {
    const getDetail = document.getElementById('get-detail')
    const getId = event.target.innerText;
    displayFoodDetail(getId)
    const displayFoodDetail = (name) => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
        fetch(url)
            .then(res => res.json())
            .then(data => DetailInfo(data.meals[0]));
    }


    // create function for show food elements
    const DetailInfo = (detailData) => {
        getDetail.innerHTML += `
        <img id="detail-img" src = "${detailData.strMealThumb}">
        <h1>Food Name: ${detailData.strMeal}</h1>
        <h3>Country-Place: ${detailData.strArea}</h3>
        <h3>Category: ${detailData.strCategory}</h3>
        <h2>INGREDIENT</2>
        <h4>1: ${detailData.strIngredient1}</h4>
        <h4>2: ${detailData.strIngredient2}</h4>
        <h4>3: ${detailData.strIngredient3}</h4>
        <h4>4: ${detailData.strIngredient4}</h4>
        <h4>5: ${detailData.strIngredient5}</h4>
        <h4>6: ${detailData.strIngredient6}</h4>
        <h4>7: ${detailData.strIngredient7}</h4>
        <h4>8: ${detailData.strIngredient8}</h4>
        <h4>9: ${detailData.strIngredient9}</h4>
        <h4>10: ${detailData.strIngredient10}</h4>
        <h4>11: ${detailData.strIngredient11}</h4>
        
        `
    }
})

// closing all script tag 