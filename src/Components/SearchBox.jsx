import { MagnifyingGlass } from "react-loader-spinner";
import { createQueryObject } from "../helper/helper"

import styles from "./SearchBox.module.css"

function SearchBox({search , setSearch, setQuery}) {
    const searchHandler = ()=>{
        setQuery((query)=>( createQueryObject(query , { search })))
    }
  return (
    
    <div className={styles.Search}>
       <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())} />
       <button onClick={searchHandler}><MagnifyingGlass
        width="40px" height="40px" margineTop="20px"/></button>
    </div>
    
  )
}

export default SearchBox