"use server";

import { signInFormSchema, signUpFormSchema } from "../validators";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
// import { hashSync } from "bcrypt-ts-edge";
import { prisma } from "@/db/prisma";
// import { hash } from '../encrypt';
// import { formatError } from '../utils';
import { hashSync } from "bcrypt-ts-edge";

export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    await signIn("credentials", user);

    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: "Invalid email or password" };
  }
}

export async function signOutUser() {
  await signOut();
}

//sign up user

// export async function signUpUser(prevState: unknown, formData: FormData) {
//   try {
//     const user = signUpFormSchema.parse({
//       name: formData.get("name"),
//       email: formData.get("email"),
//       password: formData.get("password"),
//       confirmPassword: formData.get("confirmPassword"),
//     });

//     const plainPassword = user.password;

//     // user.password = await hashSync(user.password)

//     await prisma.user.create({
//       data: {
//         name: user.name,
//         email: user.email,
//         password: user.password,
//       },
//     });
//     await signIn("credentials", {
//       email: user.email,
//       password: plainPassword,
//     });
//     return { success: true, message: "Signed up successfully" };
//   } catch (error) {
//     if (isRedirectError(error)) {
//       throw error;
//     }
//     return { success: false, message: "Invalid email or password" };
//   }
// }

 // Ensure this is correctly installed

export async function signUpUser(prevState: unknown, formData: FormData) {
  try {
    const user = signUpFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    const hashedPassword = hashSync(user.password); // Hash password before storing

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword, // Store hashed password
      },
    });

    await signIn("credentials", {
      email: user.email,
      password: user.password, // Sign in with original password
    });

    return { success: true, message: "Signed up successfully" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: "Invalid email or password" };
  }
}

