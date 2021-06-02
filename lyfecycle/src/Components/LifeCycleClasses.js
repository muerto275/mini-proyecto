

import React, { Component } from 'react'

import Example from '../Components/Example'

export class LifeCycleClasses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: 'Ricardo',
            lastName: 'Marquez'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            { this.setState({ nombre: 'Ernesto' }) }
        }, 2000)
        console.log('El componente se ha montado')
    }

    componentDidUpdate() {
        console.log('El componente se ha actualizado')
    }
    componentWillUnmount() {
        console.log('El componente se ha desmontado')
    }

    render() {
        return (
            <div>
                {this.state.nombre === 'Ernesto' && null}
            </div>
        )
    }
}

export default LifeCycleClasses
