import React from 'react';
import { LoginContainer } from './LoginStyle';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../../Context/Context';

const initialValues = {
  email: '',
  password: ''
}


const validationSchema = Yup.object({
  email: Yup.string().required('Required').email('Formato do email Invalido '),
  password: Yup.string().required('Required')
})

export default function Login() {
  const { myLogin } = useContext(MyContext)
  const history = useHistory();

  const redirect = async (_values) => {
    await myLogin(_values)
    history.push('/home');

  }

  const onSubmit = values => {
    console.log('form data', values);
    redirect(values)
  }


  return (
    <LoginContainer>
      <div>
        <h1>Blockflix</h1>

        <section className="main-container">
          <h2>Entrar</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit && redirect}
          >

            {formik => {
              return (
                <Form className="input-container" >
                  <div className="form-control">

                    <Field type="email"
                      placeholder={`email@example.com`}
                      name="email"
                      id="email"
                    />

                    <ErrorMessage name="email">
                      {errorMsg => <div className="error">{errorMsg}</div>}
                    </ErrorMessage>

                  </div>

                  <div className="form-control">

                    <Field type="password"
                      placeholder={`***`}
                      name="password"
                      id="password"
                    />

                    <ErrorMessage name="password">
                      {errorMsg => <div className="error">{errorMsg}</div>}
                    </ErrorMessage>
                  </div>

                  <button type="submit" disabled={!formik.isValid}>ENTRAR</button>

                  <p>Esqueceu a senha?</p>
                </Form>
              )
            }}
          </Formik>
        </section>
      </div>
    </LoginContainer>
  )
}



/*import {BrowserRouter as Router , Switch,Route, Link } from "react-router-dom";
import React from 'react';
import { Formik } from 'formik';*/


/*
const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button  type="submit" disabled={isSubmitting}>
           Entrar
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
*/



/*function Login() {
  return (
    <div className="App">
      <p>Aqui é o Login</p>
      <p><Link to="/home">Entrar</Link></p>
    </div>
  );
}

export default Login;*/
