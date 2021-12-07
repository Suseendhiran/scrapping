import React from "react";

function Index({ product }) {
  return (
    <>
      {/* <div className="productWrapper">
      <img
        src="https://m.media-amazon.com/images/I/71hmqIQJFdL._AC_UY218_.jpg"
        alt="prod"
        className="productImage"
      />
      <div className="productDetails">
        <h4>
          HP Pavilion (2021) Intel 11th Gen Core i5 14 inches FHD Screen Thin
          Light Laptop, 16GB RAM, 512GB SSD, Iris Xe Graphics, Windows 11, MS
          Office, Backlit Keyboard, 1.41kg, Natural Silver (14-dv0054TU)
        </h4>
        <div>
          <p>
            <strong>Rating</strong> : <span>4.4 out of 5 stars</span>
          </p>
        </div>
        <div>
          <p className="offerPrice">
            <strong>Price</strong>: ₹66,990{" "}
            <span className="actualPrice">
              <del>₹72,990</del>
            </span>
          </p>
        </div>
        <p className="productSource">
          {" "}
          <strong>Source</strong>: Amazon
        </p>
      </div>
    </div> */}
      <a
        className="productWrapper"
        key={product._id}
        href={product.link}
        target="_blank"
        rel="noreferrer"
      >
        <img src={product.image} alt="prod" className="productImage" />
        <div className="productDetails">
          <h4>{product.name}</h4>
          <div>
            <p>
              <strong>Rating</strong> : <span>{product.rating}</span>
            </p>
          </div>
          <div>
            <p className="offerPrice">
              <strong>Price</strong>: {product.priceWithOffer}{" "}
              <span className="actualPrice">
                <del>{product.price}</del>
              </span>
            </p>
          </div>
          <p className="productSource">
            {" "}
            <strong>Source</strong>: {product.source}
          </p>
        </div>
      </a>
    </>
  );
}

export default Index;
