import { useState } from 'react';
import { Search, Bell, User, HelpCircle, ShoppingCart, DollarSign, Users, Edit } from 'lucide-react';

export default function Dashboard() {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Elizabeth Lee', company: 'AvatarSystems', value: '$359', date: '10/07/2023', status: 'New' },
    { id: 2, name: 'Carlos Garcia', company: 'SmoozaShift', value: '$747', date: '24/07/2023', status: 'New' },
    { id: 3, name: 'Elizabeth Bailey', company: 'Prime Time Telecom', value: '$564', date: '08/08/2023', status: 'In-progress' },
    { id: 4, name: 'Ryan Brown', company: 'OmniTech Corporation', value: '$541', date: '31/08/2023', status: 'In-progress' },
    { id: 5, name: 'Ryan Young', company: 'DataStream Inc.', value: '$769', date: '01/09/2023', status: 'Completed' },
    { id: 6, name: 'Hailey Adams', company: 'FlowRush', value: '$922', date: '10/10/2023', status: 'Completed' },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-56 bg-white border-r border-gray-200">
        <div className="p-4">
          <div className="flex items-center mb-6">
            <div className="h-8 w-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-md mr-2"></div>
            <span className="text-xl font-bold">Logo</span>
          </div>

          <nav className="space-y-1">
            <div className="bg-pink-500 text-white rounded-md p-2 flex items-center">
              <div className="mr-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </div>
              <span>Dashboard</span>
            </div>
            
            <div className="p-2 flex items-center text-gray-600 hover:bg-gray-100 rounded-md">
              <div className="mr-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <span>Projects</span>
            </div>
            
            <div className="p-2 flex items-center text-gray-600 hover:bg-gray-100 rounded-md">
              <div className="mr-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span>Teams</span>
            </div>
            
            <div className="p-2 flex items-center text-gray-600 hover:bg-gray-100 rounded-md">
              <div className="mr-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <span>Analytics</span>
            </div>
            
            <div className="p-2 flex items-center text-gray-600 hover:bg-gray-100 rounded-md">
              <div className="mr-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <span>Messages</span>
            </div>
            
            <div className="p-2 flex items-center text-gray-600 hover:bg-gray-100 rounded-md">
              <div className="mr-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <span>Integrations</span>
            </div>
          </nav>
        </div>
        
        <div className="p-4 mt-12">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex justify-center mb-3">
              <img src="/api/placeholder/200/140" alt="Upgrade illustration" className="h-32" />
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-1">V2.0 is available</h3>
              <button className="mt-2 border border-blue-400 text-blue-500 px-4 py-1 rounded-md w-full">
                Try now
              </button>
            </div>
          </div>
          
          <div className="text-center text-xs text-gray-400 mt-6">
            Made with <span className="mx-1">♥</span> by Visily
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 flex items-center justify-between p-4">
          <h1 className="text-xl text-pink-500 font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 pl-10 pr-4 py-2 rounded-md w-64"
              />
            </div>
            <Bell className="h-5 w-5 text-gray-500" />
            <HelpCircle className="h-5 w-5 text-gray-500" />
            <div className="h-8 w-8 bg-pink-100 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-pink-500" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {/* Overview */}
          <section>
            <div className="flex items-center mb-4">
              <div className="h-5 w-5 bg-pink-100 rounded flex items-center justify-center mr-2">
                <div className="h-3 w-3 bg-pink-500 rounded-sm"></div>
              </div>
              <h2 className="text-lg font-medium">Overview</h2>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Turnover Card */}
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500 font-medium">Turnover</span>
                  <div className="h-8 w-8 bg-pink-50 rounded flex items-center justify-center">
                    <ShoppingCart className="h-5 w-5 text-pink-400" />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-bold">$92,405</span>
                </div>
                <div className="flex items-center text-green-500 text-sm">
                  <span className="mr-1">↑</span>
                  <span>5.39% period of change</span>
                </div>
              </div>

              {/* Profit Card */}
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500 font-medium">Profit</span>
                  <div className="h-8 w-8 bg-blue-50 rounded flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-bold">$32,218</span>
                </div>
                <div className="flex items-center text-green-500 text-sm">
                  <span className="mr-1">↑</span>
                  <span>5.39% period of change</span>
                </div>
              </div>

              {/* New Customer Card */}
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500 font-medium">New customer</span>
                  <div className="h-8 w-8 bg-blue-50 rounded flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-bold">298</span>
                </div>
                <div className="flex items-center text-green-500 text-sm">
                  <span className="mr-1">↑</span>
                  <span>6.84% period of change</span>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Report */}
          <section className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="h-5 w-5 bg-pink-100 rounded flex items-center justify-center mr-2">
                  <div className="h-3 w-3 bg-pink-500 rounded-sm"></div>
                </div>
                <h2 className="text-lg font-medium">Detailed report</h2>
              </div>
              <div className="flex space-x-2">
                <button className="border border-pink-200 text-pink-500 px-4 py-1 rounded flex items-center">
                  <span className="mr-1">↓</span>
                  <span>Import</span>
                </button>
                <button className="border border-pink-200 text-pink-500 px-4 py-1 rounded flex items-center">
                  <span className="mr-1">↑</span>
                  <span>Export</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="w-10 p-4 text-left">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="p-4 text-left text-gray-500 font-medium">CUSTOMER NAME</th>
                    <th className="p-4 text-left text-gray-500 font-medium">COMPANY</th>
                    <th className="p-4 text-left text-gray-500 font-medium">ORDER VALUE</th>
                    <th className="p-4 text-left text-gray-500 font-medium">ORDER DATE</th>
                    <th className="p-4 text-left text-gray-500 font-medium">STATUS</th>
                    <th className="w-10 p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <tr key={customer.id} className={index < customers.length - 1 ? "border-b border-gray-200" : ""}>
                      <td className="p-4">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <div className="h-8 w-8 bg-gray-200 rounded-full mr-2"></div>
                          <span>{customer.name}</span>
                        </div>
                      </td>
                      <td className="p-4">{customer.company}</td>
                      <td className="p-4">{customer.value}</td>
                      <td className="p-4">{customer.date}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-md text-xs ${
                          customer.status === 'New' ? 'bg-blue-100 text-blue-600' :
                          customer.status === 'In-progress' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-green-100 text-green-600'
                        }`}>
                          {customer.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <Edit className="h-4 w-4 text-gray-400" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="p-4 flex items-center justify-between text-sm">
                <div className="text-gray-500">63 results</div>
                <div className="flex items-center space-x-1">
                  <button className="h-8 w-8 flex items-center justify-center rounded-full">
                    <span className="sr-only">Previous</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button className="h-8 w-8 bg-pink-500 text-white rounded-full flex items-center justify-center">1</button>
                  <button className="h-8 w-8 flex items-center justify-center rounded-full">2</button>
                  <button className="h-8 w-8 flex items-center justify-center rounded-full">3</button>
                  <button className="h-8 w-8 flex items-center justify-center rounded-full">...</button>
                  <button className="h-8 w-8 flex items-center justify-center rounded-full">10</button>
                  <button className="h-8 w-8 flex items-center justify-center rounded-full">11</button>
                  <button className="h-8 w-8 flex items-center justify-center rounded-full">
                    <span className="sr-only">Next</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}