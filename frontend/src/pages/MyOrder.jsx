// // import React, { useContext, useEffect, useState } from 'react';
// // import { ShopContext } from '../context/ShopContext';
// // import axios from 'axios';
// // import { FaBox } from 'react-icons/fa';

// // const MyOrders = () => {
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [errorMsg, setErrorMsg] = useState('');
// //   const { url, token, userId } = useContext(ShopContext); // Assumes userId, token, url in context

// //   useEffect(() => {
// //     const fetchOrders = async () => {
// //       const userId = "6821af0f9f14dfbe47611020";
// //       console.log('User ID:', userId);
// //       if (!userId || !token) {
// //         setErrorMsg('User not logged in.');
// //         setLoading(false);
// //         return;
// //       }

// //       try {
// //         const response = await axios.post(
// //           `${url}/api/order/userorders`,
// //           { userId },
// //           {
// //             headers: { token },
// //           }
// //         );

// //         if (response.data.success) {
// //           setOrders(response.data.data || []);
// //         } else {
// //           setErrorMsg('Failed to fetch orders.');
// //         }
// //       } catch (error) {
// //         console.error('Error fetching orders:', error);
// //         setErrorMsg('An error occurred while fetching orders.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchOrders();
// //   }, [userId, token, url]);

// //   return (
// //     <section className="max-padd-container pt-20">
// //       <div className="py-10">
// //         <h4 className="bold-24 mb-4">My Orders</h4>

// //         {loading ? (
// //           <p className="text-gray-400">Loading orders...</p>
// //         ) : errorMsg ? (
// //           <p className="text-red-500">{errorMsg}</p>
// //         ) : orders.length === 0 ? (
// //           <p className="text-gray-500">No orders found.</p>
// //         ) : (
// //           <table className="w-full mt-6">
// //             <thead className="bg-gray-100 text-gray-700 text-left text-sm">
// //               <tr>
// //                 <th className="p-2 hidden sm:table-cell">Package</th>
// //                 <th className="p-2">Title</th>
// //                 <th className="p-2">Price</th>
// //                 <th className="p-2">Quantity</th>
// //                 <th className="p-2">Status</th>
// //                 <th className="p-2">Track</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {orders.map((order, i) => (
// //                 <tr key={i} className="border-b border-gray-200 text-gray-800 text-sm">
// //                   <td className="p-2 hidden sm:table-cell">
// //                     <FaBox className="text-xl text-secondary" />
// //                   </td>
// //                   <td className="p-2">
// //                     {order.items?.map((item, index) => (
// //                       <span key={index}>
// //                         {item.name} x {item.quantity}
// //                         {index !== order.items.length - 1 && ', '}
// //                       </span>
// //                     ))}
// //                   </td>
// //                   <td className="p-2">rupees {order.amount}</td>
// //                   <td className="p-2 text-center">{order.items?.length}</td>
// //                   <td className="p-2">
// //                     <span className="flex items-center gap-2">
// //                       <span className="text-green-500">&#x25cf;</span>
// //                       <strong>{order.status || 'Processing'}</strong>
// //                     </span>
// //                   </td>
// //                   <td className="p-2">
// //                     <button
// //                       onClick={() => alert(`Tracking for Order ID: ${order._id}`)}
// //                       className="btn-light rounded-sm px-4 py-1 text-sm"
// //                     >
// //                       Track
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // export default MyOrders;
// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { FaBox, FaSearch, FaCalendarAlt, FaFilter } from 'react-icons/fa';

// const MyOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMsg, setErrorMsg] = useState('');
//   const { url, token, userId } = useContext(ShopContext);
  
//   // Filter states
//   const [searchTerm, setSearchTerm] = useState('');
//   const [dateFilter, setDateFilter] = useState({
//     startDate: '',
//     endDate: '',
//   });
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [showFilters, setShowFilters] = useState(false);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const userId = localStorage.getItem('userId') || "6821af0f9f14dfbe47611020";
//       console.log('User ID:', userId);
//       if (!userId || !token) {
//         setErrorMsg('User not logged in.');
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.post(
//           `${url}/api/order/userorders`,
//           { userId },
//           {
//             headers: { token },
//           }
//         );

//         if (response.data.success) {
//           // Sort orders by date (newest first)
//           const sortedOrders = (response.data.data || []).sort((a, b) => 
//             new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
//           );
          
//           // Set default status if not provided
//           const ordersWithStatus = sortedOrders.map(order => ({
//             ...order,
//             status: order.status || 'Product Loading'
//           }));
          
//           setOrders(ordersWithStatus);
//           setFilteredOrders(ordersWithStatus);
//         } else {
//           setErrorMsg('Failed to fetch orders.');
//         }
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//         setErrorMsg('An error occurred while fetching orders.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [userId, token, url]);

//   useEffect(() => {
//     // Apply filters whenever filter states change
//     applyFilters();
//   }, [searchTerm, dateFilter, statusFilter, orders]);

//   const applyFilters = () => {
//     let result = [...orders];

//     // Apply search term filter (product name)
//     if (searchTerm) {
//       result = result.filter(order => 
//         order.items?.some(item => 
//           item.name.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       );
//     }

//     // Apply date range filter
//     if (dateFilter.startDate && dateFilter.endDate) {
//       const startDate = new Date(dateFilter.startDate);
//       const endDate = new Date(dateFilter.endDate);
//       // Set endDate to end of day
//       endDate.setHours(23, 59, 59, 999);

//       result = result.filter(order => {
//         const orderDate = new Date(order.createdAt || Date.now());
//         return orderDate >= startDate && orderDate <= endDate;
//       });
//     }

//     // Apply status filter
//     if (statusFilter !== 'all') {
//       result = result.filter(order => 
//         (order.status || 'Product Loading') === statusFilter
//       );
//     }

//     setFilteredOrders(result);
//   };

//   const resetFilters = () => {
//     setSearchTerm('');
//     setDateFilter({ startDate: '', endDate: '' });
//     setStatusFilter('all');
//     setFilteredOrders(orders);
//   };

//   const formatDate = (dateString) => {
//     try {
//       const date = new Date(dateString || Date.now());
//       return date.toLocaleDateString('en-US', {
//         day: '2-digit',
//         month: 'short',
//         year: 'numeric'
//       });
//     } catch (error) {
//       return 'N/A';
//     }
//   };

//   return (
//     <section className="max-padd-container pt-20">
//       <div className="py-10">
//         <div className="flex justify-between items-center mb-6">
//           <h4 className="bold-24">My Orders</h4>
//           <div className="flex items-center gap-3">
//             <div className="relative">
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder="Search products..."
//                 className="pl-8 pr-4 py-2 ring-1 ring-slate-900/15 rounded-sm outline-none w-48 md:w-60"
//               />
//               <FaSearch className="absolute left-2 top-3 text-gray-400" />
//             </div>
//             <button 
//               onClick={() => setShowFilters(!showFilters)}
//               className="flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-sm text-sm"
//             >
//               <FaFilter />
//               <span>Filters</span>
//             </button>
//           </div>
//         </div>

//         {/* Advanced Filters (collapsible) */}
//         {showFilters && (
//           <div className="bg-gray-50 p-4 mb-6 rounded-sm">
//             <div className="flex flex-wrap gap-4 items-end">
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Date Range</label>
//                 <div className="flex items-center gap-2">
//                   <div className="relative">
//                     <input
//                       type="date"
//                       value={dateFilter.startDate}
//                       onChange={(e) => setDateFilter({...dateFilter, startDate: e.target.value})}
//                       className="pl-8 pr-2 py-2 ring-1 ring-slate-900/15 rounded-sm outline-none"
//                     />
//                     <FaCalendarAlt className="absolute left-2 top-3 text-gray-400" />
//                   </div>
//                   <span>to</span>
//                   <div className="relative">
//                     <input
//                       type="date"
//                       value={dateFilter.endDate}
//                       onChange={(e) => setDateFilter({...dateFilter, endDate: e.target.value})}
//                       className="pl-8 pr-2 py-2 ring-1 ring-slate-900/15 rounded-sm outline-none"
//                     />
//                     <FaCalendarAlt className="absolute left-2 top-3 text-gray-400" />
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">Status</label>
//                 <select
//                   value={statusFilter}
//                   onChange={(e) => setStatusFilter(e.target.value)}
//                   className="px-3 py-2 ring-1 ring-slate-900/15 rounded-sm outline-none"
//                 >
//                   <option value="all">All Statuses</option>
//                   <option value="Product Loading">Product Loading</option>
//                   <option value="Out for Delivery">Out for Delivery</option>
//                   <option value="Delivered">Delivered</option>
//                 </select>
//               </div>

//               <button
//                 onClick={resetFilters}
//                 className="text-sm px-4 py-2 border border-gray-300 rounded-sm hover:bg-gray-200"
//               >
//                 Reset Filters
//               </button>
//             </div>
//           </div>
//         )}

//         {loading ? (
//           <div className="flex justify-center items-center py-20">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
//           </div>
//         ) : errorMsg ? (
//           <p className="text-red-500 py-10">{errorMsg}</p>
//         ) : filteredOrders.length === 0 ? (
//           <div className="text-center py-16">
//             <div className="flex justify-center mb-4">
//               <FaBox className="text-4xl text-gray-300" />
//             </div>
//             <p className="text-gray-500">No orders found matching your filters.</p>
//             {searchTerm || dateFilter.startDate || dateFilter.endDate || statusFilter !== 'all' ? (
//               <button 
//                 onClick={resetFilters}
//                 className="mt-4 text-secondary underline"
//               >
//                 Clear filters
//               </button>
//             ) : null}
//           </div>
//         ) : (
//           <>
//             <p className="text-sm text-gray-500 mb-4">
//               {filteredOrders.length} {filteredOrders.length === 1 ? 'order' : 'orders'} found
//             </p>
//             <div className="overflow-x-auto">
//               <table className="w-full mt-6">
//                 <thead className="bg-gray-100 text-gray-700 text-left text-sm">
//                   <tr>
//                     <th className="p-3 hidden sm:table-cell">Package</th>
//                     <th className="p-3">Order Date</th>
//                     <th className="p-3">Products</th>
//                     <th className="p-3">Total</th>
//                     <th className="p-3">Status</th>
//                     <th className="p-3">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredOrders.map((order) => (
//                     <tr key={order._id} className="border-b border-gray-200 text-gray-800 text-sm hover:bg-gray-50">
//                       <td className="p-3 hidden sm:table-cell">
//                         <FaBox className="text-xl text-secondary" />
//                       </td>
//                       <td className="p-3">
//                         {formatDate(order.createdAt)}
//                       </td>
//                       <td className="p-3">
//                         <div>
//                           {order.items?.map((item, index) => (
//                             <div key={index} className="mb-1">
//                               <span className="font-medium">{item.name}</span> 
//                               <span className="text-gray-500"> × {item.quantity}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </td>
//                       <td className="p-3 font-medium">₹{order.amount}</td>
//                       <td className="p-3">
//                         <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs
//                           ${(order.status || 'Product Loading') === 'Delivered' ? 'bg-teal-50 text-teal-700' : 
//                           (order.status || 'Product Loading') === 'Out for Delivery' ? 'bg-blue-50 text-blue-700' :
//                           'bg-amber-50 text-amber-700'}`}>
//                           <span className={`w-2 h-2 rounded-full
//                             ${(order.status || 'Product Loading') === 'Delivered' ? 'bg-teal-500' : 
//                             (order.status || 'Product Loading') === 'Out for Delivery' ? 'bg-blue-500' :
//                             'bg-amber-500'}`}></span>
//                           {order.status || 'Product Loading'}
//                         </span>
//                       </td>
//                       <td className="p-3">
//                         <div className="flex gap-2">
//                           <button
//                             onClick={() => alert(`Order Details for Order ID: ${order._id}`)}
//                             className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-sm"
//                           >
//                             Details
//                           </button>
//                           <button
//                             onClick={() => alert(`Tracking for Order ID: ${order._id}`)}
//                             className="text-xs px-3 py-1 bg-secondary text-white hover:bg-secondary/90 rounded-sm"
//                           >
//                             Track
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default MyOrders;
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { FaBox, FaSearch, FaCalendarAlt, FaFilter } from 'react-icons/fa';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const { url, token, userId } = useContext(ShopContext);
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState({
    startDate: '',
    endDate: '',
  });
  const [statusFilter, setStatusFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      const userId = localStorage.getItem('userId') || "6821af0f9f14dfbe47611020";
      console.log('User ID:', userId);
      if (!userId || !token) {
        setErrorMsg('User not logged in.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.post(
          `${url}/api/order/userorders`,
          { userId },
          {
            headers: { token },
          }
        );

        if (response.data.success) {
          // Sort orders by date (newest first)
          const sortedOrders = (response.data.data || []).sort((a, b) => 
            new Date(b.date || 0) - new Date(a.date || 0)
          );
          
          // Set default status if not provided
          const ordersWithStatus = sortedOrders.map(order => ({
            ...order,
            status: order.status || 'Product Loading'
          }));
          
          setOrders(ordersWithStatus);
          setFilteredOrders(ordersWithStatus);
        } else {
          setErrorMsg('Failed to fetch orders.');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        setErrorMsg('An error occurred while fetching orders.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId, token, url]);

  useEffect(() => {
    // Apply filters whenever filter states change
    applyFilters();
  }, [searchTerm, dateFilter, statusFilter, orders]);

  const applyFilters = () => {
    let result = [...orders];

    // Apply search term filter (product name)
    if (searchTerm) {
      result = result.filter(order => 
        order.items?.some(item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Apply date range filter
    if (dateFilter.startDate && dateFilter.endDate) {
      const startDate = new Date(dateFilter.startDate);
      const endDate = new Date(dateFilter.endDate);
      // Set endDate to end of day
      endDate.setHours(23, 59, 59, 999);

      result = result.filter(order => {
        const orderDate = new Date(order.date || Date.now());
        return orderDate >= startDate && orderDate <= endDate;
      });
    }

    // Apply status filter
    if (statusFilter !== 'all') {
      result = result.filter(order => 
        (order.status || 'Product Loading') === statusFilter
      );
    }

    setFilteredOrders(result);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setDateFilter({ startDate: '', endDate: '' });
    setStatusFilter('all');
    setFilteredOrders(orders);
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString || Date.now());
      return date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
    } catch (error) {
      return 'N/A';
    }
  };

  return (
    <section className="max-padd-container pt-20">
      <div className="py-10">
        <div className="flex justify-between items-center mb-6">
          <h4 className="bold-24">My Orders</h4>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="pl-8 pr-4 py-2 ring-1 ring-slate-900/15 rounded-sm outline-none w-48 md:w-60"
              />
              <FaSearch className="absolute left-2 top-3 text-gray-400" />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-sm text-sm"
            >
              <FaFilter />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Advanced Filters (collapsible) */}
        {showFilters && (
          <div className="bg-gray-50 p-4 mb-6 rounded-sm">
            <div className="flex flex-wrap gap-4 items-end">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Date Range</label>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <input
                      type="date"
                      value={dateFilter.startDate}
                      onChange={(e) => setDateFilter({...dateFilter, startDate: e.target.value})}
                      className="pl-8 pr-2 py-2 ring-1 ring-slate-900/15 rounded-sm outline-none"
                    />
                    <FaCalendarAlt className="absolute left-2 top-3 text-gray-400" />
                  </div>
                  <span>to</span>
                  <div className="relative">
                    <input
                      type="date"
                      value={dateFilter.endDate}
                      onChange={(e) => setDateFilter({...dateFilter, endDate: e.target.value})}
                      className="pl-8 pr-2 py-2 ring-1 ring-slate-900/15 rounded-sm outline-none"
                    />
                    <FaCalendarAlt className="absolute left-2 top-3 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 ring-1 ring-slate-900/15 rounded-sm outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="Product Loading">Product Loading</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>

              <button
                onClick={resetFilters}
                className="text-sm px-4 py-2 border border-gray-300 rounded-sm hover:bg-gray-200"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
          </div>
        ) : errorMsg ? (
          <p className="text-red-500 py-10">{errorMsg}</p>
        ) : filteredOrders.length === 0 ? (
          <div className="text-center py-16">
            <div className="flex justify-center mb-4">
              <FaBox className="text-4xl text-gray-300" />
            </div>
            <p className="text-gray-500">No orders found matching your filters.</p>
            {searchTerm || dateFilter.startDate || dateFilter.endDate || statusFilter !== 'all' ? (
              <button 
                onClick={resetFilters}
                className="mt-4 text-secondary underline"
              >
                Clear filters
              </button>
            ) : null}
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-4">
              {filteredOrders.length} {filteredOrders.length === 1 ? 'order' : 'orders'} found
            </p>
            <div className="overflow-x-auto">
              <table className="w-full mt-6">
                <thead className="bg-gray-100 text-gray-700 text-left text-sm">
                  <tr>
                    <th className="p-3 hidden sm:table-cell">Package</th>
                    <th className="p-3">Order Date</th>
                    <th className="p-3">Products</th>
                    <th className="p-3">Total</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order._id} className="border-b border-gray-200 text-gray-800 text-sm hover:bg-gray-50">
                      <td className="p-3 hidden sm:table-cell">
                        <FaBox className="text-xl text-secondary" />
                      </td>
                      <td className="p-3">
                        {formatDate(order.date)}
                      </td>
                      <td className="p-3">
                        <div>
                          {order.items?.map((item, index) => (
                            <div key={index} className="mb-1">
                              <span className="font-medium">{item.name}</span> 
                              <span className="text-gray-500"> × {item.quantity}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="p-3 font-medium">₹{order.amount}</td>
                      <td className="p-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs
                          ${(order.status || 'Product Loading') === 'Delivered' ? 'bg-teal-50 text-teal-700' : 
                          (order.status || 'Product Loading') === 'Out for Delivery' ? 'bg-blue-50 text-blue-700' :
                          'bg-amber-50 text-amber-700'}`}>
                          <span className={`w-2 h-2 rounded-full
                            ${(order.status || 'Product Loading') === 'Delivered' ? 'bg-teal-500' : 
                            (order.status || 'Product Loading') === 'Out for Delivery' ? 'bg-blue-500' :
                            'bg-amber-500'}`}></span>
                          {order.status || 'Product Loading'}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => alert(`Order Details for Order ID: ${order._id}`)}
                            className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-sm"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => alert(`Tracking for Order ID: ${order._id}`)}
                            className="text-xs px-3 py-1 bg-secondary text-white hover:bg-secondary/90 rounded-sm"
                          >
                            Track
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MyOrders;