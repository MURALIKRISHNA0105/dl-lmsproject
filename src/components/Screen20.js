import { BiTime } from 'react-icons/bi';
import { VscArrowSmallLeft } from 'react-icons/vsc';
import { BsCheckCircleFill } from 'react-icons/bs';
import { BsXCircleFill } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { HiUserCircle } from 'react-icons/hi';

const Screen20 = () => {
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
                    <div class="float-left border-2 border-[#797979] border-opacity-20 px-14 ml-24 text-left ">

                        <ul>
                            <li class="text-[#444444] font-semibold  text-lg pt-10">Edit Profile</li>
                            <li class="text-[#444444] font-semibold  text-lg pt-10">Change Password</li>
                            <li class="text-[#444444] font-semibold  text-lg pt-10">Invoices</li>
                            <li class="text-[#444444] font-semibold  text-lg pt-10 pb-10">Certificate</li>
                        </ul>
                    </div>
                    <div class="float-left border-2 border-[#797979] border-opacity-20 ml-36 mb-20  ">
                        <form>
                           

                            <input type="password" placeholder='Old Password' class="border-l-0 border-r-0 border-t-0 border-b-2 px-72 pl-0 mx-8 mr-28 mt-20" />
                            <br></br>
                            <br></br>
                            <input type="password" placeholder='New Password' class="border-l-0 border-r-0 border-t-0 border-b-2 px-72 pl-0 mx-8  mr-28" />
                            <br></br>
                            <br></br>
                            <input type="password" placeholder='Confirm Password' class="border-l-0 border-r-0 border-t-0 border-b-2 px-72 pl-0 mx-8 mr-28" />
                            <br></br>
                            <br></br>
                           
                            <br></br>
                            <br></br>
                            <button class="text-white bg-[#4285F2] px-10 py-2 mb-10 ml-8 float-left " >Change Password</button>

                        </form>
                    </div>

                </div>
            </div>
            <div>
                <img style={{ width:200,height:250}}  class="ml-24 relative bottom-28" src='./images/sceen19.png' />
            </div>
        </div>
    )
}
export default Screen20