import React, { useCallback, useState } from "react";


type userData={
    account:string,
    pw:string,
    age:string,
    name:string,
    image:string
}
const userData:userData={
    account:'',
    pw:'',
    age:'',
    name:'',
    image:''
}
const user = {...userData}
export const useLog=()=>{
   
   const setAccount = (account:string) =>{
        user.account=account
        console.log('user',user)
        console.log('userData',userData)
   }
   const setPw = (pw:string) => {
    user.pw=pw
    console.log('user',user)
    console.log('userData',userData)
   }
   const setAge = (age:string) => {
    user.age=age
    console.log('user',user)
    console.log('userData',userData)
   }
   const setName =(name:string) => {
    user.name=name
    console.log('user',user)
    console.log('userData',userData)
   }
   const setImage = (image:string) => {
    user.image=image
    console.log('user',user)
    console.log('userData',userData)
    onPressSubmit()
   }
   const onPressSubmit =()=>{
    
    /*
        axiox로 서버에 포스트 필요 가공된 데이터
        포스트 정상적 성공시 데이터 초기화등 순서 진행
    */
    user.account=''
    user.age=''
    user.name=''
    user.pw=''
    user.image =''
   }
    return{
        setAccount,
        setAge,
        setImage,
        setName,
        setPw,
        onPressSubmit
    }

}
