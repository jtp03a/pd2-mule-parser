import React, { useState, useEffect } from 'react';
import { axiosService } from '../axios.service'
import ItemDetail from './ItemDetail'

function ViewMule() {

    const [currentItemIndex, setCurrentItemIndex] = useState(-1)
    const [currentMuleIndex, setCurrentMuleIndex] = useState(-1)
    const [currentFoundItemIndex, setCurrentFoundItemIndex] = useState(-1)
    const [selectedItem, setSelectedItem] = useState()
    const [selectedMule, setSelectedMule] = useState()
    const [nameInput, setNameInput] = useState()
    const [mules, setMules] = useState([])
    const [foundItems, setFoundItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        retrieveMules()
    }, []);

    const retrieveMules = async () => {
        try {
            const { data } = await axiosService.get(`mules`);
            setMules(data)
        } catch (error) {

        }
    }

    const handleSelectedItem = (item, index) => {
        setSelectedItem(item);
        setCurrentItemIndex(index);
    };

    const handleSelectedFoundItem = (item, index) => {
        setSelectedItem(item.items);
        setCurrentFoundItemIndex(index);
    };

    const handleSelectedMule = (mule, index) => {
        setSelectedMule(mule);
        setCurrentMuleIndex(index);
    };

    const searchByName = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axiosService.post(`itemByName`, { name: nameInput.nameSearch });
            setFoundItems(data)
        } catch (error) {

        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNameInput({ ...nameInput, [name]: value });
    }

    const parseFile = async (e) => {
        let files = [...e.target.files]
        files.map(async (file, index) => {
            const reader = new FileReader()
            reader.readAsText(file)
            reader.onload = async () => {
                try {
                    const { data } = await axiosService.post(`mules`, { name: file.name.slice(0, -4), items: JSON.parse(reader.result) });
                    if (data) {
                        retrieveMules()
                    }
                } catch (error) {

                }
            }
        })
    }

    return (
        <div className="container d-flex justify-content-center">
            {loading ? <div>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div> : (
                    <div className="row">
                        <div className="col">
                            <h3>Search</h3>
                            <form onSubmit={searchByName}>
                                <label htmlFor="nameSearch">Item Name: </label>
                                <input id="nameSearch" name="nameSearch" onChange={handleInputChange} />
                            </form>
                            <ul className='list-group'>
                                {foundItems &&
                                    foundItems.map((item, index) => (
                                        <li
                                            className={"list-group-item " + (index === currentFoundItemIndex ? "active" : "")}
                                            onClick={() => handleSelectedFoundItem(item, index)}
                                            key={index}
                                            data-toggle="modal"
                                            data-target="#itemDetail"
                                        >
                                            {item.isRuneword ? <p>{item.runeword}</p> :
                                                (item.name ? <p>{item.name + " "}</p> : <p>{" "}</p>)}
                                            <p><strong>{item.items.name}</strong></p>
                                            <p>{item.quality}</p>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div className="col">
                            <h3>Mule</h3>
                            <input onChange={parseFile} type="file" id="mulefile" name="mulefile" multiple />

                            <ul className='list-group'>
                                {mules &&
                                    mules.map((mule, index) => (
                                        <li
                                            className={"list-group-item " + (index === currentMuleIndex ? "active" : "")}
                                            onClick={() => handleSelectedMule(mule, index)}
                                            key={index}
                                        >
                                            <p><strong>{mule.name}</strong></p>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div className="col">
                            <h3>Items</h3>
                            <ul className='list-group'>
                                {selectedMule &&
                                    selectedMule.items.map((item, index) => (
                                        <li
                                            className={"list-group-item " + (index === currentItemIndex ? "active" : "")}
                                            onClick={() => handleSelectedItem(item, index)}
                                            key={index}
                                            data-toggle="modal"
                                            data-target="#itemDetail"
                                        >
                                            {item.isRuneword ? <p>{item.runeword}</p> :
                                                (item.name ? <p>{item.name + " "}</p> : <p>{" "}</p>)}
                                            <p><strong>{item.type}</strong></p>
                                            <p>{item.quality}</p>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        {selectedItem ? (
                            <div>
                                <ItemDetail selectedItem={selectedItem} />
                            </div>
                        ) : (<div></div>)}
                    </div>
                )}
        </div>
    )
}

export default ViewMule