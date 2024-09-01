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
            minimumEquity: "$5",
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
        {
            id: "0989564",
            avatar: "https://images-platform.99static.com//bAwH76a1Ut6KupN7rwejTCek3To=/187x187:1458x1458/fit-in/500x500/projects-files/141/14155/1415544/10cfccc0-380c-44dc-abe3-dbab7c4a7b81.jpg",
            name: "Global FX Fund",
            rate: 4.2,
            minimumEquity: "$1",
            size: "$30",
            target: "$300",
            withdraws: "Weekly",
            assetsTraded: "Commodities",
            amountInvested: "$25",
            administrator: {
                id: "A9BX8375RGWPEBJK4R5444",
                name: "Jane Smith",
            },
        },
        {
            id: "0989565",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKhqoIURMJ49BMUIdeVB3hCyGQtFH7negoA&s",
            name: "Emerging Markets Pool",
            rate: 4.7,
            minimumEquity: "$12",
            size: "$50",
            target: "$500",
            withdraws: "Monthly",
            assetsTraded: "Stocks",
            amountInvested: "$45",
            administrator: {
                id: "C9CY8376RGVPEBJK5R6544",
                name: "Michael Brown",
            },
        },
        {
            id: "0989566",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPZin1vu_frbR8dDhIjadwtDIcuR8_mGlWw&s",
            name: "Crypto Opportunity Fund",
            rate: 3.9,
            minimumEquity: "$22",
            size: "$100",
            target: "$1000",
            withdraws: "Every 24 hours",
            assetsTraded: "Cryptocurrencies",
            amountInvested: "$80",
            administrator: {
                id: "D9DZ8377RGVPEBJK6R7644",
                name: "Emily White",
            },
        },
        {
            id: "0989567",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoZ-D0bvWI9rnadVgMOyCivHJYD0WMZCac4Q&s",
            name: "Tech Growth Pool",
            rate: 4.5,
            minimumEquity: "$7",
            size: "$200",
            target: "$1500",
            withdraws: "Weekly",
            assetsTraded: "Tech Stocks",
            amountInvested: "$150",
            administrator: {
                id: "E9EA8378RGVPEBJK7R8744",
                name: "Chris Green",
            },
        },
        {
            id: "0989568",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8RDsmsQFXbDGCoNGbiFdQFMYcb3zUv4uiQ&s",
            name: "High Yield Bond Pool",
            rate: 4.0,
            minimumEquity: "$30",
            size: "$300",
            target: "$2000",
            withdraws: "Monthly",
            assetsTraded: "Bonds",
            amountInvested: "$250",
            administrator: {
                id: "F9FB8379RGVPEBJK8R9844",
                name: "Patricia Blue",
            },
        },
        {
            id: "0989569",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-flUOMyKWgZ5tem0RU7xWgRQzxnjBBZi0kw&s",
            name: "Real Estate Income Pool",
            rate: 4.6,
            minimumEquity: "$50",
            size: "$500",
            target: "$2500",
            withdraws: "Quarterly",
            assetsTraded: "Real Estate",
            amountInvested: "$400",
            administrator: {
                id: "G9GC8380RGVPEBJK9R0944",
                name: "David Yellow",
            },
        },
        {
            id: "0989573",
            avatar: "",
            name: "Apex Growth Pool",
            rate: 4.0,
            minimumEquity: "$3",
            size: "$150",
            target: "$1000",
            withdraws: "Monthly",
            assetsTraded: "New Assets",
            amountInvested: "$100",
            administrator: {
                id: "K9KL8384RGVPEBJK3R4345",
                name: "James White",
            },
        },
        {
            id: "0989570",
            avatar: "https://t4.ftcdn.net/jpg/04/53/70/41/360_F_453704176_fRLaZTHGmRZmM6BpZZe2PT17DBsjb4md.jpg",
            name: "Diversified Income Fund",
            rate: 4.3,
            minimumEquity: "$73",
            size: "$1000",
            target: "$5000",
            withdraws: "Monthly",
            assetsTraded: "Multiple Assets",
            amountInvested: "$800",
            administrator: {
                id: "H9HD8381RGVPEBJK0R1044",
                name: "Laura Purple",
            },
        },
        {
            id: "0989571",
            avatar: "https://media.istockphoto.com/id/1480306277/vector/letter-g-monogram-arrow-cursor-direction-pointer-forward-right-up-simple-modern-vector.jpg?s=612x612&w=0&k=20&c=a_SOnBeyPwxYcf0a5zfSlJte9AoLPydxPkBscZn9-xo=",
            name: "Global Dividend Pool",
            rate: 4.1,
            minimumEquity: "$88",
            size: "$1500",
            target: "$6000",
            withdraws: "Every 24 hours",
            assetsTraded: "Dividend Stocks",
            amountInvested: "$1200",
            administrator: {
                id: "I9IE8382RGVPEBJK1R2144",
                name: "Kevin Orange",
            },
        },
        {
            id: "0989572",
            avatar: "https://media.istockphoto.com/id/1355944902/vector/letter-e-sign-design-template-modern-colorful-vector-emblem.jpg?s=612x612&w=0&k=20&c=3K1uqqLfUDmeTVSPkZw078_j7TSk5AZ7uF0Ko_PiDtk=",
            name: "Emerging Tech Fund",
            rate: 4.8,
            minimumEquity: "$90",
            size: "$2000",
            target: "$10000",
            withdraws: "Weekly",
            assetsTraded: "Tech Innovations",
            amountInvested: "$1600",
            administrator: {
                id: "J9JF8383RGVPEBJK2R3244",
                name: "Sophia Red",
            },
        },
        {
            id: "0989574",
            avatar: "",
            name: "Precision Currency Pool",
            rate: 4.2,
            minimumEquity: "$16",
            size: "$200",
            target: "$1500",
            withdraws: "Quarterly",
            assetsTraded: "Emerging Assets",
            amountInvested: "$150",
            administrator: {
                id: "L9LM8385RGVPEBJK4R5456",
                name: "Taps Gift",
            },
        },
    ];

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
                        <div className="grid grid-cols-4 gap-4 mt-3">
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
