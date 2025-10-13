import React, { useState } from 'react';
import { Trash2, Plus, Search } from 'lucide-react';
import Sidebar from "../components/Sidebar";
import totalLeads from "../assets/Icons/totalLeads.png";
import Cities from "../assets/Icons/Cities.png";
import vendos from "../assets/Icons/vendos.png";
import articles from "../assets/Icons/articles.png";
import plus from "../assets/Icons/plus.png";
import leadDistribution from "../assets/Icons/leadDistribution.png";

const LeadsTable = ({ leads }) => {
    return (
        <div className="bg-white rounded-lg border border-black shadow-sm flex flex-col h-[500px]">
            {/* Table Header Tabs */}
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 flex-shrink-0">
                <div className="flex gap-4 text-sm">
                    <button className="text-blue-600 font-medium hover:text-blue-700">Total Leads</button>
                    <button className="text-gray-600 hover:text-gray-900">New Leads</button>
                    <button className="text-gray-600 hover:text-gray-900">Assigned Leads</button>
                    <button className="text-gray-600 hover:text-gray-900">Rejected Leads</button>
                </div>
            </div>

            {/* Filters */}
            <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 flex gap-2 items-center flex-shrink-0">
                <span className="text-sm text-gray-600">Last 30 days</span>
                <button className="px-3 py-1 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-1">
                    Filter by
                </button>
                <div className="ml-auto text-xs text-gray-500">
                    Page 1 of 4
                </div>
            </div>

            {/* Scrollable Table Body */}
            <div className="overflow-auto flex-1">
                <table className="w-full text-sm min-w-max">
                    <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-3 text-left font-semibold text-gray-900 whitespace-nowrap">Customer Name</th>
                            <th className="px-6 py-3 text-left font-semibold text-gray-900 whitespace-nowrap">Mobile Number</th>
                            <th className="px-6 py-3 text-left font-semibold text-gray-900 whitespace-nowrap">Request Service</th>
                            <th className="px-6 py-3 text-left font-semibold text-gray-900 whitespace-nowrap">Service by Vendor</th>
                            <th className="px-6 py-3 text-left font-semibold text-gray-900 whitespace-nowrap">Event Date</th>
                            <th className="px-6 py-3 text-left font-semibold text-gray-900 whitespace-nowrap">Status</th>
                            <th className="px-6 py-3 text-left font-semibold text-gray-900 whitespace-nowrap">Delete</th>
                            <th className="px-6 py-3 text-left font-semibold text-gray-900 whitespace-nowrap">Assign Vendor Group</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map((lead, idx) => (
                            <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="px-6 py-3 text-gray-900 font-medium whitespace-nowrap">{lead.customer}</td>
                                <td className="px-6 py-3 text-gray-600 whitespace-nowrap">{lead.mobile}</td>
                                <td className="px-6 py-3 text-gray-600 whitespace-nowrap">{lead.service}</td>
                                <td className="px-6 py-3 text-gray-600 whitespace-nowrap">{lead.vendor}</td>
                                <td className="px-6 py-3 text-gray-600 whitespace-nowrap">{lead.eventDate}</td>
                                <td className="px-6 py-3 whitespace-nowrap">
                                    <span className={`px-3 py-1 rounded text-xs font-medium ${lead.status === 'New Lead'
                                            ? 'bg-yellow-100 text-yellow-800'
                                            : lead.status === 'Assigned'
                                                ? 'bg-blue-100 text-blue-800'
                                                : lead.status === 'Rejected'
                                                    ? 'bg-red-100 text-red-800'
                                                    : 'bg-gray-100 text-gray-800'
                                        }`}>
                                        {lead.status}
                                    </span>
                                </td>
                                <td className="px-6 py-3 whitespace-nowrap">
                                    <button className="text-gray-600 hover:text-red-600">
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                                <td className="px-6 py-3 whitespace-nowrap">
                                    {lead.vendorGroup ? (
                                        <span className="text-gray-700 text-sm">{lead.vendorGroup}</span>
                                    ) : (
                                        <button className="text-gray-600 hover:text-gray-900 border border-gray-300 rounded p-1">
                                            <Plus size={18} />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const LeadsManagement = () => {
    const [leads] = useState([
        { id: '1', customer: 'Nagararjuna Bheemanand', mobile: '9876543210', service: 'Photography Services', vendor: 'Studio B - Photography', eventDate: '04-07-2025', status: 'New Lead', vendorGroup: null },
        { id: '2', customer: 'Rajesh Kumar', mobile: '9876543211', service: 'Catering Services', vendor: 'Royal Caterers', eventDate: '15-07-2025', status: 'Assigned', vendorGroup: 'Baby shower Makeup' },
        { id: '3', customer: 'Priya Sharma', mobile: '9876543212', service: 'Decoration Services', vendor: 'Elegant Decorators', eventDate: '20-07-2025', status: 'Rejected', vendorGroup: 'HW Catering' },
        { id: '4', customer: 'Amit Patel', mobile: '9876543213', service: 'DJ Services', vendor: 'Sound Masters', eventDate: '25-07-2025', status: 'New Lead', vendorGroup: 'Birthday Catering' },
        { id: '5', customer: 'Sunita Reddy', mobile: '9876543214', service: 'Photography Services', vendor: 'Click Studios', eventDate: '30-07-2025', status: 'Assigned', vendorGroup: 'Birthday Decoration' },
        { id: '6', customer: 'Vikram Singh', mobile: '9876543215', service: 'Catering Services', vendor: 'Tasty Bites', eventDate: '05-08-2025', status: 'Rejected', vendorGroup: 'HW Catering' },
        { id: '7', customer: 'Anita Desai', mobile: '9876543216', service: 'Photography Services', vendor: 'Perfect Moments', eventDate: '10-08-2025', status: 'New Lead', vendorGroup: null },
        { id: '8', customer: 'Ramesh Gupta', mobile: '9876543217', service: 'Decoration Services', vendor: 'Dream Decorators', eventDate: '15-08-2025', status: 'Assigned', vendorGroup: 'Photography birthday' },
    ]);

    const stats = [
        { label: 'Total Leads', value: '158', icon: totalLeads, change: '+12% from last month' },
        { label: 'Cities', value: '12', icon: Cities, change: '+3 cities from last month' },
        { label: 'Active Vendors', value: '325', icon: vendos, change: '+15% from last month' },
        { label: 'Active Service', value: '1,205', icon: articles, change: '+42% from last month' },
    ];

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-1 flex flex-col ml-64 overflow-hidden">
                {/* Header */}
                <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-start flex-shrink-0">
                    <div className="flex-1 flex flex-col gap-2">
                        <div className="flex justify-between items-center mt-2 w-full">
                            <div className="flex items-center border border-gray-300 rounded px-2 w-[70%]">
                                <Search size={18} className="text-gray-400 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Search anything here....."
                                    className="py-2 text-sm w-full outline-none"
                                />
                            </div>
                            <div className="flex items-center gap-3 ml-4">
                                <span className="text-gray-900 font-medium">Alex</span>
                                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-semibold">A</div>
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Lead Management <span className="font-bold">Dashboard</span>
                        </h1>
                    </div>
                </div>

                {/* Main Content - Scrollable */}
                <div className="flex-1 overflow-y-auto">
                    <div className="p-6">
                        {/* Stats Section */}
                        <div className="grid grid-cols-4 gap-4 mb-6">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="bg-white rounded-lg p-4 border border-black shadow-sm flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                        <p className="text-xs text-gray-500 mt-2">{stat.change}</p>
                                    </div>
                                    <img src={stat.icon} alt={`${stat.label} icon`} className="w-8 h-8 object-contain" />
                                </div>
                            ))}
                        </div>
                        {/* Lead Distribution Chart */}
                        <div className="bg-white rounded-lg border border-black p-6 mb-6 shadow-sm">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Lead Distribution with Vendor Groups</h2>
                            <div className="bg-gray-50 h-10 rounded flex items-center justify-start text-gray-400 text-sm">
                                You are Distributing leads For vendors under rule/ manual intervention
                            </div>
                        </div>

                        {/* Lead Table Component */}
                        <LeadsTable leads={leads} />

                        {/* Quick Actions */}
                        <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                            <div className="grid grid-cols-4 gap-48 justify-items-start">
                                <div className="border border-black rounded-lg p-6 text-center hover:bg-gray-50 cursor-pointer w-64">
                                    <img src={plus} alt="plus icon" className="mx-auto mb-2 w-6 h-6" />
                                    <p className="text-gray-700 font-medium mb-1">Add A New Lead</p>
                                    <p className="text-sm text-gray-500">Create a new lead manually</p>
                                </div>
                                <div className="border border-black rounded-lg p-6 text-center hover:bg-gray-50 cursor-pointer w-64">
                                    <img src={leadDistribution} alt="leadDistribution icon" className="mx-auto mb-2 w-6 h-6" />
                                    <p className="text-gray-700 font-medium mb-1">Lead Distribution Method</p>
                                    <p className="text-sm text-gray-500">Select how you want to distribute the selected leads</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadsManagement;