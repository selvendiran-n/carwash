import { locationData, membershipData, submittedFormData } from "../../constant/constant"
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

                        {/*Search by first name */}
                        <div className="search-option">
                            <input type="text" id="search" placeholder="Search by First Name" />
                            <button className="table-btn">Search</button>
                        </div>

                        {/* Filter by Membership */}
                        <div className="filter-option">
                        
                            <select name="membership" id="membership">
                                <option value="">Select</option>
                                {membershipData.map((data) => (
                                    <option key={data.membershipId} value={data.membershipId}>{data.membershipType}</option>
                                ))}
                            </select>
                            {/* Filter by Location */}
                            <select name="location" id="location">
                                <option value="">Select</option>
                                {locationData.map((data) => (
                                    <option key={data.locationId} value={data.locationId}>
                                        {data.location}
                                    </option>
                                ))}
                            </select>
                            {/* Filter by Status (Active/Inactive) */}
                            <select name="status" id="status">
                                <option value="">Select</option>

                                <option value="active">Active</option>
                                <option value="inactive">In-Active</option>
                            </select>

                            <button className="table-btn">Filter</button>

                        </div>
                    </div>

                    <div className="table-style">
                        <table>
                        {/* Table header with sortable columns */}
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
                            {/* Table body rendering rows from submittedFormData */}
                            <tbody>
                                {submittedFormData.map((data, index) => (
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.firstName}</td>
                                        <td>{data.lastName}</td>
                                        <td>{data.email}</td>
                                        <td>{data.membership}</td>
                                        <td>{data.location}</td>
                                        <td>{data.status == true ? "Active" : "Inactive"}</td>
                                        <td>
                                            <button className="edit-btn">Edit</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>


        </>
    )
}
