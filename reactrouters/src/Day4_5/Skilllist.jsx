const Skilllist = ({list}) => {
  return (
    <div>
      {list.map((e,i)=>(
        <div key={i}>
          <p>{e.name}</p>
          <ul>
            {e.skill.map((s)=>(
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Skilllist