import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const UseData = () => {
    const {user}=useContext(AuthContext);
    const {refetch,data: record=[]}=useQuery({
        queryKey:['Data',user?.email],
        queryFn:async()=>{
            const res=await fetch(`  https://poly-fusion-server.vercel.app/Data?email=${user?.email}`)
            return res.json();
        }
    })
    return [record,refetch]
    
};

export default UseData;