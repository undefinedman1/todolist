import React, { Component } from 'react'
import { Button } from 'antd'

interface Iprops {
    changeTab(current:string):void
}

interface Istate {
    currentList:string[]
}


export default class Btn extends Component<Iprops> {
    state:Istate={
        currentList:["全部","已完成","未完成"]
    }
    render() {
        const {currentList} = this.state
        return (
            <div>
                {currentList.map(item=>{
                    return(
                        <Button  key={item} onClick={()=>{this.props.changeTab(item)}} >{item}</Button>
                    )
                })}
            </div>
        )
    }
}
