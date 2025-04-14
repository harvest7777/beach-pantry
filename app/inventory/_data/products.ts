export interface Product {
  id: number;
  name: string;
  quantity: number;
  calories: number;
  sugarGrams: number;
  servingsPer: number;
  carbohydratesGrams: number;
  proteinGrams: number;
  isVegan?: boolean;
  isDairyFree?: boolean;
  isHighProtein?: boolean;
  isGlutenFree?: boolean;
}
export const products: Product[] = [
  { id: 1, name: 'Apples', quantity: 10, calories: 95, sugarGrams: 19, servingsPer: 1, carbohydratesGrams: 25, proteinGrams: 0.5, isVegan: true, isDairyFree: true },
  { id: 2, name: 'Bananas', quantity: 5, calories: 105, sugarGrams: 14, servingsPer: 1, carbohydratesGrams: 27, proteinGrams: 1.3, isVegan: true, isDairyFree: true },
  { id: 3, name: 'Carrots', quantity: 7, calories: 41, sugarGrams: 5, servingsPer: 1, carbohydratesGrams: 10, proteinGrams: 0.9, isVegan: true, isDairyFree: true },
  { id: 4, name: 'Milk', quantity: 0, calories: 150, sugarGrams: 12, servingsPer: 1, carbohydratesGrams: 12, proteinGrams: 8, isDairyFree: false },
  { id: 5, name: 'Oranges', quantity: 15, calories: 62, sugarGrams: 12, servingsPer: 1, carbohydratesGrams: 15, proteinGrams: 1.2, isVegan: true, isDairyFree: true },
  { id: 6, name: 'Grapes', quantity: 3, calories: 104, sugarGrams: 23, servingsPer: 1, carbohydratesGrams: 27, proteinGrams: 1.1, isVegan: true, isDairyFree: true },
  { id: 7, name: 'Peaches', quantity: 8, calories: 58, sugarGrams: 13, servingsPer: 1, carbohydratesGrams: 14, proteinGrams: 1, isVegan: true, isDairyFree: true },
  { id: 8, name: 'Strawberries', quantity: 20, calories: 32, sugarGrams: 7, servingsPer: 1, carbohydratesGrams: 8, proteinGrams: 0.7, isVegan: true, isDairyFree: true },
  { id: 9, name: 'Lettuce', quantity: 12, calories: 5, sugarGrams: 0.5, servingsPer: 1, carbohydratesGrams: 1, proteinGrams: 0.5, isVegan: true, isDairyFree: true },
  { id: 10, name: 'Spinach', quantity: 4, calories: 23, sugarGrams: 0.4, servingsPer: 1, carbohydratesGrams: 3.6, proteinGrams: 2.9, isVegan: true, isDairyFree: true },
  { id: 11, name: 'Tomatoes', quantity: 6, calories: 22, sugarGrams: 4, servingsPer: 1, carbohydratesGrams: 4.8, proteinGrams: 1.1, isVegan: true, isDairyFree: true },
  { id: 12, name: 'Potatoes', quantity: 10, calories: 130, sugarGrams: 1, servingsPer: 1, carbohydratesGrams: 30, proteinGrams: 3, isVegan: true, isDairyFree: true },
  { id: 13, name: 'Onions', quantity: 5, calories: 40, sugarGrams: 4, servingsPer: 1, carbohydratesGrams: 9, proteinGrams: 1.1, isVegan: true, isDairyFree: true },
  { id: 14, name: 'Cucumbers', quantity: 9, calories: 16, sugarGrams: 1.7, servingsPer: 1, carbohydratesGrams: 3.8, proteinGrams: 0.7, isVegan: true, isDairyFree: true },
  { id: 15, name: 'Bell Peppers', quantity: 3, calories: 24, sugarGrams: 4.6, servingsPer: 1, carbohydratesGrams: 5.5, proteinGrams: 1, isVegan: true, isDairyFree: true },
  { id: 16, name: 'Avocados', quantity: 11, calories: 240, sugarGrams: 0.2, servingsPer: 1, carbohydratesGrams: 12, proteinGrams: 3, isVegan: true, isDairyFree: true, isHighProtein: true },
  { id: 17, name: 'Cantaloupe', quantity: 4, calories: 53, sugarGrams: 13, servingsPer: 1, carbohydratesGrams: 13, proteinGrams: 1.3, isVegan: true, isDairyFree: true },
  { id: 18, name: 'Watermelon', quantity: 7, calories: 30, sugarGrams: 6, servingsPer: 1, carbohydratesGrams: 8, proteinGrams: 0.6, isVegan: true, isDairyFree: true },
  { id: 19, name: 'Pineapple', quantity: 2, calories: 82, sugarGrams: 16, servingsPer: 1, carbohydratesGrams: 22, proteinGrams: 0.9, isVegan: true, isDairyFree: true },
  { id: 20, name: 'Mango', quantity: 8, calories: 99, sugarGrams: 23, servingsPer: 1, carbohydratesGrams: 25, proteinGrams: 0.8, isVegan: true, isDairyFree: true },
  { id: 21, name: 'Blueberries', quantity: 6, calories: 57, sugarGrams: 10, servingsPer: 1, carbohydratesGrams: 14, proteinGrams: 0.7, isVegan: true, isDairyFree: true },
  { id: 22, name: 'Raspberries', quantity: 10, calories: 52, sugarGrams: 4, servingsPer: 1, carbohydratesGrams: 12, proteinGrams: 1.5, isVegan: true, isDairyFree: true },
  { id: 23, name: 'Cherries', quantity: 9, calories: 87, sugarGrams: 18, servingsPer: 1, carbohydratesGrams: 22, proteinGrams: 1.5, isVegan: true, isDairyFree: true },
  { id: 24, name: 'Peas', quantity: 13, calories: 62, sugarGrams: 3.6, servingsPer: 1, carbohydratesGrams: 11, proteinGrams: 4.2, isVegan: true, isDairyFree: true, isHighProtein: true },
  { id: 25, name: 'Kale', quantity: 5, calories: 33, sugarGrams: 1.2, servingsPer: 1, carbohydratesGrams: 6, proteinGrams: 2.9, isVegan: true, isDairyFree: true },
  { id: 26, name: 'Zucchini', quantity: 12, calories: 17, sugarGrams: 3.2, servingsPer: 1, carbohydratesGrams: 3.9, proteinGrams: 1.2, isVegan: true, isDairyFree: true },
  { id: 27, name: 'Eggplant', quantity: 4, calories: 35, sugarGrams: 3.2, servingsPer: 1, carbohydratesGrams: 8, proteinGrams: 0.8, isVegan: true, isDairyFree: true },
  { id: 28, name: 'Sweet Potatoes', quantity: 15, calories: 112, sugarGrams: 4, servingsPer: 1, carbohydratesGrams: 26, proteinGrams: 2, isVegan: true, isDairyFree: true },
  { id: 29, name: 'Asparagus', quantity: 6, calories: 27, sugarGrams: 1.5, servingsPer: 1, carbohydratesGrams: 5, proteinGrams: 3, isVegan: true, isDairyFree: true, isHighProtein: true },
  { id: 30, name: 'Cauliflower', quantity: 3, calories: 25, sugarGrams: 1.9, servingsPer: 1, carbohydratesGrams: 5, proteinGrams: 2, isVegan: true, isDairyFree: true },
];

