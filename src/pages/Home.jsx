import React from "react";
import Navbar from "../components/Navbar";
import { Select, ConfigProvider } from "antd";
import CountUp from 'react-countup';
import { LuArrowDownFromLine } from "react-icons/lu";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";
import { TbCoins, TbKeyframes, TbLayoutAlignCenter, TbMoneybag, TbSpacingHorizontal } from "react-icons/tb";

function Home() {
    return (
        <div className="bg-body-white w-full h-full min-h-[3000px] relative">
            <Navbar />
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
            <div className="flex gap-2 w-full bg-transparent min-h-[200px] mt-[-50px] px-10 text-text-color-black">
                <div className="w-1/3 h-fit bg-white shadow-lg shadow-stone-600/10 rounded-2xl flex flex-col p-6">
                    <div className="flex items-center justify-between w-full">
                        <h1 className="text-sm text-text-color-black/60 font-medium">
                            Total Balance
                        </h1>
                        <ConfigProvider
                            theme={{
                                token: {
                                    // Seed Token
                                    colorPrimary: '#fff',
                                    borderRadius: 7,
                                    colorBorder: '#00000000',
                                    colorBgContainer: '#e5e7eb70',
                                    colorBgTextHover: "red"
                                },
                            }}
                        >
                            <Select
                                defaultValue="USD"
                                style={{ width: '120px', boxShadow: "none", borderColor: 'red' }}
                                allowClear
                                options={[
                                    { value: 'USD', label: 'USD' },
                                    { value: 'Bitcoin', label: 'Bitcoin' },
                                    { value: 'Ethereum', label: 'Ethereum' },
                                    { value: 'USDT', label: 'USDT' },
                                    { value: 'USDC', label: 'USDC' },
                                    { value: 'DAI', label: 'DAI' },
                                    { value: 'BUSD', label: 'BUSD' },
                                    { value: 'Ripple', label: 'Ripple' },
                                    { value: 'Litecoin', label: 'Litecoin' },
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
                            duration={.9}
                            separator=","
                            decimals={2}
                            decimal="."
                            prefix="$ "
                        //   suffix=" left"
                        >
                            {({ countUpRef, start }) => (
                                <div className="">
                                    <span className="py-2 text-3xl font-extrabold" ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                        <p className="text-xs pt-1 text-text-color-black/60 font-medium "><span className="text-green-600">129%</span> increase for the last 7 days</p>
                    </div>
                    <div className="flex items-center gap-2 mt-5">
                        {/* Deposit */}
                        <button
                            className={`w-full text-sm px-4 py-2 rounded-md text-text-color-white font-semibold tracking-tight bg-button-color hover:opacity-80 transition border-b-2 border-transparent flex items-center justify-center gap-1`}
                        >
                            <TiArrowDownThick className="text-base" />
                            Deposit
                        </button>
                        {/* withdraw */}
                        <button
                            className={`w-full text-sm px-4 py-2 rounded-md text-text-color-black font-semibold tracking-tight bg-border-lines-light/70 hover:opacity-80 transition border-b-2 border-transparent flex items-center justify-center gap-1`}
                        >
                            <TiArrowUpThick className="text-base" />
                            Withdraw
                        </button>
                    </div>
                </div>
                <div className="w-2/3 bg-white shadow-lg shadow-stone-600/10 rounded-2xl grid gap-0 grid-cols-2 ">
                    {/* Profit */}
                    <div className="flex flex-col p-6 w-full h-fit border-r-[1px] border-b-[1px] ">
                        <div className="flex items-center justify-between w-full">
                            <h1 className="text-sm text-text-color-black/60 font-medium">
                                Profit
                            </h1>
                            <div className="rounded-lg bg-stone-600/5 p-2 ">
                                <TbCoins className="text-stone-500 text-2xl" />
                            </div>
                        </div>
                        <div className="w-full pt-0">
                            {/* Profit */}
                            <CountUp
                                start={0}
                                end={49.5}
                                duration={.9}
                                separator=","
                                decimals={2}
                                decimal="."
                                prefix="$ "
                            //   suffix=" left"
                            >
                                {({ countUpRef, start }) => (
                                    <div className="">
                                        <span className=" text-2xl font-extrabold" ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp>
                            <p className="text-xs pt-2 text-text-color-black/60 font-medium "><span className="text-red-500">0.9%</span> descrease for the last 7 days</p>
                        </div>
                    </div>
                    {/* Margin */}
                    <div className="flex flex-col p-6 w-full h-fit border-b-[1px]">
                        <div className="flex items-center justify-between w-full">
                            <h1 className="text-sm text-text-color-black/60 font-medium">
                                Margin
                            </h1>
                            <div className="rounded-lg bg-stone-600/5 p-2 ">
                                <TbLayoutAlignCenter className="text-stone-500 text-2xl" />
                            </div>
                        </div>
                        <div className="w-full pt-0">
                            {/* Margin */}
                            <CountUp
                                start={0}
                                end={92405}
                                duration={.9}
                                separator=","
                                decimals={2}
                                decimal="."
                                prefix="$ "
                            //   suffix=" left"
                            >
                                {({ countUpRef, start }) => (
                                    <div className="">
                                        <span className=" text-2xl font-extrabold" ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp>
                            <p className="text-xs pt-2 text-text-color-black/60 font-medium "><span className="text-green-600">32%</span> increase for the last 7 days</p>
                        </div>
                    </div>
                    {/* Free Margin */}
                    <div className="flex flex-col p-6 w-full h-fit border-r-[1px] ">
                        <div className="flex items-center justify-between w-full">
                            <h1 className="text-sm text-text-color-black/60 font-medium">
                                Free Margin
                            </h1>
                            <div className="rounded-lg bg-stone-600/5 p-2 ">
                                <TbLayoutAlignCenter className="text-stone-500 text-2xl" />
                            </div>
                        </div>
                        <div className="w-full pt-0">
                            {/* Free Margin */}
                            <CountUp
                                start={0}
                                end={32218.2}
                                duration={.9}
                                separator=","
                                decimals={2}
                                decimal="."
                                prefix="$ "
                            //   suffix=" left"
                            >
                                {({ countUpRef, start }) => (
                                    <div className="">
                                        <span className=" text-2xl font-extrabold" ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp>
                            <p className="text-xs pt-2 text-text-color-black/60 font-medium "><span className="text-green-600">2%</span> increase for the last 7 days</p>
                        </div>
                    </div>
                    {/* Margin Level */}
                    <div className="flex flex-col p-6 w-full h-fit">
                        <div className="flex items-center justify-between w-full">
                            <h1 className="text-sm text-text-color-black/60 font-medium">
                                Marginf Level %
                            </h1>
                            <div className="rounded-lg bg-stone-600/5 p-2 ">
                                <TbKeyframes className="text-stone-500 text-2xl" />
                            </div>
                        </div>
                        <div className="w-full pt-0">
                            {/* Balance */}
                            <CountUp
                                start={0}
                                end={405}
                                duration={.9}
                                separator=","
                                // decimals={2}
                                decimal="."
                                // prefix="$ "
                              suffix=" %"
                            >
                                {({ countUpRef, start }) => (
                                    <div className="">
                                        <span className=" text-2xl font-extrabold" ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp>
                            <p className="text-xs pt-2 text-text-color-black/60 font-medium "><span className="text-green-600">73%</span> increase for the last 7 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
