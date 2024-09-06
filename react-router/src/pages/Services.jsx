import Card from "../components/common/Card/Card"
import { servicesData } from "../utils/constant/Services"

const Services = () => {
    return (
        <div>
            <div className='card-box'>
                {
                    servicesData.map((item, index) => {
                        return (
                            <Card key={index} data={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services
