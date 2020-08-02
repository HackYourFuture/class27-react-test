import React from 'react';

const SearchButton = ({getUsers}) => {
    return (
        <div>
            <button onClick={getUsers}>Get users!</button>
        </div>
      );
}

export default SearchButton;


