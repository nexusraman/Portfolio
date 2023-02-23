import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import resumeData from '../../util/resumeData'
import './Header.css';
import {
    Nav,
    Navbar
} from 'react-bootstrap';

import TelegramIcon from '@mui/icons-material/Telegram';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from "react-router-dom";
import CustomButton from '../Button/Button';

const Header = (props) => {
    const pathName = props?.location?.pathname;
    return (
        <Navbar expand='lg' sticky='top' className='header' >
            <Nav.Link as={NavLink} to='/' className='header_navlink'>
                <Navbar.Brand className='header_home'>
                    <HomeIcon />
                </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className='header_left'>
                    <Nav.Link as={NavLink} to='/' className={pathName === '/' ? 'header_link_active' : 'header_link'}>
                        Resume
                    </Nav.Link>

                    <Nav.Link as={NavLink} to='/portfolio' className={pathName === '/portfolio' ? 'header_link_active' : 'header_link'}>
                        Portfolio
                    </Nav.Link>
                    {/* <Nav.Link as={NavLink} to='/contact' className={pathName == '/contact' ? 'header_link_active' : 'header_link'}>
                        Contact
                    </Nav.Link> */}

                </Nav>
                <div className='header_right' >
                    {Object.keys(resumeData.socials).map(key => (
                        <a href={resumeData.socials[key].link} target='_blank' rel="noreferrer">{resumeData.socials[key].icon}</a>
                    ))}
                    <a href="mailto:ramandeep.9333@gmail.com"><CustomButton text={'Hire Me'}
                    
                    icon={<TelegramIcon />}
                    
                    /></a>
                </div>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default Header;

