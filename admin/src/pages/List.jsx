// // import React,{useEffect, useState} from 'react'
// // import axios from 'axios'
// // import {toast} from 'react-toastify'
// // import {TbTrash} from 'react-icons/tb'

// // const List = ({url}) => {
// //   const [list, setList] = useState([])

// //   const fetchList = async () => {
// //     const response = await axios.get(`${url}/api/product/list`)
// //     console.log(response.data)
// //     if(response.data.success){
// //       setList(response.data.data)
// //     }
// //     else{
// //       toast.error("Error")
// //     }
// //   }

// //   const removeProduct = async([productId])=>{
// //     const response = await axios.post(`${url}/api/product/remove`,
// //       {id:productId})
// //       await fetchList()
// //       if(response.data.success){
// //         toast.success(response.data.message)
// //       }
// //       else{
// //         toast.error("Error")
// //       }
// //   }
// //   useEffect(()=>{
// //     fetchList()
// //   },[])

// //   return (
// //     <section className = 'p-4 sm:p-10 box-border w-full'>
// //       <h4 className  ='bold-22 uppercase'>Product List</h4>
// //       <div className ='overflow-auto mt-5'>
// //         <table className = 'w-full'>
// //           <thead>
// //             <tr className='border-b border-slate-900/20 text-grey-30 regular-14  xs:regular-16 text-start py-12'>
// //               <th className='p-1 text-left'>Products</th>
// //               <th className='p-1 text-left'>Title</th>
// //               <th className='p-1 text-left'>Price</th>
// //               <th className='p-1 text-left'>Remove</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {list.map((product)=>(
// //               <tr className = 'border-b border-r-slate-900/20 text-grey-50 p-6 medium-14 text-left'>
// //                 <td className='p-1'>
// //                   <img src= {`${url}/images/`+product.image} alt="productImg" height={38} width={38} className="rounded-lg ring-1 rind-slate-900/5 m-1"/>
// //                 </td>
// //                 <td className = 'p-1'>
// //                   <div className = 'line-clamp-3'>{product.name}</div>
// //                 </td>
// //                 <td className='p-1'> ${product.price}</td>
// //                 <td className= 'p-1'>
// //                   <div className ='bold-22'> 
// //                     <TbTrash onClick={()=>removeProduct(product._id)}/>
// //                   </div>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </section>
// //   )
// // }

// // export default List


// /*import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { TbTrash } from 'react-icons/tb'

// const List = ({ url }) => {
//   const [list, setList] = useState([])

//   const fetchList = async () => {
//     try {
//       const response = await axios.get(`${url}/api/product/list`)
//       if (response.data.success) {
//         setList(response.data.data)
//       } else {
//         toast.error("Error fetching products")
//       }
//     } catch (error) {
//       toast.error("Something went wrong!")
//     }
//   }

//   const removeProduct = async (productId) => {
//     try {
//       const response = await axios.post(`${url}/api/product/remove`, { id: productId })
//       if (response.data.success) {
//         toast.success(response.data.message)
//         fetchList() // Refresh the list after removing a product
//       } else {
//         toast.error("Error removing product")
//       }
//     } catch (error) {
//       toast.error("Error removing product")
//     }
//   }

//   useEffect(() => {
//     fetchList()
//   }, [])

//   return (
//     <section className='p-4 sm:p-10 box-border w-full'>
//       <h4 className='bold-22 uppercase'>Product List</h4>
//       <div className='overflow-auto mt-5'>
//         <table className='w-full'>
//           <thead>
//             <tr className='border-b border-slate-900/20 text-grey-30 regular-14  xs:regular-16 text-start py-12'>
//               <th className='p-1 text-left'>Products</th>
//               <th className='p-1 text-left'>Title</th>
//               <th className='p-1 text-left'>Price</th>
//               <th className='p-1 text-left'>Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {list.map((product) => (
//               <tr className='border-b border-r-slate-900/20 text-grey-50 p-6 medium-14 text-left' key={product._id}>
//                 <td className='p-1'>
//                   <img
//                     src={`${url}/images/` + product.image}
//                     alt="productImg"
//                     height={38}
//                     width={38}
//                     className="rounded-lg ring-1 rind-slate-900/5 m-1"
//                   />
//                 </td>
//                 <td className='p-1'>
//                   <div className='line-clamp-3'>{product.name}</div>
//                 </td>
//                 <td className='p-1'>${product.price}</td>
//                 <td className='p-1'>
//                   <div className='bold-22'>
//                     <TbTrash onClick={() => removeProduct(product._id)} />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   )
// }

// export default List*/
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { TbTrash } from 'react-icons/tb'

// const List = ({ url }) => {
//   const [list, setList] = useState([])

//   const fetchList = async () => {
//     try {
//       const response = await axios.get(`${url}/api/product/list`)
//       console.log("Fetched response:", response.data)

//       // Temporary fallback in case response.data.success is undefined
//       const success = response.data.success ?? true
//       const data = response.data.data ?? []

//       if (success) {
//         setList(data)
//       } else {
//         toast.error("Error fetching products")
//       }
//     } catch (error) {
//       console.error("Fetch error:", error)
//       toast.error("Something went wrong!")
//     }
//   }

//   const removeProduct = async (productId) => {
//     try {
//       const response = await axios.post(`${url}/api/product/remove`, { id: productId })
//       console.log("Remove response:", response.data)
//       if (response.data.success) {
//         toast.success(response.data.message)
//         fetchList()
//       } else {
//         toast.error("Error removing product")
//       }
//     } catch (error) {
//       console.error("Remove error:", error)
//       toast.error("Error removing product")
//     }
//   }

//   useEffect(() => {
//     fetchList()
//   }, [])

//   return (
//     <section className='p-4 sm:p-10 box-border w-full'>
//       <h4 className='bold-22 uppercase'>Product List</h4>
//       <div className='overflow-auto mt-5'>
//         <table className='w-full'>
//           <thead>
//             <tr className='border-b border-slate-900/20 text-grey-30 regular-14  xs:regular-16 text-start py-12'>
//               <th className='p-1 text-left'>Products</th>
//               <th className='p-1 text-left'>Title</th>
//               <th className='p-1 text-left'>Price</th>
//               <th className='p-1 text-left'>Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {list.map((product) => (
//               <tr className='border-b border-r-slate-900/20 text-grey-50 p-6 medium-14 text-left' key={product._id}>
//                 <td className='p-1'>
//                   <img
//                     src={`${url}/images/` + product.image}
//                     alt="productImg"
//                     height={38}
//                     width={38}
//                     className="rounded-lg ring-1 rind-slate-900/5 m-1"
//                   />
//                 </td>
//                 <td className='p-1'>
//                   <div className='line-clamp-3'>{product.name}</div>
//                 </td>
//                 <td className='p-1'>₹{product.price}</td>
//                 <td className='p-1'>
//                   <div className='bold-22'>
//                     <TbTrash onClick={() => removeProduct(product._id)} />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   )
// }

// export default List

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { TbTrash } from 'react-icons/tb'

const List = ({ url }) => {
  const [list, setList] = useState([])
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const fetchList = async () => {
    try {
      // Adding a cache-busting parameter to prevent browser caching
      const response = await axios.get(`${url}/api/product/list?_t=${Date.now()}`)
      console.log("Fetched response:", response.data)

      // Temporary fallback in case response.data.success is undefined
      const success = response.data.success ?? true
      const data = response.data.data ?? []

      if (success) {
        setList(data)
      } else {
        toast.error("Error fetching products")
      }
    } catch (error) {
      console.error("Fetch error:", error)
      toast.error("Something went wrong!")
    }
  }

  const removeProduct = async (productId) => {
    try {
      const response = await axios.post(`${url}/api/product/remove`, { id: productId })
      console.log("Remove response:", response.data)
      if (response.data.success) {
        toast.success(response.data.message)
        // Trigger a refresh after removing a product
        setRefreshTrigger(prev => prev + 1)
      } else {
        toast.error("Error removing product")
      }
    } catch (error) {
      console.error("Remove error:", error)
      toast.error("Error removing product")
    }
  }

  // Refresh data every 10 seconds and when refreshTrigger changes
  useEffect(() => {
    fetchList()
    
    // Set up polling for real-time updates
    const intervalId = setInterval(() => {
      fetchList()
    }, 10000) // 10 seconds
    
    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId)
  }, [refreshTrigger])

  return (
    <section className='p-4 sm:p-10 box-border w-full'>
      <h4 className='bold-22 uppercase'>Product List</h4>
      <div className='overflow-auto mt-5'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-slate-900/20 text-grey-30 regular-14  xs:regular-16 text-start py-12'>
              <th className='p-1 text-left'>Products</th>
              <th className='p-1 text-left'>Title</th>
              <th className='p-1 text-left'>Price</th>
              <th className='p-1 text-left'>Stock</th>
              <th className='p-1 text-left'>Remove</th>
            </tr>
          </thead>
          <tbody>
            {list.map((product) => (
              <tr className='border-b border-r-slate-900/20 text-grey-50 p-6 medium-14 text-left' key={product._id}>
                <td className='p-1'>
                  <img
                    src={`${url}/images/` + product.image}
                    alt="productImg"
                    height={38}
                    width={38}
                    className="rounded-lg ring-1 rind-slate-900/5 m-1"
                  />
                </td>
                <td className='p-1'>
                  <div className='line-clamp-3'>{product.name}</div>
                </td>
                <td className='p-1'>₹{product.price}</td>
                <td className='p-1'>
                  <span className={`${product.stock <= 5 ? 'text-red-500 font-bold' : ''}`}>
                    {product.stock}
                  </span>
                </td>
                <td className='p-1'>
                  <div className='bold-22'>
                    <TbTrash onClick={() => removeProduct(product._id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default List