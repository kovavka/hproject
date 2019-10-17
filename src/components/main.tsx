import React from 'react'
import {RenameService} from '../services/RenameService'

type MainState = {
    output: string
}

export class Main extends React.Component<any, MainState> {
    constructor(props: any) {
        super(props)

        this.state = {
            output: ''
        }
    }

    value: string =''
    onClick() {
        this.setState({
            output: RenameService.run(this.value)
        })
    }

    render() {
        return (
            <div>
                <input defaultValue={''} onChange={(e) => this.value = e.target.value}/>
                <button onClick={() => this.onClick()} />
                <div>{this.state.output}</div>
            </div>
        )
    }
}