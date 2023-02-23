import React from 'react'
import { Typography } from '@mui/material';
import './Footer.css';
import resumeData from '../../util/resumeData';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_left'>

                <Typography className='footer_name'>{resumeData.name}</Typography>
            </div>
            <div className='footer_right'>
                <Typography className='footer_copyright'>
                    Designed and Developed by <a href='/' target='_blank' rel="noreferrer">Raman</a>
                    <br />
                Clone idea from <a href='https://themeforest.net/user/tavonline' target='_blank' rel="noreferrer">Travonline.</a>
                </Typography>
            </div>
        </div>
    )
}

export default Footer
