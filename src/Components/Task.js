import { FaTimes } from 'react-icons/fa'
export const Task = ({task, onDelete}) => {
  return (
    <div className='task'>
        <h3 >{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{color: 'red', cursor: 'pointer'}}/></h3>
        <p>{task.day}</p>
        <p>{task.id}</p>
    </div>
  )
}
