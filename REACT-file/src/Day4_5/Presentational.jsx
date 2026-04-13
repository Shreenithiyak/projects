
const Presentational = ({passdata}) => {
  return (
    <div>
      {passdata.map((e,i)=>(
        <div key={i}>
          <p>{e.id}</p>
          <p>{e.name}</p>
          <p>{e.age}</p>
        </div>
      ))}
    </div>
  )
}

export default Presentational