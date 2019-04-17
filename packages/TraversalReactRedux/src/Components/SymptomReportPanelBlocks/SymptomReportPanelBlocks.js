import styled from 'styled-components'
import posed from 'react-pose'

const PosedBlocks = posed.div({
    enter: {
        staggerChildren: 200,
        delayChildren: 200
    }
})

export default styled(PosedBlocks)`
    margin: 0 -10px;
`