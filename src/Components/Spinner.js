import React, {Component } from 'react'
import loading from './loading.gif'
export class Spinner extends React.Component {
    render() { 
        return <div className='text-center'>
            <img className='text-center' src={loading} alt="loading" />
        </div>;
    }
}
 
export default Spinner;