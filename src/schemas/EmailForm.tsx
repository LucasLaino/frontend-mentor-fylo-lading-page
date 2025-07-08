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
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="exemple@exemple.com"
          className={styles.InputEmail}
        />
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email.message}</p>
        )}

        <button type="submit" className={styles.BtnGetStarted}>Get Started For Free</button>
      </form>
  )
}

export default EmailForm