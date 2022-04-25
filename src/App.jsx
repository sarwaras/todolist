//  创建外壳组件

// 状态在哪里，操作状态的方法就在那里

import React, { Component } from "react"
// import "./APP.css"
import "./App.css"
import Footer from "./component/Footer/Footer"
import Header from "./component/Header/Header"
import List from "./component/List/List"
// import ReactDOM from "react"
class APP extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "学习", done: true },
      { id: "004", name: "踢足球", done: false },
    ],
  }

  //  addTodo 用于添加一个todo，  接受的参数是todo对象
  addTodo = todoObj => {
    //  获取原 todos
    const { todos } = this.state
    //  追加一个todo
    const newTodos = [todoObj, ...todos]
    // 更新状态
    this.setState({ todos: newTodos })
    console.log(this.props)
  }

  //  更新一个todo对象
  updateTodo = (id, done) => {
    //  获取状态中的todos
    const { todos } = this.state
    //  匹配处理数据
    const newTodos = todos.map(todoObj => {
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj
    })
    this.setState({ todos: newTodos })
  }

  //  删除一个todo
  deleteTodo = id => {
    const { todos } = this.state
    const newTodos = todos.filter(todoObj => {
      return todoObj.id !== id
    })
    //  更新状态
    this.setState({ todos: newTodos })
  }

  // checkAllTodo 用于全选
  checkAllTodo = done => {
    //  获取原来的todos
    const { todos } = this.state
    // 加工数据
    const newTodos = todos.map(todoObj => {
      return { ...todoObj, done }
    })
    // 更新状态
    this.setState({ todos: newTodos })
  }

  // clearAllDone用于清除已完成任务的
  clearAllDone = () => {
    // 获取原来的todos
    const { todos } = this.state
    //  过滤数据
    const newTodos = todos.filter(todoObj => {
      return !todoObj.done
    })
    // 更新状态

    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <div className='todo-container'>
          <div className='todo-wrap'>
            <Header addTodo={this.addTodo} />
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
          </div>
        </div>
      </div>
    )
  }
}

export default APP
