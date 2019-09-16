import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as actions from '../../Actions'
import ChatComponent from '../../ComponentModules/Chat'
import Conclusions from '../../ComponentModules/Conclusions';

const Container = styled.div`
    box-sizing: border-box;
    padding: 0 10px;
`

const Chat = ({ traversal, match, dispatch }) => {
    const { id } = match.params;
    useEffect(() => { dispatch(actions.traversalContinue(id)) }, [id]);

    if (!traversal) {
        return null;
    }

    if (traversal.completed) {
        return <Conclusions traversalId={id} assessmentType={traversal.assessmentType} />;
    }

    return (<Container>
        <ChatComponent
            traversal={traversal}
            next={traversal => dispatch(actions.traversalNext(traversal))}
            previous={(traversalId, algoId, nodeId, assetId) => dispatch(actions.traversalPrevious(traversalId, algoId, nodeId, assetId))}
            showExplanation={explanation => dispatch(actions.populateModal(explanation))} />
    </Container>)
}

const mapStateToProps = state => ({ traversal: state.traversal })

export default connect(mapStateToProps)(Chat)