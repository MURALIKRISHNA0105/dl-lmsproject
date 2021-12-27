import React from 'react'

 function Signup() {
    return (
        <div class="w-screen" style={{backgroundColor:"#EBF3FE"}}>
            <div >
                <img src="./images/signup-bg.png" style={{width:950}} class="ml-52 relative top-12"></img>
        </div>
            <div class="ml-96 relative left-28 bottom-96 " style={{position:"relative",bottom:650}}>
                <img src="./images/DL-logo.png" class="w-72"></img>
            </div>
            <div class="border border-gray-300 border-solid bg-white ml-96 relative left-12" style={{width:470,height:420,position:"relative",bottom:600}}>
                <button class="font-bold ml-28">SIGN UP</button>
                <button class="ml-24  w-48 p-2 bg-gray-100">SIGN IN</button>
                <input type="text" placeholder='FIRST NAME' class="text-gray-300 float-left text-sm ml-10 relative top-10"></input>
                <input  type="text" placeholder='LAST NAME' class="text-gray-300 float-right text-sm ml-40 relative top-6"></input><br></br>
                <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-8 mt-2 border-gray-300"></input>
                <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-12 mt-2 border-gray-300"></input><br></br>
                <input type="text" placeholder='EMAIL' class="text-gray-300 text-sm  relative mr-56 top-8" ></input><br></br>
                <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-8 mt-2 border-gray-300" style={{width:420}}></input>
                <input type="text" placeholder='MOBILE' class="text-gray-300 text-sm relative mr-56 top-6"></input><br></br>
                <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-8 mt-2 border-gray-300" style={{width:420}}></input>
                <input type="password" placeholder='PASSWORD' class="text-gray-300 float-left text-sm ml-10 relative top-10"></input>
                <input  type="password" placeholder='CONFIRM PASSWORD' class="text-gray-300 float-right text-sm ml-40 relative top-6"></input><br></br>
                <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-8 mt-2 border-gray-300"></input>
                <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-12 mt-2 border-gray-300"></input><br></br>
                <button class="border border-2 ml-8 text-white w-32 bg-blue-500 rounded-3xl p-1 mt-2">sign up</button>
                <p class="ml-10 text-gray-300 mt-2">OR</p>
                <div class="mt-2">
                <img src="./images/linkedin.png" class="w-14 ml-48"></img>
                <img src="./images/google.png" class="w-8 relative left-60 bottom-8 ml-2 "></img>
                </div>
                

            </div>
        </div>
    )
}
export default  Signup