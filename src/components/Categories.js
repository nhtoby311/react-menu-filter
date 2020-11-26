import {useState} from 'react'

function Categories(props)
{
    const [value,setValue] = useState(0)            //'All' with 0 index as initial value 

    function setActive(index, value)
    {
        if (index === value)
        {
            return 'active-button'
        }
    }

    return(
        <div>
            {props.categories.map(function(category,index)
            {
                return <button className={setActive(index,value)} key={index} 
                onClick={function(){
                    setValue(index)
                    props.filteredItems(category)
                }}
                >
                    {category} </button>
            })}
        </div>
    )
}

export default Categories