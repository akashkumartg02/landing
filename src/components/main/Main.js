import React from "react";
import { Box, Button, Typography } from "@mui/material";
import './main.scss';
const Main = () => {
    return (
        <Box className='main'>
            <Box className='logo'>
                <Box className="vertical-1"></Box>
                <Box className="vertical-2"></Box>
                <Box className="horizontal-1"></Box>
                <Box className="horizontal-2"></Box>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/SVDdpZEbAlWBFuRGIIIL.svg" alt=""/>
            </Box>
            <Typography className='main-content'>Ant Design Landing platform has a variety of  templates, download template package, you can use it quickly, you can also use the  editor to quickly build a dedicated page for you.</Typography>
            <Box className='main-buttons'>
                <Button className="btn-1">Templates</Button>
                <Button className="btn-2">Editor</Button>
            </Box>
        </Box>
    )
}

export default Main;