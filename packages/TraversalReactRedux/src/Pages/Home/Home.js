import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../../Actions'
import { NumberField, Button } from '../../Components'

const Label = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const Text = styled.span`
    font-family: 'Noto Sans',sans-serif;
    width: 75px;
`

const Home = ({dispatch, history}) => {
    
    const [algo, setAlgo] = useState("");
    const [node, setNode] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        let nodeId = null;
        if (node) nodeId = node
        dispatch(actions.traversalStart(algo, nodeId, history))
    }

    return (<form onSubmit={(e) => handleSubmit(e)} >
        <Label>
            <Text>Algo ID:</Text>
            <NumberField onChange={(e) => setAlgo(e.target.value)} />
        </Label>
        <Label>
            <Text>Node ID:</Text>
            <NumberField onChange={(e) => setNode(e.target.value)} />
        </Label>
        <Button type="submit">Begin</Button>
    </form>)
}

export default withRouter(connect()(Home))