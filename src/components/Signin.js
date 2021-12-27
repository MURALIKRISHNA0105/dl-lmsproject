import React from 'react'

 function Signin() {
    return (
        <div class="w-screen" style={{backgroundColor:"#EBF3FE"}}>
            <div >
                <img src="./images/signup-bg.png" style={{width:950}} class="ml-52 relative top-12"></img>
        </div>
            <div class="ml-96 relative left-28 bottom-96 " style={{position:"relative",bottom:650}}>
                <img src="./images/DL-logo.png" class="w-72"></img>
            </div>
            <div class="border border-gray-300 border-solid bg-white ml-96 relative left-12" style={{width:470,height:420,position:"relative",bottom:600}}>
                <button  class=" relative left-0  w-52 p-2 bg-gray-100">SIGN UP</button>
                <button  class="font-bold ml-28 mb-12" >SIGN IN</button>
                
               
                <input type="text" placeholder="EMAIL" class="text-gray-300 text-sm  relative top-8 right-32 pl-12 "></input><br></br>
                <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-8 mb-12 mt-2 border-gray-300" style={{width:420}}></input>
                <input  type="password" placeholder="PASSWORD"  class="text-gray-300 text-sm   relative right-28 top-6"></input><br></br>
                <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-8 mt-2 border-gray-300" style={{width:420}}></input>
               
                <br></br>
                <br></br>
                <p><u>Forgot Password ?</u></p>
               <button class="border border-2 ml-3 text-white w-44 bg-blue-500 rounded-3xl p-1 mt-4">sign In</button>
                <p class="ml-6 text-gray-600 mt-2">OR</p>
                <div class="mt-2">
                <img src="./images/linkedin.png" class="w-14 ml-48"></img>
                <img src="./images/google.png" class="w-8 relative left-60 bottom-8 ml-2 "></img>
                </div>
                

            </div>
        </div>
    )
}
export default  Signin