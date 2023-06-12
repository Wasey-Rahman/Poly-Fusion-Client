import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const UseData = () => {
    const {user}=useContext(AuthContext);
    const token=localStorage.getItem('access-token')
    const [axiosSecure]=useAxiosSecure()
    const {refetch,data: record=[]}=useQuery({
        queryKey:['Data',user?.email],
        // queryFn:async()=>{
        //     const res=await fetch(`  https://poly-fusion-server.vercel.app/Data?email=${user?.email}`)
        //     return res.json();
        // }
        queryFn:async()=>{
            const res=await axiosSecure.get(`/Data?email=${user?.email}`)
            return res.data;
        }
    })
    return [record,refetch]
    
};

export default UseData;