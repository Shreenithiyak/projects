import { useEffect, useState } from "react";

const Recipe = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const fetchDataNew = await fetch("https://dummyjson.com/recipes");
      const res = await fetchDataNew.json();

      //console.log(res); 
      setData(res.recipes);
    } catch (error) {
      console.log("Something error", error);
    }
  };

useEffect(()=>{
    (async ()=>{
        fetchData()
    })()
},[])

  return (
    <>
      <h1 className="text-center text-2xl font-bold">Fetch Recipes</h1>

      <div className="bg-black p-10 flex justify-center items-center gap-5 flex-wrap">
        
        {data.length === 0 ? (
          <p className="text-white">Loading...</p>
        ) : (
          data.map((e) => (
            <div
              key={e.id}
              className="bg-amber-400 rounded-2xl flex flex-col gap-2 p-2 w-52 h-80"
            >
              <img src={e.image} className="w-full h-32 object-cover" alt="" />

              <h1 className="text-center font-bold">{e.name}</h1>
              <p className="text-center"> {e.rating}</p>
            </div>
          ))
        )}

      </div>
    </>
  );
};

export default Recipe;