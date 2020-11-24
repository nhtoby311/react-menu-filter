import {useState, useEffect} from 'react'
import './App.css';
import Menu from './components/Menu'
import Categories from './components/Categories'
import Item from './components/Item'
import list from './data/data'  




function App() {


  const [menuItems,setMenuItems] = useState(list) 
  const [categories,setCategories] = useState([]) 
  
  useEffect(() => {
    const allCat = list.map(function(item)
  {
    return item.category 
  })
    const uniqueAllCat = ['All',...allCat.filter((x, i, allCat) => allCat.indexOf(x) === i)]

    setCategories(uniqueAllCat) 
 
  },[]);


  const filterItems = function(category)
  {
    if(category === "All")
    {
      setMenuItems(list)
    }
    else{
      const filteredItems = list.filter(function(item){
        if(category === item.category)
        {
          return item
        }
      })
      setMenuItems(filteredItems)
    }
  }


  return (
    <div className="App">
      <Menu items={menuItems} categories={categories} filteredItems={filterItems}/>
      {/* <Categories categories={categories} filteredItems={filterItems}/> */}
    </div>
  );
}

export default App;
