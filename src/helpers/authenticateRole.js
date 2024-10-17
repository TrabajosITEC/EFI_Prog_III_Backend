export const authenticateRole = async(req, res, next) => {
  const isAdminUser = req.user.role === 'admin' ? true : false;

  console.log(req.user);
 
  if(!isAdminUser){
    return res.status(405).json({ message: 'Permiso denegado.' });
  
  }else{
    next();
    return true;
  
  };

};
