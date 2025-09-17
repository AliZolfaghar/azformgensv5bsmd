<script>
    import { lang } from "../lib/i18n/i18n.js"

    let langs = ['en' , 'fr' , 'fa']
    //let lang = $state(localStorage.getItem('defaultLanguage') || 'en'); 

    const switchLang = () => {
        if($lang=='en'){
            lang.set('fr')
        }
        else if($lang=='fr'){
            lang.set('fa')
        }
        else if($lang=='fa'){
            lang.set('en')
        }        
        // localStorage.setItem('defaultLanguage',lang)
    }
</script>

<button onclick={switchLang} class="btn btn-sm btn-raised btrn-sm btn-dark">{$lang}</button>