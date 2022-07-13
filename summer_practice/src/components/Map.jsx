import { element } from 'prop-types';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Map = (props) => {
  const [list, setList] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => setList(json))

  }, [])

  return <div>
    <div>Map</div>
    <ol>
      {list.map((ele) => (
        <li key={ele.id}>{ele.name}</li>
      ))}
    </ol>

  </div>
}

export default Map



