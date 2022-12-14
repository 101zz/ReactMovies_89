import { FormikHelpers, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import Map from "../utils/Map";
import { movieTheaterCreationDTO } from "./movieTheater.model";
import * as Yup from 'yup';

export default function MovieTheaterForm(props: movieTheaterForm){
    return(
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstLetterUppercase()
            })}
        >
            {(formikProps) =>(
                <Form>
                    <TextField dispalyName="Name" field="name"/>

                    <div style={{marginBottom: '1rem'}}>
                        <Map  />
                    </div>

                    <Button disabled={formikProps.isSubmitting} type="submit">
                        Save Changes
                    </Button>
                    <Link className="btn btn-secondary" to="/movietheaters">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface movieTheaterForm{
    model: movieTheaterCreationDTO;
    onSubmit(values: movieTheaterCreationDTO, actions: FormikHelpers<movieTheaterCreationDTO>): void;
}