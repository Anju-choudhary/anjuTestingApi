const Product = require("../model/product")

const getAllProducts = async(req,res) => {
    const {company, name, sort, select} = req.query;
    const queryObject = {};
    
    if(company){
        queryObject.company = company
    }
    if(name){
        queryObject.name = { $regex:name, $options:"i"}
    }

    let apiData = Product.find(queryObject);
    if(sort){
        let sortFix = sort.replace(',', ' ');
        apiData  = apiData.sort(sortFix)
    }

    if(select){
        let selectFix = select.split(',').join(' ');
        apiData  = apiData.select(selectFix)
    }
    //const totalHits = await Product.countDocuments(queryObject);

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit)
    console.log(queryObject)
    const myData = await  apiData;
    res.status(200).json({myData, nbHits:myData.length})
};

const getAllProductsByTesting = async(req,res) => {
    const queryData = await Product.find(req.query).sort('-name'); // for filtering ?key=value // asc or (-)des
    res.status(200).json({queryData})
}    


module.exports = {getAllProducts, getAllProductsByTesting}