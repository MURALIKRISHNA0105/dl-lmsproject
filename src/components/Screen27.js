import { BiTime } from 'react-icons/bi';
import { VscArrowSmallLeft } from 'react-icons/vsc';
import { BsCheckCircleFill } from 'react-icons/bs';


const Screen27 = () => {
    return (
        <div>
            <div class="flex flex-col">
                <div class="display-x">
                    <div class="float-left">
                        <img class="mt-4 ml-10" src='./images/DL-logo.png' />
                    </div>
                    <div class="float-right ">
                        <ul >
                            <li class="inline-block   text-sm absolute mt-14 right-48  "><u>My Class Room</u></li>
                            <li class="inline-block relative pl-10 mt-12"><img src="./images/bellicon.png" /></li>
                            <li class="inline-block relative pl-10 mt-12 pr-10"><img src="./images/user.png" /></li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="mt-12 border-2 bg-[#EBF3FE] py-4">
                <ul>
                    <li class="inline-block relative right-96"><BiTime size={40} color='gray' /> </li>
                    <li class="inline-block relative right-96 pl-4 bottom-3"><p class=" text-[#656565] text-xl ">Your Upcoming Class at 28-04-20 IST 5:30pm</p></li>
                    <li class="inline-block absolute right-36" ><button class="border-2 bg-[#4285F2] py-2 px-10 text-white">Join Class</button></li>
                </ul>
            </div>
            <div class="mt-12">
                <VscArrowSmallLeft size='60' color='gray' class="ml-10 absolute mt-1 top-72" />
                <p class="text-[#595959] text-2xl absolute left-28 bottom-72  ">Assisments</p>

            </div>

            <div class="mt-28  ">
                <p class="text-[#C2C2C2] text-md absolute ml-24 mt-10 font-bold">Results:</p>
                <hr class="border-gray border-thin"></hr>

            </div>
            <div class=" flex flex-col  ">

                <div class="mt-32 float-left ">
                    <p class="text-[#636363] text-md  relative float-left relative left-32 bottom-12">Question 1: </p>
                    <p class="text-[#636363] text-md font-bold relative float-left bottom-4  left-12 ">A front-end developer works with languages and framework</p>
                    <p class="text-[#636363] text-md absolute float-left left-28 ml-3 bottom-24 "><BsCheckCircleFill color='green' size='25' class='  relative float-left mr-4  ' />HTML,CSS and Javascript</p>

                </div>
                <hr class="border-gray-400  border-thin relative top-16 ml-24 mr-60"></hr>
                <div class="mt-32 float-left  ">
                    <p class="text-[#636363] text-md  relative float-left relative left-32 bottom-12">Question 2: </p>
                    <p class="text-[#636363] text-md font-bold relative float-left bottom-4  left-12 ">A front-end developer works with languages and framework</p>
                    <p class="text-[#636363] text-md  relative float-left -bottom-5 " style={{ right: 415 }}><BsCheckCircleFill color='green' size='25' class='  relative float-left mr-4  ' />HTML,CSS and Javascript</p>
                    <p class="text-[#636363] text-md  relative float-left  -bottom-16 " style={{ right: 632 }}><BsCheckCircleFill color='green' size='25' class='  relative float-left mr-4  ' />HTML,CSS and Bootstrap</p>

                </div>


            </div>
            <div class='float-right mt-20'>
                
                <button class="border-2 bg-[#097BDF] px-8 py-2 text-white inline-block mr-10">Continue to next module</button>

            </div>
            <div class="mt-48  absolute left-16">
                <ul class="text-[#606060]">
                    <li class="inline-block pr-10">Course Info</li>
                    <li class="inline-block pr-10">Resources</li>
                    <li class="inline-block pr-10">Assisments</li>
                    <li class="inline-block pr-10">Projects</li>
                    <li class="inline-block pr-10">Discuss</li>
                    <li class="inline-block pr-10">Feedback</li>
                </ul> 
                
            </div>
            <div class="  relative  divide-y   border-2  border-[#606060]" style={{top:240}}>

            </div>
           
            <div class="mt-80  ">
           
                <div>
                <h1 class="text[#4E4E4E] text-2xl mb-5 relative float-left ml-14">About This Course</h1>
                </div>
                <div class=" float-left mt-16  mb-48 ">
                   
                <ul class="text-[#4E4E4E] " >
                    <li class=" relative"  style={{ right:180}} >Course Name: UI/UX</li>
                    <hr class=" relative " style={{right:170,top:10,bottom:10}}></hr>
                    <li  class=" relative mb-2 mt-2"  style={{ right:164,top:10 ,bottom:10}}>Start Course: 28-04-2020</li>
                    <hr class=" relative " style={{right:170 ,top:10,bottom:10}}></hr>
                    <li   class=" relative  mb-2 mt-2"  style={{ right:200,top:10 ,bottom:10}}>Duration: 20hr</li>
                    <hr class=" relative " style={{right:170,top:10,bottom:10}}></hr>
                    <li  class=" relative  mb-2 mt-2"  style={{ right:208,top:10 ,bottom:10}}>Modules: 10</li>
                    <hr class=" relative " style={{right:170,top:10,bottom:10}}></hr>
                    <li  class=" relative  mb-2 mt-2"  style={{ right:190,top:10 ,bottom:10}}>Prerequisities: No</li>
                    <hr class=" relative " style={{right:170,top:10,bottom:10}}></hr>
                    <li  class=" relative  mb-2 mt-2"  style={{ right:182,top:10 ,bottom:10}}>Skill Level: Beginner</li>
                    
                </ul>
               
                </div>
            </div>
          
           
        </div>
    )
}
export default Screen27