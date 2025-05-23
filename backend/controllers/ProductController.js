import Product from '../model/Product.js'
import mongoose from 'mongoose'



export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({ success: true, data: products })
    } catch (error) {
        console.log("Error in getting products", error.message)
        res.status(500).json({ success: false, message: "Server error" })
    }
}
export const Addproducts = async (req,res) => {
    const product = req.body;
    if (!product.name || !product.image || !product.price) {
        return res.status(400).json({ success: false, message: "Please provide all fields" })
    }
    const newProduct = new Product(product)//mongoose property
    try {
        await newProduct.save()
        res.status(200).json({ success: true, data: newProduct })
    } catch (error) {
        console.log("Error in create product", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}
export const deletedProduct = async (req, res) => {
    const { id } = req.params
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product Not Found" });
        }
        res.status(200).json({ success: true, message: "Product Deleted Successfully" });
    } catch (error) {
        console.log("Error in deleting product", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}
export const updateProduct = async (req, res) => {
    const { id } = req.params; 
    const product = req.body;
    try {
       const updated = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updated });
    } catch (error) {
        console.log("Error updating the product", error); 
        res.status(500).json({ success: false, message: "Server error" }); 
    }
};
