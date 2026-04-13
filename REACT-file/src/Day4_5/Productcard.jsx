const Productcard = ({transfer}) => {
  return (
    <div>
      {transfer.map((e,i)=>(
        <div key={i}>
          <p>{e.id}</p>
          <p>{e.productname}</p>
          <p>{e.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Productcard