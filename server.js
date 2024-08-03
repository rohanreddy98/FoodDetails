const TimeToDelay = (ms) => {
    return new Promise((resolve) => {
        return setTimeout(resolve, ms)
    });
} 

const getFoodList = async () => {
    await TimeToDelay(115);
    return [
        { name: "Biryani", description: "Spicy rice dish", price: 250 },
        { name: "Samosa", description: "Evening snack", price: 20 }
    ];
};

const getFoodLocations = async () => {
    await TimeToDelay(120000);
    return [
        { name: "Biryani", locations: ["Restaurant A", "Restaurant B"] },
        { name: "Samosa", locations: ["Restaurant C"] }
    ];
};

const getFoodNutrition = async () => {
    await TimeToDelay(300);
    return [
        { name: "Biryani", calories: 500, protein: 25, fat: 20 },
        { name: "Samosa", calories: 150, protein: 4, fat: 8 }
    ];
};

const getStockOutFoods = async () => {
    await TimeToDelay(100);
    return ["Samosa"];
};

 const getMergedFoodData = async () => {
    const [foodList, foodLocations, foodNutrition, stockOutFoods] = await Promise.all([
        getFoodList(),
        getFoodLocations(),
        getFoodNutrition(),
        getStockOutFoods()
    ]);

    const mergedData = foodList.map(food => {
        const locations = foodLocations.find(loc => loc.name === food.name)?.locations || [];
        const nutrition = foodNutrition.find(nut => nut.name === food.name) || {};
        const isOutOfStock = stockOutFoods.includes(food.name);
        return { ...food, locations, nutrition, isOutOfStock };
    });

    return mergedData;
};

module.exports = { getMergedFoodData }