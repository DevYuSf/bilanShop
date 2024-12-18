import product from "../models/productModel.js";

export const getProducts = async(req,res)=>{
    try {
        const products = await product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

export const getProductById = async(req,res)=>{
    try {
        const gProduct = await product.findById(req.params.id);

        if (gProduct) {
            res.status(200).json(gProduct);
        } else {
            res.status(401).json({message:"product not found"})
        }

    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


export const updateProduct = async(req,res)=>{
    try {
        const {name,image,category,description,price,oldPrice,countInStock}=req.body
        const uProduct = await product.findById(req.params.id);

        if (uProduct) {
            uProduct.name = name;
            uProduct.image = image;
            uProduct.category = category;
            uProduct.description = description;
            uProduct.price = price;
            uProduct.oldPrice = oldPrice;
            uProduct.countInStock = countInStock;
            const updatedProduct = await uProduct.save();
            if (updatedProduct) {
                res.status(200).json(updatedProduct);
            }
            
        } else {
            res.status(401).json({message:"product not found"})
        }

    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

export const deleteProduct = async(req,res)=>{
    try {
        const dProduct = await product.findByIdAndDelete(req.params.id);

        if (dProduct) {
            res.status(200).json({message:"product deleted."});
        } else {
            res.status(401).json({message:"product not found"})
        }

    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


export const createProduct = async(req,res)=>{
    try {
        const {name,image,category,description,price,oldPrice,countInStock}=req.body
        //const product = await product.findOne(req.params.id);
        const cProduct = await product.create({
            name,image,category,description,price,oldPrice,countInStock
        })
        res.status(201).json(cProduct)

    } catch (error) {
        res.status(500).json({error:error.message});
    }
}