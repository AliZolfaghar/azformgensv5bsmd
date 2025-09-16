import { derived } from 'svelte/store'
import { languageStore } from '../stores/languageStore'
import { get } from 'svelte/store'

const translation = get(languageStore)

export const t = (word) => {
    console.log(word)
    console.log(translation)
    console.log(translation[word])
    return translation[word] ? translation[word] : word ; 
}
