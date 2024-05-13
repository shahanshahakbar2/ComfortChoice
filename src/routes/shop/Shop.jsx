import React from "react";
import "./shop.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl";

const Shop = () => {
  return (
    <>
      <div className="shop">
        <div className="browse">
          <div className="first1">
            <a href="#">Home</a>
            <RiArrowRightSLine size={25} />
            <a href="#">All Products</a>
          </div>
          <div className="first2">
            <p>Browse by</p>
          </div>
          <div className="first3">
            <a href="#">All Products</a>
          </div>
        </div>
        <div className="allProducts">
          <p>
            <b>All Products</b>
          </p>
          <p className="all">
            This is your category description. It’s a great place to tell
            customers what this category is about, connect with your audience
            and draw attention to your products.
          </p>
        </div>
      </div>
      <br />
      <div className="products7">
        <div className="productsNumber">
          <p>8 products</p>
        </div>
        <div className="sortBy">
          <p>
            Sort by : Recommended &nbsp;
            <a href="#">
              <SlArrowDown size={12} />
            </a>
          </p>
        </div>
      </div>
      <br />
      <div className="allCard">
        <div class="card">
          <img
            src="https://static.wixstatic.com/media/22e53e_b53f9a53db034e178a3f2d794ae70f1c~mv2.jpg/v1/fill/w_434,h_579,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_b53f9a53db034e178a3f2d794ae70f1c~mv2.jpg"
            alt="Product Image"
            class="product-image"
          />
          <div class="product-name">Product Name</div>
          <div class="product-price">&#8377; 40.00</div>
          <button class="add-to-cart-btn">Add to Cart</button>
        </div>
        <div class="card">
          <img
            src="https://static.wixstatic.com/media/22e53e_4f99aa57e6a04e6dbcdbfe474fc1654f~mv2.jpg/v1/fill/w_434,h_579,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_4f99aa57e6a04e6dbcdbfe474fc1654f~mv2.jpg"
            alt="Product Image"
            class="product-image"
          />
          <div class="product-name">Product Name</div>
          <div class="product-price">&#8377; 30.00</div>
          <button class="add-to-cart-btn">Add to Cart</button>
        </div>
        <div class="card">
          <img
            src="https://static.wixstatic.com/media/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg/v1/fill/w_434,h_579,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg"
            alt="Product Image"
            class="product-image"
          />
          <div class="product-name">Product Name</div>
          <div class="product-price">&#8377; 50.00</div>
          <button class="add-to-cart-btn">Add to Cart</button>
        </div>
        <div class="card">
          <img
            src="https://static.wixstatic.com/media/22e53e_1ede4ec9bbed46e4bad5859763fb4176~mv2.jpg/v1/fill/w_434,h_579,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_1ede4ec9bbed46e4bad5859763fb4176~mv2.jpg"
            alt="Product Image"
            class="product-image"
          />
          <div class="product-name">Product Name</div>
          <div class="product-price">&#8377; 40.00</div>
          <button class="add-to-cart-btn">Add to Cart</button>
        </div>
        <div class="card">
          <img
            src="https://static.wixstatic.com/media/22e53e_1addd1e1b4c64c9abd47dbc5f36d4b01~mv2.jpg/v1/fill/w_434,h_579,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_1addd1e1b4c64c9abd47dbc5f36d4b01~mv2.jpg"
            alt="Product Image"
            class="product-image"
          />
          <div class="product-name">Product Name</div>
          <div class="product-price">&#8377; 30.00</div>
          <button class="add-to-cart-btn">Add to Cart</button>
        </div>
        <div class="card">
          <img
            src="https://static.wixstatic.com/media/22e53e_4a271c0887d34ec6be04a8f3c870b869~mv2.jpg/v1/fill/w_434,h_579,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_4a271c0887d34ec6be04a8f3c870b869~mv2.jpg"
            alt="Product Image"
            class="product-image"
          />
          <div class="product-name">Product Name</div>
          <div class="product-price">&#8377; 60.00</div>
          <button class="add-to-cart-btn">Add to Cart</button>
        </div>
        <div class="card">
          <img
            src="https://static.wixstatic.com/media/22e53e_8adb0d7018b047e0a998acf987fd3fd6~mv2.jpg/v1/fill/w_434,h_579,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_8adb0d7018b047e0a998acf987fd3fd6~mv2.jpg"
            alt="Product Image"
            class="product-image"
          />
          <div class="product-name">Product Name</div>
          <div class="product-price">&#8377; 50.00</div>
          <button class="add-to-cart-btn">Add to Cart</button>
        </div>
        <div class="card">
          <img
            src="https://static.wixstatic.com/media/22e53e_4f99aa57e6a04e6dbcdbfe474fc1654f~mv2.jpg/v1/fill/w_434,h_579,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_4f99aa57e6a04e6dbcdbfe474fc1654f~mv2.jpg"
            alt="Product Image"
            class="product-image"
          />
          <div class="product-name">Product Name</div>
          <div class="product-price">&#8377; 40.00</div>
          <button class="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Shop;
