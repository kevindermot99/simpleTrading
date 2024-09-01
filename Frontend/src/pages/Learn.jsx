import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ConfigProvider, Input, Select } from 'antd';
import { DatePicker, Space } from 'antd';
import { IoCheckmark } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
const { RangePicker } = DatePicker;

function Learn() {
    const Books = [
        {
            poster: "https://m.media-amazon.com/images/I/61hm8klrpaL._AC_UF894,1000_QL80_.jpg",
            name: "The Trading Book: A Complete Solution to Mastering Technical Systems and Trading Psychology",
            by: "Anne-Marie Baiynd",
            youWillLearn: ["Value Gaps", "Supply And Demand"],
            price: 23,
        },
        {
            poster: "https://m.media-amazon.com/images/I/61jqyE7fMUL._AC_UF1000,1000_QL80_.jpg",
            name: "Technical Analysis of the Financial Markets",
            by: "John J. Murphy",
            youWillLearn: ["Charting Techniques", "Trend Analysis", "Indicators and Oscillators"],
            price: 35,
        },
        {
            poster: "https://m.media-amazon.com/images/I/51Xh8kTlirL._SY580_.jpg",
            name: "Market Wizards: Interviews with Top Traders",
            by: "Jack D. Schwager",
            youWillLearn: ["Trading Strategies", "Trader Psychology", "Risk Management"],
            price: 20,
        },
        {
            poster: "https://m.media-amazon.com/images/I/71jcDExj34L._AC_UF1000,1000_QL80_.jpg",
            name: "The Little Book of Currency Trading",
            by: "Kathy Lien",
            youWillLearn: ["Forex Fundamentals", "Currency Pair Analysis", "Risk Control"],
            price: 18,
        },
        {
            poster: "https://m.media-amazon.com/images/I/615dd236K7L._AC_UF1000,1000_QL80_.jpg",
            name: "A Beginner's Guide to Forex Trading",
            by: "Matthew Driver",
            youWillLearn: ["Forex Basics", "Trading Platforms", "Common Mistakes to Avoid"],
            price: 15,
        },
        {
            poster: "https://m.media-amazon.com/images/I/71DlKGSlQmL.jpg",
            name: "The Complete TurtleTrader: How 23 Novice Investors Became Overnight Millionaires",
            by: "Michael W. Covel",
            youWillLearn: ["Turtle Trading Rules", "Risk Management", "Trader Mindset"],
            price: 0,
        },
        {
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwMUZbfa8g3tPJNFHukvDepQjTs_8iDgtr_g&s",
            name: "The New Trading for a Living",
            by: "Dr. Alexander Elder",
            youWillLearn: ["Mindset for Success", "Technical Analysis", "Money Management"],
            price: 30,
        },
        {
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSbOx61QGsqpDICL-OLBZ8lriOum6M0tnJYg&s",
            name: "Day Trading and Swing Trading the Currency Market",
            by: "Kathy Lien",
            youWillLearn: ["Day Trading Strategies", "Swing Trading Tactics", "Economic Indicators"],
            price: 28,
        },
        {
            poster: "https://m.media-amazon.com/images/I/914cnJa7ltL._AC_UF894,1000_QL80_.jpg",
            name: "Currency Trading for Dummies",
            by: "Brian Dolan",
            youWillLearn: ["Forex Market Basics", "Trading Strategies", "Technical and Fundamental Analysis"],
            price: 22,
        },
        {
            poster: "https://i.ebayimg.com/images/g/W2cAAOSwNCtjPCnO/s-l1200.webp",
            name: "The Disciplined Trader: Developing Winning Attitudes",
            by: "Mark Douglas",
            youWillLearn: ["Trader Psychology", "Discipline Techniques", "Emotional Control"],
            price: 27,
        },
    ]

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
                        <div className="w-full grid max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-2 max-2xl:grid-cols-3 grid-cols-4 gap-4 mt-5">
                            {Books.map((book, index) => (
                                <div key={index} className="w-full bg-stone-50 ring-1 ring-stone-200 p-4 gap-3 flex items-start justify-between">
                                    <div className="w-[100px] min-w-[100px] h-fit shadow-lg">
                                        <img src={book.poster} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col items-start justify-between gap-1 h-full w-full">
                                        <div className="flex flex-col items-start justify-start gap-1">
                                            <h1 className="break-words font-semibold tracking-tight leading-5 whitespace-normal break-all">
                                                {book.name}
                                            </h1>
                                            <p className="text-xs text-text-color-black/70">Book By {book.by}</p>
                                            <p className="text-xs text-text-color-black/70 mt-3">You will Learn:</p>
                                            <div className="felx items-start justify-start flex-col gap-1">
                                                {book.youWillLearn.map((item, index) => (
                                                    <p key={index} className="text-xs text-text-color-black flex gap-1">
                                                        <IoCheckmark className="text-lg" />
                                                        {item}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex items-end justify-end flex-col mt-3 w-full">
                                            {book.price > 0 && (
                                                <p className="text-xs text-text-color-black/70">
                                                    50% Off
                                                </p>
                                            )}
                                            <p className="text-xl text-text-color-black font-bold pb-1 flex items-center gap-2">
                                                {book.price > 0 && (
                                                    <s className="text-text-color-black/50 text-base">${(book.price * 0.2).toFixed(2)}</s>
                                                )}
                                                {book.price > 0 ? (
                                                    <span>${book.price}</span>
                                                ) : (
                                                    <span>FREE</span>
                                                )}
                                            </p>
                                            {book.price > 0 ? (
                                                <button
                                                    className={`w-full mt-1 max-w-[120px] text-sm px-4 py-2 text-text-color-white font-semibold tracking-tight bg-button-color hover:opacity-80 transition border-b-2 border-transparent flex items-center justify-center gap-1`}
                                                >
                                                    <BsCart4 className="text-xl pb-1" />
                                                    Purchase
                                                </button>
                                            ) : (
                                                <button
                                                    className={`w-full mt-1 max-w-[120px] text-sm px-4 py-2 text-text-color-white font-semibold tracking-tight bg-button-color hover:opacity-80 transition border-b-2 border-transparent flex items-center justify-center gap-1`}
                                                >
                                                    <MdDownload className="text-xl" />
                                                    Download
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Learn;
