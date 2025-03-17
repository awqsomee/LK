import { CSSObject, createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Montserrat", sans-serif;
		-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 600;
		line-height: 1.6rem;
	}

	#root {
		display: flex;
		height: 100vh;
    	height: 100svh;
   		height: 100dvh;
		overflow: hidden;
	}

	html, body {
		-webkit-overflow-scrolling: touch;
		position: relative;
		height: 100vh;
    	height: 100svh;
   		height: 100dvh;

		overflow: hidden;
	}

	@media (min-width: 1001px) {
		::-webkit-scrollbar {
			width: 14px;
		}

		::-webkit-scrollbar-track {
			background-color: transparent;
		}

		::-webkit-scrollbar-thumb {
			border-radius: 100px;
			border: 4px solid transparent;
			background-clip: content-box;
			background-color: var(--theme-mild-opposite);
		}

		::-webkit-scrollbar-thumb:hover {
			border: 3px solid transparent;
		}
	}

	h1 {
		color: var(--text-color);
	}

	a {
		text-decoration: none;
		color: var(--blue);
		
		&:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    	}

		&:focus:not(:focus-visible) {
			outline: none;
		}
	}

	@keyframes defaultFadeIn {
		0%{
			transform: translateY(20px);
			opacity: 0;
		}
		100%{
			transform: translateY(0px);
			opacity: 1;
		}
	}
`

export const pulse = ({ color, start }: { color: string; start: boolean }) => `
&::before {
    content: '';
    background: ${color};
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    position: absolute;
    inset: 0;
    animation: ${start ? 'pulse-animation 1s infinite linear' : 'none'};
}

@keyframes pulse-animation {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform:  scale(2.5);
        opacity: 0;
    }
}`

export const textEllipsis: CSSObject = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
}

export default GlobalStyles
