import Card from "./Card_section";

function Cards({ used }) {
	return (
		<div className=" w-[99vw] relative bg-bckg mt-16 overflow-x-hidden">
			<div className="max-w-[1100px] w-11/12 mx-auto relative flex flex-col justify-center items-center pb-12 ">
				<h2 className=" text-Heading_tag text-3xl font-Heebo font-bold pt-8 text-center">
					Who can use it?
				</h2>

				<div className=" flex flex-row  flex-wrap gap-x-20 justify-center items-center mt-10 gap-y-14 pt-4">
					{used.map((use, id) => {
						return <Card key={id} {...use}></Card>;
					})}
				</div>
			</div>
		</div>
	);
}
export default Cards;
