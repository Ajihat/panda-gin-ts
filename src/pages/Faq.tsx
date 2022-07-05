import { FC } from 'react'
//components
import Header from '../components/Header'

const Faq: FC = () => {
    return (
        <div className="faq">
            <Header
                smallTitle="A question?"
                bigTitle="Frequently Asked Questions"
            />
        </div>
    )
}

export default Faq