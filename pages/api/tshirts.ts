import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    let response:any = []
    let idHelper = 0;
    for (let i = 0; i < 15; i++) {
        if (i != 0) idHelper+=10
        response.push({
            "id": idHelper+0,
            "url_img": "/img1.jpg",
            "title": "REMERA SPY LIMITED HAND WHITE",
            "price": "$6.589"
        },
        {
            "id": idHelper+1,
            "url_img": "/img2.jpg",
            "title": "REMERA SPY LIMITED HAND BLUE",
            "price": "$6.589"
        },
        {
            "id": idHelper+2,
            "url_img": "/img3.jpg",
            "title": "REMERA SPY LIMITED ESCALERA ORANGE",
            "price": "$6.589"
        },
        {
            "id": idHelper+3,
            "url_img": "/img4.jpg",
            "title": "REMERA SPY LIMITED MURO ORANGE",
            "price": "$6.589"
        },
        {
            "id": idHelper+4,
            "url_img": "/img5.jpg",
            "title": "REMERA SPY LIMITED SOLID BLUE",
            "price": "$5.489"
        },
        {
            "id": idHelper+5,
            "url_img": "/img6.jpg",
            "title": "REMERA SPY LIMITED CMPNY WHITE",
            "price": "$6.589"
        },
        {
            "id": idHelper+6,
            "url_img": "/img7.jpg",
            "title": "REMERA SPY LIMITED SHINE MUSTARD",
            "price": "$6.589"
        },
        {
            "id": idHelper+7,
            "url_img": "/img8.jpg",
            "title": "REMERA SPY LIMITED SHINE LIGHT GREEN",
            "price": "$6.589"
        },
        {
            "id": idHelper+8,
            "url_img": "/img9.jpg",
            "title": "REMERA SPY LIMITED SHINE BORDEAUX",
            "price": "$6.589"
        },
        {
            "id": idHelper+9,
            "url_img": "/img10.jpg",
            "title": "REMERA SPY LIMITED SHINE WHITE",
            "price": "$6.589"
        })
        
    }
    res.status(200).json(response)
}