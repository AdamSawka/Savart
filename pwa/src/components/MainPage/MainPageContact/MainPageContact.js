import React from 'react';
import emailjs from 'emailjs-com';
import {useForm, Controller} from 'react-hook-form';
import Button from '@mui/material/Button';
import {Input, TextareaAutosize} from '@mui/material';
import {useTranslation} from 'react-i18next';
import Box from '@mui/material/Box';

const MainPageContact = () => {
  const {t} = useTranslation();
  const {control} = useForm();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_o0q4gb8',
        'template_ob6k6fb',
        e.target,
        'mzE17WK22-N3zZcD8',
      )
      .then(
        () => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        },
      );
  }

  return (
    <div className='form-container py-5'>
      <form className='contact-form mx-auto d-block' onSubmit={sendEmail}>
        <h3 className='text-center'>{t('Contact with us')}</h3>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Controller
            control={control}
            type='text'
            name='user_name'
            render={({field: {value, onChange}}) => (
              <Input
                placeholder={t('Fill Name')}
                value={value}
                onChange={onChange}
                sx={{margin: 2, width: '300px'}}
              />
            )}
          />
          <Controller
            control={control}
            type='email'
            name='user_email'
            render={({field: {value, onChange}}) => (
              <Input
                placeholder={t('Fill Mail')}
                value={value}
                type='textarea'
                onChange={onChange}
                sx={{margin: 2, width: '300px'}}
              />
            )}
          />
          <Controller
            control={control}
            type='text'
            name='text'
            render={({field: {value, onChange}}) => (
              <TextareaAutosize
                placeholder={t('Message')}
                value={value}
                minRows={5}
                onChange={onChange}
                style={{margin: 3, width: '500px'}}
              />
            )}
          />

          <Button
            className='text-center mx-auto d-block p-2 '
            type='submit'
            value='Send'
          >
            {t('Send mail')}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export {MainPageContact};
