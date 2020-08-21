import React, { useState, FormEvent } from 'react';
import { FaGithub } from 'react-icons/fa';
import logo from '../../assets/images/GitHub_Logo.png';
import './styles.css';
import Input from '../../components/Input';
import axios from 'axios';
function Landing() {
    const [name, setName] = useState('');

    function handleSubmit(e:FormEvent){
        e.preventDefault();
        axios.get(`https://api.github.com/users/${name}`)
        .then((response)=>{
            console.log(response.data);
        })
        .catch(()=>{
            alert("Error");
        })
        console.log({
            name
        });
    }
    return (
        <div id="landing">
            <div id="landing-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt="Logo" />
                    <h2>Search for a github user</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <Input
                        name="name"
                        label="Name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Landing;