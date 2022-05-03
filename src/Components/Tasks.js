const tasks = [
{
    id: 3,
    text: 'food shopping',
    day: 'Feb 6th',
    reminder: true,
},
]
export const Tasks = () => {
  return (
    <>
    {tasks.map((task) => (
        <h3>{task.text}</h3>
    ))}
    </>
  )
}
