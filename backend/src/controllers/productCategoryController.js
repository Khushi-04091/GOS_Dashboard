const ProductCategory = require("../models/ProductCategory");

const getProductCategories = async (req, res) => {
    try {
        const productCategories = await ProductCategory.findAll();

        res.json(productCategories);
    } catch (error) {
        console.error("Error fetching product categories:", error);

        res.status(500).json({
            message: "Failed to fetch product categories"
        });
    }
};

module.exports = {
    getProductCategories
};