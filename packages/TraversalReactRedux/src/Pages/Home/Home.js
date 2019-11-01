import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../../Actions'
import {
    NumberField,
    TextField,
    Dropdown,
    Button
} from '../../Components'
import baseTheme from '../../Theme/base/index'

const Label = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const Text = styled.span`
    font-family: ${p => p.theme.typography.fontFamily};
    font-size: ${p => p.theme.typography.title.small.size}px;
    line-height: ${p => p.theme.typography.title.small.lineHeight}px;
    width: 100px;
`

Text.defaultProps = {
    theme: baseTheme
}

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

const Select = styled(Dropdown)`
    font-family: ${p => p.theme.typography.fontFamily};
    font-size: ${p => p.theme.typography.inputField.size}px;
`

Select.defaultProps = { theme: baseTheme }

const Home = ({ history }) => {

    const [algo, setAlgo] = useState("");
    const [release, setRelease] = useState("");
    const [lang, setLang] = useState("");
    const [node, setNode] = useState("");
    const [injection, setInjection] = useState("");

    const products = useSelector(state => state.clientProducts);
    const productOptions = [
        { text: "Please select...", value: "" },
        ...products.map((product) => ({ text: `${product.name} (${product.releaseNumber})`, value: product.releaseNumber }))
    ]

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(actions.traversalStart(algo, release, lang, node, injection, history))
    }

    const selectProduct = (releaseNumber) => {
        const product = products.find(p => p.releaseNumber === releaseNumber);
        if (product) {
            setAlgo(product.startAlgoId || "");
            setRelease(product.releaseNumber);
            setLang(product.language);
        }
    }

    useEffect(() => { dispatch(actions.clientProductsGet()) }, []);

    return (<form onSubmit={(e) => handleSubmit(e)}>
        <Label>
            <Text>Product:</Text>
            <Select value={release} options={productOptions} onChange={e => selectProduct(e.target.value)} />
        </Label>
        <Label>
            <Text>Algo ID:</Text>
            <NumberField value={algo} onChange={(e) => setAlgo(e.target.value)} />
        </Label>
        <Label>
            <Text>Release:</Text>
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
            <TextArea value={injection} onChange={(e) => setInjection(e.target.value)} />
        </Label>
        <Button type="submit">Begin</Button>
    </form>)
}

export default withRouter(Home)