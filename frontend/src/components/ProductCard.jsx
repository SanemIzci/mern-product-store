import { useState } from "react";
import { useProductStore } from "../store/product";

const ProductCard = ({ product }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { deleteProduct, updateProduct } = useProductStore();

	const handleDeleteProduct = async (pid) => {
		await deleteProduct(pid);
	};

	const handleUpdateProduct = async (pid, updatedProduct) => {
		await updateProduct(pid, updatedProduct);
		setIsModalOpen(false); 
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div>
			<div className="shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl bg-white dark:bg-gray-800">
				<img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
				<div className="p-4">
					<h3 className="uppercase text-lg font-bold mb-2  text-black">{product.name}</h3>
					<p className="font-semibold text-xl text-pretty dark:text-gray-200 mb-4">${product.price}</p>
					<div className="flex space-x-2">
						<button className="p-2 bg-blue-500 text-white rounded-md" onClick={openModal}>
							Edit
						</button>
						<button className="p-2 bg-red-500 text-white rounded-md" onClick={() => handleDeleteProduct(product._id)}>
							Delete
						</button>
					</div>
				</div>
			</div>

			
			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div className="bg-white rounded-lg p-6 shadow-lg w-96">
						<h2 className="text-xl font-semibold mb-4">Edit Product</h2>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								console.log("Updated Product:", updatedProduct);
								handleUpdateProduct(product._id, updatedProduct);
							}}
						>
							<label className="block mb-2">
								Name:
								<input
									type="text"
									value={updatedProduct.name}
									onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
									className="mt-1 block w-full border border-gray-300 rounded-md p-2"
								/>
							</label>
							<label className="block mb-2">
								Price:
								<input
									type="number"
									value={updatedProduct.price}
									onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: parseFloat(e.target.value) })}
									className="mt-1 block w-full border border-gray-300 rounded-md p-2"
								/>
							</label>
							<label className="block mb-4">
								Image URL:
								<input
									type="text"
									value={updatedProduct.image}
									onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
									className="mt-1 block w-full border border-gray-300 rounded-md p-2"
								/>
							</label>
							
							
							{updatedProduct.image && (
								<div className="mb-4">
									<img src={updatedProduct.image} alt="Preview" className="h-24 w-full object-cover rounded-md" />
								</div>
							)}
							<div className="flex justify-between">
								<button type="button" onClick={closeModal} className="p-2 bg-gray-400 text-white rounded-md">
									Cancel
								</button>
								<button type="submit" className="p-2 bg-blue-500 text-white rounded-md">
									Update
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductCard;





