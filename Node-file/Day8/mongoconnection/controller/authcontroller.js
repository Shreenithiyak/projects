export const funcfirst = async (req, res) => {
    console.log('Request body:', req.body)
    res.status(200).json({
        message: 'Data received',
        data: req.body
    })
}

export const funcsec = async (req, res) => {
    const { id } = req.params
    console.log('Request params id:', id)
    res.status(200).json({
        message: 'Params received',
        id: id
    })
}
