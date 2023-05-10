import { useState } from "react";
import data from "./data.json"
import {FaTrashAlt} from "react-icons/fa"

const Content1 = () => {
    const [items, setItems] = useState(data);

    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input type="checkbox" checked={item.checked} />
                        <label>{item.name}</label>
                        <FaTrashAlt rule="button" Labindex="0" />
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Content1;