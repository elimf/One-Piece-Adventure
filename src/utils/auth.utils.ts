export class  AuthUtils {
  public isPasswordSecure = (password: string) => {
    // Expression régulière pour vérifier la sécurité du mot de passe
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return passwordRegex.test(password)
  }
  public isEmailValid = (email: string) => {
    // Expression régulière pour vérifier une adresse e-mail
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
    return emailRegex.test(email)
  }
}
