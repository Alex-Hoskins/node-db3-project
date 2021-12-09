const Schemes = require('./scheme-model.js')
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  // try{
  //   const idMatch = await Schemes.getSchemeIds(req.params.scheme_id)
  // console.log('from mw', idMatch)
  // if (idMatch.scheme_id > 0) {
  //   next()
  // } else {
  //   next({ message: `scheme with scheme_id ${req.params.scheme_id} not found`, status: 404 })
  // }
  // }catch(err){
  //   next(err)
  // }
  next()
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = async (req, res, next) => {
  next()
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
  next()
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
