// meal.js

const getRandomMeal = () => {
    return new Promise((resolve, reject) => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => {
                console.log(err);
                reject(err);
            });
    });
};

const updateMeal = () => {
    getRandomMeal().then(resp => {
        let meal = resp?.meals[0];
        let mealElem = document.getElementById("mealDetail");
        let recipeElem = document.getElementById("recipeDetails");

        let titleElem = document.createElement('h2');
        let imageElem = document.createElement('img');
        let recipeInstructionsElem = document.createElement('p');

        imageElem.className = "mealImage";
        imageElem.src = meal?.strMealThumb;
        titleElem.innerText = meal.strMeal;
        recipeInstructionsElem.innerText = meal.strInstructions;

        mealElem.innerHTML = ''; // Clear previous content
        mealElem.appendChild(titleElem);
        mealElem.appendChild(imageElem);

        recipeElem.innerHTML = ''; // Clear previous content
        recipeElem.appendChild(recipeInstructionsElem);
    });
};

// Update the meal every 10 seconds (10000 milliseconds)
setInterval(updateMeal, 10000);

// Initial update
updateMeal();
