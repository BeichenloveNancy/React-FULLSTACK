import React from 'react';
import './style.css'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import {Link} from 'react-router-dom'
const list = [0, 1, 2, 3, 4, 5]

// 无状态组件
const Home = () => {
  return (
    <div className="diary-list">
      {
        list.map((item) => (
          <Link key={item} to={{ pathname: 'detail', search: `?id=${item}` }}>
            <Card key={item} className="diary-item">
              <Card.Header
                title="杭州一日游"
                extra={<span>杭州|中国</span>}
              />
              <Card.Body>
                <div>我的日记</div>
              </Card.Body>
              <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
            </Card>
          </Link>

        ))
      }
    </div>
  )
}

export default Home