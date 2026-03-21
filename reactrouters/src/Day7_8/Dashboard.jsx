

const Dashboard = () => {

  const products = [
    {id:1,name:"Laptop"},
    {id:2,name:"Mobile"},
    {id:3,name:"Headphones"}
  ]

  return (
    <>

      <div className="p-10">

        <h1 className="text-2xl font-bold mb-6">
          Product Details
        </h1>

        <div className="grid grid-cols-3 gap-6">

          {products.map((p)=>(
            <div key={p.id} className="border p-6 shadow">
              <h2>{p.name}</h2>
            </div>
          ))}

        </div>

      </div>
    </>
  )
}

export default Dashboard