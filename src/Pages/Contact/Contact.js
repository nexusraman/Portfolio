import { Grid,TextField } from '@mui/material'
import React from 'react'
import CustomButton from '../../Components/Button/Button'

const Contact = () => {
    return (
        <Grid container className='section pt_45 pb_45'>
            <Grid item xs={12} lg={7}>
                <Grid container>
                    <Grid item className='section_title mb_30'>
                        <span></span>
                        <h6 className='section_title_text'>Contact Form</h6>
                    </Grid>
                </Grid>
                <Grid item xs='{12'>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth name='name' label='name' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth name='email' label='E-mail' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth name='message' label='Message' multiline rows={4} />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomButton text='submit'></CustomButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Contact
