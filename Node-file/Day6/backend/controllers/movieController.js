export const movieCreate = (req, res) => {
    console.log(req);

  const { id, movieName, movieCat, hero, herion } = req.body;

  try {
    const datas = [];

    const obj = { id, movieName, movieCat, hero, herion };

    datas.push(obj);

    // find movie by id
    const datanew = datas.find((e) => e.id == id);

    res.status(200).json({
      msg: "Successfully Added",
      sendData: datanew
    });
    // console.log(datanew);

  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      msg: "Something error"
    });
  }
};


export const moviegetbyParams = (req, res) => {

  const id = req.params.id;

  res.json({msg: "Params received",id: id });
//  console.log(id);
};

// GET → query
export const movieFilter = (req, res) => {

  const { movieCat } = req.query;

  res.json({msg: "Query received",category: movieCat});
// console.log(movieCat);
};

// GET → headers
export const movieToken = (req, res) => {

  const token = req.headers.authorization;

  res.json({msg: "Token received",token: token });
// console.log(token);
};