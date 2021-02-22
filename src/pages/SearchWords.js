import React, { useState, useEffect } from 'react';
import API from '../utils/API.js';
import SearchForm from '../components/SearchForm/SearchForm';

export default function SearchWords() {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        event.preventDefault()
        setSearchTerm(event.target.value)
    };

    const searchFunction = event => {
        event.preventDefault()
        API.searchSynonyms(searchTerm)
        .then(res => {
            console.log(res.body)
        })
    }

    return (
        <div>
             <SearchForm 
             searchTerm = {searchTerm}
             handleChange = {handleChange}
             searchFunction = {searchFunction}
             />

        </div>


    )

}

