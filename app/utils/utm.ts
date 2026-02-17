/*
 * Gerenciar os parâmetros UTM para rastreamento de campanhas de marketing.    
*/
import { UTMParams } from "../types/index";

const UTM_STORAGE_KEY = 'utm_params'

//  Salva UTM params no sessionStorage

export function saveUTMParams(params: UTMParams): void {

    try {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(params))
        }
    } catch (error) {
        console.warn('Não foi possível salvar os parâmetros UTM:', error);
    }
}

// Recupera UTM params do sessionStorage

export function getUTMParams(): UTMParams {

    try {
        if (typeof window !== 'undefined') {
            const storedParams = sessionStorage.getItem(UTM_STORAGE_KEY);
            if (storedParams) {
                return JSON.parse(storedParams);
            }
        }
    } catch (error) {
        console.warn('Não foi possível recuperar os parâmetros UTM:', error);
    }

    return {}
}

// Limpa UTM params do sessionStorage
export function clearUTMParams(): void {

    try {
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem(UTM_STORAGE_KEY)
        }
    } catch (error) {
        console.warn('Não foi possível limpar os parâmetros UTM:', error);
    }
}

// Gera UTM params a partir de uma URL
export function generatedUTMQueryString(params: UTMParams = {}): string {
    const utmParams = { ...getUTMParams(), ...params }

    const queryParts = Object.entries(utmParams)
        .filter(([, value]) => value !== undefined && value !== null && value !== '')
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)

    return queryParts.length > 0 ? `?${queryParts.join('&')}` : ''
}

// Extrai UTM params de uma URL e salva no sessionStorage
export function extractUTMFromURL(): UTMParams {

    const params: UTMParams = {}

    if (typeof window === 'undefined') return params

    const searchParams = new URLSearchParams(window.location.search)

    const utmKeys: (keyof UTMParams)[] = [
        'utm_source',
        'utm_mediun',
        'utm_content',
        'utm_term'
    ]

    utmKeys.forEach((key) => {
        const value = searchParams.get(key);
        if (value) {
            params[key] = value
        }
    })

    return params
}
