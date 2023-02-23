import React from 'react'
import './Resume.css'
import CustomTimeLine, {
  CustomTimelineSeparator
} from '../../Components/Timeline/Timeline'
import WorkIcon from '@mui/icons-material/Work'
import resumeData from '../../util/resumeData'
import SchoolIcon from '@mui/icons-material/School'
import { Paper, Grid, Typography } from '@mui/material'

import { TimelineDot, TimelineItem, TimelineContent } from '@mui/lab'
const Resume = () => {
  return (
    <>
      {/* about */}
      <Grid container className='section pb_45 pt_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>About Me</h6>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='body2' className='aboutme_text'>
            {' '}
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      <Grid container className='section'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Resume</h6>
        </Grid>

        {/* education and experience*/}
        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            <Grid item sm={12} md={6}>
              <CustomTimeLine title='Work Experience' icon={<WorkIcon />}>
                {resumeData.experiences.map((exp) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>
                        {exp.title}
                      </Typography>
                      <Typography variant='caption' className='timeline_date'>
                        {exp.date}
                      </Typography>
                      <Typography
                        variant='body2'
                        className='timeline_description'
                      >
                        {exp.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeLine>
            </Grid>
            <Grid item sm={12} md={6}>
              <CustomTimeLine title='Education' icon={<SchoolIcon />}>
                {resumeData.education.map((edu) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>
                        {edu.title}
                      </Typography>
                      <Typography variant='caption' className='timeline_date'>
                        {edu.date}
                      </Typography>
                      <Typography
                        variant='body2'
                        className='timeline_description'
                      >
                        {edu.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeLine>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* services */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>My Services</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            spacing={3}
            justify='space-between'
            className='servicesGrid'
          >
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className='service'>
                  <div className='service_icon'>{service.icon}</div>
                  <Typography className='service_title' variant='h6'>
                    {service.title}
                  </Typography>
                  <Typography className='service_description' variant='body2'>
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* skills */}
      <Grid container className='section graybg pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>My Skills</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify='space-between' spacing={3}>
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className='skill'>
                  <Typography variant='h6' className='skill_title'>
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant='body2' className='skill_description'>
                      <TimelineDot
                        variant={'outlined'}
                        className='timeline_dot'
                      ></TimelineDot>
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* contact */}
      <Grid container className='section'></Grid>
    </>
  )
}

export default Resume
