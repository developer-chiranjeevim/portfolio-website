import axios from "axios";


const postDetails = async(name, email, subject, message) => {

    try{
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`,{
            email: email,
            name: name,
            subject: subject,
            message: message
        })
        console.log("data posted successfully");
        return true;

    }catch(error){
        console.log(error.message);
        return false;
    };
};




export default postDetails;