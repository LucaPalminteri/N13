import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    let response:any = []
    for (let i = 0; i < 15; i++) {
        response.push({
            "id": Math.floor(Math.random() * 10000),
            "url_img": "/img1.jpg",
            "title": "REMERA SPY LIMITED HAND WHITE",
            "price": "$6.589"
        },
        {
            "id": Math.floor(Math.random() * 10000),
            "url_img": "/img2.jpg",
            "title": "REMERA SPY LIMITED HAND BLUE",
            "price": "$6.589"
        },
        {
            "id": Math.floor(Math.random() * 10000),
            "url_img": "/img3.jpg",
            "title": "REMERA SPY LIMITED ESCALERA ORANGE",
            "price": "$6.589"
        },
        {
            "id": Math.floor(Math.random() * 10000),
            "url_img": "/img4.jpg",
            "title": "REMERA SPY LIMITED MURO ORANGE",
            "price": "$6.589"
        },
        {
            "id": Math.floor(Math.random() * 10000),
            "url_img": "/img5.jpg",
            "title": "REMERA SPY LIMITED SOLID BLUE",
            "price": "$5.489"
        },
        {
            "id": Math.floor(Math.random() * 10000),
            "url_img": "/img6.jpg",
            "title": "REMERA SPY LIMITED CMPNY WHITE",
            "price": "$6.589"
        },
        {
            "id": Math.floor(Math.random() * 10000),
            "url_img": "/img7.jpg",
            "title": "REMERA SPY LIMITED SHINE MUSTARD",
            "price": "$6.589"
        },
        {
            "id": Math.floor(Math.random() * 10000),
            "url_img": "/img8.jpg",
            "title": "REMERA SPY LIMITED SHINE LIGHT GREEN",
            "price": "$6.589"
        },
        {
            "id": Math.floor(Math.random() * 10000),
            "url_img": "/img9.jpg",
            "title": "REMERA SPY LIMITED SHINE BORDEAUX",
            "price": "$6.589"
        },
        {
            "id": Math.floor(Math.random() * 10000),
            "url_img": "/img10.jpg",
            "title": "REMERA SPY LIMITED SHINE WHITE",
            "price": "$6.589"
        })
        
    }
    res.status(200).json(response)
}