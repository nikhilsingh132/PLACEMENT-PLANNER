import React from 'react'
import './Cards.css'
import Button from '@mui/material/Button';
import {LinearProgress} from '@mui/material';


const Cards = ({ title1, title2, title3 }) => {
    return (
        <>
            <div className='rowcards'>

                <div className="card">
                    <div className="card-body">
                        <h1 className='head'>{title1}</h1>
                        <Button variant="contained">CLICK HERE</Button>
                        <h5>PROGRESS</h5>
                        <LinearProgress variant='determinate' value={50}/>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h1 className='head'>{title2}</h1>
                        <Button variant="contained">CLICK HERE</Button>
                        <h5>PROGRESS</h5>
                        <LinearProgress variant='determinate' value={50}/>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h1 className='head'>{title3}</h1>
                        <Button variant="contained" >CLICK HERE</Button>
                        <h5>PROGRESS</h5>
                        <LinearProgress variant='determinate' value={50}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cards