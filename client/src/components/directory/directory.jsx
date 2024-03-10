import MenuThumbsList from "../menuthumblist/menuthumblist";

import books from "./books";

const Directory = () => {
    return (
        <section className="menu section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <h2 className="text-center mb-lg-5 mb-4">Special Books</h2>
                    </div>

                    <div >
                        <div className="menu-thumbs">
                            <MenuThumbsList books={books} />
                            </div>
                        </div>

                    {/* Add more similar code blocks for other menu items */}

                </div>
            </div>
        </section>
    );
}

export default Directory;
