import './App.css';
import { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import newsJson from './news.json';
import HeaderComponent from "./Components/Header";
import News from "./Components/News";
import FooterComponent from "./Components/Footer";


const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerContent: 'MindX School @2022 Copyright',
      news: newsJson,
      newFiltered: newsJson
    }
  }

  filterNews = (keyword) => {
      console.log('keyword-typing', keyword);
      const filterData = this.state.news.filter((item) => {
          return item.title.indexOf(keyword) > -1;
      });
      this.setState({ newFiltered: filterData });
  }

  render() {
    return (
        <Layout className="layout">
          <HeaderComponent filterNews={this.filterNews} />
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
                <News news={this.state.newFiltered} />
            </div>
          </Content>
          <FooterComponent footerContent={this.state.footerContent} />
        </Layout>
    )
  }
}

export default App;
