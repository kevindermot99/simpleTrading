import React, { useRef } from "react";
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
import useScrollOnDrag from 'react-scroll-ondrag';


function Leaders() {
    const ref = useRef();
    const { events } = useScrollOnDrag(ref);

    const testTransactions = [
        {
            name: "Alice Johnson",
            OrderId: "0R932HB984",
            DoneAt: "June 12, 2023, 11:21 PM",
            Type: "Buy",
            Size: "0.03",
            pl: { status: "loss", amount: "$12" },
            Symbol: "audusd",
        },
        {
            name: "Bob Smith",
            OrderId: "1T847CZX912",
            DoneAt: "June 13, 2023, 09:45 AM",
            Type: "Sell",
            Size: "0.10",
            pl: { status: "profit", amount: "$30" },
            Symbol: "eurusd",
        },
        {
            name: "Carol Davis",
            OrderId: "2F658DVQ731",
            DoneAt: "June 14, 2023, 03:30 PM",
            Type: "Buy",
            Size: "0.05",
            pl: { status: "profit", amount: "$322" },
            Symbol: "gbpusd",
        },
        {
            name: "David Wilson",
            OrderId: "3J249LKP654",
            DoneAt: "June 15, 2023, 07:15 PM",
            Type: "Sell",
            Size: "0.02",
            pl: { status: "loss", amount: "$1090" },
            Symbol: "usdchf",
        },
        {
            name: "Eve Clark",
            OrderId: "4M860RZP375",
            DoneAt: "June 16, 2023, 12:00 PM",
            Type: "Buy",
            Size: "0.07",
            pl: { status: "profit", amount: "$690" },
            Symbol: "usdjpy",
        },
    ];
    const testMotivations = [
        {
            name: "彩姬",
            pfp: "https://windybot.com/images/rabbit-anime.jpg",
            storyID: "238482439",
        },
        {
            name: "Hellis Jennifer",
            pfp: "https://images.generated.photos/vmb60Gy5dtfzvX6D8wAVbhdQ04vMzUJTHP_HLuhpoQA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/NTQ2MTAxLmpwZw.jpg",
            storyID: "238482439",
        },
        {
            name: "Alex Murphy",
            pfp: "https://images.generated.photos/RtScNfGnBWqcmxFGX8aScCnKYTGxhM1hHzWNrPW-6DY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/MTkxMjc2LmpwZw.jpg",
            storyID: "983453671",
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
            name: "Mia Thompson",
            pfp: "https://images.generated.photos/NoZffSFDtiQf_rznmkReTzZhMoz7aOi3kHi7_mziBo0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/OTIzMTY0LmpwZw.jpg",
            storyID: "349058123",
        },
        {
            name: "Ethan Wang",
            pfp: "https://images.generated.photos/_ZsARs1FxGp77W9zClDdzgZ_7F5s70cxSJUhAdVhrFM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/NTc0NzI4LmpwZw.jpg",
            storyID: "456723198",
        },
        {
            name: "Olivia Smith",
            pfp: "https://images.generated.photos/g399M3xqLUryqNVRr46ay__LFn5jXbjgQkO9sLkwi6I/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE5MTMzLmpwZw.jpg",
            storyID: "764839205",
        },
        {
            name: "Lucas Lee",
            pfp: "https://images.generated.photos/o5XySkEHNSLKbz0BgdX54XvjrbINrpbdssKMNaVT9hY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE5NTg4LmpwZw.jpg",
            storyID: "562890347",
        },
        {
            name: "Ava Brown",
            pfp: "https://images.generated.photos/5lwh7iKyt7VjW7tTW02hCJW1UbXFYbeElntPQBttnxc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDA4MjI4LmpwZw.jpg",
            storyID: "986712354",
        },
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
            name: "James Taylor",
            pfp: "",
            storyID: "450982137",
        },
        {
            name: "Charlotte Martin",
            pfp: "",
            storyID: "823047561",
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
        }

    ];

    return (
        <div className="bg-body-white w-full h-full min-h-svh relative">
            <Navbar dynamic="off" />
            {/* Hero */}
            {/* <div className="main-header min-h-[170px] px-10 pt-5 text-text-color-white tracking-tight">
                <h1 className=" font-medium text-xl">Leaderboard</h1>
            </div> */}
            <div className="flex gap-5 w-full h-full bg-transparent mt-[-110] px-10 text-text-color-black pb-10">
                <div className="w-full min-h-full flex flex-col gap-5">
                    <div className="w-full h-fit bg-white shadow-stone-600/10 grid gap-0 grid-cols-1 ">
                        {/* Profit */}
                        <div className="flex flex-col p-0 mt-5 w-full h-fit gap-2 ">
                            <h1 className="text-xs text-text-color-black/60 font-medium">
                                Recent Transactions History
                            </h1>
                            <div {...events} ref={ref} className="w-full flex cursor-grab active:cursor-grabbing items-start overflow-x-auto pb-3">
                                {testMotivations.map((motive, index) => (
                                    <div className="flex items-center justify-center select-none flex-col gap-3 w-fit cursor-pointer hover:bg-border-lines-light/70 pt-3 pb-2 px-2">
                                        <div className="pointer-events-none min-w-16 min-h-16 rounded-full ring-[3px] ring-orange-300 ring-offset-2 ring-offset-white">
                                            <img src={motive.pfp} alt="pfp" className="w-16 h-16 rounded-full" />
                                        </div>
                                        <h1 className="cursor-text  text-xs text-center min-w-[70px] max-w-[70px] truncate text-text-color-black/60 font-semibold">
                                            {motive.name}
                                        </h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-fit bg-white shadow-lg shadow-stone-600/10 grid gap-0 grid-cols-3 ">
                        {/* Profit */}
                        <div className="flex flex-col p-6 w-full h-fit border-r-[1px] ">
                            <div className="flex items-center justify-between w-full">
                                <h1 className="text-sm text-text-color-black/60 font-medium">
                                    Profit
                                </h1>
                                <div className=" bg-stone-600/5 p-2 ">
                                    <TbCoins className="text-stone-500 text-2xl" />
                                </div>
                            </div>
                            <div className="w-full pt-0">
                                {/* Profit */}
                                <CountUp
                                    start={0}
                                    end={49.5}
                                    duration={0.9}
                                    separator=","
                                    decimals={2}
                                    decimal="."
                                    prefix="$ "
                                //   suffix=" left"
                                >
                                    {({ countUpRef, start }) => (
                                        <div className="">
                                            <span
                                                className=" text-2xl font-extrabold"
                                                ref={countUpRef}
                                            />
                                        </div>
                                    )}
                                </CountUp>
                                <p className="text-xs pt-2 text-text-color-black/60 font-medium ">
                                    <span className="text-red-500">0.9%</span> descrease for the
                                    last 7 days
                                </p>
                            </div>
                        </div>
                        {/* Margin */}
                        <div className="flex flex-col p-6 w-full h-fit border-r-[1px]">
                            <div className="flex items-center justify-between w-full">
                                <h1 className="text-sm text-text-color-black/60 font-medium">
                                    Margin
                                </h1>
                                <div className=" bg-stone-600/5 p-2 ">
                                    <TbLayoutAlignCenter className="text-stone-500 text-2xl" />
                                </div>
                            </div>
                            <div className="w-full pt-0">
                                {/* Margin */}
                                <CountUp
                                    start={0}
                                    end={92405}
                                    duration={0.9}
                                    separator=","
                                    decimals={2}
                                    decimal="."
                                    prefix="$ "
                                //   suffix=" left"
                                >
                                    {({ countUpRef, start }) => (
                                        <div className="">
                                            <span
                                                className=" text-2xl font-extrabold"
                                                ref={countUpRef}
                                            />
                                        </div>
                                    )}
                                </CountUp>
                                <p className="text-xs pt-2 text-text-color-black/60 font-medium ">
                                    <span className="text-green-600">32%</span> increase for the
                                    last 7 days
                                </p>
                            </div>
                        </div>
                        {/* Free Margin */}
                        <div className="flex flex-col p-6 w-full h-fit ">
                            <div className="flex items-center justify-between w-full">
                                <h1 className="text-sm text-text-color-black/60 font-medium">
                                    Free Margin
                                </h1>
                                <div className=" bg-stone-600/5 p-2 ">
                                    <TbLayoutAlignCenter className="text-stone-500 text-2xl" />
                                </div>
                            </div>
                            <div className="w-full pt-0">
                                {/* Free Margin */}
                                <CountUp
                                    start={0}
                                    end={32218.2}
                                    duration={0.9}
                                    separator=","
                                    decimals={2}
                                    decimal="."
                                    prefix="$ "
                                //   suffix=" left"
                                >
                                    {({ countUpRef, start }) => (
                                        <div className="">
                                            <span
                                                className=" text-2xl font-extrabold"
                                                ref={countUpRef}
                                            />
                                        </div>
                                    )}
                                </CountUp>
                                <p className="text-xs pt-2 text-text-color-black/60 font-medium ">
                                    <span className="text-green-600">2%</span> increase for the
                                    last 7 days
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link
                        kto="/"
                        className="text-sm text-text-color-black/50 font-medium w-fit h-fit flex items-center gap-1"
                    >
                        View Detailed Report
                        <LuExternalLink />
                    </Link>
                    <div className=" w-full flex-1 h-full bg-white shadow-lg shadow-stone-600/10 flex flex-col gap-2 p-6">
                        <div className="flex items-center justify-between w-full pb-2">
                            <h1 className="text-xs text-text-color-black/60 font-medium">
                                Recent Transactions History
                            </h1>
                            <Link
                                to="/transactions"
                                className="text-xs text-text-color-black/50 font-medium w-fit h-fit flex items-center gap-1"
                            >
                                View all
                            </Link>
                        </div>
                        <table class="w-full text-sm text-left table-auto">
                            <thead class="text-xs text-gray-700 uppercase border-b">
                                <tr>
                                    <th scope="col" class=" py-3">
                                        Trader name
                                    </th>
                                    <th scope="col" class=" py-3">
                                        Order id
                                    </th>
                                    <th scope="col" class=" py-3">
                                        Done at
                                    </th>
                                    <th scope="col" class=" py-3">
                                        type
                                    </th>
                                    <th scope="col" class=" py-3">
                                        size
                                    </th>
                                    <th scope="col" class=" py-3">
                                        Profit/Loss
                                    </th>
                                    <th scope="col" class=" py-3">
                                        symbol
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {testTransactions.map((transaction, index) => (
                                    <tr class="even:bg-white odd:bg-border-lines-light/40 border-b text-sm text-text-color-black/70 ">
                                        <td class=" py-3 font-medium text-text-color-black whitespace-nowrap tracking-tight ">
                                            {transaction.name}
                                        </td>
                                        <td class=" py-3">{transaction.OrderId}</td>
                                        <td class=" py-3">{transaction.DoneAt}</td>
                                        <td class=" py-3">{transaction.Type}</td>
                                        <td class=" py-3">{transaction.Size}</td>
                                        <td class=" py-3">
                                            {transaction.pl.status === 'profit' && <span className="text-green-600 font-medium">+{transaction.pl.amount}</span>}
                                            {transaction.pl.status === 'loss' && <span className="text-red-500 font-medium">-{transaction.pl.amount}</span>}
                                        </td>
                                        <td class=" py-3">{transaction.Symbol}</td>
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
