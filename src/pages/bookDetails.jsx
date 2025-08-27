import React from 'react';
import { Image } from 'antd'; // 只引入你需要的组件
import funnyImage from '../image/funny.png'; // 使用 import 导入图片

const bookDetails = () => {
  return (
    <div className="page">
      <Image 
          src={funnyImage}
          alt="" 
          width={800}
          height={600}
          preview={false}
        />
    </div>
  );
};

export default bookDetails;