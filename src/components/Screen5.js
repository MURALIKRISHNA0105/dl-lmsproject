import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { AiFillStar } from 'react-icons/ai';
const Screen5 = () => {
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
            <div class="flex flex-col justify-around  border-2 border-solid border-gray-200 mt-10 mx-10">
                <div class="display-x">
                    <div class="float-left">
                        <img class="w-4/6 " src='./images/amazon.jpg' />
                    </div >
                    <div class=" float-left ">
                        <h1 class="text-md font-bold text-gray-600 mt-10 relative right-36 text-left">AWS</h1>
                        <p class="text-sm text-gray-600 mt-4 relative right-36 text-left">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br></br>nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                        <ul class="mt-6 relative right-36 text-left">
                            <li class=" inline-block"><AiFillStar size='20' color='blue' /></li>
                            <li class=" inline-block"> <AiFillStar size='20' color='blue' /></li>
                            <li class=" inline-block"> <AiFillStar size='20' color='blue' /></li>
                            <li class=" inline-block"><AiFillStar size='20' color='blue' /></li>
                            <li class=" inline-block"><AiFillStar size='20' color='gray' /></li>
                        </ul>
                    </div>
                    <div class=" float-right">
                        <button class=" border-2 border-solid bg-blue-600 w-44 h-10 py-2 px-12  text-white text-sm relative  bottom-24  mr-8">Continue<HiOutlineArrowSmRight size='30' class="relative ml-20 bottom-6" /></button>
                    </div>

                </div>
            </div>
            <div class="flex flex-col justify-around  border-2 border-solid border-gray-200 mt-10 mx-10">
                <div class="display-x">
                    <div class="float-left">
                        <img class="w-4/6" src='./images/python.jpg' />
                    </div >
                    <div class=" float-left ">
                        <h1 class="text-md font-bold text-gray-600 mt-10 relative right-36 text-left">Python</h1>
                        <p class="text-sm text-gray-600 mt-4 relative right-36 text-left">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br></br>nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                        <ul class="mt-6 relative right-36 text-left">
                            <li class=" inline-block"><AiFillStar size='20' color='blue' /></li>
                            <li class=" inline-block"> <AiFillStar size='20' color='blue' /></li>
                            <li class=" inline-block"> <AiFillStar size='20' color='blue' /></li>
                            <li class=" inline-block"><AiFillStar size='20' color='blue' /></li>
                            <li class=" inline-block"><AiFillStar size='20' color='gray' /></li>
                        </ul>
                    </div>
                    <div class=" float-right">
                    <button class=" border-2 border-solid bg-blue-600 w-44 h-10 py-2 px-12  text-white text-sm relative  bottom-24  mr-8">Continue<HiOutlineArrowSmRight size='30' class="relative ml-20 bottom-6" /></button>
                    </div>

                </div>

            </div>
            <div class=" flex flex-col mt-36 mb-24 " >
                <div class="display-x ">
                    <div class="float-left pl-96">
                        <h1 class="text-md text-gray-600 relative ml-24   ">© Digital Lync 2020</h1>
                    </div>
                    <div class="float-right pr-96">
                        <h2 class="text-md text-gray-600 text-center mr-24">Privacy Policy</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Screen5