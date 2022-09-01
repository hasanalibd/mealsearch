const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = (meals) => {
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML =``;
    for(const meal of meals){
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 300)}</p>
            </div>
        </div>
        `;
        mealsContainer.appendChild(mealDiv)
    }
}

const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMeals(searchText);
    searchField.value = '';
}

loadMeals('a');

