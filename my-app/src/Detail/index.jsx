import React, {useState, useEffect} from 'react'
import { NavBar, Icon, List } from 'antd-mobile';
// import {history} from 'react-router-dom';
import { getQueryString } from '../utils'
// 返回上一级路由
import { useHistory } from 'react-router-dom'
import axios from '../utils/axios';

const {Item} = List;

const Detail = (props) => {
  const [detail, setDetail] = useState({})
  const history = useHistory()
  const id = getQueryString('id')
  useEffect(() => {
    axios.get(`/getDetail/${id}`).then((res) => {
      setDetail(res.data[0])
    })
  },[])
  return (
    <div className="diary-detail">
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.goBack()}
      >
        {detail.title || ''}
      </NavBar>
      <List renderHeader={() => '2020-05-17'} className="my-list">
        <Item wrap="true">{detail.content}</Item>
      </List>
    </div>
  )
}

export default Detail