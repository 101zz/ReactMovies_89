import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import GenreForm from "./GenreForm";

export default function CreateGenre() {
  //const history = useHistory();
  return (
    <>
      <h3>Create Genre</h3> 
      <GenreForm model={{name: ''}}
        onSubmit={async value => {
            // when the form is posted
            await new Promise(r => setTimeout(r, 1));
            console.log(value);
        }}
      />
    </>
  );
}
