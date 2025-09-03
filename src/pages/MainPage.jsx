const MainPage = () => {
    return (
        <div className="conatainer-fluid min-vh-100 bg-light py-4">
            <div className="container">
                {/* Title bar */}
                <div className="bg-white border rounded shadow-sm p-3 mb-4">
                    <div className="d-flex align-item-center">
                        enavle text box for title
                    </div>
                </div>

                {/* invoice form and tamplate grid */}
                <div className="row g-4 align-item-stretch">
                    {/* invoice form */}
                    <div className="col-12 col-lg-6 d-flex">
                        <div className="bg-white border rounded shadow-sm p-4 w-100">
                            invoice form
                        </div>
                    </div>

                    {/* template grid */}
                    <div className="col-12 col-lg-6 d-flex">
                        <div className="bg-white border rounded shadow-sm p-4 w-100">
                            trmplate grid
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default MainPage;