/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react';
import Head from 'next/head';
import { CgTrash } from 'react-icons/cg';
import * as Yup from 'yup';
import { FieldArray, Formik } from 'formik';
import axios from '../../settings/axios';
import FormBackgroundSvg from '../assets/form-background.svg';
import { Button } from '../components/Button';
import { SpacingBox } from '../components/Divider';
import FormInput from '../components/FormInput';
import {
  Container,
  Form,
  FormWrapper,
  InputAndButtonWrapper,
} from '../styles/pages/createSurvey';

const Home: React.FC = () => {
  const formInitialValues = { title: '', description: '', options: ['', ''] };

  const onSubmit = useCallback(
    ({ title, description, options }: typeof formInitialValues) => {
      axios.post('/api/createSurvey', {
        title,
        description,
        options,
      });
    },
    [formInitialValues],
  );

  const formSchema = Yup.object().shape({
    title: Yup.string()
      .required('Required!')
      .min(2, 'Too short!')
      .max(100, 'Too long!'),
    description: Yup.string()
      .required('Required!')
      .min(5, 'Too short!')
      .max(200, 'Too long!'),
    options: Yup.array()
      .of(Yup.string().required('Required!'))
      .min(2, `Too little!`)
      .max(4, 'Too much!'),
  });

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
              initialValues={formInitialValues}
              onSubmit={(values) => onSubmit(values)}
              validationSchema={formSchema}
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
                    value={values.title}
                    onChange={handleChange}
                    error={
                      errors.title && touched.title ? errors.title : undefined
                    }
                  />
                  <SpacingBox height="1.5rem" />
                  <FormInput
                    labelText="Descrição"
                    inputName="description"
                    type="textarea"
                    value={values.description}
                    onChange={handleChange}
                    error={
                      errors.description && touched.description
                        ? errors.description
                        : undefined
                    }
                  />
                  <SpacingBox height="1.5rem" />
                  <FieldArray
                    name="options"
                    render={(arrayHelpers) => (
                      <div>
                        {values.options.map((_, index) => {
                          return index + 1 === values.options.length ? (
                            <InputAndButtonWrapper key={index}>
                              <FormInput
                                labelText={`Opção ${index + 1}`}
                                inputName={`options.${index}`}
                                type="text"
                                value={values.options[index]}
                                onChange={handleChange}
                                error={
                                  errors?.options?.[index] &&
                                  touched?.options?.[index]
                                    ? errors.options[index]
                                    : undefined
                                }
                              />
                              {values.options.length >= 3 && (
                                <Button
                                  fontSize="large"
                                  size="small"
                                  backgroundColor="red"
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  <CgTrash />
                                </Button>
                              )}
                              {values.options.length <= 3 && (
                                <Button
                                  fontSize="large"
                                  size="small"
                                  backgroundColor="primary"
                                  type="button"
                                  onClick={() => arrayHelpers.push('')}
                                >
                                  +
                                </Button>
                              )}
                            </InputAndButtonWrapper>
                          ) : (
                            <div key={index}>
                              <FormInput
                                labelText={`Opção ${index + 1}`}
                                inputName={`options.${index}`}
                                value={values.options[index]}
                                type="text"
                                onChange={handleChange}
                                error={
                                  errors?.options?.[index] &&
                                  touched?.options?.[index]
                                    ? errors.options[index]
                                    : undefined
                                }
                              />
                              <SpacingBox height="1.5rem" />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  />

                  <SpacingBox height="1.5rem" />

                  <Button
                    fontSize="normal"
                    size="large"
                    backgroundColor="secondary"
                    type="submit"
                    onClick={() => handleSubmit}
                  >
                    criar
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
