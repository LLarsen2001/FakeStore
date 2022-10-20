import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/Actions/productActions";

const ProductListing = () => {

  const products = useSelector((state) => state);

  const dispatch = useDispatch();

  const getAllProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products").catch((err) => {
      console.log('err', err);
    })
    dispatch(setProducts(res.data))
  }

  useEffect(() => {
    getAllProducts();
  }, [])

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
export default ProductListing;