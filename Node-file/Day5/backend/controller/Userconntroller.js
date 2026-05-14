export const getUsers = async(req, res) => {
    try {
        res.json({message: "API is working"})
    } catch (error) {
        console.log(`msg:something went wrong`, error)
    }
}


export const createUser = async(req, res) => {
   const data = req.body
    try {        
      res.json({data})
    } catch (error) {
        console.log(`msg:something went wrong`, error)
    }
}

export const getUserById = async(req, res) => {
   const id = req.params.id
    try {        
      res.json({id})
    } catch (error) {
        console.log(`msg:something went wrong`, error)
    }
}