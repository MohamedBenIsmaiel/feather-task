// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (isAdmin) => {
  return async context => {
    /*
      in signup api , user shouldn't be able to define him self as an admin 
      by send isAdmin = true in the request body
    */
    if (!isAdmin){ 
      context.data.isAdmin = false
      return context;
    }

    context.data.isAdmin = true;
    return context;
  };
};
