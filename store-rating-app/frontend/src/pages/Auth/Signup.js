import React,{useState} from 'react';
import API from '../../api/axios';
export default function Signup(){
  const [form,setForm]=useState({name:'',email:'',address:'',password:''});
  const [err,setErr]=useState('');
  const submit=async e=>{e.preventDefault();try{await API.post('/auth/signup',form);alert('Signed up');}catch(ex){setErr('Error')}};
  return(<form onSubmit={submit}><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/><button>SignUp</button>{err}</form>);
}