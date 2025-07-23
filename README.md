# Frontend Mentor - Fylo dark theme landing page solution

Essa é a solução do [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). 

## Table of contents

- [Overview](#overview)
  - [Preview](#preview)
  - [Links](#links)
- [Processo](#processo)
  - [Construído Com](#construido-com)
  - [O Que eu Aprendi](#o-que-eu-aprendi)
  - [Recursos Úteis](#recursos-úteis)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)

## Overview

### Preview

![](./src/assets/images/fylo-dark-theme.gif)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## Processo

### Construído Com

- React
- TypeScript
- CSS Modules
- Flexbox
- Zod Library
- React-hook-form
- Mobile-first workflow
- Vite

### O que Eu Aprendi

Nesse projeto usei o TypeScript na prática pela primeira vez e utilizei junto ao React para criar toda a estrura do projeto. Durante o desenvolvimento, conheci a biblioteca Zod, ela é útil para criar o schema de validação de campos em formulários. Nesse projeto, combinei o zod junto ao reack-hook-form e a tipagem estática do TypeScript para criar um schema de validação robusto e de qualidade. Abaixo está a lógica de validação utilizando as ferramentas citadas. 

```
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import styles from './EmailForm.module.css'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const emailSchema = z.object({
  email: z
    .string()
    .nonempty("Please enter a valid email address")
    .regex(emailRegex, "Please enter a valid email address"),
})

type EmailFormData = z.infer<typeof emailSchema>

const EmailForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema)
  })

  const onSubmit = (data: EmailFormData) => {
    console.log("Email sent successfully!", data.email)
    alert("Email sent successfully!")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.EmailForm}>
      <div className={styles.inputContainer}>
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="exemple@exemple.com"
          className={styles.inputEmail}
        />
        {errors.email && (
          <p className={styles.errorMessage}>{errors.email.message}</p>
        )}
      </div>
      <button type="submit" className={styles.BtnGetStarted}>Get Started For Free</button>
    </form>
  )
}

export default EmailForm
```

### Recursos Úteis

- [Zod Library](https://zod.dev/) - O Zod combinado a inferência de tipos do TypeScript foi muito útil para criar o schema de validação do input de email.

## Autor

- Frontend Mentor - [@LucasLaino](https://www.frontendmentor.io/profile/LucasLaino)
- LinkedIn - [@lucaslaino](https://www.linkedin.com/in/lucaslaino/)

## Agradecimentos

Agradeço ao Gustavo Silva e ao Pablo Viana por terem me auxiliado durante o desenvolvimento do projeto me apresentado a biblioteca zod, que tornou meu código mais qualitativo e robusto.