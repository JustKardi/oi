const clothes = [
    { name: 'Heavy coat', minTemp: -50, maxTemp: 0, description: 'Add gloves and a warm hat.' },
    { name: 'Warm jacket', minTemp: 1, maxTemp: 10, description: 'Layer with a scarf or sweater.' },
    { name: 'Light jacket', minTemp: 11, maxTemp: 18, description: 'A hoodie or cardigan works well.' },
    { name: 'Long sleeve shirt', minTemp: 19, maxTemp: 22, description: 'Comfortable for cool but mild weather.' },
    { name: 'T-shirt', minTemp: 23, maxTemp: 27, description: 'Perfect for warm, sunny days.' },
    { name: 'Shorts', minTemp: 28, maxTemp: 50, description: 'Wear lightweight clothes and stay cool.' }
];

const temperatureInput = document.getElementById('temperature');
const recommendationEl = document.getElementById('recommendation');
const recommendBtn = document.getElementById('recommendBtn');

function getClothingRecommendation(temperature) {
    const matchedClothes = clothes.filter(item => temperature >= item.minTemp && temperature <= item.maxTemp);
    if (matchedClothes.length === 0) {
        return 'No matching clothing recommendations found for that temperature.';
    }

    return matchedClothes
        .map(item => `${item.name}: ${item.description}`)
        .join('\n');
}

function showRecommendation() {
    const tempValue = parseFloat(temperatureInput.value.trim());

    if (Number.isNaN(tempValue)) {
        recommendationEl.textContent = 'Please enter a valid numeric temperature.';
        recommendationEl.className = 'error';
        return;
    }

    const recommendation = getClothingRecommendation(tempValue);
    recommendationEl.innerHTML = recommendation.replace(/\n/g, '<br>');
    recommendationEl.className = 'result';
}

recommendBtn.addEventListener('click', showRecommendation);
