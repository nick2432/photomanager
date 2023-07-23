import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import './Dialog.css';
export default function Dialog1(props) {
  const handleDialogClose = () => {
    props.setDialogOpen(false);
  }

  return (
    <Dialog 
      open={props.isDialogOpen} 
      onClose={handleDialogClose}
      maxWidth="false" // use 'false' to disable max width
      fullWidth={false}
    >
      <DialogActions>
        <Button onClick={handleDialogClose}>
          <p style={{color:'black'}}>Close</p>
        </Button>
      </DialogActions>
      <DialogContent style={{height: '85vh', width: '70vw'}}> 
            <div className='preview'>
                <p style={{color:'black'}}>Preview ID:</p>
                <p style={{color:'black'}}>{props.Dialogimage.id}</p>
            </div>
            <div className='imagedownload'>  
            <div className='imagecontainer1'>
                <img  className='imagebox1'src={props.Dialogimage.largeImageURL} alt="dialog" />
            </div>
            <div className='download'>
                <p style={{color:'black',fontWeight:'700',fontSize:'1.5rem'}}>Download</p>
                <div>
                    <div className='size'>
                        <p>small</p>
                        <p>1920x2660</p>
                    </div>
                    <div className='size'>
                        <p>small</p>
                        <p>1920x2660</p>
                    </div>
                    <div className='size'>
                        <p>small</p>
                        <p>1920x2660</p>
                    </div>
                    <div className='size'>
                        <p>small</p>
                        <p>1920x2660</p>
                    </div>
                </div>
                <button className='btn2'>Download</button>
                <div className='informationbox'>
                    <p style={{marginTop:'10px',fontSize:'1.3rem',fontWeight:'600'}}>Information</p>
                    <div className='information1'>
                        <div>
                            <p className='lightpara'>user</p>
                            <p style={{fontSize:'1.2rem',fontWeight:'600'}}>{props.Dialogimage.user}</p>
                        </div>
                        <div>
                            <p className='lightpara'>user_id</p>
                            <p style={{fontSize:'1.2rem',fontWeight:'600'}}>{props.Dialogimage.user_id}</p>
                        </div>
                        <div>
                            <p className='lightpara'>type</p>
                            <p style={{fontSize:'1.2rem',fontWeight:'600'}}>{props.Dialogimage.type}</p>
                        </div>
                    </div>
                    <div className='information1'>
                        <div>
                            <p className='lightpara'>views</p>
                            <p style={{fontSize:'1.2rem',fontWeight:'600'}}>{props.Dialogimage.views}</p>
                        </div>
                        <div>
                            <p className='lightpara'>Downloads</p>
                            <p style={{fontSize:'1.2rem',fontWeight:'600'}}>{props.Dialogimage.downloads}</p>
                        </div>
                        <div>
                            <p className='lightpara'>Likes</p>
                            <p style={{fontSize:'1.2rem',fontWeight:'600'}}>{props.Dialogimage.likes}</p>
                        </div>
                    </div>
                </div> 
            </div> 
               
            </div>
          <div className='tags'>
            <p style={{color:'black',fontSize:'1.5rem'}}>Tags:</p>
            <p style={{color:'black',fontSize:'1.5rem'}}>{props.Dialogimage.tags}</p>
          </div>
      </DialogContent>
    </Dialog>
  )
}
