import { FormattedMessage, IntlProvider } from 'react-intl';

const Request = (props)=> {
    const { loginAction, lang } = props;
    console.log('Request')
    return (
        <IntlProvider locale={lang} >
            <p>profile</p>
        </IntlProvider>
    )
}
export default Request