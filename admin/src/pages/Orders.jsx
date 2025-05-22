// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';
// // import { FaBox } from 'react-icons/fa';
// // // Import jsPDF separately
// // import SearchAndExport from "../components/SearchAndExport";

// // const Orders = ({ url }) => {
// //   const [orders, setOrders] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState('');

// //   const fetchAllOrders = async (filter = '') => {
// //     try {
// //       const response = await axios.get(`${url}/api/order/list?search=${filter}`);
// //       if (response.data.success) {
// //         setOrders(response.data.data);
// //       } else {
// //         toast.error('Error fetching orders');
// //       }
// //     } catch (error) {
// //       toast.error('An unexpected error occurred while fetching orders');
// //       console.error('Fetch all orders error:', error);
// //     }
// //   };

// //   const statusHandler = async (event, orderId) => {
// //     try {
// //       const response = await axios.post(`${url}/api/order/status`, {
// //         orderId,
// //         status: event.target.value,
// //       });
// //       if (response.data.success) {
// //         await fetchAllOrders(searchTerm); // Only pass searchTerm
// //         toast.success('Order status updated successfully');
// //       } else {
// //         toast.error('Failed to update order status');
// //       }
// //     } catch (error) {
// //       toast.error('An unexpected error occurred while updating order status');
// //       console.error('Status update error:', error);
// //     }
// //   };

// //   const handleSearchSubmit = (event) => {
// //     event.preventDefault();
// //     fetchAllOrders(searchTerm);
// //   };

// //   // Function to add company header to PDF
// //   const addCompanyHeaderToPDF = (doc) => {
// //     // Company header details
// //     doc.setFontSize(20);
// //     doc.setTextColor(200, 50, 50); // Reddish color for "Sivaprakasam Sarees" text
// //     doc.text('Sivaprakasam Sarees', 65, 15);
    
// //     doc.setFontSize(12);
// //     doc.setTextColor(50, 50, 50); // Dark gray for address
// //     doc.text('Mfrs. of Mill Printed Sarees', 75, 22);
// //     doc.text('31, Brinda Street, ERODE - 638 001, TN.', 65, 29);
    
// //     // Add a horizontal line below the header
// //     doc.setDrawColor(200, 50, 50); // Red line
// //     doc.setLineWidth(0.5);
// //     doc.line(14, 33, 196, 33);
    
// //     // Reset text color for the rest of the document
// //     doc.setTextColor(0, 0, 0);
// //   };

// //   const generatePDF = () => {
// //     try {
// //       // Dynamic import for jsPDF and autotable
// //       import('jspdf').then(({ default: jsPDF }) => {
// //         import('jspdf-autotable').then(({ default: autoTable }) => {
// //           const doc = new jsPDF();
          
// //           // Add company header to PDF using the text-based method
// //           addCompanyHeaderToPDF(doc);
          
// //           // Add title to the document - positioned below the header
// //           doc.setFontSize(16);
// //           doc.text('Order Report', 14, 45);
          
// //           // Create table structure
// //           const tableColumn = ["Order ID", "Customer", "Items", "Price", "Status"];
// //           const tableRows = [];
          
// //           // Add data to the table
// //           orders.forEach(order => {
// //             const itemsList = order.items.map(item => `${item.name} x ${item.quantity}`).join(', ');
// //             const customerName = `${order.address?.firstname || ''} ${order.address?.lastname || ''}`;
            
// //             const orderData = [
// //               order._id || '',
// //               customerName,
// //               itemsList,
// //               order.amount || '',
// //               order.status || ''
// //             ];
            
// //             tableRows.push(orderData);
// //           });
          
// //           // Use autoTable directly - start table below the header
// //           autoTable(doc, {
// //             head: [tableColumn],
// //             body: tableRows,
// //             startY: 50, // Positioned below the header and title
// //             styles: { fontSize: 8, cellPadding: 3 },
// //             headStyles: { fillColor: [41, 128, 185], textColor: 255 },
// //             alternateRowStyles: { fillColor: [245, 245, 245] }
// //           });
          
// //           // Save the PDF
// //           doc.save('sivaprakasam_order_report.pdf');
// //           toast.success('PDF generated successfully');
// //         });
// //       }).catch(error => {
// //         console.error('Error loading PDF modules:', error);
// //         toast.error('Failed to load PDF generation modules');
// //       });
// //     } catch (error) {
// //       console.error('PDF generation error:', error);
// //       toast.error('Failed to generate PDF');
// //     }
// //   };

// //   useEffect(() => {
// //     fetchAllOrders(searchTerm); // Only pass searchTerm
// //   }, [url]);

// //   return (
// //     <section className="p-4 sm:p-10 box-border w-full">
// //       <h4 className="bold-22 uppercase">Order Page</h4>

// //       <SearchAndExport
// //         searchTerm={searchTerm}
// //         setSearchTerm={setSearchTerm}
// //         onSearchSubmit={handleSearchSubmit}
// //         onExport={generatePDF}
// //         data={orders} // Pass orders data for export
// //       />
      
// //       <div className="overflow-auto mt-8">
// //         <table className="w-full">
// //           <thead>
// //             <tr className="border-b border-slate-900/20 text-gray-30 regular-14 xs:regular-16 text-start py-12">
// //               <th className="p-1 text-left hidden sm:table-cell">Package</th>
// //               <th className="p-1 text-left">Order</th>
// //               <th className="p-1 text-left">Items</th>
// //               <th className="p-1 text-left">Price</th>
// //               <th className="p-1 text-left">Status</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {orders.map((order, i) => (
// //               <tr key={i} className="border-b border-slate-900/20 text-gray-50 p-6 medium-14 text-left">
// //                 <td className="p-1 hidden sm:table-cell">
// //                   <FaBox className="text-2xl text-secondary" />
// //                 </td>
// //                 <td className="p-1">
// //                   <div className="p-2">
// //                     <p>
// //                       {order.items.map((item, index) => (
// //                         <span key={index}>
// //                           {item.name} x {item.quantity}
// //                           {index !== order.items.length - 1 && ', '}
// //                         </span>
// //                       ))}
// //                     </p>
// //                   </div>
// //                   <hr className="w-1/2" />
// //                   <div>
// //                     <h5 className="medium-15">{order.address.firstname} {order.address.lastname}</h5>
// //                     <div>
// //                       <p>{order.address.street},</p>
// //                       <p>
// //                         {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
// //                       </p>
// //                     </div>
// //                     <p>{order.address.phone}</p>
// //                   </div>
// //                 </td>
// //                 <td className="p-1">{order.items.length}</td>
// //                 <td className="p-1">{order.amount}</td>
// //                 <td className="p-1">
// //                   <select
// //                     onChange={(event) => statusHandler(event, order._id)}
// //                     value={order.status}
// //                     className="bg-primary ring-1 ring-secondary text-sm max-w-20 xl:max-w-28"
// //                   >
// //                     <option value="Product Loading">Product Loading</option>
// //                     <option value="Out for Delivery">Out for Delivery</option>
// //                     <option value="Delivered">Delivered</option>
// //                   </select>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Orders;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { FaBox } from 'react-icons/fa';
// // Import components
// import SearchAndExport from "../components/SearchAndExport";
// import OrderAmountVisualization from "../components/OrderAmountVisualization";

// const Orders = ({ url }) => {
//   const [orders, setOrders] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isVisualizationVisible, setIsVisualizationVisible] = useState(true);

//   const fetchAllOrders = async (filter = '') => {
//     try {
//       const response = await axios.get(`${url}/api/order/list?search=${filter}`);
//       if (response.data.success) {
//         setOrders(response.data.data);
//       } else {
//         toast.error('Error fetching orders');
//       }
//     } catch (error) {
//       toast.error('An unexpected error occurred while fetching orders');
//       console.error('Fetch all orders error:', error);
//     }
//   };

//   const statusHandler = async (event, orderId) => {
//     try {
//       const response = await axios.post(`${url}/api/order/status`, {
//         orderId,
//         status: event.target.value,
//       });
//       if (response.data.success) {
//         await fetchAllOrders(searchTerm);
//         toast.success('Order status updated successfully');
//       } else {
//         toast.error('Failed to update order status');
//       }
//     } catch (error) {
//       toast.error('An unexpected error occurred while updating order status');
//       console.error('Status update error:', error);
//     }
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     fetchAllOrders(searchTerm);
//   };

//   // Function to get current formatted date and time
//   const getCurrentDateTime = () => {
//     const now = new Date();
//     return {
//       date: now.toLocaleDateString('en-IN', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric'
//       }),
//       time: now.toLocaleTimeString('en-IN', {
//         hour: '2-digit',
//         minute: '2-digit'
//       })
//     };
//   };

//   // Function to add company header to PDF
//   const addCompanyHeaderToPDF = (doc) => {
//     // Get current date and time
//     const { date, time } = getCurrentDateTime();
    
//     // Company header details
//     doc.setFontSize(20);
//     doc.setTextColor(200, 50, 50); // Reddish color for "Sivaprakasam Sarees" text
//     doc.text('Sivaprakasam Sarees', 65, 15);
    
//     doc.setFontSize(12);
//     doc.setTextColor(50, 50, 50); // Dark gray for address
//     doc.text('Mfrs. of Mill Printed Sarees', 75, 22);
//     doc.text('31, Brinda Street, ERODE - 638 001, TN.', 65, 29);
    
//     // Add date and time on the right side
//     doc.setFontSize(10);
//     doc.text(`Date: ${date}`, 150, 22);
//     doc.text(`Time: ${time}`, 150, 29);
    
//     // Add a horizontal line below the header
//     doc.setDrawColor(200, 50, 50); // Red line
//     doc.setLineWidth(0.5);
//     doc.line(14, 33, 196, 33);
    
//     // Reset text color for the rest of the document
//     doc.setTextColor(0, 0, 0);
//   };

//   // Function to add amount summary to PDF
//   const addAmountSummaryToPDF = (doc, startY) => {
//     if (!orders || orders.length === 0) return startY;
    
//     // Calculate stats
//     const amounts = orders.map(order => parseFloat(order.amount) || 0);
//     const total = amounts.reduce((sum, amount) => sum + amount, 0);
//     const average = total / orders.length;
//     const highest = Math.max(...amounts);
//     const lowest = Math.min(...amounts);
    
//     // Group by status
//     const statusGroups = {};
//     orders.forEach(order => {
//       const status = order.status || 'Unknown';
//       if (!statusGroups[status]) {
//         statusGroups[status] = {
//           totalAmount: 0,
//           count: 0
//         };
//       }
//       statusGroups[status].totalAmount += parseFloat(order.amount) || 0;
//       statusGroups[status].count += 1;
//     });
    
//     // Add summary title
//     doc.setFontSize(14);
//     doc.text('Order Amount Summary', 14, startY + 10);
//     startY += 15;
    
//     // Add summary data
//     doc.setFontSize(10);
//     doc.text(`Total Orders: ${orders.length}`, 14, startY + 5);
//     doc.text(`Total Amount: ₹${total.toFixed(2)}`, 14, startY + 12);
//     doc.text(`Average Order Value: ₹${average.toFixed(2)}`, 14, startY + 19);
//     doc.text(`Highest Order: ₹${highest.toFixed(2)}`, 14, startY + 26);
//     doc.text(`Lowest Order: ₹${lowest.toFixed(2)}`, 14, startY + 33);
    
//     // Add status breakdown
//     startY += 45;
//     doc.setFontSize(12);
//     doc.text('Status Breakdown:', 14, startY);
//     startY += 7;
    
//     doc.setFontSize(10);
//     Object.entries(statusGroups).forEach(([status, data], index) => {
//       doc.text(`${status}: ${data.count} orders - ₹${data.totalAmount.toFixed(2)}`, 14, startY + (index * 7));
//     });
    
//     return startY + (Object.keys(statusGroups).length * 7) + 10;
//   };

//   const generatePDF = () => {
//     try {
//       // Dynamic import for jsPDF and autotable
//       import('jspdf').then(({ default: jsPDF }) => {
//         import('jspdf-autotable').then(({ default: autoTable }) => {
//           const doc = new jsPDF();
          
//           // Add company header to PDF with date and time
//           addCompanyHeaderToPDF(doc);
          
//           // Add title to the document - positioned below the header
//           doc.setFontSize(16);
//           doc.text('Order Report', 14, 45);
          
//           // Create table structure
//           const tableColumn = ["Order ID", "Customer", "Items", "Price", "Status"];
//           const tableRows = [];
          
//           // Add data to the table
//           orders.forEach(order => {
//             const itemsList = order.items.map(item => `${item.name} x ${item.quantity}`).join(', ');
//             const customerName = `${order.address?.firstname || ''} ${order.address?.lastname || ''}`;
            
//             const orderData = [
//               order._id || '',
//               customerName,
//               itemsList,
//               order.amount || '',
//               order.status || ''
//             ];
            
//             tableRows.push(orderData);
//           });
          
//           // Use autoTable directly - start table below the header
//           autoTable(doc, {
//             head: [tableColumn],
//             body: tableRows,
//             startY: 50, // Positioned below the header and title
//             styles: { fontSize: 8, cellPadding: 3 },
//             headStyles: { fillColor: [41, 128, 185], textColor: 255 },
//             alternateRowStyles: { fillColor: [245, 245, 245] }
//           });
          
//           // Get the final Y position after the table
//           const finalY = doc.lastAutoTable.finalY || 200;
          
//           // Add amount summary after the table
//           addAmountSummaryToPDF(doc, finalY);
          
//           // Save the PDF
//           doc.save('sivaprakasam_order_report.pdf');
//           toast.success('PDF generated successfully');
//         });
//       }).catch(error => {
//         console.error('Error loading PDF modules:', error);
//         toast.error('Failed to load PDF generation modules');
//       });
//     } catch (error) {
//       console.error('PDF generation error:', error);
//       toast.error('Failed to generate PDF');
//     }
//   };

//   const toggleVisualization = () => {
//     setIsVisualizationVisible(!isVisualizationVisible);
//   };

//   useEffect(() => {
//     fetchAllOrders(searchTerm);
//   }, [url]);

//   return (
//     <section className="p-4 sm:p-10 box-border w-full">
//       <h4 className="bold-22 uppercase">Order Page</h4>

//       <div className="flex justify-between items-center mt-6">
//         <SearchAndExport
//           searchTerm={searchTerm}
//           setSearchTerm={setSearchTerm}
//           onSearchSubmit={handleSearchSubmit}
//           onExport={generatePDF}
//           data={orders}
//         />
        
//         <button 
//           onClick={toggleVisualization}
//           className="ml-2 bg-blue-500 text-white rounded-md px-3 py-1 text-sm"
//         >
//           {isVisualizationVisible ? 'Hide Analysis' : 'Show Analysis'}
//         </button>
//       </div>
      
//       {isVisualizationVisible && (
//         <OrderAmountVisualization orders={orders} />
//       )}
      
//       <div className="overflow-auto mt-8">
//         <table className="w-full">
//           <thead>
//             <tr className="border-b border-slate-900/20 text-gray-30 regular-14 xs:regular-16 text-start py-12">
//               <th className="p-1 text-left hidden sm:table-cell">Package</th>
//               <th className="p-1 text-left">Order</th>
//               <th className="p-1 text-left">Items</th>
//               <th className="p-1 text-left">Price</th>
//               <th className="p-1 text-left">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, i) => (
//               <tr key={i} className="border-b border-slate-900/20 text-gray-50 p-6 medium-14 text-left">
//                 <td className="p-1 hidden sm:table-cell">
//                   <FaBox className="text-2xl text-secondary" />
//                 </td>
//                 <td className="p-1">
//                   <div className="p-2">
//                     <p>
//                       {order.items.map((item, index) => (
//                         <span key={index}>
//                           {item.name} x {item.quantity}
//                           {index !== order.items.length - 1 && ', '}
//                         </span>
//                       ))}
//                     </p>
//                   </div>
//                   <hr className="w-1/2" />
//                   <div>
//                     <h5 className="medium-15">{order.address.firstname} {order.address.lastname}</h5>
//                     <div>
//                       <p>{order.address.street},</p>
//                       <p>
//                         {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
//                       </p>
//                     </div>
//                     <p>{order.address.phone}</p>
//                   </div>
//                 </td>
//                 <td className="p-1">{order.items.length}</td>
//                 <td className="p-1">{order.amount}</td>
//                 <td className="p-1">
//                   <select
//                     onChange={(event) => statusHandler(event, order._id)}
//                     value={order.status}
//                     className="bg-primary ring-1 ring-secondary text-sm max-w-20 xl:max-w-28"
//                   >
//                     <option value="Product Loading">Product Loading</option>
//                     <option value="Out for Delivery">Out for Delivery</option>
//                     <option value="Delivered">Delivered</option>
//                   </select>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default Orders;
import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FaBox, FaCalendarAlt, FaDownload } from 'react-icons/fa';
// Import components
import SearchAndExport from "../components/SearchAndExport";
import OrderAmountVisualization from "../components/OrderAmountVisualization";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisualizationVisible, setIsVisualizationVisible] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  
  // Delivery charge constant - 2 rupees
  const DELIVERY_CHARGE = 2;

  const fetchAllOrders = async (filter = '') => {
    try {
      const response = await axios.get(`${url}/api/order/list?search=${filter}`);
      if (response.data.success) {
        // Add formatted date to each order if not already present
        const ordersWithDate = response.data.data.map(order => {
          // Check if createdAt exists and format it
          if (order.createdAt) {
            const orderDate = new Date(order.createdAt);
            const formattedDate = orderDate.toLocaleDateString('en-IN', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
            });
            return { ...order, formattedDate };
          }
          // If no createdAt, use current date
          else {
            const today = new Date();
            const formattedDate = today.toLocaleDateString('en-IN', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
            });
            return { ...order, formattedDate };
          }
        });
        
        // Calculate product prices for each order
        const ordersWithCalculatedPrices = ordersWithDate.map(order => {
          const totalAmount = parseFloat(order.amount) || 0;
          const productAmount = totalAmount - DELIVERY_CHARGE;
          const itemCount = order.items.reduce((total, item) => total + (item.quantity || 1), 0);
          const perUnitPrice = itemCount > 0 ? productAmount / itemCount : 0;
          
          // Add calculated prices to each item
          const itemsWithPrices = order.items.map(item => {
            const quantity = item.quantity || 1;
            return {
              ...item,
              price: perUnitPrice,
              total: perUnitPrice * quantity
            };
          });
          
          return {
            ...order,
            items: itemsWithPrices,
            deliveryCharge: DELIVERY_CHARGE,
            productAmount: productAmount
          };
        });
        
        setOrders(ordersWithCalculatedPrices);
      } else {
        toast.error('Error fetching orders');
      }
    } catch (error) {
      toast.error('An unexpected error occurred while fetching orders');
      console.error('Fetch all orders error:', error);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(`${url}/api/order/status`, {
        orderId,
        status: event.target.value,
      });
      if (response.data.success) {
        await fetchAllOrders(searchTerm);
        toast.success('Order status updated successfully');
      } else {
        toast.error('Failed to update order status');
      }
    } catch (error) {
      toast.error('An unexpected error occurred while updating order status');
      console.error('Status update error:', error);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchAllOrders(searchTerm);
  };

  // Function to handle order selection for details view
  const handleOrderSelect = (order) => {
    setSelectedOrder(order === selectedOrder ? null : order);
  };

  // Function to get current formatted date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    return {
      date: now.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }),
      time: now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit'
      })
    };
  };

  // Function to add company header to PDF
  const addCompanyHeaderToPDF = (doc) => {
    // Get current date and time
    const { date, time } = getCurrentDateTime();
    
    // Company header details
    doc.setFontSize(20);
    doc.setTextColor(200, 50, 50); // Reddish color for "Sivaprakasam Sarees" text
    doc.text('Sivaprakasam Sarees', 65, 15);
    
    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50); // Dark gray for address
    doc.text('Mfrs. of Mill Printed Sarees', 75, 22);
    doc.text('31, Brinda Street, ERODE - 638 001, TN.', 65, 29);
    
    // Add date and time on the right side
    doc.setFontSize(10);
    doc.text(`Date: ${date}`, 150, 22);
    doc.text(`Time: ${time}`, 150, 29);
    
    // Add a horizontal line below the header
    doc.setDrawColor(200, 50, 50); // Red line
    doc.setLineWidth(0.5);
    doc.line(14, 33, 196, 33);
    
    // Reset text color for the rest of the document
    doc.setTextColor(0, 0, 0);
  };

  // Function to add amount summary to PDF
  const addAmountSummaryToPDF = (doc, startY) => {
    if (!orders || orders.length === 0) return startY;
    
    // Calculate stats
    const amounts = orders.map(order => parseFloat(order.amount) || 0);
    const total = amounts.reduce((sum, amount) => sum + amount, 0);
    const average = total / orders.length;
    const highest = Math.max(...amounts);
    const lowest = Math.min(...amounts);
    
    // Group by status
    const statusGroups = {};
    orders.forEach(order => {
      const status = order.status || 'Unknown';
      if (!statusGroups[status]) {
        statusGroups[status] = {
          totalAmount: 0,
          count: 0
        };
      }
      statusGroups[status].totalAmount += parseFloat(order.amount) || 0;
      statusGroups[status].count += 1;
    });
    
    // Add summary title
    doc.setFontSize(14);
    doc.text('Order Amount Summary', 14, startY + 10);
    startY += 15;
    
    // Add summary data
    doc.setFontSize(10);
    doc.text(`Total Orders: ${orders.length}`, 14, startY + 5);
    doc.text(`Total Amount: ₹${total.toFixed(2)}`, 14, startY + 12);
    doc.text(`Average Order Value: ₹${average.toFixed(2)}`, 14, startY + 19);
    doc.text(`Highest Order: ₹${highest.toFixed(2)}`, 14, startY + 26);
    doc.text(`Lowest Order: ₹${lowest.toFixed(2)}`, 14, startY + 33);
    
    // Add status breakdown
    startY += 45;
    doc.setFontSize(12);
    doc.text('Status Breakdown:', 14, startY);
    startY += 7;
    
    doc.setFontSize(10);
    Object.entries(statusGroups).forEach(([status, data], index) => {
      doc.text(`${status}: ${data.count} orders - ₹${data.totalAmount.toFixed(2)}`, 14, startY + (index * 7));
    });
    
    return startY + (Object.keys(statusGroups).length * 7) + 10;
  };

  const generatePDF = () => {
    try {
      // Dynamic import for jsPDF and autotable
      import('jspdf').then(({ default: jsPDF }) => {
        import('jspdf-autotable').then(({ default: autoTable }) => {
          const doc = new jsPDF();
          
          // Add company header to PDF with date and time
          addCompanyHeaderToPDF(doc);
          
          // Add title to the document - positioned below the header
          doc.setFontSize(16);
          doc.text('Order Report', 14, 45);
          
          // Create table structure
          const tableColumn = ["Order ID", "Customer", "Items", "Price", "Date", "Status"];
          const tableRows = [];
          
          // Add data to the table
          orders.forEach(order => {
            const itemsList = order.items.map(item => `${item.name} x ${item.quantity}`).join(', ');
            const customerName = `${order.address?.firstname || ''} ${order.address?.lastname || ''}`.trim() || 'N/A';
            
            const orderData = [
              order._id || '',
              customerName,
              itemsList,
              order.amount ? `₹${order.amount}` : '',
              order.formattedDate || '',
              order.status || ''
            ];
            
            tableRows.push(orderData);
          });
          
          // Use autoTable directly - start table below the header
          autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 50, // Positioned below the header and title
            styles: { fontSize: 8, cellPadding: 3 },
            headStyles: { fillColor: [41, 128, 185], textColor: 255 },
            alternateRowStyles: { fillColor: [245, 245, 245] }
          });
          
          // Get the final Y position after the table
          const finalY = doc.lastAutoTable.finalY || 200;
          
          // Add amount summary after the table
          addAmountSummaryToPDF(doc, finalY);
          
          // Save the PDF
          doc.save('sivaprakasam_order_report.pdf');
          toast.success('PDF generated successfully');
        });
      }).catch(error => {
        console.error('Error loading PDF modules:', error);
        toast.error('Failed to load PDF generation modules');
      });
    } catch (error) {
      console.error('PDF generation error:', error);
      toast.error('Failed to generate PDF');
    }
  };

  // Function to generate a PDF for a single order
  const generateOrderDetailsPDF = (order) => {
    try {
      import('jspdf').then(({ default: jsPDF }) => {
        import('jspdf-autotable').then(({ default: autoTable }) => {
          const doc = new jsPDF();
          
          // Add company header to PDF with date and time
          addCompanyHeaderToPDF(doc);
          
          // Add title to the document - positioned below the header
          doc.setFontSize(16);
          doc.text('Order Details', 14, 45);
          
          // Customer Information
          doc.setFontSize(14);
          doc.text('Customer Information', 14, 55);
          
          doc.setFontSize(10);
          const customerName = `${order.address?.firstname || ''} ${order.address?.lastname || ''}`.trim() || 'N/A';
          doc.text(`Name: ${customerName}`, 14, 62);
          doc.text(`Phone: ${order.address?.phone || 'N/A'}`, 14, 69);
          
          const addressText = `Address: ${[
            order.address?.street,
            order.address?.city,
            order.address?.state,
            order.address?.country,
            order.address?.zipcode
          ].filter(Boolean).join(', ') || 'N/A'}`;
          
          doc.text(addressText, 14, 76, { maxWidth: 180 });
          
          // Order Information
          doc.setFontSize(14);
          doc.text('Order Information', 14, 90);
          
          doc.setFontSize(10);
          doc.text(`Order ID: ${order._id || 'N/A'}`, 14, 97);
          doc.text(`Date: ${order.formattedDate || 'N/A'}`, 14, 104);
          doc.text(`Status: ${order.status || 'N/A'}`, 14, 111);
          doc.text(`Total Amount: ₹${order.amount || '0.00'}`, 14, 118);
          doc.text(`Delivery Charge: ₹${DELIVERY_CHARGE.toFixed(2)}`, 14, 125);
          
          // Order Items
          doc.setFontSize(14);
          doc.text('Products', 14, 137);
          
          // Create table structure for items
          const tableColumn = ["Product", "Quantity", "Price", "Total"];
          const tableRows = [];
          
          // Add data to the table
          order.items.forEach(item => {
            const price = item.price || 0;
            const total = price * (item.quantity || 1);
            
            const itemData = [
              item.name || 'N/A',
              item.quantity || 1,
              `₹${price.toFixed(2)}`,
              `₹${total.toFixed(2)}`
            ];
            
            tableRows.push(itemData);
          });
          
          // Use autoTable for items - start table below the previous content
          autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 142, // Positioned below the previous content
            styles: { fontSize: 8, cellPadding: 3 },
            headStyles: { fillColor: [41, 128, 185], textColor: 255 },
            alternateRowStyles: { fillColor: [245, 245, 245] }
          });
          
          // Save the PDF
          doc.save(`order_details_${order._id}.pdf`);
          toast.success('Order details PDF generated successfully');
        });
      }).catch(error => {
        console.error('Error loading PDF modules:', error);
        toast.error('Failed to load PDF generation modules');
      });
    } catch (error) {
      console.error('Order details PDF generation error:', error);
      toast.error('Failed to generate PDF');
    }
  };

  const toggleVisualization = () => {
    setIsVisualizationVisible(!isVisualizationVisible);
  };

  useEffect(() => {
    fetchAllOrders(searchTerm);
  }, [url]);

  return (
    <section className="p-4 sm:p-10 box-border w-full">
      <h4 className="bold-22 uppercase">Order Page</h4>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mt-6">
        <SearchAndExport
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearchSubmit={handleSearchSubmit}
          onExport={generatePDF}
          data={orders}
        />
        
        <button 
          onClick={toggleVisualization}
          className="bg-blue-500 text-white rounded-md px-3 py-1 text-sm"
        >
          {isVisualizationVisible ? 'Hide Analysis' : 'Show Analysis'}
        </button>
      </div>
      
      {isVisualizationVisible && (
        <OrderAmountVisualization orders={orders} />
      )}
      
      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Order Details</h3>
                <button 
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  &times;
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Customer Information</h4>
                  {/* Get customer name safely */}
                  {(() => {
                    const customerName = `${selectedOrder.address?.firstname || ''} ${selectedOrder.address?.lastname || ''}`.trim();
                    return (
                      <p><span className="font-medium">Name:</span> {customerName || selectedOrder.user?.name || 'Customer'}</p>
                    );
                  })()}
                  <p><span className="font-medium">Phone:</span> {selectedOrder.address?.phone || 'N/A'}</p>
                  <p><span className="font-medium">Address:</span> {[
                    selectedOrder.address?.street,
                    selectedOrder.address?.city,
                    selectedOrder.address?.state,
                    selectedOrder.address?.country,
                    selectedOrder.address?.zipcode
                  ].filter(Boolean).join(', ') || 'N/A'}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Order Information</h4>
                  <p><span className="font-medium">Order ID:</span> {selectedOrder._id || 'N/A'}</p>
                  <p><span className="font-medium">Date:</span> {selectedOrder.formattedDate || 'N/A'}</p>
                  <p><span className="font-medium">Status:</span> {selectedOrder.status || 'N/A'}</p>
                  <p><span className="font-medium">Total Amount:</span> ₹{selectedOrder.amount || '0.00'}</p>
                  {/* Shipping charge with highlighted color */}
                  <p><span className="font-medium">Delivery Charge:</span> <span className="text-green-600 font-medium">₹{DELIVERY_CHARGE.toFixed(2)}</span></p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Products</h4>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2 text-left">Product</th>
                      <th className="border p-2 text-left">Quantity</th>
                      <th className="border p-2 text-left">Price</th>
                      <th className="border p-2 text-left">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder.items.map((item, index) => {
                      const price = item.price || 0;
                      const total = price * (item.quantity || 1);
                      
                      return (
                        <tr key={index} className="border-b">
                          <td className="border p-2">{item.name || 'Product'}</td>
                          <td className="border p-2">{item.quantity || 1}</td>
                          <td className="border p-2">₹{price.toFixed(2)}</td>
                          <td className="border p-2">₹{total.toFixed(2)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-50">
                      <td colSpan="3" className="border p-2 text-right font-medium">Delivery Charge:</td>
                      <td className="border p-2 text-green-600 font-medium">₹{DELIVERY_CHARGE.toFixed(2)}</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td colSpan="3" className="border p-2 text-right font-medium">Total:</td>
                      <td className="border p-2 font-bold">₹{selectedOrder.amount || '0.00'}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => setSelectedOrder(null)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2"
                >
                  Close
                </button>
                <button 
                  onClick={() => generateOrderDetailsPDF(selectedOrder)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
                >
                  <FaDownload className="mr-2" /> Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="overflow-auto mt-8">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-900/20 text-gray-30 regular-14 xs:regular-16 text-start py-12">
              <th className="p-1 text-left hidden sm:table-cell">Package</th>
              <th className="p-1 text-left">Order</th>
              <th className="p-1 text-left">Items</th>
              <th className="p-1 text-left">Price</th>
              <th className="p-1 text-left">Date</th>
              <th className="p-1 text-left">Status</th>
              <th className="p-1 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i} className="border-b border-slate-900/20 text-gray-50 p-6 medium-14 text-left">
                <td className="p-1 hidden sm:table-cell">
                  <FaBox className="text-2xl text-secondary" />
                </td>
                <td className="p-1">
                  <div className="p-2">
                    <p>
                      {order.items.map((item, index) => (
                        <span key={index}>
                          {item.name} x {item.quantity}
                          {index !== order.items.length - 1 && ', '}
                        </span>
                      ))}
                    </p>
                  </div>
                  <hr className="w-1/2" />
                  <div>
                    {/* Get customer name safely for main listing */}
                    {(() => {
                      const customerName = `${order.address?.firstname || ''} ${order.address?.lastname || ''}`.trim();
                      return (
                        <h5 className="medium-15">{customerName || order.user?.name || 'Customer'}</h5>
                      );
                    })()}
                    <div>
                      <p>{order.address?.street || 'N/A'},</p>
                      <p>
                        {[
                          order.address?.city,
                          order.address?.state,
                          order.address?.country,
                          order.address?.zipcode
                        ].filter(Boolean).join(', ') || 'N/A'}
                      </p>
                    </div>
                    <p>{order.address?.phone || 'N/A'}</p>
                  </div>
                </td>
                <td className="p-1">{order.items.length}</td>
                <td className="p-1">₹{order.amount || '0.00'}</td>
                <td className="p-1">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1 text-gray-500" />
                    {order.formattedDate}
                  </div>
                </td>
                <td className="p-1">
                  <select
                    onChange={(event) => statusHandler(event, order._id)}
                    value={order.status}
                    className="bg-primary ring-1 ring-secondary text-sm max-w-20 xl:max-w-28"
                  >
                    <option value="Product Loading">Product Loading</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td className="p-1">
                  <button
                    onClick={() => handleOrderSelect(order)}
                    className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600 transition-colors"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orders;