import React, { Component } from 'react'
import styles from '../components/List.less'
import {Button} from 'antd'


interface Iprops {
    changeType(id:number):void,
    deleteOne(id:number):void,
    filterData:[{id:number,name:string,done:boolean}]

}

export default class List extends Component<Iprops> {
    render() {
        const {filterData} = this.props
        return (
            <div>
                <ul>
                    {filterData.map((item,index)=>{
                        return(
                            <li style={{display:'flex',width:"190px",justifyContent:"space-between"}} className={item.done?styles.active:""} key={item.id} onClick={()=>{this.props.changeType(index)}}>
                                <p>{item.name}</p>
                                <Button onClick={()=>{this.props.deleteOne(index)}} >删除</Button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
