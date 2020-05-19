export function Settings() {

    let settings = {
        showStandardCursor: false,
        showCustomCursor: true,
        askToCleanAll: true,
    }


    document
        .querySelectorAll('input.configuration')
        .forEach((element) => element.addEventListener('change', handleSettingsChange))


    function handleSettingsChange(event){

        const settingsFunctions = {
            showStandardCursor: (event) => {
                settings[event.target.id] = event.target.checked
                document.querySelector('#board').style.cursor = event.target.checked ? 'auto' : 'none'
            },
            showCustomCursor: (event) => {
                settings[event.target.id] = event.target.checked
                document.querySelector('#cursor').style.visibility = event.target.checked ? '' : 'hidden'
            },
            askToCleanAll: event => {
                settings[event.target.id] = event.target.checked

            }
        }

        settingsFunctions[event.target.id](event)
    }

    return settings



}