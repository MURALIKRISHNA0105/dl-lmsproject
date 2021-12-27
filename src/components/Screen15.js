import { BiTime } from 'react-icons/bi';
import { VscArrowSmallLeft } from 'react-icons/vsc';
import { BsCheckCircleFill } from 'react-icons/bs';
import { BsXCircleFill } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { BiPlayCircle } from 'react-icons/bi';
import { BsRecordCircle } from 'react-icons/bs';
import { RiDownload2Fill } from 'react-icons/ri';
const Screen15 = () => {
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
            <p class="text-left mt-10 mb-10 ml-20">Recorded Classes</p>
            <div class="float-left ml-20 border-2 border-[#EFEFEF] relative opacity-80 pl-10 pr-20 py-5 mb-36 overflow-y-scroll ">
                <ul>
                    <li><h1 class="text-[#000000] text-lg font-bold ">Module 1: UI Design</h1></li>


                    <li class="opacity-80 "><BiPlayCircle class="inline-block mr-2" /> 1. Lorem ipsum dolor sit </li>


                    <li><BiPlayCircle class="inline-block mr-2" />1. Lorem ipsum dolor sit </li>
                    <li><BiPlayCircle class="inline-block mr-2" />1. Lorem ipsum dolor sit </li>
                    <li><BiPlayCircle class="inline-block mr-2" />1. Lorem ipsum dolor sit </li>
                    <li><h1 class="text-[#000000] text-lg font-bold border-2 border-gray bg-gray-300  ">Module 2: UX Design</h1></li>
                    <li><BiPlayCircle class="inline-block mr-2" />1. Lorem ipsum dolor sit </li>
                    <li><BiPlayCircle class="inline-block mr-2" />1. Lorem ipsum dolor sit </li>
                    <li><BiPlayCircle class="inline-block mr-2" />1. Lorem ipsum dolor sit </li>
                    <li><BiPlayCircle class="inline-block mr-2" />1. Lorem ipsum dolor sit </li>
                    <li><h1 class="text-[#000000] text-lg font-bold ">Module 3: UX Design</h1></li>
                    <li><h1 class="text-[#000000] text-lg font-bold ">Module 4: UX Design</h1></li>



                </ul>

            </div>
            <div class="float-right relative mr-72">
                <img src='./images/video.png' />
            </div>


            <div class=" relative top-24 " style={{ right: 450 }}>
                <ul class="text-[#606060]">
                    <li class="inline-block pr-10">Course Info</li>
                    <li class="inline-block pr-10">Resources</li>
                    <li class="inline-block pr-10">Assisments</li>
                    <li class="inline-block pr-10">Projects</li>
                    <li class="inline-block pr-10">Discuss</li>
                    <li class="inline-block pr-10">Feedback</li>
                </ul>

            </div>
            <div class="  relative  divide-y   border-2  border-[#606060]" style={{ top: 100 }}>

            </div>
            <div >
                <div>
                    <h1 class="float-left relative  top-40 right-72 text-[#555555] text-sm">HTML Source Code</h1>
                    <h2 class="float-right relative  top-40 text-[#555555] text-sm " style={{ right: 700 }}>Download File</h2>
                    <RiDownload2Fill color='blue' size='20' class="relative top-40 left-32" />

                </div>
                <hr class="relative top-40 border-thin border-[#555555] mr-80 " style={{ right: 290, right: 290 }}>
                </hr>
                <div>
                    <h1 class="float-left relative  top-40 text-[#555555] text-sm" style={{ right: 290 }} >CSS Git Hub Link</h1>
                    <h2 class="float-right relative  top-40 text-[#555555] text-sm" style={{ right: 650 }}>www.github.com/osacad/css-code</h2>
                </div>

            </div>
            <div >
                <div>
                    <h1 class="float-left relative  top-80 text-[#555555] text-sm" style={{right:390}}>JavaScript Source Code</h1>
                    <h2 class="float-right relative  top-80 text-[#555555] text-sm " style={{ right: 490 }}>Download File</h2>
                    <RiDownload2Fill color='blue' size='20' class="relative top-80 left-1" />

                </div>
                <hr class="relative top-80 border-thin border-[#555555] mr-80 " style={{ right: 290, right: 290 }}>
                </hr>
                <div>
                    <h1 class="float-left relative  top-80 text-[#555555] text-sm" style={{ right: 290 }} >CSS Git Hub Link</h1>
                    <h2 class="float-right relative  top-80 text-[#555555] text-sm" style={{ right: 650 }}>www.github.com/osacad/css-code</h2>
                </div>

            </div>

            <div >
                <div class="float-right mr-12  border-2 bg-[#E6BF02] px-4 py-2 rounded-full relative top-96" >

                    <p >Have a doubt? Rise a query</p>
                </div>
                <BsRecordCircle color='green' class="relative  inline  " style={{ left: 170, top: 390 }} />
            </div>


        </div>
    )
}
export default Screen15