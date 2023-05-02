

import Sectiontwoimg from './Assest/article_metadata.png'

function Section2(){
    return(
        <div className="w-full relative mt-20">
        <div className="max-w-[1100px] w-11/12 relative mx-auto flex flex-row-reverse items-center justify-between ">
            <img src={Sectiontwoimg} alt="" class="w-[40%] pt-5 hover:scale-110 transition-all duration-500" />
            <div className="max-w-[498px] flex flex-col items-start gap-y-6 pt-16 ">
                <div className="flex flex-col gap-y-2"> 
                    <h2 className="  text-4xl font-Heebo text-Heading_tag font-bold">Article Metadata Extraction</h2>
                    {/* <!-- <h3 class="text-3xl font-Heebo text-Heading_tag font-semibold">Summarization with just a click</h3> --> */}
                </div>
                <p className="max-w-[459px] text-lg font-Mulish text-para2">This is the online article summarizer tool, automatically extracts author and date information, related images, title and reading time from news articles and blog posts so you have everything in one place.</p>
            </div>
        </div>
    </div>
    )
}
export default Section2;