import React from "react";
import emailjs from 'emailjs-com';
import {useForm, Controller} from "react-hook-form"
import Button from "@mui/material/Button";
import { Input } from '@mui/material';


const Contact = () => {
    const {control}=useForm()
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_o0q4gb8', 'template_ob6k6fb', e.target, 'mzE17WK22-N3zZcD8')
            .then((result) => {
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="form-container py-5">
            <form className= "contact-form mx-auto d-block"  onSubmit={sendEmail}>
                <h3 className="text-center">Napisz do nas</h3>
                    <Controller type="text" name="user_name"
                                   render={({value, onChange})=>{
                                      <Input placeholder="Wpisz imię:" value={value} onChange={onChange}/>
                    }}/>
                    <Controller  type="email" name="user_email"
                                  placeholder="Wpisz adres email:"/>
                    <textarea name="message"   className="form-control" id="exampleFormControlTextarea1" rows="4"> </textarea>
                <Button className="text-center mx-auto d-block p-2 " type="submit" value="Send">
                    Wyślij wiadomość
                </Button>
            </form>
        </div>
    );
}

export {Contact};