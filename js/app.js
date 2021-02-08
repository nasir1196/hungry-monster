// create handler for search food 
const clickHandler = () => {
    const input = document.getElementById('input').value;
    loadFoodItemData(input);
}


// create function  for get handler value 
const loadFoodItemData = async (inputValue) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
    try {
        const promise = await fetch(url);
        const data = await promise.json();
        showFoodItemData(data.meals);
    }
    catch (error) {
        getError("We can't find your items!!! Sorry Try Again Later!");
    }

}


// create function for show all body content images and title 
const showFoodItemData = (data) => {
    const bodyContent = document.getElementById('body-content');
    bodyContent.innerHTML = '';
    data.forEach(mealList => {
        const hungryDiv = document.createElement('div');
        hungryDiv.className = "single-result row align-items-center my-3 p-3";
        hungryDiv.innerHTML = `
        <div onclick="displayFoodDetail('${mealList.strMeal}');" >
            <div class="col-md-4 hungry-image">
                <img src="${mealList.strMealThumb}" alt="">
            </div>
            <h2>${mealList.strMeal}</h2>
        </div>
        `;
        bodyContent.appendChild(hungryDiv);
    });
}


// create function for click handler 
const displayFoodDetail = async (foodData) => {
    console.log(foodData);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodData}`;
    try {
        const promise = await fetch(url);
        const data = await promise.json();
        showFoodDetails(data.meals[0]);
    }
    catch (error) {
        getError('Sorry!!! We Have no Gradient Item At This Moment');
    }
}


// creat function for show food details 
const showFoodDetails = (foodName) => {
    const getDetail = document.getElementById('get-detail')
    getDetail.innerHTML = "";

    const foodDetail = document.createElement('div');
    foodDetail.className = 'food-detail';
    foodDetail.innerHTML = `
        <img src="${foodName.strMealThumb}" alt="">
        <h1>${foodName.strMeal}</h1>
        <h3>Ingredients:</h3>
        <ul >
            <li>${foodName.strIngredient1}</li> 
            <li>${foodName.strIngredient2}</li> 
            <li>${foodName.strIngredient3}</li> 
            <li>${foodName.strIngredient4}</li> 
            <li>${foodName.strIngredient5}</li> 
            <li>${foodName.strIngredient6}</li> 
            <li>${foodName.strIngredient7}</li> 
            <li>${foodName.strIngredient8}</li> 
            <li>${foodName.strIngredient9}</li> 
            <li>${foodName.strIngredient10}</li> 
            <li>${foodName.strIngredient11}</li>
        </ul> 
        `;
    getDetail.appendChild(foodDetail);



}


// create function for show display error massage 
const getError = (error) => {
    const getError = document.getElementById('display-error');
    getError.innerText = '';
    getError.innerText = error;
}

// closing all script file 