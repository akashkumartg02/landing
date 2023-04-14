import React from "react";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import './modules.scss';
import styled from "@emotion/styled";


const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        centered
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    minHeight: 'unset',
    marginBottom: '5px',
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
});


const StyledTab = styled((props) => (
    <Tab disableRipple {...props} />
))(() => ({
    transition: 'border-color .3s cubic-bezier(.215,.61,.355,1),box-shadow .3s cubic-bezier(.215,.61,.355,1),color .3s cubic-bezier(.215,.61,.355,1)',
    borderRadius: '4px',
    margin: '0 8px 8px',
    width: '100px',
    textAlign: 'center',
    border: '1px solid #ebedf0',
    lineHeight: 'unset',
    minHeight: '10px',
    padding: '6px 16px',
    textTransform: 'none',
    '&.Mui-selected': {
        color: '#fff',
        backgroundColor: '#2f54eb',
        borderRadius: '4px',
        '&:hover': {
            color: '#fff',
        },
    },
    '&:hover': {
        color: '#2f54eb',
    },
}));

const Modules = () => {

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Box>{children}</Box>
                    </Box>
                )}
            </div>
        );
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className='modules'>
            <Box className='modules-body'>
                <Typography variant="h1">Modules</Typography>
                <Box style={{ width: "100%" }}>
                    <StyledTabs value={value} onChange={handleChange}>
                        <StyledTab label="ALL" />
                        <StyledTab label="Navs" />
                        <StyledTab label="Banners" />
                    </StyledTabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Grid container spacing={2}>
                        <Grid item margin={'auto'} xl={4} lg={4}>
                            <Box className="modules-box">
                                <img src="https://zos.alipayobjects.com/rmsportal/ZjfIAdkDVlpnilf.jpg" alt="" />
                            </Box>
                        </Grid>
                        <Grid item margin={'auto'} xl={4} lg={4}>
                            <Box className="modules-box">
                                <img src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*luthRonCYuQAAAAAAAAAAABkARQnAQ" alt="" />
                            </Box>
                        </Grid>
                        <Grid item margin={'auto'} xl={4} lg={4}>
                            <Box className="modules-box">
                                <img src="https://zos.alipayobjects.com/rmsportal/ZjfIAdkDVlpnilf.jpg" alt="" />
                            </Box>
                        </Grid>
                        <Grid item margin={'auto'} xl={4} lg={4}>
                            <Box className="modules-box">
                                <img src="https://zos.alipayobjects.com/rmsportal/gyseCGEPqWjQpYF.jpg" alt="" />
                            </Box>
                        </Grid>
                        <Grid item margin={'auto'} xl={4} lg={4}>
                            <Box className="modules-box">
                                <img src="https://zos.alipayobjects.com/rmsportal/chnhazooyzrjWSv.jpg" alt="" />
                            </Box>
                        </Grid>
                        <Grid item margin={'auto'} xl={4} lg={4}>
                            <Box className="modules-box">
                                <img src="https://zos.alipayobjects.com/rmsportal/xLbbmipjHaqSoJSXhIzP.jpg" alt="" />
                            </Box>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container spacing={2}>
                        <Grid item margin={'auto'} xl={4} lg={4}>
                            <Box className="modules-box">
                                <img src="https://zos.alipayobjects.com/rmsportal/ZjfIAdkDVlpnilf.jpg" alt="" />
                            </Box>
                        </Grid>
                        <Grid item margin={'auto'} xl={4} lg={4}>
                            <Box className="modules-box">
                                <img src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*luthRonCYuQAAAAAAAAAAABkARQnAQ" alt="" />
                            </Box>
                        </Grid>
                        <Grid item margin={'auto'} xl={4} lg={4}>
                            <Box className="modules-box">
                                <img src="https://zos.alipayobjects.com/rmsportal/ZjfIAdkDVlpnilf.jpg" alt="" />
                            </Box>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid container spacing={2}>
                        <Grid item margin={'auto'} xl={4} lg={4}>
                            <Box className="modules-box">
                                <img src="https://zos.alipayobjects.com/rmsportal/gyseCGEPqWjQpYF.jpg" alt="" />
                            </Box>
                        </Grid>
                        <Grid item margin={'auto'} xl={4} lg={4}>
                            <Box className="modules-box">
                                <img src="https://zos.alipayobjects.com/rmsportal/chnhazooyzrjWSv.jpg" alt="" />
                            </Box>
                        </Grid>
                        <Grid item margin={'auto'} xl={4} lg={4}>
                            <Box className="modules-box">
                                <img src="https://zos.alipayobjects.com/rmsportal/xLbbmipjHaqSoJSXhIzP.jpg" alt="" />
                            </Box>
                        </Grid>
                    </Grid>
                </TabPanel>
            </Box>
        </Box>
    )
}

export default Modules;