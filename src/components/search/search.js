import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
  
const SearchBar = (props) => {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    return (
    <><form action="/" method="get">
            <input
                type="text"
                id="header-search"
                value={props.value}
                onChange={(event)=>props.setSearchValue(event.target.value)}
                placeholder="Search movies"
                name="s" />
            <button type="submit">Search</button>
        </form>
        {'\n'}
        <div>
        <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }} />
                <span>Movies</span>
        
        <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }} />
                <span>Series</span>
            
        <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }} />
                <span>Episodes</span>
        <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }} />
                <span>Year</span>
        
        </div>
        
                </>
    )
};
export default SearchBar;

