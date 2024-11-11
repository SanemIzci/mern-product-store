import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../store/product";


const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
	});
	const { createProduct } = useProductStore();
	const navigate=useNavigate()

	const handleAddProduct = async () => {
		await createProduct(newProduct);
		setNewProduct({ name: "", price: "", image: "" });
		navigate('/')

	};

	return (
		<div className="max-w-md mx-auto mx- p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-8">
			<h1 className="text-3xl font-bold text-center mb-8">Create New Product</h1>
			<div className="space-y-4">
				<input
					placeholder="Product Name"
					name="name"
					value={newProduct.name}
					onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
					className="w-full p-2 border rounded"
				/>
				<input
					placeholder="Price"
					name="price"
					type="number"
					value={newProduct.price}
					onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
					className="w-full p-2 border rounded"
				/>
				<input
					placeholder="Image URL"
					name="image"
					value={newProduct.image}
					onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
					className="w-full p-2 border rounded"
				/>
				<button

					onClick={handleAddProduct}
					className="w-full p-2 bg-blue-500 text-white rounded-md"
				>
					Add Product
				</button>
			</div>
		</div>
	);
};

export default CreatePage;
