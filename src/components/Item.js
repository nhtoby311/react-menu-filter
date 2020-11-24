function Item(props)
{
    return(
        <div className="item"> 
            <div className="image" style={{backgroundImage: `url(${props.image})`}}></div>
            
            <div className="detail">
            <h2 className="title">{props.title}</h2>
            <h2 className="price">{props.price}$</h2>
            <p className="descrip">{props.desc}</p>
            </div>
        </div>
    )
}
export default Item