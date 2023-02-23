import { Typography } from '@mui/material'
import CustomTimeLine, { CustomTimelineSeparator } from '../Timeline/Timeline'
import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import resumeData from '../../util/resumeData'
import './profile.css'
import CustomButton from '../Button/Button'
import proPic from '../../Assets/Images/pro.jpg'
import GetAppIcon from '@mui/icons-material/GetApp'
import myResume from '../../Assets/Resume.docx'

import TimelineItem from '@mui/lab/TimelineItem'

import TimelineContent from '@mui/lab/TimelineContent'

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className='timeline_content'>
      {link ? (
        <Typography className='timelineItem_text'>
          <span>{title}: </span>
          <a href={link} target={link}>
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className='timelineItem_text'>
          <span>{title}: </span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
)
const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>

      <figure className='profile_image'>
        <img src={proPic} alt='profile' />
      </figure>

      <div className='profile_information'>
        <CustomTimeLine icon={<PersonOutlineIcon />}>
          <CustomTimelineItem
            title='Name'
            text={resumeData.name}
          ></CustomTimelineItem>
          <CustomTimelineItem
            title='Title'
            text={resumeData.title}
          ></CustomTimelineItem>
          <CustomTimelineItem
            title='Email'
            text={resumeData.email}
          ></CustomTimelineItem>

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            ></CustomTimelineItem>
          ))}
        </CustomTimeLine>
        <div className='button_container'>
          <a href={myResume} download='Resume.docx'>
            <CustomButton
              text={'Download CV'}
              icon={<GetAppIcon />}
            ></CustomButton>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile
