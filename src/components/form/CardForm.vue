<template>
  <div class="absolute w-2/6 h-2/6 top-1/4 left-1/3">
    <div class="bg-white shadow-md p-4 rounded-lg opacity-75">
      <div class="m-2">
        <h1 class="text-xl text-black text-center font-mono">
          {{ $props.page === 'register' ? 'Register' : 'Login' }}
        </h1>
      </div>
      <form
        name="user-auth-form"
        id="userAuthForm"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleFormSubmit"
        class="w-full max-w-lg"
      >
        <div v-if="$props.page === 'register'" class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="username"
              v-model="newForm.username.value"
              type="text"
            />
            <p class="text-red-500 text-xs" v-if="errors.username">{{ errors.username.value }}</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="email"
              v-model="newForm.email.value"
              type="email"
            />
            <p class="text-red-500">{{ errors.email.value }}</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="password"
              type="password"
              v-model="newForm.password.value"
              placeholder="******************"
            />
            <p class="text-red-500">{{ errors.password.value }}</p>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:justify-between sm:px-6">
          <a
            type="button"
            href="/"
            class="mt-3 inline-flex w-full justify-center rounded-md bg-red px-3 py-2 text-sm font-semibold text-red-900 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-50 sm:mt-0 sm:w-auto"
          >
            Back
          </a>
          <button
            type="submit"
            class="inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
          >
            Confirm
          </button>
        </div>
        <router-link
          :to="$props.page === 'register' ? '/login' : '/register'"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline text-center"
        >
          {{
            $props.page === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"
          }}
        </router-link>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import axios, { AxiosError, type AxiosResponse } from 'axios'
import Swal from 'sweetalert2'
import type { ErrorMessagesAuth } from '@/types/auth/errorMessagesAuth.types'
import type { UserFormTypes } from '@/types/auth/userFormTypes.utils'
import { AuthUtils } from '@/utils/auth.utils'
import { JwtTokenManager } from '@/utils/jwtManager.utils'

export default {
  props: {
    page: String
  },

  setup(props: any) {
    const newForm: UserFormTypes = {
      username: ref(null),
      email: ref(''),
      password: ref('')
    }

    const errors: ErrorMessagesAuth = {
      username: ref(''),
      email: ref(''),
      password: ref('')
    }

    const handleFormSubmit = () => {
      // Réinitialisation des messages d'erreur à une chaîne vide
      errors.email.value = ''
      errors.password.value = ''
      errors.username.value = ''

      let hasErrors = false
      const authUtils = new AuthUtils()
      if (props.page === 'register') {
        if (!newForm.username.value || !newForm.username.value.trim()) {
          errors.username.value = 'Username is required.'
          hasErrors = true
        }
      }

      if (!newForm.email.value || !newForm.email.value.trim()) {
        errors.email.value = 'Email is required.'
        hasErrors = true
      } else if (!authUtils.isEmailValid(newForm.email.value)) {
        errors.email.value = 'Invalid email format.'
        hasErrors = true
      }

      if (!newForm.password.value || !newForm.password.value.trim()) {
        errors.password.value = 'Password is required.'
        hasErrors = true
      } else if (!authUtils.isPasswordSecure(newForm.password.value)) {
        errors.password.value =
          'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.'
        hasErrors = true
      }

      if (hasErrors) {
        return
      }

      // Construire l'URL du backend en utilisant la variable d'environnement
      const backendUrl = import.meta.env.VITE_BACKEND_URL
      const tokenManager = new JwtTokenManager()
      // Définir l'URL de la requête en fonction de la page
      let requestUrl = ''
      if (props.page === 'register') {
        requestUrl = `${backendUrl}/auth/register`
      } else if (props.page === 'login') {
        requestUrl = `${backendUrl}/auth/login`
      }

      // Effectuer la requête Axios
      axios
        .post(requestUrl, {
          username: newForm.username.value,
          email: newForm.email.value,
          password: newForm.password.value
        })
        .then((response: AxiosResponse<any>) => {
          const successMessage =
            props.page === 'register' ? 'Account created successfully !' : 'Login !'
          if (response.status === 201) {
            Swal.fire({
              icon: 'success',
              title: 'Succès',
              text: successMessage,
              timer: 3000
            })
            console.log(response.data.access_token)
            if (props.page === 'login') {
              tokenManager.cleaner()
              tokenManager.setToken(response.data.access_token)
              tokenManager.setRefreshToken(response.data.refresh_token)
              window.location.href = '/game'
            }
            // Réinitialiser les valeurs du formulaire
            newForm.username.value = null
            newForm.email.value = ''
            newForm.password.value = ''
          } else {
            Swal.fire({
              icon: 'error',
              title: response.statusText || 'Error',
              text: response.data.message,
              timer: 3000
            })
          }
        })
        .catch((error: AxiosError<any>) => {
          Swal.fire({
            icon: 'error',
            title: error.response?.statusText || 'Error',
            text: error.response?.data.message || 'An error has occurred.',
            timer: 3000
          })
        })
    }

    return {
      newForm,
      errors,
      handleFormSubmit
    }
  }
}
</script>
@/types/auth/errorMessagesAuth.types
