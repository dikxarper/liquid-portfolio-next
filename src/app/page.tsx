import { Banner } from "flowbite-react";
import { HiX } from 'react-icons/hi';
import { MdAnnouncement } from "react-icons/md";
import { Metadata } from "next";
import Award from "./Award/Award";

export const metadata: Metadata = {
    title: "dikxarper",
    description: "The portfolio of Merekeyev Dias",
    metadataBase: new URL('localhost:3000')
}

export default function Home() {
    return (
        <main className="container mx-auto">
            <Banner>
                <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                    <div className="mx-auto flex items-center">
                        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                            <MdAnnouncement className="mr-4 h-4 w-4" />
                            <span className="[&_p]:inline">
                                The website is under development. Therefore, if you see bugs and errors, please let me know
                            </span>
                        </p>
                    </div>
                    <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
                        <HiX className="h-4 w-4" />
                    </Banner.CollapseButton>
                </div>
            </Banner>
            <div className="mt-12 mb-10 flex justify-between">
                <div className="w-3/4">
                    <div className="mb-8">
                        <h1 className='text-4xl mb-2'>Merekeyev Dias</h1>
                        <h2 className="text-lg text-gray-700">Front-end Developer</h2>
                    </div>
                    <div className="mb-6">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum modi est, vitae rem fuga voluptates explicabo qui hic ab dolore cumque eius laborum ad officiis. Commodi laborum, quam beatae accusantium voluptatum, quidem temporibus, voluptatibus optio molestiae corrupti cum minus blanditiis neque. Sit et harum quo maiores similique repellat suscipit excepturi?</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veniam nihil reiciendis ut, eveniet inventore quasi nesciunt tenetur ipsa doloribus officia dolor repudiandae assumenda ullam itaque, quo praesentium! Blanditiis sapiente illo aliquam voluptates dicta amet ad non veniam magni tempore?</p>
                    </div>
                    <ul className="flex gap-3">
                        <li><a href="mailto:diasmerekeev1@gmail.com"><img className="w-8" src="img/socials/gmail.png" alt="Linkedin Icon" /></a></li>
                        <li><a href="https://github.com/dikxarper" target="_blank"><img className="w-8" src="img/socials/github.png" alt="Github Icon" /></a></li>
                        <li><a href="https://www.linkedin.com/in/dias-merekeev-493a72236/" target="_blank"><img className="w-8" src="img/socials/linkedin.png" alt="Linkedin Icon" /></a></li>
                        <li><a href="https://t.me/dikxarper" target="_blank"><img className="w-8" src="img/socials/telegram.png" alt="Linkedin Icon" /></a></li>
                    </ul>
                </div>

                <div className="w-72 h-72 mb-4">
                    <img className='rounded w-full h-full object-cover' src="img/profile.jpg" alt='Profile picture' />
                </div>
                {/* <div>
                    <div className="flex items-end gap-2 mb-2">
                        <span className="material-symbols-outlined">location_on</span>
                        <div><span className="text-zinc-800">Astana</span>, Kazakhstan</div>
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="material-symbols-outlined">mail</span>
                        <p>diasmerekeev1@gmail.com</p>
                    </div>
                </div> */}
            </div>

            <hr className="h-px my-8 bg-green-800 border-0 dark:bg-gray-700" />

            <div className="grid grid-cols-2 mb-12">
                <div>
                    <h1 className="mb-6 text-xl font-semibold text-green-700">Experience</h1>
                    <div className="mb-2 flex items-center gap-8">
                        <div className="w-24 h-24">
                            <img className="w-full h-full object-contain" src="img/resume/arta_logo.jpg" alt="Astana IT University Logo" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-medium">Web Developer Intern</h3>
                            <div className="text-gray-700">ARTA Software LLP</div>
                            <div className="text-gray-700">Jul 2024 - 1 month</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="mb-6 text-xl font-semibold text-green-700">Education</h1>
                    <div className="mb-6 flex items-center gap-8">
                        <div className="w-24 h-24">
                            <img className="w-full h-full object-contain" src="img/resume/astana_it_logo.png" alt="Astana IT University Logo" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-medium">Bachelor of Science in Computer Science</h3>
                            <div className="text-gray-700">Astana IT University</div>
                            <div className="text-gray-700">2021 - 2024</div>
                        </div>
                    </div>
                    <div className="mb-2 flex items-center gap-8">
                        <div className="w-24 h-24">
                            <img className="w-full h-full object-contain" src="img/resume/iitu_logo.png" alt="Astana IT University Logo" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-medium">Master of Science in Data Science</h3>
                            <div className="text-gray-700">International Information Technology University</div>
                            <div className="text-gray-700">2024 - present</div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="mb-6 text-xl font-semibold text-green-700">Awards</h1>

            <Award
                title="Google Developer Hackathon organized by GDSC AITU"
                task="create a chatbot that generates personalized routes on map to Astana's attractions based on user location, preferences, attraction hours, and travel mode. It also provides information on attractions, including descriptions, significance, hours, ticket prices, addresses, transport routes, and contact details."
                prize={250000}
                image_name="gds_logo.webp"
                badges={["Articial Intelligance", "Web Application"]}
                additional={{
                    info_link: "https://www.instagram.com/astana_it_university/reel/C5V0I4kt_LC/",
                    repo_link: "https://github.com/Alimiya/theboys",
                    cert_name: "gds_certificate.jpg"
                }}
            />
            <Award
                title='"Smart Data Ukimet" Hackathon in category "Implementation of an analytical dashboard" by Nitec'
                task="Create visualization of 4 datasets in 1 dashboard using variables to reflect the main problems of data analysis, and propose informed solutions based on this information."
                image_name="nitec_logo.jpg"
                prize={500000}
                badges={["Data Analysis", "Superset"]}
                additional={{
                    info_link: "https://codenrock.com/contests/hackathon-sdu#/info",
                    cert_link: "https://www.instagram.com/reel/CvuEYWWAc_4/?igsh=MXl5eXFxNXhyNmg0"
                }}
            />
            <Award
                title={"\"KuickHack'24\" IT Hackathon by Margulan University"}
                task="Develop a document recognition system. It has to verify the authenticity of the document. It is important that the system reliably checks documents of a predetermined type and signals the fact that an invalid or expired document has been received."
                image_name="margulan_logo.jpeg"
                prize={1000000}
                badges={["Machine Learning", "Web Application"]}
                additional={{
                    info_link: "https://hackathon.ppu.edu.kz/",
                    repo_link: "https://github.com/Alimiya/kuickhack-frogrammers",
                    cert_name: "kuikhack_certificate.pdf"
                }}
            />
        </main>
    );
}