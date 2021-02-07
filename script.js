const getFoodInfo = () => {
    document.getElementById('resultDetails').innerHTML = "";
    document.getElementById('result').innerHTML = "";
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
    const foodsDiv = document.getElementById('result');
    if (foods.meals === null) {

        console.log("no");
        const invalidFood = `
        <p class="text-center bg-light rounded p-5 fw-bold">No Meal found</p>
        `;
        foodsDiv.innerHTML = invalidFood;
    } else {

        foods.meals.forEach(food => {
            const foodDiv = document.createElement('div');

            const foodInfo = `
                <div class="col" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div class="card h-100 shadow bg-white rounded-5 border-0" onclick="displayFoodDetail('${food.idMeal}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-center">${food.strMeal}</h5>
                        </div>
                    </div>
                </div>   
            `;


            foodDiv.innerHTML = foodInfo;
            foodsDiv.appendChild(foodDiv);
        });
    }
}

const displayFoodDetail = id => {
    console.log(id);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderFoodInfo(data.meals[0]));
}


const renderFoodInfo = food => {
    const foodDiv = document.getElementById('resultDetails');
    foodDiv.innerHTML = `
        
        <img src="${food.strMealThumb}" class="img-fluid rounded">
        <h1 class="">${food.strMeal}</h1>
        <p>Ingredients: ${food.strMeal}</p>
        <p>Area: ${food.strCategory}</p>
    `
}

