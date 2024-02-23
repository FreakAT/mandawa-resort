import React from "react";
import { SectionHeading } from "./SectionHeading";
import Image from "next/image";

const HighlightsSectionComponent = () => {
	return (
		<div className="container pt-10 pb-72 mx-auto m-4 bg-white relative">
			<SectionHeading
				mainHeading={"highlights"}
				subHeading={"Experience the Infinity"}
			/>
			<div className="w-escape h-[50vh] md:h-[60vh] lg:h-[90vh] relative">
				<Image
					src="/images/sectionImages/Banquet-hall-4.png"
					alt="Highlights Image"
					fill
					className="px-36 w-full h-full object-cover"
				/>
			</div>
			<div className="absolute -mt-36 flex flex-col items-center text-center bg-[rgba(255,246,234,0.9)] mx-72">
				<h1 className="py-11 text-3xl">Amusement Park</h1>
				<p className="pb-11 px-72 text-lg">
					The modern day amusement park provides multiple choices of
					entertainment attractions for families.
				</p>
				{/* Line */}
				<div className="w-40 h-0.5 bg-[#E0B279]"></div>
				<h4 className="py-7 text-lg">Open Daily: 10:00am-6:00pm</h4>
			</div>
		</div>
	);
};

export default HighlightsSectionComponent;
