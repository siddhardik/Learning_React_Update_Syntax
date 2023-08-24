import { useParams } from "react-router-dom"
function ItemDetails(){

    const params= useParams();

    return (
        <>
        <h1>Item Details</h1>

        <p>{params.id}</p>

        </>
    )
}

export default ItemDetails;