const Bootcamp = require('../models/Bootcamp');

// @desc   Get all bootcamps
//route     GET /api/v1/bootcamps
//@access   Public

exports.getBootcamps = (req, res, next) => {
     res.status(200).json({ suceess: true, msg: 'Show all bootcamps' });
}


// @desc   Get single bootcamp
//route     GET /api/v1/bootcamps/:id
//@access   Public

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ suceess: true, msg: `get bootcamp ${req.params.id}` });
}


// @desc   Create new bootcamp
//route     POST /api/v1/bootcamps
//@access   Private

// exports.createBootcamp = (req, res, next) => {
//     console.log(req.body);

//     res.status(200).json({success: true, msg: 'Create new bootcamp'})
// };
// THE ERROR MESSAGE COMES FROM THIS CODE BLOCK !!
exports.createBootcamp = async (req, res, next) => {
   const bootcamp = await Bootcamp.create(req.body);

   res.status(201).json({
    succeess: true,
    data: bootcamp
   });
};


// @desc   Update bootcamp
//route     PUT /api/v1/bootcamps/:id
//@access   Private

exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ suceess: true, msg: `Update bootcamp ${req.params.id}` });
}


// @desc   Delete bootcamp
//route     DELETE /api/v1/bootcamps/:id
//@access   Private

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ suceess: true, msg: `Delete bootcamp ${req.params.id}` });
}