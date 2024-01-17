import axios from 'axios';

import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constants/config';
import { getAccessToken, getType } from '../utils/common-utils';

const API_URL = "https://oneshot-backend-h6n3.onrender.com";

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "content-type": "application/json"
    }
});

axiosInstance.interceptors.request.use(
    function(config){
        if(config.TYPE.params) {
            config.params = config.TYPE.params;
        }else if(config.TYPE.query){
            config.url = config.url + '/' + config.TYPE.query;
        }
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


// ----------------------------------------------------------------------

// If success -> return {isSuccess: true, data: Object}
// If fail -> return {isFailure: true, status: string, msg: string, code: int}

const processError = (error) => {
    if(error.response){
        // request made and server responded with a status other than
        // that falls out of the range 2.x.x
        console.log("ERROR IN RESPONSE: ", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.responseFailure,
            code: error.response.status
        }
    }
    else if(error.request){
        // request made but no response
        console.log("ERROR IN REQUEST: ", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        }
    }
    else{
        // something happened in setting up request that triggers an error
        console.log("ERROR IN NETWORK: ", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code: ""
        }
    }
}

const API = {};

for(const [key, value] of Object.entries(SERVICE_URLS)){
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: value.method === 'DELETE' ? {} : body,
            responseType: value.responseType,
            headers: {
                authorization: getAccessToken()
            },
            TYPE: getType(value, body),
            onUploadProgress: function(progressEvent){
                if(showUploadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownloadProgress: function(progressEvent){
                if(showDownloadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentageCompleted);
                }
            }
        })
}

export { API };