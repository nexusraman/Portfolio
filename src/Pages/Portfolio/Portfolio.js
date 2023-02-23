import React, { useState } from 'react'
import './Portfolio.css';
import { Grid, Tabs, Tab, Typography, Card, CardActionArea, CardMedia, CardContent, Grow, Dialog, DialogTitle, DialogActions, DialogContent } from '@mui/material';
import resumeData from '../../util/resumeData'

const Portfolio = () => {
    const [tabValue, setTabvalue] = useState('All');
    const [projectDialog, setProjectDialog] = useState(false);

    return (
        <Grid container className='section pb_45 pt_45'>
            <Grid item className='section_title mb_20'>
                <span></span>
                <h6 className='section_title_text'>Portfolio</h6>
            </Grid>
            {/* <Grid item xs={12}>
                <Tabs value={tabValue}
                    indicatorColor='white'
                    className='custom_tabs'
                    onChange={(event, newValue) => {
                        setTabvalue(newValue);
                    }}><Tab label='All' value='All' className={tabValue === 'All' ? 'customTabs_item active' : 'customTabs_item'}></Tab>
                    {[...new Set(resumeData.projects.map(item => item.tag))].map(tag => (
                        <Tab label={tag} value={tag} className={tabValue === 'All' ? 'customTabs_item active' : 'customTabs_item'} />
                    ))}
                </Tabs>
            </Grid> */}

            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {resumeData.projects.map((project) => (
                        <>
                            {tabValue === project.tag || tabValue === "All" ? (
                                <Grid item xs={12} sm={4}>
                                    <Grow in timeout={1200}>
                                        <Card className='customCard' onClick={() => setProjectDialog(project)}>
                                            <CardActionArea>
                                                <CardMedia className='customCard_image' image={project.image} title={project.title} />
                                                <CardContent>
                                                    <Typography variant='body2' className='customCard_title'>{project.title}</Typography>
                                                    <Typography variant='body2' className='customCard_caption'>{project.description}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grow>
                                </Grid>
                            ) : null}
                        </>
                    ))}
                </Grid>
            </Grid>
            <Dialog fullWidth open={projectDialog} onClose={() => setProjectDialog(false)} className='projectDialog'>
                <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
                <img src={projectDialog.image} alt='' className='projectDialog_image' />
                <DialogContent>
                    <Typography className='projectDialog_description'>
                        {projectDialog.description}
                    </Typography>
                    <Typography className='projectDialog_stack'>
                        <span>Stack Profile:</span> {projectDialog.stack}
                    </Typography>

                </DialogContent>
                <DialogActions className='projectDialog_actions'>
                    {projectDialog?.links?.map(link => (
                        <a href={link.link} target='_blank' rel="noreferrer">{link.icon}</a>
                    ))}
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

export default Portfolio
