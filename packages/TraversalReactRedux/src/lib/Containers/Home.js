import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from "react-router"

import { traversalStart } from '../Actions'
import NumberField from '../Components/NumberField'
import Button from '../Components/Button'

const Label = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const Text = styled.span`
    font-family: 'Noto Sans',sans-serif;
    width: 75px;
`

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { algo: "", node: "" };
    }

    handleChange(event, state) {
        var obj = {}
        obj[state] = event.target.value
        this.setState(obj);
    }

    handleSubmit(event) {
        event.preventDefault()
        let nodeId = null;
        if (this.state.node) nodeId = this.state.node
        this.props.dispatch(traversalStart(this.state.algo, nodeId, this.props.history))
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)} >
                <Label>
                    <Text>Algo ID:</Text>
                    <NumberField onChange={(e) => this.handleChange(e, "algo")} />
                </Label>
                <Label>
                    <Text>Node ID:</Text>
                    <NumberField onChange={(e) => this.handleChange(e, "node")} />
                </Label>
                <Button type="submit">Begin</Button>
            </form>
        )
    }
}

export default withRouter(connect()(Home))