
import Sectiononeimg from './Assest/auto_summary1.png'

function Section1(){
    return(
        <div className="w-full relative mt-20">
            <div className="max-w-[1100px] w-11/12 relative mx-auto flex flex-row items-center justify-between ">
                <img src={Sectiononeimg} alt="" class="w-[43%] pt-16" />
                <div className="max-w-[498px] flex flex-col items-start gap-y-6  ">
                    <div className="flex flex-col gap-y-2"> 
                        <h2 className="  text-4xl font-Heebo text-Heading_tag font-bold">100% Automatic Article</h2>
                        <h3 className="text-3xl font-Heebo text-Heading_tag font-semibold">Summarization with just a click</h3>
                    </div>
                    <p className="max-w-[459px] text-lg font-Mulish text-para2">In the sheer amount of information that bombards Internet users from all sides, hardly anyone wants to devote their valuable time to reading long texts. This's clever AI analyzes any piece of text and summarizes it automatically, in a way that makes it easy for you to read, understand and act on.</p>
                </div>
            </div>
        </div>
    )
}

export default Section1;