import React from 'react'

function Screen8() {
    return (
        <div style={{ backgroundColor: "#EBF3FE",width:'100%'}}>
            <div >
                <img src="./images/screen8.png" style={{ width: 950 }} class="ml-60 relative top-4"></img>
            </div>
            <div class="ml-96 relative left-28 bottom-96 " style={{ position: "relative", bottom: 650 }}>
                <img src="./images/DL-logo.png" class="w-72"></img>
            </div>
            <div class="border border-gray-300 border-solid bg-white ml-96 relative left-12" style={{ width: 600, height: 420, position: "relative", bottom: 600 }}>
                <h1 class="font-bold pt-20 pb-10">RESET YOUR PASSWORD</h1>
                <p class="text-left text-md px-10 mb-10">Please provide the email address you used ehen you signed up <br></br>for your OS acad account</p>
                <input type="text" placeholder="EMAIL ADDRESS" class="text-gray-300 text-sm float-left ml-16 " /> <br></br>
                <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 border-gray-300 float-left ml-16 -mt-2 " style={{ width: 420 }} ></input>

                <button class="border border-2 ml-8 text-white bg-blue-500 rounded-3xl px-8 py-2 mt-20">SEND EMAIL</button>



            </div>
        </div>
    )
}
export default Screen8