import React from 'react';

const OrderFood = () => {
  return (
    <>
      <form action='/api/orderconfirmed' method='POST'>
        <fieldset>
        <div>
          <p>Select Delivery Location</p>
          <select name="delivery" id="" required>
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
          <select name="restaurant" id="" required onSelect={getMenu()}>
            <option value="">--Select--</option>
            <option value="raisingcanes">Raising Canes</option>
          </select>
        </div>

        <br/><br/><br/>

        <menu id="menu"></menu>

        <div>
          <button type="submit">Submit Order</button>
        </div>
        </fieldset>
      </form>
    </>
  )
};

async function getMenu() {
  const response = await fetch();
  const data = await response.json();

  const dropdown = document.getElementById('menu');

  for (const collection of data) {
    if (collection.name === "Orders") {
      continue
    }

    dropdown.innerHTML += `
      <select name=${collection.name} id=${collection.name}>
    `

    for (const item of collection) {
      dropdown.innerHTML += `
        <option value=${item.name}>${item.name} + ${item.price}</option>
      `
    }

    dropdown.innerHTML += '</select>'
  }
}

export default OrderFood;