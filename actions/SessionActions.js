// Use the id to identify the food
export const addFoodToCart = foodId => ({
  type: 'ADD_FOOD_TO_CART',
  payload: foodId,
});

export const logIn = (user, password) => ({
  type: 'LOG_IN',
  payload: {user, password},
});
