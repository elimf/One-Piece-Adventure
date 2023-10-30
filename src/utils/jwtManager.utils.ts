import axios from 'axios'
export class JwtTokenManager {
  private tokenKey = 'jwtToken'
  private tokenKeyRefresh = 'jwtTokenRefresh'

  // Stocke le token dans le stockage local
  public setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token)
  }
  public setRefreshToken(tokenRefresh: string): void {
    localStorage.setItem(this.tokenKeyRefresh, tokenRefresh)
  }

  // Récupère le token depuis le stockage local
  public getToken(): string | null {
    return localStorage.getItem(this.tokenKey)
  }
  public getTokenRefresh(): string | null {
    return localStorage.getItem(this.tokenKeyRefresh)
  }

  // Supprime le token du stockage local
  public removeToken(): void {
    localStorage.removeItem(this.tokenKey)
  }
  public removeTokenRefresh(): void {
    localStorage.removeItem(this.tokenKeyRefresh)
  }
  public cleaner(): void {
    localStorage.removeItem(this.tokenKeyRefresh)
    localStorage.removeItem(this.tokenKey)
  }

  // Vérifie si le token est valide
  public isTokenValid(token: string): boolean {
    if (!token) return false
    const decodedToken = JSON.parse(atob(token.split('.')[1]))
    console.log(decodedToken.exp * 1000 > Date.now())
    return decodedToken.exp * 1000 > Date.now()
  }

  public async refreshToken(): Promise<string | null> {
    const token = this.getTokenRefresh()
    if (!token) {
      return null
    }
    // Faites une requête au serveur pour rafraîchir le token
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/refreshToken`, {
      token: token
    })

    if (response.status === 200 && response.data && response.data.newToken) {
      const newToken = response.data.newToken
      this.setToken(newToken)
      return newToken
    } else {
      return null
    }
  }
}
