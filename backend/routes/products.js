import express from 'express';
import {Addproducts,deletedProduct,getProducts,updateProduct} from '../controllers/ProductController.js';

const router=express.Router();

router.post('/', Addproducts)
router.delete("/:id", deletedProduct)
router.get("/", getProducts)
router.put('/:id',updateProduct)

export default router
