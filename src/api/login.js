import axios from 'axios';

const loginAPI = (email,password) =>{
    return axios.get(
        'http://localhost:5000/login'+email+'$password='+password
    ).then((response)=>{
        console.log(response)
        return {data:'some error occured'};
    });
};

export default loginAPI;