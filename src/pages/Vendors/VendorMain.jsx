import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../../components/Sidebar";
import photography from "../../assets/Icons/photography.png";
import makeup1 from "../../assets/Icons/makeup1.png";
import decoration from "../../assets/Icons/decoration.png";
import categoring from "../../assets/Icons/categoring.png";

const VendorMain = () => {
    const [selectedCity, setSelectedCity] = useState('Bengaluru');
    const navigate = useNavigate(); 

    const services = [
        {
            id: 1,
            title: 'Photography',
            description: 'Wedding, birthday and parties photography services',
            vendors: 8
        },
        {
            id: 2,
            title: 'Makeup Artist',
            description: 'Bridal makeup and beauty services',
            vendors: 8
        },
        {
            id: 3,
            title: 'Catering Services',
            description: 'Food and beverage services for events',
            vendors: 8
        },
        {
            id: 4,
            title: 'Decoration',
            description: 'Event decoration and floral arrangements',
            vendors: 5
        }
    ];

    const cities = ['Bengaluru', 'Mumbai', 'Delhi', 'Pune', 'Hyderabad'];

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />

            <div className="flex-1 flex ml-64 flex-col">
                {/* Header */}
                <div className="bg-white border-b border-black px-6 py-4 flex justify-between items-start flex-shrink-0">
                    <div className="flex-1 flex flex-col gap-2">
                        <div className="flex justify-between items-center mt-2 w-full">
                            <div className="flex items-center border border-black px-2 w-[70%]">
                                <Search size={18} className="text-black mr-2" />
                                <input
                                    type="text"
                                    placeholder="Search anything here....."
                                    className="py-2 text-sm w-full outline-none"
                                />
                            </div>
                            <div className="flex items-center gap-3 ml-4">
                                <span className="text-black font-medium">Alex</span>
                                <div className="w-10 h-10 bg-gray-300 flex items-center rounded-full justify-center text-white font-semibold">A</div>
                            </div>
                        </div>
                        <h1 className="text-[36px] font-semibold text-black">
                            Leads Services category
                        </h1>
                        <p className="text-[18px] font-normal text-gray-700">
                            You are Creating Groups for leads distribution under round robin rule
                        </p>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-auto p-6">
                    <div className="max-w-7xl mx-auto">
                        {/* City Selector and Services Grid */}
                        <div className="bg-white border border-black p-6">
                            {/* City Dropdown */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-black mb-2">
                                    Select the City
                                </label>
                                <div className="flex items-center gap-2">
                                    <Search size={18} className="text-black" />
                                    <select
                                        value={selectedCity}
                                        onChange={(e) => setSelectedCity(e.target.value)}
                                        className="px-4 py-2 border border-black outline-none focus:border-gray-400 bg-white"
                                    >
                                        {cities.map((city, idx) => (
                                            <option key={idx} value={city}>
                                                {city}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-3 gap-6">
                                {services.map((service) => {
                                    let serviceImage;
                                    if (service.title === 'Photography') serviceImage = photography;
                                    else if (service.title === 'Makeup Artist') serviceImage = makeup1;
                                    else if (service.title === 'Catering Services') serviceImage = categoring;
                                    else if (service.title === 'Decoration') serviceImage = decoration;

                                    return (
                                        <div
                                            key={service.id}
                                            className="border border-black p-4 hover:shadow-md transition-shadow"
                                        >
                                            <div className="w-6 h-6 mb-3">
                                                <img
                                                    src={serviceImage}
                                                    alt={service.title}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>

                                            <h3 className="text-lg font-semibold text-black mb-2">
                                                {service.title}
                                            </h3>

                                            <p className="text-sm text-black mb-4">
                                                {service.description}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-black">
                                                    {service.vendors} Vendors
                                                </span>
                                                {/*  Navigation added here */}
                                                <button
                                                    onClick={() => navigate('/category-detail')}
                                                    className="px-3 py-1 text-sm border border-black hover:bg-gray-50 transition-colors"
                                                >
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorMain;
