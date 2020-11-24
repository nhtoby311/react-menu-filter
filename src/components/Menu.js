import Item from './Item'
import Categories from './Categories'
function List(props)
{
    return(
        <div>
            <h1 className="program-name">Menü Filter</h1>
            <Categories categories ={props.categories} filteredItems={props.filteredItems}/>
            <div className="items-container">

            {props.items.map(function(item)
                {
                    return <Item key={item.id} title={item.title} price={item.price} image={item.img} desc={item.desc} />
                })
            }
            
            </div>
        </div>
    );
}

export default List