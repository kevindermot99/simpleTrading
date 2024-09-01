import React from "react";
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
function Home() {
    const testTransactions = [
        {
            pfp: "https://windybot.com/images/rabbit-anime.jpg",
            name: "Alice Johnson",
            OrderId: "0R932HB984",
            DoneAt: "June 12, 2023, 11:21 PM",
            Type: "Buy",
            Size: "0.03",
            pl: { status: "loss", amount: "$12" },
            Symbol: "audusd",
        },
        {
            pfp: "https://images.generated.photos/vmb60Gy5dtfzvX6D8wAVbhdQ04vMzUJTHP_HLuhpoQA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/NTQ2MTAxLmpwZw.jpg",
            name: "Bob Smith",
            OrderId: "1T847CZX912",
            DoneAt: "June 13, 2023, 09:45 AM",
            Type: "Sell",
            Size: "0.10",
            pl: { status: "profit", amount: "$30" },
            Symbol: "eurusd",
        },
        {
            pfp: "",
            name: "Carol Davis",
            OrderId: "2F658DVQ731",
            DoneAt: "June 14, 2023, 03:30 PM",
            Type: "Buy",
            Size: "0.05",
            pl: { status: "profit", amount: "$322" },
            Symbol: "gbpusd",
        },
        {
            pfp: "https://images.generated.photos/yz0oz48xDKxIIyh3EHddnjACyS0vSaw00o45E7nybis/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNjU2/MDYyLmpwZw.jpg",
            name: "David Wilson",
            OrderId: "3J249LKP654",
            DoneAt: "June 15, 2023, 07:15 PM",
            Type: "Sell",
            Size: "0.02",
            pl: { status: "loss", amount: "$1090" },
            Symbol: "usdchf",
        },
        {
            pfp: "https://images.generated.photos/NoZffSFDtiQf_rznmkReTzZhMoz7aOi3kHi7_mziBo0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/OTIzMTY0LmpwZw.jpg",
            name: "Eve Clark",
            OrderId: "4M860RZP375",
            DoneAt: "June 16, 2023, 12:00 PM",
            Type: "Buy",
            Size: "0.07",
            pl: { status: "profit", amount: "$690" },
            Symbol: "usdjpy",
        },
        {
            pfp: "https://windybot.com/images/rabbit-anime.jpg",
            name: "Alice Johnson",
            OrderId: "0R932HB984",
            DoneAt: "June 12, 2023, 11:21 PM",
            Type: "Buy",
            Size: "0.03",
            pl: { status: "loss", amount: "$12" },
            Symbol: "audusd",
        },
        {
            pfp: "https://images.generated.photos/vmb60Gy5dtfzvX6D8wAVbhdQ04vMzUJTHP_HLuhpoQA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/NTQ2MTAxLmpwZw.jpg",
            name: "Bob Smith",
            OrderId: "1T847CZX912",
            DoneAt: "June 13, 2023, 09:45 AM",
            Type: "Sell",
            Size: "0.10",
            pl: { status: "profit", amount: "$30" },
            Symbol: "eurusd",
        },
        {
            pfp: "",
            name: "Carol Davis",
            OrderId: "2F658DVQ731",
            DoneAt: "June 14, 2023, 03:30 PM",
            Type: "Buy",
            Size: "0.05",
            pl: { status: "profit", amount: "$322" },
            Symbol: "gbpusd",
        },
        {
            pfp: "https://images.generated.photos/yz0oz48xDKxIIyh3EHddnjACyS0vSaw00o45E7nybis/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNjU2/MDYyLmpwZw.jpg",
            name: "David Wilson",
            OrderId: "3J249LKP654",
            DoneAt: "June 15, 2023, 07:15 PM",
            Type: "Sell",
            Size: "0.02",
            pl: { status: "loss", amount: "$1090" },
            Symbol: "usdchf",
        },
        {
            pfp: "https://images.generated.photos/NoZffSFDtiQf_rznmkReTzZhMoz7aOi3kHi7_mziBo0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/OTIzMTY0LmpwZw.jpg",
            name: "Eve Clark",
            OrderId: "4M860RZP375",
            DoneAt: "June 16, 2023, 12:00 PM",
            Type: "Buy",
            Size: "0.07",
            pl: { status: "profit", amount: "$690" },
            Symbol: "usdjpy",
        },
        {
            pfp: "https://windybot.com/images/rabbit-anime.jpg",
            name: "Alice Johnson",
            OrderId: "0R932HB984",
            DoneAt: "June 12, 2023, 11:21 PM",
            Type: "Buy",
            Size: "0.03",
            pl: { status: "loss", amount: "$12" },
            Symbol: "audusd",
        },
        {
            pfp: "https://images.generated.photos/vmb60Gy5dtfzvX6D8wAVbhdQ04vMzUJTHP_HLuhpoQA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/NTQ2MTAxLmpwZw.jpg",
            name: "Bob Smith",
            OrderId: "1T847CZX912",
            DoneAt: "June 13, 2023, 09:45 AM",
            Type: "Sell",
            Size: "0.10",
            pl: { status: "profit", amount: "$30" },
            Symbol: "eurusd",
        },
        {
            pfp: "",
            name: "Carol Davis",
            OrderId: "2F658DVQ731",
            DoneAt: "June 14, 2023, 03:30 PM",
            Type: "Buy",
            Size: "0.05",
            pl: { status: "profit", amount: "$322" },
            Symbol: "gbpusd",
        },
        {
            pfp: "https://images.generated.photos/yz0oz48xDKxIIyh3EHddnjACyS0vSaw00o45E7nybis/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNjU2/MDYyLmpwZw.jpg",
            name: "David Wilson",
            OrderId: "3J249LKP654",
            DoneAt: "June 15, 2023, 07:15 PM",
            Type: "Sell",
            Size: "0.02",
            pl: { status: "loss", amount: "$1090" },
            Symbol: "usdchf",
        },
        {
            pfp: "https://images.generated.photos/NoZffSFDtiQf_rznmkReTzZhMoz7aOi3kHi7_mziBo0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/OTIzMTY0LmpwZw.jpg",
            name: "Eve Clark",
            OrderId: "4M860RZP375",
            DoneAt: "June 16, 2023, 12:00 PM",
            Type: "Buy",
            Size: "0.07",
            pl: { status: "profit", amount: "$690" },
            Symbol: "usdjpy",
        },
    ];
    return (
        <div className="bg-body-white w-full h-full min-h-svh relative">
            <Navbar dynamic="on" />
            {/* Hero */}
            <div className="main-header min-h-[170px] px-10 pt-5 text-text-color-white tracking-tight">
                {/* Greetings */}
                <h1 className=" font-medium text-xl">Welcome back, Petter!</h1>
                <div className="flex items-center gap-1 my-3">
                    <button
                        className={`text-sm px-4 py-2 font-medium hover:bg-stone-300/10 border-b-2 border-text-color-white`}
                    >
                        Overview
                    </button>
                    <Link
                        to="/transactions"
                        className={`text-sm px-4 py-2 font-medium hover:bg-stone-300/10 border-b-2 border-transparent opacity-80 hover:opacity-100`}
                    >
                        Transactions
                    </Link>
                </div>
            </div>
            <div className="flex gap-5 w-full h-full bg-transparent mt-[-50px] px-10 text-text-color-black pb-10">
                <div className="w-1/3 min-h-full flex flex-col gap-5 ">
                    {/* Balance */}
                    <div className=" w-full h-fit bg-white shadow-lg shadow-stone-600/10 flex flex-col p-6">
                        <div className="flex items-center justify-between w-full">
                            <h1 className="text-sm text-text-color-black/60 font-medium">
                                Total Balance
                            </h1>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        // Seed Token
                                        colorPrimary: "#21232a",
                                        colorPrimaryBg: "#e8e8e8",
                                        borderRadius: 0,
                                        colorBorder: "#00000010",
                                        colorBgContainer: "#e5e7eb70",
                                        colorBgTextHover: "red",
                                        zIndexPopupBase: "1",
                                        zIndexBase: "1"

                                    },
                                }}
                            >
                                <Select
                                    defaultValue="USD"
                                    style={{
                                        width: "120px",
                                        boxShadow: "none",
                                    }}
                                    allowClear
                                    options={[
                                        { value: "USD", label: "USD" },
                                        { value: "Bitcoin", label: "Bitcoin" },
                                        { value: "Ethereum", label: "Ethereum" },
                                        { value: "USDT", label: "USDT" },
                                        { value: "USDC", label: "USDC" },
                                        { value: "DAI", label: "DAI" },
                                        { value: "BUSD", label: "BUSD" },
                                        { value: "Ripple", label: "Ripple" },
                                        { value: "Litecoin", label: "Litecoin" },
                                    ]}
                                    placeholder="Currency"
                                />
                            </ConfigProvider>
                        </div>
                        <div className="w-full py-3">
                            {/* Balance */}
                            <CountUp
                                start={0}
                                end={320.2}
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
                                            className="py-2 text-3xl font-extrabold"
                                            ref={countUpRef}
                                        />
                                    </div>
                                )}
                            </CountUp>
                            <p className="text-xs pt-1 text-text-color-black/60 font-medium ">
                                <span className="text-green-600">129%</span> increase for the
                                last 7 days
                            </p>
                        </div>
                        <div className="flex items-center gap-2 mt-5">
                            {/* Deposit */}
                            <button
                                className={`w-full text-sm px-4 py-2 text-text-color-white font-semibold tracking-tight bg-button-color hover:opacity-80 transition border-b-2 border-transparent flex items-center justify-center gap-1`}
                            >
                                <TiArrowDownThick className="text-base" />
                                Deposit
                            </button>
                            {/* withdraw */}
                            <button
                                className={`w-full text-sm px-4 py-2 text-text-color-black font-semibold tracking-tight bg-border-lines-light/70 hover:opacity-80 transition border-b-2 border-transparent flex items-center justify-center gap-1`}
                            >
                                <TiArrowUpThick className="text-base" />
                                Withdraw
                            </button>
                        </div>
                    </div>
                    {/* Ads */}
                    <div className=" w-full h-full flex-1 bg-white shadow-lg shadow-stone-600/10 flex flex-col gap-4 p-6">
                        <div className="flex items-center justify-between w-full">
                            <h1 className="text-sm text-text-color-black/60 font-medium">
                                Sponsored
                            </h1>
                        </div>
                        <div className="w-full bg-border-lines-light h-[120px]"></div>
                        <div className="w-full bg-border-lines-light h-[10px]"></div>
                        <div className="w-1/2 bg-border-lines-light h-[10px]"></div>
                        <div className="w-full bg-border-lines-light h-[120px]"></div>
                        <div className="w-full bg-border-lines-light h-[10px]"></div>
                        <div className="w-1/2 bg-border-lines-light h-[10px]"></div>
                    </div>
                </div>
                <div className="w-2/3 min-h-full flex flex-col gap-5">
                    <div className="w-full h-fit bg-white shadow-lg shadow-stone-600/10 grid gap-0 grid-cols-2 ">
                        {/* Profit */}
                        <div className="flex flex-col p-6 w-full h-fit border-r-[1px] border-b-[1px] ">
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
                        <div className="flex flex-col p-6 w-full h-fit border-b-[1px]">
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
                        <div className="flex flex-col p-6 w-full h-fit border-r-[1px] ">
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
                        {/* Margin Level */}
                        <div className="flex flex-col p-6 w-full h-fit">
                            <div className="flex items-center justify-between w-full">
                                <h1 className="text-sm text-text-color-black/60 font-medium">
                                    Margin Level %
                                </h1>
                                <div className=" bg-stone-600/5 p-2 ">
                                    <TbKeyframes className="text-stone-500 text-2xl" />
                                </div>
                            </div>
                            <div className="w-full pt-0">
                                {/* Balance */}
                                <CountUp
                                    start={0}
                                    end={405}
                                    duration={0.9}
                                    separator=","
                                    // decimals={2}
                                    decimal="."
                                    // prefix="$ "
                                    suffix=" %"
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
                                    <span className="text-green-600">73%</span> increase for the
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
                        <table class="w-full text-sm text-center table-auto">
                            <thead class="text-xs text-gray-700 uppercase border-b">
                                <tr>
                                    <th scope="col" class=" text-left py-3">

                                    </th>
                                    <th scope="col" class=" text-left py-3">
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
                                {testTransactions.slice(0, 5).map((transaction, index) => (
                                    <tr class="even:bg-white odd:bg-border-lines-light/40 border-b text-sm text-text-color-black/70 ">
                                        <td class=" py-3 px-2 text-center">{testTransactions.length - index}</td>
                                        <td class=" py-3 text-left font-medium text-text-color-black whitespace-nowrap tracking-tight flex items-center gap-2 ">
                                            <div className="pointer-events-none w-7 h-7 flex rounded-full bg-stone-200">
                                                {transaction.pfp !== "" ?
                                                    <img src={transaction.pfp} alt="pfp" className="w-full h-full rounded-full" />
                                                    :
                                                    <h1 className="w-full h-full rounded-full flex items-center justify-center font-bold text-xs text-transparent bg-clip-text bg-gradient-to-b from-text-color-black to-text-color-black/20 uppercase">{transaction.name.slice(0, 2)}</h1>
                                                }
                                            </div>
                                            <Link to={'/'} className="hover:underline">{transaction.name}</Link>
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
export default Home;
