import React, { Component } from 'react'
import Btn from './Btn'
import Input from './Input'
import List from './List'


interface Istate {
    ListData: itemType[],
    current:string
}



type itemType = {
    id: number,
    name: string,
    done: boolean
}

export default class Container extends Component<Istate>{
    state: Istate = {
        ListData: [
            { id: 1, name: "JS", done: true },
            { id: 2, name: "TS", done: false },
            { id: 3, name: "C", done: false },
        ],
        current:"全部"
    }
    changeType = (id: number) => {
        const { ListData } = this.state
        const newArr = ListData.map((item, index) => {
            if (index == id) {
                item.done = !item.done
            }
            return item
        })
        this.setState({
            ListData: newArr
        })
    }
    deleteOne = (id:number) =>{
        const { ListData } = this.state
        ListData.splice(id,1)
        this.setState({
            ListData
        })
    }
    addPlan = (txt: any) => {
        const { ListData } = this.state
        let id: number = ListData.length + 1
        id++
        const listItem = {
            id,
            name: txt,
            done: false
        }
        ListData.push(listItem)
        this.setState({
            ListData
        })
    }
    
    changeTab =(current: string)=>{
        this.setState({
            current
        })
    }

    get filterData():any{
        const {current,ListData} =this.state
        switch (current) { 
            case "全部":
                return  ListData
            case "已完成":
                return ListData.filter(item => { return item.done == true })
               
            case "未完成":
                return  ListData.filter(item => { return item.done == false })
        };
        
    }

    render() {
        return (
            <div>
                <h1>toDoList</h1>
                <Input addPlan={this.addPlan}></Input>
                <List deleteOne={this.deleteOne}  filterData={this.filterData} changeType={this.changeType} ></List>
                <Btn changeTab={this.changeTab}></Btn>
            </div>
        )
    }
}


