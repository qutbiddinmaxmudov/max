import React from 'react'
import ButtonUnstyled, { ButtonUnstyledProps, buttonUnstyledClasses } from '@mui/base/ButtonUnstyled'
import { styled, Theme } from '@mui/system'

const ButtonRoot = React.forwardRef(function ButtonRoot(
  props: React.PropsWithChildren<{}>,
  ref: React.ForwardedRef<any>
) {
  const { children, ...other } = props

  return (
    <svg width="150" height="50" {...other} ref={ref}>
      <polygon points="0,50 0,0 150,0 150,50" className="bg" />
      <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
      <foreignObject x="0" y="0" width="150" height="50">
        <div className="content">{children}</div>
      </foreignObject>
    </svg>
  )
})

const blue = {
  50: 'hsl(212, 0%, 97.05882352941177%)',
  100: 'hsl(210.4918032786885, 0%, 88.0392156862745%)',
  200: 'hsl(206, 78.94736842105262%, 77.6470588235294%)',
  400: 'hsl(210, 0%, 60%)',
  500: 'hsl(210.11764705882354, 0%, 50%)',
  600: 'hsl(210.13100436681222, 0%, 44.90196078431373%)',
  800: 'hsl(210.19607843137254, 0%, 30%)',
  900: 'hsl(210.25641025641025, 0%, 22.941176470588236%)',
}

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }: { theme: Theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${theme.palette.mode === 'light' ? blue[600] : blue[100]};
  --hover-color: ${theme.palette.mode === 'light' ? blue[50] : blue[900]};
  --active-color: ${theme.palette.mode === 'light' ? blue[100] : blue[800]};

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: 2px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    outline-offset: 2px;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-size: 0.875rem;
      font-family: IBM Plex Sans, sans-serif;
      font-weight: 500;
      line-height: 1.5;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
      text-transform: uppercase;
    }

    & svg {
      margin: 0 5px;
    }
  }`
)

const SvgButton = React.forwardRef(function SvgButton(props: ButtonUnstyledProps, ref: React.ForwardedRef<any>) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />
})

export default SvgButton

// export default function UnstyledButtonCustom() {
//   return <SvgButton>Button</SvgButton>
// }
