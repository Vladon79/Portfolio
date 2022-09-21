import aws from "aws-sdk"
import dotenv from "dotenv"
dotenv.config()

const awsConfig = {
    accessKeyId: "AKIAX23ZYPPEO7HMQAPN",
    secretAccessKey: "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",
    region: "eu-central-1"
}

const ses = new aws.SES(awsConfig)

export const sendMessage = async (email, message, name) =>{
    console.log(email, message, name)
    // const data = JSON.parse(req.body)
    // if(!data.email){
    //     return res.status(400).json({message: "Missing email address!!!"})
    // }
    // if(!data.headerMessage){
    //     return res.status(400).json({message: "Missing header message"})
    // }
    // if(!data.message){
    //     return res.status(400).json({message: "Missing message"})
    // }
    const params = {
        Destination:{
            ToAddresses:["vla3ik@gmail.com"]
        },
        Message:{
            Subject:{
                Data: `Portfolio message!!!`
            },
            Body:{
                Text:{
                    Data:`Name ${name}, Email ${email}. Message: ${message}`
                }
            }
        },
        Source:"vla3ik@gmail.com"
    }

    try {
        await ses.sendEmail(params).promise()
        console.log("ok")
        return{message:"Message has been sent"}
    }catch (err) {
        console.log("not", err)
        return {error:err}
    }
}