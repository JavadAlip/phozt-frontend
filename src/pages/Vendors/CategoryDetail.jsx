import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../../components/Sidebar";
import user from "../../assets/Icons/user.png";
import photography from "../../assets/Icons/photography.png";
import profile from "../../assets/Icons/profile.png";
import edit1 from "../../assets/Icons/edit1.png";
import exportt from "../../assets/Icons/export.png";
import EditCategoryDetails from "../../pages/Vendors/EditCategoryDeatails";

const CategoryDetail = () => {
    const navigate = useNavigate();

    const [selectedCity, setSelectedCity] = useState('Bengaluru');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedVendor, setSelectedVendor] = useState(null);

    const serviceCards = [
        { id: 1, title: 'Total Photography Vendors', count: 28, image: photography },
        { id: 2, title: 'Total Photography leads distributed last 1 month', count: 200, image: photography },
        { id: 3, title: 'Subscribed Vendors', description: 'Pending vendors and unapproved photographers Vendors', count: 8, image: user },
        { id: 4, title: 'Returned Leads', description: 'Pending queries and unapproved photography services', count: 12, image: photography },
    ];

    const vendors = [
        { name: 'Karthik Ramakrishna', leadPackage: '28/50(56%)', leads: 2, contact: '91888043721', status: 'Active', city: 'Bengaluru', totalLeads: 50, remainingLeads: 22, returnedLeads: 5 },
        { name: 'Arjun Kamath Hegde', leadPackage: '28/50(56%)', leads: 2, contact: '91888403721', status: 'Paused', city: 'Bengaluru', totalLeads: 50, remainingLeads: 20, returnedLeads: 8 },
        { name: 'Raghavendra Rao', leadPackage: '50/50(100%)', leads: 2, contact: '91888430721', status: 'Pending', city: 'Bengaluru', totalLeads: 50, remainingLeads: 10, returnedLeads: 5 },
        { name: 'Arjun Kamath Hegde', leadPackage: '28/50(56%)', leads: 2, contact: '91888403721', status: 'Paused', city: 'Bengaluru', totalLeads: 50, remainingLeads: 20, returnedLeads: 8 },
        { name: 'Raghavendra Rao', leadPackage: '50/50(100%)', leads: 2, contact: '91888430721', status: 'Pending', city: 'Bengaluru', totalLeads: 50, remainingLeads: 10, returnedLeads: 5 },
    ];

    const cities = ['Bengaluru', 'Mumbai', 'Delhi', 'Pune', 'Hyderabad'];

    const getStatusStyle = (status) => {
        return 'text-black bg-gray-50 border border-black-300';
    };

    const handleEditClick = (vendor) => {
        setSelectedVendor(vendor);
        setIsEditModalOpen(true);
    };

    const handleProfileClick = (vendor) => {
        // Navigate to /category-portfolio (optional: you can pass vendor data via state or query)
        navigate('/category-portfolio');
    };

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            {/* Main Content */}
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
                            Photography Lead Management
                        </h1>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-auto p-6">
                    <div className="max-w-7xl mx-auto">
                        {/* City Dropdown and Buttons Row */}
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">
                                    Select the City
                                </label>
                                <div className="flex items-center gap-2">
                                    <Search size={18} className="text-gray-400" />
                                    <select
                                        value={selectedCity}
                                        onChange={(e) => setSelectedCity(e.target.value)}
                                        className="px-4 py-2 border border-black outline-none bg-white"
                                    >
                                        {cities.map((city, idx) => (
                                            <option key={idx} value={city}>{city}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 mt-6">
                                <button className="flex items-center gap-2 px-4 py-2 border border-black bg-white hover:bg-gray-100 text-sm font-medium">
                                    <img src={exportt} alt="export" className="w-4 h-4" />
                                    Export Report
                                </button>
                                <button className="px-4 py-2 border border-black bg-white text-black hover:bg-gray-100 text-sm font-medium">
                                    + Add Vendor
                                </button>
                            </div>
                        </div>

                        {/* Service Cards */}
                        <div className="grid grid-cols-4 gap-4 mb-6">
                            {serviceCards.map((card) => (
                                <div key={card.id} className="border border-black p-4 relative bg-white flex flex-col">
                                    <div className="w-6 h-6 mb-3 flex items-center justify-center">
                                        <img src={card.image} alt="icon" className="w-5 h-5 object-contain" />
                                    </div>
                                    <h3 className="text-sm font-medium text-black mb-2 min-h-10">{card.title}</h3>
                                    {card.description && <p className="text-xs text-black mb-3">{card.description}</p>}
                                    <div className="flex items-center justify-between mt-auto pt-3">
                                        <span className="text-sm text-black">{card.count} Vendors</span>
                                        <button className="px-3 py-1 text-xs border border-black hover:bg-gray-50">
                                            View More
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Vendors Table */}
                        <div className="bg-white border border-black">
                            <div className="px-6 py-4 border-b border-black">
                                <h2 className="text-xl font-semibold text-black">Total Photography Vendors</h2>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-black">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="border border-black px-6 py-3 text-left text-xs font-semibold text-black">Name</th>
                                            <th className="border border-black px-6 py-3 text-left text-xs font-semibold text-black">Lead Package</th>
                                            <th className="border border-black px-6 py-3 text-left text-xs font-semibold text-black">Returned Leads</th>
                                            <th className="border border-black px-6 py-3 text-left text-xs font-semibold text-black">Contact Number</th>
                                            <th className="border border-black px-6 py-3 text-left text-xs font-semibold text-black">Status</th>
                                            <th className="border border-black px-6 py-3 text-left text-xs font-semibold text-black">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {vendors.map((vendor, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50">
                                                <td className="border border-black px-6 py-4 text-sm font-medium text-black">{vendor.name}</td>
                                                <td className="border border-black px-6 py-4 text-sm text-black">{vendor.leadPackage}</td>
                                                <td className="border border-black px-6 py-4 text-sm text-black">{vendor.leads}</td>
                                                <td className="border border-black px-6 py-4 text-sm text-black">{vendor.contact}</td>
                                                <td className="border border-black px-6 py-4">
                                                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded ${getStatusStyle(vendor.status)}`}>{vendor.status}</span>
                                                </td>
                                                <td className="border border-black px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => handleEditClick(vendor)}
                                                            className="p-1 hover:bg-gray-100 rounded"
                                                        >
                                                            <img src={edit1} alt="Edit" className="w-4 h-4 object-contain" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleProfileClick(vendor)}
                                                            className="p-1 hover:bg-gray-100 rounded"
                                                        >
                                                            <img src={profile} alt="Profile" className="w-4 h-4 object-contain" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <EditCategoryDetails
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                vendorData={selectedVendor}
            />
        </div>
    );
};

export default CategoryDetail;
