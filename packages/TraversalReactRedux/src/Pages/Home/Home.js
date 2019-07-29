import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../../Actions'
import { 
    NumberField, 
    TextField, 
    Button
} from '../../Components'

const Label = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const Text = styled.span`
    font-family: 'Noto Sans',sans-serif;
    width: 100px;
`

const TextArea = styled.textarea`
    font-size: 12px;
    width: 100%;
    min-height: 280px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    outline: none;
    background: hsla(0,0%,100%,.8);
    font-family: monospace;
    font-weight: 600;
    color: #3b4151;
    border: 1px solid #d9d9d9;
    max-width: 300px;
`

const Home = ({dispatch, history}) => {
    
    const [algo, setAlgo] = useState("");
    const [release, setRelease] = useState("");
    const [lang, setLang] = useState("");
    const [node, setNode] = useState("");
    const [injection, setInjection] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(actions.traversalStart(algo, release, lang, node, injection, history))
    }

    return (<form onSubmit={(e) => handleSubmit(e)} >
        <Label>
            <Text>Algo ID:</Text>
            <NumberField value={algo} onChange={(e) => setAlgo(e.target.value)} />
        </Label>
        <Label>
            <Text>Release ID:</Text>
            <TextField value={release} onChange={(e) => setRelease(e.target.value)} />
        </Label>
        <Label>
            <Text>Language:</Text>
            <TextField value={lang} onChange={(e) => setLang(e.target.value)} />
        </Label>
        <Label>
            <Text>Node ID:</Text>
            <NumberField value={node} onChange={(e) => setNode(e.target.value)} />
        </Label>
        <Label>
            <Text>Injection:</Text>
            <TextArea value={injection} onChange={(e) => setInjection(e.target.value)}/>
        </Label>
        <Button type="submit">Begin</Button>
    </form>)
}

export default withRouter(connect()(Home))