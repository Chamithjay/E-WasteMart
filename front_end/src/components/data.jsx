import img1 from './Images/phone.jpg';
import img2 from './Images/mac.jpg';
import img3 from './Images/air.jpg';
import img4 from './Images/tv.jpg';
import img5 from './Images/4GB RAM.jpg';
import img6 from './Images/Asus Motherboard.jpg';
import img7 from './Images/intel i3.jpg';
import img8 from './Images/Power supply.jpg';

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
        }
    ]
};

export default data;