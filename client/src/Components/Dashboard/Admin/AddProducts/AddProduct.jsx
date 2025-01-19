import { useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const AddProduct = () => {
    const axiosSecure = useAxiosSecure();
    const [formData, setFormData] = useState({
        productName: '',
        description: '',
        productImage: '',
        categoryName: '',
        price: '',
        rating: 4.0,
        size: [],
        fabric: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSizeChange = (e) => {
        const selectedSizes = Array.from(e.target.selectedOptions, (option) => option.value);
        setFormData({
            ...formData,
            size: selectedSizes
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await axiosSecure.post('/add/product', formData);
            alert(response.data);
            console.log(response);
        } catch (error) {
            alert('Error adding product: ' + error.response.data.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-8 my-12">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Add New Product
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Product Name</label>
                        <input
                            type="text"
                            name="productName"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Description</label>
                        <textarea
                            name="description"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            rows="3"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Product Image URL</label>
                        <input
                            type="text"
                            name="productImage"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Category</label>
                        <select
                            name="categoryName"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                        >
                            <option value="">Select a category</option>
                            <option value="Saree">Saree</option>
                            <option value="Shalwar Kameez">Shalwar Kameez</option>
                            <option value="Accessories">Accessories</option>
                            <option value="2-piece sets">2-piece sets</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Price</label>
                        <input
                            type="number"
                            name="price"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Rating</label>
                        <input
                            type="number"
                            min="0"
                            max="5"
                            step="0.1"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Sizes</label>
                        <select
                            name="size"
                            multiple
                            onChange={handleSizeChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        >
                            <option value="M">M</option>
                            <option value="X">X</option>
                            <option value="XL">XL</option>
                            <option value="Unistitch">Unistitch</option>
                        </select>
                        <small className="text-gray-500">Hold Ctrl (Cmd on Mac) to select multiple sizes</small>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Fabric</label>
                        <input
                            type="text"
                            name="fabric"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-sky300 text-white font-semibold rounded-lg hover:bg-blue600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
