import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ConfigProvider, Input, Select } from 'antd';
import { DatePicker, Space } from 'antd';
import { IoCheckmark } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
const { RangePicker } = DatePicker;

function Learn() {
    return (
        <div className="bg-body-white w-full h-full min-h-svh relative">
            <Navbar dynamic="on" />
            {/* Hero */}
            <div className="main-header min-h-[170px] px-10 pt-5 text-text-color-white tracking-tight">
                {/* Greetings */}
                <h1 className=" font-medium text-xl">Learn How to Fish Yourself</h1>
                <div className="flex items-center gap-1 my-3">
                    <button
                        className={`text-sm px-4 py-2 font-medium hover:bg-stone-300/10 border-b-2 border-text-color-white`}
                    >
                        Books
                    </button>
                    <button
                        className={`text-sm px-4 py-2 font-medium hover:bg-stone-300/10 border-b-2 border-transparent opacity-80 hover:opacity-100`}
                    >
                        Videos
                    </button>
                    <button
                        className={`text-sm px-4 py-2 font-medium hover:bg-stone-300/10 border-b-2 border-transparent opacity-80 hover:opacity-100`}
                    >
                        Mettings
                    </button>
                </div>
            </div>
            <div className="flex gap-5 w-full h-full bg-transparent mt-[-50px] px-10 text-text-color-black pb-10">
                <div className="w-full min-h-full flex flex-col gap-5">
                    <div className=" w-full flex-1 h-full min-h-[500px] bg-white shadow-lg shadow-stone-600/10 flex flex-col gap-2 p-6">
                        <div className="flex itec justify-between w-full">
                            <h1 className="text-sm text-text-color-black/60 font-medium">
                                Available Books
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
                                        defaultValue="All ranges"
                                        style={{
                                            width: "150px",
                                            boxShadow: "none",
                                        }}
                                        allowClear
                                        options={[
                                            { value: "Recommended", label: "Recommended", },
                                            { value: "Best Sellers", label: "Best Sellers" },
                                            { value: "Essential Reads", label: "Essential Reads" }
                                        ]}
                                        placeholder="Currency"
                                    />
                                    <Input placeholder="Search Book name" style={{ width: "230px" }} />
                                </ConfigProvider>
                            </form>
                        </div>
                        <div className="w-full grid grid-cols-3">
                            <div className="w-full bg-stone-50 p-4 gap-3 flex">
                                <div className="w-[100px] min-w-[100px] h-fit shadow-lg">
                                    <img src="https://m.media-amazon.com/images/I/61hm8klrpaL._AC_UF894,1000_QL80_.jpg" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h1 className="line-clamp-2 font-semibold tracking-tight leading-5">The Trading Book: A Complete Solution to Mastering Technical Systems and Trading Psychology</h1>
                                    <p className="text-xs text-text-color-black/70">Book by Anne-Marie Baiynd</p>
                                    <p className="text-xs text-text-color-black/70 mt-3">You will Learn:</p>
                                    <p className="text-xs text-text-color-black flex gap-1">
                                        <IoCheckmark className="text-lg" />
                                        Value Gaps
                                    </p>
                                    <p className="text-xs text-text-color-black flex gap-1">
                                        <IoCheckmark className="text-lg" />
                                        Supply And Demand
                                    </p>
                                    <div className="flex items-end justify-end flex-col mt-3">
                                        <p className="text-xs text-text-color-black/70">
                                            423 Purchases
                                        </p>
                                        <p className="text-xl text-text-color-black font-bold py-1">
                                            $23
                                        </p>
                                        <button
                                            className={`w-full mt-1 max-w-[120px] text-sm px-4 py-2 text-text-color-white font-semibold tracking-tight bg-button-color hover:opacity-80 transition border-b-2 border-transparent flex items-center justify-center gap-1`}
                                        >
                                            <BsCart4 className="text-xl pb-1" />
                                            Purchase
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Learn;
