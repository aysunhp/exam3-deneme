const User=require("./../model/userModel.js")

const getData=async(req, res)=>{
    const allData= await User.find({})
    res.send(allData)
}

const postData=async(req, res)=>{
    const newData=  User(req.body)
newData.save()
    res.send(newData)
}

const deleteData=async(req, res)=>{
    const deletedData= await User.findByIdAndDelete({_id:req.params.id})
    res.send(deletedData)
}

module.exports={getData,postData,deleteData}