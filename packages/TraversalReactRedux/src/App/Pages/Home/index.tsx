import React, { useState, useEffect, FormEvent } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../../../Actions';
import {
  NumberField,
  Dropdown,
  Button,
  Checkbox,
  CreateMember,
  TextFieldWithClear,
} from '../../../Components';
import baseTheme from '../../../Theme/base/index';
import { Modal } from '../../../ComponentModules/Modal';
import { ProductState, Version, Language } from '../../../Models/Product';

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
  const [productId, setProductId] = useState<number>();
  const [languageId, setLanguageId] = useState<number>();
  const [versionId, setVersionId] = useState<number>();
  const [languages, setLanguages] = useState<Array<Language>>([]);
  const [versions, setVersions] = useState<Array<Version>>([]);
  const [algo, setAlgo] = useState<number>();
  const [node, setNode] = useState<number>();
  const [injection, setInjection] = useState(
    JSON.stringify(defaultInjection, null, 2)
  );
  const [selfInj, setSelfInj] = useState(true);

  //#region - member
  const memberReferenceState = useSelector(
    (state: any) => state.memberReference
  );
  const [memberReference, setMemberReference] = useState('');
  const [showCreateMember, setShowCreateMember] = useState<any>(false);
  const [disableCreateMember, setDisableCreateMember] = useState<boolean>(
    false
  );

  const closeModal = () => {
    setShowCreateMember(false);
  };
  const createMember = (memberReference: any) => {
    dispatch(actions.memberCreate(memberReference));
    closeModal();
  };

  useEffect(() => {
    setDisableCreateMember(!!memberReference);
  }, [memberReference]);

  const handleMemberRefChange = (e: any) => {
    setMemberReference(e.target.value);
    setDisableCreateMember(!!e.target.value);
  };

  const updateMemberReference = (memRef: any) => {
    setMemberReference(memRef);
    dispatch(actions.memberCreateSet(memRef));
  };
  //#endregion - member
  const traversalClientProducts = useSelector(
    (state: ProductState) => state.clientProducts
  );

  const productOptions = [
    { text: 'Please select...', value: 0 },
    ...traversalClientProducts.products.map(product => ({
      text: product.name,
      value: product.id,
    })),
  ];

  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (showCreateMember) return;
    const product = traversalClientProducts.products.find(
      x => x.id === productId
    );
    if (product) {
      const language = product.languages.find(x => x.id === languageId);
      const version = traversalClientProducts.versions.find(
        x => x.productId === product.id && x.languageId === language?.id
      );
      const algoId = product.startAlgoId !== algo ? algo : undefined;
      dispatch(
        actions.traversalStart(
          product.id,
          language?.name,
          version?.version,
          algoId,
          node,
          injection,
          memberReference
        )
      );
    }
  };

  const getVersions = (pId: number, lId: number): Array<Version> => {
    return traversalClientProducts.versions.filter(
      x => x.productId === pId && x.languageId === lId
    );
  };

  const selectProduct = (e: any) => {
    e.preventDefault();
    const id: number = +e.target.value;
    setProductId(id);
    const product = traversalClientProducts.products.find(p => p.id === id);
    if (product) {
      const defaultLanguage = product.languages.find(
        x => x.id === product.defaultLanguageId
      );
      setLanguages(product.languages);
      setLanguageId(product.defaultLanguageId);
      setVersions(getVersions(product.id, product.defaultLanguageId));
      setVersionId(defaultLanguage?.defaultVersionId);
    } else {
      setLanguages([]);
      setLanguageId(undefined);
      setVersions([]);
      setVersionId(undefined);
    }
  };

  const selectLanguage = (e: any) => {
    e.preventDefault();
    const id: number = +e.target.value;
    setLanguageId(id);
    const product = traversalClientProducts.products.find(
      p => p.id === productId
    );
    const language = product?.languages.find(x => x.id === id);
    if (product && language) {
      setVersions(getVersions(product.id, language.id));
      setVersionId(language.defaultVersionId);
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

  useEffect(() => {
    setMemberReference(memberReferenceState);
  }, [memberReferenceState]);

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        <Text>Product:</Text>
        <Select
          value={productId}
          options={productOptions}
          onChange={selectProduct}
        />
      </Label>
      <Label>
        <Text>Language:</Text>
        <Select
          value={languageId}
          options={[
            ...languages.map(language => ({
              text: language.name,
              value: language.id,
            })),
          ]}
          onChange={selectLanguage}
        />
      </Label>
      <Label>
        <Text>Version:</Text>
        <Select
          value={versionId}
          options={[
            ...versions.map(version => ({
              text: version.version,
              value: version.id,
            })),
          ]}
          onChange={(e: any) => {
            e.preventDefault();
            setVersionId(e.target.value);
          }}
        />
      </Label>
      <Label>
        <Text>Member:</Text>
        <TextFieldWithClear
          value={memberReference}
          onChange={(e: any) => handleMemberRefChange(e)}
          updateStore={updateMemberReference}
        />
      </Label>
      <Label>
        <Text>Algo Id *:</Text>
        <NumberField
          value={algo}
          onChange={(e: any) => setAlgo(e.target.value)}
        />
      </Label>
      <p>* only enter if it's not the Start Algo Id.</p>
      <Label>
        <Text>Node Id:</Text>
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
      <Button onClick={handleSubmit}>Begin</Button>
      <Button
        type="button"
        style={{ marginLeft: '16px' }}
        onClick={e => {
          e.preventDefault();
          setShowCreateMember({ title: 'Create New Member' });
        }}
        disabled={disableCreateMember}
      >
        Create Member
      </Button>
      <Modal modal={showCreateMember} actions={{ close: closeModal }}>
        <CreateMember onSubmit={createMember} />
      </Modal>
    </form>
  );
};

export default withRouter(Home);
