import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate } from './posts';
import PostIcon from '@material-ui/icons/Book';

import { FirebaseAuthProvider } from 'react-admin-firebase';
import CustomLoginPage from "./customLoginPage";



//connect the data provider to the REST endpoint
const config = {
  apiKey: "AIzaSyDVWgCFi6X2TE3JuFvXROcXMQq9JSc0o6g",
  authDomain: "my-demo-project-d5389.firebaseapp.com",
  projectId: "my-demo-project-d5389",
  storageBucket: "my-demo-project-d5389.appspot.com",
  messagingSenderId: "256735448679",
  appId: "1:256735448679:web:29149ced8c1f4ebf6e0ec2",
  measurementId: "G-88819B5DLP"
};

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const firebaseAuthProvider = FirebaseAuthProvider(config); 

const App = () => (
    <Admin dataProvider={dataProvider} authProvider={firebaseAuthProvider} loginPage={CustomLoginPage}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    </Admin>
);

export default App;