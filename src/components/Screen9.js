const Screen9 = () => {
    return (
        <div>
            <div class="  bg-[#EBF3FE]">
                <div>
                    <img class="relative pl-96 pr-36 top-20" style={{}} src='./images/signup-bg.png' />

                </div>
                <div class="flex justify-center">
                    <img class=" absolute top-20" src='./images/DL-logo.png' />
                </div>
                <div style={{ width: 600, height: 600 }} class=" relative left-96 bottom-96 border-2 bg-white   ">
                    <p class="text-white text-left text-lg h-16 pl-10 pt-5 border-2 bg-[#707070]">ORDER DETAILS</p>
                    <ul class="border-thin bg-[#F5F5F5] h-10 mt-16 mx-10">
                        <li class="text-[#797979] inline clear left float-left ml-24">COURSE</li>
                        <li class="text-[#797979] inline float-right mr-16">PRICE</li>
                    </ul>
                    <div class="flex flex-col mb-20 ">
                        <div class="display-x">
                            <div class="float-left ml-24 mt-10">
                                <img src='./images/screen21-amazon.png' style={{ width: 150, height: 100 }} />
                            </div>
                            <div class="float-left ml-16 mt-20">
                                <p classs="text-[#5C5C5C]">AWS</p>
                            </div>
                            <div class="float-right mr-16 mt-20">
                                <p classs="text-[#5C5C5C]">₹ 34,999.00</p>
                            </div>
                            <hr class="mb-5 mt-40"></hr>
                            <p class="text-[#5C5C5C] float-right mr-16 font-bold">Total : ₹ 34,999.00</p>
                            <ul class="float-right clear-right mr-16 mt-5 ">
                                <li class="inline text-[#5C5C5C] text-sm pr-16"><u>Coupon</u></li>
                                <li class="inline text-[#5C5C5C] text-sm"><button class="border-2 border-[#5C5C5C] px-2">Apply</button></li>
                            </ul>
                            <p class="text-[#5C5C5C] float-right clear-right mr-16 mt-5 text2xl font-extrabold">Grand Total : ₹ 34,999.00</p>
                            <button class="text-white border-2 bg-[#4285F2] px-4 py-2 mt-8 float-right clear-right mr-16 mb-16">PROCEED FOR PAYMENT</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Screen9