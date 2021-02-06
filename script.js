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
        foodsDiv.innerHTML = "";
    } else {

        foods.meals.forEach(food => {
            const foodDiv = document.createElement('div');
            //countryDiv.className = 'country';
            const foodInfo = `
            <div class="row row-cols-1 row-cols-md-3 g-4 ">
                <div class="col d-flex justify-content-around">
                    <div class="card h-100 shadow p-3 bg-white rounded border-0" onclick="displayFoodDetail('${food.idMeal}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${food.strMeal}</h5>


                        </div>

                    </div>
                </div>
            </div>
            `;

            //     const foodInfo = `
            //     <div class="card" style="width: 18rem;">
            //     <img src="..." class="card-img-top" alt="...">
            //     <div class="card-body">
            //       <h5 class="card-title">Card title</h5>
            //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //       <a href="#" class="btn btn-primary">Go somewhere</a>
            //     </div>
            //   </div>
            //     `;
            //     const foodInfo = `
            //     <div style="background-color:red" onclick="displayFoodDetail('${food.idMeal}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
            //     <h3 class="country-name">${food.strMeal}</h3>
            //     <p>${food.strCategory}</p>
            //     </div>
            // `;
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
        <h1>${food.idMeal}</h1>
        <p>Population: ${food.strMeal}</p>
        <p>Area: ${food.strCategory}</p>
        <img src="${food.strMealThumb}">
    `
}

