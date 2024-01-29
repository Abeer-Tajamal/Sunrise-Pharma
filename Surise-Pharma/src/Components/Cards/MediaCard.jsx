import React from 'react';
import MediaCards from "../Reuseable Components/Cards/MediaCards";

const MediaCard = () => {

    const cardContent1 = {
        image: '../../Assets/Home Page/Pill packaging.png',
        title: "Pill Packaging",
        description: "Our custom medication packaging organizes your prescriptions for you."
    };

    const cardContent2 = {
        image: '../../Assets/Home Page/Prescription Filling.png',
        title: "Easy Prescription",
        description: "We fill new and existing prescriptions in-store, by phone and online for your convenience."
    };

    const cardContent3 = {
        image: '../../Assets/Home Page/Express Delivery.png',
        title: "Express Delivery",
        description: "We offer express local delivery and shipping at no cost to you."
    };

    const cardContent4 = {
        image: '../../Assets/Home Page/Medication Savings.png',
        title: "Medication Savings",
        description: "Our pharmacists work with you to coordinate benefits and find financial assistance.",
    };

    return (
        <>
            <MediaCards {...cardContent1} />
            <MediaCards {...cardContent2} />
            <MediaCards {...cardContent3} />
            <MediaCards {...cardContent4} />
        </>
    )
}
export default MediaCard