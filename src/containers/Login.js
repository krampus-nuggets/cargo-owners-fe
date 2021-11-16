import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Section from "../components/global/Section";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <Section background={ true }>
            <div className="h-full flex justify-center items-center">
                <div id="login-form" className="w-96 flex flex-col p-4 bg-white rounded-xl">
                    <Form onSubmit={handleSubmit}>
                        <span className="font-bold text-2xl center underline">
                            Login
                        </span>
                        <Form.Group size="lg" controlId="email" className="mt-4">
                            <Form.Label className="font-bold">Email</Form.Label>
                            <Form.Control
                                className="bg-black text-white rounded-lg"
                                placeholder="Default Value - Owner"
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="text-sm">
                                * Please enter your username in the field above.
                            </span>
                        </Form.Group>
                        <Form.Group size="lg" controlId="password" className="mt-4">
                            <Form.Label className="font-bold">Password</Form.Label>
                            <Form.Control
                                className="bg-black text-white rounded-lg"
                                placeholder="Default Value - Cargo"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="text-sm">
                                * Please enter your password in the field above.
                            </span>
                        </Form.Group>
                        <div className="text-center">
                            <Link to="/dashboard">
                                <Button block size="lg" type="submit" disabled={!validateForm()} className="mt-4 px-4 bg-black text-white">
                                    Login
                                </Button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </Section>
    );
}

export default Login;