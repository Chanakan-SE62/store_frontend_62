import React, {useState, useEffect } from 'react';
import { 
    Container, 
    Row, 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Alert, 
} from 'reactstrap';
import axios from 'axios';

function EditProductForm({id}) {
    const initProductState = {
        name: "",
        category: "",
        price: "",
        tags: [],
    };
    const [product, setProduct] = useState(initProductState);
    const [submitted, setSubmitted] = useState(false);
    useEffect(()=>{
        axios
            .get("https://product-api-009.herokuapp.com/api/products/" +id).then((response)=>{
                setProduct(response.data);
            });
    },[id]);

    const handleInputChange = (event) => {
        let {name, value} = event.target;
        if (name === "tags"){
            value = value.split(",");
        }
        setProduct({...product, [name]: value }); //...product คือลูปอันอื่นแล้วโคลนออกมา
    };

    const saveProduct = () => {
        const param = {
            name: product.name,
            category: product.category,
            price: product.price,
            tags: product.tags,
        };

        axios
            .put("https://product-api-009.herokuapp.com/api/products/" +product._id, param)
            .then((response) => {
                console.log(response.data);
                setProduct({ ...product, param });
                setSubmitted(true);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const newProduct = () => {
        setSubmitted(false);
    };

    return (
        <Container>
            <Row>
                <h3>Update Product Information</h3>
            </Row>
            {submitted ? ( //true
                <>
                    <Alert color="success">
                        You have updated successfully !!
                    </Alert>
                    <Button className="btn btn-success" onClick={newProduct}>OK</Button>
                </>
            ) : ( //false
                <>
                    <Form>
                        <FormGroup>
                            <Label for="productName">Product Name</Label>
                            <Input 
                                type="text"
                                name="name"
                                id="productName"
                                value={product.name || ""} //ถ้า State ยังไม่สร้างขึ้น ให้เซ็ตเป็นค่าว่าง
                                onChange={handleInputChange}
                                placeholder="Enter product name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="productCategory">Product Category</Label>
                            <Input 
                                type="text"
                                name="category"
                                id="productCategory"
                                value={product.category || ""}
                                onChange={handleInputChange}
                                placeholder="Enter product category"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="productPrice">Product Price</Label>
                            <Input 
                                type="text"
                                name="price"
                                id="productPrice"
                                value={product.price || ""}
                                onChange={handleInputChange}
                                placeholder="Enter product price"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="productTags">Product Tags</Label>
                            <Input 
                                type="text"
                                name="tags"
                                id="productTags"
                                value={product.tags || ""}
                                onChange={handleInputChange}
                                placeholder="Enter product tags"
                            />
                        </FormGroup>
                        <Button className="btn btn-success" onClick={saveProduct}>Update product</Button>
                    </Form>
                </>
            )}
            
        </Container>
    );
}

export default EditProductForm
