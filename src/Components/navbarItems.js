import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import BedRoundedIcon from '@mui/icons-material/BedRounded';

export const mainNavbarItems = [
  {
    id: 0,
    icon: <CottageOutlinedIcon />,
    label: 'Dashboard',
    route: 'dashboard',
  },
  {
    id: 1,
    icon: <TaskAltRoundedIcon />,
    label: 'Tasks',
    route: 'tasks',
  },
  {
    id: 2,
    icon: <LocalFloristOutlinedIcon />,
    label: 'My Plants',
    route: 'my-plants',
  },
  {
    id: 3,
    icon: <Inventory2OutlinedIcon />,
    label: 'Supplies',
    route: 'supplies',
  },
  {
    id: 4,
    icon: <ReceiptLongRoundedIcon />,
    label: 'Wishlist',
    route: 'wishlist',
  },
  {
    id: 5,
    icon: <BedRoundedIcon />,
    label: 'Rooms',
    route: 'rooms',
  },
]