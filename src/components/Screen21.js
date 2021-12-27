import { BiTime } from 'react-icons/bi';
import { VscArrowSmallLeft } from 'react-icons/vsc';
import { BsCheckCircleFill } from 'react-icons/bs';
import { BsXCircleFill } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { HiUserCircle } from 'react-icons/hi';

const Screen21 = () => {
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
                                    <h1 class="text-[#000000] text-center ml-36 mt-16 font-bold">AWS</h1>
                                </div>
                                <div class="float-right pr-10">
                                    <p class="text-[#555555] mt-8">Date: 05/05/2020</p>
                                    <p class="text-[#555555] mt-2 font-bold text-lg">Total Amount Payed : ₹ 34,999.00</p>
                                    <p class="text-[#4285F2] mt-4 font-semibold"><u>DOWNLOAD INVOICE</u></p>

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
                                    <h1 class="text-[#000000] text-center ml-36 mt-16 font-bold">Python</h1>
                                </div>
                                <div class="float-right pr-10">
                                    <p class="text-[#555555] mt-8">Date: 05/05/2020</p>
                                    <p class="text-[#555555] mt-2 font-bold text-lg">Total Amount Payed : ₹ 34,999.00</p>
                                    <p class="text-[#4285F2] mt-4 font-semibold"><u>DOWNLOAD INVOICE</u></p>

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
export default Screen21