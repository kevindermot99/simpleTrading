import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Select, ConfigProvider } from "antd";
import CountUp from "react-countup";
import { LuArrowDownFromLine, LuExternalLink } from "react-icons/lu";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";
import {
    TbCoins,
    TbKeyframes,
    TbLayoutAlignCenter,
    TbMoneybag,
    TbSpacingHorizontal,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { Input } from 'antd';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Leaders() {

    const testLeaderss = [
        {
            name: "彩姬",
            pfp: "https://windybot.com/images/rabbit-anime.jpg",
            status: "active",
            winRate: "23%",
            RiskToReward: "1;4",
            Copiers: "4932",
            followers: "239443",
        },
        {
            name: "Hellis Jennifer",
            pfp: "https://images.generated.photos/vmb60Gy5dtfzvX6D8wAVbhdQ04vMzUJTHP_HLuhpoQA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/NTQ2MTAxLmpwZw.jpg",
            status: "active",
            winRate: "23%",
            RiskToReward: "1;4",
            Copiers: "4932",
            followers: "239443",
        },
        {
            name: "Alex Murphy",
            pfp: "",
            status: "active",
            winRate: "23%",
            RiskToReward: "1;4",
            Copiers: "4932",
            followers: "239443",
        },
        {
            name: "Sophia Larson",
            pfp: "https://images.generated.photos/yz0oz48xDKxIIyh3EHddnjACyS0vSaw00o45E7nybis/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNjU2/MDYyLmpwZw.jpg",
            status: "active",
            winRate: "23%",
            RiskToReward: "1;4",
            Copiers: "4932",
            followers: "239443",
        },
        {
            name: "Liam Jones",
            pfp: "https://images.generated.photos/NoZffSFDtiQf_rznmkReTzZhMoz7aOi3kHi7_mziBo0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/OTIzMTY0LmpwZw.jpg",
            status: "active",
            winRate: "23%",
            RiskToReward: "1;4",
            Copiers: "4932",
            followers: "239443",
        },
    ];
    const testMotivations = [
        {
            name: "Noah Davis",
            pfp: "https://images.generated.photos/5UTGzyeCl4dft4T8H39LkUYjejDFAQwWJrKXsqPB3p0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wOTQy/MDk2LmpwZw.jpg",
            storyID: "673129054",
        },
        {
            name: "Ella White",
            pfp: "",
            storyID: "290183764",
        },
        {
            name: "Hellis Jennifer",
            pfp: "https://images.generated.photos/vmb60Gy5dtfzvX6D8wAVbhdQ04vMzUJTHP_HLuhpoQA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/NTQ2MTAxLmpwZw.jpg",
            storyID: "238482439",
        },
        {
            name: "Benjamin Wilson",
            pfp: "",
            storyID: "912348765",
        },
        {
            name: "Amelia Clark",
            pfp: "",
            storyID: "657284910",
        },
        {
            name: "Lucas Lee",
            pfp: "https://images.generated.photos/o5XySkEHNSLKbz0BgdX54XvjrbINrpbdssKMNaVT9hY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE5NTg4LmpwZw.jpg",
            storyID: "562890347",
        },
        {
            name: "James Taylor",
            pfp: "",
            storyID: "450982137",
        },
        {
            name: "Sophia Larson",
            pfp: "https://images.generated.photos/yz0oz48xDKxIIyh3EHddnjACyS0vSaw00o45E7nybis/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNjU2/MDYyLmpwZw.jpg",
            storyID: "276549038",
        },
        {
            name: "Liam Jones",
            pfp: "https://images.generated.photos/Hn__ZwCW_Wavjkd7hNBtwqQPGU3pB_fp2Gixi96hV8I/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/OTYwMzMwLmpwZw.jpg",
            storyID: "123789456",
        },
        {
            name: "Charlotte Martin",
            pfp: "",
            storyID: "823047561",
        },
        {
            name: "彩姬",
            pfp: "https://windybot.com/images/rabbit-anime.jpg",
            storyID: "238482439",
        },
        {
            name: "Mia Thompson",
            pfp: "https://images.generated.photos/NoZffSFDtiQf_rznmkReTzZhMoz7aOi3kHi7_mziBo0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/OTIzMTY0LmpwZw.jpg",
            storyID: "349058123",
        },
        {
            name: "Olivia Smith",
            pfp: "https://images.generated.photos/g399M3xqLUryqNVRr46ay__LFn5jXbjgQkO9sLkwi6I/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE5MTMzLmpwZw.jpg",
            storyID: "764839205",
        },
        {
            name: "Alex Murphy",
            pfp: "https://images.generated.photos/RtScNfGnBWqcmxFGX8aScCnKYTGxhM1hHzWNrPW-6DY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/MTkxMjc2LmpwZw.jpg",
            storyID: "983453671",
        },
        {
            name: "Ethan Wang",
            pfp: "https://images.generated.photos/_ZsARs1FxGp77W9zClDdzgZ_7F5s70cxSJUhAdVhrFM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/NTc0NzI4LmpwZw.jpg",
            storyID: "456723198",
        },
        {
            name: "Ava Brown",
            pfp: "https://images.generated.photos/5lwh7iKyt7VjW7tTW02hCJW1UbXFYbeElntPQBttnxc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDA4MjI4LmpwZw.jpg",
            storyID: "986712354",
        },
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 12,
            slidesToSlide: 5 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 7,
            slidesToSlide: 5 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className="bg-body-white w-full h-full min-h-svh relative">
            <Navbar dynamic="on" />
            {/* Hero */}
            <div className="main-header min-h-[170px] px-10 pt-5 text-text-color-white tracking-tight">
                <h1 className=" font-medium text-xl">Leaderboard</h1>
                <div className="flex items-center gap-1 my-3">
                    <button
                        className={`text-sm px-4 py-2 font-medium hover:bg-stone-300/10 border-b-2 border-text-color-white`}
                    >
                        All
                    </button>
                    <button
                        className={`text-sm px-4 py-2 font-medium hover:bg-stone-300/10 border-b-2 border-transparent opacity-50 hover:opacity-100`}
                    >
                        Following
                    </button>
                </div>
            </div>
            <div className="flex gap-5 w-full h-full bg-transparent mt-[-50px] px-10 text-text-color-black pb-10">
                <div className="w-full min-h-full flex flex-col gap-5">
                    <div className="w-full h-fit flex bg-white px-7 shadow-xl shadow-stone-600/10 ">
                        {/* Profit */}
                        <div className="flex flex-col p-0 mt-5 w-full h-fit gap-2 ">
                            <h1 className="text-xs text-text-color-black/60 font-medium">
                                Leaderboard Motivation
                            </h1>

                            <div className="w-full flex items-start gap-1 pb-2">
                                <Carousel
                                    containerClass="carousel-container"
                                    itemClass="carousel-item"

                                    swipeable={false}
                                    draggable={false}
                                    showDots={true}
                                    responsive={responsive}
                                    ssr={true} // means to render carousel on server-side.
                                    infinite={false}
                                    autoPlay={false}
                                    // autoPlaySpeed={1000}
                                    // keyBoardControl={true}
                                    customTransition="all .3s"
                                    transitionDuration={500}
                                    removeArrowOnDeviceType={["tablet", "mobile"]}
                                    //    deviceType={this.props.deviceType}
                                    dotListClass="custom-dot-list-style"
                                >
                                    {testMotivations.map((motive, index) => (
                                        <div className="flex items-center justify-center snap-start flex-col gap-3 w-fit p-2 hover:opacity-80">
                                            <div className="select-none pointer-events-none min-w-16 min-h-16 flex rounded-full ring-[3px] bg-stone-200 ring-button-color/40 ring-offset-2 ring-offset-white">
                                                {motive.pfp !== "" ?
                                                    <img src={motive.pfp} alt="pfp" className="w-16 h-16 rounded-full" />
                                                    :
                                                    <h1 className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-b from-text-color-black to-text-color-black/20 uppercase">
                                                        {motive.name.slice(0, 2)}
                                                    </h1>
                                                }
                                            </div>
                                            <h1 className="text-xs text-center min-w-[70px] max-w-[70px] truncate text-text-color-black/60 font-semibold">
                                                {motive.name}
                                            </h1>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    {/* <h1
                        className="text-xs text-text-color-black/50 font-medium w-fit h-fit flex items-center gap-1"
                    >

                    </h1> */}
                    <div className=" w-full flex-1 h-full min-h-[350px] bg-white shadow-lg shadow-stone-600/10 flex flex-col gap-2 p-6">
                        <div className="flex items-center justify-between w-full pb-3">
                            <h1 className="text-sm text-text-color-black/60 font-medium">
                                Leaderboard
                            </h1>
                            <form className="flex items-center gap-2">
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            // Seed Token
                                            colorPrimary: "#21232a",
                                            colorPrimaryBg: "#e8e8e8",
                                            borderRadius: 2,
                                            colorBorder: "#00000010",
                                            colorBgContainer: "#e5e7eb70",
                                            zIndexPopupBase: "1",
                                            zIndexBase: "1"
                                        },
                                    }}
                                >
                                    <Input placeholder="Search leader" style={{ width: "230px" }} />
                                </ConfigProvider>
                                {/* <button type="submit" className="bg-button-color py-2 text-xs text-white font-medium px-6">Filter</button> */}
                            </form>
                        </div>
                        <table class="w-full text-sm text-center table-auto">
                            <thead class="text-xs text-gray-700 uppercase border-b">
                                <tr>
                                    <th scope="col" class=" text-left pb-3">

                                    </th>
                                    <th scope="col" class=" text-left pb-3">
                                        Trader
                                    </th>
                                    <th scope="col" class=" pb-3">
                                        Status
                                    </th>
                                    <th scope="col" class=" pb-3">
                                        Win Rate
                                    </th>
                                    <th scope="col" class=" pb-3">
                                        Risk to Reward
                                    </th>
                                    <th scope="col" class=" pb-3">
                                        Copiers
                                    </th>
                                    <th scope="col" class=" pb-3">
                                        Followers
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {testLeaderss.map((Leaders, index) => (
                                    <tr class="even:bg-white odd:bg-border-lines-light/40 border-b text-sm text-text-color-black/70 ">
                                        <td class=" py-3 px-2 text-center">{index + 1}</td>
                                        <td class=" py-3 text-left font-medium text-text-color-black whitespace-nowrap tracking-tight flex items-center gap-2 ">
                                            <div className="pointer-events-none w-7 h-7 flex rounded-full bg-stone-200">
                                                {Leaders.pfp !== "" ?
                                                    <img src={Leaders.pfp} alt="pfp" className="w-full h-full rounded-full" />
                                                    :
                                                    <h1 className="w-full h-full rounded-full flex items-center justify-center font-bold text-xs text-transparent bg-clip-text bg-gradient-to-b from-text-color-black to-text-color-black/20 uppercase">{Leaders.name.slice(0, 2)}</h1>
                                                }
                                            </div>
                                            <Link to={'/'} className="hover:underline">{Leaders.name}</Link>
                                        </td>
                                        <td class=" py-3">{Leaders.status}</td>
                                        <td class=" py-3">{Leaders.winRate}</td>
                                        <td class=" py-3">{Leaders.RiskToReward}</td>
                                        <td class=" py-3">{Leaders.Copiers}</td>
                                        <td class=" py-3">{Leaders.followers}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Leaders;
