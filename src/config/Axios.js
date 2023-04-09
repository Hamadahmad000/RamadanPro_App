// http://api.alquran.cloud/v1/juz/30/quran-uthmani
// http://api.alquran.cloud/v1/quran/ar.alafasy     // Full Quran


import axios from "axios";
const GetData = async(url) =>{
    try {
        const res = await axios.get(url)
       
        return res
    } catch (error) {
        console.log(error);
    }
}
export {GetData}