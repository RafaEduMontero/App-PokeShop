import React from 'react';
//Atomics
import IconBack from '../atomics/iconBack';
import InputHookForm from '../atomics/input_hook_form';
//Images
import form from '../images/pokebolas.jpg';
//react-router
import { Link } from 'react-router-dom';
import SpanField from './span_field';

const FormField = ({handleSubmit,onSubmit,register,errors,activo}) =>{
    return(
        <div className="modal-dialog text-center">
                <div className="col-sm-8 main-section">
                    <div className="modal-content">
                        <div className="col-12 user-img">
                            <img src={form} />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <InputHookForm
                                    type="text" 
                                    className="form-control" 
                                    name="username" 
                                    placeholder="Nombre" 
                                    register={register}
                                />
                                {errors.username && 
                                    <SpanField contenido="El nombre es requerido" className="text-warning"/>}
                            </div>
                            <div className="form-group">
                                <InputHookForm
                                    type="email" 
                                    className="form-control" 
                                    name="email" 
                                    placeholder="Email" 
                                    register={register}/>
                                {errors.email && 
                                    <SpanField contenido="El email es requerido" className="text-warning"/>}
                            </div>
                            <input 
                                type="submit" 
                                className={`btn ${activo ? 'btn-dark' : 'btn-primary'}`} 
                                disabled={activo}
                            />
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
    )
}

export default FormField;