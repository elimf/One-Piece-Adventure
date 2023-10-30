import { type Ref } from 'vue'
export interface UserFormTypes {
  username: Ref<string | null>
  email: Ref<string>
  password: Ref<string>
}
