export async function getStaticPaths() {
  const fs = require("fs");
  const path = require("path");
  const pathDir = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "data",
    "data.json"
  );
  const data = JSON.parse(fs.readFileSync(pathDir, "utf8")).map((category) => ({
    params: { id: category.id.toString() },
  }));

  return {
    paths: data,
    fallback: false,
  };
}

// import React from 'react'
import styles from "../../styles/treatment.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ContextApi } from "../../components/context";
import { useContext, useEffect, useState } from "react";

function Treatment({ data }) {
  //states
  const { carts, setCarts, consultation, cartStorageName } =
    useContext(ContextApi);
  const [volume, setVolume] = useState(2);
  const [formName, setFormName] = useState(null);
  const [formCompleted, setFormCompleted] = useState(false);

  const route = useRouter();

  //sets the name of form this page supposed to refer to using an algorithm
  function formNameHandler() {
    const names = data.name.split(" ");
    if (names.length > 1) {
      let secondL = names[1][0].toUpperCase();
      let secondR = names[1].slice(1).toLowerCase();
      const newWord = names[0].toLowerCase() + secondL + secondR;
      setFormName(() => newWord);
      return;
    }
    const realName = names[0].toLowerCase();
    setFormName(() => realName);
  }

  //it directs the user to the specified form
  function formPage() {
    route.push("/form/" + formName);
  }

  //sets the number or quantity of a particular item and can be changed anytime
  function quantityHandler(amount) {
    setVolume(() => amount);
  }
  //lets the user add items to cart
  function cartHandler(item) {
    const obj = {
      imageURL: item.imageURL,
      productName: item.productName,
      price: item.price,
      quantity: volume,
    };
    //adds to cart depending on weather cart is null or already got items
    !carts ? setCarts(() => [obj]) : setCarts(() => [...carts, obj]);
  }
  //checks if form is completed and gives either a red or green light to this page
  function isFormCompleted() {
    if (!consultation) return;
    formName in consultation ? setFormCompleted(true) : setFormCompleted(false);
  }

  useEffect(() => {
    formNameHandler();
    isFormCompleted();
  });
  // useEffect(()=>{
  // },[])
  return (
    <div id={styles.mainContent}>
      <aside id={styles.asideContent}>
        
        
        <h3>Please fill out the consultation log to its entirety to be able to add the reccomended medications to your cart.  </h3>
      </aside>
      <main>
        <div id={styles.consultSection}>
          {!formCompleted && (
            <>
              <div id={styles.header}>
                <h3 onClick={formPage} id={styles.openFormBtn}>
                  START {data.name} CONSULTATION
                </h3>
                <p>
                  Dear Guest, click here to login & review a previous health
                  consultation. You will get a free prescription issued by our
                  doctors.
                </p>
              </div>
              <p>
                <b>Note :</b> By continuing with this order, you confirm that
                you are over the age of 18 and have the mental capacity to make
                decisions for your health.If your consultation is approved, you
                will be offered treatment for you and the prescriber to jointly
                consider. However, the final decision always will be the
                prescriber's.
              </p>
            </>
          )}
          {formCompleted && (
            <div id={styles.formCompletedText}>
              <h2>
                Select & add a product to <span>cart</span> from the list below.
              </h2>
              <p>Consultation completed successfully.</p>
            </div>
          )}
        </div>
        <div id={styles.productSection}>
          {data.items.map((item, index) => (
            <div
              key={Math.floor(Math.random() * 1000000 * 35672)}
              className={styles.product}
            >
              <Image
                alt={item.productName}
                width={150}
                height={150}
                src={"/products/" + item.imageURL}
              />
              <div className={styles.infor}>
                <div className="name">
                  <p id={styles.nameOfTreatment}>{item.treatmentName}</p>
                  <p id={styles.nameOfProduct}>{item.productName}</p>
                </div>
                {formCompleted && (
                  <div id={styles.quantityContainer}>
                    <span>Quantity :</span>{" "}
                    <select
                      onChange={(e) => {
                        const value = e.target.value;
                        quantityHandler(value);
                      }}
                      id={styles.quantity}
                    >
                      <option value="2">2</option>
                      <option value="4">4</option>
                      <option value="8">8</option>
                    </select>
                  </div>
                )}
                <div id={styles.price}>
                  <p>From R{item.price}</p>
                </div>
                {formCompleted && (
                  <>
                    {carts !== null &&
                      carts.find(
                        (ele) =>
                          ele.productName === item.productName &&
                          ele.imageURL === item.imageURL
                      ) === undefined && (
                        <div id={styles.addToCart}>
                          <button onClick={() => cartHandler(item)}>
                            Add to cart
                          </button>
                        </div>
                      )}
                    {carts === null && (
                      <div id={styles.addToCart}>
                        <button onClick={() => cartHandler(item)}>
                          Add to cart
                        </button>
                      </div>
                    )}

                    {carts !== null &&
                      carts.find(
                        (ele) =>
                          ele.productName === item.productName &&
                          ele.imageURL === item.imageURL
                      ) !== undefined && (
                        <div id={styles.addToCart}>
                          <button style={{ background: "green" }}>
                            already added
                          </button>
                        </div>
                      )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Treatment;

export async function getStaticProps({ params }) {
  const fs = require("fs");
  const path = require("path");
  const pathDir = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "..",
    "data",
    "data.json"
  );

  const data = JSON.parse(fs.readFileSync(pathDir, "utf8"));
  const item = data.find((item) => item.id == params.id);
  return {
    props: { data: item },
  };
}
