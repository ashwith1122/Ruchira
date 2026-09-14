import React, { useContext, useEffect, useState } from 'react'
import ruchira136 from '../assets/ruchira136.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { CgEnter } from 'react-icons/cg'
import { color } from 'framer-motion'
import "./Addtocart.css";

function Addtocart() {
  function handleitem() {
    navigate("/payements")
  }

  // const items = [{ title: 'Chicken', amount: 2000, qnt: 1, image: ruchira136 }, { title: 'Mutton', amount: 2000, qnt: 1, image: ruchira136 }, { title: 'Biryani', amount: 2000, qnt: 1, image: ruchira136 }]

  const navigate = useNavigate()

  const { cartItems, removeItem, incrementQnt, decrementQnt } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.qnt,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.amount * item.qnt,
    0
  );

  const DeliveryFee = 44;

  const handleIncrement = (id) => {
    incrementQnt(id)
  }

  const handleDecrement = (id) => {
    decrementQnt(id)
  }

  const handleDeleteItem = (id) => {
    removeItem(id);
  }

  return (
    <div
      className="cart-container"
      style={{ height: '300px', backgroundRepeat: 'no-repeat', width: '1300px' }}
    >

      <div>

        <div
          className="cart-page-heading"
          style={{ backgroundColor: ' rgb(0, 0, 0)', height: '100px' }}
        >
          <h1
            style={{
              color: 'rgb(244, 111, 24)',
              textAlign: 'center',
              paddingTop: '17px'
            }}
          >
            Welcome to Cart  🛒
          </h1>
        </div>

        <div
          className="cart-main-section"
          style={{ display: 'flex' }}
        >

          <div
            className="cart-items-box"
            style={{
              border: '2px solid  rgb(244, 111, 24)',
              height: 'auto',
              width: '50%',
              marginLeft: '40px',
              borderRadius: '25px'
            }}
          >

            {totalItems > 0 ?

              <div
                className="cart-items-list"
                style={{
                  paddingLeft: '30px',
                  paddingTop: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '30px',
                  paddingBottom: '30px'
                }}
              >

                {
                  cartItems.map((curr) => (

                    <div
                      className="cart-item"
                      key={curr.id}
                      style={{
                        height: '200px',
                        width: ' 94 % ',
                        display: 'flex',
                        borderRadius: '25px'
                      }}
                    >

                      <div
                        className="cart-item-image"
                        style={{ width: '50%', height: '200px' }}
                      >

                        <img
                          src={curr.image}
                          style={{
                            width: '100%',
                            height: '200px',
                            borderRadius: '25px',
                            border: 'rgb(244, 111, 24) solid 2px'
                          }}
                        />

                      </div>

                      <div
                        className="cart-item-details"
                        style={{ width: '50%', height: '200px' }}
                      >

                        <h3
                          style={{
                            fontSize: '30px',
                            textAlign: 'center',
                            color: 'rgb(244, 111, 24)'
                          }}
                        >
                          <span style={{ color: 'white' }}>Name</span>: {curr.title}
                        </h3>

                        <h3
                          style={{
                            fontSize: '30px',
                            textAlign: 'center',
                            color: 'rgb(244, 111, 24)'
                          }}
                        >
                          <span style={{ color: 'white' }}>Price</span>: {curr.amount}
                        </h3>

                        <button
                          className="remove-item-btn"
                          style={{
                            width: '180px',
                            marginLeft: '40px',
                            height: '50px',
                            fontSize: '30px',
                            paddingBottom: '20px',
                            backgroundColor: 'rgb(224,111,24)',
                            borderRadius: '10px',
                            border: 'none',
                          }}
                          onClick={() => handleDeleteItem(curr.id)}
                        >
                          Remove
                        </button>

                        <div
                          className="quantity-controls"
                          style={{
                            marginLeft: '60px',
                            marginTop: '10px'
                          }}
                        >

                          <button
                            style={{
                              height: '40px',
                              width: '40px',
                              borderRadius: '50%',
                              border: 'none',
                              fontSize: '20px'
                            }}
                            onClick={() => handleIncrement(curr.id)}
                            disabled={curr.qnt >= 10 ? true : false}
                          >
                            +
                          </button>

                          <h3
                            style={{
                              display: 'inline-block',
                              color: 'white',
                              marginLeft: '20px',
                              width: '25px'
                            }}
                          >
                            {curr.qnt}
                          </h3>

                          <button
                            style={{
                              height: '40px',
                              width: '40px',
                              borderRadius: '50%',
                              border: 'none',
                              marginLeft: '20px',
                              fontSize: '20px'
                            }}
                            onClick={() => handleDecrement(curr.id)}
                            disabled={curr.qnt <= 0 ? true : false}
                          >
                            -
                          </button>

                        </div>

                      </div>

                    </div>

                  ))
                }

              </div>

              :

              <h1
                className="empty-cart-message"
                style={{
                  textAlign: ' Center ',
                  color: 'rgb(244,111,24)',
                  position: 'absolute',
                  top: '430px',
                  left: '210px',
                  fontSize: '50px'
                }}
              >
                Cart is Empty
              </h1>
            }

          </div>


          <div
            className="order-summary"
            style={{
              backgroundColor: '#0d0d0d',
              width: '40%',
              height: '450px',
              border: '1.5px solid #f46f17',
              borderRadius: '20px',
              padding: '30px',
              marginLeft: '40px'
            }}
          >

            <h1 style={{ textAlign: 'center', color: '#f46f17' }}>
              <u>Order Summary</u>
            </h1>

            <div style={{ marginTop: '20px' }}>

              <div>

                <h2>
                  Items :
                  <span
                    className="summary-value"
                    style={{
                      marginLeft: '230px',
                      color: 'rgb(254,101,24'
                    }}
                  >
                    {totalItems}
                  </span>
                </h2>

                <h2>
                  SubTotal :
                  <span
                    className="summary-value"
                    style={{
                      marginLeft: '185px',
                      color: 'rgb(254,101,24'
                    }}
                  >
                    {totalPrice}
                  </span>
                </h2>

                <h2>
                  DeliveryFee :
                  <span
                    className="summary-value"
                    style={{
                      marginLeft: '145px',
                      color: 'rgb(254,101,24'
                    }}
                  >
                    {totalItems == 0 ? 0 : 44}
                  </span>
                </h2>

              </div>

              <div className="summary-line">
                ----------------------------------------------------------------------------------------------------
              </div>

              <div
                style={{
                  marginTop: '20px',
                  marginBottom: '20px'
                }}
              >

                <h2>
                  Grand Total :
                  <span
                    className="summary-value"
                    style={{
                      marginLeft: '145px',
                      color: 'rgb(254,101,24'
                    }}
                  >
                    {totalItems == 0 ? 0 : totalPrice + DeliveryFee}
                  </span>
                </h2>

              </div>

              <div className="summary-line">
                ----------------------------------------------------------------------------------------------------
              </div>

              <div
                className="summary-buttons"
                style={{
                  display: 'flex',
                  gap: '70px',
                  marginTop: '10px'
                }}
              >

                <button
                  style={{
                    backgroundColor: '#f46f17',
                    fontSize: '20px',
                    font: '#000',
                    fontWeight: '400',
                    padding: '12px 25px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    border: 'none'
                  }}
                  onClick={() => navigate('/menu')}
                >
                  Add More Items
                </button>

                <button
                  style={{
                    backgroundColor: '#f46f17',
                    fontSize: '20px',
                    font: '#000',
                    fontWeight: '400',
                    padding: '12px 25px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    border: 'none'
                  }}
                  onClick={handleitem}
                >
                  Purchase Items
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Addtocart