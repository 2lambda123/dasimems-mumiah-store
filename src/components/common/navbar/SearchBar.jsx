import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

const SearchBar = ({setSearchOpened}) => {

    
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef("");

  const search = useCallback(() => {
    if (searchValue.trim() !== "") {
    }
  }, [searchValue]);

  useEffect(()=>{

      searchRef.current.focus();
  }, [])

  

  return (
    <div className="nav-bar-search flex-container align-center">
        <button onClick={search}>
            <FiSearch />
        </button>

        <input
            ref={searchRef}
            type="text"
            className="nav-bar-search-box"
            placeholder="Type and press enter"
            value={searchValue}
            onChange={(e) => {
            setSearchValue(e.target.value);
            }}
            onKeyPress={(e) => {
                
            }}
        />

        <button
            onClick={() => {
            setSearchOpened(false);
            }}
        >
            <MdClose />
        </button>
        </div>
  )
}

export default SearchBar
