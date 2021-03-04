import React, { useState,useEffect } from 'react';
//Functions
import funciones from '../functions/funciones';
//Styles
import estilos_card_email from "../styles/estilos_card_email";
import { useHistory } from "react-router-dom";
//react-form-hook
import { useForm } from "react-hook-form";
//Atomics
import FormField from '../atomics/form_field';

const Form = ({cart}) => {
    const { handleSubmit,register,errors} = useForm();
    const{card2,card1_header,
        card1_body,card1_body_img,
        card1_body_span,card1_body_title,
        card1_footer,card1_footer_social,
        card1_footer_social_p} = estilos_card_email;

        const[activo,setActivo] = useState(false);

        const {primeraMayuscula,enviarMail} = funciones;

    const [datos,setDatos] = useState({
        username: '',
        email: '',
        from_name: `PokéShop`,
        imagen: cart.map((pokemon,i) =>{
            const datosPokemon={
                name : pokemon.name,
                habilidad: pokemon.abilities[0].ability.name,
                hp: pokemon.stats[0].base_stat,
                ataque: pokemon.stats[1].base_stat,
                especial: pokemon.stats[2].base_stat,
                defensa: pokemon.stats[3].base_stat,
                tipo: pokemon.types[0].type.name
            }
        
            const {name,habilidad,hp,tipo,defensa,especial,ataque} = datosPokemon;
            return(
                `
                            <article style="${card2}">
                                <div style="${card1_header}"></div>  
                                <div style="${card1_body}">
                                    <img src="${pokemon.sprites.front_default}" style="${card1_body_img}"/>
                                    <h1 style="${card1_body_title}">
                                        ${primeraMayuscula(name)}
                                    <span style="${card1_body_span}">${hp}</span>
                                    </h1>
                                    <p>Habilidad: ${habilidad}</p>
                                </div>
                                <div style="${card1_footer}">
                                    <div style="${card1_footer_social}">
                                        <h3>${tipo}</h3>
                                        <p style="${card1_footer_social_p}">Tipo</p>
                                    </div>
                                    <div style="${card1_footer_social}">
                                        <h3>${defensa}</h3>
                                        <p style="${card1_footer_social_p}">Defensa</p>
                                    </div>
                                    <div style="${card1_footer_social}">
                                        <h3>${especial}</h3>
                                        <p style="${card1_footer_social_p}">Especial</p>
                                    </div>
                                    <div style="${card1_footer_social}">
                                        <h3>${ataque}</h3>
                                        <p style="${card1_footer_social_p}">Ataque</p>
                                    </div>
                            </article>
                `
            )
        }).join(''),
    })

    let history = useHistory();
    useEffect(() =>{
        if(datos.email !== '' && datos.username !== ''){
            enviarMail(datos,setActivo,setDatos,history)
        }
    },[datos])

    const onSubmit = (data) =>{
        setDatos({...datos,username: data.username,email: data.email});
        setActivo(true)     
            }

    return (
        <FormField 
            handleSubmit={handleSubmit} 
            register={register} 
            onSubmit={onSubmit} 
            errors={errors} 
            activo={activo}/>
    )
}

export default Form;