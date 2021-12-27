const Screen24 = () => {
    return (
        <div>
            <div class="  bg-[#EBF3FE]">
                <div>
                    <img class="relative pl-96 pr-36 top-20" style={{}} src='./images/signup-bg.png' />

                </div>
                <div class="flex justify-center">
                    <img class=" absolute top-20" src='./images/DL-logo.png' />
                </div>
                <div style={{width:600,height:500 }} class=" relative left-96 bottom-96 border-2 bg-white   ">
                    <div>
                    <h1 class="text-[#515151] text-2xl text-center pt-20 pb-10">RESET YOUR PASSWORD</h1>
                    <input type="text" placeholder="NEW PASSWORD"  class="text-[#5D5D5D] text-lg  relative top-6 right-40 pl-12 " /><br></br>
                <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 mb-10 mt-2 border-gray-300 -ml-12" style={{width:420}}></input>
                <input   type="text" placeholder="CONFIRM PASSWORD" class="text-[#5D5D5D] text-lg   absolute left-16 top-64 "></input><br></br>
                <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-8 mt-2 border-gray-300 -ml-12" style={{width:420}}></input>
               
                <br></br>
                <br></br>
                <button class="border-2 bg-[#4285F2] px-12 py-2 mt-20" >Submit</button>
                   

                    </div>
                    <div>
                   
                </div>
                </div>
            </div>
        </div>
    )
}
export default Screen24