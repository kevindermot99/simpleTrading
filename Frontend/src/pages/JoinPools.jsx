import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Input } from 'antd';
import { DatePicker, Space } from 'antd';
import { IoIosStar } from "react-icons/io";
import { TbArrowsJoin2 } from "react-icons/tb";
const { RangePicker } = DatePicker;

function JoinPools() {
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
                        <h1 className="text-sm text-text-color-black/60 font-medium">
                            Available Pools
                        </h1>
                        <div className="grid grid-cols-3 mt-3">
                            {/* Pool */}
                            <div className="w-full h-fit bg-stone-100 flex flex-col items-center justify-start p-3">
                                <div className="w-12 h-12 rounded-full mt-2">
                                    <img
                                        src="https://img.freepik.com/premium-vector/letter-logo-with-black-background_853558-1836.jpg"
                                        className="w-full h-full rounded-full object-cover object-center"
                                    />
                                </div>
                                <h1 className="text-base font-medium py-2">Forex Alpha Pool</h1>
                                <div className="flex items-center justify-center text-yellow-500 text-lg">
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar className="text-stone-300" />
                                    <IoIosStar className="text-stone-300" />
                                    <p className="text-text-color-black/70 text-sm font-medium pl-1 pt-[4px]">4.8</p>
                                </div>
                                <div className="py-2 text-center">
                                    <h1 className="text-3xl font-bold pb-2">$2.00</h1>
                                    <p className="text-xs font-medium text-text-color-black/70">Minimum Equity to Invest</p>
                                </div>
                                <div className="w-full grid grid-cols-2 gap-5 text-text-color-black/70 mt-2 p-3">
                                    <div className="flex flex-col gap-1 text-sm font-medium justify-start items-start">
                                        <span>Pool ID: </span>
                                        <span>Pool Size: </span>
                                        <span>Target: </span>
                                        <span>Withdraws: </span>
                                        <span>Assets Traded: </span>
                                        <span>Amount Invested so far: </span>
                                        <span>Pool Administrator: </span>
                                    </div>
                                    <div className="flex flex-col gap-1 text-sm font-medium justify-start items-start">
                                        <span>0989563</span>
                                        <span>$20</span>
                                        <span>$200</span>
                                        <span>Every 24 hours</span>
                                        <span>Currencies</span>
                                        <span>$16</span>
                                        <Link to={'/'} className="text-text-color-black hover:underline">John Doe</Link>
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
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-xs text-text-color-black/70 pb-10"><strong>Disclaimer:</strong> Investing in Forex involves risk. Ensure you understand these risks before joining any pool.</p>
        </div>
    );
}
export default JoinPools;
