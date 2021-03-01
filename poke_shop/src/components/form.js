import React, { Fragment, useState, useEffect } from 'react';
//Atomics
import TextFieldForm from '../atomics/textfield_form';
//Images
import form from '../images/pokebolas.jpg';
//Emailjs
import * as emailjs from 'emailjs-com';
//Functions
import funciones from '../functions/funciones';
import { Link } from 'react-router-dom';
import IconBack from '../atomics/iconBack';
import estilos_card_email from "../styles/estilos_card_email";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

const Form = ({cart}) => {
    const{flex,card2,card1_header,
        card1_body,card1_body_img,
        card1_body_span,card1_body_title,
        card1_footer,card1_footer_social,
        card1_footer_social_p,col_3} = estilos_card_email;

        let history = useHistory();

        const[activo,setActivo] = useState(false);
        const[isInvalid,setIsInvalid] = useState('');

    const [datos,setDatos] = useState({
        username: '',
        email: '',
        from_name: `PokéShop`,
        imagen: cart.map((pokemon,i) =>{
            const {primeraMayuscula} = funciones;
            const datos={
                name : pokemon.name,
                habilidad: pokemon.abilities[0].ability.name,
                hp: pokemon.stats[0].base_stat,
                ataque: pokemon.stats[1].base_stat,
                especial: pokemon.stats[2].base_stat,
                defensa: pokemon.stats[3].base_stat,
                tipo: pokemon.types[0].type.name
            }
        
            const {name,habilidad,hp,tipo,defensa,especial,ataque} = datos;
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
    const handler = (e) =>{
        const {name,value} = e.target;
        setDatos({
            ...datos,
            [name] : value
        })
    }

    const {username,email} = datos;

    const handleSubmit = e =>{
	    e.preventDefault();
        setActivo(true)
        if(username == ''){
            swal({
                text: 'Por favor ingrese un nombre',
                icon: 'warning'
            })
            setActivo(false)
            setIsInvalid('is-invalid')
        }else{
            if(email == ''){
                swal({
                    text: 'Por Favor ingrese un email',
                    icon: 'warning'
                })
                setActivo(false)
                setIsInvalid('is-invalid')
            }else{
                setIsInvalid('');
                emailjs.send('service_6sq906i','template_zyz2x9k', datos,'user_UruR9nFNkkkXSRvAD2kYZ')
                .then((response) => {
                    console.log(datos)
                        console.log("SUCCESS!", response.status, response.text);
                        swal({
                            title: '¡PokéBola Enviada! :D',
                            text: '¡¡Su Pokébola fué enviada a su mail. Gracias por elegirnos, Poke-Shop!!',
                            icon: 'success',
                            button: 'OK'
                        }).then(respuesta =>{
                            if(respuesta){
                                history.push("/busqueda");
                                setActivo(false);
                            }
                        })
                        setDatos({
                            email: '',
                            username: ''
                        });
		}, (err) => {
				   console.log("FAILED...", err);
		});
            }
        }
   }

    return (
        <Fragment>
            <div className="modal-dialog text-center">
                <div className="col-sm-8 main-section">
                    <div className="modal-content">
                        <div className="col-12 user-img">
                            <img src={form} />
                        </div>
                        <form className="col-12">
                            <div className="form-group" id="#user-group">
                                <TextFieldForm onChange={handler} className={isInvalid} type="text" value={username} placeholder="Nombre y Apellido" name="username" />
                            </div>
                            <div className="form-group" id="#email-group">
                                <TextFieldForm onChange={handler} className={isInvalid} type="email" value={email} placeholder="Email" name="email" />
                            </div>
                            <button className={`btn ${activo ? 'btn-dark' : 'btn-primary'}`} to="/busqueda" onClick={handleSubmit} disabled={activo}>Enviar pokebola</button>
                        </form>
                        <div className="row p-5">
                            <div className="col-6">
                                <Link to="/carrito" className="btn btn-danger btn-block fixed-link"><IconBack/>Carrito</Link>
                            </div>
                            <div className="col-6">
                                <Link to="/busqueda" className="btn btn-success btn-block fixed-link"><IconBack/>Buscar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Form;

//contraseña 35FF720CE48FA6C00BB014B94D91ED86A564
//servidor smtp.elasticemail.com