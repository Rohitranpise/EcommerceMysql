const res = require('express/lib/response');
let dbConn = require('../../config/config')
let headphones = function(headphone){
    this.comp_name = headphone.comp_name;
    this.description = headphone.description;
    this.category = headphone.category;
    this.Instock = headphone.Instock;
    this.price = headphone.price;
}

//get all headphones
headphones.getAllheadphones = (result) => {
    dbConn.query(`SELECT * FROM headphones`, (err, res) => {
        if (err) {
            console.log('error while fetching headphones', err);
            result(null, err);
        } else {
            console.log('headphones fetch success');
            result(null, res)
        }
    })
}

//get headphone by id
headphones.getheadphoneById = (id, result) => {
    dbConn.query(`SELECT * FROM headphones WHERE id =?`, id, (err, res) => {
        if (err) {
            console.log('error while fetching', err);
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

//create new headphone
headphones.createheadphone = (headphoneReqData, result)=>{
    dbConn.query(`INSERT INTO headphones SET ?`, headphoneReqData, (err, res)=>{
        if(err){
            console.log('error while inserting data');
            result(null, err)
        }else{
            console.log('headphone created successful')
            result(null, res)
        }
    })
}

//update headphone
headphones.updateheadphone = (id, headphoneReqData, result)=>{
    dbConn.query("UPDATE headphones SET comp_name=?, description=?, category=?, Instock=?, price=? WHERE id =?", [headphoneReqData.comp_name, headphoneReqData.description, headphoneReqData.category, headphoneReqData.Instock, headphoneReqData.price, id],
    (err, res)=>{
        if(err){
        console.log('error while updating')
        result(null, Error)
        }else{
            console.log('headphone updated!')
            result(null, res)
        }
    })
}

//delete headphone
headphones.deleteheadphone = (id, result)=>{
dbConn.query(`DELETE from headphones where id = ?`, id, (err, res)=>{
    if(err){
        console.log('error while deleteing the headphone');
        result(null, err);
    }else{
        console.log('headphone deleted success')
        result(null, res);
    }
})
}

module.exports = headphones;