import { Badge } from "flowbite-react";
import { FC } from "react";

interface AwardProps {
    title: string;
    task: string;
    image_name: string;
    prize: number;
    badges: string[];
    additional: {
        info_link: string;
        repo_link?: string;
        cert_name?: string;
        cert_link?: string;
    }
}

function Award(award: AwardProps) {

    const convertTengeToDollar = (value: string) => {
        
    }
    
    return (
        <div className="border border-gray-300 px-4 py-5 rounded-xl mb-8">
            <div className="mb-6 flex items-center gap-8">
                <div className="w-24 h-24 flex-shrink-0">
                    <img className="w-full h-full object-cover rounded-full" src={`img/resume/hackathon/${award.image_name}`} alt="Astana IT University Logo" />
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="font-medium">Winner of {award.title}</h3>
                    <div className="text-gray-700"><span className="font-semibold">Task:</span>{award.task}</div>
                    <div className="text-gray-700"><span className="font-semibold">Prize:</span>{award.prize} тнг.</div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                {award.badges.map((badge) => (
                        <Badge color="info">{badge}</Badge>
                ))}
                </div>
                <div className="flex items-center justify-end gap-2">   
                    <a className="flex items-center gap-1" href={award.additional.info_link} target="_blank">
                        [<span className="text-sky-800 hover:text-gray-500">Info</span>]
                    </a>
                    <a className="flex items-center gap-1" href={award.additional.repo_link} target="_blank">
                        [<span className="text-sky-800 hover:text-gray-500">Repository</span>]
                    </a>
                    <a  
                        className="flex items-center gap-1" 
                        href={
                            award.additional.cert_name 
                            ? `certificates/${award.additional.cert_name}` 
                            : award.additional.cert_link} target="_blank">
                        [<span className="text-sky-800 hover:text-gray-500">Certificate</span>]
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Award;