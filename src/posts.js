import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    Create,
    Filter,
    SimpleForm,
    TextInput,
} from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const PostList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
           <TextInput disabled source="id" />
            <TextInput source="title" />
           <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);