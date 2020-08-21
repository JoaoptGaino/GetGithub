import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import logo from '../../assets/images/GitHub_Logo.png';
import './styles.css';
import Input from '../../components/Input';
function Landing() {
    const [name, setName] = useState('');
    return (
        <div id="landing">
            <div id="landing-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt="Logo" />
                    <h2>Search for a github user</h2>
                </div>
                <form>
                    <Input
                        name="name"
                        label="Name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </form>
            </div>
        </div>
    )
}

export default Landing;