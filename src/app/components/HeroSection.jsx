"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import MailIcon from "../../../public/mail-icon.svg"
import DownloadIcon from "../../../public/download-icon.svg"

const HeroSection = () => {
	return (
		<section className="lg:py-16">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
				>
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
							Hey, I&apos;m{" "}
						</span>
						<br></br>
						<TypeAnimation
							sequence={[
								"JaeYoung",
								2000,
							]}
							wrapper="span"
							speed={50}
						/>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						I am a lifelong learner, driven software developer, and proud Korean. 
						<br></br>
						My greatest passion is people, so let&apos;s connect and get to know one another!
					</p>
					<div>
						<Link
							href="/#contact"
							className="px-1 mr-3 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 to-blue-700 hover:bg-slate-800 text-white mt-3"
						>
							<span className="flex bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2">
								<Image className="invert self-center w-7 h-7 mr-1" src={MailIcon} alt="Mail Icon" />
								<p className="self-center">Contact Me</p>
							</span>
						</Link>
						<Link
							href="https://github.com/jaeyoungchang5"
							target="_blank"
							className="px-1 mr-3 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 to-blue-700 hover:bg-slate-800 text-white mt-3"
						>
							<span className="flex bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2">
								<Image className="self-center w-7 h-7 mr-1" src={GithubIcon} alt="GitHub Icon" />
								<p className="self-center">GitHub</p>
							</span>
						</Link>
						<Link
							href="https://www.linkedin.com/in/jaeyoungchang5/"
							target="_blank"
							className="px-1 mr-3 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 to-blue-700 hover:bg-slate-800 text-white mt-3"
						>
							<span className="flex bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2">
								<Image className="self-center w-7 h-7 mr-1" src={LinkedinIcon} alt="LinkedIn Icon" />
								<p className="self-center">LinkedIn</p>
							</span>
						</Link>
						<Link
							href="/files/resume.pdf"
							target="_blank"
							className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 to-blue-700 hover:bg-slate-800 text-white mt-3"
						>
						<span className="flex bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2">
							<Image className="invert self-center w-7 h-7 mr-1" src={DownloadIcon} alt="Github Icon" />
							<p className="self-center">Resume</p>
						</span>
						</Link>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-4 place-self-center mt-4 lg:mt-0"
				>
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
						<Image
							src="/images/hero-image.JPG"
							alt="JaeYoung Chang Headshot"
							className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={300}
							height={300}
						/>
					</div>
				</motion.div>
			</div>
		</section>
 	);
};

export default HeroSection;
