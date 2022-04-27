import React, { useRef, useState } from 'react';
import { Form, Button, Card} from 'react-bootstrap'

export interface IUser {
    id: string,
    username: string,
    roles?: string[],
    person: IPerson,
    mode: string,
}

export interface IPerson {
    firstname: string,
    age: number,
    gender: string,
    Avatar: string,
}

const Authentication = () => {
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();
    const passwordConfirmRef = useRef<any>();

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4"> Sign Up</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required/>
                    </Form.Group>
                    <Button className="w-100" type="submit">
                        Sign up
                    </Button>
                </Form>
            </Card.Body>
        </Card>
            <div className="w-100 text-center mt-2"></div>
            Already have an account? Log in
        </>
    )

}
