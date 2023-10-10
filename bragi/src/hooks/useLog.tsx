import { userForm } from "../@types/dataType";
import { client } from "../services/client";



const userData:userForm={
    account:'',
    pw:'',
    age:'',
    name:'',
    image:''
}
const user = {...userData}
export const useLog=()=>{
    const{
        SIGNIN_POST,
        SIGNUP_POST
    }=client()
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
   const onPressSubmit =async()=>{
        
    /*
        axiox로 서버에 포스트 필요 가공된 데이터
        포스트 정상적 성공시 데이터 초기화등 순서 진행
    */
    const postData ={
        "account":user.account,
        "password":user.pw,
        "name":user.name,
        "age":user.age
    }
    const reult = await SIGNUP_POST(postData)
    if(reult.data.status){
        user.account=''
        user.age=''
        user.name=''
        user.pw=''
        user.image =''
        console.log('dataclear',user)
    }
    else{
        console.log('???')
    }
       
   
   }
   type props={id:string,pw:string}
   const onPressLogin = ({id,pw}:props) => {
        //post
        const postData = {
            "account":id,
            "password":pw
        }
        SIGNIN_POST(postData)
        return true
       
   }
    return{
        setAccount,
        setAge,
        setImage,
        setName,
        setPw,
        onPressSubmit,
        onPressLogin,
    }

}
