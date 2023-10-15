import cardOne from './Component/Assets/card-1.jpg';
import cardTwo from './Component/Assets/card-7.jpg';
import cardThree from './Component/Assets/card-3.jpg';
import cardFour from './Component/Assets/card-4.jpg';
import cardFive from './Component/Assets/card-6.jpg';

import moSamy from './Component/Assets/p10.jpg';
import moAli from './Component/Assets/p8.jpg';
import moSameer from './Component/Assets/p5.jpg';
import moSafy from './Component/Assets/p3.jpg';
import moSayd from './Component/Assets/p7.jpg';

import ser1 from './Component/Assets/ser-1.png';
import ser2 from './Component/Assets/ser-2.png';
import ser3 from './Component/Assets/ser-3.png';
import ser4 from './Component/Assets/ser-4.png';
import ser5 from './Component/Assets/ser-5.png';
import ser6 from './Component/Assets/ser-6.png';
import ser7 from './Component/Assets/ser-7.png';
import ser8 from './Component/Assets/ser-8.png';

let normal = "Most custody arrangements in the country take place within the framework of regular custody. Children up to the age of 18 (sometimes up to 21), who are known to the various welfare services, are referred to regular custody. developmental), the foster family mentor establishes a relationship with the foster family and with the child through home visits and constant telephone contact. A home visit takes place at least once a month in the normal daycare setting."
let therapeutic = "It is intended for children coming from a difficult background who have gone through trauma (physical and emotional) mainly related to the inability of their biological parents to take care of them and meet their basic needs.Children with complex and difficult behaviors, and those who have suffered psychological harm, are referred to the therapeutic nursery. In most cases, these children are accompanied by a psychiatrist, and may sometimes require medication.The placement of children in a therapeutic nursery is long-term and involves intensive work in order to help the child cope with societal demands and manage a healthy lifestyle, as much as possible."
let emergency = "When a child needs immediate protection, he can be temporarily transferred to an emergency nursery (the nursing home), which has been specially equipped to accommodate children in emergency and danger situations. The period of stay in the emergency nursery is up to 3 months, and in some special cases, the period can be extended for an additional 3 months.A family providing emergency daycare must be able to accommodate children at all hours of the day. Up to 5 children can stay in emergency daycare at the same time. During their stay in the emergency nursery, the children go through a comprehensive path of diagnosis, so the family has to cooperate with many professionals within a short time"

export let api = [
    {
        id: 1,
        image: "https://media.istockphoto.com/id/1306500573/photo/nurse-monitoring-a-premature-newborn-in-an-incubator-while-wearing-a-facemask.jpg?s=612x612&w=0&k=20&c=5QCQLCDtH-HwFgXwiAHpIAhsPr9DGJdynMFNVRMZnVQ=",
        type: "therapeutic ",
        paragraph: therapeutic
    },
    {
        id: 3,
        image: "https://media.istockphoto.com/id/1312011660/photo/newborn-baby-is-sleeping-in-small-transparent-portable-plastic-bed.jpg?s=612x612&w=0&k=20&c=2y2a1LxCPz4CAGt59vnqIvWtq9M4tkz3bMBkQiaa294=",
        type: "normal ",
        paragraph: normal
    },
    {
        id: 4,
        image: "https://media.istockphoto.com/id/1319283847/photo/newborn-baby-sleeping.jpg?s=612x612&w=0&k=20&c=btM3PSN9Ymc6268AgGCaezpLbyWqKEFm-0ZDycIXeo8=",
        type: "emergency ",
        paragraph: emergency
    },
    {
        id: 6,
        image: "https://media.istockphoto.com/id/1306500546/photo/nurse-checking-on-a-premature-newborn-in-an-incubator-while-wearing-a-facemask.jpg?s=612x612&w=0&k=20&c=EE_B3wmL4I0fYLs0smeG9r-h6cnkmzyZg9Igsg1VX80=",
        type: "therapeutic ",
        paragraph: therapeutic
    },
    {
        id: 7,
        image: "https://media.istockphoto.com/id/1167978175/photo/photo-of-newborn-baby-feet.jpg?s=612x612&w=0&k=20&c=9EkzrssGjiogAZt9Ef3YEzo9xcrexxLg8ojezrZmf7Q=",
        type: "normal ",
        paragraph: normal
    },
    {
        id: 8,
        image: "https://media.istockphoto.com/id/1288919436/photo/premature-baby-in-nicu.jpg?s=612x612&w=0&k=20&c=GUYM2Lmq4FIxksbRn18esEFOtbtbne_MKaS4UsxGKOc=",
        type: "emergency ",
        paragraph: emergency
    },
    {
        id: 9,
        image: "https://media.istockphoto.com/id/1209858329/photo/premature-born-baby-and-nurse-in-hospital-crib.jpg?s=612x612&w=0&k=20&c=BQtFBOEAK7Gelj8qHZLQMpwdfAJA4TxBZHe7CpenkDI=",
        type: "therapeutic ",
        paragraph: therapeutic
    },
    {
        id: 10,
        image: "https://media.istockphoto.com/id/1328549226/photo/newborn-children-are-in-the-boxes-in-the-hospital.jpg?s=612x612&w=0&k=20&c=AbysLpYOgWSAY2R229Yp0g_c2cRL7m9KOBQidBG81Gc=",
        type: "emergency ",
        paragraph: emergency
    },
    {
        id: 12,
        image: "https://media.istockphoto.com/id/999302432/photo/newborn-baby-sleeping-in-hospital-bassinet.jpg?s=612x612&w=0&k=20&c=zj89rbvGVOlO1VqK-k1V6GTRrohgiWF0n_G8IPQoBbg=",
        type: "normal ",
        paragraph: normal
    },
    {
        id: 13,
        image: "https://media.istockphoto.com/id/185056652/photo/father-touching-head-of-a-premature-baby-in-incubator.jpg?s=612x612&w=0&k=20&c=HDyr1BR4k_lwadXl2z9XPhwjAETB5kHFTMiUK8Mnz4c=",
        type: "normal ",
        paragraph: normal
    },

    {
        id: 15,
        image: "https://media.istockphoto.com/id/493216275/photo/nurses-monitoring-baby-in-incubator.jpg?s=612x612&w=0&k=20&c=83q8DR2f-xWwrmyFtBYFarT3IGhUPVwjX4m6-lMNUEA=",
        type: "therapeutic ",
        paragraph: therapeutic
    },
    {
        id: 16,
        image: "https://media.istockphoto.com/id/1216934860/photo/premature-baby-lies-in-the-incubator.jpg?s=612x612&w=0&k=20&c=0TIF5-vyaAZuUr7lTXzjEEn0dv5w6dKVKM6o9KeKbFo=",
        type: "emergency ",
        paragraph: emergency
    },
]
export let api_two = [{
    id: 1,
    image: "https://bioxlab-next-js.vercel.app/assets/img/team/team-thumb-01.jpg",
    name: "Cameron Williamson",
    speciale: "GENETIC SPECIALIST",
    phone: '01255778899',
    days: "Monday, Tueday, Wedday"
},
{
    id: 2,
    image: "https://bioxlab-next-js.vercel.app/assets/img/team/team-thumb-02.jpg",
    name: "Savannah Nguyen",
    speciale: "ANAESTHETIST SPECIALIST",
    phone: '01022447722',
    days: "Thuday, Friday, Wedday"
},
{
    id: 3,
    image: "https://bioxlab-next-js.vercel.app/assets/img/team/team-thumb-03.jpg",
    name: "Darlene Robertson",
    speciale: "GYNAECOLOGIST SPECIALIST",
    phone: '01044778855',
    days: "Thuday, Thuday, Friday"
}
]
export let api_there = [

    "https://labartisan.net/demo/mukti/assets/images/depart/icon/01.png",
    "https://labartisan.net/demo/mukti/assets/images/depart/icon/03.png",
    "https://labartisan.net/demo/mukti/assets/images/depart/icon/04.png",
    "https://labartisan.net/demo/mukti/assets/images/depart/icon/05.png",
    "https://labartisan.net/demo/mukti/assets/images/depart/icon/06.png",
    "https://labartisan.net/demo/mukti/assets/images/depart/icon/07.png",
    "https://labartisan.net/demo/mukti/assets/images/depart/icon/08.png",
    "https://labartisan.net/demo/mukti/assets/images/depart/icon/09.png",
]
export let allImages = [
    {
        id: 1,
        image: ser1,
        speciality: "Speciality Stomach 1"
    },
    {
        id: 2,
        image: ser2,
        speciality: "Speciality Genetic 2"
    },
    {
        id: 3,
        image: ser3,
        speciality: "Speciality Neurologist 3"
    },
    {
        id: 4,
        image: ser4,
        speciality: "Speciality Cardiology 4"
    },
    {
        id: 5,
        image: ser5,
        speciality: "Speciality Analysis 5"
    },
    {
        id: 6,
        image: ser6,
        speciality: "Speciality Analysis 6"
    },
    {
        id: 7,
        image: ser7,
        speciality: "Speciality Samples 7"
    },
    {
        id: 8,
        image: ser8,
        speciality: "Speciality Samples  8"
    },
]
export let slide_image = [
    "https://media.istockphoto.com/id/1152843156/photo/manicurist-does-manicure.jpg?s=612x612&w=0&k=20&c=3nRSQ6jAEhFvWaGZvbScAmRkwyBBN4_PYXD8MD8i44E=",
    "https://media.istockphoto.com/id/1455240607/photo/mother-applying-body-cream-on-her-little-baby-indoors-closeup.jpg?s=612x612&w=0&k=20&c=ymYC1SVOqZw4f961Fj2xcXorWj-uyOMuKugCf0vFZP0=",
    "https://media.istockphoto.com/id/1267953883/photo/mother-holds-the-child-in-her-arms-selective-focus.jpg?s=612x612&w=0&k=20&c=Pxunl3kUarZzeQVTK63R_cXt6t7Qe_cuh5LYLR_GpJw=",
    "https://media.istockphoto.com/id/1323588115/photo/shot-focused-on-little-feet-of-fraternal-twins.jpg?s=612x612&w=0&k=20&c=ZvZYLvwjmFAfjiISCozMlnx3PpNlX4D5A8-cqqCI8NU=",
    "https://media.istockphoto.com/id/1339057873/photo/baby-feet-close-up-on-white-background.jpg?s=612x612&w=0&k=20&c=QLnMp6PLl9Q4ODfVFUWZ2xE3W5UnYNu1ztpyyiY3aio=",
    "https://media.istockphoto.com/id/694171558/photo/newborn-concept.jpg?s=612x612&w=0&k=20&c=Jw7ElVRZYFnORw0NMJVU8LbC0_4yrlyrh2QUPNNbr3c="
]
export let nicu = [
    {
        id: 1,
        name: "Al Hamd NICU",
        place: "Giza",
        price: 600,
        images: "https://media.istockphoto.com/id/517612618/photo/premature-newborn-baby-girl.jpg?s=612x612&w=0&k=20&c=KnImoy8u29Y2OKa_RFYSBjVcKz1qFbpVfJvX2gSi9To=",
        desc: "Providing all emergency medical equipment",
        bed: 20,
        rate: 8.4,
        phone: '010234689',
        content: "The safety of the nursery does not depend only on its ability to reach the needs of the child, but the most dangerous part is its stability and accuracy.",
    },
    {
        id: 2,
        name: "Nasser Institute",
        place: "Cairo",
        price: 750,
        images: "https://media.istockphoto.com/id/901063812/photo/newborn-premature-baby-in-the-nicu-intensive-care.jpg?s=612x612&w=0&k=20&c=F1QXCYOr1nzhZlxjq4SNCFGdVvCnUhYiWGFwfWjUSFc=",
        desc: "We control the manufacture of safe baby nurseries on children's health",
        bed: 25,
        rate: 9.5,
        phone: '012258976',
        content: "The safety of the nursery does not depend only on its ability to reach the needs of the child, but the most dangerous part is its stability and accuracy.",
    },
    {
        id: 3,
        name: "El Shrouq Care",
        place: "Alex",
        price: 450,
        images: "https://media.istockphoto.com/id/884272348/photo/newborn-baby-girl-inside-incubator-in-hospital-post-delivery-room.jpg?s=612x612&w=0&k=20&c=A2kxpCaygDYg1_JC6xFHYbiGRnCjFNgHDOURDwgL6fA=",
        desc: "Providing all emergency medical equipment",
        bed: 38,
        rate: 7.9,
        phone: '0125976686',
        content: "The safety of the nursery does not depend only on its ability to reach the needs of the child, but the most dangerous part is its stability and accuracy.",
    },
    {
        id: 4,
        name: "Delta Care",
        place: "Mahala-qubra",
        price: 300,
        images: "https://media.istockphoto.com/id/866792588/photo/new-born-baby-in-the-hospital-incubator.jpg?s=612x612&w=0&k=20&c=AfU-XwNsAebXncF1jPj4rJPNuEqBbwBZJjtqZ3xXs4g=",
        desc: "We control the manufacture of safe baby nurseries on children's health",
        bed: 15,
        rate: 9.1,
        phone: '01134567899',
        content: "The safety of the nursery does not depend only on its ability to reach the needs of the child, but the most dangerous part is its stability and accuracy.",
    },
    {
        id: 5,
        name: "BirthRight Chaildren Hospital ",
        place: "Cairo",
        price: 500,
        images: "https://media.istockphoto.com/id/954011798/photo/mother-touching-baby-in-crib.jpg?s=612x612&w=0&k=20&c=u54dJpGYAkb6Vf9lGZq3GsN2y4ZxcvuaQR0Vq_B1pjY=",
        desc: "Providing all emergency medical equipment",
        bed: 20,
        rate: 8.6,
        phone: '015987688',
        content: "The safety of the nursery does not depend only on its ability to reach the needs of the child, but the most dangerous part is its stability and accuracy.",
    },
    {
        id: 6,
        name: "Equipment NICU",
        place: "Tagamo3",
        price: 600,
        images: "https://media.istockphoto.com/id/866792588/photo/new-born-baby-in-the-hospital-incubator.jpg?s=612x612&w=0&k=20&c=AfU-XwNsAebXncF1jPj4rJPNuEqBbwBZJjtqZ3xXs4g=",
        desc: "We control the manufacture of safe baby nurseries on children's health",
        bed: 25,
        rate: 8.2,
        phone: '0126498787',
        content: "The safety of the nursery does not depend only on its ability to reach the needs of the child, but the most dangerous part is its stability and accuracy.",
    },
]

export let slideImages = [
    "https://media.istockphoto.com/id/517612618/photo/premature-newborn-baby-girl.jpg?s=612x612&w=0&k=20&c=KnImoy8u29Y2OKa_RFYSBjVcKz1qFbpVfJvX2gSi9To=",
    "https://media.istockphoto.com/id/901063812/photo/newborn-premature-baby-in-the-nicu-intensive-care.jpg?s=612x612&w=0&k=20&c=F1QXCYOr1nzhZlxjq4SNCFGdVvCnUhYiWGFwfWjUSFc=",
    "https://media.istockphoto.com/id/884272348/photo/newborn-baby-girl-inside-incubator-in-hospital-post-delivery-room.jpg?s=612x612&w=0&k=20&c=A2kxpCaygDYg1_JC6xFHYbiGRnCjFNgHDOURDwgL6fA=",
    "https://media.istockphoto.com/id/866792588/photo/new-born-baby-in-the-hospital-incubator.jpg?s=612x612&w=0&k=20&c=AfU-XwNsAebXncF1jPj4rJPNuEqBbwBZJjtqZ3xXs4g=",
    "https://media.istockphoto.com/id/954011798/photo/mother-touching-baby-in-crib.jpg?s=612x612&w=0&k=20&c=u54dJpGYAkb6Vf9lGZq3GsN2y4ZxcvuaQR0Vq_B1pjY=",
    "https://media.istockphoto.com/id/866792588/photo/new-born-baby-in-the-hospital-incubator.jpg?s=612x612&w=0&k=20&c=AfU-XwNsAebXncF1jPj4rJPNuEqBbwBZJjtqZ3xXs4g=",
]

export let slideBlog = [
    {
        id: 1,
        image: "https://media.istockphoto.com/id/1159075203/photo/unknown-doctor-and-patient-talking-while-sitting-at-the-desk-in-hospital-office-close-up-of.jpg?s=612x612&w=0&k=20&c=HsvB4HsVrscIOuumBwDd487Ez1iZ2rPrPCh1uxPDRUA=",
    },
    {
        id: 2,
        image: "https://media.istockphoto.com/id/1355188794/photo/doctor-explaining-procedure-to-patient.jpg?s=612x612&w=0&k=20&c=Cfdct9bx_SHT5dt6bTzbmuOWXnEOO1wTZ1-UDVMPn9o=",
    },
    {
        id: 3,
        image: "https://media.istockphoto.com/id/1481210682/photo/updating-his-clients-records.jpg?s=612x612&w=0&k=20&c=JovMwIV9aGpDT07ZOYPS-k5QcqkqjOzABcXR_PKdjRM=",
    },
    {
        id: 4,
        image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 5,
        image: "https://media.istockphoto.com/id/1373659740/photo/shot-of-a-young-doctor-sharing-information-from-his-digital-tablet-with-an-older-patient.jpg?s=612x612&w=0&k=20&c=xi-5BceyNKDF919oSK3GheekuIGTJ5Jl3ccWopz47LE=",
    },
    {
        id: 6,
        image: "https://images.pexels.com/photos/3376797/pexels-photo-3376797.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
        id: 7,
        image: "https://images.pexels.com/photos/3279209/pexels-photo-3279209.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
]
export let postCategory = [
    {
        id: 1,
        type: "Jaundice",
        num: "05"
    },
    {
        id: 2,
        type: "Umbilical hernia",
        num: "12"
    },
    {
        id: 3,
        type: "Drought",
        num: "28"
    },
    {
        id: 4,
        type: "Fever",
        num: "09"
    },
    {
        id: 5,
        type: "Constipation",
        num: "07"
    },
]

export const cards = [
    {
        header: "Treatment",
        image: cardOne,
        text: "Support physical growth and development Encourage healthy interactions Provide a safe outlet from unfamiliar experiences Allow your child to practice and process medical experiences"
    },
    {
        header: "Care",
        image: cardTwo,
        text: "Care for children and their families is also provided in hospitals and in their homes Psychosocial care programs for children and their families in hospitals are managed by child life specialists and mentors"
    },
    {
        header: "Safety",
        image: cardThree,
        text: "The nursery provides a healthy medium for the growth of the child who has not yet fully developed in his mother’s womb, where heating factors and the appropriate oxygen level are available, and it is far from pollution"
    },
    {
        header: "Check",
        image: cardFour,
        text: "The duration of the child’s stay in the nursery due to breathing or bile is determined by the doctor, and it varies according to the date of his birth, the development of his condition, and his response to treatment"
    },
    {
        header: "Protection",
        image: cardFive,
        text: "Most babies admitted to the NICU are preterm (born before 37 weeks of pregnancy), have low birth weight (less than 5.5 pounds), or have a health condition that needs special care"
    },
]

export const cardUs = [
    {
        header: "GRAPHIC DESIGN",
        image: moSameer,
        text: "Designing the shape of the site was one of the agreed tasks in order for it to be a pleasant site for the user and reduce the burden of disease, and this is what was created, a beautiful, suitable and easy design."
    },
    {
        header: "BACKEND",
        image: moAli,
        text: "Our role as a backend required user privacy and patient data protection, so we provided a system work environment that helps build a site to provide user needs, starting from user data to booking and paying for the NICU."
    },
    {
        header: "FRONTEND",
        image: moSamy,
        text: "Our goal was to build a site that helps children with stunted growth, and what was created was an easy site  user-friendly, aesthetically pleasing, and functionally efficient using React js."
    },
    {
        header: "FRONTEND",
        image: moSayd,
        text: "I used the latest tools in react js in order to make a fast website that provides all the means to help patients in an easy way for all people."
    },
    {
        header: "IOT",
        image: moSafy,
        text: "Among the means of increasing reassurance, we have added a special part for IOT by sending direct statistics without referring to an official, so that you become aware of your child’s condition 24 hours a day from your place."
    },
]