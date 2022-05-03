import PropTypes from 'prop-types'
import { Button } from './Button'

export const Header = ({title}) => {
  const onClick = () => {
    console.log('click?')
  }

  return (
    <header>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}></Button>

    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}