const Schemes = require('./scheme-model.js')
const db = require('../../data/db-config')
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
 try{
   const existing = await db('schemes')
    .where('scheme_id', req.params.scheme_id)
    .first()

    if(!existing){
      next({
        status:404,
        message:`scheme with scheme_id ${req.params.scheme_id} not found`
      })
    }
    else{
      next()
    }
 }
 catch(err){
   next(err)
 }
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = async (req, res, next) => {
  
  try{
    const name = req.body.scheme_name
 
     if(!name){
       next({
         status:400,
         message:`invalid scheme_name`
       })
     }
     else if(typeof(name)!=='string'){
      next({
        status:400,
        message:`invalid scheme_name`
      })
     }
     else{
       next()
     }
  }
  catch(err){
    next(err)
  }
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = async (req, res, next) => {
  try{
    const instructions = req.body.instructions
    const step_number = req.body.step_number
 
     if(!instructions){
       next({
         status:400,
         message:`invalid step`
       })
     }
     else if(typeof(instructions)!=='string'){
      next({
        status:400,
        message:`invalid step`
      })
     }
     else if(typeof(step_number)!=='number'){
      next({
        status:400,
        message:`invalid step`
      })
     }
     else if(step_number < 1){
      next({
        status:400,
        message:`invalid step`
      })
     }
     else{
       next()
     }
  }
  catch(err){
    next(err)
  }
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
