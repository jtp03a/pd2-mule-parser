import React, { useState, useEffect } from 'react';

function ViewMule() {

    const [mule, setMule] = useState([])
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [selectedItem, setSelectedItem] = useState()
    const [filter, setFilter] = useState({})

    useEffect(() => {

    }, []);

    const handleSelectedItem = (item, index) => {
        setSelectedItem(item);
        setCurrentIndex(index);
    };

    const filterList = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        console.log(e.target.value)
        //setFilter({ ...filter, value });
    }

    const parseFile = (e) => {
        let file = e.target.files[0]
        console.log(file)
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = () => {
            setMule(JSON.parse(reader.result))
        }
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div>
                    <h3>Mule</h3>
                    <input onChange={parseFile} type="file" id="mulefile" name="mulefile" />
                    <form onSubmit={filterList}> 
                        <input id="filter" name="filter" />
                    </form>
                    <ul className='list-group'>
                        {mule &&
                            mule.map((item, index) => (
                                <li
                                    className={"list-group-item " + (index === currentIndex ? "active" : "")}
                                    onClick={() => handleSelectedItem(item, index)}
                                    key={index}
                                    data-toggle="modal"
                                    data-target="#exampleModal"
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
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Item</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div>
                                        {selectedItem.name ?
                                            <p><label>Name:</label>{" " + selectedItem.name}</p>
                                            : <p>{""}</p>}
                                    </div>
                                    <div>
                                        {selectedItem.iLevel ?
                                            <p><label>iLevel:</label>{" " + selectedItem.iLevel}</p>
                                            : <p>{""}</p>}
                                    </div>
                                    <div>
                                        {selectedItem.quality ?
                                            <p><label>Quality:</label>{" " + selectedItem.quality}</p>
                                            : <p>{""}</p>}
                                    </div>
                                    <div>
                                        {selectedItem.type ?
                                            <p><label>Type:</label>{" " + selectedItem.type}</p>
                                            : <p>{""}</p>}
                                    </div>
                                    <div>
                                        {selectedItem.stats ?
                                            <>{selectedItem.stats.map(stat => <p>{stat.name}{": "}
                                                {stat.skill ? " " + stat.skill + " " : ""}
                                                {stat.value}
                                            </p>
                                            )}</>
                                            : <p>{""}</p>}
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (<div></div>)}
            </div>
        </div>
    )
}

export default ViewMule