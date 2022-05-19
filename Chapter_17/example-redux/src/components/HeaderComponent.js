import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllProductRequest} from "../actions";
const { Header } = Layout;

const HeaderComponent = () => {
    const numberCart = useSelector((state) => {
        return state.productData.numberCart;
    });

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllProductRequest());
    }, [dispatch]);

      return (
          <Layout>
              <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                  <Menu
                      theme="dark"
                      mode="horizontal"
                      defaultSelectedKeys={['2']}
                  >
                      <Menu.Item><Link to={'/'} />Home</Menu.Item>
                      <Menu.Item><Link to={'/carts'} />Cart: {numberCart}</Menu.Item>
                  </Menu>
              </Header>
              {/*<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>*/}
          </Layout>
      )
};

export default HeaderComponent;