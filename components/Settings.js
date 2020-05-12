export function Settings(element) {

    let settings = {
        showStandardCursor: false,
    }


    document
        .querySelectorAll('input.configuration')
        .forEach((element) => element.addEventListener('change', handleSettingsChange))


    function handleSettingsChange(event){

        const settingsFunctions = {
            showStandardCursor: (event) => {
                settings[event.target.id] = event.target.checked
                document.querySelector('#board').style.cursor = event.target.checked ? 'auto' : 'none'
            }
        }

        settingsFunctions[event.target.id](event)
    }



}