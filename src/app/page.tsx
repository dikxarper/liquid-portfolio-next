import { Banner } from "flowbite-react";
import { HiX } from 'react-icons/hi';
import { MdAnnouncement } from "react-icons/md";
import Awards from "./components/Awards";

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
                        <li><a href="https://github.com/dikxarper"><img className="w-8" src="img/socials/github.png" alt="Github Icon" /></a></li>
                        <li><a href="https://www.linkedin.com/in/dias-merekeev-493a72236/"><img className="w-8" src="img/socials/linkedin.png" alt="Linkedin Icon" /></a></li>
                        <li><a href="https://t.me/dikxarper"><img className="w-8" src="img/socials/telegram.png" alt="Linkedin Icon" /></a></li>
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
                            <div className="text-gray-700">Jul 2024 - Present</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="mb-6 text-xl font-semibold text-green-700">Education</h1>
                    <div className="mb-2 flex items-center gap-8">
                        <div className="w-24 h-24">
                            <img className="w-full h-full object-contain" src="img/resume/astana_it_logo.png" alt="Astana IT University Logo" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-medium">Bachelor of Science in Computer Science</h3>
                            <div className="text-gray-700">Astana IT University</div>
                            <div className="text-gray-700">2021 - 2024</div>
                        </div>
                    </div>
                </div>
            </div>
            <Awards />
        </main>
    );
}