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
        <p class="text-center bg-secondary rounded p-3 fw-bold invalidFood">Sorry! Meal not available</p>
        `;
        foodsDiv.innerHTML = invalidFood;
    } else {

        foods.meals.forEach(food => {
            const foodDiv = document.createElement('div');

            const foodInfo = `
                <div class="col" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div class="card h-100 shadow bg-white rounded-5 border-0" onclick="displayFoodDetail('${food.idMeal}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src="${food.strMealThumb}" class="image card-img-top" alt="...">
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
        
        <img src="${food.strMealThumb}" class=" imageModal rounded">
        <h1 class="fw-bold">${food.strMeal}</h1>
        <p class="fw-bold">Ingredients: </p>

        <div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure1} ${food.strIngredient1} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure2} ${food.strIngredient2} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure3} ${food.strIngredient3} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure4} ${food.strIngredient4} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure5} ${food.strIngredient5} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure6} ${food.strIngredient6} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure7} ${food.strIngredient7} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure8} ${food.strIngredient8} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure9} ${food.strIngredient9} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure10} ${food.strIngredient10} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure11} ${food.strIngredient11} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure12} ${food.strIngredient12} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure13} ${food.strIngredient13} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure14} ${food.strIngredient14} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure15} ${food.strIngredient15} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure16} ${food.strIngredient16} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure17} ${food.strIngredient17} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure18} ${food.strIngredient18} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure19} ${food.strIngredient19} </label>
            </div>
            <div>
                <i class="fa fa-check-square checkbox"></i>
                <label>${food.strMeasure20} ${food.strIngredient20} </label>
            </div>

        </div>
    `;
    // ----------------Hide parentNode if no ingredient found----------------------------
    let labelNumber = document.getElementsByTagName('label');
    console.log(labelNumber);
    for (let i = 0; i < labelNumber.length; i++) {
        console.log(labelNumber[i].innerText);
        if (labelNumber[i].innerText == "") {
            labelNumber[i].parentNode.style.display = "none";
            // console.log(parent);
        } else {
            //console.log("no");
        }

    }
}

