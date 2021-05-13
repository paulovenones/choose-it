import React, { useState } from 'react';
import Head from 'next/head';

import { Formik } from 'formik';
import FormBackgroundSvg from '../assets/form-background.svg';
import { Container, Form, FormWrapper } from '../styles/pages/createSurvey';
import FormInput from '../components/FormInput';
import { SpacingBox } from '../components/Divider';
import { Button } from '../components/Button';

const Home: React.FC = () => {
  const [options, setOptions] = useState([]);

  return (
    <div>
      <Head>
        <title>Choose it!</title>
      </Head>

      <main>
        <Container>
          <FormBackgroundSvg />
          <FormWrapper>
            <h1>crie uma votação</h1>

            <Formik
              initialValues={{ title: '', description: '', options: [] }}
              onSubmit={(values) => console.log(values)}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <SpacingBox height=".5rem" />
                  <FormInput
                    labelText="Título"
                    inputName="title"
                    placeholder="Título da sua votação"
                  />
                  <SpacingBox height="1.5rem" />
                  <FormInput
                    labelText="Descrição"
                    inputName="description"
                    type="textarea"
                  />
                  <Button
                    width="50px"
                    height="50px"
                    backgroundColor="primary"
                    fontSize="1.5rem"
                  >
                    Oi
                  </Button>
                </Form>
              )}
            </Formik>
          </FormWrapper>
        </Container>
      </main>
    </div>
  );
};

export default Home;
