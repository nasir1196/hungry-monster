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
const getDetail = document.getElementById('get-detail')
bodyContent.addEventListener('click', function (event) {
    const getId = event.target.innerText;
    displayFoodDetail(getId)
});


const displayFoodDetail = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => DetailInfo(data.meals));
}


// create function for show food elements
const DetailInfo = (detailData) => {
    for (let i = 0; i < detailData.length; i++) {
        const itemValue = detailData[i];
        getDetail.innerHTML = `
        <img id="detail-img" src = "${itemValue.strMealThumb}">
        <h1>Food Name: ${itemValue.strMeal}</h1>
        <h3>Country-Place: ${itemValue.strArea}</h3>
        <h3>Category: ${itemValue.strTags}</h3>
        <h2>INGREDIENT</2>
        <h4>1: ${itemValue.strIngredient1}</h4>
        <h4>2: ${itemValue.strIngredient2}</h4>
        <h4>3: ${itemValue.strIngredient3}</h4>
        <h4>4: ${itemValue.strIngredient4}</h4>
        <h4>5: ${itemValue.strIngredient5}</h4>
        <h4>6: ${itemValue.strIngredient6}</h4>
        <h4>7: ${itemValue.strIngredient7}</h4>
        <h4>8: ${itemValue.strIngredient8}</h4>
        <h4>9: ${itemValue.strIngredient9}</h4>
        <h4>10: ${itemValue.strIngredient10}</h4>
        <h4>11: ${itemValue.strIngredient11}</h4>
        
         `
    }
}


// closing all script tag 