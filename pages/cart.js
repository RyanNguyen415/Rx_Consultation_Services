import Image from "next/image";
import styles from "../styles/cart.module.css";
import { ContextApi } from "../components/context";
import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

function Cart() {
  const { carts, setCarts } = useContext(ContextApi);
  // console.log(carts)

  function randomId() {
    return (
      Math.floor(Math.random() * 100000000) +
      Math.floor(Math.random() * 100000000)
    );
  }
  function priceHandler(amount, item) {
    item.quantity = amount;
    setCarts(() => [...carts]);
    // console.log(amount)
  }
  function setHandler(amount, cost) {
    const volume = parseInt(amount);
    const price = parseFloat(cost);

    return (volume * price).toFixed(2);
  }

  return (
    <div id={styles.container}>
      {carts && (
        <div id={styles.main}>
          <div id={styles.items}>
            {carts.map((item) => (
              <div key={randomId()} id={styles.product}>
                <div id={styles.firstBox}>
                  <Image
                    alt=""
                    priority
                    src={"/products/" + item.imageURL}
                    width={70}
                    height={70}
                  />
                  <p className="productName">{item.productName}</p>
                </div>
                <div id={styles.secondBox}>
                  <div id={styles.quantityContainer}>
                    <label>
                      <span>Quantity :</span>
                      <select
                        value={item.quantity}
                        onChange={(e) => {
                          const value = e.target.value;
                          priceHandler(value, item);
                        }}
                      >
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="8">8</option>
                      </select>
                    </label>
                  </div>
                  <div id={styles.priceContainer}>
                    <p>Price :</p>
                    <p>R{setHandler(item.quantity, item.price)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {!carts && (
        <div id={styles.noItems}>
          <h1>Your cart is empty</h1>
          <p>
            <a>Please select products to add before checkout</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Cart;
