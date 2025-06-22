import React from 'react'

import styled from 'styled-components'

const gradients = {
    rainbow: 'linear-gradient(90deg, #3ed485 0%, #56a6c4 28%, #5e6cea 53%, #ba64bb 76.5%, #f0636b 99%)',
    darkRed: 'linear-gradient(90deg, #0d4552 0%, #612128 51.5%, #df3b3b 100%)',
    darkBlue: 'linear-gradient(270deg, #243766, #4657b9, #46a4b9, #5d46b9)',
    darkGreen: 'linear-gradient(270deg, #246655, #46b99b, #46a4b9)',
    green: 'linear-gradient(90deg, #144379 0%, #1b8198 49%, #116f63 100%)',
    default: 'linear-gradient(90deg, #34aaff 0%, #19e0b0 53%, #1bef89 100%)',
    lightGreen: 'linear-gradient( 270deg, #5f6dec 0%, #19e0b0 66%, #1bef89 100%)',
    insta: 'linear-gradient(90deg, #ce42ff 0%, #ff6176 53.5%, #ffa41d 100%)',
    pink: 'linear-gradient(90deg, #b0aeff 0%, #e987d2 50%, #f58290 100%)',
}

type Gradient = keyof typeof gradients
type Props = {
    onClick: () => void
    children: React.ReactNode
    show: boolean
} & ButtonProps

type ButtonProps = { hasBorder?: boolean; height?: string; padding?: string; maw?: string; gradient?: Gradient }

export const BrightPlate = ({ onClick, children, show, gradient = 'default', ...props }: Props) => {
    if (!show) return null
    return (
        <Layout onClick={onClick} gradient={gradient} {...props}>
            {children}
        </Layout>
    )
}

const Layout = styled.button<ButtonProps>`
    border: none;
    display: flex;
    cursor: pointer;
    place-content: center;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    max-width: ${({ maw }) => maw ?? '750px'};
    border-radius: var(--brLight);
    background: var(--block);
    box-shadow: var(--very-mild-shadow);
    overflow-y: hidden;
    height: ${({ height }) => height ?? '75px'};
    padding: ${({ padding }) => padding};
    background: ${({ gradient }) => gradient && gradients[gradient]};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 12px;
    text-align: center;

    color: #ffffff;
`
