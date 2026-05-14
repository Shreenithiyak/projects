// 1. functional components Rendering
 //function that return jsx to display UI
// use-------create UI components[button,navbar,]....
  function welcome(){
    return(
        <h1>hello</h1>
    )
  }
// 2. Rendering Variables
//displaying js variables inside jsx code
//use---------to show dynamic value like[username,price,count]
function app(){
    const name="hlo"
    return(
        <h1>{name}</h1>
    )
}

// 7. conditional Rendering
// displaying UI based on conditions
//use-----login/logout
// in function component using if else condition.

// 8. Ternary opeator        
//short way of writing if else inside jsx
function a(){
    return(<h1>{condition?"t":"f"}</h1>)
}

// 9. Logical && Rendering 
//show UI only when condition is true
function r(){
    return(    <>
        {condition>0 && <p>wsdfghj</p>}
        </>)
}
// 11.Nullish coalescing  - Null, undefind
//provide default value if value is null or undefined
function f(){
    return(
        <h1>{User.name??" "}</h1>
    )
}




