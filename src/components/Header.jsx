

import { AppBar, Box, Toolbar , styled} from "@mui/material";

const  Container = styled(AppBar)`
    background : #011414;
    height : 9vh;
    border-bottom: 1px solid white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: auto;
    
   


`

const Header =() => {
    const logo = 'data:image/png;base64,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';
    return (
         <Container position="static"> 
            
            <Toolbar style={{ display: 'flex', alignItems: 'center' , justifyContent: 'space-between'}}>
                    <img
                    src={logo}
                    alt="logo"
                    style={{
                        width: 40,
                        borderRadius: '50%',
                        marginTop: '10px',
                        marginRight: '10px',
                    }}
                    />

                    <Box sx={{ fontSize: '30px'  , fontWeight: 'bold', marginLeft: '10px', color: 'white' , fontFamily: 'Cascadia Code'}}>
                    🌐Edit-Code
                    </Box>
            </Toolbar>
            
         </Container>
    )
}

export default Header;