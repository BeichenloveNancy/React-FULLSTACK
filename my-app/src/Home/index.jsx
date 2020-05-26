import React, { useEffect, useState } from 'react';
import './style.css'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import {Link} from 'react-router-dom'
import axios from '../utils/axios'
// const list = [0, 1, 2, 3, 4, 5]

// 无状态组件
const Home = () => {
  const [list, setList] = useState([])

  // 接口请求
  useEffect(() => {
    axios.get('/list').then((res) => {
      setList(res.data)
    })
  }, [])
  console.log(list)
  return (
    <div className="diary-list">
      {
        list.map((item) => (
          <Link key={item.id} to={{ pathname: 'detail', search: `?id=${item.id}` }}>
            <Card key={item} className="diary-item">
              <Card.Header
                title={item.title}
                extra={<span>杭州|中国</span>}
                thumb={item.url}
              />
              <Card.Body>
                <div>我的日记</div>
              </Card.Body>
              <Card.Footer content={item.date} extra={<div></div>} />
            </Card>
          </Link>

        ))
      }
    </div>
  )
}

export default Home