import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {List, Card, Layout, Button} from 'antd';
import {AddCart, fetchAllProductRequest} from "../actions";
const { Content } = Layout;

const ProductComponent = () => {
    const products = useSelector((state) => {
        return state.productData.products;
    });

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllProductRequest());
    }, [dispatch]);

    const AddProductToCart = (product) => {
        dispatch(AddCart(product));
    }

    return (
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 3,
                    }}
                    dataSource={products}
                    renderItem={item => (
                        <List.Item>
                            <Card
                                style={{ width: 200, height: 250 }}
                                cover={<img alt="example" src={item.image} style={{ width: 200, height: 150 }} />}
                            >
                                <Button type="primary" onClick={AddProductToCart}>Add Cart</Button>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </Content>
    )
}

export default ProductComponent;