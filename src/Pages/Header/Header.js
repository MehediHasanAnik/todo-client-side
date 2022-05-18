
import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.int';



const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Container>

                <Nav className="mx-auto">
                    <Nav.Link as={Link} to="/todo">ToDo</Nav.Link>

                    {
                        user ?
                            <>


                                <Button onClick={logout}>SignOut</Button>
                            </>
                            :
                            " "
                    }

                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;