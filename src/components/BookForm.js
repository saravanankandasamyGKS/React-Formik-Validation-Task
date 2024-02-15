// components/BookForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ onSubmit }) => {
  const initialValues = { title: '', author: '', isbn: '', publicationDate: '' };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication date is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit({ ...values, id: Date.now() });
        resetForm();
      }}
    >
      <Form>
        <div>
          <label htmlFor="title">Title</label>
          <Field type="text" name="title" />
          <ErrorMessage name="title" component="div" />
        </div>

        <div>
          <label htmlFor="author">Author</label>
          <Field type="text" name="author" />
          <ErrorMessage name="author" component="div" />
        </div>

        <div>
          <label htmlFor="isbn">ISBN</label>
          <Field type="text" name="isbn" />
          <ErrorMessage name="isbn" component="div" />
        </div>

        <div>
          <label htmlFor="publicationDate">Publication Date</label>
          <Field type="date" name="publicationDate" />
          <ErrorMessage name="publicationDate" component="div" />
        </div>

        <button type="submit">Add Book</button>
      </Form>
    </Formik>
  );
};

export default BookForm;
