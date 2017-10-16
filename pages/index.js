import Link from 'next/link';
import axios from 'axios';
import React, { Component } from 'react';


// export default () => (
//     <div>
//         <h1>Hello world</h1>
//         <Link href="/about"><a>About</a></Link>
//     </div>
// );

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            infos: []
        }
    }

    // static async getInitialProps() {
    //     const res = await axios.get('http://localhost:8000/data');
    //     return {data: res.data}
    //   }

    componentDidMount() {
        const that = this;
        axios({
            url: 'http://localhost:8000',
            method: 'get',
        }).then((result) => {
            var apiData = result.data;
            that.setState({
                infos: apiData
            });
        }).catch(function (error) {
            console.log(error);
        })
    }

    handleDelete = (data) => {
        var index = null;
        var infosArray = this.state.infos;
        infosArray.forEach((element, i) => {
            if(element.email === data.email){
                index = i;
            }
        })

        axios({
            method: 'delete',
            url: 'http://localhost:8000/' + index,
            
        })

        
        console.log(index)
        infosArray.splice(index, 1);
        this.setState({ infos: infosArray });
        
    }

    render(){
        var datas = this.state.infos;
        return(
            <div>
            <Link href="/addPage"><a>Add new</a></Link>
            <table>
                <thead>
                    <tr style={{border: "solid 2"}}>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {datas.map((data) => 
                    <tr key={data.email}>
                        <td>{data.fName}</td>
                        <td>{data.lName}</td>
                        <td>{data.email}</td>
                        <td><button id={data.email} onClick={() => this.handleDelete(data)}>Delete</button></td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        )
    }
}