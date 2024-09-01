import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ConfigProvider, Input, Select } from 'antd';
import { DatePicker, Space } from 'antd';
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
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Learn;
