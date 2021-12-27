function Home() {
    return (
        <div class="  flex flex-col mb-20">
            <div class=" display-x  " >


                <div class="float-left" >
                    <img src='./images/DL-logo.png' class="pt-2" />
                </div>

                <div class="float-right mr-20">
                    <ul class="pt-10 ">

                        <li class="inline-block text-sm hover:border-2 border-blue-400 " style={{ color: '#515151' }}>Courses</li>
                        <li class="inline-block  pl-10 text-sm " style={{ color: '#515151' }}>Programs</li>
                        <li class="inline-block  pl-10 text-sm " style={{ color: '#515151' }}>ContactUs</li>
                        <li class="inline-block pl-10  text-sm font-extrabold " style={{ color: '#515151' }} ><button class=" mr-4border-2 border-solid rounded-3xl bg-yellow-400 px-6 py-2">GetTrained</button></li>
                    </ul>

                </div>


            </div>

        </div>
    )
}
export default Home