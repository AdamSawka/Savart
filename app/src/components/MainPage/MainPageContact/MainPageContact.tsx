import React from 'react';
import emailjs from 'emailjs-com';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import { Box, Input } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

const MainPageContact = () => {
  const { control, handleSubmit } = useForm();
  const { t } = useTranslation();
  function sendEmail(e: any) {
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
      <form
        className='contact-form mx-auto d-block'
        onSubmit={handleSubmit(sendEmail)}
      >
        <h3 className='text-center'>{t('Contact With Us')}</h3>
        <Box sx={{ width: '100%' }} className='px-3'>
          <Controller
            control={control}
            name='user_email'
            render={({ field: { value, onChange } }) => (
              <Input
                sx={{
                  display: 'block',
                  width: '250px',
                  margin: '35px auto',
                  padding: '15px',
                }}
                type='email'
                placeholder={t('Fill Mail')}
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name='text'
            render={({ field: { value, onChange } }) => (
              <TextareaAutosize
                minRows={4}
                style={{ display: 'block', width: '100%' }}
                placeholder={t('Fill Message')}
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Button
            className='text-center mx-auto d-block'
            type='submit'
            value='Send'
            sx={{
              color: 'black',
              border: '1px solid rgba(50,50,50,0.3)',
              marginTop: '15px',
              padding: '10px 25px',
            }}
          >
            {t('Send')}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export { MainPageContact };
