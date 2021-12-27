import { HiOutlineArrowSmRight } from 'react-icons/hi';
const Screen12 = () => {
    return (
        <div>
            <div class="  bg-[#EBF3FE]">
                <div>
                    <img class=" relative pl-36 pr-36 top-20" style={{}} src='./images/signup-bg.png' />
                </div>
                <div class="flex justify-center ">
                    <img class=" absolute top-20" src="./images/DL-Logo.png" />
                </div>
                <div class="flex justify-center ">
                    <img class=" w-60 h-68  absolute top-56 left-100 " src="./images/screentwelve-one.png" />
                    <img class=" w-30 h-30 absolute top-60 pl-80 " src="./images/tickmark.png" />
                    <h1 class="text-3xl text-[#3C3C3C] font-bold  relative bottom-96">Welcome to the world of cyber security</h1>
                </div>

                <div class="flex flex-col justify-around  border-2 border-solid border-gray-200 mt-10 mx-10 relative bottom-96">
                    <div class="display-x">
                        <div class="float-left">
                            <img class="w-4/6  " src='./images/amazon.jpg' />
                        </div >
                        <div class=" float-left ">
                            <h1 class="text-3xl font-bold text-gray-600 mt-10 relative right-36 text-left relative  top-16 ">AWS</h1>

                        </div>
                        <div class=" float-right">
                            <button class=" border-2 border-solid bg-blue-600 w-44 h-10 py-2 px-12  text-white text-sm relative  top-24  mr-8">Start Course<HiOutlineArrowSmRight size='30' class="relative ml-20 bottom-6" /></button>
                        </div>

                    </div>

                </div>
                <button class=" px-8 py-2 text-center border-2 border-thin border-[#E8BD1F] relative bottom-80">My Class Room</button>
            </div>
            </div>
            )
}
            export default Screen12