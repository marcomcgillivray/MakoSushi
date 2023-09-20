import { useState } from 'react';
import { useCart } from '../CartContext';
import Sashimi from '../assets/sashimi.webp';
import Platter from '../assets/platter.jpeg';
import California from '../assets/california.jpeg';
import Dragon from '../assets/dragon.jpeg';
import Tuna from '../assets/tuna.jpeg';
import Nigiri from '../assets/nigiri.jpeg';
import Shrimp from '../assets/shrimp.webp';
import Miso from '../assets/miso.jpeg';
import Edamame from '../assets/edamame.jpeg';
import Rainbow from '../assets/rainbow.jpeg';
import EbiNigiri from '../assets/ebinigiri.avif';
import Avocado from '../assets/avocado.jpeg';


const Products = ({meal}) => {
    const [all, setAll] = useState(true);
    const [lunch, setLunch] = useState(false);
    const [dinner, setDinner] = useState(false);
    const [snacks, setSnacks] = useState(false);
    const { dispatch } = useCart();



    const allHandler = e => {
        e.preventDefault();
        setAll(true);
        setLunch(false);
        setDinner(false);
        setSnacks(false);
    }

    const lunchHandler = e => {
        e.preventDefault();
        setAll(false);
        setLunch(true);
        setDinner(false);
        setSnacks(false);
    };

    const dinnerHandler = e => {
        e.preventDefault();
        setAll(false);
        setLunch(false);
        setDinner(true);
        setSnacks(false);
    };

    const snacksHandler = e => {
        e.preventDefault();
        setAll(false);
        setLunch(false);
        setDinner(false);
        setSnacks(true);
    };


    const MEALS = [
        {
          id: 'm1',
          name: 'Sushi Deluxe',
          description: 'A premium selection of sushi rolls.',
          fullDescription: 'A premium selection of sushi rolls with the finest ingredients.',
          price: 45,
          image: Platter,
          tags: 'Dinner'
        },
        {
          id: 'm2',
          name: 'Tuna Sashimi',
          description: 'Fresh slices of Tuna sashimi.',
          fullDescription: 'Fresh slices of Tuna sashimi with a side of wasabi and soy sauce.',
          price: 22,
          image: Sashimi,
          tags: 'Dinner'
        },
        {
          id: 'm3',
          name: 'California Roll',
          description: 'Crab, avocado, and cucumber rolled in seaweed.',
          fullDescription: 'A classic California roll with a delicious combination of ingredients.',
          price: 12,
          image: California,
          tags: 'Dinner'
        },
        {
          id: 'm4',
          name: 'Dragon Roll',
          description: 'Eel, cucumber, and avocado topped with avocado slices.',
          fullDescription: 'A mouthwatering Dragon roll with an eel and avocado combination.',
          price: 15,
          image: Dragon,
          tags: 'Lunch'
        },
        {
          id: 'm5',
          name: 'Spicy Tuna Roll',
          description: 'Tuna, spicy mayo, and cucumber rolled in seaweed.',
          fullDescription: 'A spicy tuna roll with a kick of flavor from spicy mayo.',
          price: 15,
          image: Tuna,
          tags: 'Dinner'
        },
        {
          id: 'm6',
          name: 'Salmon Nigiri',
          description: 'Fresh salmon slices on beds of sushi rice.',
          fullDescription: 'Delicate salmon nigiri with tender salmon and perfectly seasoned rice.',
          price: 12,
          image: Nigiri,
          tags: 'Lunch'
        },
        {
          id: 'm7',
          name: 'Shrimp Tempura',
          description: ' Shrimp in a crispy tempura batter.',
          fullDescription: 'Crispy and delicious Shrimp tempura with a dipping sauce.',
          price: 11,
          image: Shrimp,
          tags: 'Snacks'
        },
        {
          id: 'm8',
          name: 'Miso Soup',
          description: 'Traditional Japanese soybean soup with tofu and seaweed.',
          fullDescription: 'A warm and comforting bowl of miso soup.',
          price: 4,
          image: Miso,
          tags: 'Lunch'
        },
        {
          id: 'm9',
          name: 'Edamame',
          description: 'Steamed young soybeans with sea salt.',
          fullDescription: 'A healthy and savory appetizer of steamed edamame.',
          price: 6,
          image: Edamame,
          tags: 'Snacks'
        },
        {
          id: 'm10',
          name: 'Rainbow Roll',
          description: 'Assorted fish and avocado on a California roll.',
          fullDescription: 'A colorful and delightful Rainbow roll with various fish toppings.',
          price: 15,
          image: Rainbow,
          tags: 'Dinner'
        },
        {
          id: 'm11',
          name: 'Ebi Nigiri',
          description: 'Cooked shrimp on beds of sushi rice.',
          fullDescription: 'Delicious ebi nigiri with perfectly cooked shrimp.',
          price: 13,
          image: EbiNigiri,
          tags: 'Lunch'
        },
        {
          id: 'm12',
          name: 'Avocado Roll',
          description: 'Fresh avocado slices rolled in seaweed.',
          fullDescription: 'A simple and healthy avocado roll.',
          price: 11,
          image: Avocado,
          tags: 'Snacks'
        },
      ];

      const addToCart = (meal) => { // Pass the 'meal' object as an argument
        // Dispatch an action to add the item to the cart
        dispatch({ type: 'ADD_TO_CART', payload: meal });
        alert(`${meal.name} added to cart`)
      };



      const mealsTemplate = (course) => {
        return (
        <div className='meals'>
      {course.map((meal) => (
                          
          <div key={meal.id}>
              <div className='card'>
                  <div className='image'>
                      <img src={meal.image} alt={meal.name}></img>
                      </div>
                      <div className='content'>
                          <div className='meta'>
              <h3>
                  {meal.name}
              </h3>
              <p>
                  <strong>
                      ${meal.price}
                  </strong>
              </p>
              </div>
              <p>
                  {meal.description}
              </p>


              <button 
              className='button-solid'
              onClick={() => addToCart(meal)}>
                  Add to Cart
              </button>
              </div>
              </div>
      </div>
      ))}
      </div>
      )}
      
      const allMealsRendered = mealsTemplate(MEALS);
      const lunchMeals = MEALS.filter(meal => meal.tags === 'Lunch');
      const lunchMealsRendered = mealsTemplate(lunchMeals);
      const dinnerMeals = MEALS.filter(meal => meal.tags === 'Dinner');
      const dinnerMealsRendered = mealsTemplate(dinnerMeals);
      const snackMeals = MEALS.filter(meal => meal.tags === 'Snacks');
      const snacksRendered = mealsTemplate(snackMeals);


    return (
        <section id='products'>
            <div className='container'>
                <h1>Order Online</h1>
                <div className='filter'>
                <button 
                    className={all ? 'filter-btn' : 'filter-disabled'}
                    onClick={allHandler}>
                        All
                    </button>
                    <button 
                    className={lunch ? 'filter-btn' : 'filter-disabled'}
                    onClick={lunchHandler}>
                        Lunch
                    </button>
                    <button 
                    className={dinner ? 'filter-btn' : 'filter-disabled'}
                    onClick={dinnerHandler}>
                        Dinner
                    </button>
                    <button 
                    className={snacks ? 'filter-btn' : 'filter-disabled'}
                    onClick={snacksHandler}>
                        Extras
                    </button>
                </div>

                {all && allMealsRendered}

                {lunch && lunchMealsRendered}

                {dinner && dinnerMealsRendered}

                {snacks && snacksRendered}


            </div>
        </section>
    )
};

export default Products;