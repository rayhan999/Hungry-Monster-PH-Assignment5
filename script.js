const getFoodInfo = () => {
    let searchBox = document.getElementById('searchText');
    let searchValue = searchBox.value;
    //console.log(searchValue);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data));
}

const displayFood = foods => {
    console.log(foods.meals);
    // for (let i = 0; i < foods.meals.length; i++) {
    //     const food = foods.meals[i];
    //     console.log(food.strMeal);
    // }
    const foodsDiv = document.getElementById('result');
    if (foods.meals === null) {

        console.log("no");
        foodsDiv.innerHTML = "";
    } else {

        foods.meals.forEach(food => {
            const foodDiv = document.createElement('div');
            //countryDiv.className = 'country';
            const foodInfo = `
            <div style="background-color:red" onclick="displayFoodDetail('${food.idMeal}')">
            <h3 class="country-name">${food.strMeal}</h3>
            <p>${food.strCategory}</p>
            </div>
        `;
            foodDiv.innerHTML = foodInfo;
            foodsDiv.appendChild(foodDiv);
        });
    }
}

const displayFoodDetail = id => {
    // console.log(id);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderFoodInfo(data.meals[0]));
}

// const displayFoodDetail = id => {
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => renderCountryInfo(data[0]));
// }

const renderFoodInfo = food => {
    const foodDiv = document.getElementById('resultDetails');
    foodDiv.innerHTML = `
        <h1>${food.idMeal}</h1>
        <p>Population: ${food.strMeal}</p>
        <p>Area: ${food.strCategory}</p>
        <img src="${food.strMealThumb}">
    `
}