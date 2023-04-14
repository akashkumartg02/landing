import React from "react";
import { Box, Card, Grid, Link, Typography } from "@mui/material";
import './features.scss';
const Features = () => {
    return (
        <Box className='features'>
            <Box className='features-body'>
                <Typography variant="h1">Features</Typography>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item margin={'auto'} xl={4} lg={4}>
                            <Link className="features-link">
                                <Card className="features-card-1">
                                    <img src="https://gw.alipayobjects.com/zos/rmsportal/QCcDSfdbCIbVSsUZJaQK.svg" alt="" />
                                </Card>
                                <Typography>Design Guide</Typography>
                            </Link>
                        </Grid>
                        <Grid item margin={'auto'} xl={4} lg={4}>
                            <Link className="features-link">
                                <Card className="features-card-2">
                                    <img src="https://gw.alipayobjects.com/zos/rmsportal/hMSnSxMzmiGSSIXxFtNf.svg" alt="" />
                                </Card>
                                <Typography>Sketch</Typography>
                            </Link>
                        </Grid>
                        <Grid item margin={'auto'} xl={4} lg={4}>
                            <Link className="features-link">
                                <Card className="features-card-3">
                                    <img src="https://gw.alipayobjects.com/zos/rmsportal/OMEOieDFPYDcWXMpqqzd.svg" alt="" />
                                </Card>
                                <Typography>Responsive</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default Features;