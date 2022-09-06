const headphones = require('../models/headphones.model');
const model = require('../models/headphones.model');

exports.getheadphonesList = (req, res) => {
    // console.log(`here all headphones list`);
    model.getAllheadphones((err, headphones) => {
        console.log('we are here')
        if (err)
            res.send(err);
        console.log('headphones', headphones)
        res.send(headphones);
    })
}

//get headphone by id

exports.getheadphoneById =(req, res)=>{
    // console.log('get emp by id');
   model.getheadphoneById(req.params.id, (err, headphone)=>{
       if(err)
       res.send(err);
       console.log('single headphone', headphone)
       res.send(headphone)
   })
}

//create new headphone

exports.createNewheadphone = (req, res)=>{
    const headphoneReqData = new model(req.body)
    console.log('headphoneReqData', headphoneReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message:'please fill all fields'});
    }else{
        model.createheadphone(headphoneReqData, (err, headphone)=>{
            if(err)
            res.send(err);
            res.json(({status: true, message: 'headphone created success', data: headphone}))
        })
    }
}

//update headphone
exports.updateheadphone = (req, res)=>{
    const headphoneReqData = new model(req.body)
    console.log('headphoneReqData update', headphoneReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message:'please fill all fields'});
    }else{
        model.updateheadphone(req.params.id, headphoneReqData, (err, headphone)=>{
            if(err)
            res.send(err);
            res.json(({status: true, message: 'headphone updated success', data: headphone}))
        })
    }

}


//delete headphone
exports.deleteheadphone = (req, res)=>{
    model.deleteheadphone(req.params.id, (err, headphone)=>{
        if(err)
        res.send(err)
        res.json({success: true, message:'headphone deleted successfully!'});
    })
}
