import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Home() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Box sx={{bgcolor: '#cfe8fc', height: '100vh', width: '100%' }} />
            </Container>
        </React.Fragment>
    );
}
