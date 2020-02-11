import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../../../Actions';
import {
  NumberField,
  TextField,
  Dropdown,
  Button,
  Checkbox,
} from '../../../Components';
import baseTheme from '../../../Theme/base/index';

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Text = styled.span`
  font-family: ${p => p.theme.typography.fontFamily};
  font-size: ${p => p.theme.typography.title.small.size}px;
  line-height: ${p => p.theme.typography.title.small.lineHeight}px;
  width: 100px;
`;

Text.defaultProps = {
  theme: baseTheme,
};

const TextArea = styled.textarea`
  font-size: 12px;
  width: 100%;
  min-height: 280px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  outline: none;
  background: hsla(0, 0%, 100%, 0.8);
  font-family: monospace;
  font-weight: 600;
  color: #3b4151;
  border: 1px solid #d9d9d9;
  max-width: 300px;
`;

const Select = styled(Dropdown)`
  font-family: ${p => p.theme.typography.fontFamily};
  font-size: ${p => p.theme.typography.inputField.size}px;
`;

Select.defaultProps = { theme: baseTheme };

const ukLocationAnswerId = 4842;
const selfAnswerId = 7527;
const proxyAnswerId = 7528;

const locationAnswer = {
  assetId: 21,
  answerId: ukLocationAnswerId,
  isAnswered: true,
};

const selfAnswer = {
  assetId: 13045,
  answerId: selfAnswerId,
  isAnswered: true,
};

const defaultInjection = [locationAnswer, selfAnswer];

const Home = () => {
  const [algo, setAlgo] = useState('');
  const [release, setRelease] = useState('');
  const [lang, setLang] = useState('');
  const [node, setNode] = useState('');
  const [injection, setInjection] = useState(
    JSON.stringify(defaultInjection, null, 2)
  );
  const [selfInj, setSelfInj] = useState(true);

  const products = useSelector((state: any) => state.clientProducts);
  const productOptions = [
    { text: 'Please select...', value: '' },
    ...products.map((product: any) => ({
      text: `${product.name} (${product.releaseNumber})`,
      value: product.releaseNumber,
    })),
  ];

  const dispatch = useDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(actions.traversalStart(algo, release, lang, node, injection));
  };

  const selectProduct = (releaseNumber: any) => {
    const product = products.find(
      (p: any) => p.releaseNumber === releaseNumber
    );
    if (product) {
      setAlgo(product.startAlgoId || '');
      setRelease(product.releaseNumber);
      setLang(product.language);
    }
  };

  const selfChecked = (checked: any) => {
    const answerId = checked ? selfAnswerId : proxyAnswerId;
    const inj = IsJsonString(injection)
      ? JSON.parse(injection)
      : defaultInjection;
    const newInj = inj.map((answer: any) =>
      answer.assetId === selfAnswer.assetId ? { ...answer, answerId } : answer
    );
    setInjection(JSON.stringify(newInj, null, 2));
    setSelfInj(checked);
  };

  const IsJsonString = (str: any) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    dispatch(actions.clientProductsGet());
  }, [dispatch]);

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <Label>
        <Text>Product:</Text>
        <Select
          value={release}
          options={productOptions}
          onChange={(e: any) => selectProduct(e.target.value)}
        />
      </Label>
      <Label>
        <Text>Algo ID:</Text>
        <NumberField
          value={algo}
          onChange={(e: any) => setAlgo(e.target.value)}
        />
      </Label>
      <Label>
        <Text>Release:</Text>
        <TextField
          value={release}
          onChange={(e: any) => setRelease(e.target.value)}
        />
      </Label>
      <Label>
        <Text>Language:</Text>
        <TextField
          value={lang}
          onChange={(e: any) => setLang(e.target.value)}
        />
      </Label>
      <Label>
        <Text>Node ID:</Text>
        <NumberField
          value={node}
          onChange={(e: any) => setNode(e.target.value)}
        />
      </Label>
      <Label>
        <Text>Self:</Text>
        <Checkbox
          type="checkbox"
          checked={selfInj}
          onChange={(e: any) => selfChecked(e.target.checked)}
        />
      </Label>
      <Label>
        <Text>Injection:</Text>
        <TextArea
          value={injection}
          onChange={(e: any) => setInjection(e.target.value)}
        />
      </Label>
      <Button type="submit">Begin</Button>
    </form>
  );
};

export default withRouter(Home);
