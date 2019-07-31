import styled from 'styled-components'
import PrimaryChoice from '../PrimaryChoice'

const SecondaryChoice = styled(PrimaryChoice)`
    background-color: ${p => p.checked ? 'rgb(241, 241, 253)' : 'rgb(237, 239, 241)'};
    color: black;
    text-align: center;
    font-weight: bold;
`

export default SecondaryChoice;