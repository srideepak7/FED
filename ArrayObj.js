import React,{Component} from 'react'

export default class ArrayObj extends Component{
    constructor(props){
        super(props);
        this.state={
            sdata:[
                {sno:1,sname:"Satish",saddress:"Guntur"},
                {sno:2,sname:"Swathi",saddress:"Krishna"},
                {sno:3,sname:"Chaitu",saddress:"Godavari"},
                {sno:4,sname:"Yagna",saddress:"Hyderbad"},
            ]
        }
    }
    render()
    {
        const {sdata}=this.state;
            return(
                <div>
                    <table>
                        <tr>
                            <th>SID</th>
                            <th>SName</th>
                            <th>Saddress</th>
                        </tr>
                        {sdata.length>0 && sdata.map((student)=>{
                             return <tr key={student.sno}>
                                <td>{student.sno}</td>
                                <td>{student.sname}</td>
                                <td>{student.saddress}</td>
                             </tr>
                            })
                        }
                    </table>
                </div>
            )
        }
    }
