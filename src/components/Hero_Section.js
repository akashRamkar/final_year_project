import React from "react";
import Hero from "./Assest/hero.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
function Herosection() {
	const [text] = useTypewriter({
		words: ["article", "text", "paper", "easy"],
		loop: {},
	});
	return (
		<div className=" relative bg-background_color  rounded-br-[325px]  ">
			<div className=" max-w-[1350px] w-[93%]  mx-auto flex flex-row justify-between items-center min-h-[400px]  ">
				<div className=" flex flex-col max-w-[570px] justify-start items-start  font-Mulish  gap-y-4 ">
					<div className=" text-4xl text-Hero_section font-Mulish uppercase">
						Summarize any
						<span className="role"> {text}</span>
						<Cursor />
					</div>

					<h2 className=" text-4xl text-Hero_section font-Heebo ">
						In A Click.
					</h2>
					<p className=" text-base text-para2  font-Mulish leading-8 text-start">
						his helps you summarize any piece of text into concise, easy to
						digest content so you can free yourself from information overload.
					</p>
					<div className=" bg-Hero_section max-w-[199px] h-[48px] text-center pt-[10px] rounded-2xl cursor-pointer mt-3 text-white font-Mulish text-lg px-5">
						<a href="#project">Summarize Now</a>
					</div>
				</div>
				<img
					src={Hero}
					alt=""
					className="absolute right-[82px] bottom-0  overflow-hidden xl:w-[30%] w-[40%]"
				/>
			</div>
		</div>
	);
}

export default Herosection;
