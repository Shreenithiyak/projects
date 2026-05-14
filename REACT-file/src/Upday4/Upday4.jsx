
const Upday4 = () => {
  return (
    <>
    <button className=" text-black text-2xl ml-250 px-4 py-2" onClick={()=>window.location.href="/updatephase"}>Back</button>
 <div className="justify-center items-center ml-100  text-2xl ">
<div className="justify-between">
           <p>what is UseEffect ?<br/>
          useEffect is a React Hook used to handle side effects in your component.
          👉 Side effects = things that happen outside rendering UI
       </p>

</div>
<div className="mt-9">
           <p>What is Dependance array ?<br/>
         It is an array of values that useEffect watches
       👉 Dependency array = “When should this effect run?”
       </p>
</div>

<div className="mt-9">
           <p>what is without depandance ?<br/>
       👉 No dependency array = React doesn't control it → runs every time
       </p>
</div>

<div className="mt-9">
           <p>what is fetch ? <br/>
       fetch is a JavaScript function used to get data from an API (server)
       👉 fetch = “go to server and bring data” 🌐
       </p>
</div>
    
 </div>

    </>
  )
}

export default Upday4