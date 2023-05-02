
import Section3img from './Assest/harekrishna.png'
function Section3(){

    return(
        <div class="w-full relative mt-20">
            <div class="max-w-[1100px] w-11/12 relative mx-auto flex flex-row items-center justify-between ">
                <img src={Section3img} alt="" class="w-[38%] mt-[83px] hover:scale-110 transition-all duration-500" />
                <div class="max-w-[498px] flex flex-col items-start gap-y-6 -mt-[234px]  ">
                    <div class="flex flex-col gap-y-2"> 
                        <h2 class="  text-4xl font-Heebo text-Heading_tag font-bold">Avoid the Clickbait Trap</h2>
                        {/* <!-- <h3 class="text-3xl font-Heebo text-Heading_tag font-semibold">Summarization with just a click</h3> --> */}
                    </div>
                    <p class="max-w-[459px] text-lg font-Mulish text-para2">In the sheer amount of information that bombards Internet users from all sides, hardly anyone wants to devote their valuable time to reading long texts. This's clever AI analyzes any piece of text and summarizes it automatically, in a way that makes it easy for you to read, understand and act on.</p>
                </div>
            </div>
        </div>
    )
}

export default Section3;