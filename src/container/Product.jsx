import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import axios from "axios";
import { CardProduct } from '../components/CardProduct';

export const Product = (props) => {


    const { ele } = props.location.state;
    let typeInicial = ele
    //console.log(typeInicial);

    const [categories, setCategories] = useState([]);
    const [type, setType] = useState(typeInicial);

    useEffect(() => {
        axios.get(`http://localhost:3004/category`).then((res) => {
            const data = res.data;
            setCategories(data);
        });
    }, []);

    const handleClick = (name) => {
        setType(name);
        //console.log(type);
    };
    return (
        <div>
            {
                categories.map(ele => (
                    <div className="m-4" key={ele.id}>
                        <Button
                            type="button"
                            className="btn btn-dark"
                            onClick={() => handleClick(ele.name)}
                        >
                            {ele.name}
                        </Button>
                    </div>
                ))
            }
            <CardProduct type={type} />
        </div>
    )
}
