import { useState } from "react";
import data from "./data.json"
import { FaTrashAlt } from "react-icons/fa"
// import { stringify } from "querystring-es3";

const Content1 = () => {
    const [items, setItems] = useState(data);

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        console.log(listItems);
        // localStorage = setItems('languageList', stringify(listItems));
    }
    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id ? { ...item } : null)
        setItems(listItems);

        console.log(listItems);
        console.log(id)
    }

    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)} />
                            <label style={item.checked ? { textDecoration: "line-through" } : null}
                                onDoubleClick={() => handleCheck(item.id)}>{item.name}</label>
                            <FaTrashAlt rule="button" tabIndex="0" onClick={() => handleDelete(item.id)} />
                        </li>
                    ))}
                </ul>
            ) : <h1>Item list is empty !!</h1>
            }
        </main>
    )
}

export default Content1;