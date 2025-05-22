// // // import productModel from "../models/productModel.js";
// // // import fs from "fs"

// // // const addProduct = async(req,res)=>{
// // //     let image_filename = `${req.file.filename}`;

// // //     const product = new productModel({
// // //         name:req.body.name,
// // //         description:req.body.description,
// // //         price:req.body.price,
// // //         category:req.body.category,
// // //         image: image_filename,
// // //     });

// // //     try {
// // //         await product.save();
// // //         res.json({success:true,message:"Product Added"});
// // //     } catch (error) {
// // //         console.log(error)
// // //         res.json({success:false,message:"Error"})       
// // //     }
// // // };

// // // const listProduct = async(req,res)=>{
// // //     try {
// // //         const products = await productModel.find({});
// // //         res.json({succrss:true,data:products})
// // //     } catch (error) {
// // //         console.log(error)
// // //         res.json({success:false,message:"Error"})
// // //     }
// // // }

// // // const removeProduct = async(req,res)=>{
// // //     try {
// // //         const product = await productModel.findById(req.body.id)
// // //         fs.unlink(`uploads/${product.image}`,()=>{})

// // //         await productModel.findByIdAndDelete(req.body.id);
// // //         res.json({success:true,message:"product removed"})
// // //     } catch (error) {
// // //         console.log(error)
// // //         res.json({success:false,message:"Error"})
// // //     }
// // // }

// // // export {addProduct,listProduct,removeProduct}

// // import productModel from "../models/productModel.js";
// // import fs from "fs"

// // const addProduct = async(req,res)=>{
// //     let image_filename = `${req.file.filename}`;

// //     const product = new productModel({
// //         name:req.body.name,
// //         description:req.body.description,
// //         price:req.body.price,
// //         category:req.body.category,
// //         image: image_filename,
// //     });

// //     try {
// //         await product.save();
// //         res.json({success:true,message:"Product Added"});
// //     } catch (error) {
// //         console.log(error)
// //         res.json({success:false,message:"Error"})
// //     }
// // };

// // const listProduct = async(req,res)=>{
// //     try {
// //         const products = await productModel.find({});
// //         res.json({succrss:true,data:products})
// //     } catch (error) {
// //         console.log(error)
// //         res.json({success:false,message:"Error"})
// //     }
// // }

// // const removeProduct = async(req,res)=>{
// //     try {
// //         const product = await productModel.findById(req.body.id)
// //         fs.unlink(`uploads/${product.image}`,()=>{})

// //         await productModel.findByIdAndDelete(req.body.id);
// //         res.json({success:true,message:"product removed"})
// //     } catch (error) {
// //         console.log(error)
// //         res.json({success:false,message:"Error"})
// //     }
// // }

// // export {addProduct,listProduct,removeProduct}
// // Updated productController.js
// import productModel from "../models/productModel.js";
// import fs from "fs";

// const addProduct = async (req, res) => {
//   try {
//     let image_filename = `${req.file.filename}`;
    
//     // Create new product with stock field included
//     const product = new productModel({
//       name: req.body.name,
//       description: req.body.description,
//       price: req.body.price,
//       category: req.body.category,
//       image: image_filename,
//       stock: req.body.stock || 0, // Include stock with default of 0
//     });
    
//     await product.save();
//     res.json({ success: true, message: "Product Added" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// const listProduct = async (req, res) => {
//   try {
//     const products = await productModel.find({});
//     res.json({ success: true, data: products }); // Fixed typo: 'succrss' to 'success'
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// const removeProduct = async (req, res) => {
//   try {
//     const product = await productModel.findById(req.body.id);
//     fs.unlink(`uploads/${product.image}`, () => {});
//     await productModel.findByIdAndDelete(req.body.id);
//     res.json({ success: true, message: "Product removed" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // New function to update product stock
// const updateStock = async (req, res) => {
//   try {
//     const { productId, quantity } = req.body;
    
//     // Find the product
//     const product = await productModel.findById(productId);
    
//     if (!product) {
//       return res.json({ 
//         success: false, 
//         message: "Product not found" 
//       });
//     }
    
//     // Check if enough stock is available
//     if (product.stock < quantity) {
//       return res.json({ 
//         success: false, 
//         message: `Not enough stock. Available: ${product.stock}` 
//       });
//     }
    
//     // Update the stock
//     product.stock -= quantity;
//     await product.save();
    
//     res.json({ 
//       success: true, 
//       message: "Stock updated successfully",
//       remainingStock: product.stock
//     });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error updating stock" });
//   }
// };

// export { addProduct, listProduct, removeProduct, updateStock };
import productModel from "../models/productModel.js";
import fs from "fs";

const addProduct = async (req, res) => {
  try {
    let image_filename = `${req.file.filename}`;
    
    const product = new productModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
      stock: req.body.stock || 0,
    });

    await product.save();
    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error adding product" });
  }
};

const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, data: products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching products" });
  }
};

const removeProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.id);
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    const imagePath = `uploads/${product.image}`;

    // Check if image file exists and delete it
    if (fs.existsSync(imagePath)) {
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("Error deleting image:", err);
        }
      });
    }

    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product and image removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error deleting product" });
  }
};

const updateStock = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await productModel.findById(productId);
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    if (product.stock < quantity) {
      return res.json({
        success: false,
        message: `Not enough stock. Available: ${product.stock}`,
      });
    }

    product.stock -= quantity;
    await product.save();

    res.json({
      success: true,
      message: "Stock updated successfully",
      remainingStock: product.stock,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error updating stock" });
  }
};

export { addProduct, listProduct, removeProduct, updateStock };
