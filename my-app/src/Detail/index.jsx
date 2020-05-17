import React from 'react'
import { NavBar, Icon, List } from 'antd-mobile';
// import {history} from 'react-router-dom';
import { getQueryString } from '../utils'
// 返回上一级路由
import { useHistory } from 'react-router-dom'

const {Item} = List;

const Detail = (props) => {
  const history = useHistory()
  const id = getQueryString('id')
  // console.log(id)
  // console.log(props)
  return (
    <div className="diary-detail">
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.goBack()}
      >杭州一日游{id}</NavBar>
      <List renderHeader={() => '2020-05-17'} className="my-list">
        <Item wrap="true">良渚古城遗址良渚古城遗址良渚古城遗址良渚古城遗址良渚古城遗址良渚古城遗址良渚古城遗址</Item>
      </List>
    </div>
  )
}

export default Detail