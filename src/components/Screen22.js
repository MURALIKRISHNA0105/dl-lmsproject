import { BiTime } from 'react-icons/bi';
import { VscArrowSmallLeft } from 'react-icons/vsc';
import { BsCheckCircleFill } from 'react-icons/bs';
import { BsXCircleFill } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { HiUserCircle } from 'react-icons/hi';

const Screen22 = () => {
    return (
        <div>
            <div class="flex flex-col mb-10">
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
            <hr></hr>
            <div class="flex flex-col mt-24">
                <div class="display-x">
                    <div class="float-left border-2 border-[#797979] border-opacity-20 px-14 ml-24 mr-20 text-left ">

                        <ul>
                            <li class="text-[#444444] font-semibold  text-lg pt-10">Edit Profile</li>
                            <li class="text-[#444444] font-semibold  text-lg pt-10">Change Password</li>
                            <li class="text-[#444444] font-semibold  text-lg pt-10">Invoices</li>
                            <li class="text-[#444444] font-semibold  text-lg pt-10 pb-10">Certificate</li>
                        </ul>
                    </div>
                    <div class="  border-2 border-[#797979] border-opacity-20  mr-20 mb-20 relative ml-96  ">
                        <div class="flex flex-col mt-10    ">
                            <div class="display-x">
                                <div class="float-left" >
                                    <img style={{ width: 200, height: 150 }} src="./images/screen21-amazon.png" />
                                </div>
                               
                                <div class="float-left">
                                    <h1 class="text-[#555555] opacity-70 text-center relative right-40 top-0 font-bold">AWS</h1>
                                    <button class=" relative border-2 border-gray px-52  border-[#4285F2] ml-20"></button>
                                    <p class="text-[#555555] text-md font-semibold relative left-40 top-2">100% Course Completed</p>
                                    <ul>
                                        <li class="inline-block text-[#4285F2] text-sm relative left-16 top-4"><u>DOWNLOAD CERTIFICATE</u></li>
                                        <li class="inline-block text-[#555555] text-sm  relative left-28 top-4"><u>VERIFY CERTIFICATE</u></li>
                                    </ul>
                                </div>
                               
                            </div>
                        </div>
                        <hr class="border-2 border-gray relative top-12 mr-10"></hr>
                        <div class="flex flex-col  mt-20 mb-10 ">
                            <div class="display-x">
                                <div class="float-left" >
                                    <img style={{ width: 200, height: 150 }} src="./images/screen21-aws.png" />
                                </div>
                                <div class="float-left">
                                    <h1 class="text-[#555555] opacity-70 text-center relative right-36 top-0  font-bold">Python</h1>
                                    <li class="inline"><button class=" relative border-2 border-gray px-24  border-[#4285F2] ml-20"></button></li>
                                    <li class="inline"><button class=" relative border-2 border-gray px-28  border-[#DBDBDB] "></button></li>
                                    <p class="text-[#555555] text-md font-semibold relative left-40 top-2">40% Course Completed</p>
                                   <p class="text-[#555555] opacity-80 text-sm relative top-2 text-right">You can Download Certificate after <br></br>complete course completion</p>
                                </div>
                               
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div class="mb-32">
                <img style={{ width: 200, height: 250 }} class="ml-24 relative bottom-48" src='./images/sceen19.png' />
            </div>
        </div>
    )
}
export default Screen22