import { BookOpenCheck, ChartNoAxesCombined, FileIcon, Home, PlusIcon, Settings, SettingsIcon, UserIcon } from "lucide-react";

  export default{
    NAVLINKS:[
{
    name:"Home",
    path:"/dashboard",
    icon: Home,
},
// {
//     name:"Create Ad",
//     path:"/dashboard/create-gig",
//     icon: PlusIcon,
// },
{
    name:"My Gigs",
    path:"/dashboard/gigs",
    icon: FileIcon,
},
{
    name:"Bidded Gigs",
    path:"/dashboard/bidded-gigs",
    icon: FileIcon,
},
// {
//     name:"To-Do List",
//     path:"/dashboard/to-do",
//     icon: BookOpenCheck,
// },
// {
//     name:"Analytics",
//     path:"/dashboard/analytics",
//     icon:ChartNoAxesCombined,
// },
{
    name:"Profile",
    path:"/dashboard/profile",
    icon: UserIcon,
},
{
    name:"Settings",
    path:"/dashboard/settings",
    icon:SettingsIcon,
},
    ],
  };