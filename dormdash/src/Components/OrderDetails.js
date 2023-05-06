import { useEffect, useState } from 'react';

const OrderDetails = ({ menu }) => {
    const [items, setItems] = useState(null)

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('/')
            const json = await response.json()

            if (response.ok) {
                setItems(json)
            }
        }

        fetchItems()
    }, [])

    return (
        <select className="menu-details">
            {items && items.map((item) => (
                <option value={item._id}>{item.name} {item.price}</option>
            ))}
        </select>
    )
}

export default OrderDetails