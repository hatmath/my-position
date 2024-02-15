import * as Localization from 'expo-localization'
import { IntlMessageFormat } from 'intl-messageformat'

const locales = {
    "fr-CA": {
            latitude: "latitude",
            longitude: "longitude",
            altitude: "attitude",
            addPosition: "Obtenir ma position",
            click : "Cliquez sur to bouton",
            sharePosition: "Partager ma position",
            home: "Accueil",
            rulesTitle: "Reqles de confidentialité",
            permission: "La permission d'accès a 6t6 refusée",
            message: "Au secour ! Je suis coincé A la position indiquée par le lien ci-dessous. Cliquez sur le lien pour afficher ma position dans google et venez me secourir svp",
            rules: "Cette application utilise vos données de localisation pour le fonctionnement de l'application. Ces données ne sont ni stockées ni partagées par nous mêmes à des personnes tiers. Les données sont partagées par vous même aux personnes de votre choix."
        },
    "en-EN": {
            latitude: "latitude",
            longitude: "longitude",
            altitude: "attitude",
            addPosition: "Add my position",
            click : "Click on the button",
            sharePosition: "Share my position",
            home: "Home",
            rulesTitle: "Privacy rules",
            permission: "Access permission has been denied",
            message: "Help! I'm stuck at the location indicated by the link below. Click on the link to display my position on Google and please come rescue me.",
            rules: "This application uses your location data for the operation of the application. This data is neither stored nor shared by us with third parties. The data is shared by you with the people of your choice."
        },
}

const i18n = (messageId, values) => {
    let locale = Localization.locale
    if (!locales[locale]) {
        locale = 'en-EN' // fallback to English
    }

    const message = locales[locale][messageId]
    const formatter = new IntlMessageFormat(message, locale)
    return formatter.format(values)
}

export default i18n


