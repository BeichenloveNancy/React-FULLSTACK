import React, { useState, useEffect } from 'react'
import { List, Toast, InputItem, TextareaItem, DatePicker, ImagePicker, Button } from 'antd-mobile'
import axios from '../utils/axios'
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import './style.css'
import { getQueryString } from '../utils'

const Edit = () => {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState()
  const [files, setFile] = useState([])
  const id = getQueryString('id')

  useEffect(() => {
    if(id) {
      axios.get(`/getDetail/${id}`).then(res => {
        if(res.data.length) {
          setTitle(res.data[0].title)
          setContent(res.data[0].content)
          setDate(new Date(res.data[0].date))
          setFile([{url: res.data[0].url}])
        }
      })
    }
  }, [])

  const onChange = (files, type, index) => {
    console.log(files, type, index)
    setFile(files)
  }
  const publish = () => {
    if(!title || !content || !date) {
      Toast.fail('请检查是否填写完成！')
    }
    const params = {
      title,
      content,
      date: moment(date).format('YYYY-MM-DD'),
      // base 64 个事故的地址
      url: files.length ? files[0].url : ''
    }
    if (id) {
      params['id'] = id
      axios.post('/update', params).then(res => {
        if(res.status===200){
          Toast.success('修改成功')
          history.push(`/detail?id=${id}`)
        }
      })
    }
    axios.post('/addList', params).then(res => {
      if(res.status===200){
        Toast.success('添加成功')
        history.push('/')
      }
    })
  
  }

  return (
    <div className="diary-edit">
      <List renderHeader={() => '编辑日记'}>
        <InputItem
          clear
          placeholder="请输入标题"
          onChange={(value) => setTitle(value)}
          value={title}
        
        >标题</InputItem>
        <DatePicker
          mode="date"
          title="选择日期"
          extra="选择日期"
          value={date}
          onChange={date => setDate(date)}
        >
          <List.Item arrow="horizontal">日期</List.Item>
        </DatePicker>
        <TextareaItem
          title="请输入日记内容"
          placeholder="请输入日记内容"
          onChange={value => setContent(value)}
          rows={8}
          value={content}
        // ref={el => this.customFocusInst = el}
        />
        <ImagePicker
          files={files}
          onChange={onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 2}
          multiple={false}
          // onAddImageClick={this.onAddImageClick}
        />
        <Button type="primary" onClick={publish}>发布</Button>
      </List>
    </div>
  )
}

export default Edit