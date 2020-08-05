import React, { Component } from 'react'
import ListItem from './listItem';

export default class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isClicked: false,
             btnValue: 'submit',
             todos: [],
             todo: ''
        }
    }
    
    onClick = () => {
        this.setState({
            isClicked: !this.state.isClicked,
            btnValue: this.state.isClicked ? 'true' : 'false',
            todos: [...this.state.todos, this.state.todo]
        })
        console.log(this.state.todos)
    }

    onChange = (e) => {
        this.setState({
            todo: e.target.value
        })
        console.log(this.state.todo)
    }

    deleteTodo = (i) => {
        this.setState({
            todos: this.state.todos.splice(i, 1)
        })
    }
    render() {
        return (
            <div>
                <p>todos</p>
                <input value={this.state.todo} onChange={this.onChange}/>
                <button className="submitTodo" onClick={this.onClick}>{this.state.btnValue}</button>
                <hr />
                <ul className="todoList">
                    {this.state.todos.map((x, i)=> {
                        return <ListItem key={i} text={x} delete={this.deleteTodo}/>
                    })}
                </ul>
            </div>
        )
    }   
}
