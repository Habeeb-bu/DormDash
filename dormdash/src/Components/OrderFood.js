import React from 'react';
import '../orderfood.css';
import { useEffect, useState } from 'react';
import OrderDetails from './OrderDetails';

const OrderFood = () => {
  const [menus, setMenus] = useState(null)

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch('/')
      const json = await response.json()

      if (response.ok) {
        setMenus(json)
      }
    }

    fetchMenu()
  }, [])

  return (
    <>
      <form action='/api/orderconfirmed' method='POST'>
        <fieldset>
        <div>
          <p>Select Delivery Location</p>
          <select name="delivery" id="delivery" required>
            <option value="">--Select--</option>
            <option value="7800yr">7800 York Rd</option>
            <option value="barnes">Barnes Hall</option>
            <option value="burdick">Burdick</option>
            <option value="cfa">Center for the Arts</option>
            <option value="cook">Cook Library</option>
            <option value="glen">Glen Towers</option>
            <option value="hawkins">Hawkins Hall/Psychology Building</option>
            <option value="liberal">Liberal Arts Building</option>
            <option value="linthicum">Linthicum Hall</option>
            <option value="marshall">Marshall Hall</option>
            <option value="science">Science Complex</option>
            <option value="smith">Smith Hall</option>
            <option value="stephens">Stephens Hall</option>
            <option value="towson">Towson Run</option>
            <option value="union">University Union</option>
            <option value="vanbokkelen">Van Bokkelen Hall</option>
            <option value="westvillage">West Village Lawn</option>
            <option value="westvillagecommons">West Village Commons</option>
          </select>
        </div>

        <br/><br/><br/>

        <div>
          <p>Select Restaurant</p>
          <select name="restaurant" id="restaurant" required>
            <option value="">--Select--</option>
            <option value="raisingcanes">Raising Canes</option>
          </select>
        </div>

        <br/><br/><br/>

        <div id="menu">
          {menus && menus.map((menu) => (
            <OrderDetails key={menu._id} menu={menu} />
          ))}
        </div>

        <div id="card-info">
            <h5>Enter Credit Card Info</h5>
            <h6>Enter Name on Credit Card</h6>
            <input type='number' name='cardname' id='cardname' />
            <h6>Enter Credit Card Expiration Date</h6>
            <input type='number' name='cardname' id='cardname' />
            <h6>Enter Credit Card Security Code</h6>
            <input type='number' name='cardname' id='cardname' />
        </div>

        <div>
          <button type="submit">Submit Order</button>
        </div>
        </fieldset>
      </form>
    </>
  )
};

export default OrderFood;