 const isNoContact = (req,res,next)=>{
    console.log("res",res);
    return next();
}
export default isNoContact;