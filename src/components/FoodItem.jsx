import React from "react";
import styles from "./FoodItem.module.css";

const FoodItem = ({ food, setFoodId }) => {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" srcset="" />
      <div className={styles.itemContent}></div>
      <p className={styles.itemName}>{food.title}</p>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
              setFoodId(food.id)
              console.log(food.id);
          }}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
