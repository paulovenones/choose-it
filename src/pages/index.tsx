/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react';
import Head from 'next/head';
import { CgTrash } from 'react-icons/cg';
import * as Yup from 'yup';
import { FieldArray, Formik } from 'formik';
import axios from '../../settings/axios';
import FormBackgroundSvg from '../assets/form-background.svg';
import { Button } from '../components/Button';
import FormInput from '../components/FormInput';

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
    <div className="w-screen">
      <Head>
        <title>Choose it!</title>
      </Head>

      <main className="w-full h-full">
        <div className="hidden md:block">
          <FormBackgroundSvg />
        </div>

        <div className="flex flex-col items-center flex-1 md:absolute md:w-3/5 md:h-5/6 md:tp top-20 bottom-0 left-0 right-0 m-auto bg-white py-9 md:px-20 px-4 md:shadow rounded">
          <h1 className="text-4xl text-blue-500">crie uma votação</h1>

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
              <form
                onSubmit={handleSubmit}
                className="w-full mt-8 overflow-y-scroll no-scrollbar"
              >
                <div className="mb-4">
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
                </div>
                <div className="mb-4">
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
                </div>
                <FieldArray
                  name="options"
                  render={(arrayHelpers) => (
                    <div>
                      {values.options.map((_, index) => {
                        return index + 1 === values.options.length ? (
                          <div
                            className="flex items-end justify-between md:w-3/4"
                            key={index}
                          >
                            <div className="flex-1">
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
                            </div>
                            <div className="flex ml-6">
                              {values.options.length >= 3 && (
                                <div className="mr-6">
                                  <Button
                                    buttonStyle="attention"
                                    fontSize="large"
                                    size="small"
                                    type="button"
                                    onClick={() => arrayHelpers.remove(index)}
                                  >
                                    <div className="flex flex-col m-auto content-center items-center fw-full">
                                      <CgTrash />
                                    </div>
                                  </Button>
                                </div>
                              )}
                              {values.options.length <= 3 && (
                                <Button
                                  buttonStyle="primary"
                                  fontSize="large"
                                  size="small"
                                  type="button"
                                  onClick={() => arrayHelpers.push('')}
                                >
                                  +
                                </Button>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div key={index} className="mb-4">
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
                          </div>
                        );
                      })}
                    </div>
                  )}
                />
                <div className="flex justify-center mt-6 w-full my-0 mx-auto">
                  <Button
                    buttonStyle="secondary"
                    fontSize="normal"
                    size="large"
                    type="submit"
                    onClick={() => handleSubmit}
                  >
                    criar
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </main>
    </div>
  );
};

export default Home;
