import React from "react";
import {
  bettingData,
  depositStatus,
  rows,
  sportingData,
  tilesData,
} from "@/utils/const";
import SearchIcon from "@mui/icons-material/Search";
import {
  Grid,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const MainContent = () => {
  return (
    <div className="p-6 w-[calc(100vw-400px)]">
      <div className="flex justify-between ">
        <div>
          <div className="flex mt-9">
            <Typography
              className="mr-1 mt-1 font-[400] text-[12px] text-[#A0AEC0]"
              variant="subtitle1"
              gutterBottom
            >
              Pages
            </Typography>

            <Typography
              className="text-white  text-[12px] mt-1 font-[500]"
              variant="subtitle1"
              gutterBottom
            >
              / Dashboard
            </Typography>
          </div>
          <Typography
            className="text-white  text-[14px] mt-1 font-[500]"
            variant="subtitle1"
            gutterBottom
          >
            Dashboard
          </Typography>
        </div>
        <div className="flex">
          <TextField
            id="search"
            type="search"
            placeholder="Type here..."
            className="w-[300px] rounded-xl text-blue-gray-500"
            sx={{ width: 600 }}
            InputProps={{
              startAdornment: (
                <InputAdornment className="text-[#2D3748]" position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <div className="flex text-[#718096] mt-3 ml-6">
            <div className="flex">
              <PersonIcon className="" />
              <p>Sign In</p>
            </div>
            <div className="flex gap-4 ml-4">
              <SettingsIcon />
              <NotificationsIcon />
            </div>
          </div>
        </div>
      </div>
      <main className="flex gap-4 mt-12">
        <Grid container spacing={4}>
          {tilesData?.map((data) => (
            <Grid item key={data?.id} xs={12} sm={6} md={4} lg={3}>
              <div className="relative">
                <Image
                  src={"/tile.png"}
                  width={350}
                  height={0}
                  layout="responsive"
                />
                <div className="absolute inset-0 flex flex-col justify-center">
                  <div className="flex justify-between items-center px-5 py-2">
                    <div className="">
                      <p className="text-[12px] font-[500] text-[#A0AEC0]">
                        {data?.title}
                      </p>
                      <div className="flex items-center gap-4">
                        <p className="font-[700] text-[18px] text-white">
                          {data?.users}
                        </p>
                        {data.profit && (
                          <p
                            className={`text-[14px] font-[700] ${
                              data.profit === "green"
                                ? "text-[#01B574]"
                                : "text-[#E31A1A]"
                            }`}
                          >
                            {data?.percentage}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-white bg-[#0075FF] group-hover:text-white h-[36px] w-[36px] flex justify-center items-center rounded-xl transition duration-300 ease-in-out">
                      {data.icon}
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </main>

      <div className="mt-4 flex gap-4">
        <div className="relative">
          <Image
            className="object-cover"
            src="/big-card.png"
            width={500}
            height={344}
            layout="responsive"
          />
          <div className="absolute inset-0 py-10 px-6">
            <p className="text-[14px] font-[500] text-[#A0AEC0]">
              Welcome back,
            </p>
            <p className="text-[32px] betting-font font-[800] text-white">
              Owner Admin
            </p>
            <div className="flex gap-4">
              <Image src={"/mail.png"} height={24} width={24} />
              <p className="text-[16px] text-[#A0AEC0] font-[400]">
                xyz454@gmail.com
              </p>
            </div>
            <div className="flex gap-4 mt-3">
              <Image src={"/phone.png"} height={24} width={24} />
              <p className="text-[16px] text-[#A0AEC0] font-[400]">
                +92873435262563
              </p>
            </div>
            <p className="text-[12px] font-[500] mt-[100px] text-white">
              Tap to record
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            className="object-cover"
            src="/big-card2.png"
            width={200}
            height={344}
            layout="responsive"
          />
          <div className="absolute inset-0">
            <div className="p-6">
              <p className="text-white font-[800] text-[20px] betting-font">
                CASINO GGR
              </p>
              <p className="text-[#A0AEC0] font-[500] text-[16px]">
                From all provider
              </p>
            </div>
            {/* <CircularProgress determinate value={25} /> */}
          </div>
        </div>
        <div>
          <Image
            className="object-cover"
            src="/big-card3.png"
            width={400}
            height={344}
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex w-full gap-2 mt-8">
        <div className="graph-container w-[720px] p-4">
          {/* <div className=" rounded-2xl bg-gradient-to-br from-[#060c29] via-transparent to-[rgba(4, 12, 48, 0.5)] backdrop-blur-[60px] ">
          dd
        </div> */}
        </div>
        <div className=" graph-container p-4 ">
          <div className="flex justify-center py-4 gap-4 rounded-2xl bg-gradient-to-br from-[#060c29] via-transparent to-[rgba(4, 12, 48, 0.5)] backdrop-blur-[60px]">
            <div className="w-[283px] h-[196px] flex flex-col justify-center items-center rounded-md bg-gradient-to-br from-[#46F209] via-[#B7FF9D] to-[#BFFFA9]">
              <p className="text-[#1400FF]  font-[700] text-[40px]">5098900</p>
              <p className="text-[#BB2525] text-[18px]  font-[700]">
                Total Deposit
              </p>
            </div>
            <div className="w-[283px] h-[196px] flex justify-center items-center flex-col rounded-md bg-gradient-to-br from-[#F67D7D] via-[#AC4040] to-[#FF6B6B]">
              <p className="text-[#46F209]  font-[700] text-[40px]">5098900</p>
              <p className="text-white text-[18px]  font-[700]">
                Total Withdrawal
              </p>
            </div>
          </div>
          <div className="mt-4">
            <p className="font-[700] text-white text-[18px]">
              Deposit & Withdrawal detail
            </p>
            <p className="text mt-3 text-[#01B574] text-[14px] font-[700]">
              (+23)
              <span className="text-[14px] font-[500] text-[#A0AEC0] ml-1">
                than last week
              </span>
            </p>
          </div>
          <div className="mt-4">
            <div className="flex gap-4">
              {depositStatus?.map((data) => (
                <div key={data?.id}>
                  <div className="flex items-center gap-2">
                    <div className="text-white bg-[#0075FF] group-hover:text-white h-[36px] w-[36px] flex justify-center items-center rounded-xl transition duration-300 ease-in-out">
                      {data?.icon}
                    </div>
                    <p className="text-[14px]  font-[500] text-[#A0AEC0]">
                      {data?.title}
                    </p>
                  </div>
                  <p className="text-[18px] text-white mt-2 font-[700]">
                    {data?.numbers}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <main className="flex gap-4 mt-12">
        <Grid container spacing={4}>
          {sportingData?.map((data) => (
            <Grid item key={data?.id} xs={12} sm={6} md={4} lg={3}>
              <div className="relative">
                <Image
                  src={"/tile.png"}
                  width={350}
                  height={0}
                  layout="responsive"
                />
                <div className="absolute inset-0 flex flex-col justify-center">
                  <div className="flex justify-between items-center px-5 py-2">
                    <div className="">
                      <p className="text-[12px] font-[500] text-[#A0AEC0]">
                        {data?.title}
                      </p>
                      <div className="flex items-center gap-4">
                        <p className="font-[700] text-[18px] text-white">
                          {data?.count}
                        </p>
                        {data.profit && (
                          <p
                            className={`text-[14px] font-[700] ${
                              data.profit ? "text-[#01B574]" : "text-[#E31A1A]"
                            }`}
                          >
                            {data?.profit}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-white bg-[#0075FF] group-hover:text-white h-[36px] w-[36px] flex justify-center items-center rounded-xl transition duration-300 ease-in-out">
                      {data.icon}
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </main>

      <div className="flex gap-4 mt-12  w-full">
        <div className="rounded-xl w-[900px] table-container py-12 px-8">
          <div className="flex justify-between">
            <div>
              <p className="betting-font text-white text-[18px] font-[800]">
                Recent Betting
              </p>
              <div className="flex items-center gap-1">
                <Image src={"/check.png"} width={18} height={18} />
                <p className="text-[14px] text-[#A0AEC0] font-[700]">
                  30 done this month
                </p>
              </div>
            </div>
            <div>
              <MoreVertIcon className="text-[#A0AEC0]" />
            </div>
          </div>
          <TableContainer className="bg-transparent">
            <Table
              // sx={{ width: 550 }}
              className=" p-12"
              aria-label="simple table"
            >
              <TableHead>
                <TableRow className="text-white ">
                  <TableCell className="text-[#A0AEC0] text-[10px] font-[700]">
                    USER NAME
                  </TableCell>
                  <TableCell className="text-[#A0AEC0] text-[10px] font-[500]">
                    Sport/casino
                  </TableCell>
                  <TableCell className="text-[#A0AEC0] text-[10px] font-[500]">
                    Stack
                  </TableCell>
                  <TableCell className="text-[#A0AEC0] text-[10px] font-[500]">
                    Back/ Lay
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell
                      // style={{ width: "400px" }}
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                    <TableCell>{row.carbs}</TableCell>
                    <TableCell>{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="rounded-xl w-[519px] table-container py-12 px-8">
          <div className="flex justify-between">
            <div>
              <p className="betting-font text-white text-[18px] font-[800]">
                Recent Betting
              </p>
              <div className="flex items-center gap-1">
                <Image src={"/check.png"} width={18} height={18} />
                <p className="text-[14px] text-[#A0AEC0] font-[700]">
                  +30% done this month
                </p>
              </div>
              <p className="text-[#A0AEC0] text-[10px] font-[500] mt-2">
                NEWEST
              </p>
            </div>
            <div>
              <MoreVertIcon className="text-[#A0AEC0]" />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            {bettingData?.map((data) => (
              <div
                key={data?.id}
                className="flex  items-center justify-between"
              >
                <div className="flex">
                  <div>
                    <Image src={data?.image} width={37} height={35} />
                  </div>
                  <div className="ml-2">
                    <p className="text-[14px] font-[500] text-white">
                      User Name
                    </p>
                    <p className="text-[#A0AEC0] text-[10px] font-[500] mt-2">
                      22 DEC 7:20 PM
                    </p>
                  </div>
                </div>
                <div className="flex">
                  {data?.profit || data?.amount ? (
                    <p
                      className={`${
                        data?.profit === "green"
                          ? "text-[#01B574] "
                          : "text-[#E31A1A]"
                      } text-[14px] font-[500] mt-2`}
                    >
                      {data.amount}
                    </p>
                  ) : (
                    <Image src={data?.check} width={18} height={18} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
