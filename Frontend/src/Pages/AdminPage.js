import React, { useEffect } from "react";
import "../Styles/Admin.scss";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/actions/ProductActions";
import { Link } from "react-router-dom";
const AdminPage = () => {
	const dispatch = useDispatch();
	const selector = useSelector((state) => state.ProductsData);
	useEffect(() => {
		dispatch(getProducts());
	}, []);

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
						</tr>
					</thead>
					{selector.Products &&
						selector.Products.map((product) => (
							<>
								<tbody>
									<tr>
										<td>{product._id}</td>
										<td>{product.productName}</td>
										<td>{product.price}</td>
										<td>{product.category}</td>
										<td>{product.brand}</td>
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
