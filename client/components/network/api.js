const API = {
   getCompanyList: (serverUrl, cb)=>{
    fetch(
            [serverUrl, "companies"].join(''),
            {mode: 'cors'}
      ).then((res)=>res.json())
      .then((data)=>{
         cb(data)             
      })
      .catch((err)=>{
         throw err
      });
    },
   getRelationships:(serverUrl, cb)=>{
      fetch(
           [serverUrl, "companies/relationships"].join(''),
           {mode: 'cors'}
      ).then((res)=>{
         return res.json()
      })
      .then((data)=>{
         console.log(data);
         cb(data)
      })
      .catch((err)=>{
         throw err
      })
   }
}
export default API;
