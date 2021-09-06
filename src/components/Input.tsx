import React, { Component } from 'react'
import { Button } from 'antd'

interface Iprops{
    addPlan(txt:any):void
}
export default class Input extends Component<Iprops>{
    txt:any
    constructor(props:any){
        super(props);
        this.txt = React.createRef()
    }
    render() {
        return (
            <div>
                <input ref={this.txt}  type="text" />
                <Button onClick={()=>{this.props.addPlan(this.txt.current.value)}}>新增</Button>
            </div>
        )
    }
}
