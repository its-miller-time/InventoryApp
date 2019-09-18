import axios from 'axios';

export default async(dept)=>{
    console.log(`getInv-${dept}`)
    const getDiaryUrl = `${window.apiHost}/dairy-inv`
    const data = await axios.get(getDiaryUrl);
    return({
        type: `getInv-${dept}`,
        payload: data
    })
}