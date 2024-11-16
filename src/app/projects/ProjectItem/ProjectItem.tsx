import { Card } from "flowbite-react";
import React from "react";
import styles from './ProjectItem.module.css';

export interface ProjectVM {
    title: string;
    description: string;
    img: File;
}

export function ProjectItem() {
    return(
        <div className="">
            <div className={styles["project-item-img-container"]}>
                <img 
                    src="certificates/gds_certificate.jpg" 
                    alt="Project Image"
                />
            </div>
        </div>
    )
}