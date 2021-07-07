import React  from 'react';
import styles from './index.module.scss';
import { FormInput } from '../../elements/FormInput';
import { BiSearch } from 'react-icons/bi';

const SearchComponent = ({title, searchQuery, handleSearch}) => {
    
    return(
        <div className={styles._}>
            <FormInput 
                className={styles.search_input}
                value={searchQuery}
                type="text"
                handleChange={handleSearch}
                placeholder={`Search ${title}`}
            />
            <div className={styles.search_icon}>
                <BiSearch />
            </div>
        </div>
    )
}

export default SearchComponent