const session = require('express-session')
const Keycloak = require('keycloak-connect')

export default class KeycloakAuth {
	private _keycloak: any
	private config:any
	constructor () {
		this._keycloak = null
		// this.config = {
		// clientId: 'nodejs-microservice',
		// bearerOnly: true,
		// serverUrl: 'http://localhost:8080/auth',
		// realm: 'Demo-Realm',
		// credentials: {
		// secret: 'AQ3raLN2xwawEfTQLpdLHh0qw0jrG8FI'
		// }
		// }
		this.config = {
			clientId: 'nodejs-microservice',
			bearerOnly: true,
			serverUrl: 'http://localhost:8080/auth',
			realm: 'Demo-Realm',
			realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAweKtm3HSf1OtVc3d+hl26Que/DtUh0LT0EJDHnqSmy1lsSXh2vK7bxlyqi1QwYq/UT0rVvQX+eK3m2kaMesQU8y+zO5rD2O+9xbfs2qjZurSA271a07Rw879p9oNugGnZiwlscnMid/j8VQwpr7wex4vhID+kB4DfVwJztW4hsHgqzRtBnu96jKC1OXgngw+Mnaj5jfG/09PD77UGELj2UiU62aIOrR3nzviNcmpUTyyBO+j37klMtq/z4DWC0iQTqOHlbarppFzu8rii3dXQfRT1A8/2ML20lYalpJQYeNev3/Kq75jjAwm/+2LsLmmhlnL8uccytkF8H6cux3dTwIDAQAB'
		}
	}

	public initKeycloak () {
		if (this._keycloak) {
			console.warn('Trying to init Keycloak again!')
			return this._keycloak
		} else {
			console.log('Initializing Keycloak...')
			const memoryStore = new session.MemoryStore()
			this._keycloak = new Keycloak({ store: memoryStore }, this.config)
			return this._keycloak
		}
	}

	public auth ():any {
		return this.initKeycloak().middleware()
	}

	public getKeycloak () {
		if (!this._keycloak) {
			console.error('Keycloak has not been initialized. Please called init first.')
		}
		return this._keycloak
	}
}
