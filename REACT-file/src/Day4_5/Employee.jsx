const Employee = ({data}) => {
  return (
    <div>
      {data.map((e,i)=>(
        <div key={i}>
          <p>{e.name}</p>
          <p>{e.role}</p>
          <p>{e.location}</p>
        </div>
      ))}
    </div>
  )
}

export default Employee