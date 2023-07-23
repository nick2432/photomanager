import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Search(props) {
   const [images,setImages] = useState('');
    const nevigate = useNavigate();
    const handleclick=async()=>{
        props.setimage(images);
        nevigate('./result');
    }
  return (
    <div style={{width:'100%',display:'flex',alignItems:'center',flexDirection:'column',gap:'70px'}}>
       <p className='bigtxt'>Discover over 2,000,000 free Stock Images</p> 
       <div className='search'>
        <div style={{display:'flex',gap:'20px',alignItems:'center'}}>
            <BiSearch style={{fontSize:'1.2rem'}}/>
            <input
              value={images}
              onChange={(e) => setImages(e.target.value)} 
              className='input1' 
              placeholder='Search'
            >
            </input>
        </div>
       <button className='searchbutton' onClick={handleclick}>Go!</button>
       </div>
       <div className='trends'>
       <p className='txt'>Trending: flowers, love, forest, river</p>
       </div>
    </div>
  )
}
