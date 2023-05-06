import React, {  useState } from "react";
import axios from "axios";
import { Form, FormGroup, Input, Label,  } from "react";


const emptyForm = {
    name : "",
    email : "",
    role : "",
};

function FormPage () {
    const [ formData , setFormData] = useState(emptyForm)
    
    return(

        <div>
            <Form
                onSubmit={(event) => {
                    event.preventDefault();
                    axios
                        .post(
                            "https://6455bdabf803f34576484e0c.mockapi.io /",
                            formData
                        )
                        .then((res)=>{
                            setFormData(res.data)
                        });
                }}
            > 
                <FormGroup>
                    <Label htmlFor="product-name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        onChange={(event) => {
                            setFormData({ ...formData, name: event.target.value });
                        }}
                        value={formData.name}
                    />
                
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="mail">Email</Label>
                    <Input
                        id="mail"
                        name="Email"
                        type="text"
                        onChange={(event) => {
                            setFormData({ ...formData, email: event.target.value });
                        }}
                        value={formData.email}
                    />
                    
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="role">Role</Label>
                    <Input
                        id="role"
                        name="Role"
                        type="text"
                        onChange={(event) => {
                            setFormData({ ...formData, role: event.target.value });
                        }}
                        value={formData.role}
                    />
                    
                </FormGroup>
            </Form>
        </div>
   
    );
};
export default FormPage ; 