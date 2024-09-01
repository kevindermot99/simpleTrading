import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ConfigProvider, Input, Select } from 'antd';
import { DatePicker, Space } from 'antd';
import { IoIosStar } from "react-icons/io";
import { TbArrowsJoin2 } from "react-icons/tb";
const { RangePicker } = DatePicker;

function JoinPools() {
    const Pools = [
        {
            id: "0989563",
            avatar: "https://img.freepik.com/premium-vector/letter-logo-with-black-background_853558-1836.jpg",
            name: "Forex Alpha Pool",
            rate: 3.4,
            minimumEquity: "$2",
            size: "$20",
            target: "$200",
            withdraws: "Every 24 hours",
            assetsTraded: "Currencies",
            amountInvested: "$16",
            administrator: {
                id: "O9BV9374RGVPEBJK3R4344",
                name: "John Doe",
            },
        },
    ]

    return (
        <div className="bg-body-white w-full h-full min-h-svh relative">
            <Navbar dynamic="on" />
            {/* Hero */}
            <div className="main-header min-h-[170px] px-10 pt-5 text-text-color-white tracking-tight">
                {/* Greetings */}
                <h1 className=" font-medium text-xl">Join Forex Pools</h1>
                <div className="flex items-center gap-1 my-3">
                    <button
                        className={`text-sm px-4 py-2 font-medium hover:bg-stone-300/10 border-b-2 border-text-color-white`}
                    >
                        All
                    </button>
                </div>
            </div>
            <div className="flex gap-5 w-full h-full bg-transparent mt-[-50px] px-10 text-text-color-black pb-10">
                <div className="w-full min-h-full flex flex-col gap-5">
                    <div className=" w-full flex-1 h-full min-h-[500px] bg-white shadow-lg shadow-stone-600/10 flex flex-col gap-2 p-6">
                        <div className="flex itec justify-between w-full">
                            <h1 className="text-sm text-text-color-black/60 font-medium">
                                Available Pools
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
                                    <Select
                                        defaultValue="less than $5"
                                        style={{
                                            width: "150px",
                                            boxShadow: "none",
                                        }}
                                        allowClear
                                        options={[
                                            { value: "less than $5", label: "less than $5" },
                                            { value: "$5 - $20", label: "$5 - $20" },
                                            { value: "$20 - $50", label: "$20 - $50" },
                                            { value: "$50 - $100", label: "$50 - $100" },
                                            { value: "over $100", label: "over $100" },
                                        ]}
                                        placeholder="Currency"
                                    />
                                    <Input placeholder="Search pool name or pool administrator" style={{ width: "230px" }} />
                                </ConfigProvider>
                            </form>
                        </div>
                        <div className="grid grid-cols-4 mt-3">
                            {/* Pool */}
                            {Pools.map((pool, index) => (
                                <div className="w-full h-fit bg-stone-100/50 ring-1 ring-stone-200 flex flex-col items-center justify-start p-3">
                                    <div className="w-12 h-12 rounded-full mt-2">
                                        <img
                                            src={pool.avatar}
                                            className="w-full h-full rounded-full object-cover object-center"
                                        />
                                    </div>
                                    <h1 className="text-base font-medium py-2">{pool.name}</h1>
                                    <div className="flex items-center justify-center text-yellow-500 text-base">
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar className="text-stone-300" />
                                        <IoIosStar className="text-stone-300" />
                                        <p className="text-text-color-black/70 text-xs font-medium pl-1 pt-[4px]">{pool.rate}</p>
                                    </div>
                                    <div className="py-2 text-center">
                                        <h1 className="text-2xl font-bold pb-1">{pool.minimumEquity}</h1>
                                        <p className="text-xs font-medium text-text-color-black/70">Minimum Equity to Invest</p>
                                    </div>
                                    <div className="w-full flex gap-5 text-text-color-black/70 p-3">
                                        <div className="w-full flex flex-col gap-1 text-xs font-medium justify-start items-start">
                                            <div className="flex items-start justify-between w-full">
                                                <span>Pool ID: </span>
                                                <span>{pool.id}</span>
                                            </div>
                                            <div className="flex items-start justify-between w-full">
                                                <span>Pool Size: </span>
                                                <span>{pool.size}</span>
                                            </div>
                                            <div className="flex items-start justify-between w-full">
                                                <span>Target: </span>
                                                <span>{pool.target}</span>
                                            </div>
                                            <div className="flex items-start justify-between w-full">
                                                <span>Withdraws: </span>
                                                <span>{pool.withdraws}</span>
                                            </div>
                                            <div className="flex items-start justify-between w-full">
                                                <span>Assets Traded: </span>
                                                <span>{pool.assetsTraded}</span>
                                            </div>
                                            <div className="flex items-start justify-between w-full">
                                                <span>Amount Invested so far: </span>
                                                <span>{pool.amountInvested}</span>
                                            </div>
                                            <div className="flex items-start justify-between w-full">
                                                <span>Pool Administrator: </span>
                                                <Link to={'/'} className="font-bold hover:underline">{pool.administrator.name}</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center justify-center p-2">
                                        <button
                                            className={`w-full max-w-[150px] text-sm px-4 py-2 text-text-color-white font-semibold tracking-tight bg-button-color hover:opacity-80 transition border-b-2 border-transparent flex items-center justify-center gap-1`}
                                        >
                                            Join Pool
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-xs text-text-color-black/70 pb-10"><strong>Disclaimer:</strong> Investing in Forex involves risk. Ensure you understand these risks before joining any pool.</p>
        </div>
    );
}
export default JoinPools;
