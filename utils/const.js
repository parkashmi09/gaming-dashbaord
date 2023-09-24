import Image from "next/image";
import MailIcon from "@mui/icons-material/Mail";
import HouseIcon from "@mui/icons-material/House";
import BarChartIcon from "@mui/icons-material/BarChart";
import FolderIcon from "@mui/icons-material/Folder";
import PersonIcon from "@mui/icons-material/Person";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LanguageIcon from "@mui/icons-material/Language";
import DescriptionIcon from "@mui/icons-material/Description";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BuildIcon from "@mui/icons-material/Build";

export const tilesData = [
  {
    id: 1,
    title: "Total User",
    users: "5300",
    percentage: "+55%",
    profit: "green",
    icon: <FolderIcon />,
  },
  {
    id: 2,
    title: "Total Verified Users",
    users: "2300",
    percentage: "+5%",
    profit: "green",
    icon: <LanguageIcon />,
  },
  {
    id: 3,
    title: "Total Email Unverified Users",
    users: "+3,052",
    percentage: "+14%",
    profit: "red",
    icon: <DescriptionIcon />,
  },
  {
    id: 3,
    title: "Total SMS Unverified Users",
    users: "$173,000",
    percentage: "+8%",
    profit: "green",
    icon: <ShoppingCartIcon />,
  },
];

export const cards = [
  {
    title: "Word of the Day 1",
    description: 'well meaning and kindly. "a benevolent smile"',
  },
  {
    title: "Word of the Day 2",
    description: 'well meaning and kindly. "a benevolent smile"',
  },
];
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export const rows = [
  createData(
    <div className="flex items-center gap-2 text-[14px] font-[500] text-white">
      <Image src={"/avatar.png"} height={33} width={33} />
      <p>User name</p>
    </div>,
    <div className="h-[25px] w-[65px] support flex justify-center text-white">
      Sport
    </div>,
    <div className="flex items-center text-[14px] font-[500] text-white">
      <Image src={"/rupee.png"} height={16} width={16} />
      <p>14,000</p>
    </div>,
    <div className="h-[25px] w-[65px] rounded-[8px] bg-[#01B574] flex items-center justify-center text-white">
      Back
    </div>
  ),
  createData(
    <div className="flex items-center gap-2 text-[14px] font-[500] text-white">
      <Image src={"/avatar.png"} height={33} width={33} />
      <p>User name</p>
    </div>,
    <div className="h-[25px] w-[65px] casino flex justify-center text-white">
      Casino
    </div>,
    <div className="flex items-center text-[14px] font-[500] text-white">
      <Image src={"/rupee.png"} height={16} width={16} />
      <p>14,000</p>
    </div>,
    <div className="h-[25px] w-[65px] rounded-[8px] bg-[#F4134a] flex items-center justify-center text-white">
      Lay
    </div>
  ),
  createData(
    <div className="flex items-center gap-2 text-[14px] font-[500] text-white">
      <Image src={"/avatar.png"} height={33} width={33} />
      <p>User name</p>
    </div>,
    <div className="h-[25px] w-[65px] support flex justify-center text-white">
      Sport
    </div>,
    <div className="flex items-center text-[14px] font-[500] text-white">
      <Image src={"/rupee.png"} height={16} width={16} />
      <p>14,000</p>
    </div>,
    <div className="h-[25px] w-[65px] rounded-[8px] bg-[#01B574] flex items-center justify-center text-white">
      Back
    </div>
  ),
  createData(
    <div className="flex items-center gap-2 text-[14px] font-[500] text-white">
      <Image src={"/avatar.png"} height={33} width={33} />
      <p>User name</p>
    </div>,
    <div className="h-[25px] w-[65px] casino flex justify-center text-white">
      Casino
    </div>,
    <div className="flex items-center text-[14px] font-[500] text-white">
      <Image src={"/rupee.png"} height={16} width={16} />
      <p>14,000</p>
    </div>,
    <div className="h-[25px] w-[65px] rounded-[8px] bg-[#F4134a] flex items-center justify-center text-white">
      Lay
    </div>
  ),
  createData(
    <div className="flex items-center gap-2 text-[14px] font-[500] text-white">
      <Image src={"/avatar.png"} height={33} width={33} />
      <p>User name</p>
    </div>,
    <div className="h-[25px] w-[65px] casino flex justify-center text-white">
      Casino
    </div>,
    <div className="flex items-center text-[14px] font-[500] text-white">
      <Image src={"/rupee.png"} height={16} width={16} />
      <p>14,000</p>
    </div>,
    <div className="h-[25px] w-[65px] rounded-[8px] bg-[#F4134a] flex items-center justify-center text-white">
      Lay
    </div>
  ),
];

export const bettingData = [
  {
    id: 1,
    name: "User Name",
    image: "/up.png",
    date: "22 DEC 7:20 PM",
    profit: "green",
    amount: "+$2500",
  },
  {
    id: 2,
    name: "User Name",
    image: "/down.png",
    date: "22 DEC 7:20 PM",
    profit: "red",
    amount: "-$2500",
  },
  {
    id: 3,
    name: "User Name",
    image: "/up.png",
    date: "22 DEC 7:20 PM",
    check: "/check.png",
  },
  {
    id: 4,
    name: "User Name",
    image: "/up.png",
    date: "22 DEC 7:20 PM",
    check: "/check.png",
  },
  {
    id: 5,
    name: "User Name",
    image: "/up.png",
    date: "22 DEC 7:20 PM",
    check: "/check.png",
  },
  {
    id: 6,
    name: "User Name",
    image: "/up.png",
    date: "22 DEC 7:20 PM",
    check: "/check.png",
  },
];

export const depositStatus = [
  {
    id: 1,
    icon: <FolderIcon />,
    title: "Pending deposit",
    numbers: "3,052",
  },
  {
    id: 2,
    icon: <RocketLaunchIcon />,
    title: "Reject deposit",
    numbers: "2,42m",
  },
  {
    id: 3,
    icon: <ShoppingCartIcon />,
    title: "Pending withdrowl",
    numbers: "2,400$",
  },
  {
    id: 4,
    icon: <BuildIcon />,
    title: "Reject withdrowal",
    numbers: "320",
  },
];

export const sportingData = [
  {
    id: 1,
    title: "Total Sport",
    count: "34",
    icon: <FolderIcon />,
  },
  {
    id: 2,
    title: "Sport legues",
    count: "2,300",
    icon: <LanguageIcon />,
  },
  {
    id: 3,
    title: "Sport Match",
    count: "3,052",
    icon: <DescriptionIcon />,
  },
  {
    id: 4,
    title: "Total Sport bet",
    count: "173,00",
    icon: <ShoppingCartIcon />,
  },
  {
    id: 5,
    title: "Total Casino",
    count: "53,000",
    icon: <FolderIcon />,
  },
  {
    id: 6,
    title: "Total Casino Provider",
    count: "2,300",
    profit: "+5%",
    icon: <LanguageIcon />,
  },
  {
    id: 7,
    title: "Total Casino event",
    count: "3,052",
    icon: <DescriptionIcon />,
  },
  {
    id: 8,
    title: "Total Casino bet",
    count: "173,000",
    icon: <ShoppingCartIcon />,
  },
];

export const dashboardContent = [
  {
    id: 1,
    name: "Dashboard",
    icon: <HouseIcon />,
  },
  {
    id: 2,
    name: "User manage",
    icon: <BarChartIcon />,
  },
  {
    id: 3,
    name: "Deposit manage",
    icon: <FolderIcon />,
  },
  {
    id: 4,
    name: "Withdrawal manage",
    icon: <FolderIcon />,
  },
  {
    id: 5,
    name: "bet manage",
    icon: <FolderIcon />,
  },
  {
    id: 6,
    name: "Sport manage",
    icon: <FolderIcon />,
  },
  {
    id: 7,
    name: "Match manage",
    icon: <FolderIcon />,
  },
  {
    id: 8,
    name: "Deposit Gateway",
    icon: <FolderIcon />,
  },
  {
    id: 9,
    name: "Withdrawal Gateway",
    icon: <FolderIcon />,
  },
];

export const subdashboard = [
  {
    id: 1,
    icon: <PersonIcon />,
    name: "Profile",
  },
  {
    id: 2,
    icon: <MailIcon />,
    name: "Sign In",
  },
  {
    id: 3,
    icon: <RocketLaunchIcon />,
    name: "Sign up",
  },
];
