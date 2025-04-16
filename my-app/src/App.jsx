import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import OverviewCard from "./components/OverviewCard";
import DetailedReport from "./components/DetailedReport";
import Pagination from "./components/Pagination";
import ChefifyHome from "./components/ChefifyHome";
function App() {
  return (
    // <div className="flex min-h-screen bg-gray-50">
    //   <Sidebar />
    //   <div className="flex-1 flex flex-col">
    //     <Header />
    //     <main className="p-6">
    //       <h2 className="text-xl font-bold text-gray-800 mb-4">Overview</h2>
    //       <div className="grid md:grid-cols-3 gap-4 mb-6">
    //         <OverviewCard
    //           title="Turnover"
    //           value="92,405"
    //           change={5.39}
    //           color="bg-pink-50"
    //           icon="🛒"
    //         />
    //         <OverviewCard
    //           title="Profit"
    //           value="32,218"
    //           change={5.39}
    //           color="bg-blue-50"
    //           icon="💰"
    //         />
    //         <OverviewCard
    //           title="New customer"
    //           value="298"
    //           change={6.84}
    //           color="bg-indigo-50"
    //           icon="📈"
    //         />
    //       </div>

    //       <div className="flex justify-between items-center mb-3">
    //         <h2 className="text-lg font-bold text-gray-800">Detailed Report</h2>
    //         <div className="space-x-2">
    //           <button className="border border-pink-500 text-pink-500 px-3 py-1 rounded-md hover:bg-pink-50">
    //             ⬆ Import
    //           </button>
    //           <button className="border border-pink-500 text-pink-500 px-3 py-1 rounded-md hover:bg-pink-50">
    //             ⬇ Export
    //           </button>
    //         </div>
    //       </div>

    //       <DetailedReport />
    //       <Pagination />
    //     </main>
    //   </div>
    // </div>
    <div>
      <ChefifyHome></ChefifyHome>
    </div>
  );
}

export default App;
