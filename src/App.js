import logo from "./logo.svg";
import "./App.css";
import Fetchdata from "./Components/Axios/Fetchdata";
import { Layout, Space ,Breadcrumb} from "antd";
import { ReadOutlined } from "@ant-design/icons";
import Navbar from "./Components/Axios/Head/navigation";
const { Header, Footer, Content } = Layout;


const App = () => (
  <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
    <Layout>
      <Header className="headerStyle">
        <ReadOutlined className="IconStyle"/> 
          Book Gallery
        <Navbar className="navbar" />        
      </Header>
      <Content className="contentStyle">
        <h2 style={{color:'grey',textAlign:'start', marginLeft: 60,fontStyle:'italic'}}>Our Collections</h2>
        <Fetchdata className="content"></Fetchdata>
      </Content>
      <Footer className="footerStyle">Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  </Space>
);

export default App;
