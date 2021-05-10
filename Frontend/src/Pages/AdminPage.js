import React, { useEffect, useState } from "react";
import "../Styles/Admin.scss";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, deleteProducts } from "../Redux/actions/ProductActions";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
const AdminPage = () => {
	const dispatch = useDispatch();
	const selector = useSelector((state) => state.ProductsData);
	const [products, setProducts] = useState([]);
	useEffect(() => {
		dispatch(getProducts());
	}, []);
	useEffect(() => {
		setProducts(selector.Products);
	}, [{ selector }]);
	const removeProductsHandler = (e) => {
		dispatch(deleteProducts(e.target.id));
	};

	return (
		<div className="admin-container">
			<div className="products-container">
				<div className="title">
					<strong>Products</strong>
				</div>
				<div className="add-product">
					<Button color="secondary">
						<Link to="/createProduct">Add Products</Link>
					</Button>
				</div>
			</div>
			<div className="product-table">
				<table className="table-content">
					<thead>
						<tr>
							<th>ID</th>
							<th>NAME</th>
							<th>PRICE</th>
							<th>CATERGORY</th>
							<th>BRAND</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					{selector.Products &&
						selector.Products.map((product) => (
							<>
								<tbody>
									<tr>
										<td>{product._id}</td>
										<td>{product.productName}</td>
										<td>{product.price} USD</td>
										<td>{product.category}</td>
										<td>{product.brand}</td>
										<td>
											<DeleteOutlineOutlinedIcon
												id={`${product._id}`}
												onClick={removeProductsHandler}
												style={{ cursor: "pointer" }}
											/>
										</td>
										<td>
											<AddOutlinedIcon style={{ cursor: "pointer" }} />
										</td>
									</tr>
								</tbody>
							</>
						))}
				</table>
			</div>
		</div>
	);
};

export default AdminPage;
