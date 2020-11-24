import {useState} from 'react'

function Categories(props)
{
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
      };

    return(
        <div>
            {props.categories.map(function(category,index)
            {
                return <button className={isActive ? 'active-button': null} key={index} onClick={function(){
                    props.filteredItems(category)
                }}
                // onClick={toggleClass}
                >
                    {category} </button>
            })}
        </div>
    )
}

export default Categories