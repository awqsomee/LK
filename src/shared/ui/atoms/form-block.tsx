import styled from 'styled-components'

const FormBlockWrapper = styled.div<{ maxWidth?: string; noHeader?: boolean }>`
    position: relative;
    width: 100%;
    height: fit-content;
    max-width: ${({ maxWidth }) => maxWidth ?? '700px'};
    padding: 20px;
    border-radius: var(--brLight);
    background: var(--block);
    box-shadow: var(--block-shadow);
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    // TODO: delete this line but all applications pages must be with 'hiddenTitle'
    // attribute (or another hidden title solution)
    padding-top: ${({ noHeader }) => (noHeader ? '20px' : '80px')};

    @media (max-width: 1000px) {
        box-shadow: none;
        padding: 10px 0px;
        background: transparent;
    }
`

export default FormBlockWrapper
