import { baseUrl } from "./constant"
import axios from "axios"

export const formatPrice = (number) => {
    return new Intl.NumberFormat("en-NG", {
        style: 'currency',
        currency: "NGN"
    }).format(number)
}

export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type])
    if(type === 'sizes') {
        unique =  unique.flat()
    }
    if(type === 'category') {
        unique = [ 'all', ...new Set(unique.map(item => item.name))]
    }
    if(type === 'brand') {
        unique = [ 'all', ...new Set(unique.map(item => item))]
    }
    return [ ...new Set(unique)]
}

// Post
export const  AuthData = async ( url , payloads ) => {
    
    return await axios.post(`${baseUrl}${url}` , payloads, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('user_token')}`
        }
    } )

}

// Put
export const  PutRequest = async ( url , payloads ) => {
    
    return await axios.put(`${baseUrl}${url}` , payloads, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('user_token')}`
        }
    } )

}
