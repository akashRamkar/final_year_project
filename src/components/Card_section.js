// import img1 from "./Assest/pencil.png";

function Card({ id, name, info, img }) {
	return (
		<div class=" flex flex-row gap-x-20 justify-center items-center shadow-xl ">
			<div class="max-w-[235px] min-h-[272px] flex flex-col ">
				<div class="w-full min-h-[135px] bg-box_inside flex items-center justify-center">
					<img src={img} alt="" width="28%" id="chn" />
				</div>
				<div class="w-full min-h-[155px] flex flex-col items-start justify-center bg-white gap-y-2 p-[20px]">
					<h3 class=" font-Heebo ">{name}</h3>
					<p class=" text-sm  font-Mulish text-para2 text-left">{info}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
