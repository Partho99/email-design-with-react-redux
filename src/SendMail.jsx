import React from 'react';
import './SendMail.css';
import {Close} from "@material-ui/icons";
import {Button} from "@material-ui/core";
import {useForm} from "react-hook-form";

const SendMail = () => {

    /*
    * react hook form need this destructured object to operate on
    * form value
     */
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='sendMail'>
            <div className={'sendMail__header'}>
                <h3>New Message</h3>
                <Close className='sendMail__close'/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name='to'
                    placeholder='To'
                    type="text"
                    {...register('to', {required: true})}
                />
                {errors.to && <p className={'sendMail__error'}>
                    to is required
                </p>
                }
                <input
                    name='subject'
                    placeholder='Subject'
                    type="text"
                    {...register('subject', {required: true})}
                />
                {errors.subject && <p className={'sendMail__error'}>
                    subject is required
                </p>
                }
                <input
                    name='message'
                    placeholder='Message...'
                    type="text"
                    className='sendMail__message'
                    {...register('message', {required: true})}
                />
                {errors.message && <p className={'sendMail__error'}>
                    message is required
                </p>
                }
                <div className={'sendMail__options'}>
                    <Button
                        className='sendMail__send'
                        variant='contained'
                        color='primary'
                        type='submit'
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SendMail;