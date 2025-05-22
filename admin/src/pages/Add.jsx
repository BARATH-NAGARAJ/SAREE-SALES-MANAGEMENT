// // import React, { useState, useEffect } from "react";
// // import upload_area from "../assets/upload_area1.svg";
// // import { FaPlus } from "react-icons/fa";
// // // import { Form } from "react-router-dom";
// // import axios from "axios";
// // import { toast } from 'react-toastify';


// // const Add = ({url}) => {
// //   // const url = "http://localhost:4000";
// //   const [image, setImage] = useState(false);
// //   const [data, setData] = useState({
// //     name: "",
// //     description: "",
// //     price: "",
// //     category: "Men"
// //   });

// //   const onChangeHandler = (event) => {
// //     const name = event.target.name;
// //     const value = event.target.value;
// //     setData((data) => ({ ...data, [name]: value }));
// //   };

// //   // useEffect(() => {
// //   //   console.log(data);
// //   // }, [data]);

// //   const onSubmitHandler = async (event) => {
// //     event.preventDefault();
// //     const formData = new FormData();
// //     formData.append("name", data.name);
// //     formData.append("description", data.description);
// //     formData.append("category", data.category);
// //     formData.append("price", Number(data.price));
// //     formData.append("image", image);
// //     const response = await axios.post(`${url}/api/product/add`, formData);
// //     if (response.data.success) {
// //       setData({
// //         name: "",
// //         description: "",
// //         price: "",
// //         category: "Men",
// //       });
// //       setImage(false)
// //       toast.success(response.data.message)
// //     } else {
// //       toast.error(response.data.message)
// //     }
// //   };

// //   return (
// //     <section className="p-4 sm:p-10 w-full bg-primary/20">
// //       <form onSubmit={onSubmitHandler} className="flex flex-col gap-y-5 max-w-[555px]">
// //         <h4 className="bold-22 pb-2 uppercase">Products Upload</h4>

// //         <div className="flex flex-col gap-y-2 max-w-24 h-24">
// //           <label htmlFor="image">
// //             <img src={image ? URL.createObjectURL(image) : upload_area} alt="" className="h-20" />
// //           </label>
// //           <input
// //             onChange={(e) => setImage(e.target.files[0])}
// //             type="file"
// //             id="image"
// //             hidden
// //             required
// //           />
// //         </div>

// //         <div className="flex flex-col gap-y-2">
// //           <p>Product Name</p>
// //           <input
// //             onChange={onChangeHandler}
// //             value={data.name}
// //             name="name"
// //             type="text"
// //             placeholder="Type here.."
// //             className="ring-1 ring-slate-900/10 py-1 px-3 outline-none"
// //           />
// //         </div>

// //         <div className="flex flex-col gap-y-2">
// //           <p>Product Description</p>
// //           <textarea
// //             onChange={onChangeHandler}
// //             value={data.description}
// //             name="description"
// //             placeholder="Write content here.."
// //             rows={6}
// //             required
// //             className="ring-1 ring-slate-900/10 py-1 px-3 outline-none resize-none"
// //           ></textarea>
// //         </div>

// //         <div className="flex items-center gap-x-6 text-gray-900/70 medium-15">
// //           <div className="flex flex-col gap-y-2">
// //             <p>Product Category</p>
// //             <select
// //               onChange={onChangeHandler}
// //               value={data.category}
// //               name="category"
// //               className="outline-none ring-1 ring-slate-900/10 pl-2"
// //             >
// //               <option value="Men">Men</option>
// //               <option value="Women">Women</option>
// //               <option value="Kids">Kids</option>
// //               <option value="Electronics">Electronics</option>
// //               <option value="Cosmetics">Cosmetics</option>
// //             </select>
// //           </div>

// //           <div className="flex flex-col gap-y-2">
// //             <p>Product Price</p>
// //             <input
// //               onChange={onChangeHandler}
// //               name="price"
// //               value={data.price}
// //               type="number"
// //               placeholder="Rs.20"
// //               className="ring-1 ring-slate-900/10 pl-2 outline-none"
// //               required
// //             />
// //           </div>
// //         </div>

// //         <button
// //           type="submit"
// //           className="btn-dark sm:w-5/12 flexCenter gap-x-2 !py-2 rounded"
// //         >
// //           <FaPlus />
// //           Add Product
// //         </button>
// //       </form>
// //     </section>
// //   );
// // };

// // export default Add;
// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import upload_area from "../assets/upload_area1.svg";
// import { FaPlus } from "react-icons/fa";
// import axios from "axios";
// import { toast } from 'react-toastify';

// const Add = ({ url }) => {
//   const navigate = useNavigate(); // Initialize useNavigate hook
//   const [image, setImage] = useState(false);
//   const [data, setData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "Silk"
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((data) => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("description", data.description);
//     formData.append("category", data.category);
//     formData.append("price", Number(data.price));
//     formData.append("image", image);

//     const response = await axios.post(`${url}/api/product/add`, formData);
//     if (response.data.success) {
//       setData({
//         name: "",
//         description: "",
//         price: "",
//         category: "Silk",
//       });
//       setImage(false);
//       toast.success(response.data.message);
//       navigate("/list"); // Redirect to List page after adding the product
//     } else {
//       toast.error(response.data.message);
//     }
//   };

//   return (
//     <section className="p-4 sm:p-10 w-full bg-primary/20">
//       <form onSubmit={onSubmitHandler} className="flex flex-col gap-y-5 max-w-[555px]">
//         <h4 className="bold-22 pb-2 uppercase">Products Upload</h4>

//         <div className="flex flex-col gap-y-2 max-w-24 h-24">
//           <label htmlFor="image">
//             <img src={image ? URL.createObjectURL(image) : upload_area} alt="" className="h-20" />
//           </label>
//           <input
//             onChange={(e) => setImage(e.target.files[0])}
//             type="file"
//             id="image"
//             hidden
//             required
//           />
//         </div>

//         <div className="flex flex-col gap-y-2">
//           <p>Product Name</p>
//           <input
//             onChange={onChangeHandler}
//             value={data.name}
//             name="name"
//             type="text"
//             placeholder="Type here.."
//             className="ring-1 ring-slate-900/10 py-1 px-3 outline-none"
//           />
//         </div>

//         <div className="flex flex-col gap-y-2">
//           <p>Product Description</p>
//           <textarea
//             onChange={onChangeHandler}
//             value={data.description}
//             name="description"
//             placeholder="Write content here.."
//             rows={6}
//             required
//             className="ring-1 ring-slate-900/10 py-1 px-3 outline-none resize-none"
//           ></textarea>
//         </div>

//         <div className="flex items-center gap-x-6 text-gray-900/70 medium-15">
//           <div className="flex flex-col gap-y-2">
//             <p>Product Category</p>
//             <select
//               onChange={onChangeHandler}
//               value={data.category}
//               name="category"
//               className="outline-none ring-1 ring-slate-900/10 pl-2"
//             >
//               <option value="Silk">Silk</option>
//               <option value="Cotton">Cotton</option>
//               <option value="Designer">Designer</option>
//               <option value="Traditional">Traditional</option>
//               <option value="Bridal">Bridal</option>
//             </select>
//           </div>

//           <div className="flex flex-col gap-y-2">
//             <p>Product Price</p>
//             <input
//               onChange={onChangeHandler}
//               name="price"
//               value={data.price}
//               type="number"
//               placeholder="₹1000"
//               className="ring-1 ring-slate-900/10 pl-2 outline-none"
//               required
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="btn-dark sm:w-5/12 flexCenter gap-x-2 !py-2 rounded"
//         >
//           <FaPlus />
//           Add Product
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Add;
// Modified Add.jsx Component for Admin
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import upload_area from "../assets/upload_area1.svg";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { toast } from 'react-toastify';

const Add = ({ url }) => {
  const navigate = useNavigate();
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Silk",
    stock: "" // Added stock field
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    formData.append("stock", Number(data.stock)); // Add stock to form data
    formData.append("image", image);

    const response = await axios.post(`${url}/api/product/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Silk",
        stock: "", // Reset stock field
      });
      setImage(false);
      toast.success(response.data.message);
      navigate("/list");
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <section className="p-4 sm:p-10 w-full bg-primary/20">
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-y-5 max-w-[555px]">
        <h4 className="bold-22 pb-2 uppercase">Products Upload</h4>

        <div className="flex flex-col gap-y-2 max-w-24 h-24">
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : upload_area} alt="" className="h-20" />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            name="name"
            type="text"
            placeholder="Type here.."
            className="ring-1 ring-slate-900/10 py-1 px-3 outline-none"
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            placeholder="Write content here.."
            rows={6}
            required
            className="ring-1 ring-slate-900/10 py-1 px-3 outline-none resize-none"
          ></textarea>
        </div>

        <div className="flex items-center gap-x-6 text-gray-900/70 medium-15">
          <div className="flex flex-col gap-y-2">
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
              className="outline-none ring-1 ring-slate-900/10 pl-2"
            >
              <option value="Silk">Silk</option>
              <option value="Cotton">Cotton</option>
              <option value="Designer">Designer</option>
              <option value="Traditional">Traditional</option>
              <option value="Bridal">Bridal</option>
            </select>
          </div>

          <div className="flex flex-col gap-y-2">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              name="price"
              value={data.price}
              type="number"
              placeholder="₹1000"
              className="ring-1 ring-slate-900/10 pl-2 outline-none"
              required
            />
          </div>
          
          {/* Add Stock Quantity Field */}
          <div className="flex flex-col gap-y-2">
            <p>Stock Quantity</p>
            <input
              onChange={onChangeHandler}
              name="stock"
              value={data.stock}
              type="number"
              placeholder="10"
              className="ring-1 ring-slate-900/10 pl-2 outline-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn-dark sm:w-5/12 flexCenter gap-x-2 !py-2 rounded"
        >
          <FaPlus />
          Add Product
        </button>
      </form>
    </section>
  );
};

export default Add;