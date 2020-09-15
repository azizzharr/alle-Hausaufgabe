import React, {Component} from "react";
import Item from "./item";

class List extends Component {

    state = {
        data: [
            { id: 18789, number:' 150',  label: 'Manty' },
            { id: 4242,  number:'30',   label:  'Samsy'  },
            { id: 31,    number:'120',  label:  'Koffe'  },
            { id: 23523, number:'1250', label:  'Tort'   },
            { id: 56,    number:'1530', label:  'Kuchen' },
            { id: 426,   number:'250',  label:  'Saft'   }
        ]
    }

    changeChecked = (id) => () => {
        this.setState(({data}) => {
            const index = data.findIndex((item) => item.id === id)
            const item = {...data[index]}
            item.checked = !item.checked
            return {data:[...data.slice(0,index),item,...data.slice(index+1)]}
        })
    }
   

    deleteItem = (id) => () => {
        this.setState(({data}) => {
            const index = data.findIndex((item) => item.id === id)
            return {data:[...data.slice(0,index),...data.slice(index+1)]}
        })
    }




    render() {

        return (
            <ul id="myUL">
                {
                    this.state.data.map(
                        (item) => {
                            return <Item deleteItem={this.deleteItem} changeChecked={this.changeChecked}  key={item.id} {...item}/>
                        }
                    )
                }
            </ul>
        )
    }
}

export default List;
