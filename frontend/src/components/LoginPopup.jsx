// // import React, { useState } from 'react'
// // import { FaXmark } from 'react-icons/fa6'

// // const LoginPopup = ({setShowLogin}) => {
// //     const [state, setState] = useState("Sign Up")
// //     return (
// //         <div className = 'absolute h-full w-full bg-black/40 z-50 flexCenter'>
// //             <form className='bg-white w-[366px] p-7 rounded-xl shadow-md'>
// //                 <div className='flex justify-between items-baseline'>
// //                     <h4 className = 'bold-28'>{state}</h4>
// //                     <FaXmark onClick={()=> setShowLogin(false)} className='medium-20 text-slate-900/70 cursor-pointer'/>
// //                 </div>
// //                 <div className ='flex flex-col gap-4 my-6'>
// //                     {state ==="Sign Up" && (
// //                         <input name='name' type='text' placeholder='Name' required className='bg-primary border p-2 pl-4 rounded-md outline-none'/>
// //                     )}

// //                     <input name='email' type='email' placeholder='Email' required className='bg-primary border p-2 pl-4 rounded-md outline-none'/>

// //                     <input name='password' type='password' placeholder='Password' required className='bg-primary border p-2 pl-4 rounded-md outline-none'/>
// //                 </div>

// //                 <button type='submit' className='btn-secondary rounded-md w-full'>
// //                     {state === "Sign Up" ? "Create account : "Login"}
// //                 </button>

// //                 <div className ='flex items-baseline gap-x-3 mt-6 mb-4'>
// //                     <input type="checkbox" required />
// //                     <p>By continuing you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span></p>
// //                 </div>

// //                     {state === "Sign Up" ? (<p>Already have an account? <span onClick={()=>setState("Login")} className='text-secondary cursor-pointer'>Login</span></p>) : ( <p>Don't have an account? <span onClick={()=>setState("Sign Up")} className ='text-secondary cursor-pointer'>Sign Up</span></p>
// //                     )}
// //             </form>
// //         </div>
// //     )
// // }
// // export default LoginPopup

// import React, { useState } from 'react';
// import { FaXmark } from 'react-icons/fa6';
// import { ShopContext } from '../context/ShopContext';
// import axios from axios;

// const LoginPopup = ({ setShowLogin }) => {
//   const {url,setToken} = useContext(ShopContext)
//   const [state, setState] = useState("Login");
//   const [data, setData] = useState({
//     name:"",
//     email:"",
//     password:"",
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = EventTarget.value;
//     setData(data=>({...data,[name]:value}))
//   };

// //   useEffect(()=>{
// //   console.log(data)
// // },[data])
//   const onLogin = async(event) => {
//     event.preventDefault()
//     let newUrl = url;
//     if(state==="Login"){
//       newUrl +="/api/user/login"
//     }
//     else{
//       newUrl+= "/api/user/register"
//     }

//     const response = await axios.post(newUrl,data);
//     if(response.data.success){
//         setToken(response.data.token)
//         localStorage.setItem("token",response.data.token)
//         setShowLogin(false)
//     }
//     else{
//       alert(response.data.message)
//     }

//   }

//   return (
//     <div className='absolute h-full w-full bg-black/40 z-50 flexCenter'>
//       <form className='bg-white w-[366px] p-7 rounded-xl shadow-md'>
//         <div onSubmit={onLogin} className='flex justify-between items-baseline'>
//           <h4 className='bold-28'>{state}</h4>
//           <FaXmark
//             onClick={() => setShowLogin(false)}
//             className='medium-20 text-slate-900/70 cursor-pointer'
//           />
//         </div>

//         <div className='flex flex-col gap-4 my-6'>
//           {state === "Sign Up" && (
//             <input
//               onChange={onChangeHandler}
//               value={data.name}
//               name='name'
//               type='text'
//               placeholder='Name'
//               required
//               className='bg-primary border p-2 pl-4 rounded-md outline-none'
//             />
//           )}

//           <input
//             onChange={onChangeHandler}
//             value={data.email}
//             name='email'
//             type='email'
//             placeholder='Email'
//             required
//             className='bg-primary border p-2 pl-4 rounded-md outline-none'
//           />

//           <input
//             onChange={onChangeHandler}
//             value={data.password}
//             name='password'
//             type='password'
//             placeholder='Password'
//             required
//             className='bg-primary border p-2 pl-4 rounded-md outline-none'
//           />
//         </div>

//         <button type='submit' className='btn-secondary rounded-md w-full'>
//           {state === "Sign Up" ? "Create account" : "Login"}
//         </button>

//         <div className='flex items-baseline gap-x-3 mt-6 mb-4'>
//           <input type="checkbox" required />
//           <p>
//             By continuing you agree to our{" "}
//             <span className='text-secondary'>Terms of Service</span> and{" "}
//             <span className='text-secondary'>Privacy Policy</span>
//           </p>
//         </div>

//         {state === "Sign Up" ? (
//           <p>
//             Already have an account?{" "}
//             <span
//               onClick={() => setState("Login")}
//               className='text-secondary cursor-pointer'
//             >
//               Login
//             </span>
//           </p>
//         ) : (
//           <p>
//             Don't have an account?{" "}
//             <span
//               onClick={() => setState("Sign Up")}
//               className='text-secondary cursor-pointer'
//             >
//               Sign Up
//             </span>
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default LoginPopup;
import React, { useState, useContext } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(ShopContext);
  const [state, setState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (state === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login/Register failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className='absolute h-full w-full bg-black/40 z-50 flexCenter'>
      <form onSubmit={onLogin} className='bg-white w-[366px] p-7 rounded-xl shadow-md'>
        <div className='flex justify-between items-baseline'>
          <h4 className='bold-28'>{state}</h4>
          <FaXmark
            onClick={() => setShowLogin(false)}
            className='medium-20 text-slate-900/70 cursor-pointer'
          />
        </div>

        <div className='flex flex-col gap-4 my-6'>
          {state === "Sign Up" && (
            <input
              onChange={onChangeHandler}
              value={data.name}
              name='name'
              type='text'
              placeholder='Name'
              required
              className='bg-primary border p-2 pl-4 rounded-md outline-none'
            />
          )}

          <input
            onChange={onChangeHandler}
            value={data.email}
            name='email'
            type='email'
            placeholder='Email'
            required
            className='bg-primary border p-2 pl-4 rounded-md outline-none'
          />

          <input
            onChange={onChangeHandler}
            value={data.password}
            name='password'
            type='password'
            placeholder='Password'
            required
            className='bg-primary border p-2 pl-4 rounded-md outline-none'
          />
        </div>

        <button
          type='submit'
          disabled={!data.email || !data.password}
          className='btn-secondary rounded-md w-full'
        >
          {state === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className='flex items-baseline gap-x-3 mt-6 mb-4'>
          <input type="checkbox" required />
          <p>
            By continuing you agree to our{" "}
            <span className='text-secondary'>Terms of Service</span> and{" "}
            <span className='text-secondary'>Privacy Policy</span>
          </p>
        </div>

        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className='text-secondary cursor-pointer'
            >
              Login
            </span>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className='text-secondary cursor-pointer'
            >
              Sign Up
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
