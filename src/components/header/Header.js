import React from "react";
import { Box, Button, Typography } from "@mui/material";
import './header.scss';
const Header = () => {
    return (
        <Box className='header'>
            <Box className="logo">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/SVDdpZEbAlWBFuRGIIIL.svg" alt="" />
                <Typography>Landing</Typography>
            </Box>
            <Box className="menu">
                <ul>
                    <li>Home</li>
                    <li>Doc</li>
                    <li>Editor</li>
                </ul>
                <Button>Github</Button>
                <Button>English</Button>
            </Box>
        </Box>
    )
}

export default Header;