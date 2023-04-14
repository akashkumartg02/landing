import React from "react";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import './footer.scss';


const Footer = () => {
    return (
        <>
            <Box className="sub-footer">
                <Typography>All templates and modules are based on Ant Design specifications. You can download templates and source files directly, or use editor to quickly build a page belonging to you.</Typography>
                <Button>Editor</Button>
            </Box>
            <Box className='footer'>
                <Box className='footer-body'>
                    <Grid container className="grid">
                        <Grid item xl={3} lg={3}>
                            <Box className="footer-content">
                                <Typography variant="h3">Ant Design Landing</Typography>
                                <Typography>Github</Typography>
                                <Typography>Template Github</Typography>
                                <Typography>English</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3}>
                            <Box className="footer-content">
                                <Typography variant="h3">Sites</Typography>
                                <Typography>Design</Typography>
                                <Typography>Design Pro</Typography>
                                <Typography>library</Typography>
                                <Typography>UX</Typography>
                                <Typography>Mui - css library</Typography>
                                <Typography>Boostrap - css library</Typography>
                                <Typography>Google</Typography>
                                <Typography>Jira</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3}>
                            <Box className="footer-content">
                                <Typography variant="h3">Community</Typography>
                                <Typography>Github</Typography>
                                <Typography>Template Github</Typography>
                                <Typography>English</Typography>
                            </Box>
                        </Grid>
                        <Grid item xl={3} lg={3}>
                            <Box className="footer-content">
                                <Typography variant="h3">More Products</Typography>
                                <Typography>Cmdk</Typography>
                                <Typography>EventHq</Typography>
                                <Typography>Saas insider</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box className="footer-bottom">
                    <Typography variant="span">Made with</Typography>
                    <Typography variant="span" className="heart">❤</Typography>
                    <Typography variant="span">by </Typography>
                    <Link target="_blank" href="https://github.com/Mr-Akash2">Akash</Link>
                </Box>
            </Box>
        </>
    )
}

export default Footer;