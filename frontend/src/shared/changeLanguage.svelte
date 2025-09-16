<script>
    let langs = ['en' , 'fr' , 'fa']
    let lang = $state(localStorage.getItem('defaultLanguage') || 'en'); 

    const switchLang = () => {
        if(lang=='en'){
            lang = 'fr'
        }
        else if(lang=='fr'){
            lang = 'fa'
        }
        else if(lang=='fa'){
            lang = 'en'
        }        
        localStorage.setItem('defaultLanguage',lang)
    }
</script>

<button onclick={switchLang} class="btn btn-raised btrn-sm btn-primary">{lang}</button>