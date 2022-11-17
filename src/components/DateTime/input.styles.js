import { makeStyles } from '@material-ui/core'

const useInputFieldStyles = makeStyles(({ spacing }) => ({
  paper: {
    margin: spacing(0),
    border: `1px solid var(--primary-color)`,
    boxShadow: `var(--box-shadow-default)`,
    borderRadius: spacing(0),
    padding: '8px 0px',
  },
}))

export default useInputFieldStyles
