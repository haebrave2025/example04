import React, {useEffect, useState} from 'react';

{
    /* The following line can be included in your src/index.js or App.js file */
}

import {Button, Card, Col, Container, Row} from "react-bootstrap";

const actingList = [
    {
        "adult": false,
        "id": 5330762,
        "name": "凪光",
        "original_name": "凪光",
        "media_type": "person",
        "popularity": 0.9963,
        "gender": 0,
        "known_for_department": null,
        "profile_path": "/rrzF4vO9axxsATv9OoObuBdH1aR.jpg"
    },
    {
        "adult": false,
        "id": 16620,
        "name": "Hulk Hogan",
        "original_name": "Hulk Hogan",
        "media_type": "person",
        "popularity": 5.4964,
        "gender": 2,
        "known_for_department": "Acting",
        "profile_path": "/i27iSeP7hhtlFOeVnthRQ9Ox2m4.jpg"
    },
    {
        "adult": false,
        "id": 2788933,
        "name": "Sky Wang",
        "original_name": "Sky Wang",
        "media_type": "person",
        "popularity": 0.0143,
        "gender": 2,
        "known_for_department": "Directing",
        "profile_path": "/7lpWPbxzhB0K0ogDBJe7X3cVujW.jpg"
    },
    {
        "adult": false,
        "id": 1253360,
        "name": "Pedro Pascal",
        "original_name": "Pedro Pascal",
        "media_type": "person",
        "popularity": 22.5596,
        "gender": 2,
        "known_for_department": "Acting",
        "profile_path": "/9VYK7oxcqhjd5LAH6ZFJ3XzOlID.jpg"
    },
    {
        "adult": false,
        "id": 2710789,
        "name": "Seung Ha",
        "original_name": "채승하",
        "media_type": "person",
        "popularity": 1.5885,
        "gender": 1,
        "known_for_department": "Acting",
        "profile_path": "/nvSJiHakYrDa3CedKSVOEsbLLX8.jpg"
    },
    {
        "adult": false,
        "id": 185777,
        "name": "Kelly Kimball",
        "original_name": "Kelly Kimball",
        "media_type": "person",
        "popularity": 0.1834,
        "gender": 0,
        "known_for_department": "Costume & Make-Up",
        "profile_path": null
    },
    {
        "adult": false,
        "id": 11505,
        "name": "John Hughes",
        "original_name": "John Hughes",
        "media_type": "person",
        "popularity": 1.1662,
        "gender": 2,
        "known_for_department": "Writing",
        "profile_path": "/7QBh9D3Qjf667Q549VeJAAV7O38.jpg"
    },
    {
        "adult": false,
        "id": 19292,
        "name": "Adam Sandler",
        "original_name": "Adam Sandler",
        "media_type": "person",
        "popularity": 5.2739,
        "gender": 2,
        "known_for_department": "Acting",
        "profile_path": "/iTMnXrPfC1rmom6a9q4hy6YSJWG.jpg"
    },
    {
        "adult": false,
        "id": 3904236,
        "name": "Azi Acosta",
        "original_name": "Azi Acosta",
        "media_type": "person",
        "popularity": 8.721,
        "gender": 1,
        "known_for_department": "Acting",
        "profile_path": "/ANDA47GMfwbCtHfKafl09rcv6c.jpg"
    },
    {
        "adult": false,
        "id": 12208,
        "name": "Ozzy Osbourne",
        "original_name": "Ozzy Osbourne",
        "media_type": "person",
        "popularity": 5.1799,
        "gender": 2,
        "known_for_department": "Acting",
        "profile_path": "/aigv9Ci5F5tPnJwt7ci1adQdRjc.jpg"
    },
    {
        "adult": false,
        "id": 5248794,
        "name": "桃乃木かな",
        "original_name": "桃乃木かな",
        "media_type": "person",
        "popularity": 0.8811,
        "gender": 0,
        "profile_path": "/aI3QvSGFFxEil6dGadkRZYAFaxe.jpg"
    },
    {
        "adult": false,
        "id": 221773,
        "name": "Saori Hayami",
        "original_name": "早見沙織",
        "media_type": "person",
        "popularity": 4.0221,
        "gender": 1,
        "known_for_department": "Acting",
        "profile_path": "/gLv9lO7dlUbIsmyJUvgegqAAXki.jpg"
    },
    {
        "adult": false,
        "id": 5573446,
        "name": "森日向子",
        "original_name": "森日向子",
        "media_type": "person",
        "popularity": 0.4477,
        "gender": 0,
        "profile_path": null
    },
    {
        "adult": false,
        "id": 3164807,
        "name": "Yoon Yool",
        "original_name": "윤율",
        "media_type": "person",
        "popularity": 9.2315,
        "gender": 1,
        "known_for_department": "Acting",
        "profile_path": "/21kdujBeL2hrJ50RyMxmuEsHZAT.jpg"
    },
    {
        "adult": false,
        "id": 9778,
        "name": "Ice Cube",
        "original_name": "Ice Cube",
        "media_type": "person",
        "popularity": 1.5257,
        "gender": 2,
        "known_for_department": "Acting",
        "profile_path": "/ymR7Yll7HjL6i6Z3pt435hYi91T.jpg"
    },
    {
        "adult": false,
        "id": 500,
        "name": "Tom Cruise",
        "original_name": "Tom Cruise",
        "media_type": "person",
        "popularity": 16.0011,
        "gender": 2,
        "known_for_department": "Acting",
        "profile_path": "/3mShHjSQR7NXOVbdTu5rT2Qd0MN.jpg"
    },
    {
        "adult": false,
        "id": 1688124,
        "name": "Park Joo-bin",
        "original_name": "Park Joo-bin",
        "media_type": "person",
        "popularity": 2.5213,
        "gender": 1,
        "known_for_department": "Acting",
        "profile_path": "/4nBQP186tLmNRZ1Uf20nw42z2iF.jpg"
    },
    {
        "adult": false,
        "id": 15218,
        "name": "James Gunn",
        "original_name": "James Gunn",
        "media_type": "person",
        "popularity": 5.7455,
        "gender": 2,
        "known_for_department": "Writing",
        "profile_path": "/pnKqZub3IlKYbyH9RRTMDOoqEn0.jpg"
    },
    {
        "adult": false,
        "id": 12799,
        "name": "Jeremy Piven",
        "original_name": "Jeremy Piven",
        "media_type": "person",
        "popularity": 2.0705,
        "gender": 2,
        "known_for_department": "Acting",
        "profile_path": "/pBD1jcAZiDrHWcFpJtBtqLRD4gR.jpg"
    },
    {
        "adult": false,
        "id": 5344586,
        "name": "石川澪",
        "original_name": "石川澪",
        "media_type": "person",
        "popularity": 0.3304,
        "gender": 0,
        "profile_path": null
    }
]

const ActingList = () => {

    const [actings, setActings] = useState()

    useEffect(() => {
        setActings(actingList)
    }, []);


    // "https://image.tmdb.org/t/p/w500"+acting.profile_path
    return (
        <Container>
            <Row>
                {actings?.map((acting) => (
                    <Col className={"mt-3"}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={acting.profile_path ? (
                                "https://image.tmdb.org/t/p/w500"+acting.profile_path
                            ) : (
                                "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
                            )} />
                            <Card.Body>
                                <Card.Title>{acting.name}</Card.Title>
                                <Card.Title>{acting.known_for_department ? (
                                    acting.known_for_department
                                ) : (
                                    "직업정보 없음"
                                )}</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        {/*<h1>{acting.original_name}</h1>*/}
                        {/*<h2>직업:{acting.known_for_department ? (*/}
                        {/*    acting.known_for_department*/}
                        {/*) : (*/}
                        {/*    "직업정보 없음"*/}
                        {/*)}</h2>*/}
                        {/*<img src={"https://image.tmdb.org/t/p/w500"+acting.profile_path}/>*/}
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ActingList;