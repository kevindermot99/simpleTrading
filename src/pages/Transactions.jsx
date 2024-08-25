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
function Transactions() {
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
    return (
        <div className="bg-body-white w-full h-full min-h-svh relative">
            <Navbar />
            {/* Hero */}
            <div className="main-header min-h-[170px] px-10 pt-5 text-text-color-white tracking-tight">
                {/* Greetings */}
                <h1 className=" font-medium text-xl">Transactions History</h1>
                <div className="flex items-center gap-1 my-3">
                    <Link 
                        to="/"
                        className={`text-sm px-4 py-2 font-medium hover:bg-stone-300/10 border-b-2 border-text-color-white`}
                    >
                        Overview
                    </Link>
                    <button
                        className={`text-sm px-4 py-2 font-medium hover:bg-stone-300/10 border-b-2 border-transparent opacity-50 hover:opacity-100`}
                    >
                        Transactions
                    </button>
                    <button
                        className={`text-sm px-4 py-2 font-medium hover:bg-stone-300/10 border-b-2 border-transparent opacity-50 hover:opacity-100`}
                    >
                        Invoices
                    </button>
                </div>
            </div>
            <div className="flex gap-5 w-full h-full bg-transparent mt-[-50px] px-10 text-text-color-black pb-10">
                <div className="w-full min-h-full flex flex-col gap-5">
                    <div className=" w-full flex-1 h-full bg-white shadow-lg shadow-stone-600/10 flex flex-col gap-2 p-6">
                        <div className="flex items-center justify-between w-full pb-2">
                            <h1 className="text-xs text-text-color-black/60 font-medium">
                                Recent Transactions History
                            </h1>
                            <Link
                                kto="/"
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
export default Transactions;
