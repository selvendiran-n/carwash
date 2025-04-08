import "./tableComponentStyle.css"

export const Table = () => {

    return (
        <>

            <div className="table-container">

                <div className="table-content">

                    <div className="table-heading">
                        <h2>Customer Details</h2>
                    </div>

                    <div className="table-option-bar">

                        <div className="search-option">
                            <input type="text" id="search" placeholder="Search by First Name" />
                            <button className="table-btn">Search</button>
                        </div>

                        <div className="filter-option">

                            <select name="membership" id="membership">
                                <option value="membership-1">Membership-1</option>
                                <option value="membership-2">Membership-2</option>
                            </select>

                            <select name="location" id="location">
                                <option value="location-1">Location-1</option>
                                <option value="location-2">Location-2</option>
                            </select>

                            <select name="status" id="status">
                                <option value="active">Active</option>
                                <option value="inactive">In-Active</option>
                            </select>

                            <button className="table-btn">Filter</button>

                        </div>
                    </div>

                    <div className="table-style">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID <button className="sort-btn">⇅</button></th>
                                    <th>First Name <button className="sort-btn">⇅</button></th>
                                    <th>Last Name <button className="sort-btn">⇅</button></th>
                                    <th>Email <button className="sort-btn">⇅</button></th>
                                    <th>Membership <button className="sort-btn">⇅</button></th>
                                    <th>Location <button className="sort-btn">⇅</button></th>
                                    <th>Status <button className="sort-btn">⇅</button></th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>100</td>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@gmail.com</td>
                                    <td>Basic</td>
                                    <td>New York</td>
                                    <td>Active</td>

                                    <td>
                                        <button className="edit-btn">Edit</button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>100</td>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@gmail.com</td>
                                    <td>Basic</td>
                                    <td>New York</td>
                                    <td>Active</td>

                                    <td>
                                        <button className="edit-btn">Edit</button>
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>


        </>
    )
}
