import { templates } from "../assets/asset";

const TemplateGrid = ({onTemplateClick}) => {
    return(
        <div className="incoiceform container py-4">
            <div className="mb-4">
                <h5>Templates</h5>
            </div> 
            <div className="row g-3">
                {templates.map(({id, lable, image}) => (
                    <div className="col-12 col-sm-6 col-lg-4" key={id}>
                        <div className="border rounded shadow-sm overflow-hidden template-hover cursor-pointer"
                        onClick={() => onTemplateClick(id)}>
                            <img src={image} alt={lable} />
                            <div className="py-2 text-center fw-medium">
                                {lable}
                            </div>
                        </div>
                    </div>
                ))}
            </div>      
        </div>
    )
}

export default TemplateGrid;