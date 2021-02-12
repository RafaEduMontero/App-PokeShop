import React, { Fragment, useState } from 'react';
import TextFieldForm from '../atomics/textfield_form';
import form from '../images/pokebolas.jpg';
import ButtonSend from '../atomics/button_send';
import * as emailjs from 'emailjs-com';


const Form = ({cart}) => {
    const [datos,setDatos] = useState({
        username: '',
        email: '',
        from_name: `PokéShop`,
        imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
    })
    const handler = (e) =>{
        const {name,value} = e.target;
        setDatos({
            ...datos,
            [name] : value
        })
        console.log(datos)
    }

    const handleSubmit = e =>{
	    e.preventDefault();
	   
		emailjs.send('service_6sq906i','template_zyz2x9k', datos,'user_UruR9nFNkkkXSRvAD2kYZ')
		.then((response) => {
            console.log(datos)
				   console.log("SUCCESS!", response.status, response.text);
                   <div class="alert alert-success" role="alert">A simple secondary alert—check it out!</div>
                   alert("¡¡Su Pokebola fué enviada a su email!!",response.status)
				   setDatos({
                       name: '',
                       username: ''
                   });
		}, (err) => {
				   console.log("FAILED...", err);
		});
   }

    const {username,email} = datos;
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
                                <TextFieldForm onChange={handler} type="text" value={username} placeholder="Nombre y Apellido" name="username" />
                            </div>
                            <div className="form-group" id="#email-group">
                                <TextFieldForm onChange={handler} type="email" value={email} placeholder="Email" name="email" />
                            </div>
                            {/* <button type="" className="btn btn-primary"><i className="fas fa-sign-in-alt"></i> Enviar mi PokéBola </button> */}
                            {/* <ButtonSend onClick={() => handleSubmit()} label="Enviar mi PokéBola"/> */}
                            <button className="btn btn-primary" to="/busqueda" onClick={handleSubmit}>Enviar pokebola</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Form;

//contraseña 35FF720CE48FA6C00BB014B94D91ED86A564
//servidor smtp.elasticemail.com