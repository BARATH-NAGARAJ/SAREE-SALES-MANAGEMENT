// // // import React from 'react';
// // // import { useState } from 'react';

// // // const SearchAndExport = ({ searchTerm, setSearchTerm, onSearchSubmit, data }) => {
// // //   const [isExporting, setIsExporting] = useState(false);

// // //   const handleExportToPDF = async () => {
// // //     setIsExporting(true);
    
// // //     try {
// // //       // Dynamically import jsPDF and jspdf-autotable
// // //       const jsPDFModule = await import('jspdf');
// // //       const jsPDF = jsPDFModule.default;
// // //       await import('jspdf-autotable');
      
// // //       // Create a new PDF document
// // //       const doc = new jsPDF();
      
// // //       // Add a title
// // //       doc.setFontSize(16);
// // //       doc.text("Data Export", 14, 15);
      
// // //       // Handle empty data case
// // //       if (!data || data.length === 0) {
// // //         doc.setFontSize(12);
// // //         doc.text("No data available for export", 14, 30);
// // //         doc.save("empty_data_export.pdf");
// // //         return;
// // //       }
      
// // //       // Define table columns and rows
// // //       const columns = Object.keys(data[0]).map(key => ({ 
// // //         header: key.charAt(0).toUpperCase() + key.slice(1),
// // //         dataKey: key 
// // //       }));
      
// // //       // Generate the table
// // //       doc.autoTable({
// // //         head: [columns.map(col => col.header)],
// // //         body: data.map(item => columns.map(col => item[col.dataKey])),
// // //         startY: 25,
// // //         styles: { fontSize: 10, cellPadding: 2 },
// // //         headStyles: { fillColor: [66, 139, 202] }
// // //       });
      
// // //       // Add metadata
// // //       doc.setFontSize(10);
// // //       const dateTime = new Date().toLocaleString();
// // //       doc.text(`Generated: ${dateTime}`, 14, doc.lastAutoTable.finalY + 10);
      
// // //       // Save the PDF
// // //       doc.save("data_export.pdf");
// // //     } catch (error) {
// // //       console.error("PDF generation failed:", error);
// // //       alert("Failed to generate PDF: " + error.message);
// // //     } finally {
// // //       setIsExporting(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
// // //       <form onSubmit={onSearchSubmit} className="flex items-center w-full sm:w-auto">
// // //         <input
// // //           type="text"
// // //           placeholder="Search by name or item"
// // //           value={searchTerm}
// // //           onChange={(e) => setSearchTerm(e.target.value)}
// // //           className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full"
// // //         />
// // //         <button type="submit" className="bg-blue-500 text-white rounded-md px-3 py-1 ml-2 text-sm">
// // //           Search
// // //         </button>
// // //       </form>
// // //       <button 
// // //         onClick={handleExportToPDF} 
// // //         disabled={isExporting || !data?.length}
// // //         className={`${
// // //           isExporting || !data?.length ? 'bg-gray-400' : 'bg-green-500'
// // //         } text-white rounded-md px-3 py-1 text-sm flex items-center w-full sm:w-auto justify-center`}
// // //       >
// // //         {isExporting ? (
// // //           <>Generating PDF...</>
// // //         ) : (
// // //           <>
// // //             <svg 
// // //               className="w-4 h-4 mr-2" 
// // //               fill="currentColor" 
// // //               viewBox="0 0 20 20" 
// // //               xmlns="http://www.w3.org/2000/svg"
// // //             >
// // //               <path d="M10 3.5a1.5 1.5 0 013 0v3.793l1.146-1.147a1.5 1.5 0 012.122 2.121l-3.5 3.5a1.5 1.5 0 01-2.122 0l-3.5-3.5a1.5 1.5 0 012.122-2.121L10 7.293V3.5z" />
// // //               <path d="M10 12.5a1.5 1.5 0 00-1.5 1.5v2a2.5 2.5 0 005 0v-2a1.5 1.5 0 00-1.5-1.5h-2z" />
// // //             </svg>
// // //             Export to PDF
// // //           </>
// // //         )}
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default SearchAndExport;
// // import React, { useState } from 'react';

// // const SearchAndExport = ({ searchTerm, setSearchTerm, onSearchSubmit, onExport, data = [] }) => {
// //   const [isExporting, setIsExporting] = useState(false);

// //   const handleExportToPDF = async () => {
// //     if (onExport && typeof onExport === 'function') {
// //       // If a custom export function is provided, use it
// //       onExport();
// //       return;
// //     }
    
// //     // Otherwise, use the default export implementation
// //     setIsExporting(true);
    
// //     try {
// //       // Dynamically import jsPDF and jspdf-autotable
// //       const jsPDFModule = await import('jspdf');
// //       const jsPDF = jsPDFModule.default;
// //       await import('jspdf-autotable');
      
// //       // Create a new PDF document
// //       const doc = new jsPDF();
      
// //       // Add a title
// //       doc.setFontSize(16);
// //       doc.text("Data Export", 14, 15);
      
// //       // Handle empty data case
// //       if (!data || data.length === 0) {
// //         doc.setFontSize(12);
// //         doc.text("No data available for export", 14, 30);
// //         doc.save("empty_data_export.pdf");
// //         return;
// //       }
      
// //       // Define table columns and rows
// //       const columns = Object.keys(data[0]).map(key => ({ 
// //         header: key.charAt(0).toUpperCase() + key.slice(1),
// //         dataKey: key 
// //       }));
      
// //       // Generate the table
// //       doc.autoTable({
// //         head: [columns.map(col => col.header)],
// //         body: data.map(item => columns.map(col => item[col.dataKey])),
// //         startY: 25,
// //         styles: { fontSize: 10, cellPadding: 2 },
// //         headStyles: { fillColor: [66, 139, 202] }
// //       });
      
// //       // Add metadata
// //       doc.setFontSize(10);
// //       const dateTime = new Date().toLocaleString();
// //       doc.text(`Generated: ${dateTime}`, 14, doc.lastAutoTable.finalY + 10);
      
// //       // Save the PDF
// //       doc.save("data_export.pdf");
// //     } catch (error) {
// //       console.error("PDF generation failed:", error);
// //       alert("Failed to generate PDF: " + error.message);
// //     } finally {
// //       setIsExporting(false);
// //     }
// //   };

// //   return (
// //     <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
// //       <form onSubmit={onSearchSubmit} className="flex items-center w-full sm:w-auto">
// //         <input
// //           type="text"
// //           placeholder="Search by name or item"
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full"
// //         />
// //         <button type="submit" className="bg-blue-500 text-white rounded-md px-3 py-1 ml-2 text-sm">
// //           Search
// //         </button>
// //       </form>
// //       <button 
// //         onClick={handleExportToPDF} 
// //         disabled={isExporting || (!data?.length && !onExport)}
// //         className={`${
// //           isExporting || (!data?.length && !onExport) ? 'bg-gray-400' : 'bg-green-500'
// //         } text-white rounded-md px-3 py-1 text-sm flex items-center w-full sm:w-auto justify-center`}
// //       >
// //         {isExporting ? (
// //           <>Generating PDF...</>
// //         ) : (
// //           <>
// //             <svg 
// //               className="w-4 h-4 mr-2" 
// //               fill="currentColor" 
// //               viewBox="0 0 20 20" 
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path d="M10 3.5a1.5 1.5 0 013 0v3.793l1.146-1.147a1.5 1.5 0 012.122 2.121l-3.5 3.5a1.5 1.5 0 01-2.122 0l-3.5-3.5a1.5 1.5 0 012.122-2.121L10 7.293V3.5z" />
// //               <path d="M10 12.5a1.5 1.5 0 00-1.5 1.5v2a2.5 2.5 0 005 0v-2a1.5 1.5 0 00-1.5-1.5h-2z" />
// //             </svg>
// //             Export to PDF
// //           </>
// //         )}
// //       </button>
// //     </div>
// //   );
// // };

// // export default SearchAndExport;
// import React, { useState } from 'react';

// const SearchAndExport = ({ searchTerm, setSearchTerm, onSearchSubmit, onExport, data = [] }) => {
//   const [isExporting, setIsExporting] = useState(false);

//   const handleExportToPDF = async () => {
//     if (onExport && typeof onExport === 'function') {
//       // If a custom export function is provided, use it
//       onExport();
//       return;
//     }
    
//     // Otherwise, use the default export implementation
//     setIsExporting(true);
    
//     try {
//       // Dynamically import jsPDF and jspdf-autotable
//       const jsPDFModule = await import('jspdf');
//       const jsPDF = jsPDFModule.default;
//       await import('jspdf-autotable');
      
//       // Create a new PDF document
//       const doc = new jsPDF();
      
//       // Add a title
//       doc.setFontSize(16);
//       doc.text(searchTerm ? `Data Export - Filter: "${searchTerm}"` : "Data Export", 14, 15);
      
//       // Handle empty data case
//       if (!data || data.length === 0) {
//         doc.setFontSize(12);
//         doc.text("No data available for export", 14, 30);
        
//         // Generate filename with date and time
//         const now = new Date();
//         const dateStr = now.toISOString().slice(0, 10); // YYYY-MM-DD
//         const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, '-'); // HH-MM-SS
//         doc.save(`empty_data_export_${dateStr}_${timeStr}.pdf`);
//         return;
//       }
      
//       // Define table columns and rows
//       const columns = Object.keys(data[0]).map(key => ({ 
//         header: key.charAt(0).toUpperCase() + key.slice(1),
//         dataKey: key 
//       }));
      
//       // Generate the table
//       doc.autoTable({
//         head: [columns.map(col => col.header)],
//         body: data.map(item => columns.map(col => item[col.dataKey])),
//         startY: 25,
//         styles: { fontSize: 10, cellPadding: 2 },
//         headStyles: { fillColor: [66, 139, 202] }
//       });
      
//       // Add metadata
//       doc.setFontSize(10);
//       const dateTime = new Date().toLocaleString();
//       doc.text(`Generated: ${dateTime}`, 14, doc.lastAutoTable.finalY + 10);
      
//       // Generate filename with date and time
//       const now = new Date();
//       const dateStr = now.toISOString().slice(0, 10); // YYYY-MM-DD
//       const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, '-'); // HH-MM-SS
      
//       const filenameSuffix = searchTerm ? `_${searchTerm.replace(/[^a-z0-9]/gi, '_')}` : '';
//       const filename = `data_export${filenameSuffix}_${dateStr}_${timeStr}.pdf`;
      
//       // Save the PDF
//       doc.save(filename);
//     } catch (error) {
//       console.error("PDF generation failed:", error);
//       alert("Failed to generate PDF: " + error.message);
//     } finally {
//       setIsExporting(false);
//     }
//   };

//   return (
//     <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
//       <form onSubmit={onSearchSubmit} className="flex items-center w-full sm:w-auto">
//         <input
//           type="text"
//           placeholder="Search by name or item"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full"
//         />
//         <button type="submit" className="bg-blue-500 text-white rounded-md px-3 py-1 ml-2 text-sm">
//           Search
//         </button>
//       </form>
//       <button 
//         onClick={handleExportToPDF} 
//         disabled={isExporting || (!data?.length && !onExport)}
//         className={`${
//           isExporting || (!data?.length && !onExport) ? 'bg-gray-400' : 'bg-green-500'
//         } text-white rounded-md px-3 py-1 text-sm flex items-center w-full sm:w-auto justify-center`}
//       >
//         {isExporting ? (
//           <>Generating PDF...</>
//         ) : (
//           <>
//             <svg 
//               className="w-4 h-4 mr-2" 
//               fill="currentColor" 
//               viewBox="0 0 20 20" 
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M10 3.5a1.5 1.5 0 013 0v3.793l1.146-1.147a1.5 1.5 0 012.122 2.121l-3.5 3.5a1.5 1.5 0 01-2.122 0l-3.5-3.5a1.5 1.5 0 012.122-2.121L10 7.293V3.5z" />
//               <path d="M10 12.5a1.5 1.5 0 00-1.5 1.5v2a2.5 2.5 0 005 0v-2a1.5 1.5 0 00-1.5-1.5h-2z" />
//             </svg>
//             Export to PDF
//           </>
//         )}
//       </button>
//     </div>
//   );
// };

// export default SearchAndExport;

import React, { useState } from 'react';

const SearchAndExport = ({ searchTerm, setSearchTerm, onSearchSubmit, onExport, data = [] }) => {
  const [isExporting, setIsExporting] = useState(false);

  return (
    <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
      <form onSubmit={onSearchSubmit} className="flex items-center w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search by name or item"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 text-sm w-full"
        />
        <button type="submit" className="bg-blue-500 text-white rounded-md px-3 py-1 ml-2 text-sm">
          Search
        </button>
      </form>
      <button 
        onClick={onExport} 
        disabled={isExporting || (!data?.length && !onExport)}
        className={`${
          isExporting || (!data?.length && !onExport) ? 'bg-gray-400' : 'bg-green-500'
        } text-white rounded-md px-3 py-1 text-sm flex items-center w-full sm:w-auto justify-center`}
      >
        {isExporting ? (
          <>Generating PDF...</>
        ) : (
          <>
            <svg 
              className="w-4 h-4 mr-2" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 3.5a1.5 1.5 0 013 0v3.793l1.146-1.147a1.5 1.5 0 012.122 2.121l-3.5 3.5a1.5 1.5 0 01-2.122 0l-3.5-3.5a1.5 1.5 0 012.122-2.121L10 7.293V3.5z" />
              <path d="M10 12.5a1.5 1.5 0 00-1.5 1.5v2a2.5 2.5 0 005 0v-2a1.5 1.5 0 00-1.5-1.5h-2z" />
            </svg>
            Export to PDF
          </>
        )}
      </button>
    </div>
  );
};

export default SearchAndExport;