import {PureComponent} from "react";
import {Box, Button} from "@mui/material";
import {Link, Outlet} from "react-router-dom";

class BaseLayout extends PureComponent{

    state={
        path: window.location.pathname
    }

    render() {
        return (
            <>
                <Box display="flex" justifyContent="center" mt="2rem" mb="3rem">
                    <Box display="flex" justifyContent="space-around" width="22%">
                        <Link to='/chart' className='text-decoration-none'>
                            <Button variant="contained" size="large" onClick={()=>{this.setState({"path":"/chart"})}} disabled={this.state.path === "/chart"}>
                                Chart
                            </Button>
                        </Link>
                        <Link to='/table' className='text-decoration-none'>
                            <Button variant="contained" size="large" onClick={()=>{this.setState({"path": "/table"})}} disabled={this.state.path === "/table"}>
                                Table
                            </Button>
                        </Link>
                        <Link to='/' className='text-decoration-none'>
                            <Button variant="contained" size="large" onClick={()=>{this.setState({"path": "/"})}} disabled={this.state.path === "/"}>
                                Data
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box display='flex' justifyContent="center" >
                    <Outlet/>
                </Box>
            </>
        );
    }
}

export default BaseLayout;