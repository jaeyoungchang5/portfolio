"use client";
import React, { useState, useRef } from "react";

const ExperiencesSection = () => {
	const ref = useRef(null);

	return (
		<section id="experiences">
			<h2 className="text-center text-4xl font-bold text-white mt-10 mb-8 md:mb-12">
				My Experiences
			</h2>
		</section>
	);
};

export default ExperiencesSection;
