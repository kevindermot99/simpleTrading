import React from "react";
import Navbar from "../components/Navbar";
import { Select, ConfigProvider } from "antd";

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
                        className={`text-sm px-4 py-2 hover:bg-stone-300/10 border-b-2 border-text-color-white`}
                    >
                        Overview
                    </button>
                    <button
                        className={`text-sm px-4 py-2 hover:bg-stone-300/10 border-b-2 border-transparent opacity-50 hover:opacity-100`}
                    >
                        Leaders
                    </button>
                </div>
            </div>
            <div className="flex gap-2 w-full bg-transparent h-[200px] mt-[-50px] px-10 text-text-color-black">
                <div className="w-1/3 bg-white shadow-lg shadow-stone-600/10 rounded-2xl flex flex-col p-8">
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
                                    colorBgContainer: '#e5e7eb50',
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
                                placeholder="select it"
                            />
                        </ConfigProvider>
                    </div>
                    <div className="w-full">
                        <h1 className="py-2 text-3xl font-bold"><span className="pr-1">$</span>32,120.99</h1>
                    </div>
                </div>
                <div className="w-2/3 bg-white shadow-lg shadow-stone-600/10 rounded-2xl"></div>
            </div>
        </div>
    );
}

export default Home;
