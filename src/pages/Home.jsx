import React from 'react';
import { Image, Button } from 'antd'; // 只引入你需要的组件
import { Link } from 'react-router-dom'; // 1. 引入 Link 组件
import girlImage from '../image/girl.png'; // 使用 import 导入图片

const Home = () => {
  return (
    <div className="page">
      <div>
        <Image 
          src={girlImage}
          alt="" 
          width={200}
          preview={false}
        />
      </div>
      <div>
        <Button type="primary" style={{ marginTop: '16px' }}>
          <Link to="/bookDetails">点击阅读</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;