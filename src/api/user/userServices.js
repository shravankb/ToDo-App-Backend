const userDal = require('./userDal');

signIn = async(body)=>{
    try {
        console.log(body)
        let googleToken = body.googleToken;
            let googleData = googleToken.split('.');
            let decodedData = Buffer.from(googleData[1],'base64').toString('ascii');
            console.log(decodedData)
            let user={
                email: decodedData.email,
                name: decodedData.name
            }
            user = await userDal.createUser(user);

        return user;


    } catch (error) {
        throw error;
    }
}

module.exports= {signIn}