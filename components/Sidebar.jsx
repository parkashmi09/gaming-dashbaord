import React from "react";
import Image from "next/image";
import { List, ListItem, Typography } from "@material-tailwind/react";
import { ListItemButton, ListItemText } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { dashboardContent, subdashboard } from "@/utils/const";

export const Sidebar = () => {
  return (
    <div className="relative">
      <Image src={"/sidebar.png"} width={320} height={1187} />
      <div className="absolute top-0 left-0 w-full  h-full flex flex-col p-4">
        <div className="text-center p-4">
          <p
            className="text-white opacity-[0.8] font-[500] bg-gradient-to-r from-#E0E1E2 via-#E0E1E2 to-#E0E1E2"
            variant="h5"
            gutterBottom
          >
            VISION UI FREE
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-[200px]  h-[1px] custom-gradient" />
        </div>
        <List className="">
          {dashboardContent.map((data, index) => (
            <ListItem
              className="p-2 hover:bg-[#1A1F37] hover:shadow-md group transition duration-300 ease-in-out"
              key={data.id}
            >
              <ListItemButton className="">
                <div className="text-[#0075FF] bg-[#1A1F37] group-hover:bg-[#0075FF] group-hover:text-white h-[36px] w-[36px] flex justify-center items-center rounded-xl transition duration-300 ease-in-out">
                  {data.icon}
                </div>

                <ListItemText className="text-white ml-5" primary={data.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <div>
          <ListItemText className="ml-8 text-white" primary={"ACCOUNT PAGES"} />
          <List className="flex items-start">
            {subdashboard.map((data, index) => (
              <ListItem
                className="p-2 hover:bg-[#1A1F37] hover:shadow-md group transition duration-300 ease-in-out"
                key={data.id}
              >
                <ListItemButton className="">
                  <div className="text-[#0075FF] bg-[#1A1F37] group-hover:bg-[#0075FF] group-hover:text-white h-[36px] w-[36px] flex justify-center items-center rounded-xl transition duration-300 ease-in-out">
                    {data.icon}
                  </div>

                  <ListItemText
                    className="text-white ml-5"
                    primary={data.name}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <div className="absolute top-[1220px]">
            <div className="relative left-10">
              <Image src={"/sideItem.png"} height={170} width={220} />
              <div className="absolute inset-0 p-4">
                <div className="h-[40px] flex justify-center items-center w-[40px] bg-white rounded-[12px]">
                  <div className="h-[24px] text-white w-[24px] bg-[#0075FF] rounded-full flex justify-center items-center">
                    <QuestionMarkIcon />
                  </div>
                </div>
                <div className="font-[700] mt-4 text-white">Need Help ?</div>
                <Typography
                  className="text-[12px] font-[400] text-white"
                  variant="subtitle1"
                  gutterBottom
                >
                  Please Check Our Docs
                </Typography>
              </div>
            </div>
          </div>
          <div className="absolute  top-[1400px] left-[70px]">
            <Image src={"/Base.png"} width={186} height={46} />
          </div>
        </div>
      </div>
    </div>
  );
};
