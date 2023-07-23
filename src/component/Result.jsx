import React, { useState, useEffect } from 'react'
import { BiSearch } from 'react-icons/bi';
import Loading from './loading.jsx' 
import axios from 'axios';
import Dialog from './Dialog.jsx';
const type =[
 'Computer',
 'apple',
 'rose',
 'men',
 'Code',
 'heart',
 'Marketing'
]
export default function Result(props) {
  const [images,setimages] = useState(props.image);
  const [searchimages,setsearchimages] = useState([]);
  const [loading,setloading] = useState(0);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [Dialogimage,setDialogimage] = useState([]);
  useEffect(() => {
    setloading(1);
    console.log('hellow');
    axios.get(`https://pixabay.com/api/?key=38407053-d222e14d96ceb4a030fdbc329&q=${props.image}+landscape&image_type=photo`)
        .then(response => {
            setsearchimages(response.data.hits);
            setloading(0); 
        })
  }, [props.image]); 

  const handleclick=()=>{
    props.setimage(images); 
  }
  const handleImageClick = (data) => {
    setDialogimage(data);
    setDialogOpen(true);
  }
  return (
    <div className='divider' style={{width:'100%',height:'100%',alignItems:'center',flexDirection:'column'}}>
    <div className='left'>
    <div className='search'>
     <div style={{display:'flex',gap:'20px',alignItems:'center'}}>
         <BiSearch style={{fontSize:'1.2rem'}}/>
         <input
              value={images}
              onChange={(e) => setimages(e.target.value)} 
              className='input1' 
              placeholder='Search'
            >
            </input>
     </div>
    <button className='searchbutton' onClick={handleclick}>Go!</button>
    </div>
    <p className='bigtxt' style={{marginTop:'30px'}}>Results: Technology</p> 
    </div>
    <div className='right'>
    <div className='type'>
                  {type.map((data, index) => (
                      <button onClick={(e) => props.setimage(data)}  className='btn'>{data}</button>
                  ))}
            </div>
      <div className='imagecontainer'>
      
        {
        (loading)?<Loading/>:
          searchimages.map((image, index) => (
            <div onClick={() => handleImageClick(image)}>
               <img className='imagebox' key={index} src={image.webformatURL} alt={image.tags} />
               <p style={{fontSize:'1.0rem',color:'black'}}>{image.tags}</p>  
            </div>
          ))
        }
      </div>
    </div>
    <Dialog isDialogOpen={isDialogOpen} setDialogOpen={setDialogOpen} Dialogimage={Dialogimage}/>
 </div>
  )
}
