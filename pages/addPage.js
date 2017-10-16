import Link from 'next/link';
import axios from 'axios';
import React, { Component } from 'react';



export default class AddInfo extends Component{
    

    sendData = (data) => {
        axios({
            method: 'post',
            url: 'http://localhost:8000',
            data
        });
        this.refs.fName.value = '';
        this.refs.lName.value = '';
        this.refs.email.value = '';
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var data = {
            fName: this.refs.fName.value,
            lName: this.refs.lName.value,
            email: this.refs.email.value,
        }

        this.sendData(data);
        

    }


    render(){
        return(
            <div>
            <Link href="/"><a>Back</a></Link>
            <br />
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="fName">First name</label>
                <input type="text" id="fName" ref="fName" />
                <br /><br />
                <label htmlFor="lName">Last name</label>
                <input type="text" id="lName" ref="lName" />
                <br /><br />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" ref="email" />
                <br /><br />
                
                <input type="submit" value="Save & Add more" />
            </form>
            <br />
            <Link href='/'>
                <div style={{width:10}} >
                    <a type="button" onClick={this.handleSubmit}>
                        <button>
                        Save
                        </button>
                    </a>
                </div>
            </Link>
            
            </div>
        )
    }
}