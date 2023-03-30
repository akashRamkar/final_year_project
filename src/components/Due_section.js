import img1 from "./Assest/newsArticle 1.png";
import img2 from "./Assest/researchPaper 1.png";
import img3 from "./Assest/confusingParagraph 1.png";
import img4 from "./Assest/newsArticle 1.png";
import Cards from "./Cards";

function Due({ used }) {
  return (
    <div className="max-w-[1100px] w-11/12 relative flex flex-col items-center mx-auto gap-y-10 mt-6">
      <h2 className=" text-Heading_tag text-3xl font-Heebo font-bold">
        What Can I Summarize?
      </h2>
      <div className=" flex flex-row gap-x-20">
        <div className="flex flex-row items-center gap-x-4">
          <img src={img1} alt="" class="w-[44px] text-sm " />
          <h3 className="font-Heebo">News Article</h3>
        </div>
        <div className="flex flex-row items-center gap-x-4">
          <img src={img2} alt="" class="w-[44px] text-sm" />
          <h3 className="font-Heebo">Research Paper</h3>
        </div>
        <div className="flex flex-row items-center gap-x-4">
          <img src={img3} alt="" class="w-[44px] text-sm" />
          <h3 className="font-Heebo">Confusing Paragraph</h3>
        </div>
        <div className="flex flex-row items-center gap-x-4">
          <img src={img4} alt="" class="w-[44px] text-sm" />
          <h3 className="font-Heebo ">Document</h3>
        </div>
      </div>

      <Cards used={used} className=""></Cards>
    </div>
  );
}

export default Due;
