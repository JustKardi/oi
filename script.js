const clothes = [
    { name: 'Heavy coat', minTemp: -50, maxTemp: 0, description: 'Add gloves and a warm hat.' },
    { name: 'Warm jacket', minTemp: 1, maxTemp: 10, description: 'Layer with a scarf or sweater.' },
    { name: 'Light jacket', minTemp: 11, maxTemp: 18, description: 'A hoodie or cardigan works well.' },
    { name: 'Long sleeve shirt', minTemp: 19, maxTemp: 22, description: 'Comfortable for cool but mild weather.' },
    { name: 'T-shirt', minTemp: 23, maxTemp: 27, description: 'Perfect for warm, sunny days.' },
    { name: 'Shorts', minTemp: 28, maxTemp: 50, description: 'Wear lightweight clothes and stay cool.' }
];

const input = document.getElementById('temperature');
const rec = document.getElementById('recommendation');
const btn = document.getElementById('recommendBtn');

function getClothingRecommendation(temperature) {
    
    const matchedClothes = clothes.filter(item => temperature >= item.minTemp && temperature <= item.maxTemp);

    return matchedClothes.map(item => `${item.name}: ${item.description}`).join('\n');
}

function showRecommendation() {
    const temp = parseFloat(input.value.trim());

    const recommendation = getClothingRecommendation(temp);
    rec.innerHTML = recommendation.replace(/\n/g, '<br>');
    rec.className = 'result';
}

btn.addEventListener('click', showRecommendation);
