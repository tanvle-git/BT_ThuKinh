import React, { Component } from 'react'

export default class SelectList extends Component {
    renderList = () => {
        return this.props.arrProduct.map((SP,index) => {
            let displaceURL= SP.url.replace('v', 'g').replace('png', 'jpg');
            return <div className='col-2' key={index} style={{display:'flex'}}>
                <img src={displaceURL}   onClick={() => {this.props.click(SP)}} style={{width:'100%',objectFit: 'scale-down'}} />
            </div>
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-left bg-white">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}
