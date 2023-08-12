import {  CalendarMonth,  CalendarViewMonth, Computer, DonutSmall, FileCopy, Mail, NoteAdd, Palette, Widgets } from "@mui/icons-material";
import Dashboardv2 from "../components/dashboard/Dashboardv2";
import Dashboardv1 from "../components/dashboard/Dashboardv1";
import Fixed from "../components/layout/Fixed";
import Boxed from "../components/layout/Boxed";
import TopNavigation from "../components/layout/TopNavigation";

export const menulist=[
    {
        icon:<Palette sx={{ width: "20px", height: "20px" }}/>,
        menu:"Dashboard", 
        subMenu:[
            {menulist:"Dashboard v1",link:<Dashboardv1 link1={"Dashboard"} pages={{pagename:"Dashboard",content:"Control panel"}}/>},
            {menulist:"Dashboard v2",link:<Dashboardv2 link1={"Dashboard"} pages={{pagename:"Dashboard",content:"Version 2.0"}}/>},
        ],
    },
    {
        icon:<FileCopy sx={{ width: "1.1rem", height: "1.1rem" }}/>,
        menu:"Layout Options",
        subMenu:[
            {menulist:"Top Navigation",link:<TopNavigation link1={"Layout >  Top Navigation"} pages={{pagename:"Top Navigation",content:"Example 2.0"}}/>},
            {menulist:"Boxed",link:<Boxed link1={"Layout > Boxed"} pages={{pagename:"Boxed Layout",content:"Blank example to the boxed layout"}}/>},
            {menulist:"Fixed",link:<Fixed link1={"Dashboard"} pages={{pagename:"Dashboard",content:"Version 2.0"}}/>},
            // {menulist:"Collapsed Sidebar",link:<CollapsedSidebar link1={"Dashboard"} pages={{pagename:"Dashboard",content:"Version 2.0"}}/>},
        ]
    },
    {
        icon:<Widgets sx={{ width: "1.1rem", height: "1.1rem" }}/>,
        menu:"Widgets",
        attributes:[
            {
                value:"new",
                color:"green"
            },
        ],
        subMenu:[
        ]
    },
    
    {
        icon:<DonutSmall sx={{ width: "1.1rem", height: "1.1rem" }}/>,
        menu:"Charts",
        subMenu:[
            {menulist:"Chartjs"},
            {menulist:"Morris"},
            {menulist:"Foris"},
            {menulist:"Inline Charts"},
        ]
      
    },
    {
        icon:<Computer sx={{ width: "1.1rem", height: "1.1rem" }}/>,
        menu:"UI Elements",
        subMenu:[
            {menulist:"General"},
            {menulist:"Icons"},
            {menulist:"Buttons"},
            {menulist:"Sliders"},
            {menulist:"Timeline"},
            {menulist:"Modals"},

        ]
    },
    {
        icon:<NoteAdd sx={{ width: "1.1rem", height: "1.1rem" }}/>,
        menu:"Forms",
        subMenu:[
            {menulist:"General Elements"},
            {menulist:"Advance Elements"},
            {menulist:"Editors"},
            {menulist:"Sliders"},
            {menulist:"Timeline"},
            {menulist:"Modals"},

        ]
    },
    {
        icon:<CalendarViewMonth sx={{ width: "1.1rem", height: "1.1rem" }}/>,
        menu:"Tables",
        subMenu:[
            {menulist:"Small tables"},
            {menulist:"Data tables"},

        ]
    },
    {
        icon:<CalendarMonth sx={{ width: "1.1rem", height: "1.1rem" }}/>,
        menu:"Calendar",
        subMenu:[

        ]
    },
    {
        icon:<Mail sx={{ width: "1.1rem", height: "1.1rem" }}/>,
        menu:"Mailbox",
        subMenu:[
            {menulist:"Inbox"},
            {menulist:"Compose"},
            {menulist:"Read"},
        ]
    },
    
]