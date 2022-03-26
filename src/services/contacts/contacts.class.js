const { Service } = require('feathers-mongoose');

exports.Contacts = class Contacts extends Service {
    create(data, params){
        const { name, mobileNumber } = data;
        const user = params.user;
        return super.create({mobileNumber, name, creator: user._id}, params)

    }

};
