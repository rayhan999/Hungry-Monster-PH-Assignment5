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
            <div style="background-color:red">
            <h3 class="country-name">${food.idMeal}</h3>
            <p>${food.strCategory}</p>
            </div>
        `;
            foodDiv.innerHTML = foodInfo;
            foodsDiv.appendChild(foodDiv);
        });
    }
}