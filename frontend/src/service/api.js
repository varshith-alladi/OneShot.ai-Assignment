import axios from 'axios';

const API_URL = "http://localhost:8000";

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "content-type": "application/json"
    }
});

axiosInstance.interceptors.request.use(
    function(config){
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function(response){
        // stop global loader here
        return processResponse(response);
    },
    function(error){
        // stop global loader here
        return Promise.reject(processError(error));
    }
)


// ----------------------------------------------------------------------

// If success -> return {isSuccess: true, data: Object}
// If fail -> return {isFailure: true, status: string, msg: string, code: int}

const processResponse = (res) => {
    if(res?.status === 200){
        return {isSuccess: true, data: res.data}
    }
    else{
        return {
            isFailure: true, 
            status: res?.status, 
            msg: res?.msg,
            code: res?.code
        }
    }
};

const processError = () => {
    if(error.response()){
        // request made and server responded with a status other than
        // that falls out of the range 2.x.x

    }
    else if(error.request){
        // request made but no response

    }
    else{
        // something happened in setting up request that triggers an error
    }
}