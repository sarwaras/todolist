import React, { Component } from "react"
import PropTypes from "prop-types"
import "./header.css"
import { nanoid } from "nanoid"


export default class Header extends Component {
    //  对接受的props进行  类型、必要性的限制 ，  其中 isRequired  是代表必传
      static propTypes = {
          addTodo:PropTypes.func.isRequired,
          updateTodo:PropTypes.func.isRequired
      }

      //  键盘事件的回调
  handlekeyUp = (event) => {
    //解构赋值获取 keyCode, target
    const { keyCode, target } = event
    // 判断是否是回车按键
    if (keyCode !== 13) return
    //添加的todo名字不能为空
    if (target.value.trim() === "") {
      alert("输入不能为空")

      return
    }
    //准备好一个todo对象
    const todoObj = { id: nanoid(), name: target.value, done: false }
    console.log(target.value)
    console.log(nanoid())
    // 将 todoObj 传递给APP
    this.props.addTodo(todoObj)
    //  清空输入
    target.value = ""

    console.log(event.target.value, event.keyCode)
  }

  render() {
    return (
      <div>
        <div className='todo-header'>
          <input onKeyUp={this.handlekeyUp} type='text' placeholder='请输入你的任务名称，按回车键确认' />
        </div>
      </div>
    )
  }
}
