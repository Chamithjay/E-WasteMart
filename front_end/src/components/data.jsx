import img1 from './Images/phone.jpg';
import img2 from './Images/mac.jpg';
import img3 from './Images/air.jpg';
import img4 from './Images/tv.jpg';
import img5 from './Images/4GB RAM.jpg';
import img6 from './Images/Asus Motherboard.jpg';
import img7 from './Images/intel i3.jpg';
import img8 from './Images/Power supply.jpg';
import img9 from './Images/refrig.jpg';
import img10 from './Images/key.jpg';
import img11 from './Images/mic.jpg';
import img12 from './Images/wash.jpg';


const data = {
    products: [
        {
            id: 1,
            name: 'Iphone',
            description: 'Display not working. Everything else is fine.Good condition',
            price: 20000,
            img: img1,
            type:'Mobile',
            condition:'Good'
        },
        {
            id: 2,
            name: 'MacBook ',
            description: 'Display & Touch pad not working. Other hardware is good.',
            price: 85000,
            img: img2,
            type:'Laptop',
            condition:'Good'
        },
        {
            id: 3,
            name: 'Air pods(Gen 1)',
            description: 'Battery not working.Speakers are in good condition.',
            price: 15000,
            img: img3,
            type:'Earphones',
            condition:'Excellent'
        },
        {
            id: 4,
            name: 'Samsung TV ',
            description: 'Sound card not working.Speakers are in good condition.',
            price: 35000,
            img: img4,
            type:'TV',
            condition:'Poor'
        },
        {
            id: 5,
            name: '4GB RAM',
            description: 'Very good condition.Used for 1 year.',
            price: 35000,
            img: img5,
            type:'Other',
            condition:'Excellent'
        },
        {
            id: 6,
            name: 'Asus Motherboard',
            description: '90% condition.Used for 2 years.',
            price: 35000,
            img: img6,
            type:'Other',
            condition:'Good'
        },
        {
            id: 7,
            name: 'Intel i3 Processor',
            description: '8th gen processor.Used for 1 year.',
            price: 35000,
            img: img7,
            type:'Other',
            condition:'Poor'
        },
        {
            id: 8,
            name: 'Power supply',
            description: '240V 65W power supply.Used for 1 year.',
            price: 35000,
            img: img8,
            type:'Other',
            condition:'Poor'
        },
        {
            id: 9,
            name: 'Refrigerator',
            description: 'Very good condition. Have a circuit problem.',
            price: 35000,
            img: img9,
            type:'Other',
            condition:'Excellent'
        },
        {
            id: 10,
            name: 'Keyboard',
            description: '10% condition.Used for 2 years.Can negotiated.',
            price: 500,
            img: img10,
            type:'Other',
            condition:'Poor'
        },
        {
            id: 11,
            name: 'Microphone',
            description: ' Head is broken. Everything else working fine',
            price:1200,
            img: img11,
            type:'Other',
            condition:'Good'
        },
        {
            id: 12,
            name: 'Washing Machine',
            description: '240V 65W washing machine.Used for 1 year.',
            price: 35000,
            img: img12,
            type:'Other',
            condition:'Poor'
        }
    ]
};

export default data;