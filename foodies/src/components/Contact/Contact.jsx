import Button from '../common/Button/Button'
import { contactData, contactList } from '../../utils/constant/ContactText'
import './Contact.css';
const Contact = () => {
    const { title, subTitle } = contactData;
    return (
        <div className='contact-wrapper'>
            <div>
                <h1>
                    {title}
                </h1>
                <p>{subTitle}</p>
            </div>
            <div>
                <ul>
                    {contactList.map((item, index) => {
                        return (
                            <li key={index}>{item.spanText}
                                <a href={`${item.text}`}>{item.text}</a>
                            </li>
                        )
                    })}
                </ul>

            </div>
            <div>
                <Button text="Contact us" />
            </div>
        </div>
    )
}

export default Contact
