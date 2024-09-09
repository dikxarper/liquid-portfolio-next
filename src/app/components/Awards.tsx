import { Badge } from "flowbite-react";

export default function Awards() {
    return(
        <>
            <h1 className="mb-6 text-xl font-semibold text-green-700">Awards</h1>
            <div className="border border-gray-300 px-4 py-5 rounded-xl mb-8">
                <div className="mb-6 flex items-center gap-8">
                    <div className="w-24 h-24 flex-shrink-0">
                        <img className="w-full h-full object-cover rounded-full" src="img/resume/hackathon/gds_logo.webp" alt="Astana IT University Logo" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-medium">Winner of Google Developer Hackathon organized by GDSC AITU</h3>
                        <div className="text-gray-700"><span className="font-semibold">Task:</span> create a chatbot that generates personalized routes on map to Astana's attractions based on user location, preferences, attraction hours, and travel mode. It also provides information on attractions, including descriptions, significance, hours, ticket prices, addresses, transport routes, and contact details.</div>
                        <div className="text-gray-700"><span className="font-semibold">Prize:</span> 250 000 ₸ ( ≈ 500$ )</div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <Badge color="info">Articial Intelligance</Badge>
                        <Badge color="info">Web Application</Badge>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <a className="flex items-center gap-1" href="https://www.instagram.com/astana_it_university/reel/C5V0I4kt_LC/" target="_blank">
                            [<span className="text-sky-800 hover:text-gray-500">Link</span>]
                        </a>
                        <a className="flex items-center gap-1" href="https://github.com/Alimiya/theboys" target="_blank">
                            [<span className="text-sky-800 hover:text-gray-500">Repository</span>]
                        </a>
                        <a className="flex items-center gap-1" href="certificates/gds_certificate.jpg" target="_blank">
                            [<span className="text-sky-800 hover:text-gray-500">Certificate</span>]
                        </a>
                    </div>
                </div>
            </div>
            <div className="border border-gray-300 px-4 py-5 rounded-xl mb-8">
                <div className="mb-6 flex items-center gap-8">
                    <div className="w-24 h-24 flex-shrink-0">
                        <img className="w-full h-full object-cover rounded-full" src="img/resume/hackathon/nitec_logo.jpg" alt="Nitec Logo" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-medium">Winner of "Smart Data Ukimet" Hackathon in category "Implementation of an analytical dashboard" by Nitec</h3>
                        <div className="text-gray-700"><span className="font-semibold">Task:</span> Create visualization of 4 datasets in 1 dashboard using variables to reflect the main problems of data analysis, and propose informed solutions based on this information.</div>
                        <div className="text-gray-700"><span className="font-semibold">Prize:</span> 500 000 ₸ ( ≈ 1000$ )</div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <Badge color="info">Data Analysis</Badge>
                        <Badge color="info">Superset</Badge>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <a className="flex items-center gap-1" href="https://codenrock.com/contests/hackathon-sdu#/info" target="_blank">
                            [<span className="text-sky-800 hover:text-gray-500">Link</span>]
                        </a>
                        <a className="flex items-center gap-1 pointer-events-none" target="_blank">
                            [<span className="text-gray-500">Repository</span>]
                        </a>
                        <a className="flex items-center gap-1" href="https://www.instagram.com/reel/CvuEYWWAc_4/?igsh=MXl5eXFxNXhyNmg0" target="_blank">
                            [<span className="text-sky-800 hover:text-gray-500">Certificate</span>]
                        </a>
                    </div>
                </div>
            </div>
            <div className="border border-gray-300 px-4 py-5 rounded-xl mb-8">
                <div className="mb-6 flex items-center gap-8">
                    <div className="w-24 h-24 flex-shrink-0">
                        <img className="w-full h-full object-cover rounded-full" src="img/resume/hackathon/margulan_logo.jpeg" alt="Margulan University Logo" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-medium">Winner of "KuickHack'24" IT Hackathon by Margulan University</h3>
                        <div className="text-gray-700"><span className="font-semibold">Task:</span> develop a document recognition system. It has to verify the authenticity of the document. It is important that the system reliably checks documents of a predetermined type and signals the fact that an invalid or expired document has been received.</div>
                        <div className="text-gray-700"><span className="font-semibold">Prize:</span> 1 000 000 ₸ ( ≈ 2000$ )</div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <Badge color="info">Machine Learning</Badge>
                        <Badge color="info">Web Application</Badge>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <a className="flex items-center gap-1" href="https://hackathon.ppu.edu.kz/" target="_blank">
                            [<span className="text-sky-800 hover:text-gray-500">Link</span>]
                        </a>
                        <a className="flex items-center gap-1" href="https://github.com/Alimiya/kuickhack-frogrammers" target="_blank">
                            [<span className="text-sky-800 hover:text-gray-500">Repository</span>]
                        </a>
                        <a className="flex items-center gap-1" href="certificates/kuikhack_certificate.pdf" target="_blank">
                            [<span className="text-sky-800 hover:text-gray-500">Certificate</span>]
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}