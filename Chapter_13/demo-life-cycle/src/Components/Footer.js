import {Layout} from "antd";

const { Footer } = Layout;
const FooterComponent = (props) => {
    return (
        <Footer style={{ textAlign: 'center' }}>{props.footerContent}</Footer>
    )
}

export default FooterComponent;