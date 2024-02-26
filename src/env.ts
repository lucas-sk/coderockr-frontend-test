import { z } from 'zod'

export const envSchema = z.object({
  VITE_API_URL: z.string(),
})
console.log(import.meta.env)

export const env = envSchema.parse(import.meta.env)
