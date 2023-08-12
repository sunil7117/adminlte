import { Box,styled } from "@mui/material";
import Header from "./components/header/Header";
import { useState } from "react";
import { BigScreen, SmallScreen } from "./components/Screen/Screens";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { menulist } from "./constant/sidebarMenu";
import Dashboardv1 from "./components/dashboard/Dashboardv1";
import Footer from "./components/footer/Footer";



const Leftbar=styled(Box)`
background-color: #1A2226;
`
const Rightbar=styled(Box)`
position: relative;
`
function App() {
  const [bigMenu, SetbigMenu] = useState(true);


  return (

    <BrowserRouter>
      <div className="App">
        <Header big={bigMenu}small={SetbigMenu}/>
        <Box >
        <main style={{display:"flex",}}>
          <Leftbar>
            {bigMenu? <BigScreen/>:<SmallScreen/>}
      
          </Leftbar>
          <Rightbar bgcolor={"#ECF0F5"} width={"100%"} > 
            <Box sx={{padding:"15px 10px 43px 10px"}}>
              <Routes>
                <Route path={"/"} element={<Dashboardv1 link1={"Dashboard"} pages={{pagename:"Dashboard",content:"Control panel"}}/>}/>
                  {
                  menulist.flatMap(item => item.subMenu?.map(submenu => 
                    <Route key={submenu.menulist.replace(/\s/g,"")}  path={`/${submenu.menulist.replace(/\s/g,"")}`} element={submenu.link}/>
                    ))
                  }
              </Routes>
            </Box>
            
            <Footer/>   
          </Rightbar>
        </main>
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;
