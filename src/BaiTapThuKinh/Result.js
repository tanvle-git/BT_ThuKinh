import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        return (
            <div className="container py-5">
                    <div style={{position:'relative', width:'400px', margin:'auto'}}>
                        <img src='./img/model.jpg' width={'100%'} />
                        <img src={this.props.product.url} width={'50%'} style={{position:'absolute', left:'50%',top:'25%', transform:'translateX(-50%)'}}/>
                        <div className="py-2" style={{width:'100%', bottom:0, backgroundColor:'#ffc40055', position:'absolute', boxSizing:'border-box'}}>
                            <h4 style={{color:'blue'}}>{this.props.product.name}</h4>
                            <p>{this.props.product.desc}</p>
                            <h5>Price: ${this.props.product.price}</h5>
                        </div>
                    </div>
            </div>
        )
    }
}
