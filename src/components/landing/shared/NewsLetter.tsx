"use client"
import React, { useMemo, useRef } from 'react'

import img from '@/assets/images/landing/newsletter.png'
import img3 from '@/assets/images/landing/newsletter_3.png'

import Image from "next/image"
import { Button, Input, message } from "antd"
import { RevealAnimation } from "@/components/shared"
import { useTranslations } from "next-intl";
import * as Yup from 'yup';
import { ERRORS_STR } from "@/services/constants"
import { useFormik } from "formik"
import { subscribeToNewsletter } from "@/services/api"
const NewsLetter = () => {
  const t = useTranslations();

  const initialValues = useMemo(() => {
    return {
      email: '',
    };
  }, []);

  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      email: Yup.string().required(ERRORS_STR.FORM_REQUIRED).email(ERRORS_STR.FORM_EMAIL),
    });
  }, []);

  const formik = useFormik({
    validateOnMount: false,
    initialValues,
    validationSchema,
    onSubmit: async (values) => {

      try {
        // SUBMIT API 

        await subscribeToNewsletter({
          email: values.email,
        })

        message.success(t('subscribe_success'))
        formik.resetForm()

      } catch (error: any) {
        const errorMsgs = error?.response?.errors
        if (Object.keys(errorMsgs).length) {

          Object.keys(errorMsgs).forEach((key: any) => {
            // eslint-disable-next-line no-prototype-builtins
            const errMsg = errorMsgs[key]
            const msg = Array.isArray(errMsg) ? errMsg[0] : errMsg
            formik.setFieldError(key, msg)
          })
        }
        message.error(error?.response?.data?.message || ERRORS_STR.WENT_WRONG)

      }

    },
  });

  return (
    <section className="dark bg-primary relative overflow-hidden pt-8 lg:pt-10">

      <RevealAnimation>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            <div className="lg:col-span-2 pb-8 lg:pb-10">
              <h2 className="text-3xl lg:text-4xl font-bold">
                {t('subscribe_with_us')}
              </h2>
              <div className="mt-4 lg:mt-6 flex items-center gap-2">
                <Input placeholder={t('e-mail')} className="max-w-lg !rounded-full"
                  name="email" value={formik.values.email} onChange={formik.handleChange}
                  disabled={formik.isSubmitting}
                />
                <Button className="!bg-warning   !font-bold !rounded-full !px-6"
                  loading={formik.isSubmitting}
                  disabled={formik.isSubmitting}
                  onClick={() => formik.handleSubmit()}
                >
                  {t('send')}
                </Button>
              </div>
              {formik.errors.email && formik.touched.email && <p className="text-red-200 mt-2">{formik.errors.email}</p>}
            </div>
            <div className="hidden md:flex items-center justify-center relative"  >
              <Image src={img} alt='guard art image' className="relative ltr:-scale-x-100 z-[1] w-full  object-contain !h-auto max-h-52 translate-y-2" />

              <Image src={img3} alt='guard art image' className="absolute bottom-0  w-80  object-contain !h-auto max-h-52 translate-y-2" />
            </div>

          </div>
        </div>
      </RevealAnimation>

    </section>
  )
}

export default NewsLetter