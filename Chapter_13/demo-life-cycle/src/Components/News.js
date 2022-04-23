import { List, Avatar } from 'antd';

const News = (props) => {
    const news = props.news;
    return (
        <List
            itemLayout="horizontal"
            dataSource={news}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={item.image} />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description={item.feed}
                    />
                </List.Item>
            )}
        />
    )
}

export default News;