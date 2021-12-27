import { BiTime } from 'react-icons/bi';
import { VscArrowSmallLeft } from 'react-icons/vsc';
import { BsCheckCircleFill } from 'react-icons/bs';
import { BsXCircleFill } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { BiPlayCircle } from 'react-icons/bi';
import { BsRecordCircle } from 'react-icons/bs';
import { RiDownload2Fill } from 'react-icons/ri';
const Screen6 = () => {
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


            <div class=" relative top-24" style={{ right: 450 }}>
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

            <div class="ml-24 clear-left text-left"  >

                <div >
                    <h1 class="text[#555555] text-xl mb-5   text-left   ">Project 1: Server Management on AWS</h1>
                    <p class="text-sm text-[#555555] text-left "> This Project will showcase how to Host Static Application on AWS with best practices<br></br> Concepts Used : VPC, EC2, ELB, ASG, CloudWatch, SNS</p>
                    <p><RiDownload2Fill color='blue' class='inline mr-4' />Download Project Files</p>
                </div>
            </div>
            <hr class="mt-10 ml-24 " style={{marginRight:600}}></hr>
            <div class="ml-24 mt-10 clear-left text-left"  >

                <div >
                    <h1 class="text[#555555] text-xl mb-5   text-left   ">Project 1: Server Management on AWS</h1>
                    <p class="text-sm text-[#555555] text-left "> This Project will showcase how to Host Static Application on AWS with best practices<br></br> Concepts Used : VPC, EC2, ELB, ASG, CloudWatch, SNS</p>
                    <p><RiDownload2Fill color='blue' class='inline mr-4' />Download Project Files</p>
                </div>
            </div>
            <div class="border-2 border-[#969696] w-1/2  ml-52 mr-52 pl-10 pr-20 absolute -bottom-72 left-20 bg-white" >
                <p class="text-md text-[#969696] text-left pt-10">Enter a Topic </p>
                <hr class=""></hr>
                <p  class="mt-10 text-left">Write here</p>
                <hr class="mt-24"></hr>
                <button class="border-thin bg-[#097BDF] px-4 text-white  mb-10 clear-left mr-10  py-2 mt-10 ">Start Discussion</button>
            </div>
            <div>
                <div class="float-right mr-24 border-2 bg-[#E6BF02] px-4 py-2 rounded-full relative mt-16 mb-36">

                    <p>Have a doubt? Rise a query</p>
               </div>
                <BsRecordCircle color='green' class="   relative  inline mt-20 " style={{ left: 515 }} />
            </div>


        </div>
    )
}
export default Screen6