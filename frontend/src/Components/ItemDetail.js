import React from 'react';

function ItemDetail(props) {
    return (
        <div className="modal fade" id="itemDetail" tabIndex="-1" role="dialog" aria-labelledby="itemDetailLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="itemDetailLabel">Item</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div>
                            {props.selectedItem.name ?
                                <p><label>Name:</label>{" " + props.selectedItem.name}</p>
                                : <p>{""}</p>}
                        </div>
                        <div>
                            {props.selectedItem.iLevel ?
                                <p><label>iLevel:</label>{" " + props.selectedItem.iLevel}</p>
                                : <p>{""}</p>}
                        </div>
                        <div>
                            {props.selectedItem.quality ?
                                <p><label>Quality:</label>{" " + props.selectedItem.quality}</p>
                                : <p>{""}</p>}
                        </div>
                        <div>
                            {props.selectedItem.type ?
                                <p><label>Type:</label>{" " + props.selectedItem.type}</p>
                                : <p>{""}</p>}
                        </div>
                        <div>
                            {props.selectedItem.stats ?
                                <>{props.selectedItem.stats.map(stat => <p>{stat.name}{": "}
                                    {stat.skill ? " " + stat.skill + " " : ""}
                                    {stat.value}
                                </p>
                                )}</>
                                : <p>{""}</p>}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail