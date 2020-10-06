const mongoose= require ('mongoose');

connectToDb =async(url)=>{
try {
    await mongoose.connect(url, {useNewUrlParser :true, useUnifiedTopology:true})

} catch (error) {
    throw error
}
}

module.exports = {connectToDb};