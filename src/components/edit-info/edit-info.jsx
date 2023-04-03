import "./edit-info.css";
import { UserRole } from "../../lib/types";

const EditInfoComponent = ({
    user,
    onSubmit,
    onFieldChange,
    isReadable,
    role,
    onPressBack,
}) => {
    // const isEditable = isEditable;
    // console.log(isReadable);
    return (
        <>
            <div className="profile-form">

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit();
                    }}
                >
                                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h1>Your Profile</h1>
                    {isReadable === false && (
                        <button
                            className="user-profile-button"
                            type="button"
                            onClick={onPressBack}
                        >
                            Back
                        </button>
                    )}
                    {isReadable === true ? (
                        <div
                            style={{ display: "flex", justifyContent: "right" }}
                        >
                            <button
                                className="user-profile-button"
                                type="submit"
                                // onClick={() => toggleForm()}
                            >
                                Edit
                            </button>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                    <div className="name-input" >
                        <div>
                            <label>Your Name:</label>
                            <input
                                type="text"
                                className={isReadable && "non-readable-cursor"}
                                placeholder="Enter your first name"
                                required={isReadable}
                                autoComplete="true"
                                value={user.fullName}
                                readOnly={isReadable}
                                onChange={(e) => {
                                    onFieldChange("fullName", e.target.value);
                                }}
                            />
                        </div>
                        
                    </div>
                    <div className="name-input">
                    <div>
                            <label>Your Email:</label>
                            <input
                                type="text"
                                placeholder="Enter your Email name"
                                className={true && "non-readable-cursor"}
                                required={true}
                                autoComplete="true"
                                value={user.emailAddress}
                                readOnly={true}
                                onChange={(e) => {
                                    onFieldChange(
                                        "emailAddress",
                                        e.target.value
                                    );
                                }}
                            />
                        </div>
                    </div>
                    <div className="name-input">
                        <div>
                            <label>Date of Birth</label>
                            {isReadable ? (
                                <input
                                    type="text"
                                    required={isReadable}
                                    className={
                                        isReadable && "non-readable-cursor"
                                    }
                                    autoComplete="true"
                                    value={user.dateOfBirth}
                                    readOnly={isReadable}
                                    onChange={(e) => {
                                        onFieldChange(
                                            "dateOfBirth",
                                            e.target.value
                                        );
                                    }}
                                />
                            ) : (
                                <input
                                    type="date"
                                    placeholder="Date Of Birth"
                                    className={`${
                                        isReadable && "non-readable-cursor"
                                    } "date-of-birth "`}
                                    required={true}
                                    autoComplete="true"
                                    // max={maxDate}
                                    max={"2004-11-01"}
                                    value={user.dateOfBirth}
                                    onChange={(e) => {
                                        onFieldChange(
                                            "dateOfBirth",
                                            e.target.value
                                        );
                                    }}
                                />
                            )}
                        </div>
                        {(role === UserRole.COUNSELOR ||
                            role === UserRole.DOCTOR) && (
                            <div>
                                <label>Registration Number</label>
                                <input
                                    type="text"
                                    className={
                                        isReadable && "non-readable-cursor"
                                    }
                                    required={isReadable}
                                    autoComplete="true"
                                    value={user.registrationNumber}
                                    readOnly={isReadable}
                                    onChange={(e) => {
                                        onFieldChange(
                                            "registrationNumber",
                                            e.target.value
                                        );
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    <div className="address-input">
                        <label>Address</label>
                        <input
                            type="text"
                            className={`${
                                isReadable && "non-readable-cursor"
                            } "form-control"`}
                            required={isReadable}
                            autoComplete="true"
                            value={user.addressLine}
                            readOnly={isReadable}
                            onChange={(e) => {
                                onFieldChange("addressLine", e.target.value);
                            }}
                        />
                    </div>
                    <div className="address-input">
                        <label>City</label>
                        <input
                            type="text"
                            className={`${
                                isReadable && "non-readable-cursor"
                            } "form-control"`}
                            required={isReadable}
                            autoComplete="true"
                            value={user.city}
                            readOnly={isReadable}
                            onChange={(e) => {
                                onFieldChange("city", e.target.value);
                            }}
                        />
                    </div>
                    <div className="address-input">
                        <label>Province</label>
                        {isReadable ? (
                            <input
                                type="text"
                                className={`${
                                    isReadable && "non-readable-cursor"
                                } "form-control"`}
                                formNoValidate={isReadable}
                                autoComplete="true"
                                value={user.province}
                                readOnly={isReadable}
                                onChange={(e) => {
                                    onFieldChange("province", e.target.value);
                                }}
                            />
                        ) : (
                            <select
                                id="province"
                                style={{ marginBottom: "16px" }}
                                className="form-control"
                                name="province"
                                required={true}
                                value={user.province}
                                onChange={(e) => {
                                    onFieldChange("province", e.target.value);
                                }}
                            >
                                <option value="Quebec">Quebec</option>
                                <option value="British Columbia">
                                    British Columbia
                                </option>
                                <option value="Ontario">Ontario</option>
                                <option value="Sasketchwen">Sasketchwen</option>
                                <option value="Manitoba">Manitoba</option>
                                <option value="Alberta">Alberta</option>
                                <option value="Nova Scotia">Nova Scotia</option>
                                <option value="New Brunswik">
                                    New Brunswik
                                </option>
                            </select>
                        )}
                    </div>
                    <div className="address-input">
                        <label>Phone number</label>
                        <input
                            type="text"
                            className={`${
                                isReadable && "non-readable-cursor"
                            } "form-control"`}
                            autoComplete="true"
                            value={user.phoneNumber}
                            readOnly={isReadable}
                            onChange={(e) => {
                                onFieldChange("phoneNumber", e.target.value);
                            }}
                        />
                    </div>
                    {/* <div style={{ display: "flex", justifyContent: "center" }}>
                        <button
                            className="user-profile-button"
                            type="submit"
                            // onClick={() => toggleForm()}
                        >
                            Submit
                        </button>
                    </div> */}
                    {isReadable === false ? (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                            }}
                        >
                            <button
                                className="user-profile-button"
                                type="submit"
                                // onClick={() => toggleForm()}
                            >
                                Submit
                            </button>
                        </div>
                    ) : (
                        <></>
                    )}
                </form>
            </div>
        </>
    );
};

export default EditInfoComponent;
