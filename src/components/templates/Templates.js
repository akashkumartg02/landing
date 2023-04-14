import React from "react";
import { Box, Card, Grid, Link, Typography } from "@mui/material";
import './templates.scss';
import { FileDownloadOutlined, VisibilityOutlined } from "@mui/icons-material";
const Templates = () => {
    return (
        <Box className='templates'>
            <Box className='templates-body'>
                <Typography variant="h1">Templates</Typography>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xl={4} lg={4}>
                            <Link className="templates-link">
                                <Card className="templates-card-1">
                                    <Box className="img"></Box>
                                    <Box className="bottom-title">Template - 1</Box>
                                    <Box className="bottom-actions">
                                        <Typography><VisibilityOutlined className="button-actions-icon"/> Preview</Typography>
                                        <Typography><FileDownloadOutlined className="button-actions-icon" /> Download</Typography>
                                    </Box>
                                </Card>
                            </Link>
                        </Grid>
                        <Grid item xl={4} lg={4}>
                            <Link className="templates-link">
                                <Card className="templates-card-2">
                                    <Box className="img"></Box>
                                    <Box className="bottom-title">Template - 2</Box>
                                    <Box className="bottom-actions">
                                        <Typography><VisibilityOutlined className="button-actions-icon"/> Preview</Typography>
                                        <Typography><FileDownloadOutlined className="button-actions-icon" /> Download</Typography>
                                    </Box>
                                </Card>
                            </Link>
                        </Grid><Grid item xl={4} lg={4}>
                            <Link className="templates-link">
                                <Card className="templates-card-3">
                                    <Box className="img"></Box>
                                    <Box className="bottom-title">Template - 3</Box>
                                    <Box className="bottom-actions">
                                        <Typography><VisibilityOutlined className="button-actions-icon"/> Preview</Typography>
                                        <Typography><FileDownloadOutlined className="button-actions-icon" /> Download</Typography>
                                    </Box>
                                </Card>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default Templates;