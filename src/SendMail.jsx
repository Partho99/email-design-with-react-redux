import React from 'react';
import './SendMail.css';
import {Close} from "@material-ui/icons";
import {Button} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {closeSendMessage} from "./features/mailSlice";
import {db} from "./firebase";
import firebase from "firebase";

const SendMail = () => {

    /*
    * react hook form need this destructured object to operate on
    * form value
    */
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const dispatch = useDispatch();

    const closeSendEmail = () => {
        dispatch(closeSendMessage());
    }

    const onSubmit = (data) => {
        console.log(data)
        db.collection('emails').add({
            to: data.to,
            subject: data.subject,
            message: data.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(r => r);
        dispatch(closeSendMessage());
    }

    return (
        <div className='sendMail'>
            <div className={'sendMail__header'}>
                <h3>New Message</h3>
                <Close
                    className='sendMail__close'
                    onClick={closeSendEmail}
                />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name='to'
                    placeholder='To'
                    type="email"
                    {...register('to', {required: true})}
                />
                {errors.to && <p className={'sendMail__error'}>
                    To field is required
                </p>
                }
                <input
                    name='subject'
                    placeholder='Subject'
                    type="text"
                    {...register('subject', {required: true})}
                />
                {errors.subject && <p className={'sendMail__error'}>
                    Subject field is required
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
                    Message field is required
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