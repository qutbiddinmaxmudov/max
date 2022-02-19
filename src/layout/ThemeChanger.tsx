import { makeStyles } from '@mui/styles'
import React, { useContext } from 'react'
import { AppContext } from '../../pages/_app'

const styles = makeStyles({
  switch: {
    lineHeight: 0,
  },
  toggle: {
    ['--size']: '1.8rem',
    ['-webkit-appearance']: 'none',
    ['-moz-appearance']: 'none',
    appearance: 'none',
    outline: 'none',
    cursor: 'pointer',
    width: 'var(--size)',
    height: 'var(--size)',
    boxShadow: 'inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0',
    color: '#000000',
    borderRadius: '999px',
    transition: ' all 500ms',
    zIndex: 1,
    ['&:checked']: {
      ['--ray-size']: 'calc(var(--size) * -0.4)',
      ['--offset-orthogonal']: 'calc(var(--size) * 0.65)',
      ['--offset-diagonal']: 'calc(var(--size) * 0.45)',
      transform: 'scale(0.75)',
      color: '#ffaa00',
      boxShadow:
        'inset 0 0 0 var(--size), calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size), var(--offset-orthogonal) 0 0 var(--ray-size), 0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size), 0 var(--offset-orthogonal) 0 var(--ray-size), calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0 var(--ray-size), var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size), calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size), var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size)',
    },
  },
})

const ThemeChanger = () => {
  const context = useContext(AppContext)
  const classes = styles()

  return (
    <div className={classes.switch}>
      <input
        onChange={context?.changeTheme}
        className={classes.toggle}
        type="checkbox"
        checked={context?.theme === 'dark'}
      />
    </div>
  )
}

export default ThemeChanger
