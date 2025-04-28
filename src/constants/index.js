import { 
    BellDotIcon,
    BookOpenCheck, 
    BriefcaseBusiness, 
    ChartNoAxesCombined, 
    FileIcon, 
    Home, 
    PlusIcon, 
    SettingsIcon, 
    UserIcon 
} from "lucide-react";

export const NAVLINKS = [
    {
        name: "My Gigs",
        path: "/dashboard/gigs",
        icon: Home,
    },
    {
        name: "Bidded Gigs",
        path: "/dashboard/bidded-gigs",
        icon: BriefcaseBusiness,
    },
    {
        name: "Profile",
        path: "/dashboard/profile",
        icon: UserIcon,
    },
    {
        name: "Notiffications",
        path: "/dashboard/notifications",
        icon: BellDotIcon,
    },
    {
        name: "Settings",
        path: "/dashboard/settings",
        icon: SettingsIcon,
    },
];

export const SERVICEPROVIDERLINKS = [
    {
        name: "Home",
        path: "/services/gigs",
        icon: Home,
    },
    {
        name: "My Bid Offers",
        path: "/services/gigs/bids",
        icon: FileIcon,
    },
    {
        name: "Bidded Gigs",
        path: "/services/gigs/bidded-gigs", // Updated path to avoid conflict
        icon: BriefcaseBusiness,
    },
    {
        name: "Notiffications",
        path: "/dashboard/notifications",
        icon: BellDotIcon,
    },
    {
        name: "Profile",
        path: "/services/gigs/profile",
        icon: UserIcon,
    },
    
    {
        name: "Settings",
        path: "/services/gigs/settings",
        icon: SettingsIcon,
    },
];